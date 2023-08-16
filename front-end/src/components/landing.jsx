import Login from "./login";
import Navbar from "./navbar";

//#7D67FF
const Landing = ({ user }) => {
  return (
    <div className="w-full h-auto">
      <Navbar user={user} />
      <p className="text-5xl">Hello world</p>
      <Login />
    </div>
  );
};

export default Landing;
