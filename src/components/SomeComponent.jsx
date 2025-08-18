// src/components/SomeComponent.jsx

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translate } from "../utils/translate";

const SomeComponent = () => {
  const { language } = useLanguage();

  return <p>{translate("welcome", language)}</p>;
};

export default SomeComponent;
