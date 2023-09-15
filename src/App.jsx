import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Navigate } from "react-router-dom";
// import Header from "./ui/Header";
import Menu from "./features/menu/Menu";
import Listing from "./features/menu/Listing";
import Cart from "./features/cart/Cart";
import ProductCard from "./features/order/ProductCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="/menu" />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/listing" element={<Listing />} />
          <Route path="/menu/cart" element={<Cart />} />
          <Route path="/menu/product" element={<ProductCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
