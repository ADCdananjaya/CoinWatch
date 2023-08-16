import { useState, useEffect } from "react";
import moment from "moment";
import thumbnail from "../images/thumbnail.jpg";
import star from "../images/star.png";

const News = ({ data, limit = 20 }) => {
  const items = data?.value;
  const [news, setNews] = useState(items ? items.slice(0, limit) : []);

  useEffect(() => {
    if (limit === 20) setNews(items);
    else setNews(items?.slice(0, limit));
  }, [items]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-slate-50">
      {limit === 20 && (
        <p className="w-full md:w-11/12 text-center md:text-left text-3xl text-[#352E5B] font-semibold my-8">
          Latest News.
        </p>
      )}
      <div className="w-full md:w-11/12 h-auto flex flex-wrap justify-center md:justify-normal gap-5">
        {news &&
          news.map((item, i) => (
            <a
              href={item.url}
              target="_blank"
              key={i}
              className="w-72 h-auto flex flex-col justify-between bg-gray-100 text-[#352E5B] gap-5 p-3 border rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="w-full flex flex-row justify-between items-start">
                <p className="w-7/12 flex-wrap font-semibold text-lg">
                  {item.name}
                </p>
                <img
                  src={item?.image?.thumbnail?.contentUrl || thumbnail}
                  className="w-24 object-contain"
                  alt="Image"
                />
              </div>
              <p className="text-sm">{item.description}</p>
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row-reverse gap-2">
                  <p>{item?.provider[0]?.name}</p>
                  <img
                    src={
                      item?.provider[0]?.image?.thumbnail?.contentUrl || star
                    }
                    className="w-8 object-contain"
                    alt="Avatar"
                  />
                </div>
                <p className="">
                  {moment(item.datePublished).startOf("ss").fromNow()}
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default News;
