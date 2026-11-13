import React from "react";
import Image from "next/image";
import HeroIamge from "@/public/HeroImage.png";
import { Cormorant_Garamond } from "next/font/google";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 lg:mt-20">
        <p
          className={`${cormorant.className} text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide italic`}
        >
          Unforgettable Stay Experiences
        </p>

        <div className="relative w-full flex flex-col items-center">
          <h1 className="relative z-0 font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[10vw] leading-none mt-2">
            Dream Stay
          </h1>

          <div className="absolute top-[70%] z-10 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
            {/* Hero Image */}
            <div className="relative h-full w-full overflow-hidden rounded-4xl lg:rounded-[50px]">
              <Image
                src={HeroIamge}
                alt="Hero Image"
                fill
                priority
                className="object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 40%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 40%)",
                }}
              />

              <div
                className="absolute inset-x-0 top-0 h-[40%] bg-white/15 backdrop-blur-sm lg:backdrop-blur-xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
                }}
              />
            </div>

            {/* Bottom card */}
            <div className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 xl:-bottom-9 2xl:-bottom-10 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl lg:rounded-3xl bg-white-15 backdrop-blur-xl flex justify-around items-center p-2">
              <div className="flex flex-col items-center w-full border-r">
                <div className="flex flex-col justify-center lg:flex-row items-center gap-2">
                  <MapPin className="text-orange-500" size={18} />
                  <p className="hidden md:block md:text-sm lg:text-base">
                    Destination
                  </p>
                </div>
                <p className="hidden 2xl:block text-lg font-semibold">
                  Explore your perfect gateway
                </p>
              </div>
              <div className="flex flex-col items-center w-full border-r">
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <CalendarDays className="text-orange-500" size={18} />
                  <p className="hidden md:block md:text-sm lg:text-base">
                    Stay Dates
                  </p>
                </div>
                <p className="hidden 2xl:block text-lg font-semibold">
                  Choose your arrival & departure
                </p>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <Users className="text-orange-500" size={18} />
                  <p className="hidden md:block md:text-sm lg:text-base">
                    Guest & Rooms
                  </p>
                </div>
                <p className="hidden 2xl:block text-md text-lg font-semibold">
                  Make room for everyone
                </p>
              </div>
              <div className="bg-orange-500 p-2 lg:p-3 xl:p-4 rounded-xl lg:rounded-2xl">
                <Search className="text-white size-5 sm:size-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
