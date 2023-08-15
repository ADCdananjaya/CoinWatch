import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const host = import.meta.env.VITE_API_NEWS_HOST;

const options = {
  method: "GET",
  url: `https://${host}/news/search?q=cryptocurrency&count=20`,
  params: {
    safeSearch: "Off",
    textFormat: "Raw",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

const getNews = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getNews;
