import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantityById } from "./Cartslice";

export function CartItem({ cart }) {
  const { itemId, image, name, totalPrice, boughtWeight, source } = cart;
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 bg-white rounded-md  px-4 py-2 shadow-green shadow-md sm:hover:scale-[1.03] hover:shadow-orange transition-all duration-300">
      <img src={image} alt="" className="w-20 rounded-md" />

      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-bold text-black tracking-wider">{name}</h1>

        <p className="text-green text-sm">
          Kes. {totalPrice} |<span>weight: {boughtWeight} grams</span>
        </p>

        <div className="flex gap-2 text-xs">
          <p className="px-2 py-1 bg-grey rounded-sm">Delivered</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-black">{source}, Kenya</p>

          <button
            className="inline-block font-semibold transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-maroon text-grey text-sm border border-maroon rounded-md tracking-wider px-2 py-1 bg-maroon "
            onClick={() => dispatch(deleteItem(itemId))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// export function CartItem() {
//   return (
//     <div className="flex gap-4 bg-white rounded-md  px-4 py-2 shadow-green shadow-md sm:hover:scale-[1.03] hover:shadow-orange transition-all duration-300">
//       <img src={img} alt="" className="w-24 rounded-md" />

//       <div className="flex flex-col gap-2 w-full">
//         <h1 className="font-bold text-black tracking-wider">Tilapia</h1>

//         <p className="text-green text-xs">
//           Kes. 200 <span>/500 gram</span>
//         </p>

//         <div className="flex gap-2 text-xs">
//           <p className="px-2 py-1 bg-grey rounded-sm">Delivered</p>
//           <p className="px-2 py-1 bg-grey rounded-sm">Lake Victoria</p>
//         </div>

//         <div className="flex items-center justify-between">
//           <p className="text-sm text-black">Kisumu, Kenya</p>

//           <Button type="tert">Delete</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
