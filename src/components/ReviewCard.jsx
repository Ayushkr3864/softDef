import React from 'react'

const ReviewCard = ({name,review,star,img}) => {
  return (
    <>
      <div className="bg-white/5 backdrop-blur-15 md:h-[380px] md:p-10 h-120 pt-10 md:pt-0 mx-3 md:mx-5 md:mt-[130px] mt-30 md:w-lg rounded-[77px]   border border-white/80">
        <div className="flex">
          <img
            src={img}
            alt=""
            className="w-16 h-16 rounded-[86px] ml-5 md:mt-5 mt-15"
          />
          <div>
            {" "}
            <p className="mt-8 ml-8 font-semibold text-[38px] text-[#FFFFFF]  ">
              {name}
            </p>
            <p className=" ml-8">{star}</p>
          </div>
        </div>
        <div>
          <p className="ml-5 text-[24px] text-[#FFFFFF]"> {review} </p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard