import { Link } from "react-router-dom";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-0 md:gap-8">
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start gap-5 md:gap-9 px-3 md:px-0">
        <p className="text-center md:text-start text-3xl md:text-6xl font-semibold text-[#352E5B]">
          Discover the Future of{" "}
          <span className="text-[#7D67FF]">Cryptocurrency</span>
        </p>
        <p className="text-center md:text-start text-lg text-[#352E5B]">
          Real-time Coin Data, Comprehensive Statistics, and Latest Crypto News
          -<span className="font-semibold">All in One Place</span>
        </p>
        <Link
          to="/register"
          className="bg-[#7D67FF] text-white font-semibld rounded-md px-3 py-2 shadow-sm hover:shadow-md"
        >
          Get Started
        </Link>
      </div>
      <div className="w-4/5 md:w-2/5 flex items-center justify-center">
        <img src={hero} alt="HeroImage" className="object-contain" />
      </div>
    </div>
  );
};

export default Hero;
