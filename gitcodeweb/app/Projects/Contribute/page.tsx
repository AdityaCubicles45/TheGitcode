import React from "react";

const Claim: React.FC = () => {
  const cards = Array(8).fill({
    title: "Slack",
    description: "add a feature of night mode",
  });

  return (
    <div className="min-h-screen bg-[#1B2B1C] p-8">
      {/* Header Search */}
      {/* <div className="flex justify-center bg-slate-400 mb-24 my-6">
        <input
          type="text"
          placeholder="Type to begin contribution"
          className="bg-gray-100 text-green-400 placeholder-green-400 px-4 py-2 rounded-md focus:outline-none"
        />
        <div className=" flex">
          <p className="bg-lime-400 text-black font-bold ml-4 px-4 py-2 rounded-md">Ctrl</p>
          <p className="items-center">+</p>
          <p className="bg-lime-400 text-black font-bold ml-4 px-4 py-2 rounded-md">k</p>
        </div>
      </div> */}

      {/* Cards */}
      <div className="grid md:grid-cols-3 mt-14 mx-12 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-purple-500 hover:bg-purple-400 transition-all duration-300 p-6 rounded-lg"
            style={{
              backgroundColor: index % 4 === 1 ? "#a4f4a9" : index % 4 === 2 ? "#f4a9a4" : index % 4 === 3 ? "#a9c9f4" : "#d4a4f4",
            }}
          >
            <div className="flex flex-row items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <h3 className="text-xl font-semibold ml-4 text-white">{card.title}</h3>
            </div>
            
            <p className="text-white text-lg py-5 mt-2">{card.description}</p>
            <div className="flex items-center">
              <button
                // onClick={}
                className="relative w-full rounded-lg bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out"
              >View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claim;
