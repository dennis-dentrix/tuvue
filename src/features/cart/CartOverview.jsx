import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "./Cartslice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  //   const totalCartprice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="text-stone sm-px-6 flex items-center justify-betweenpx-4 py-4 text-sm uppercase placeholder-gray-200 md:text-base">
      <Link to="/cart">
        <p className="space-x-4 font-semibold text-black sm:space-x-6 tracking-wider">
          <span>Cart : {totalCartQuantity} </span>
        </p>
      </Link>
    </div>
  );
}

export default CartOverview;
