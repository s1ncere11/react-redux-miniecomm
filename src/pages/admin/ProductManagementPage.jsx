import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { axiosInstance } from "@/lib/axios";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  FileKeyIcon,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";

const ProductManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  const [hasNextPage, setHasNextPage] = useState(false);

  const [searchProductName, setSearchProductName] = useState("");

  const [multipleSelectedId, setMultipleSelectedId] = useState([]);

  const handleNextPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) + 1);
    setSearchParams(searchParams);
  };

  const handlePrevPage = () => {
    searchParams.set("page", Number(searchParams.get("page")) - 1);
    setSearchParams(searchParams);
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        params: {
          _per_page: 5,
          _page: Number(searchParams.get("page")),
          name: searchParams.get("search"),
        },
      });
      console.log(response.data);
      setProducts(response.data.data);
      setHasNextPage(Boolean(response.data.next));
    } catch (err) {
      console.log(err);
    }
  };

  const searchProduct = () => {
    if (searchProductName) {
      searchParams.set("search", searchProductName);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  const handleDeleteProduct = async () => {
    const confirmDelete = confirm("Yakin menghapus product ini?");

    if (!confirmDelete) return;

    const deletePromises = multipleSelectedId.map((idProduct) => {
      return axiosInstance.delete("/products/" + idProduct);
    });

    try {
      await Promise.all(deletePromises);
      alert(`Success delete ${multipleSelectedId.length} products`);
      searchParams.set("page", Number(1));
      setSearchParams(searchParams);
      setMultipleSelectedId([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedId = (idProduct, checked) => {
    if (checked) {
      const prevSelected = [...multipleSelectedId];
      prevSelected.push(idProduct);
      setMultipleSelectedId(prevSelected);
      console.log(prevSelected);
    } else {
      const productIdIndex = multipleSelectedId.findIndex((id) => {
        return id == idProduct;
      });

      const prevSelected = [...multipleSelectedId];
      prevSelected.splice(productIdIndex, 1);

      setMultipleSelectedId(prevSelected);
      console.log(prevSelected);
    }
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      fetchProducts();
    }
  }, [searchParams.get("page"), searchParams.get("search")]);

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <div>
      <AdminLayout
        title="Product Management"
        description="Manage our Products"
        sideButton={
          <div className="flex gap-2">
            {multipleSelectedId.length ? (
              <Button onClick={handleDeleteProduct} variant="destructive">
                Delete {multipleSelectedId.length} Product
              </Button>
            ) : null}
            <Link to="/admin/products/create">
              <Button>
                <IoAdd className="w-6 h-6 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>
        }
      >
        <div className="mb-8">
          <Label>Search Product</Label>
          <div className="flex gap-4">
            <Input
              placeholder="Search Product..."
              value={searchProductName}
              onChange={(e) => {
                setSearchProductName(e.target.value);
              }}
              className="max-w-[400px]"
            />
            <Button onClick={searchProduct}>Search</Button>
          </div>
        </div>
        <Table className="p-4 border rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox
                      onCheckedChange={(checked) =>
                        handleSelectedId(product.id, checked)
                      }
                      checked={multipleSelectedId.includes(product.id)}
                    />
                  </TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    Rp. {product.price.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Link to={"/admin/products/edit/" + product.id}>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-6 h-6" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <Button
                disabled={searchParams.get("page") == 1}
                onClick={handlePrevPage}
                variant="ghost"
              >
                <ChevronLeft className="w-6 h-6 mr-2" /> Previous
              </Button>
            </PaginationItem>

            <PaginationItem className="mx-8 font-semibold">
              Page {searchParams.get("page")}
            </PaginationItem>

            <PaginationItem>
              <Button
                disabled={!hasNextPage}
                onClick={handleNextPage}
                variant="ghost"
              >
                Next
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </AdminLayout>
    </div>
  );
};

export default ProductManagementPage;
