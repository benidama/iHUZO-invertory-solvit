import {
  Users,
  Package,
  CheckCircle,
  AlertTriangle,
  CircleCheckBig,
} from "lucide-react";
import useTheme from "../hooks/useTheme";

const Hero = () => {
  const { theme } = useTheme();
  const stats = [
    {
      icon: Users,
      value: "116",
      label: "Total Users",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Package,
      value: "100",
      label: "Total Products",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: CircleCheckBig,
      value: "10",
      label: "Assigned Products",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: AlertTriangle,
      value: "90",
      label: "Unassigned Products",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <main className=" flex flex-col ml-2 mr-2">
      <div className=" flex flex-row text-white rounded-xl space-x-3 p-6 mb-8 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className=" text-center w-10 h-10 rounded-sm flex justify-center items-center bg-white/20">
          <Package className="w-8 h-8 text-white text-center" />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div>
              <h2 className="text-xl font-bold pb-2">
                iHUZA INVENTORY - System Overview
              </h2>
              <p className="text-blue-100">
                Monitor your iHUZA inventory and product assignments in
                real-time.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
            <span className="text-xsm text-blue-100">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-7">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.label}
              className={` rounded-xl p-6 shadow-sm border  flex items-start ${
                theme === "light"
                  ? "bg-white border-gray-100"
                  : "bg-gray-800 border-gray-600"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <div
                  className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold  ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm   ${
                      theme === "light"
                        ? "text-gray-600 font-bold"
                        : "text-gray-500 font-semibold"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Hero;
