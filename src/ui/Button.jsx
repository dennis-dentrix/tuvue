import { Link, useNavigate } from "react-router-dom";
function Button({ children, type, to, nav, inStock, onClick }) {
  const navigate = useNavigate();

  const base =
    " inline-block font-semibold  tracking-wide  transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1 ";

  const styles = {
    primary: base + "px-4 py-2 text-grey bg-green hover:text-white rounded-md",
    secondary:
      base +
      "px-2 py-1 text-black text-sm flex items-center gap-1 border border-black rounded-sm hover:text-green hover:text-sm",
    tert:
      base +
      "text-grey text-sm border border-maroon rounded-md tracking-wider px-2 py-1 bg-maroon",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={!inStock} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };
