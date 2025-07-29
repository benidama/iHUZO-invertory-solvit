import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be inside a ProductProvider");
  }
  return context;
}
