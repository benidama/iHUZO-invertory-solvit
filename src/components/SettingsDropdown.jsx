import React, { useState } from "react";
import { Settings, UploadCloud, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import useClickOutside from "../hooks/useClickOutside";
import useSetting from "../hooks/useSetting";

const ProfilePictureUploader = ({ defaultImage, onChange }) => {
  const inputRef = React.useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && onChange) {
      const reader = new FileReader();
      reader.onload = () => onChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div onClick={() => inputRef.current.click()} className="cursor-pointer">
      <img src={defaultImage} alt="Avatar" className="w-8 h-8 rounded-full" />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleImageUpload}
      />
    </div>
  );
};

const SettingsDropdown = () => {
  const { i18n } = useTranslation();
  const { avatar, updateAvatar, language, changeLanguage } = useSetting(); // using new hook

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
              <option value="es">Kinyarwanda</option>
              <option value="es">Franch</option>
            </select>
          </div>

          {/* Profile Picture Uploader */}
          <div className="flex items-center">
            <UploadCloud />
            <ProfilePictureUploader
              defaultImage={avatar}
              onChange={(img) => updateAvatar(img)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
