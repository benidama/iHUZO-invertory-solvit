// src/components/LanguageSelector.jsx

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="rw">Kinyarwanda</option>
      <option value="sw">Kishwahili</option>
      <option value="ru">Russian</option>
      <option value="zh">Chinese</option>
      <option value="es">Spanish</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSelector;
