import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="*" Component={PageNotFound} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
