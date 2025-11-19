import React from 'react'

function HeroBanner() {
  return (
    <>
      <div className=" flex flex-col md:flex-row">
        <div className="flex md:w-[802px] h-[280px] flex-col  mt-[119px] md:ml-[39px]">
          <h1 className="md:text-[118px] text-3xl font-semibold text-[#FFFFFF] md:ml-0 ml-5">
            Earth's Exhale
          </h1>
          <p className="md:text-[23px] font-medium text-[#FFFFFF] md:ml-0 ml-5">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>
          <div className="flex gap-x-5 flex-col md:flex-row  text-[#FFFFFF] mt-5 ">
            <button className="w-[217px] h-16 border-2 mb-3 rounded-2xl md:ml-0 ml-5">
              Buy Now
            </button>
            <div className="w-[70px] h-[70px] border-2 rounded-full flex items-center justify-center md:ml-0 ml-5">
              <svg width="28" height="28" viewBox="0 0 100 100">
                <polygon points="35,20 80,50 35,80" fill="#FFFFFF" />
              </svg>
            </div>
            <p className="text-[25px] md:mt-4 md:ml-0 ml-5">Live Demo...</p>
            <div className="bg-white/5 backdrop-blur-15 md:h-[237px] h-50 mx-5 md:mt-[305px] mt-200 md:w-[409px] rounded-[45px] absolute  border border-white/80">
              <div className="flex">
                <img
                  src="/girl1.png"
                  alt=""
                  className="w-16 h-16 rounded-[86px] ml-5 mt-5"
                />
                <p className="mt-8 ml-8 text-[22px]  ">Ronnie Hamill</p>
              </div>
              <div>
                <p className="ml-5 text-[17px]">
                  I can't express how thrilled I am with my new natural plants!
                  They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-15 md:h-[644px] h-120 mt-[119px] mx-5 md:mx-0 rounded-4xl  border border-white/80 ">
          <div className="md:-mt-25 -mt-20">
            <img
              src="/rose gold feminine.png"
              alt=""
              className="w-[459px] h-459px]"
            />
          </div>
          <p className="text-[23px] text-[#FFFFFF] ml-[61px]">Indoor Plant</p>
          <p className="text-[38px] text-[#FFFFFF] ml-[61px]">
            Aglaonema plant <span className="ml-15">{">"}</span>
          </p>
          <button className="text-[28px] text-white ml-[61px]  w-[217px] border-2 rounded-xl font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroBanner