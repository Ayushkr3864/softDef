import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center text-center w-full p-7  justify-center h-[67px] space-x-4 md:mt-40 mt-30">
          {/* Left Bracket */}
          <span className="w-[50px]  h-[67px] border-l-4 border-b-4 border-[#c8c76f] rounded-bl-[20px]"></span>

          {/* Heading Text */}
          <h1 className="md:text-[55px]  text-4xl font-semibold text-white font-inter leading-none">
            Customer Review
          </h1>

          {/* Right Bracket */}
          <span className="w-[50px] h-[67px] border-r-4 border-t-4 border-[#c8c76f] rounded-tr-[20px]"></span>
        </div>
        <div className="flex h-full  flex-wrap md:flex-row w-full">
          <ReviewCard
            img="/user1.png"
            name="Shelly Russel"
            review="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
            star="⭐⭐⭐⭐"
          />
          <ReviewCard
            img="/user2.jpg"
            name="Lula Rolfson"
            review="Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
            star="⭐⭐⭐⭐"
          />
          <ReviewCard
            img="/user3.png"
            name="Carol Huels"
            review="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
            star="⭐⭐⭐⭐"
          />
        </div>
      </div>
    </>
  );
}

export default ReviewSection