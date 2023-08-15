import millify from "millify";
import headers from "../const/homeConst";

const Stats = ({ data }) => {
  return (
    <div className="w-full flex justify-center z-0">
      <div className="flex flex-row w-full md:w-11/12">
        {headers.map((col) => (
          <div key={col.id} className="w-2/3 flex flex-col">
            {col.items.map((item) => (
              <div key={item.id} className="flex flex-col mb-3 gap-3 md:gap-0">
                <p className="opacity-50 text-sm md:text-md">{item.name}</p>
                <p className="text-2xl text-[#352E5B]">
                  {millify(data?.data?.data?.stats?.[item.id])}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
