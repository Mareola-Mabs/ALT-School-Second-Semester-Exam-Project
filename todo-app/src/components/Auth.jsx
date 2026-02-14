// auth.js
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};


// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.oluwasetemi.dev",
});

// attach token
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
