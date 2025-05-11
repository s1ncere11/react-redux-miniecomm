import ProductForm from "@/components/form/ProductForm";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateProduct = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      await axiosInstance.post("/products", {
        name: values.name,
        price: values.price,
        stock: values.stock,
        src: values.imgUrl,
      });
      alert("Product successful created");
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AdminLayout title="Create Product Page" description="Add new product">
      <ProductForm
        onSubmit={handleCreateProduct}
        cardTitle="Create Your Product"
        buttonTitle={loading ? "Loading..." : "Create Product"}
        isLoading={loading}
      />
    </AdminLayout>
  );
};

export default CreateProductPage;
