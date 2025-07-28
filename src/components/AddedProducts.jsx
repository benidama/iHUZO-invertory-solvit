const AddedProducts = () => {
  const products = [
    {
      name: 'MacBook Pro 16"',
      category: "Laptops",
      date: "Dec 10, 2024",
      status: "In Stock",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      name: "Dell XPS 13",
      category: "Laptops",
      date: "Dec 9, 2024",
      status: "In Stock",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      name: "iPhone 15 Pro",
      category: "Mobile",
      date: "Dec 8, 2024",
      status: "Low Stock",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "iPad Air",
      category: "Tablets",
      date: "Dec 7, 2024",
      status: "In Stock",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      name: "Surface Pro 9",
      category: "Tablets",
      date: "Dec 6, 2024",
      status: "Out of Stock",
      statusColor: "bg-red-100 text-red-800",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border m-6 border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Added Products
        </h2>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  {product.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${product.statusColor} ml-2 whitespace-nowrap`}
                >
                  {product.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{product.category}</p>
              <p className="text-gray-500 text-xs">{product.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedProducts;
