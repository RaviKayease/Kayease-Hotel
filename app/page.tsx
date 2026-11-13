"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroIamge from "@/public/HeroImage.png";
import { Cormorant_Garamond } from "next/font/google";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const destinations = [
  "Bali, Indonesia",
  "Kyoto, Japan",
  "Maldives",
  "Santorini, Greece",
  "Jaipur, India",
];

const HomePage = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [today, setToday] = useState("");
  const [showDates, setShowDates] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [showDestinations, setShowDestinations] = useState(false);
  const [showOccupancy, setShowOccupancy] = useState(false);

  const [searchError, setSearchError] = useState("");

  const errorRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (!searchError) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        errorRef.current &&
        !errorRef.current.contains(event.target as Node)
      ) {
        setSearchError("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [searchError]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        bookingRef.current &&
        !bookingRef.current.contains(event.target as Node)
      ) {
        setShowDestinations(false);
        setShowDates(false);
        setShowOccupancy(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center mt-10 lg:mt-20">
        <p
          className={`${cormorant.className} text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide italic`}
        >
          Unforgettable Stay Experiences
        </p>

        <div className="relative w-full flex flex-col items-center">
          <div className="relative z-0 mt-2 overflow-hidden">
            <h1 className="dream-stay-animation font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[8vw] leading-none">
              Dream Stay
            </h1>
          </div>

          <div className="absolute top-[70%] z-10 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] w-full">
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

            {/* Bottom glass card */}
            <div
              ref={bookingRef}
              className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 xl:-bottom-9 2xl:-bottom-10 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl lg:rounded-3xl bg-white-15 backdrop-blur-md lg:backdrop-blur-xl flex items-center p-2 gap-2"
            >
              <div className="relative w-full border-r border-gray-400/100">
                <button
                  onClick={() => {
                    setShowDestinations(!showDestinations);
                    setShowOccupancy(false);
                    setShowDates(false);
                    setSearchError("");
                  }}
                  className="w-full flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <MapPin className="text-orange-500" size={18} />

                    <span className="hidden xl:block md:text-sm lg:text-base">
                      Choose Destination
                    </span>
                  </div>

                  <span className="hidden md:block text-sm lg:text-base font-semibold">
                    {destination || "Where to?"}
                  </span>
                </button>

                {showDestinations && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl bg-white p-3 shadow-xl text-left md:absolute md:left-1/2 md:top-full md:mt-4 md:w-64 md:-translate-x-1/2">
                    {destinations.map((place) => (
                      <button
                        key={place}
                        onClick={() => {
                          setDestination(place);
                          setShowDestinations(false);
                          setSearchError("");
                        }}
                        className="block w-full rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 text-left"
                      >
                        {place}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative z-40 w-full border-r border-gray-400/100">
                <button
                  onClick={() => {
                    setShowDates(!showDates);
                    setShowDestinations(false);
                    setShowOccupancy(false);
                    setSearchError("");
                  }}
                  className="w-full flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <CalendarDays className="text-orange-500" size={18} />
                    <span className="hidden xl:block md:text-sm lg:text-base">
                      Select Dates
                    </span>
                  </div>

                  <span className="hidden md:block text-sm lg:text-base font-semibold">
                    {checkIn && checkOut
                      ? `${checkIn} - ${checkOut}`
                      : "Check-in / Check-out"}
                  </span>
                </button>

                {showDates && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl bg-white p-5 shadow-xl text-gray-800 md:absolute md:left-1/2 md:top-full md:mt-4 md:w-72 md:-translate-x-1/2">
                    <h3 className="text-lg font-semibold mb-4">
                      Choose Your Stay
                    </h3>

                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Check-in
                        </label>
                        <input
                          type="date"
                          value={checkIn}
                          min={today || undefined}
                          onChange={(e) => {
                            setCheckIn(e.target.value);
                            setSearchError("");

                            if (checkOut && e.target.value >= checkOut) {
                              setCheckOut("");
                            }
                          }}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Check-out
                        </label>
                        <input
                          type="date"
                          value={checkOut}
                          min={checkIn || today || undefined}
                          onChange={(e) => {
                            setCheckOut(e.target.value);
                            setSearchError("");
                          }}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setShowDates(false)}
                      disabled={!checkIn || !checkOut}
                      className="mt-5 w-full rounded-xl bg-orange-500 py-3 text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Apply Dates
                    </button>
                  </div>
                )}
              </div>

              <div className="relative z-50 w-full">
                <button
                  onClick={() => {
                    setShowOccupancy(!showOccupancy);
                    setShowDestinations(false);
                    setShowDates(false);
                  }}
                  className="w-full flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <Users className="text-orange-500" size={18} />
                    <span className="hidden xl:block md:text-sm lg:text-base">
                      Choose Occupancy
                    </span>
                  </div>

                  <span className="hidden md:block text-sm lg:text-base font-semibold">
                    {adults + children} Guests, {rooms}{" "}
                    {rooms === 1 ? "Room" : "Rooms"}
                  </span>
                </button>

                {showOccupancy && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl text-gray-800 md:absolute md:left-auto md:right-0 md:top-full md:mt-4 md:w-72 md:translate-x-0">
                    {[
                      {
                        label: "Adults",
                        value: adults,
                        setValue: setAdults,
                        min: 1,
                      },
                      {
                        label: "Children",
                        value: children,
                        setValue: setChildren,
                        min: 0,
                      },
                      {
                        label: "Rooms",
                        value: rooms,
                        setValue: setRooms,
                        min: 1,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-3 border-b last:border-0"
                      >
                        <span className="font-medium">{item.label}</span>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              item.setValue(Math.max(item.min, item.value - 1))
                            }
                            className="h-7 w-7 rounded-full border border-orange-500 text-orange-500"
                          >
                            -
                          </button>

                          <span>{item.value}</span>

                          <button
                            onClick={() => item.setValue(item.value + 1)}
                            className="h-7 w-7 rounded-full bg-orange-500 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={() => setShowOccupancy(false)}
                      className="mt-3 w-full rounded-lg bg-orange-500 py-2 text-white hover:bg-orange-600 transition"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {searchError && (
                <div
                  ref={errorRef}
                  className="fixed left-1/2 top-15 sm:top-17 z-[110] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl text-gray-800 md:absolute md:bottom-full md:left-auto md:right-0 md:top-auto md:mb-3 md:w-auto md:max-w-none md:translate-x-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      !
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        Almost there!
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {searchError}
                      </p>
                    </div>

                    <button
                      onClick={() => setSearchError("")}
                      className="text-gray-400 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setSearchError("");
                  setShowDestinations(false);
                  setShowDates(false);
                  setShowOccupancy(false);

                  if (!destination || !checkIn || !checkOut) {
                    setSearchError(
                      "Please select your destination and travel dates.",
                    );
                    return;
                  }
                  if (checkOut <= checkIn) {
                    setSearchError("Check-out must be after check-in.");
                    return;
                  }
                }}
                className="bg-orange-500 p-2 lg:p-3 xl:p-4 rounded-xl lg:rounded-2xl cursor-pointer"
              >
                <Search className="text-white size-5 sm:size-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
