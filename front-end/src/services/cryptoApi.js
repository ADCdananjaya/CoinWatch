import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const host = import.meta.env.VITE_API_COIN_HOST;

const options = {
  method: "GET",
  url: `https://${host}/coins`,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

const getCoins = async () => {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getCoins;
