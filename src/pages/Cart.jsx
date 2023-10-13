import { Button } from "../ui/Button";
import { CartItem } from "../features/cart/CartItem";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../features/cart/Cartslice";

function Cart() {
  const cartData = useSelector(getCart);
  console.log(cartData);
  const totalPrice = useSelector(getTotalCartPrice);
  return (
    <div className="px4 py-2">
      <div className="flex flex-col gap-3 mx-3 ">
        {cartData.map((cart) => {
          return <CartItem key={cart.id} cart={cart} />;
        })}

        <div className="flex justify-between items-end gap-4 bg-maroon rounded-sm text-white px-4 py-6">
          <div>
            <h3 className="text-lg ">Buy</h3>
            <p className="text-black font-semibold">
              Total:{" "}
              <span className="text-grey font-bold tracking-wide">
                kes {totalPrice}
              </span>
            </p>
          </div>
          <div className=" ">
            <Button type="primary">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
