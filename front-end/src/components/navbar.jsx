import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import images from "../images";
import sideItems from "../const/sideItems";

const Navbar = (props) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-auto flex md:hidden flex-row items-center justify-between p-5">
        <Logo />
        <div className="flex flex-row gap-3">
          <img
            className="w-6 object-cover"
            src={images.menu}
            alt="Menu"
            onClick={() => setActive(true)}
          />
        </div>
      </div>
      {isActive && (
        <div className="md:hidden fixed h-screen top-0 w-full bg-black bg-opacity-50">
          <div className="absolute top-0 right-0 h-full w-40 flex flex-col bg-slate-200 text-gray-900 p-3">
            <div className="w-full flex justify-end mb-3">
              <img
                src={images.wrong}
                alt="Cross"
                className="w-5 bg-cover"
                onClick={() => setActive(false)}
              />
            </div>
            {sideItems.map((item) => (
              <Link
                to={`/dashboard${item.path}`}
                key={item.id}
                className="flex flex-row gap-3 mb-3"
              >
                <img
                  className="w-5 object-contain"
                  src={item.icon}
                  alt={item.name}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
