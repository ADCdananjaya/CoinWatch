import { Link } from "react-router-dom";
import Coins from "./coins";
import News from "./news";
import Loading from "./loading";
import Stats from "./stats";

const Home = ({ data, news }) => {
  if (!data) return <Loading />;
  return (
    <div className="w-full h-full bg-slate-50 flex flex-col px-8 pt-5">
      <p className="text-2xl md:text-3xl text-[#352E5B] font-semibold my-5">
        Global Crypto Stats
      </p>
      <Stats data={data} />
      <div className="w-full mt-8 mb-7 flex flex-row justify-between items-center">
        <p className="hidden md:block text-3xl text-[#352E5B] font-semibold">
          Top 10 Coins in the world
        </p>
        <p className="md:hidden text-2xl text-[#352E5B] font-semibold">
          Top 10 Coins
        </p>
        <Link
          to="/dashboard/coins"
          className="text-[#7D67FF] text-lg md:text-xl hover:text-[#1b03a4]"
        >
          See all
        </Link>
      </div>
      <Coins data={data} limit={10} />

      <div className="w-full mt-8 flex flex-row justify-between">
        <p className="hidden md:block text-3xl md:text-3xl text-[#352E5B] font-semibold mb-8">
          Latest Crypto News.
        </p>
        <p className="md:hidden text-2xl md:text-3xl text-[#352E5B] font-semibold mb-8">
          Latest News.
        </p>
        <Link
          to="/dashboard/news"
          className="text-[#7D67FF] text-lg md:text-xl pt-1 md:pt-0 hover:text-[#1b03a4]"
        >
          See all
        </Link>
      </div>
      <News data={news} limit={10} />
    </div>
  );
};

export default Home;
