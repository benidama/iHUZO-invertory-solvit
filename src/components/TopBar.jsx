// import { Bell, Sun, Moon, User } from "lucide-react";
// import useUser from "../hooks/useUser";
// import useTheme from "../hooks/useTheme";
// import SettingsDropdown from "./SettingsDropdown";
// import useStickyState from "../hooks/useStickyState";
// import { useTranslation } from "react-i18next";

// const TopBar = () => {
//   const { t } = useTranslation();
//   const { theme, toggleTheme } = useTheme();
//   const { user } = useUser();
//   const [avatar, setAvatar] = useStickyState(null, "user-avatar");

//   return (
//     <header
//       className={`sticky top-1 z-50 px-14 py-2 shadow-sm ${
//         theme === "light"
//           ? "bg-white text-gray-900 shadow-gray-300"
//           : "bg-gray-800 text-white border border-gray-700"
//       }`}
//     >
//       <div className="flex justify-between items-center flex-wrap">
//         <div>
//           <h1
//             className={`text-3xl font-bold ${
//               theme === "light" ? "text-black" : "text-white"
//             }`}
//           >
//             Dashboard
//           </h1>
//           <p
//             className={`${theme === "light" ? "text-black" : "text-gray-400"}`}
//           >
//             Welcome Back, <span>{user.name}</span>
//           </p>
//           <h1>{t("welcome")}</h1>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="p-2 hover:text-blue-300"
//           >
//             {theme === "light" ? (
//               <Moon className="w-5 h-5" />
//             ) : (
//               <Sun className="w-5 h-5" />
//             )}
//           </button>
//           <button className="relative p-2 hover:text-gray-600">
//             <Bell className="w-5 h-5" />
//             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
//           </button>
//           <SettingsDropdown onAvatarChange={setAvatar} />
//           <div className="flex items-center space-x-2">
//             <span
//               className={`${
//                 theme === "light"
//                   ? "hidden sm:inline text-sm text-black"
//                   : "text-gray-400"
//               }`}
//             >
//               {user.email}
//             </span>

//             {avatar ? (
//               <img
//                 src={avatar}
//                 alt="Avatar"
//                 className="w-7 h-7 rounded-full object-cover"
//               />
//             ) : (
//               <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
//                 <User className="w-4 h-4 text-white" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopBar;
// src/components/TopBar.jsx

import React from "react";
import { Bell, Sun, Moon, User } from "lucide-react";
import useUser from "../hooks/useUser";
import useTheme from "../hooks/useTheme";
import SettingsDropdown from "./SettingsDropdown";
import useStickyState from "../hooks/useStickyState";
import { useLanguage } from "../contexts/LanguageContext";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const [avatar, setAvatar] = useStickyState(null, "user-avatar");
  const { language } = useLanguage();

  return (
    <header
      className={`sticky top-1 z-50 px-14 py-2 shadow-sm ${
        theme === "light"
          ? "bg-white text-gray-900 shadow-gray-300"
          : "bg-gray-800 text-white border border-gray-700"
      }`}
    >
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h1
            className={`text-3xl font-bold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Dashboard
          </h1>
          <p
            className={`${theme === "light" ? "text-black" : "text-gray-400"}`}
          >
            Welcome Back, <span>{user.name}</span>
          </p>
          <h1>
            {language === "en"
              ? "Welcome"
              : language === "fr"
              ? "Bienvenue"
              : "Bienvenido"}
          </h1>
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
          <SettingsDropdown onAvatarChange={setAvatar} />
          <div className="flex items-center space-x-2">
            <span
              className={`${
                theme === "light"
                  ? "hidden sm:inline text-sm text-black"
                  : "text-gray-400"
              }`}
            >
              {user.email}
            </span>

            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-7 h-7 rounded-full object-cover"
              />
            ) : (
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
