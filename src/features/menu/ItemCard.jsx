import { useNavigate } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/Cartslice";
import { useDispatch, useSelector } from "react-redux";

function ItemCard({ post }) {
  const { id, name, weight, price, image, source } = post;
  const dispatch = useDispatch();
  const inCart = useSelector(getCurrentQuantityById(id));

  function handleAddItem() {
    const newItem = {
      itemId: id,
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
      <div className="flex flex-col items-center gap-4">
        <img
          src={post.image}
          alt={post.name}
          className="w-20 h-20 mx-auto bg-blend-screen rounded-full"
        />
        <h3>{post.name}</h3>
      </div>

      <div className="flex items-center gap-2">
        {inCart ? (
          <button
            className="inline-block font-semibold transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-maroon text-grey text-sm border border-maroon rounded-md tracking-wider px-2 py-1 bg-maroon "
            onClick={() => dispatch(deleteItem(id))}
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
