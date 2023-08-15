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

export const getCoin = async (id) => {
  try {
    const newOptions = { ...options };
    newOptions.url = `https://${host}/coin/${id}`;
    newOptions.params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    };
    const response = await axios.request(newOptions);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getModifiers = async (id) => {
  try {
    const newOptions = { ...options };
    newOptions.url = `https://${host}/coin/${id}/modifiers`;
    newOptions.params = {
      limit: "5",
      offset: "0",
    };
    const response = await axios.request(newOptions);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getHistory = async (id) => {
  try {
    const newOptions = { ...options };
    newOptions.url = `https://${host}/coin/${id}/history`;
    newOptions.params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "7d",
    };
    const response = await axios.request(newOptions);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getCoins;
