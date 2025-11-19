import React from "react";

// You would ideally import your plant image. For this example, I'll use a placeholder.
// If you have the image locally, put it in `src/assets/` and import:
// import aglaonemaPlant from '../assets/aglaonema-plant.jpg';
// For demonstration, I'll use a generic placeholder URL.

const Card = ({img,desc,price,heading}) => {
  return (
    // Outer container for centering and background
    <>
        <div className="bg-white/5 z-1 shadow-2xl backdrop-blur-15 md:h-[644px] mx-3 h-150 md:w-[412px] md:ml-[57px] mt-[119px]   md:mx-0 border rounded-[77px]">
          <div className="md:-mt-25 -mt-20">
            <img
              src={img}
              alt=""
              className="w-[459px] h-459px]"
            />
          </div>
          <div className=" ">
            <h1 className="text-[38px] text-[#FFFFFF] md:ml-[57px] ml-5">
               {heading}
            </h1>
            <p className="text-[24px] text-[#FFFFFF] md:ml-[57px] ml-5">
              {desc}
            </p>
            <div className="flex justify-around">
            <h1 className="text-[38px] text-[#FFFFFF]">Rs. {price}</h1>
              <div className="border-2 border-white rounded-xl h-16 w-16 flex justify-center items-center">
                <img
                  src="/bag.png"
                  alt="bag icon"
                  className="w-[34px] h-[34px]"
                />
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Card;
