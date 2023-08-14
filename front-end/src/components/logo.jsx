import logo from "../images/logo.svg";

const Logo = () => {
  return (
    <div className="w-auto h-auto flex flex-row gap-3">
      <img src={logo} alt="Logo" />
      <div className="text-xl">
        Coin<span className="font-bold">Watch</span>
      </div>
    </div>
  );
};

export default Logo;
