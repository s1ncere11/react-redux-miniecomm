import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    src: "",
    stock: 0,
  });
  const [loading, setLoading] = useState(true);
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/products/" + params.id);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-8">
      <div className="grid grid-cols-2 gap-8">
        {loading ? (
          <Skeleton className="w-full h-[582]" />
        ) : (
          <img src={product.src} alt={product.name} className="w-full" />
        )}

        <div className="flex flex-col justify-center gap-1">
          {loading ? (
            <Skeleton className="w-[250px] h-[20px]" />
          ) : (
            <h1 className="text-xl">{product.name}</h1>
          )}

          {loading ? (
            <Skeleton className="w-[250px] h-[40px]" />
          ) : (
            <h3 className="text-3xl font-bold">
              Rp. {product.price.toLocaleString("id-ID")}
            </h3>
          )}

          {loading ? (
            <Skeleton className="w-[350px] h-[120px]" />
          ) : (
            <p className="mt-4 font-semibold text-md text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              optio quisquam nemo non expedita minus suscipit sunt praesentium.
            </p>
          )}

          <div className="flex items-center gap-3 mt-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 hover:bg-sky-300"
            >
              <IoIosRemove />
            </Button>
            <p className="text-xl">{quantity}</p>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 hover:bg-sky-300 "
            >
              <IoIosAdd />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button className="w-full" size="lg">
              Add to Cart
            </Button>
            <Button size="icon" variant="ghost">
              <IoHeartOutline className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default DetailProduct;
