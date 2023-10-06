import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" cursor-default h-screen">
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
