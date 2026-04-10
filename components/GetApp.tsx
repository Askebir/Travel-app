import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex items-center   pb-[100px] justify-center  -blue-600 ">
      <div className="mx-auto max-w-[1440px]   relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20  -white flex w-full flex-1 flex-col items-start justify-center gap-12 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[321px]">
            Get for free new!
          </h2>
          <p className="text-gray-10">Available on IOS and Android</p>
          <div className="flex w-full flex-col gap-3 xl:flex-row ">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green"
              full
            />
          </div>
        </div>
        <div>
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
