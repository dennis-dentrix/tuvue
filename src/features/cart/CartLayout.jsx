import { useNavigate } from "react-router-dom";
import CartPages from "./CartPages";
import Sidebar from "./Sidebar";
import { ArrowLeft } from "react-bootstrap-icons";

function CartLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 mb-4">
        <div onClick={() => navigate(-1)}>
          {" "}
          <ArrowLeft />
        </div>
        <h1>Cart</h1>
      </div>

      <div className="flex  gap-4 w-full">
        <div className="hidden sm:w-1/3 sm:block  ">
          <Sidebar />
        </div>

        <div className="w-full sm:w-2/3">
          <CartPages />
        </div>
      </div>
    </div>
  );
}

export default CartLayout;
