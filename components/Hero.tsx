import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="max-container border border-red-600 
    padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 border-3 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
      </div>
      <h1 className=" bold-52 lg:bold-88 ">PUTUK Truno Camp Area</h1>
      <p className="regular-16 mt-6">
        We want to be on each of your journeys seeking the satisfaction of
        seeing the incorruptible beauty of nature. we can help you on an
        adventure around the world in just on app
      </p>
      <div className="my-11 flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
        </div>
        <p className="bold-16 lg:bold-20 text-blue-70">
          198k{" "}
          <span className="regular-16 lg:regular-20 ml-1 ">
            Excellent Reviews
          </span>{" "}
        </p>
        <div className="flex z-20 flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App " variant="btn_green" />
          <Button
            type="button"
            title="How We Work? "
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="realtive z-20 flex  w-[268] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex fle-xcol">
            <div className="flex items-center justify-between ">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <p className="bold-20 block text-white">Aguas Calientes</p>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
