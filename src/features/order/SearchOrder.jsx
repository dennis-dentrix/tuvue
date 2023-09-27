import { Search } from "react-bootstrap-icons";

function SearchOrder({ placeholder, type }) {
  // const base =
  //   " outline-none sm:text-base text-sm transition-all duration-300 placeholder:text-black focus:outline-none focus:ring focus:ring-black focus:ring-opacity-10 sm:block";
  // const style = {
  //   primary: base + " w-24 focus:w-32 sm:w-40 sm:focus:w-52 ",
  //   secondary: base + " w-40 focus:w-60 sm:w-52 sm:focus:w-60 ",
  // };
  const mainStyle =
    "flex items-center rounded-md px-3 py-1 border border-green mt-3";

  const formStyle = {
    primary: mainStyle + " w-30 ",
    secondary: mainStyle + "",
  };

  return (
    <form className={formStyle[type]}>
      <input
        placeholder={placeholder}
        className="focus:outline-none w-full bg-transparent placeholder:text-black placeholder:text-italic tracking-wider rounded-sm"
      />
      <Search className=" text-green text-lg" />
    </form>
  );
}
// className={style[type]}

export default SearchOrder;
