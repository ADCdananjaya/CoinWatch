import millify from "millify";
import images from "../images";

const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

export const getStats = (coin) => {
  return [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
      icon: images.dollar,
    },
    { title: "Rank", value: coin?.rank, icon: images.hash },
    {
      title: "24h Volume",
      value: `₹ ${coin?.["24hVolume"] && millify(coin?.["24hVolume"])}`,
      icon: images.clock,
    },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
      icon: images.dollar,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
      }`,
      icon: images.cup,
    },
  ];
};

export const getGeneric = (coin) => {
  return [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: images.markets,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: images.arrows,
    },
    {
      title: "Approved Supply",
      value: coin?.supply?.confirmed ? "True" : "False",
      icon: images.exclamtion,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
      icon: images.exclamtion,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.supply?.circulating && millify(coin?.supply?.circulating)
      }`,
      icon: images.exclamtion,
    },
  ];
};

export default time;
