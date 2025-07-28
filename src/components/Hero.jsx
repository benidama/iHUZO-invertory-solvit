import {
  Users,
  Package,
  CheckCircle,
  AlertTriangle,
  CircleCheckBig,
} from "lucide-react";

const Hero = () => {
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
    <main className="p-6 flex flex-col bg-background text-foreground ml-6 mr-6">
      <div className=" flex flex-row rounded-xl space-x-3 p-6 mb-8 ">
        <div className=" text-center w-10 h-10 rounded-sm flex justify-center items-center">
          <Package className="w-8 h-8  text-center" />
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                iHUZA INVENTORY - System Overview
              </h2>
              <p className="text-foreground">
                Monitor your iHUZA inventory and product assignments in
                real-time.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">All Systems Operational</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start"
            >
              <div className="flex items-center justify-center space-x-2">
                <div
                  className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 ">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
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
