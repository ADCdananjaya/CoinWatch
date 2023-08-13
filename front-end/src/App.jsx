import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/coins";
import Exchanges from "./components/exchanges";
import Home from "./components/home";
import News from "./components/news";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
