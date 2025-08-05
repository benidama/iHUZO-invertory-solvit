import { createContext, useState } from "react";

export const AuthUsersContext = createContext();

export const AuthUsersProvider = ({ children }) => {
  const [validateUser] = useState({
    userName: "Admin",
    password: "Estote123",
  });

  return (
    <AuthUsersContext.Provider value={{ validateUser }}>
      {children}
    </AuthUsersContext.Provider>
  );
};
