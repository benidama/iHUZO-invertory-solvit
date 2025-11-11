// SettingsProvider.jsx
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [avatar, setAvatar] = useState("/default-avatar.png");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState({
    enabled: true,
    sound: true,
    desktop: true,
    email: false,
    duration: 3000
  });

  const updateAvatar = (newAvatar) => setAvatar(newAvatar);
  const changeLanguage = (lang) => setLanguage(lang);
  const updateNotificationSettings = (settings) => setNotifications(prev => ({ ...prev, ...settings }));

  return (
    <SettingsContext.Provider
      value={{ avatar, language, notifications, updateAvatar, changeLanguage, updateNotificationSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
