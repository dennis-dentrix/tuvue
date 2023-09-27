import Header from "./Header";
import Footer from "./Footer";
// import Menu from "../features/menu/Menu";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className=" px-4 cursor-default h-screen">
      <Header />

      <main>
        {/* <Menu /> */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
