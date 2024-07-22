import "./button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 border border-gray-600 text-gray-200
          rounded-md shadow-md bg-gray-100 bg-opacity-10 
          hover:bg-opacity-15 hover:text-gray-100
          transition duration-300 ease-in-out hover:border-gray-400 
          focus:outline-none focus:bg-gray-200 focus:bg-opacity-20
          relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
