const variantClasses = {
  default: "border-palette-300 focus:ring-palette-300",
  danger: "border-red-500 focus:ring-red-500",
};
const Input = ({
  label,
  name,
  type = "",
  value = "",
  onChange,
  placeholder,
  className,
  variant = "default",
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-1 w-full sm:w-full md:w-lg rounded-md border-2 ${variantClasses[variant]} ${className}`}
      />
    </div>
  );
};
export default Input;
