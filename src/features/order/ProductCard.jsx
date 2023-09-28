import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check2Circle } from "react-bootstrap-icons";
import { Button } from "../../ui/Button";
import { Reviews } from "./Reviews";

function ProductCard() {
  const navigate = useNavigate();
  return (
    <div className="sm:h-full w-full sm:grid sm:grid-cols-2 gap-8 justify-between">
      <div className="sm:flex flex-col mb-8">
        {/* PRODUCT NAME */}
        <h1 className="flex items-center gap-3 mb-4">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="text-green text-lg font-bold"
          />{" "}
          <span className="text-black font-semibold text-lg tracking-widest">
            Tilapia
          </span>
        </h1>

        {/* PRODUCT IMAGE */}
        <div className="flex items-center gap-6 my-8">
          <img
            src="/fish-1.jpg"
            alt=""
            className="rounded-full w-20 h-20 sm:w-32 sm:h-32 ring  ring-green inline-block "
          />

          <div className="sm:hidden">
            <p className="space-x-8 text-black tracking-wide font-medium sm:inline-block md:hidden">
              Source:{" "}
              <span className="text-green font-semibold ">Lake Victoria</span>
            </p>
            <p className="space-x-8 text-black tracking-wide font-medium">
              Seller:{" "}
              <span className="text-green font-semibold text-lg">
                Denis Co.
              </span>
            </p>

            <p className="space-x-8 text-black tracking-wide font-medium">
              Rating: <span className="text-green"> 4.5 /10</span>
            </p>
          </div>
        </div>

        <div className="my-4 hidden sm:block">
          <Reviews />
        </div>
      </div>

      <div className="w-full">
        {/* AVAILABILITY */}
        <div className="flex justify-between w-full items-center my-3 ">
          <p className="flex items-center gap-2 text-green px-2 py-1 border border-black rounded-md text-sm">
            In stock <Check2Circle />
          </p>

          {/* <p className="flex items-center gap-2 text-white px-2 py-1 border border-maroon bg-maroon rounded-md text-sm">
            out of stock <DatabaseX />
          </p> */}

          <p className="text-sm text-black font-medium hidden md:inline-block">
            Source:{" "}
            <span className="text-green font-semibold tlgext-">
              Lake Victoria
            </span>
          </p>

          {/* IF THE SELLER DELIVERS THEN INDICATE AVAILABLE IF NOT THE INDICATE UNAVAILABLE. iF AVAILABLE ONCLICK WILL SHOW HOW MANY DAYS IT WILL TAKE TO DELIVER */}
          <p className="text-sm text-green font-medium">Delivery Available</p>
        </div>

        {/* SELLER */}
        <div className="hidden sm:flex flex-col gap-4">
          <p className="space-x-8 text-black tracking-wide font-medium hidden sm:inline-block md:hidden">
            Source:{" "}
            <span className="text-green font-semibold ">Lake Victoria</span>
          </p>
          <p className="space-x-8 text-black tracking-wide font-medium">
            Seller:{" "}
            <span className="text-green font-semibold text-lg">Denis Co.</span>
          </p>

          <p className="space-x-8 text-black tracking-wide font-medium">
            Rating: <span className="text-green"> 4.5 /10</span>
          </p>
        </div>

        {/* PLACING ORDER */}
        <div className="flex items-baseline w-full justify-between my-6 bg-white px-6 py-3 rounded-md">
          <div>
            <p className="text-black font-medium">
              Total: <span className="font-bold text-lg">Kes.200</span>
            </p>
            <p className="text-green  gap-2 tracking-wide text-sm">
              Kes.200 <span className="text-sm">/500g</span>
            </p>
          </div>

          {/* <div className="flex items-center border border-green bg-white px-2 py-1 rounded-sm gap-3">
            <p className="text-xl font-bold">-</p>
            <p className="text-black font-semibold tracking-wide">500g</p>
            <p className="text-xl font-bold">+</p>
          </div> */}
          <form className="flex flex-col gap-3 w-1/2">
            <input
              type="text"
              placeholder="Enter weight to purchase"
              className="border border-green rounded-md  px-4 py-2 sm:text-base transition-all duration-300 placeholder:text-black focus:outline-none focus:ring focus:ring-black focus:ring-opacity-10 sm:block"
            />

            <Button type="primary">Order now</Button>
          </form>
        </div>

        <div>
          <h2 className="text-black text-lg font-semibold my-3 tracking-widest">
            Description
          </h2>
          <p className="text-black tracking-wide font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellat deserunt, eum blanditiis unde et reprehenderit eius
            veritatis ullam, dignissimos quisquam at sapiente! Incidunt et
            quidem repellat voluptatem iure obcaecati.
          </p>
        </div>

        <div className="my-4 sm:hidden block">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
