import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext is undefined");
  }
  return context;
};
export default useUser;
