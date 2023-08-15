import { useState, useEffect } from "react";
import { getExchanges } from "../services/cryptoApi";
import Loading from "./loading";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState();
  console.log(exchanges);

  useEffect(() => {
    const getData = async () => {
      const data = await getExchanges();
      setExchanges(data);
    };
    getData();
  }, []);

  if (!exchanges) return <Loading />;
  return (
    <div className="w-full h-auto bg-slate-50 flex flex-col">
      <p className="text-2xl">Exchanges</p>
    </div>
  );
};

export default Exchanges;
