import { createContext, useState } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuTabletSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Laptops",
      icon: <GrPersonalComputer className="text-2xl" />,
    },
    {
      id: 2,
      name: "Mobile",
      icon: <IoPhonePortraitOutline className="text-2xl" />,
    },
    {
      id: 3,
      name: "Tablets",
      icon: <LuTabletSmartphone className="text-2xl" />,
    },
    {
      id: 4,
      name: "Accessories",
      icon: <BsTools className="text-2xl" />,
    },
  ]);

  const addCategory = (category) => {
    setCategories((prev) => [...prev, { ...category, id: Date.now() }]);
  };

  const removeCategory = (id) => {
    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, addCategory, removeCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
