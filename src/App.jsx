import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Navigate } from "react-router-dom";
// import Header from "./ui/Header";
import Menu from "./features/menu/Menu";
import Listing from "./features/menu/Listing";
import Cart from "./features/cart/Cart";
import ProductCard from "./features/order/ProductCard";
import Order from "./features/order/Order";
import Notifications from "./features/cart/Notifications";
import Favourites from "./features/cart/Favourites";
import CartLayout from "./features/cart/CartLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="/menu" />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/listing" element={<Listing />} />

          <Route path="/profile" element={<CartLayout />}>
            <Route index element={<Navigate replace to="/profile/cart" />} />
            <Route path="/profile/cart" element={<Cart />} />
            <Route path="/profile/orders" element={<Order />} />
            <Route path="/profile/notifications" element={<Notifications />} />
            <Route path="/profile/favourites" element={<Favourites />} />
          </Route>

          <Route path="/menu/product" element={<ProductCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
