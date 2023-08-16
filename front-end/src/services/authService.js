import axios from "axios";
import jwtDecode from "jwt-decode";
const apiEndPoint = import.meta.env.VITE_API_END_POINT;
const tokenKey = import.meta.env.VITE_API_TOKEN_KEY;

export const login = async (data) => {
  const { data: jwt } = await axios.post(`${apiEndPoint}/auth`, data);
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return {};
  }
};

export default { login, logout, getCurrentUser };
