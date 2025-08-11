// useSetting.jsx
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsProvider";
// import { SettingsContext } from "../context/SettingsProvider";

const useSetting = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSetting must be used within SettingsProvider");
  }
  return context;
};

export default useSetting;
