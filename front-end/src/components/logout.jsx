import out from "../images/out.svg";

const Logout = () => {
  return (
    <a
      href="/"
      className="w-full md:w-3/5 mb-2 md:mb-8 flex flex-row gap-2 items-center text-black text-lg opacity-70 hover:opacity-100"
    >
      <img src={out} alt="LogOut" className="w-7 object-contain" />
      Log out
    </a>
  );
};

export default Logout;
