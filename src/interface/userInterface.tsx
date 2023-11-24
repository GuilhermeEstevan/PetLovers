export type TUserContext = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  registerUser: (registerData: TRegisterData) => void;
  loginUser: (loginData: TLoginData) => void;
  updateUser: (updatedData: TUserUpdateData) => void;
  logoutUser: () => void;
  user: TUser | null;
  isLoading: boolean;
  sendResetEmailPassword: (email: string) => void;
  resetPassword: (password: string, token: string) => Promise<boolean>;
};

export type TUser = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  token: string;
};

export type TUserContextProps = {
  children: React.ReactNode;
};

export type TRegisterData = {
  name: string;
  email: string;
  password: string;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TUserUpdateData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
};
