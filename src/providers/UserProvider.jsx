import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Quintus",
    email: "benidama02@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
