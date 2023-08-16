import Hero from "./hero";
import Login from "./login";
import Navbar from "./navbar";

//#7D67FF
const Landing = ({ user }) => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-screen flex flex-col bg-slate-100">
        <Navbar user={user} />
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
