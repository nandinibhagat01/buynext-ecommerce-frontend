export const login = (email) => {
  const firstName = email.split("@")[0];
  const user = {
    email,
    firstName,
    lastName: "",
    joined: new Date().getFullYear(),
    orders: [],
  };

  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const updateUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("user");
};
