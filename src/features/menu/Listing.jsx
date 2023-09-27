import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import ItemCard from "./ItemCard";
import { Filter } from "./Filter";

function Listing() {
  return (
    <div className="sm:grid sm:grid-cols-[auto_auto]  gap-4">
      <div className="hidden sm:block">
        <Filter />
      </div>
      <div>
        <div>
          <Link
            to="/menu"
            className=" text-green text-sm font-medium flex items-center gap-2 hover:text-black transition-colors duration-300"
          >
            <ArrowLeft />
            <span className="">Menu</span>
          </Link>
          <h1 className="text-xl font-bold tracking-wider">Sea foods</h1>

          <div className="sm:hidden place-content-center">
            <Filter />
          </div>

          {/* <div className="flex justify-between items-center py-5 sm:hidden ">
            <p className="text-black text-lg font-medium">sort by</p>

            <div>
              <Button type="secondary">
                Price
                <ChevronDown />
              </Button>
            </div>
          </div> */}
        </div>

        <div className="flex flex-wrap gap-2 justify-around sm:justify-center sm:gap-5 place-content-center my-4">
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
    </div>
  );
}

export default Listing;
