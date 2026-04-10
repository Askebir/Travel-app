import { FEATURES } from "@/constants";
import Image from "next/image";
import { features } from "process";
import React from "react";

const Features = () => {
  return (
    <section className=" -2  -red-500 flex items-center justify-center flex-col py-24 bg-feature-bg bg-center bg-no-repeat  ">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative  -black w-full flex  justify-end">
        <div className="flex flex-1  xl:overflow-hidden lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="w-[250px] md:w-[300px] xl:w-[400px] rotate-[15deg]"
          />
        </div>

        <div className="z-20 flex w-full lg:pl-50 flex-col lg:w-[60%]">
          <div className=" w-full lg:w-[40%] flex justify-center">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10  lg:w-[50px]  -red-500 "
            />
            <h2 className="   -green-400 bold-40 lg:bold-64 ">Our Features</h2>
          </div>
          <ul className="mt-10  -yellow-50 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureIcon = {
  title: string;
  icon: string;

  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureIcon) => {
  return (
    <li className="flex  -blue-700 w-full  flex-1 flex-col items-start">
      <div className="bg-green-50 rounded-full p-4 lg:p-7 ">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>

      <h1 className="bold-20 lg:bold:32 mt:5 capitalize">{title}</h1>
      <p className="regular-16 mt-5  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
