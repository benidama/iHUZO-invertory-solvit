import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const NoPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen flex flex-col items-center  justify-center  font-poppins px-4 ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <h2 className="text-5xl font-bold text-indigo-600 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-palette-600 mb-2">
        Page Not Found
      </h3>
      <p className="text-palette-400 text-center max-w-xl">
        Sorry! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/login"
        className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NoPage;
