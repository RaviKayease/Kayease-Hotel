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
      <div className="flex flex-col items-center mt-20">
        <p
          className={`${cormorant.className} text-3xl font-bold tracking-wide italic`}
        >
          Unforgettable Stay Experiences
        </p>

        <div className="relative w-full flex flex-col items-center">
          <h1 className="relative z-0 font-semibold text-[10vw] leading-none">
            Dream Stay
          </h1>

          <div className="absolute top-[70%] z-10 h-[60vh] w-full">
            <div className="relative h-full w-full overflow-hidden rounded-[50px]">
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
                className="absolute inset-x-0 top-0 h-[40%] bg-white/15 backdrop-blur-xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-10 left-1/2 z-20 h-20 w-[80%] -translate-x-1/2 rounded-3xl bg-white-15 backdrop-blur-xl flex justify-around items-center px-2">
              <div className="flex flex-col items-center w-full border-r">
                <div className="flex items-center gap-2">
                  <MapPin className="text-orange-500" size={18} />
                  <p>Destination</p>
                </div>
                <p className="text-lg font-semibold">
                  Explore your perfect gateway
                </p>
              </div>
              <div className="flex flex-col items-center w-full border-r">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-orange-500" size={18} />
                  <p>Stay Dates</p>
                </div>
                <p className="text-lg font-semibold">
                  Choose your arrival & departure
                </p>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-2">
                  <Users className="text-orange-500" size={18} />
                  <p>Guest & Rooms</p>
                </div>
                <p className="text-lg font-semibold">Make room for everyone</p>
              </div>

              <div className="bg-orange-500 p-4 rounded-2xl">
                <Search className="text-white" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
