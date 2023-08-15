import millify from "millify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGeneric, getStats } from "../const/coinConst";
import { getCoin, getHistory, getModifiers } from "../services/cryptoApi";
import Modifiers from "./coinModifiers";
import LineChart from "./lineChart";
import Loading from "./loading";

const CoinDetails = ({ data }) => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [modifiers, setModifiers] = useState();
  const [history, setHistory] = useState();
  const stats = getStats(coin);
  const generic = getGeneric(coin);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCoin(id);
      const coin = data?.data?.coin;

      const mod = await getModifiers(id);
      const modifiers = mod?.data?.data?.modifiers;

      const { data: his } = await getHistory(id);
      const history = his?.data?.history;

      setCoin(coin);
      setModifiers(modifiers);
      setHistory(history);
    };
    getData();
  }, []);

  return (
    <div className="w-full h-auto bg-slate-50 flex flex-col items-center">
      <p className="w-10/12 text-center text-3xl font-semibold text-[#352E5B] mt-8">{`${coin?.name} (${coin?.symbol}) Price`}</p>
      <p className="w-10/12 text-center text-md text-[#352E5B] pb-8 border-b-2">{`${coin?.name} live price in US dollars. View value statistics, market and supply.`}</p>
      <LineChart
        coinHistory={history}
        currentPrice={millify(coin?.price)}
        coinName={coin?.name}
      />
      <div className="w-10/12 flex flex-wrap gap-5 justify-between mt-8">
        <div className="w-full md:w-2/5 flex flex-col">
          <p className="w-auto text-2xl text-center font-semibold">{`${coin?.name} Value Statistics`}</p>
          <p className="w-auto text-md text-center mb-5">{`An overview showing the stats of ${coin?.name}`}</p>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100"
            >
              <div className="w-3/5 flex flex-row gap-1">
                <img className="w-5 object-cover" src={stat.icon} alt="Icon" />
                <p>{stat.title}</p>
              </div>
              <p className="font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-auto flex flex-col">
          <p className="w-auto text-2xl text-center font-semibold mb-5">{`Other Statistics`}</p>
          {generic.map((stat, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100"
            >
              <div className="flex flex-row gap-2">
                <img className="w-5 object-cover" src={stat.icon} alt="Icon" />
                <p>{stat.title}</p>
              </div>
              <p className="font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row justify-between gap-5 mt-8">
        <div className="w-full md:w-3/5 flex flex-col">
          <p className="w-auto text-2xl text-center font-semibold mb-3">{`What is ${coin?.name}`}</p>
          <p className="text-md text-[#352E5B]">{coin?.description}</p>
          <Modifiers modifiers={modifiers} />
        </div>
        <div className="w-full md:w-3/5 flex flex-col">
          <p className="w-auto text-2xl text-center font-semibold mb-5">{`${coin?.name} Links`}</p>
          {coin?.links &&
            coin?.links.map((link) => (
              <div className="flex flex-row gap-8 border justify-between px-2 md:px-8 py-3 mb-3 rounded-md shadow-sm hover:shadow-md hover:bg-slate-100">
                <p className="font-semibold text-[#352E5B] text-lg">
                  {link.type}
                </p>
                <a className="text-blue-900" target="_blank" href={link.url}>
                  {link.name}
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
