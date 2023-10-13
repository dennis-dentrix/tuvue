import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function CartLayout() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex  gap-4 w-full">
        <div className="hidden sm:w-1/3 sm:block h-screen ">
          <Sidebar />
        </div>

        <div className="w-full sm:w-2/3">
          <div className="h-full w-full ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartLayout;
