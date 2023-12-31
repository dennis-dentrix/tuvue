import { ChevronLeft } from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";

function AdsSidebar() {
  const navigate = useNavigate();
  return (
    <div className=" flex md:flex-col md:gap-6 shadow-green shadow-md md:h-screen w-full">
      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-sm">
        <div onClick={() => navigate(-1)}>
          {" "}
          <ChevronLeft />{" "}
        </div>

        <p className="hidden md:block  text-green font-bold tracking-wide">
          Ads Page
        </p>
      </div>

      <div className="flex  justify-between w-full md:flex-col bg-white px-3 py-2 rounded-sm">
        <NavLink
          to="/myads/all"
          className="text-black tracking-wide cursor-pointer"
        >
          My Ads
        </NavLink>
        <NavLink
          to="/myads/orders"
          className="text-black tracking-wide cursor-pointer"
        >
          All Orders
        </NavLink>
        <NavLink
          to="/myads/pending"
          className="text-black tracking-wide cursor-pointer"
        >
          Pending Orders
        </NavLink>
        <NavLink
          to="/myads/completed"
          className="text-black tracking-wide cursor-pointer"
        >
          Completed Orders
        </NavLink>
      </div>
    </div>
  );
}

export default AdsSidebar;
