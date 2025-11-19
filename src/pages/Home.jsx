import React from "react";

import Card from "../components/TopSellingCard";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import TrendyPlant from "../components/TrendyPlantCard";
import TopSellingPlant from "../components/TopSellingPlant";
import ReviewSection from "../components/ReviewSection";
import BestO2Plants from "../components/BestO2";
import Footer from "../components/FooterSection";
import TrendyPlantSection from "../components/TrendyPlantSection";

function Home() {
  return (
    <>
      <section className=" md:h-[2592px] h-full bg-[#1b2316]  relative overflow-x-hidden  ">
        {/* Backround image */}
        <div className="absolute w-full">
          <img
            src="/bg.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Main Content */}
        <div className="relative ">
          <Navbar />
          <HeroBanner />
        </div>
        <TrendyPlantSection/>
        <TopSellingPlant />
        <ReviewSection />
        <BestO2Plants />
        <Footer/>
      </section>
    </>
  );
}

export default Home;
