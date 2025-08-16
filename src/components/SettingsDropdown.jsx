import React, { useState } from "react";
import { Settings, UploadCloud, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import useClickOutside from "../hooks/useClickOutside";
import useSetting from "../hooks/useSetting";
import AvatarUploader from "./AvatarUploader"; // Import the component

const SettingsDropdown = () => {
  const { i18n } = useTranslation();
  const { avatar, updateAvatar, language, changeLanguage } = useSetting();

  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen((prev) => !prev)}>
        <Settings className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-700 rounded shadow-lg w-48 space-y-3 z-50">
          <div className="flex items-center">
            <Globe />
            <select
              value={language}
              onChange={(e) => {
                changeLanguage(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
              className="ml-2 flex-grow bg-transparent focus:outline-none text-gray-600"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="rw">Kinyarwanda</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div className="flex items-center">
            <UploadCloud />
            <AvatarUploader
              image={avatar}
              onChange={(newImage) => updateAvatar(newImage)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
