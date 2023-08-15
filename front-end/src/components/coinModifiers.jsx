import millify from "millify";
import moment from "moment";

const Modifiers = ({ modifiers }) => {
  return (
    <div className="flex flex-col mt-8">
      <p className="text-2xl text-center font-semibold mb-5">Coin Modifiers</p>
      <div className="flex flex-col gap-2">
        <p className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100">
          <p>Blockchain</p>
          {modifiers && modifiers[0] ? modifiers[0].blockchainName : "Unknown"}
        </p>
        <p className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100">
          <p>Name</p>
          {modifiers && modifiers[0] ? modifiers[0].name : "Unnamed"}
        </p>
        <p className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100">
          <p>Synced At</p>
          {modifiers && modifiers[0]
            ? moment.unix(modifiers[0]?.syncedAt).format("LLL")
            : 0}
        </p>
        <p className="flex flex-row gap-5 justify-between border mb-2 py-3 px-5 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-100">
          <p>Amount</p>
          {modifiers && modifiers[0] ? millify(modifiers[0].amount) : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Modifiers;
