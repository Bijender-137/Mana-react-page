import React from "react";
import HeroSection from "./HeroSection";
import MyNav from "./MyNav";

const MyHeader = () => {
  return (
    <div className="hero_bg_img">
      <MyNav />
      <HeroSection />
    </div>
  );
};

export default MyHeader;
