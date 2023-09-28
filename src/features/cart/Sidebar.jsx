import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-full ">
      <div className="w-full flex flex-col gap-3 shadow-green shadow-md ">
        <div className="flex flex-col items-center gap-2 bg-white px-3 py-2 rounded-sm">
          <div className="absolute translate-y-[-2rem]">
            <Avatar sx={{ width: "3rem", height: "3rem" }} />
          </div>

          <p className="text-green font-bold mt-[1.5rem] tracking-wide">
            Dennis Kyusya
          </p>
        </div>

        <div className="flex flex-col bg-white px-3 py-2 rounded-sm">
          <NavLink
            to="/cart"
            className="text-black tracking-wide cursor-pointer"
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className="text-black tracking-wide cursor-pointer"
          >
            Orders
          </NavLink>
        </div>

        <div className="flex flex-col bg-white px-3 py-2 rounded-sm">
          <NavLink
            to="/notifications"
            className="text-black tracking-wide cursor-pointer"
          >
            Notifications
          </NavLink>

          <NavLink
            to="/favourites"
            className="text-black tracking-wide cursor-pointer"
          >
            favourites
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
