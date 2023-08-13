import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="w-60 h-screen bg-teal-800 text-white flex flex-col gap-5">
      <Link to="/">Home</Link>
      <Link to="/coins">Coins</Link>
      <Link to="/exchanges">Exchanges</Link>
      <Link to="/news">News</Link>
    </div>
  );
};

export default Sidebar;
