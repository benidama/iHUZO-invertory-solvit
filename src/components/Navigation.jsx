import TopBar from "./TopBar";
import { Menu, X, Users, Package, Book, Layers, LogOut } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { UserProvider } from "../providers/UserProvider";

const SidebarContent = () => {
  const sidebarItems = [
    { to: "/dashboard", icon: Book, label: "Dashboard" },
    { to: "/users", icon: Users, label: "Users", count: 116 },
    { to: "/products", icon: Package, label: "Products", count: 100 },
    { to: "/categories", icon: Layers, label: "Categories" },
  ];
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div
      className={`  ${
        theme === "light"
          ? "w-64 h-full bg-white shadow-sm shadow-b shadow-gray-300"
          : "bg-gray-800 w-64 h-full text-white"
      }`}
    >
      <div className="flex items-center p-4">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <Package className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1
            className={`text-lg font-semibold ${
              theme === "light" ? "text-gray-900" : "text-gray-50"
            }`}
          >
            iHUZA
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            INVENTORY
          </p>
        </div>
      </div>

      <nav className="mt-6">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 mx-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-400 text-blue-700"
                  : "text-gray-600 hover:bg-gray-500"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            <span className="flex items-center">
              <item.icon
                className={`w-5 h-5 mr-3 ${
                  theme === "light" ? "text-gray-600" : "text-gray-500"
                }`}
              />
              <span
                className={`${
                  theme === "light" ? "text-black" : "text-gray-400"
                } max-sm:text-[12px]`}
              >
                {item.label}
              </span>
            </span>
            {!!item.count && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-400 text-gray-700"
                }`}
              >
                {item.count}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <button
        className="flex flex-row pl-5 mt-96 hover:bg-gray-500 hover:text-white  items-center gap-2 px-4 py-3 mx-2 rounded-lg"
        onClick={handleLogout}
      >
        <LogOut
          className={` ${
            theme === "light" ? "text-gray-600" : "text-gray-500"
          } max-sm:text-sm`}
        />
        <p
          className={`${
            theme === "light" ? "text-black" : "text-gray-400"
          } max-sm:text-sm`}
        >
          Logout
        </p>
      </button>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <UserProvider>
      <nav
        className={` shadow-sm relative  ${
          theme === "light"
            ? "flex min-h-screen bg-gray-50 shadow-sm shadow-r shadow-gray-300"
            : "bg-gray-900 border border-gray-700 text-white flex min-h-screen"
        }`}
      >
        <div className="absolute top-4  md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                className={`w-12 h-12 ${
                  theme === "light" ? "text-gray-600" : "text-black"
                }`}
              />
            ) : (
              <Menu className="w-12 h-10" />
            )}
          </button>
        </div>

        <aside
          className={`fixed inset-y-0 p-10 sm:p-10 md:p-0 left-0 z-10 transform bg-white transition-transform duration-200 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0`}
        >
          <SidebarContent />
        </aside>

        {isOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            className="fixed inset-0 bg-black bg-opacity-20 md:hidden"
            onClick={() => setIsOpen(false)}
            style={{
              background: "transparent",
              padding: 0,
              margin: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}

        <div className="flex mt-2 md:mt-3 lg:mt-0  justify-start w-full flex-col ">
          <TopBar />

          <main className="p-6 ">
            <Outlet />
          </main>
        </div>
      </nav>
    </UserProvider>
  );
};

export default Navigation;
