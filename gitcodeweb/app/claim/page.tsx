import React from "react";

const Claim = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-16">
        <div className="grid md:grid-cols-2 gap-8 justify-between items-center h-full w-full">
            <div className="h-full p-16 ">
            <div className="bg-black text-lime-400 border border-lime-400 h-full w-[475px]  rounded-2xl relative">
                <h1 className="text-5xl font-bold mt-10 ml-10 leading-snug">CLAIM YOUR BOUNTY</h1>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 bg-gray-900 rounded-full w-24 h-24">
                    <div className="absolute inset-0 m-auto bg-gray-900 border-4 border-lime-400 rounded-full w-16 h-16"></div>
                </div>
            </div>
            </div>

            <div className="text-lime-400 p-16">
            <h2 className="text-3xl font-semibold mb-2">let's go !!</h2>
            <p className="mb-6 text-sm">
                Make sure your submitted PR has been merged!
            </p>

            <form className="space-y-6">
                <h3 className="text-lg font-semibold text-lime-400 mb-4">
                Fill in the required details below:
                </h3>

                <div>
                <label
                    className="block text-sm font-semibold text-lime-400 mb-1"
                >
                    Github Project ID
                </label>
                <input
                    id="projectId"
                    type="text"
                    placeholder="#123456"
                    className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                />
                </div>

                <div>
                <label
                    className="block text-sm font-semibold text-lime-400 mb-1"
                >
                    Repository Name
                </label>
                <input
                    id="repositoryName"
                    type="text"
                    placeholder="@abcdef"
                    className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                />
                </div>

                <div>
                <label
                    className="block text-sm font-semibold text-lime-400 mb-1"
                >
                    Github Username of Contributor
                </label>
                <input
                    id="githubUsername"
                    type="text"
                    placeholder="@abcdef"
                    className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                />
                </div>

                <div>
                <label
                    className="block text-sm font-semibold text-lime-400 mb-1"
                >
                    Pull Request No #
                </label>
                <input
                    id="prNumber"
                    type="text"
                    placeholder="#123456"
                    className="w-full bg-gray-700 text-lime-400 placeholder-lime-400 placeholder-opacity-40 bg-opacity-40 border-b border-lime-400 rounded-md px-4 py-2 focus:outline-none"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-lime-400 text-black font-trap font-semibold py-2 rounded-md hover:bg-lime-300 transition"
                >
                Claim Bounty
                </button>
            </form>
            </div>
        </div>
    </div>
  );
};

export default Claim;
