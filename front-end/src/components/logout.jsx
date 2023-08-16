import out from "../images/out.svg";
import { logout } from "../services/authService";

const handleClick = () => {
  logout();
  window.location.href = "/";
};

const Logout = () => {
  return (
    <button
      onClick={handleClick}
      className="w-full md:w-3/5 mb-2 md:mb-8 flex flex-row gap-2 items-center text-black text-lg opacity-70 hover:opacity-100"
    >
      <img src={out} alt="LogOut" className="w-7 object-contain" />
      Log out
    </button>
  );
};

export default Logout;
