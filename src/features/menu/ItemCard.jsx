import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Plus } from "react-bootstrap-icons";

function ItemCard({ post }) {
  console.log(post.price);
  const navigate = useNavigate();

  return (
    <li
      className="bg-white rounded-md w-[12rem] py-2  px-3 space-y-4 relative focus:ring focus:ring-offset-1 focus:ring-green"
      onClick={() => navigate("/menu/product")}
    >
      <div className="flex items-center justify-between">
        <img
          src=""
          alt=""
          className="rounded-full w-14 h-14 ring  ring-green absolute left-3 bottom-32"
        />

        {/* <div className="flex flex-col space-y-2 relative left-16"> */}
        <div className="flex flex-col space-y-4 translate-x-[4.5rem]">
          <p className="text-green text-sm">4.9/5</p>
          {post.inStock ? (
            <p className="text-grey bg-green text-sm px-2 rounded-md skew-y-12">
              On sale
            </p>
          ) : (
            <p className="text-grey bg-maroon text-sm px-2 rounded-md skew-y-12">
              Out of stock
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3  top-0">
        <h2 className="text-black font-semibold text-md tracking-wider">
          fish
        </h2>

        <div className="flex items-center gap-3 mb-3">
          <Button type="secondary" inStock={post.inStock}>
            Add <Plus className="text-md" />
          </Button>

          <div>
            <p className="text-black font-medium text-sm">kes.{post.price}</p>
            <p className="text-green font-thin text-xs">
              /{post.minWeight} grams
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
