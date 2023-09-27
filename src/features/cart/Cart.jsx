import { Button } from "../../ui/Button";
import { CartItem } from "./CartItem";

function Cart() {
  return (
    <div>
      <div className="flex flex-col gap-3 mx-3 ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <div className="flex justify-between items-end gap-4 bg-maroon rounded-sm text-white px-4 py-6">
          <div>
            <h3 className="text-lg ">Buy</h3>
            <p className="text-black font-semibold">
              Total:{" "}
              <span className="text-grey font-bold tracking-wide">
                kes 5000
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
