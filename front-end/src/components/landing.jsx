import Features from "./features";
import Footer from "./footer";
import Hero from "./hero";
import Insights from "./insights";
import Login from "./login";
import Mission from "./mission";
import Navbar from "./navbar";
import Reach from "./reach";

//#7D67FF
const Landing = ({ user }) => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-screen flex flex-col bg-slate-100">
        <Navbar user={user} />
        <Hero />
      </div>
      <Features />
      <Insights />
      <Reach />
      <Mission />
      <Footer />
    </div>
  );
};

export default Landing;
