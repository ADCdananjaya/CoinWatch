import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Coins from "./coins";
import Exchanges from "./exchanges";
import News from "./news";
import Sidebar from "./sidebar";
import getCoins from "../services/cryptoApi";
import getNews from "../services/cryptoNews";
import CoinDetails from "./coinDetails";

const Dashboard = () => {
  const [data, setData] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getCoins();
      const news = await getNews();
      setData(data);
      setNews(news);
    };
    getData();
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home data={data} news={news} />} />
        <Route path="/coins" element={<Coins data={data} />} />
        <Route path="/coins/:id" element={<CoinDetails data={data} />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/news" element={<News data={news} />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
