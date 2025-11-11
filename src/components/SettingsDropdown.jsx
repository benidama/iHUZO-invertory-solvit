// src/components/SettingsDropdown.jsx

import React, { useState, useRef } from "react";
import { Settings, UploadCloud, Globe, Bell } from "lucide-react";
import AvatarUploader from "./AvatarUploader";
import { useLanguage } from "../contexts/LanguageContext";
import { useNotification } from "../contexts/NotificationContext";
import NotificationSettings from "./NotificationSettings";
import { translate } from "../utils/translate";

const SettingsDropdown = ({ onAvatarChange }) => {
  const { language, changeLanguage } = useLanguage();
  const { addNotification } = useNotification();
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const fileInputRef = useRef(null);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    const languageNames = {
      en: 'English',
      fr: 'Français', 
      sw: 'Kishwahili',
      ru: 'Russian',
      zh: 'Chinese',
      es: 'Español'
    };
    
    changeLanguage(newLanguage);
    addNotification(`${translate('languageChanged', language)} ${languageNames[newLanguage]}`, 'success');
  };

  const handleAvatarChange = (avatarData) => {
    if (onAvatarChange) {
      onAvatarChange(avatarData);
      addNotification(translate('profileUpdated', language) || 'Profile photo updated successfully', 'success');
    }
  };

  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen((prev) => !prev)}>
        <Settings className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0  mt-2 p-4 bg-palette-100 dark:bg-gray-700 rounded shadow-lg w-56 space-y-3 z-50">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-palette-50 outline-none text-gray-700 text-sm flex rounded-md border border-gray-300 focus:border-blue-500 p-1"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="sw">Kishwahili</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="es">Español</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          {/* Profile Photo Upload */}
          <div className="flex items-center space-x-2">
            <UploadCloud className="w-5 h-5" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-800 hover:underline text-sm"
            >
              {translate('changeProfilePhoto', language)}
            </button>
            <AvatarUploader ref={fileInputRef} onChange={handleAvatarChange} />
          </div>

          {/* Notification Settings */}
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-blue-800 hover:underline text-sm"
            >
              {translate('notificationSettings', language)}
            </button>
          </div>
        </div>
      )}

      {/* Notification Settings Modal */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-md w-full mx-4">
            <button
              onClick={() => setShowNotifications(false)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg z-10"
            >
              ✕
            </button>
            <NotificationSettings />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
