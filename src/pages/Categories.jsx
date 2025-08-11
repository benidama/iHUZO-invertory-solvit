import { useState } from "react";
import { useCategory } from "../hooks/useCategory";
import Button from "../components/Button";
import useTheme from "../hooks/useTheme";
import AddCategoryModal from "../components/AddCategoryModal";

export default function CategoryPage() {
  const { categories, addCategory, removeCategory } = useCategory();
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCategory = (categoryData) => {
    addCategory(categoryData);
    setIsModalOpen(false);
  };

  const handleRemoveCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      removeCategory(id);
    }
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Product Categories
        </h1>
        <Button
          label="Add Category"
          variant="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className={`shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow relative group ${
                theme == "light" ? "bg-primary-200" : "bg-gray-800"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  {category.icon}
                </div>
                <h2
                  className={`text-lg font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {category.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Category
                </p>
              </div>

              <button
                onClick={() => handleRemoveCategory(category.id)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                title="Delete category"
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No categories found
            </p>
            <Button
              label="Add Your First Category"
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              className="mt-4"
            />
          </div>
        )}
      </div>

      {isModalOpen && (
        <AddCategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCategory}
          theme={theme}
        />
      )}
    </>
  );
}
