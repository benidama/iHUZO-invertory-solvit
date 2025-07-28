import TopBar from "./TopBar";
import {
  Menu,
  X,
  Users,
  Package,
  Book,
  AlignCenter,
  Layers,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { useState } from "react";
import { UserProvider } from "../providers/UserProvider";

const SidebarContent = () => {
  const sidebarItems = [
    { to: "/dashboard", icon: Book, label: "Dashboard" },
    { to: "/users", icon: Users, label: "Users", count: 116 },
    { to: "/products", icon: Package, label: "Products", count: 100 },
    { to: "/assignments", icon: AlignCenter, label: "Assignments", count: 10 },
    { to: "/categories", icon: Layers, label: "Categories" },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-sm shadow-b shadow-gray-300">
      <div className="flex items-center p-4">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <Package className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">iHUZA</h1>
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
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            <span className="flex items-center">
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.label}</span>
            </span>
            {!!item.count && (
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserProvider>
      <nav className="flex min-h-screen bg-gray-50 shadow-sm shadow-r shadow-gray-300 ">
        <div className="absolute top-4 left-4 md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6" />}
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
