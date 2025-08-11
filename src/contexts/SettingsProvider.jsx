// SettingsProvider.jsx
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [avatar, setAvatar] = useState("/default-avatar.png");
  const [language, setLanguage] = useState("en");

  const updateAvatar = (newAvatar) => setAvatar(newAvatar);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <SettingsContext.Provider
      value={{ avatar, language, updateAvatar, changeLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
