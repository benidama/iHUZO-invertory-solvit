import {
  User,
  Package,
  UserCheck,
  AlertTriangle,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const ProductCategories = () => {
  const { theme } = useTheme();
  const recentActivities = [
    {
      id: 1,
      type: "product-added",
      title: "Product added to inventory",
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
      icon: Package,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      type: "assignment",
      title: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
      icon: UserCheck,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      type: "assignment",
      title: "Product assigned to Michael Brown",
      description: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
      icon: UserCheck,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      type: "maintenance",
      title: "Product sent for maintenance",
      description: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
      icon: AlertTriangle,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      type: "user-registered",
      title: "New user registered",
      description: "Amanda White - Staff Member",
      date: "Jun 14, 2024",
      icon: UserPlus,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  const quickActions = [
    {
      title: "View Users",
      to: "/users",
      description: "View all registered users",
      icon: User,
      buttonText: "Go",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "View Products",
      to: "/products",
      description: "View all registered products",
      icon: Package,
      buttonText: "Go",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "View All",
      to: "/dashboard",
      description: "View all activities done in the project",
      icon: UserCheck,
      buttonText: "Go",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div
            className={`rounded-lg shadow-sm border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 text-gray-100 border-gray-600"
            }`}
          >
            <div
              className={`px-6 py-4 border-b  ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`text-lg font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-gray-100"
                  }`}
                >
                  Recent Activity
                </h2>
                <Link to="/dashboard">
                  <button className="text-sm text-blue-600 hover:text-blue-300 hover:text-2xl">
                    View all
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className={`flex items-start space-x-3  p-2 rounded-xl ${
                        theme === "light"
                          ? "text-gray-900 hover:bg-gray-300"
                          : "text-gray-200 hover:bg-gray-700"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full ${activity.bgColor} flex items-center justify-center`}
                      >
                        <IconComponent
                          className={`w-4 h-4 ${activity.iconColor}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            theme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {activity.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div
            className={`rounded-lg shadow-sm border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 text-gray-100 border-gray-600"
            }`}
          >
            <div
              className={`px-6 py-4 border-b ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
              }`}
            >
              <h2
                className={`text-lg font-semibold  ${
                  theme === "light" ? "text-gray-900" : "border-gray-100"
                }`}
              >
                Quick Actions
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 border border-gray-200 rounded-lg transition-colors ${
                        theme === "light"
                          ? "hover:bg-gray-100"
                          : "hover:bg-gray-900"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <div>
                          <p
                            className={`text-sm font-medium ${
                              theme === "light"
                                ? "text-gray-900"
                                : "text-gray-200"
                            }`}
                          >
                            {action.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <Link to={action.to}>
                        <button
                          className={`px-3 py-1.5 text-xs font-medium text-white rounded ${action.buttonColor} transition-colors`}
                        >
                          {action.buttonText}
                        </button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
