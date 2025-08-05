// import { useContext } from "react";
// import { AuthUsersProvider } from "../contexts/AuthUsersProvider";

// const useAuthProduct = () => {
//   const context = useContext(AuthUsersProvider);
//   if (!context) {
//     throw new Error("useAuthProduct must be inside a ProductProvider");
//   }
//   return context;
// };
// export default useAuthProduct;
// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthUsersContext } from "../contexts/AuthUsersProvider";

const useAuth = () => {
  const context = useContext(AuthUsersContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthUsersProvider");
  }
  return context;
};

export default useAuth;
