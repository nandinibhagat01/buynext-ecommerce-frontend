export const login = (email) => {
  const user = {
    email,
    name: email.split("@")[0],
    joined: new Date().getFullYear(),
    orders: [],
  };

  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logout = () => {
  localStorage.removeItem("user");
};
