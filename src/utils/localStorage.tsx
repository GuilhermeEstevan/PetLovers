import { TUser } from "../interface/userInterface";

const setUserToLocalStorage = (user: TUser) => [
  localStorage.setItem("user", JSON.stringify(user)),
];

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

const getUserFromLocalStorage = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;
  return user;
};

export {
  setUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
