import { Outlet } from "react-router-dom";
import AdsSidebar from "./AdsSidebar";

export default function AdsLayout() {
  return (
    // <div className="flex flex-col gap-4 w-full">

    <div className="flex flex-col md:flex-row  gap-4 w-full">
      <div className="md:w-1/4 w-full">
        <AdsSidebar />
      </div>

      <div className="w-full py-2">
        <Outlet />
      </div>
    </div>
  );
}
