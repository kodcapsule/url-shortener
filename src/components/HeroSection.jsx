import React from "react";
import Button from "./Button";
import HeroImage from "../assets/illustration-working.svg";

function HeroSection() {
  return (
    <div className="heroContainer container  mx-auto px-4  ">
      <div className=" flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20  md:justify-between  ">
        <div className=" flex flex-col mainText md:pl-16 md:w-[50%] text-center justify-center  md:text-left  pb-5   items-start ">
          <h1 className=" font-extrabold text-3xl mb-1  text-neutral-very-dark-violet md:text-3xl lg:text-6xl leading-8 pb-1">
            More than just shorter links
          </h1>
          <p className=" font-normal text-sm md:text-sm lg:text-base text-neutral-gray mb-5">
            {`
              Build your brand’s recognition and get detailed insights on how your
            links are performing.`}
          </p>
          <div className="herobtn mt-8 ">
            <Button buttonText="Get Started" btn_primary="btn_primary" />
          </div>
        </div>
        <div className="heroImage md:w-[60%] ">
          <img src={HeroImage} alt="A hero image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
