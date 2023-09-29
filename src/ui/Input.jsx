function Input({ placeholder, type, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
    />
  );
}

export default Input;
