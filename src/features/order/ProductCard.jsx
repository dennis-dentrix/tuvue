import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check2Circle } from "react-bootstrap-icons";

function ProductCard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="flex items-center gap-3">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="text-green text-lg font-bold"
        />{" "}
        <span className="text-black font-semibold text-lg">Tilapia</span>
      </h1>

      <div className="flex flex-col items-center py-6 w-full">
        <img
          src="/fish-1.jpg"
          alt=""
          className="rounded-full w-20 h-20 ring  ring-green "
        />

        <div className="flex justify-between w-full items-center my-3">
          <p className="flex items-center gap-2 text-green px-2 py-1 border border-black rounded-md text-sm">
            In stock <Check2Circle />
          </p>

          {/* IF THE SELLER DELIVERS THEN INDICATE AVAILABLE IF NOT THE INDICATE UNAVAILABLE. iF AVAILABLE ONCLICK WILL SHOW HOW MANY DAYS IT WILL TAKE TO DELIVER */}
          <p className="text-sm text-green font-medium">Delivary Available</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
