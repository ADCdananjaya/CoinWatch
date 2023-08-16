import chart from "../images/charts.jpg";

const Insights = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 mt-10 text-[#352E5B]">
      <div className="w-10/12 md:w-3/12">
        <img src={chart} alt="charts" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 md:gap-5 w-11/12 md:w-2/6">
        <p className="text-2xl font-semibold text-center md:text-start">
          Uncover Insights with Real-time Data
        </p>
        <p className="text-opacity-90 text-center md:text-start">
          Our interactive charts and graphs offer a clear view of real-time
          changes in prices, market capitalization, trading volumes, and more.
          Whether you're a seasoned trader or a curious investor, these visuals
          provide a crystal-clear perspective on market movements.
        </p>
      </div>
    </div>
  );
};

export default Insights;
