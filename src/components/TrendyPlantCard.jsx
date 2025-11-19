import React from 'react'

function TrendyPlant({
  title,
  description,
  price,
  image,
  reverse = false,
}) {
  return (
    <>
      <div className=" ">
       
        <div
          className={`bg-white/5 backdrop-blur-15 mt-20 items-center mx-3 flex md:h-[426px] h-150 md:mt-[119px] rounded-[50px] md:rounded-[151px] md:mx-[54px] border border-white/80 
      ${reverse ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"}`}
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className={`md:w-[601px] md:h-[601px]  h-50 w-50 ${
              reverse ? "md:mr-[70px] md:-mt-[130px]" : "md:ml-[70px]"
            } md:-mt-38 -mt-15`}
          />

          {/* Content */}
          <div className="md:mt-[70px] mt- space-y-4 md:px-10">
            <h1 className="font-semibold text-[38px] text-white md:ml-0 ml-5 font-inter">
              {title}
            </h1>

            <p className="text-[20px] text-white font-semibold leading-snug  md:ml-0 ml-5 max-w-[500px]">
              {description}
            </p>

            <h1 className="text-[38px] text-white font-medium  md:ml-0 ml-5">
              {price}
            </h1>

            <div
              className={`flex gap-x-10 mt-6  ${reverse ? "md:ml-10" : "ml-0"}`}
            >
              <button className="text-[28px] text-white  w-[217px] ml-2 md:ml-0 border-2 rounded-xl font-semibold">
                Explore
              </button>

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
      </div>
    </>
  );
}

export default TrendyPlant