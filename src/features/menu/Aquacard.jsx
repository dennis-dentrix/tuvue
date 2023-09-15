import { Button } from "../../ui/Button";

function Aquacard() {
  return (
    <li className="bg-maroon flex flex-col items-center rounded-md w-64 sm:w-64 px-7 py-6 space-y-5">
      <div>
        <h1 className="text-black font-semibold text-xl">Name</h1>
        <h3 className="text-grey font-medium text-sm">Source</h3>
      </div>
      <img
        src="/fish-1 (3).jpg"
        alt=""
        className="h-28 w-28 rounded-full ring ring-green"
      />

      <div className="flex items-center justify-between w-full">
        <p className="text-black text-sm">kes.500</p>
        <Button type="tert">Add</Button>
      </div>
    </li>
  );
}

export default Aquacard;
