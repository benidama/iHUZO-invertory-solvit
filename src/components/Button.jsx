const variantClasses = {
  primary: "bg-palette-500 text-white hover:bg-blue",
};
const Button = ({
  label,
  type = "button",
  className = "",
  onClick,

  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
