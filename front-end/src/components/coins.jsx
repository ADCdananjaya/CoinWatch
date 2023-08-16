import { Link } from "react-router-dom";
import millify from "millify";
import { useEffect, useState } from "react";

const Coins = ({ data, limit = 100 }) => {
  const items = data?.data?.data.coins;
  const [coins, setCoins] = useState(items ? items.slice(0, limit) : []);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm && limit === 100) setCoins(items);
    else if (limit !== 100) setCoins(items?.slice(0, limit));
    else {
      const array = coins.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          ? item
          : null
      );
      setCoins(array);
    }
  }, [searchTerm, items]);

  return (
    <div className="w-full h-auto bg-white flex flex-col items-center">
      {limit === 100 && (
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-5 px-8 my-8 items-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#352E5B]">
            Available Coins
          </p>
          <input
            type="text"
            name="search"
            className="border border-x-0 border-t-0 border-b-2 border-[#7D67FF] px-2 bg-white text-[#352E5B] focus:ring-0 outline-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <div className="w-full md:w-11/12 flex flex-wrap justify-center md:justify-normal gap-5">
        {coins &&
          coins.map((coin) => (
            <Link
              key={coin.uuid}
              to={`/dashboard/coins/${coin.uuid}`}
              className="w-56 h-auto flex flex-col bg-gray-100 gap-5 p-3 border rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="w-full flex flex-row justify-between items-center">
                <p className="font-semibold text-lg text-[#352E5B]">{`${coin.rank}. ${coin.name}`}</p>
                <img
                  src={coin.iconUrl}
                  className="w-10 object-cover"
                  alt="Icon"
                />
              </div>
              <div className="flex flex-col gap-2 text-[#352E5B]">
                <p>{`Price: ${millify(coin.price)}`}</p>
                <p>{`Market Cap: ${millify(coin.marketCap)}`}</p>
                <p>{`Daily Change: ${millify(coin.change)}%`}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Coins;
