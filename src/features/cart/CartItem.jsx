import { Button } from "../../ui/Button";
import img from "/fish-4.jpg";

export function CartItem() {
  return (
    <div className="flex gap-4 bg-white rounded-md  px-4 py-2 shadow-green shadow-md ">
      <img src={img} alt="" className="w-24 rounded-md" />

      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-bold text-black tracking-wider">Tilapia</h1>

        <p className="text-green text-xs">
          Kes. 200 <span>/500 gram</span>
        </p>

        <div className="flex gap-2 text-xs">
          <p className="px-2 py-1 bg-grey rounded-sm">Delivered</p>
          <p className="px-2 py-1 bg-grey rounded-sm">Lake Victoria</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-black">Kisumu, Kenya</p>

          <Button type="tert">Delete</Button>
        </div>
      </div>
    </div>
  );
}
