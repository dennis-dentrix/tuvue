import Header from "./Header";
import Footer from "./Footer";
// import Menu from "../features/menu/Menu";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="bg-grey px-4 cursor-default overflow-hidden ">
      <Header />

      <main className="">
        {/* <Menu /> */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
