import { useNavigate } from "react-router-dom";
function Button({ children, type, nav }) {
  const navigate = useNavigate();

  const base =
    " inline-block font-semibold  tracking-wide  transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 ";

  const styles = {
    primary: base + "px-4 py-2 text-grey bg-green hover:text-white rounded-md",
    secondary:
      base +
      "px-2 py-1 text-black text-sm flex items-center gap-1 border border-black rounded-sm hover:text-green hover:text-sm",
    tert: base + "text-grey text-sm border border-green px-2 py-1",
  };

  return (
    <button
      className={styles[type]}
      onClick={(e) => {
        e.preventDefault();
        return navigate(nav);
      }}
    >
      {children}
    </button>
  );
}

export { Button };
