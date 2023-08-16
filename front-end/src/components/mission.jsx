import mission from "../images/mission.jpg";

const Mission = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row-reverse items-center justify-center gap-2 md:gap-10 mt-10 text-[#352E5B]">
      <div className="w-10/12 md:w-3/12">
        <img src={mission} alt="mission" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 md:gap-5 w-11/12 md:w-2/6">
        <p className="text-2xl font-semibold text-center md:text-start">
          <span className="text-[#7D67FF]">Our Mission:</span> Illuminating the
          Crypto Frontier
        </p>
        <p className="text-opacity-90 text-center md:text-start">
          Driven by the vision to demystify cryptocurrencies, we empower users
          with real-time data, actionable insights, and a seamless experience.
          Join us in shaping informed decisions within the dynamic world of
          crypto.
        </p>
      </div>
    </div>
  );
};

export default Mission;
