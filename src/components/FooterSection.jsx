import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b2316] text-white py-20 px-10 md:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/plant.png" alt="Logo" className="w-[94px] h-[94px]" />
            <h1 className="md:text-[45px] text-[35px] font-semibold">FloraVision.</h1>
          </div>

          <p className="text-[#FFFFFF] text-[28px] leading-relaxed max-w-xs font-medium">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6 text-[28px] font-extrabold text-white">
            <span className="cursor-pointer hover:text-white">FB</span>
            <span className="cursor-pointer hover:text-white">TW</span>
            <span className="cursor-pointer hover:text-white">LI</span>
          </div>
        </div>

        {/* Middle – Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-extrabold text-[28px]">Quick Link’s</h3>

          <a href="#" className="text-[#FFFFFF] text-[24px]  hover:underline">
            Home
          </a>

          <a
            href="#"
            className="text-[#FFFFFF] text-[24px] underline-offset-2 hover:underline"
          >
            Type’s Of plant’s
          </a>

          <a
            href="#"
            className="text-[#FFFFFF] text-[24px] underline-offset-2 hover:underline"
          >
            Contact
          </a>

          <a
            href="#"
            className="text-[#FFFFFF] text-[24px] underline-offset-2 hover:underline"
          >
            Privacy
          </a>
        </div>

        {/* Right – Subscribe Section */}
        <div>
          <h3 className="font-semibold text-[28px] mb-4">For Every Update.</h3>

          <div className="flex items-center border border-white/30 rounded-lg overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent px-4 py-2 outline-none text-white  placeholder-white/60 flex-1"
            />
            <button className="bg-white text-black px-5 py-2 font-semibold hover:bg-white/90 hover:text-shadow-blue-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-white/70 text-sm mt-14 text-center md:text-left">
        FloraVision © all right reserve
      </div>
    </footer>
  );
}
