import useProduct from "../hooks/useProduct";
import UserProduct from "./UserProduct";
import useTheme from "../hooks/useTheme";

export default function ProductList() {
  const { theme } = useTheme();
  const { product } = useProduct();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white border-gray-100"
          : "bg-gray-800 border-gray-600"
      } pt-5}`}
    >
      <h1 className=" pt-5 mb-5 pl-6">Recent Added Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
        {product.map((p, idx) => (
          <UserProduct key={idx} {...p} />
        ))}
      </div>
    </div>
  );
}
