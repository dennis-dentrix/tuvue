import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="flex items-center gap-3">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="text-green text-lg font-bold"
        />{" "}
        <span className="text-black font-semibold text-xl">Cart</span>
      </h1>
    </div>
  );
}

export default Cart;
