import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Admin",
    email: "benidama02@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
