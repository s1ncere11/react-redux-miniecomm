import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import CreateProductPage from "./pages/admin/CreateProductPage";
import EditProductPage from "./pages/admin/EditProductPage";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {!location.pathname.startsWith("/admin") ? <Header /> : null}

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="*" Component={PageNotFound} />
        <Route path="/product/:id" Component={DetailProduct} />

        <Route path="/admin">
          <Route path="products" Component={ProductManagementPage} />
          <Route path="products/create" Component={CreateProductPage} />
          <Route path="products/edit/:id" Component={EditProductPage} />
        </Route>
        <Route path="/login" Component={Login} />
      </Routes>
      {!location.pathname.startsWith("/admin") ? <Footer /> : null}
    </>
  );
}

export default App;
