import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" cursor-default h-screen">
      <Header />

      <main className="px-8 py-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
