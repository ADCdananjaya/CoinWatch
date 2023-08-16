import axios from "axios";
const apiEndPoint = import.meta.env.VITE_API_END_POINT;

const register = async (user) => {
  return await axios.post(`${apiEndPoint}/users`, user);
};

export default register;
