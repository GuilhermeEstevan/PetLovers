import { useContext, createContext, useState } from "react";
import {
  TLoginData,
  TRegisterData,
  TUser,
  TUserContext,
  TUserContextProps,
  TUserUpdateData,
} from "../interface/userInterface";
import customFetch from "../utils/api";
import { toast } from "react-toastify";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from "../utils/localStorage";

const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: TUserContextProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<TUser | null>(getUserFromLocalStorage());
  const [isLoading, setIsloading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const registerUser = async (registerData: TRegisterData) => {
    try {
      setIsloading(true);
      const response = await customFetch.post("/auth/register", registerData);
      console.log(response);
      const user = response.data.user;
      setUser(user);
      setUserToLocalStorage(user);
      setIsloading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setIsloading(false);
    }
  };

  const loginUser = async (loginData: TLoginData) => {
    try {
      setIsloading(true);
      const response = await customFetch.post("/auth/login", loginData);
      const user = response.data.user;
      console.log(user);
      setUser(user);
      setUserToLocalStorage(user);
      setIsloading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setIsloading(false);
    }
  };

  const updateUser = async (updateData: TUserUpdateData) => {
    try {
      setIsloading(true);
      const token = user?.token;
      const response = await customFetch.patch("/auth/updateUser", updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedUser = response.data.user;
      setUser(updatedUser);
      setUserToLocalStorage(updatedUser);
      toast.success("Alterações salvas!");
      setIsloading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setIsloading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    removeUserFromLocalStorage();
  };

  const sendResetEmailPassword = async (email: string) => {
    try {
      setIsloading(true);
      await customFetch.post("/auth/resetPassword", { email });
      toast.success("Acesse seu e-mail para redefinir a senha!");
      setIsloading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setIsloading(false);
    }
  };

  const resetPassword = async (password: string, token: string) => {
    try {
      setIsloading(true);
      const response = await customFetch.patch(`/auth/resetPassword/${token}`, {
        password,
      });
      console.log(response);
      toast.success("Senha atualizada com sucesso!");
      setIsloading(false);
      return true;
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
      setIsloading(false);
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        toggleSidebar,
        isSidebarOpen,
        registerUser,
        loginUser,
        user,
        isLoading,
        updateUser,
        logoutUser,
        sendResetEmailPassword,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
