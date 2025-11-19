import React from "react";
import Card from "./TopSellingCard";

function TopSellingPlant() {
  return (
    <>
      <div>
        <div className="flex items-center text-center w-full justify-center h-[67px] space-x-4 md:mt-40 mt-30">
          {/* Left Bracket */}
          <span className="w-[50px]  h-[67px] border-l-4 border-b-4 border-[#c8c76f] rounded-bl-[20px]"></span>

          {/* Heading Text */}
          <h1 className="md:text-[55px] text-4xl font-semibold text-white font-inter leading-none">
            Our Top Selling Plants
          </h1>

          {/* Right Bracket */}
          <span className="w-[50px] h-[67px] border-r-4 border-t-4 border-[#c8c76f] rounded-tr-[20px]"></span>
        </div>
        <div className="flex h-full  flex-wrap md:flex-row w-full">
          <Card
            img="./rose gold feminine.png"
            heading="Aglaonema plant"
            desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care"
            price="300/-"
          />
          <Card
            img="./caligraphy monogram.png"
            heading="Plantain Lilies"
            desc="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
            price="380/-"
          />
          <Card
            img="./logo3.png"
            heading="Cactus"
            desc="It is known for their ability to thrive in arid environments"
            price="Rs. 259/-"
          />
        </div>
        <div className="flex h-full flex-col md:flex-row w-full">
          <Card
            img="./logo4.png"
            heading="Swiss cheese Plant"
            desc="It is a popular tropical houseplant known for its distinctive, perforated leaves"
            price="400/-"
          />
          <Card
            img="logo5.png"
            heading="Sansevieria plant"
            desc="It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
            price="450/-"
          />
          <Card
            img="logo6.png"
            heading="Agave plant"
            desc="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
            price="359/-"
          />
        </div>
      </div>
    </>
  );
}

export default TopSellingPlant;
