import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CompProps {
  backgroundImage: string;
  title: string;
  subitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subitle,
  peopleJoined,
}: CompProps) => {
  return (
    <div
      className={`border border-yellow-300  h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
    >
      <div className="flex border border-blue-700 h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flex border border-red-700  items-center justify-center">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex-col gap-1 px-4">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subitle}</p>
          </div>
        </div>
        <div className=" flex border border-red-700 items-center justify-center">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10  w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 px-5 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full tems-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subitle="Somewhere in the wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex border border-r-green-50 items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] relative w-full overflow-hidden rounded-3xl  xl:rounded-5xl xl:px-16 xl:py-20 ">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost And Not Knowing The Way?</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white ">
            Starting fromthe anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
