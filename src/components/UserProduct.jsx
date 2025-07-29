import useTheme from "../hooks/useTheme";

const classVariant = {
  defolt: "bg-green-100 text-green-800",
  primary: "bg-amber-100 text-yellow-800",
  secondary: "bg-red-100 text-red-800",
};
const darkVariant = {
  defolt: "bg-green-100 text-green-800",
  primary: "bg-amber-100 text-yellow-800",
  secondary: "bg-red-500 text-red-900",
};

export default function UserProduct({
  name,
  category,
  date,
  status,
  variant = "defolt",
}) {
  const { theme } = useTheme();
  const statusClasses =
    theme === "light" ? classVariant[variant] : darkVariant[variant];
  const textColor = theme === "light" ? "text-black" : "text-white";
  const borderColor =
    theme === "light" ? "border-gray-200 " : "border-gray-700 ";

  return (
    <div
      className={`rounded-lg border ${borderColor} flex flex-row justify-between`}
    >
      <div className="p-5">
        <h1 className={`text-md pb-3 font-semibold ${textColor}`}>{name}</h1>
        <p className="text-gray-500 text-[13px] font-medium">{category}</p>
        <p className="text-gray-500 text-[13px]">{date}</p>
      </div>
      <div className="p-5">
        <p
          className={`px-2 text-sm rounded-full max-md:text-[9px] ${statusClasses}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
