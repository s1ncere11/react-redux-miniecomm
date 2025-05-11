import ProductForm from "@/components/form/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    src: "",
    stock: 0,
  });
  const params = useParams();

  const handleEditProduct = async (values) => {
    try {
      console.log(values);
      await axiosInstance.patch("/products/" + params.id, {
        name: values.name,
        price: values.price,
        stock: values.stock,
        src: values.imgUrl,
      });
      alert("Product edited");
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };
  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get("/products/" + params.id);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <AdminLayout title="Edit Product Page" description="Edit your own product">
      {product.id ? (
        <ProductForm
          onSubmit={handleEditProduct}
          cardTitle={"Edit Product " + product.name}
          buttonTitle="Edit Product"
          defaultName={product.name}
          defaultPrice={product.price}
          defaultStock={product.stock}
          defaultImgUrl={product.src}
        />
      ) : null}
    </AdminLayout>
  );
};

export default EditProductPage;
