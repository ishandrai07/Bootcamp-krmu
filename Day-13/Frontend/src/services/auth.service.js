import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://login-signup-28ya.onrender.com",
  withCredentials: true,
});

export const register = async ({ email, username, password }) => {
  const res = await apiInstance.post("/register", {
    email,
    username,
    password,
  });
  return res.data;
};

export const login = async ({ email, password }) => {
  const res = await apiInstance.post("/login", {
    email,
    password,
  });
  return res.data;
};

export const Logout = async () => {
  const res = await apiInstance.post("/logout");
  return res.data;
};
