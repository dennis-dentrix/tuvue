import Error from "./Error";

function InputField({ error, label, children }) {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      {label && (
        <label
          className="font-medium tracking-wider"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default InputField;
