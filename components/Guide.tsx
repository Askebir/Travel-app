import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className=" -red-400 flex items-center justify-center flex-col ">
      <div className="-2 -blue-500 px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24  ">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className=" -2 -yellow-500"
        />
        <p className="uppercase -2 text-green-400 -yellow-500 regular-18 -mt-1 mb-3">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 -2  -yellow-500 lg:bold-64 xl:max-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="-2  -yellow-500 regular-16 text-gray-30 xl:max-w-[520px] ">
            Only with the hilink application you will on longer get lost and et
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite you friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto max-w-[1440px]  -red-500 ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full  object-cover 2xl:rounded-5xl "
        />
        <div className="absolute  -yellow-50 flex  bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl  shadow-md md:left-[5%] xl:ml-20 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="  -white h-full w-auto  "
          />
          <div className="flex  -white items-center justify-between flex-col">
            <div className="  -black flex w-full  flex-col">
              <div className="flex  -white items-center justify-between">
                <p className=" -black text-gray-20 ">Destination</p>
                <p className=" -white text-gray-50 ">48 min</p>
              </div>
              <p>Aguas Calientes</p>
            </div>

            <div className=" -black flex flex-col">
              <p className="text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
