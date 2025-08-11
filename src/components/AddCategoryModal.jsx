import { useState } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuTabletSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import {
  FaGamepad,
  FaHeadphones,
  FaCamera,
  FaTv,
  FaClock,
  FaLaptop,
} from "react-icons/fa";
import Button from "./Button";

const availableIcons = [
  { component: <GrPersonalComputer className="text-2xl" />, name: "Computer" },
  { component: <IoPhonePortraitOutline className="text-2xl" />, name: "Phone" },
  { component: <LuTabletSmartphone className="text-2xl" />, name: "Tablet" },
  { component: <BsTools className="text-2xl" />, name: "Tools" },
  { component: <FaGamepad className="text-2xl" />, name: "Gaming" },
  { component: <FaHeadphones className="text-2xl" />, name: "Audio" },
  { component: <FaCamera className="text-2xl" />, name: "Camera" },
  { component: <FaTv className="text-2xl" />, name: "TV" },
  { component: <FaClock className="text-2xl" />, name: "Watch" },
  { component: <FaLaptop className="text-2xl" />, name: "Laptop" },
];

export default function AddCategoryModal({ isOpen, onClose, onSubmit, theme }) {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!categoryName.trim()) {
      newErrors.name = "Category name is required";
    } else if (categoryName.trim().length < 2) {
      newErrors.name = "Category name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newCategory = {
      name: categoryName.trim(),
      icon: availableIcons[selectedIcon].component,
    };

    onSubmit(newCategory);

    setCategoryName("");
    setSelectedIcon(0);
    setErrors({});
  };

  const handleClose = () => {
    setCategoryName("");
    setSelectedIcon(0);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`w-full max-w-md rounded-lg shadow-xl ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2
            className={`text-xl font-semibold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Add New Category
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                theme === "light"
                  ? "border-gray-300 bg-white text-gray-900"
                  : "border-gray-600 bg-gray-700 text-white"
              } ${errors.name ? "border-red-500" : ""}`}
              placeholder="Enter category name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-3 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Choose Icon
            </label>
            <div className="grid grid-cols-5 gap-3">
              {availableIcons.map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIcon(index)}
                  className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center ${
                    selectedIcon === index
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900"
                      : theme === "light"
                      ? "border-gray-200 hover:border-gray-300 bg-white"
                      : "border-gray-600 hover:border-gray-500 bg-gray-700"
                  }`}
                  title={icon.name}
                >
                  <div
                    className={`${
                      selectedIcon === index
                        ? "text-primary-600 dark:text-primary-400"
                        : theme === "light"
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {icon.component}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Preview
            </label>
            <div
              className={`p-4 rounded-lg border ${
                theme === "light"
                  ? "border-gray-200 bg-gray-50"
                  : "border-gray-600 bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary-600 dark:text-primary-400">
                  {availableIcons[selectedIcon].component}
                </div>
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {categoryName || "Category Name"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              label="Cancel"
              variant="secondary"
              onClick={handleClose}
              type="button"
            />
            <Button label="Add Category" variant="primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
