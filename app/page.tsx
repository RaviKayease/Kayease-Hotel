"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroIamge from "@/public/HeroImage.png";
import { Cormorant_Garamond } from "next/font/google";
import {
  MapPin,
  CalendarDays,
  Users,
  ArrowUpRight,
  Search,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";
import { BRAND_NAME } from "./components/brand";

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

const hotelCategories = [
  "All Stays",
  "Luxury Hotels",
  "Resorts",
  "Boutique Hotels",
];

const featuredHotels = [
  {
    id: 1,
    name: "Oceanfront Luxury Resort",
    location: "Goa, India",
    category: "Resorts",
    price: 8500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
    description: "Relax by the ocean in a luxurious beachfront escape.",
  },
  {
    id: 2,
    name: "The Heritage Boutique",
    location: "Jaipur, India",
    category: "Boutique Hotels",
    price: 5200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    description: "Experience royal charm and timeless Rajasthani elegance.",
  },
  {
    id: 3,
    name: "Mountain Escape Retreat",
    location: "Manali, India",
    category: "Luxury Hotels",
    price: 6000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900",
    description:
      "Unwind amid stunning mountain views and peaceful surroundings.",
  },
];

const editorialHotels = [
  {
    id: 1,
    name: "The Heritage Palace",
    location: "Jaipur, India",
    price: 8500,
    rating: 5,
    description: "A royal escape filled with timeless elegance.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
  },
  {
    id: 2,
    name: "The White Courtyard",
    location: "Kyoto, Japan",
    price: 9200,
    rating: 4,
    description: "A peaceful retreat inspired by Japanese tradition.",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=900",
  },
  {
    id: 3,
    name: "Palm Beach Retreat",
    location: "Venice, Italy",
    price: 6500,
    rating: 4,
    description: "A relaxing getaway with Italian coastal charm.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    location: "Canberra, Australia",
    price: 7200,
    rating: 5,
    description: "A scenic mountain escape surrounded by nature.",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=900",
  },
];

const editorialSlides = [
  {
    title: "A stay that feels",
    highlight: "like a beautiful escape.",
    description:
      "Discover thoughtfully designed spaces, breathtaking surroundings, and moments of comfort that stay with you long after your journey ends. Every stay is an invitation to slow down and experience something extraordinary.",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1200",
    alt: "Beautiful A-frame cabin surrounded by a forest",
    caption: "Where moments become memories",
  },
  {
    title: "Wake up where",
    highlight: "the ocean meets the sky.",
    description:
      "Experience the beauty of coastal living, where endless ocean views, calming sea breezes, and thoughtfully designed spaces create the perfect escape from everyday life.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    alt: "Luxury tropical resort with a beautiful swimming pool",
    caption: "A world beyond the ordinary",
  },
  {
    title: "Find peace",
    highlight: "above the ordinary.",
    description:
      "Surrounded by breathtaking mountain landscapes, discover a quieter kind of luxury. Slow mornings, beautiful views, and meaningful moments make every stay unforgettable.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200",
    alt: "Peaceful wooden mountain cabin surrounded by nature",
    caption: "A little closer to nature",
  },
  {
    title: "Experience",
    highlight: "the art of refined living.",
    description:
      "Step into a world of understated elegance, beautiful architecture, and exceptional hospitality. Every detail is thoughtfully considered to make your stay truly special.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
    alt: "Elegant luxury boutique hotel interior",
    caption: "Elegance in every detail",
  },
];

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const HomePage = () => {
  const [destination, setDestination] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Stays");
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

  const [activeSlide, setActiveSlide] = useState(0);

  const [activeHotelTab, setActiveHotelTab] = useState("Featured");

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % editorialSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = editorialSlides[activeSlide];

  const hotelTabs = ["Featured", "Japan", "Italy", "Australia"];

  const filteredHotels =
    activeHotelTab === "Featured"
      ? editorialHotels
      : editorialHotels.filter((hotel) =>
          hotel.location.toLowerCase().includes(activeHotelTab.toLowerCase()),
        );

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center pt-10 lg:pt-15 pb-[calc(25vh+2rem)] sm:pb-[calc(35vh+2rem)] md:pb-[calc(45vh+2rem)] lg:pb-[calc(55vh+2rem)]">
        <p
          className={`${cormorant.className} text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide italic`}
        >
          Unforgettable Stay Experiences
        </p>

        <div className="relative w-full flex flex-col items-center mt-2">
          <div className="relative z-0 overflow-hidden">
            <h1
              className={`${cormorant.className} dream-stay-animation font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[8vw] leading-none`}
            >
              Dream Stay
            </h1>
          </div>

          <div className="absolute top-[95%] z-10 w-full">
            {/* Hero Image */}
            <div className="relative h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh] w-full overflow-hidden rounded-4xl lg:rounded-[50px] border border-[var(--border)]/70 transition-colors duration-500">
              <img
                src={HeroIamge.src}
                alt="Hero Image"
                fetchPriority="high"
                className="h-full w-full object-cover"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 40%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 40%)",
                }}
              />

              <div
                className="hero-glass absolute inset-x-0 top-0 h-[40%] bg-[rgb(var(--glass)/0.16)] backdrop-blur-sm lg:backdrop-blur-md transition-colors duration-500"
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
              className="booking-glass absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 xl:-bottom-9 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl lg:rounded-3xl bg-[rgb(var(--glass)/)] backdrop-blur-md lg:backdrop-blur-lg flex items-center p-1 sm:p-2 gap-2 border border-[rgb(var(--glass-border)/0.35)] shadow-lg transition-colors duration-500"
            >
              <p className="lg:hidden flex-1 whitespace-nowrap text-xs md:text-sm pl-4 text-[rgb(var(--glass-text)/0.85)]">
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
                <ArrowUpRight className="text-white size-4 md:size-5" />
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
                  className="w-full max-h-[90dvh] overflow-hidden rounded-t-[30px] border-t border-[rgb(var(--glass-border)/0.5)] bg-[rgb(var(--glass)/0.88)] text-[var(--glass-text)] backdrop-blur-2xl shadow-xl transition-colors duration-500 animate-[slideUp_0.3s_ease-out]"
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
      </section>
      {/* Featured Hotels */}
      <section className="w-full bg-[var(--background)] text-[var(--foreground)] pt-12 lg:py-15 lg:mt-10 transition-colors duration-500">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className={`${sectionHeadingClass} mb-10`}>
            Discover Exceptional Stays
          </h2>

          {/* Category Tabs */}
          <div className="mx-auto mt-8 flex w-fit max-w-full flex-nowrap overflow-x-auto hide-scrollbar items-center justify-center gap-1 sm:gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 p-1.5 shadow-lg backdrop-blur-md transition-colors duration-500">
            {hotelCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-3 sm:px-5 lg:px-7 py-2.5 sm:py-3 text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[var(--primary)] text-white shadow-md"
                    : "text-[var(--foreground)]/65 hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredHotels
            .filter(
              (hotel) =>
                activeCategory === "All Stays" ||
                hotel.category === activeCategory,
            )
            .map((hotel) => (
              <div
                key={hotel.id}
                className="group overflow-hidden rounded-3xl lg:rounded-4xl border border-[var(--border)]/60 bg-[var(--surface)] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Hotel Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {hotel.category}
                  </span>
                </div>

                {/* Hotel Details */}
                <div className="p-4 lg:p-5">
                  <h3
                    className={`${cormorant.className} text-[32px] truncate font-semibold leading-none`}
                  >
                    {hotel.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-[13px] text-[var(--foreground)]/60">
                    {hotel.description}
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-[12px] text-[var(--foreground)]/60">
                    <MapPin size={15} className="text-[var(--primary)]" />
                    {hotel.location}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-base tracking-wide text-[var(--primary)]">
                        {"★".repeat(Math.floor(hotel.rating))}
                        <span className="text-[var(--foreground)]/20">
                          {"★".repeat(5 - Math.floor(hotel.rating))}
                        </span>
                      </span>

                      <span className="text-xs font-medium text-[var(--foreground)]/60">
                        {hotel.rating}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p
                        className={`${cormorant.className} text-2xl font-semibold`}
                      >
                        ₹{hotel.price.toLocaleString("en-IN")}
                      </p>
                      <p className="text-[10px] text-[var(--foreground)]/50">
                        Per night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Promotional Card */}
          <div className="relative flex min-h-[350px] flex-col overflow-hidden rounded-3xl lg:rounded-[35px] bg-[var(--primary)] p-7 lg:p-8 text-white shadow-lg transition-all duration-500">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Your next getway
            </p>

            <h3
              className={`${cormorant.className} mt-5 text-4xl lg:text-5xl font-semibold leading-tight`}
            >
              Find Your Perfect Stay
            </h3>

            <p className="mt-5 max-w-[220px] text-sm sm:text-base leading-relaxed text-white/85">
              Discover beautiful destinations and handpicked places to stay.
            </p>

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -bottom-12 -left-8 text-[180px] text-white/[0.08]">
              ✦
            </div>

            {/* Explore Button */}
            <a
              className="absolute bottom-7 right-7 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-md transition-transform duration-300 hover:scale-110"
              aria-label="Explore all hotels"
            >
              <ArrowUpRight size={27} />
            </a>
          </div>
        </div>
      </section>
      {/* Exclusive Hotel Collection */}
      <section className="w-full overflow-hidden bg-[var(--background)] pt-16 text-[var(--foreground)] transition-colors duration-500 lg:py-15">
        {/* Section Heading */}
        <div className="mb-5 lg:mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={`${sectionHeadingClass} max-w-2xl`}>
              Stays that make
              <br />
              <span className="italic text-[var(--primary)]">
                every moment special.
              </span>
            </h2>
          </div>
        </div>

        {/* Featured Hotel */}
        {editorialHotels.length > 0 && (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Main Featured Image */}
            <div className="group relative min-h-[420px] overflow-hidden rounded-3xl lg:rounded-4xl sm:min-h-[520px] lg:col-span-8 lg:min-h-[580px] lg:rounded-[36px]">
              <img
                src={editorialHotels[0].image}
                alt={editorialHotels[0].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

              {/* Top Label */}
              <div className="absolute left-3 lg:left-5 top-3 lg:top-5 sm:left-8 sm:top-8">
                <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[8px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Featured Stay
                </span>
              </div>

              {/* Featured Hotel Details */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 lg:gap-5 p-4 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs text-white/75">
                    <MapPin size={14} />
                    {editorialHotels[0].location}
                  </p>

                  <h3
                    className={`${cormorant.className} text-3xl font-medium sm:text-5xl lg:text-6xl`}
                  >
                    {editorialHotels[0].name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
                    <span className="tracking-wider text-amber-300">
                      {"★".repeat(Math.floor(editorialHotels[0].rating))}
                    </span>
                    <span>{editorialHotels[0].rating} / 5</span>
                  </div>
                </div>

                <div className="shrink-0 sm:text-right">
                  <p className="text-xs text-white/65">Starting from</p>
                  <p
                    className={`${cormorant.className} text-3xl font-semibold sm:text-4xl`}
                  >
                    ₹{editorialHotels[0].price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[10px] text-white/65">Per night</p>
                </div>
              </div>
            </div>

            {/* Editorial Side Panel */}
            <div className="flex flex-col justify-between rounded-3xl lg:rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-8 lg:col-span-4 lg:rounded-[36px] lg:p-9">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
                  The {BRAND_NAME} Collection
                </span>

                <h3
                  className={`${cormorant.className} mt-2 lg:mt-5 text-4xl font-medium leading-none lg:leading-tight sm:text-5xl`}
                >
                  A little more
                  <br />
                  <span className="italic">than just a stay.</span>
                </h3>

                <p className="mt-2 lg:mt-5 max-w-sm text-sm leading-6 lg:leading-7 text-[var(--foreground)]/60">
                  Beautiful spaces, thoughtful details and destinations worth
                  travelling for. Find a place that feels like it was made just
                  for you.
                </p>
              </div>

              <div className="mt-5 lg:mt-10">
                <div className="mb-3 lg:mb-5 h-px w-full bg-[var(--border)]" />

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`${cormorant.className} text-3xl font-medium`}
                    >
                      {editorialHotels.length.toString().padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-[var(--foreground)]/50">
                      Handpicked stays
                    </p>
                  </div>

                  <div className="flex -space-x-3">
                    {editorialHotels.slice(0, 3).map((hotel) => (
                      <img
                        key={hotel.id}
                        src={hotel.image}
                        alt=""
                        className="h-11 w-11 rounded-full border-[3px] border-[var(--surface)] object-cover"
                      />
                    ))}
                  </div>
                </div>

                <a
                  href="/hotels"
                  className="mt-5 lg:mt-7 flex w-full items-center justify-between rounded-full bg-[var(--primary)] px-5 py-3 lg:py-4 text-xs lg:text-sm font-medium text-white transition-all duration-300 hover:brightness-90"
                >
                  Explore the collection
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* More Stays */}
        {editorialHotels.length > 1 && (
          <>
            {/* Trending Hotels Worldwide */}
            <div className="my-12 lg:mt-16 sm:mt-20">
              {/* Section Header */}
              <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3
                    className={`${cormorant.className} lg:mt-12 text-3xl font-medium text-[var(--foreground)] sm:text-4xl lg:text-5xl`}
                  >
                    Top trending stays worldwide
                  </h3>
                </div>

                <button className="group flex w-fit items-center gap-2 text-xs font-medium tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--primary)]">
                  View all stays
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>

              {/* Destination Tabs */}
              <div className="mb-6 flex items-center gap-7 overflow-x-auto border-b border-[var(--border)]/70 scrollbar-hide">
                {hotelTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveHotelTab(tab)}
                    className={`relative shrink-0 pb-3 text-xs font-medium transition-colors duration-300 ${
                      activeHotelTab === tab
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)]/50 hover:text-[var(--foreground)]"
                    }`}
                  >
                    {tab}

                    {activeHotelTab === tab && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--primary)]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Hotel Cards */}
              <div className="hide-scrollbar flex w-full gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth snap-x snap-mandatory">
                {filteredHotels.slice(0, 4).map((hotel, index) => (
                  <div
                    key={hotel.id}
                    className={`group ${filteredHotels.length === 1 ? "w-full" : "w-[88%]"} shrink-0 cursor-pointer snap-start sm:w-[45%] lg:w-[calc(25%-15px)]`}
                  >
                    {/* Hotel Image */}
                    <div className="relative h-[240px] w-full overflow-hidden rounded-3xl lg:rounded-4xl bg-[var(--border)] sm:h-[210px] lg:h-[170px] xl:h-[195px]">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                      {/* Featured Label */}
                      {index === 0 && activeHotelTab === "Featured" && (
                        <span className="absolute left-3 top-3 rounded-full bg-[var(--surface)]/90 px-3 sm:px-3.5 py-1 sm:py-2 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)] backdrop-blur-sm">
                          Popular stay
                        </span>
                      )}

                      {/* Favourite Icon */}
                      <button
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Add ${hotel.name} to favourites`}
                        className="absolute right-3 top-3 flex h-5 sm:h-9 w-5 sm:w-9 items-center justify-center rounded-full bg-white/90 text-[#38302A] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
                      >
                        <Heart
                          className="size-[12px] sm:size-[16px]"
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>

                    {/* Hotel Information */}
                    <div className="pt-4 flex flex-col gap-1 sm:gap-2">
                      {/* Hotel Name */}
                      <h4
                        className={`${cormorant.className} truncate text-3xl lg:text-[32px] font-semibold leading-[1.1] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)]`}
                      >
                        {hotel.name}
                      </h4>

                      {/* Description */}
                      <p className="line-clamp-2 text-[13px] leading-[1.7] text-[var(--foreground)]/65">
                        {hotel.description}
                      </p>

                      {/* Location + Rating */}
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                        <p className="flex min-w-0 items-center gap-1.5 text-[12px] font-medium text-[var(--foreground)]/60">
                          <MapPin
                            size={14}
                            className="shrink-0 text-[var(--primary)]"
                          />
                          <span className="truncate">{hotel.location}</span>
                        </p>

                        <div className="flex shrink-0 items-center gap-1.5">
                          <Star
                            size={13}
                            fill="currentColor"
                            className="text-[var(--primary)]"
                          />
                          <span className="text-[12px] font-semibold text-[var(--foreground)]">
                            {hotel.rating}
                          </span>
                          <span className="text-[10px] text-[var(--foreground)]/45">
                            / 5.0
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-end justify-between border-t border-[var(--border)] pt-3">
                        <div>
                          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                            Starting from
                          </p>
                          <div className="flex items-baseline gap-1.5">
                            <span
                              className={`${cormorant.className} text-[29px] font-semibold leading-none text-[var(--foreground)]`}
                            >
                              ₹{hotel.price.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[11px] text-[var(--foreground)]/50">
                              / night
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredHotels.length === 0 && (
                <div className="py-12 text-center">
                  <p
                    className={`${cormorant.className} text-2xl text-[var(--foreground)]`}
                  >
                    No stays found
                  </p>
                  <p className="mt-2 text-xs text-[var(--foreground)]/50">
                    Explore another destination.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </section>
      {/* Editorial Destination Showcase */}
      <section className="editorial-showcase relative left-1/2 flex w-screen -translate-x-1/2 flex-col items-center overflow-hidden px-5 pt-8 lg:pt-10 text-[var(--foreground)]">
        {/* Brand Title - Always Visible */}
        <div className="relative z-20 mx-auto mb-8 w-full max-w-[1400px] px-5 text-center sm:mb-10 lg:mb-8">
          <p className="mb-5 text-[9px] font-medium tracking-[0.35em] text-[var(--primary)] sm:text-[10px]">
            A NEW WAY TO EXPERIENCE HOSPITALITY
          </p>

          <h2
            className={`${cormorant.className} whitespace-nowrap text-[13vw] font-medium leading-[0.9] tracking-tight sm:text-[11vw] lg:text-[100px] xl:text-[115px]`}
          >
            {BRAND_NAME}
          </h2>
        </div>

        {/* Editorial Slide */}
        <div className="relative grid w-full px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div
            key={`content-${activeSlide}`}
            className="editorial-slide-content order-2 flex flex-col items-start lg:order-1"
          >
            {/* Heading */}
            <h2 className={`${sectionHeadingClass} max-w-[550px]`}>
              {currentSlide.title}
              <span className="block italic text-[var(--primary)]">
                {currentSlide.highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-sm leading-7 text-[var(--foreground)]/65 sm:text-base sm:leading-7">
              {currentSlide.description}
            </p>

            {/* Explore Button */}
            <button className="group mt-7 inline-flex items-center gap-6 border-b border-[var(--primary)]/60 pb-2 text-[var(--foreground)]">
              <span className="text-[10px] font-medium tracking-[0.22em] sm:text-[11px]">
                DISCOVER OUR COLLECTION
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/60 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </button>
          </div>

          {/* Right Image - Premium Stacked Card Deck */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              {/* Decorative Backplate - Outer Arch */}
              <div
                className="absolute -right-5 -top-5 h-[95%] w-[95%] rounded-t-[280px] border border-[var(--primary)]/30 sm:-right-7 sm:-top-5"
                style={{
                  background: "var(--editorial-background)",
                  transform: "rotate(11deg)",
                }}
              />

              {/* Card Deck */}
              <div className="editorial-card-deck relative z-10 h-[360px] w-full sm:h-[440px] lg:h-[600px]">
                {editorialSlides.map((slide, index) => {
                  const position =
                    (index - activeSlide + editorialSlides.length) %
                    editorialSlides.length;

                  const isActive = position === 0;

                  const cardTransforms = [
                    "translate3d(0px, 0px, 0) rotate(0deg) scale(1)",
                    "translate3d(12px, -11px, 0) rotate(2deg) scale(0.985)",
                    "translate3d(23px, -21px, 0) rotate(3.8deg) scale(0.97)",
                    "translate3d(33px, -30px, 0) rotate(5.5deg) scale(0.955)",
                  ];

                  return (
                    <div
                      key={index}
                      onClick={() => !isActive && setActiveSlide(index)}
                      className={`editorial-stack-card absolute inset-0 overflow-hidden rounded-t-[280px] rounded-b-sm border ${
                        isActive
                          ? "z-10 border-white/40 shadow-[0_28px_65px_-20px_rgba(35,25,18,0.42)]"
                          : "border-white/30 shadow-[0_12px_30px_-15px_rgba(35,25,18,0.3)]"
                      } ${isActive ? "cursor-default" : "cursor-pointer"}`}
                      style={{
                        zIndex: editorialSlides.length - position,
                        transform: cardTransforms[position],
                        filter: isActive ? "brightness(1)" : "brightness(0.82)",
                      }}
                    >
                      {/* Hotel Image */}
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        draggable="false"
                        className={`h-full w-full object-cover ${
                          isActive ? "editorial-active-image" : ""
                        }`}
                      />

                      {/* Only Front Card Gets Overlay Details */}
                      {isActive && (
                        <>
                          {/* Cinematic Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />

                          {/* Bottom Editorial Caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                            <div className="flex items-end justify-between gap-3">
                              <p
                                className={`${cormorant.className} max-w-[340px] text-3xl leading-[1.08] text-white sm:text-4xl`}
                              >
                                {slide.caption}
                              </p>
                            </div>

                            <div className="mt-5 h-px w-full bg-white/30" />

                            <p className="mt-3 text-[8px] tracking-[0.23em] text-white/65">
                              DISCOVER EXTRAORDINARY PLACES
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="relative w-full flex justify-center overflow-hidden bg-[var(--background)] px-5 py-8 lg:py-20 text-[var(--foreground)] transition-colors duration-500 sm:py-24 lg:pt-28 lg:pb-18">
        {/* Newsletter Content */}
        <div className="max-w-[750px]">
          {/* Main Heading */}
          <h2 className={`${sectionHeadingClass} max-w-[700px]`}>
            Beautiful stays, delivered
            <span className="block">straight to your inbox.</span>
          </h2>

          {/* Newsletter Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Connect your newsletter subscription API here.
            }}
            className="mt-16 flex w-full max-w-[650px] flex-col gap-0 sm:flex-row"
          >
            {/* Email Input */}
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Email Address"
              className="h-[54px] min-w-0 flex-1 border border-[var(--border)] bg-[var(--surface)] px-6 text-sm text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--foreground)]/40 focus:border-[var(--primary)] sm:h-[58px]"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="group flex h-[54px] shrink-0 items-center justify-center gap-3 border border-[var(--primary)] bg-[var(--primary)] px-7 text-sm font-medium text-white transition-all duration-300 hover:brightness-110 sm:h-[58px]"
            >
              Subscribe
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>

          {/* Privacy Note */}
          <p className="mt-4 text-[10px] leading-5 tracking-wide text-[var(--foreground)]/45 sm:text-xs">
            Travel inspiration and exclusive offers, straight to your inbox.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
