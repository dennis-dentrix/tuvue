import { useQuery } from "@tanstack/react-query";
import { Button } from "../../ui/Button";
import { getFish } from "../../services/fishApi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/Cartslice";
import { Plus } from "react-bootstrap-icons";
import { Delete } from "@mui/icons-material";

function Aquacard({ post }) {
  const { id: postId, fishId, name, weight, price, image, source } = post;
  const dispatch = useDispatch();
  const inCart = useSelector(getCurrentQuantityById(postId));

  const { data: fishData, isLoading } = useQuery({
    queryKey: ["fishSpicies"],
    queryFn: getFish,
  });

  function handleAddItem() {
    const newItem = {
      itemId: postId,
      name,
      image,
      source,
      minWeight: weight,
      unitPrice: price,
      boughtWeight: weight,
      totalPrice: price,
    };
    console.log(newItem);
    dispatch(addItem(newItem));
  }
  return (
    <li className="bg-white flex flex-col items-center rounded-md w-64 sm:w-64 px-7 py-6 space-y-5">
      <div>
        <h1 className="font-semibold text-xl">{post.name}</h1>
        <h3 className="text-grey font-medium text-sm">{post.source}</h3>
      </div>

      {!isLoading && (
        <div className="flex flex-col items-center gap-4">
          {fishData.map(
            (fish) =>
              fish.id === post.fishId && (
                <div key={post.postId}>
                  <img
                    src={fish.image}
                    alt={fish.name}
                    className="w-20 h-20 mx-auto bg-blend-screen rounded-full"
                  />
                  <h3>{fish.name}</h3>
                </div>
              )
          )}
        </div>
      )}

      <div className="flex items-center justify-between w-full">
        <p className="text-black text-sm">kes.{post.price}</p>

        <div className="flex items-center gap-2">
          {inCart ? (
            <button
              className="inline-block font-semibold transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-maroon text-grey text-sm border border-maroon rounded-md tracking-wider px-2 py-1 bg-maroon "
              onClick={() => dispatch(deleteItem(postId))}
            >
              Delete
              <span>
                <Delete />
              </span>
            </button>
          ) : (
            <button
              className="px-2 py-1 border border-black rounded-lg flex items-center"
              onClick={handleAddItem}
            >
              Add
              <span>
                <Plus />
              </span>
            </button>
          )}

          <div>
            <p className="text-sm text-maroon">
              kes.{price}/{weight}g
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Aquacard;
