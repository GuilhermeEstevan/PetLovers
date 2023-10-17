import { useContext, createContext, useState } from "react";
import { TUserContext, TUserContextProps } from "../interface/userInterface";

const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: TUserContextProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <UserContext.Provider value={{ toggleSidebar, isSidebarOpen }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
