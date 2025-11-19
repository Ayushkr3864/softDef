import React from "react";

export default function BestO2Plants() {
    return (
      <>
        <div className="flex items-center text-center w-full p-7  justify-center h-[67px] space-x-4 md:mt-40 mt-30">
          {/* Left Bracket */}
          <span className="w-[50px]  h-[67px] border-l-4 border-b-4 border-[#c8c76f] rounded-bl-[20px]"></span>

          {/* Heading Text */}
          <h1 className="md:text-[55px]  text-4xl font-semibold text-white font-inter leading-none">
            Our Best o2
          </h1>

          {/* Right Bracket */}
          <span className="w-[50px] h-[67px] border-r-4 border-t-4 border-[#c8c76f] rounded-tr-[20px]"></span>
        </div>
        <div
          className={`bg-white/5 backdrop-blur-15 mt-20 items-center mx-3 flex flex-col md:flex-row md:h-[755px]  md:mt-[119px] rounded-[50px] md:rounded-[151px] md:mx-[54px] border border-white/80`}
        >
          <div className="md:w-[877px] h-[877px] md:mb-30 -ml-10  md:mt-0  ">
            <img src="/rose gold feminine.png" alt="plant" />
          </div>
          <div className="md:w-[739px] md:mt-30 m-3  -mt-120 ">
            <h1 className="text-[#FFFFFF] text-[38px] ">
              We Have Small And Best O2 Plants Collection’s
            </h1>
            <div className=" mt-10">
              <p className="text-[#FFFFFF] text-[28px]">
                Oxygen-producing plants, often referred to as "O2 plants," are
                those that release oxygen into the atmosphere through the
                process of photosynthesis.
              </p>
              <p className="text-[#FFFFFF] text-[28px] mt-20">
                Many plants can help filter out pollutants and toxins from the
                air, such as formaldehyde, benzene, and trichloroethylene. This
                makes the air cleaner and healthier to breathe.
              </p>
              <div className={`flex gap-x-10 mt-6 `}>
                <button className="text-[28px] text-white  w-[217px] border-2 rounded-xl font-semibold">
                  Explore
                </button>

                <div className="">
                  <p className="text-[20px] text-[#FFFFFF]">{"<  01/02  >"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
