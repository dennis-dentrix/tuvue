import { Link } from "react-router-dom";

import { Button } from "../../ui/Button";
import { ChevronBarDown, ArrowLeft } from "react-bootstrap-icons";
import ItemCard from "./ItemCard";
function Listing() {
  return (
    <div>
      <div>
        <Link
          to="/menu"
          className=" text-green text-sm font-medium flex items-center gap-2 hover:text-black transition-colors duration-300"
        >
          <ArrowLeft />
          <span className="">Menu</span>
        </Link>
        <h1 className="text-xl font-bold">Sea foods</h1>

        <div className="flex justify-between items-center py-5 sm:hidden ">
          <p className="text-black text-lg font-medium">sort by</p>

          <div>
            <Button type="secondary">
              Price
              <ChevronBarDown />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto my-0 sm:grid-cols-3 md:grid-cols-4 place-items-center grid-flow-row gap-6 py-8">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Listing;
