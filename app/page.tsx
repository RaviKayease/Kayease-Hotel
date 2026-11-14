"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroIamge from "@/public/HeroImage.png";
import { Cormorant_Garamond } from "next/font/google";
import {
  MapPin,
  CalendarDays,
  Users,
  ArrowUpRight,
  Search,
} from "lucide-react";

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

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const mobileCheckInRef = useRef<HTMLInputElement>(null);
  const mobileCheckOutRef = useRef<HTMLInputElement>(null);

  const [today, setToday] = useState("");
  const [showDates, setShowDates] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [showDestinations, setShowDestinations] = useState(false);
  const [showOccupancy, setShowOccupancy] = useState(false);

  const [searchError, setSearchError] = useState("");

  const [showMobileSearchPanel, setShowMobileSearchPanel] = useState(false);

  const errorRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const date = new Date();
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .split("T")[0];

    setToday(localDate);
  }, []);

  useEffect(() => {
    if (!searchError || showMobileSearchPanel) return;

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
  }, [searchError, showMobileSearchPanel]);

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

          <div className="absolute top-[70%] z-10 w-full">
            {/* Hero Image */}
            <div className="relative h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh] w-full overflow-hidden rounded-4xl lg:rounded-[50px] ">
              <Image
                src={HeroIamge}
                alt="Hero Image"
                priority
                className="h-full w-full object-cover"
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
              className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 xl:-bottom-9 2xl:-bottom-10 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl lg:rounded-3xl bg-[var(--surface)]/20 backdrop-blur-md lg:backdrop-blur-xl flex items-center p-2 gap-2 border border-white/30"
            >
              <p className="lg:hidden flex-1 whitespace-nowrap text-sm pl-4 text-white/80">
                Start your search...
              </p>

              {/* Destination */}
              <div className="relative w-full border-r border-[var(--border)]/60">
                <button
                  onClick={() => {
                    setShowDestinations(!showDestinations);
                    setShowOccupancy(false);
                    setShowDates(false);
                    setSearchError("");
                  }}
                  className="hidden w-full lg:flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <MapPin className="text-[var(--primary)]" size={18} />

                    <span className="text-sm xl:text-base">
                      Choose Destination
                    </span>
                  </div>

                  <span className="text-sm xl:text-base font-semibold">
                    {destination || "Where to?"}
                  </span>
                </button>

                {showDestinations && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-3 text-left shadow-xl backdrop-blur-xl md:absolute md:left-1/2 md:top-full md:mt-4 md:w-64 md:-translate-x-1/2">
                    <p className="px-3 pb-2 pt-1 text-[11px] font-semibold tracking-widest text-[var(--foreground)]/55">
                      POPULAR DESTINATIONS
                    </p>

                    {destinations.map((place) => (
                      <button
                        key={place}
                        onClick={() => {
                          setDestination(place);
                          setShowDestinations(false);
                          setSearchError("");
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors ${
                          destination === place
                            ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                            : "text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)]"
                        }`}
                      >
                        <MapPin
                          size={16}
                          className="shrink-0 text-[var(--primary)]"
                        />

                        <span className="flex-1">{place}</span>

                        {destination === place && (
                          <span className="text-[var(--primary)]">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dates */}
              <div className="relative z-40 w-full border-r border-[var(--border)]/60">
                <button
                  onClick={() => {
                    setShowDates(!showDates);
                    setShowDestinations(false);
                    setShowOccupancy(false);
                    setSearchError("");
                  }}
                  className="hidden w-full lg:flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <CalendarDays className="text-[var(--primary)]" size={18} />
                    <span className="text-sm xl:text-base">Select Dates</span>
                  </div>

                  <span className="text-sm xl:text-base font-semibold">
                    {checkIn && checkOut
                      ? `${checkIn} - ${checkOut}`
                      : "Check-in / Check-out"}
                  </span>
                </button>

                {showDates && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-5 text-[var(--foreground)] shadow-xl backdrop-blur-xl md:absolute md:left-1/2 md:top-full md:mt-4 md:w-72 md:-translate-x-1/2">
                    <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
                      Choose Your Stay
                    </h3>

                    <div className="flex flex-col gap-4">
                      {/* Check-in */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]/70">
                          Check-in
                        </label>

                        <div
                          onClick={() => checkInRef.current?.showPicker?.()}
                          className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)]/60 px-3 py-3 transition focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)]/30"
                        >
                          <CalendarDays
                            size={17}
                            className="shrink-0 text-[var(--primary)]"
                          />

                          <input
                            ref={checkInRef}
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
                            className="w-full min-w-0 bg-transparent text-sm text-[var(--foreground)] outline-none"
                          />
                        </div>
                      </div>

                      {/* Check-out */}
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]/70">
                          Check-out
                        </label>

                        <div
                          onClick={() => checkOutRef.current?.showPicker()}
                          className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)]/60 px-3 py-3 transition focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)]/30"
                        >
                          <CalendarDays
                            size={17}
                            className="shrink-0 text-[var(--primary)]"
                          />

                          <input
                            ref={checkOutRef}
                            type="date"
                            value={checkOut}
                            min={checkIn || today || undefined}
                            onChange={(e) => {
                              setCheckOut(e.target.value);
                              setSearchError("");
                            }}
                            className="w-full min-w-0 bg-transparent text-sm text-[var(--foreground)] outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Apply Dates */}
                    <button
                      onClick={() => setShowDates(false)}
                      disabled={!checkIn || !checkOut}
                      className="mt-5 w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Apply Dates
                    </button>
                  </div>
                )}
              </div>

              {/* Occupancy */}
              <div className="relative z-50 w-full">
                <button
                  onClick={() => {
                    setShowOccupancy(!showOccupancy);
                    setShowDestinations(false);
                    setShowDates(false);
                  }}
                  className="hidden w-full lg:flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                    <Users className="text-[var(--primary)]" size={18} />
                    <span className="text-sm xl:text-base">
                      Choose Occupancy
                    </span>
                  </div>

                  <span className="text-sm xl:text-base font-semibold">
                    {adults + children} Guests, {rooms}{" "}
                    {rooms === 1 ? "Room" : "Rooms"}
                  </span>
                </button>

                {showOccupancy && (
                  <div className="fixed left-1/2 top-15 sm:top-17 z-[100] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 text-[var(--foreground)] shadow-xl backdrop-blur-xl md:absolute md:left-auto md:right-0 md:top-full md:mt-4 md:w-72 md:translate-x-0">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        Guests & Rooms
                      </h3>
                      <p className="mt-1 text-xs text-[var(--foreground)]/55">
                        Choose who is joining your stay.
                      </p>
                    </div>

                    {[
                      {
                        label: "Adults",
                        description: "Age 13 or above",
                        value: adults,
                        setValue: setAdults,
                        min: 1,
                      },
                      {
                        label: "Children",
                        description: "Age 0–12",
                        value: children,
                        setValue: setChildren,
                        min: 0,
                      },
                      {
                        label: "Rooms",
                        description: "Number of rooms",
                        value: rooms,
                        setValue: setRooms,
                        min: 1,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium text-[var(--foreground)]">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-[var(--foreground)]/55">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              item.setValue(Math.max(item.min, item.value - 1))
                            }
                            disabled={item.value <= item.min}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--primary)] text-[var(--primary)] transition hover:bg-[var(--primary)]/10 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="w-5 text-center text-sm font-semibold text-[var(--foreground)]">
                            {item.value}
                          </span>

                          <button
                            onClick={() => item.setValue(item.value + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white transition hover:brightness-90"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={() => setShowOccupancy(false)}
                      className="mt-4 w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-90 active:scale-[0.98]"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Search Error */}
              {searchError && (
                <div
                  ref={errorRef}
                  className="hidden lg:block fixed left-1/2 top-15 sm:top-17 z-[110] w-[calc(100%-2rem)] max-w-72 -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 text-[var(--foreground)] shadow-xl backdrop-blur-xl md:absolute md:bottom-full md:left-auto md:right-0 md:top-auto md:mb-3 md:w-auto md:max-w-none md:translate-x-0"
                >
                  <div className="flex items-start gap-3">
                    {/* Warning Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/10 text-[var(--primary)]">
                      !
                    </div>

                    {/* Error Message */}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        Almost there!
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/60">
                        {searchError}
                      </p>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setSearchError("")}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--foreground)]/50 transition hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                      aria-label="Close error message"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              {/* Desktop Search Button */}
              <button
                onClick={() => {
                  setSearchError("");
                  setShowDestinations(false);
                  setShowDates(false);
                  setShowOccupancy(false);

                  if (!destination.trim() || !checkIn || !checkOut) {
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
                className="hidden lg:block bg-[var(--primary)] p-2 lg:p-3 xl:p-4 rounded-xl lg:rounded-2xl cursor-pointer transition hover:brightness-90"
              >
                <Search className="text-white size-5 sm:size-7" />
              </button>

              {/* Open Search Panel Button On Mobile */}
              <button
                onClick={() => setShowMobileSearchPanel(true)}
                className="lg:hidden bg-[var(--primary)] p-2 lg:p-3 xl:p-4 rounded-xl lg:rounded-2xl cursor-pointer transition hover:brightness-90"
              >
                <ArrowUpRight className="text-white size-5" />
              </button>
            </div>

            {/* MOBILE BOOKING PANEL */}
            {showMobileSearchPanel && (
              <div
                className="lg:hidden fixed inset-0 z-[200] flex items-end bg-[var(--foreground)]/40 backdrop-blur-sm"
                onClick={() => setShowMobileSearchPanel(false)}
              >
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Search your stay"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-h-[90dvh] overflow-hidden rounded-t-[30px] border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-2xl shadow-xl animate-[slideUp_0.3s_ease-out]"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 pt-5 pb-4">
                    <div>
                      <p
                        className={`${cormorant.className} text-2xl font-semibold text-[var(--foreground)]`}
                      >
                        Find your escape
                      </p>
                      <p className="mt-1 text-xs text-[var(--foreground)]/60">
                        Let's plan your perfect stay.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowMobileSearchPanel(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)] text-[var(--foreground)] text-xl hover:brightness-95"
                      aria-label="Close search panel"
                    >
                      ×
                    </button>
                  </div>

                  <div className="max-h-[calc(90dvh-155px)] overflow-y-auto px-5 pb-5">
                    {/* Destination */}
                    <div className="mb-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                      <label className="mb-3 block text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                        DESTINATION
                      </label>

                      <div className="flex items-center gap-3">
                        <MapPin
                          className="shrink-0 text-[var(--primary)]"
                          size={20}
                        />
                        <input
                          type="text"
                          value={destination}
                          onChange={(e) => {
                            setDestination(e.target.value);
                            setSearchError("");
                          }}
                          placeholder="Where would you like to go?"
                          className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--foreground)]/45 outline-none"
                        />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {destinations.map((place) => (
                          <button
                            key={place}
                            onClick={() => {
                              setDestination(place);
                              setSearchError("");
                            }}
                            className={`rounded-full border px-3 py-2 text-xs transition ${
                              destination === place
                                ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]"
                                : "border-[var(--border)] bg-[var(--surface)]/70 text-[var(--foreground)]/75 hover:border-[var(--primary)]"
                            }`}
                          >
                            {place}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="mb-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                      <label className="mb-3 block text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                        YOUR STAY
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="min-w-0">
                          <label className="mb-2 block text-xs text-[var(--foreground)]/60">
                            Check-in
                          </label>

                          <div
                            onClick={() =>
                              mobileCheckInRef.current?.showPicker()
                            }
                            className="flex items-center gap-2"
                          >
                            <CalendarDays
                              size={17}
                              className="shrink-0 text-[var(--primary)]"
                            />
                            <input
                              ref={mobileCheckInRef}
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
                              className="w-full min-w-0 bg-transparent text-xs text-[var(--foreground)] outline-none"
                            />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <label className="mb-2 block text-xs text-[var(--foreground)]/60">
                            Check-out
                          </label>

                          <div
                            onClick={() =>
                              mobileCheckOutRef.current?.showPicker()
                            }
                            className="flex items-center gap-2"
                          >
                            <CalendarDays
                              size={17}
                              className="shrink-0 text-[var(--primary)]"
                            />
                            <input
                              ref={mobileCheckOutRef}
                              type="date"
                              value={checkOut}
                              min={checkIn || today || undefined}
                              onChange={(e) => {
                                setCheckOut(e.target.value);
                                setSearchError("");
                              }}
                              className="w-full min-w-0 bg-transparent text-xs text-[var(--foreground)] outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Occupancy */}
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                      <label className="mb-3 block text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                        GUESTS & ROOMS
                      </label>

                      {[
                        {
                          label: "Adults",
                          description: "Age 13 or above",
                          value: adults,
                          setValue: setAdults,
                          min: 1,
                        },
                        {
                          label: "Children",
                          description: "Age 0–12",
                          value: children,
                          setValue: setChildren,
                          min: 0,
                        },
                        {
                          label: "Rooms",
                          description: "Number of rooms",
                          value: rooms,
                          setValue: setRooms,
                          min: 1,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0"
                        >
                          <div>
                            <p className="text-sm font-medium text-[var(--foreground)]">
                              {item.label}
                            </p>
                            <p className="text-[11px] text-[var(--foreground)]/55">
                              {item.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                item.setValue(
                                  Math.max(item.min, item.value - 1),
                                )
                              }
                              disabled={item.value <= item.min}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--primary)] text-[var(--primary)] transition hover:bg-[var(--primary)]/10 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              −
                            </button>

                            <span className="w-4 text-center text-sm font-semibold text-[var(--foreground)]">
                              {item.value}
                            </span>

                            <button
                              onClick={() => item.setValue(item.value + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white transition hover:brightness-90"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {searchError && (
                      <p className="mt-3 text-xs text-red-600 text-center">
                        {searchError}
                      </p>
                    )}
                  </div>

                  {/* Sticky Search Button */}
                  <div className="border-t border-[var(--border)] bg-[var(--surface)]/95 px-5 py-4 pb-[max(16px,env(safe-area-inset-bottom))]">
                    <button
                      onClick={() => {
                        if (!destination.trim() || !checkIn || !checkOut) {
                          setSearchError(
                            "Please select your destination and travel dates.",
                          );
                          return;
                        }

                        if (checkOut <= checkIn) {
                          setSearchError("Check-out must be after check-in.");
                          return;
                        }

                        setSearchError("");
                        setShowMobileSearchPanel(false);

                        // Add your booking search/navigation logic here.
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-90 active:scale-[0.98]"
                    >
                      <Search size={19} />
                      Search Stays
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
