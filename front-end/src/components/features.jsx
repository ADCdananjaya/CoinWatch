import features from "../const/featureConst";

const Features = () => {
  return (
    <div className="w-full h-auto flex flex-col mt-6 text-[#352E5B]">
      <p className="text-center text-3xl md:text-5xl font-semibold mb-8">
        Features and Benefits
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="w-72 p-3 shadow-sm hover:shadow-md flex flex-col items-center border gap-2 rounded-md"
          >
            <img
              src={feature.icon}
              alt="Icon"
              className="w-10 object-contain"
            />
            <p className="w-full text-center text-xl font-semibold">
              {feature.title}
            </p>
            <p className="w-full text-center opacity-90">
              {feature.description}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
