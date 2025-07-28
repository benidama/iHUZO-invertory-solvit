import { Bell, Sun, Settings, User } from "lucide-react";

function TopBar() {
  return (
    <header className="px-14 py-2  shadow-sm shadow-b shadow-gray-300">
      <div className="flex items-center gap-5 sm:gap-5 md:gap-0 justify-center sm:justify-center md:justify-between flex-col sm:flex-col md:flex-row">
        <div>
          <h1 className="text-2xl  font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 hidden sm:block">Welcome Back, Admin</p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Sun className="w-5 h-5" />
          </button>
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 hidden sm:inline">
              Admin@ihuza.com
            </span>
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default TopBar;
