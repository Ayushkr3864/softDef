import React from 'react'
import TrendyPlantCard from "./TrendyPlantCard"
function TrendyPlantSection() {
  return (
    <>
      <div className="relative">
        <div className="flex items-center text-center  justify-center px-10 h-[67px] md:mt-40 mt-80">
          {/* Left Bracket */}
          <span className="w-[50px]  h-[67px] border-l-4 border-b-4 border-[#c8c76f] rounded-bl-[20px]"></span>
          {/* Heading Text */}
          <h1 className="md:text-[55px] text-4xl font-semibold text-white font-inter leading-none">
            Our Trendy plants
          </h1>
          {/* Right Bracket */}
          <span className="w-[50px] h-[67px] border-r-4 border-t-4 border-[#c8c76f] rounded-tr-[20px]"></span>
        </div>
        <div>
          <TrendyPlantCard
            title="For Your Desks Decorations"
            description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
            price="Rs. 599/-"
            image="/caligraphy monogram.png"
            reverse={false}
          />
          <TrendyPlantCard
            title="For Your Desks Decorations"
            description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming."
            price="Rs. 399/-"
            image="/caligraphy 2.png"
            reverse={true}
            imageMargin="ml-[0px]"
          />
        </div>
      </div>
    </>
  );
}

export default TrendyPlantSection