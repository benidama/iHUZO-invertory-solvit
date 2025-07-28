// import { Bell, Sun, Settings, User, Moon } from "lucide-react";
// import useUser from "../hooks/useUser";
// import { useState } from "react";
// import useTheme from "../hooks/useTheme";

// const TopBar = () => {
//   const { theme, HandleTheme } = useTheme();
//   const { user, setUser } = useUser();

//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   console.log(user);
//   return (
//     <header className="px-14 py-2  shadow-sm shadow-b shadow-gray-300">
//       <div className="flex items-center gap-5 sm:gap-5 md:gap-0 justify-center sm:justify-center md:justify-between flex-col sm:flex-col md:flex-row">
//         <div>
//           <h1 className="text-2xl  font-semibold text-gray-900">Dashboard</h1>
//           <p className="text-gray-600 hidden sm:block">
//             Welcome Back, <span>{user.name}</span>
//           </p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             aria-label="Toggle theme"
//             className="relative p-2 text-gray-400 hover:text-gray-600"
//           >
//             <div onClick={toggleTheme}>
//               {isDarkMode ? (
//                 <Moon className="text-2xl hover:text-gray-400 cursor-pointer" />
//               ) : (
//                 <Sun className="text-2xl hover:text-gray-400 cursor-pointer" />
//               )}
//             </div>
//           </button>
//           <button className="relative p-2 text-gray-400 hover:text-gray-600">
//             <Bell className="w-5 h-5" />
//             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//           </button>
//           <button className="p-2 text-gray-400 hover:text-gray-600">
//             <Settings className="w-5 h-5" />
//           </button>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-600 hidden sm:inline">
//               {user.email}
//             </span>
//             <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
//               <User className="w-4 h-4 text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default TopBar;
import { Bell, Sun, Settings, User, Moon } from "lucide-react";
import useUser from "../hooks/useUser";
import useTheme from "../hooks/useTheme";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <header
      className={`px-14 py-2 shadow-sm ${
        theme === "light"
          ? "bg-white shadow-sm shadow-b shadow-gray-300 text-gray-900"
          : "bg-gray-800 border border-gray-700 text-white"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h1
            className={`text-3xl font-bold max-md:text-[18px] ${
              theme === "light" ? "text-black" : "text-white"
            } max-sm:text-2xl `}
          >
            Dashboard
          </h1>
          <p
            className={`${
              theme === "light" ? "text-black" : "text-gray-400"
            } max-sm:text-[12px]`}
          >
            Welcome Back, <span>{user.name}</span>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 hover:text-blue-300"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          <button className="relative p-2 hover:text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </button>

          <button className="p-2 hover:text-gray-600">
            <Settings className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-sm hidden sm:inline">{user.email}</span>
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
