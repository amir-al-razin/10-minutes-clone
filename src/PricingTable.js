import React from "react";

const List = ({ text }) => {
  return (
    <li className="flex items-center gap-2">
      <AiOutlineCheck className="px-1 text-2xl  bg-zinc-600 rounded-full text-zinc-200" />
      <span className="before:absolute before:content-[''] before:inset-0 relative before:bg-zinc-500 text-zinc-200 ">
        {text}
      </span>
    </li>
  );
};

export const PricingTable = ({ index }) => {
  return (
    <div className="flex  flex-col gap-3 mb-6 bg-zinc-800 text-left rounded-lg  px-4 py-4">
      <div
        className="
        w-[40%] h-1 rounded-xl  bg-gradient-to-r from-green-500 to-blue-500
        "
      />
      <h2 className="title text-2xl font-bold mb-6">
        Package {index}
        <span className="text-sm ml-1 font-semibold text-zinc-300 ">
          500 BDT
          <span className="month">/Month</span>
        </span>
      </h2>
      <ul className="content text-base flex flex-col gap-2  font-medium uppercase">
        {[
          "Bandwith 8Mbps",
          "Youtube Unlimited",
          "FTP 100Mbps",
          "Support 24/7",
        ].map((text) => (
          <List text={text} />
        ))}
      </ul>
      <button className="btn uppercase bg-zinc-700 rounded-lg py-2  text-base mt-4 w-full transition duration-200 hover:bg-zinc-600 font-bold">
        Order Now
      </button>
    </div>
  );
};

const PricingTables = () => {
  return (
    <section className=" mx-auto container flex flex-wrap dark:text-zinc-200 gap-3 p-4 ">
      {new Array(6).fill(null).map((_, index) => (
        <PricingTable index={++index} />
      ))}
    </section>
  );
};

export default PricingTables;

function AiOutlineCheck(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  );
}
