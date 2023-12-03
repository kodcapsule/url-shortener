import React from "react";
import Button from "./Button";
import HeroImage from "../assets/illustration-working.svg";

function HeroSection() {
  return (
    <div className=" flex flex-col-reverse md:flex-row gap-20 md:mt-12 md:justify-between ">
      <div className=" flex flex-col mainText text-center justify-center items-center  pb-5  ">
        <h1 className=" font-extrabold text-3xl mb-1 text-neutral-very-dark-violet md:text-7xl">
          More than just shorter links
        </h1>
        <p className=" font-normal text-sm md:text-lg text-neutral-gray mb-5">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="herobtn mt-8">
          <Button buttonText="Get Started" btn_primary="btn_primary" />
        </div>
      </div>
      <div className="heroImage mr-[-5px] ">
        <img src={HeroImage} alt="A hero image" />
      </div>
    </div>
  );
}

export default HeroSection;