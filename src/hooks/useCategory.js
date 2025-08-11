import React from "react";
import { CategoryContext } from "../contexts/CategoryContext";

export const useCategory = () => {
  const context = React.useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
