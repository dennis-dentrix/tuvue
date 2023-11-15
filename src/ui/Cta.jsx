import { Button } from "./Button";
import SearchOrder from "../features/order/SearchOrder";

function Cta() {
  return (
    <div className="bg-gradient-to-r from-green via-blue-500 to-maroon bg-cover  px-6 py-8 rounded-md mb-8 flex flex-col sm:flex-row items-center text-white justify-center space-x-6 h-[80vh]">
      <div className="space-y-6">
        <h1 className="text-[2rem] font-bold text-white ">Fresh fish</h1>

        <p className="text-md">
          Get fish and fish products sourced around kenyan water bodies
        </p>

        <div className="flex  flex-col-reverse gap-8 sm:flex-row items-center justify-between">
          <Button type="primary">Shop now</Button>
          <SearchOrder placeholder="Fish for something..." type="secondary" />
        </div>
      </div>

      {/* FIND BETTER IMAGES TO PLACE HERE IF NOT FOUND REMOVE THE SECTION */}
      {/* <div className="hidden sm:flex items-center absolute right-[15rem] h-44 ">
        <img
          src="/fish-1 (2).jpg"
          alt=""
          className="w-40 h-[10rem] rounded-md z-10 absolute right-20 opacity-80"
        />
        <img
          src="/fish-1.jpg"
          alt=""
          className="w-40 h-[10rem] rounded-md opacity-90"
        />
        <img
          src="/fish-1 (3).jpg"
          alt=""
          className="w-40 h-[10rem] rounded-md absolute right-36 z-10 opacity-70"
        />
      </div> */}
    </div>
  );
}

export default Cta;
