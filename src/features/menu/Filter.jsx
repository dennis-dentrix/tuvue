import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";

export function Filter() {
  return (
    <div className="sm:w-[15rem]">
      <SearchFilter />

      <div className="flex justify-between items-basline  py-4 sm:block ">
        {/* PRICE FILTER */}
        <PriceFilter />

        {/* NAME FILTER */}
        <NameFilter />

        {/* DELIVERIES */}
        <div>
          <div className="flex items-center gap-2 text-lg tracking-widest text-green pb-3">
            <input
              type="checkbox"
              name="delivery"
              className="checked:text-green"
            />
            <option value="delivery">Delivery</option>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchFilter() {
  return (
    <div className="mt-2">
      <h1 className="text-black font-bold text-xl tracking-wider mb-3 hidden sm:block">
        Filter
      </h1>
      <form className="flex items-center gap-2 text-black rounded-md border border-green text-base transition-all duration-300 focus:outline-none max-w-max px-2">
        <input
          type="text"
          placeholder="Filter by..."
          className="bg-transparent px-4 py-2 focus:outline-none placeholder:text-black text-black focus:text-lg transition-all duration-300 tracking-widest"
        />
        <Search />
      </form>
    </div>
  );
}

function PriceFilter() {
  const [priceFilter, setPriceFilter] = React.useState(false);

  function handlePriceFilter() {
    setPriceFilter(!priceFilter);
  }
  return (
    <div className="sm:border-b sm:border-green">
      <h2
        className="text-green font-bold text-lg flex items-center sm:justify-between gap-2 border border-white sm:border-none w-max sm:w-full px-2 py-1 rounded-md focus:ring focus:ring-offset-2 mb-3 "
        onClick={handlePriceFilter}
      >
        Price {priceFilter ? <ChevronUp /> : <ChevronDown />}
      </h2>
      <div className="sm:pb-4">{priceFilter && <RangeSlider />}</div>
    </div>
  );
}

function valuetext(value) {
  return `Kes.${value}`;
}

function RangeSlider() {
  const [value, setValue] = React.useState([200, 1200]);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div>
      <div className="mt-2">
        <Box sx={{ width: 250 }}>
          <Slider
            aria-label="Price range"
            max={1500}
            min={200}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ color: "#4c7c7d" }}
          />
        </Box>
      </div>

      <div>
        <p className="flex items-center gap-2 text-black font-semibold">
          From{" "}
          <span className="flex items-center border border-green w-24 px-1 rounded-md">
            Kes.
            <input
              type="text"
              value={`${value[0]}`}
              className="py-2 px-1 w-24 outline-none bg-transparent"
            />
          </span>{" "}
          to{" "}
          <span className="flex items-center border border-green w-24 px-1 rounded-md ">
            Kes.
            <input
              type="text"
              value={`${value[1]}`}
              className="py-2 px-1 w-24 outline-none bg-transparent"
            />
          </span>
        </p>
      </div>
    </div>
  );
}

function NameFilter() {
  const [NameFilter, setNameFilter] = React.useState(false);
  function handleNameFilter() {
    setNameFilter(!NameFilter);
  }
  return (
    <div className="sm:border-b sm:border-green">
      <h2
        className="text-green font-bold text-lg flex items-center sm:justify-between gap-2 border border-white sm:border-none w-max sm:w-full px-2 py-1 rounded-md focus:ring focus:ring-offset-2 mb-3 "
        onClick={handleNameFilter}
      >
        Name {NameFilter ? <ChevronUp /> : <ChevronDown />}
      </h2>

      {NameFilter && (
        <>
          <form className="px-2 flex items-center gap-2 text-black rounded-md border border-green text-base transition-all duration-300 focus:outline-none">
            <input
              type="text"
              placeholder="Fish name"
              className="bg-transparent px-4 py-2 focus:outline-none placeholder:text-black text-black focus:text-lg transition-all duration-300 tracking-widest"
            />
            <Search />
          </form>

          <form>
            <div className="flex gap-2 text-lg tracking-widest text-black py-3">
              <input type="checkbox" name="" id="" />
              <option
                value="Tilapia"
                className="appearance-none checked:text-green"
              >
                Tilapia
              </option>
            </div>
            <div className="flex gap-2 text-lg tracking-widest text-black pb-3">
              <input type="checkbox" name="" id="" />
              <option value="Tilapia">Nile perch</option>
            </div>
            <div className="flex gap-2 text-lg tracking-widest text-black pb-3">
              <input type="checkbox" name="" id="" />
              <option value="Tilapia">Omena</option>
            </div>
            <div className="flex gap-2 text-lg tracking-widest text-black pb-3">
              <input type="checkbox" name="" id="" />
              <option value="Tilapia">Shark</option>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
