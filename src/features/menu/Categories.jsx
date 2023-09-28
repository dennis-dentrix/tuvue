import { Link } from "react-router-dom";
import Aquacard from "./Aquacard";
import Items from "./Items";
import { ChevronRight, Water } from "react-bootstrap-icons";

function Common() {
  return (
    <div className="my-8 py-6">
      <div className="flex items-center justify-between pb-6 mx-4">
        <h1 className="text-xl text-black font-bold tracking-widest">
          Common fish
        </h1>
        <Link
          to="/menu/listing"
          className="flex items-center gap-2 text-sm text-green font-medium hover:text-black transition-colors duration-300"
        >
          <span className="tracking-wider">View all</span>
          <ChevronRight className="text-green" />
        </Link>
      </div>
      <Items />
    </div>
  );
}

function Aquarium() {
  return (
    <div className="mb-8 pb-6">
      <div className="mx-4">
        <h1 className="text-xl font-bold flex items-center gap-3 pb-8 ">
          <Water className="text-green" />{" "}
          <span className="tracking-widest">Aquarium</span>
        </h1>
      </div>

      <ul className="flex items-center justify-between gap-4 ">
        <Aquacard />
        <Aquacard />
        <Aquacard />
        <Aquacard />
      </ul>
    </div>
  );
}

export { Common, Aquarium };
