import { NavLink } from "react-router-dom";
import Logo from "./logo";
import sideItems from "../const/sideItems";
import Logout from "./logout";

const Sidebar = () => {
  return (
    <div className="hidden w-60 h-screen text-black md:flex flex-col gap-5 items-center">
      <div className="w-60 h-full flex flex-col fixed gap-5 items-center">
        <div className="w-full flex items-center justify-center pt-10 pb-5">
          <Logo />
        </div>
        <div className="w-full h-5/6 flex flex-col justify-between items-center">
          <div className="w-full h-auto flex flex-col gap-3">
            {sideItems.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? "w-full flex justify-center text-[#352E5B] border-r-4 border-[#7D67FF]"
                    : `w-full flex justify-center opacity-40`
                }
                to={"/dashboard" + item.path}
              >
                <div className="w-3/5 flex flex-row items-center gap-5 text-lg">
                  <div className="w-6">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
