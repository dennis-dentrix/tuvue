import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Listing from "./features/menu/Listing";
import ProductCard from "./features/order/ProductCard";
import Notifications from "./features/cart/Notifications";
import Favourites from "./features/cart/Favourites";
import CartLayout from "./features/cart/CartLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Post from "./pages/Post";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/menu" />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/listing" element={<Listing />} />
            <Route path="selling" element={<Post />} />

            <Route element={<CartLayout />}>
              <Route index element={<Navigate replace to="/cart" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>

            <Route path="/menu/product" element={<ProductCard />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="bottom-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 12px",
            backgroundColor: "var(--color-grey)",
            color: "var(--color-black)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
