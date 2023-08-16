import reaches from "../const/reachConst";

const Reach = () => {
  return (
    <div className="w-full h-auto bg-slate-100 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 p-8 mt-5 md:mt-0 ">
      <div className="w-full md:w-5/12 flex flex-col gap-3">
        <p className="text-2xl font-semibold text-center md:text-start">
          Empowering Your Crypto Journey.
        </p>
        <p className="text-opacity-90 text-center md:text-start">
          Elevate your crypto journey with real-time news and comprehensive coin
          insights. Stay informed and seize opportunities today.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start w-full md:w-2/6 gap-5 md:gap-5">
        {reaches.map((r, i) => (
          <div key={i} className="flex flex-row gap-2 w-32 md:w-48 ">
            <img src={r.icon} alt="Icon" className="w-10 object-contain" />
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">{r.name}</p>
              <p className="text-sm text-opacity-80">{r.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reach;
