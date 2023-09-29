import { ArrowLeft, X } from "react-bootstrap-icons";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { useState } from "react";

function Post() {
  const [minWeight, setminWeight] = useState(500);
  return (
    <>
      <div className="flex flex-col sm:items-center items-start ">
        <div className="flex items-center justify-between border border-green px-3 py-2 rounded-sm sm:w-1/2 w-full">
          <div>
            <ArrowLeft />
          </div>
          <h1 className="text-green tracking-wider text-lg">Post ad</h1>

          <div className="flex items-center gap-2">
            <X />
            <p className="text-sm text-maroon">Clear</p>
          </div>
        </div>

        <form className="my-6 flex flex-col items-start gap-4 h-full w-full sm:w-1/2 bg-white shadow-md shadow-green px-3 py-2 rounded-md">
          <div className="flex flex-col items-start w-full sm:w-1/2 gap-2">
            <label className="font-medium tracking-wider" htmlFor="name">
              Fish Name
            </label>
            <select
              name="name"
              id=""
              className="px-3 py-1 rounded-md bg-grey tracking-wider focus:outline-none focus:ring-1 focus:ring-green w-[18vw]"
            >
              <option disabled className="text-grey">
                Select species*
              </option>
              <option value="tilapia" className="focus:bg-grey">
                Tilapia
              </option>
              <option value="tuna">Tuna</option>
              <option value="sardines">Sardines</option>
              <option value="shrimp">Shrimp</option>
            </select>
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Minimum price (kes)
            </label>
            <Input placeholder="eg. 200" type="text" />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Minimum weight(grams)
            </label>
            <Input
              type="number"
              name="minWeight"
              value={minWeight}
              onchange={(e) => setminWeight(e.target.value)}
            />
            {/* <SliderComponent /> */}
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Source
            </label>
            <Input type="text" placeholder="eg. Lake Baringo" />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="location">
              Location
            </label>
            <Input type="text" placeholder="enter constituency" />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              className="bg-grey text-sm focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500"
            ></textarea>
          </div>

          <div className="w-[18vw]">
            <Button type="primary">Post ad</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Post;
