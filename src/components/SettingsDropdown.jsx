// src/components/SettingsDropdown.jsx

import React, { useState, useRef } from "react";
import { Settings, UploadCloud, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import AvatarUploader from "./AvatarUploader";
import { useLanguage } from "../contexts/LanguageContext";

const SettingsDropdown = ({ onAvatarChange }) => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    changeLanguage(newLanguage);
    // Optionally, trigger a reload or update translations here
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
              <option value="rw">Kinyarwanda</option>
              <option value="sw">Kishwahili</option>
              <option value="ru">Russian</option>
              <option value="俄">Chinese</option>
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
              {t("change_profile_photo", "Change profile photo")}
            </button>
            <AvatarUploader ref={fileInputRef} onChange={onAvatarChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
