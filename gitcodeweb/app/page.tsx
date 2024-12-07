import { Heart } from "lucide-react";

export default function Home() { 
  return (
    <main className="min-h-screen text-[#B5F004] flex flex-col items-center m-16 gap-12">
      <div className="flex flex-col  w-full max-w-[1239px] h-[314px]">
        <h1 className="self-end lg:w-[400px] lg:text-[18px] text-end text-[12px] w-[200px]  ">
          Grow your impact, and be part of a thriving network where every contribution counts.
        </h1>
        <p className="self-start lg:w-[195px] lg:text-[42px] text-[28px] w-[30px]">Welcome to</p>
        <p className="self-center text-center w-full lg:text-[200px] lg:-mt-[120px] pl-8 text-[40px] -mt-[40px]  px-4  motion-preset-seesaw ">
          {`{Gitcodĕ-V3}`}
        </p>

      </div>
      <div className="w-24 h-24 bg-red-400">
        {/* bot */}
      </div>
      <div className="flex flex-col gap-6 " >
        <p className="text-[#B5F001] text-center">Coming Soon...</p>
        <div className="flex flex-row gap-8" >
          <button className="w-[124px] h-[50px] bg-[#B5F001] text-black font-medium flex items-center justify-center gap-2">
            <Heart size={24} className="" /> Sponser
            </button>
            <button className="w-[124px] h-[50px] border-4 border-[#B5F001]">
            Contribute
            </button>

        </div>
      </div>
    </main>
  );
}
