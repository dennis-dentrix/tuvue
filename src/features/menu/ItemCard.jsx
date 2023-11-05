import { Plus } from "react-bootstrap-icons";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getFish } from "../../services/fishApi";

function ItemCard({ post }) {
  const { id: postId, fishId, name, weight, price, image, source } = post;
  const dispatch = useDispatch();
  const inCart = useSelector(getCurrentQuantityById(postId));

  const { data: fishData, isLoading } = useQuery({
    queryKey: ["fishSpicies"],
    queryFn: getFish,
  });
  console.log(fishData);

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
    <li className="flex flex-col items-center justify-around gap-6 bg-white px-3 h-52 w-48 rounded-md">
      {!isLoading && (
        <div className="flex flex-col items-center gap-4">
          {fishData.map(
            (fish) =>
              fish.id === fishId && (
                <div key={postId}>
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

      <div className="flex items-center gap-2">
        {inCart ? (
          <button
            className="inline-block font-semibold transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-maroon text-grey text-sm border border-maroon rounded-md tracking-wider px-2 py-1 bg-maroon "
            onClick={() => dispatch(deleteItem(postId))}
          >
            Delete
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
    </li>
  );
}

export default ItemCard;
