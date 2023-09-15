function SearchOrder({ placeholder, type }) {
  const base =
    " rounded-md px-4 py-2 sm:text-base text-sm transition-all duration-300 placeholder:text-black focus:outline-none focus:ring focus:ring-black focus:ring-opacity-10 sm:block";
  const style = {
    primary: base + " w-24 focus:w-32 sm:w-40 sm:focus:w-52 ",
    secondary:
      base + " w-40 focus:w-60 sm:w-52 sm:focus:w-60 border border-green mt-3",
  };
  return (
    <form className="flex items-center">
      <input placeholder={placeholder} className={style[type]} />
      {/* <Search className="sm:hidden text-green text-lg" /> */}
    </form>
  );
}

export default SearchOrder;
