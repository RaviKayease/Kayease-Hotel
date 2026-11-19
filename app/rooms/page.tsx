"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import {
  rooms,
  roomCategories,
  roomLocations,
  guestReviews,
} from "../data/roomsPageData";
import {
  ArrowDown,
  ArrowUpRight,
  BedDouble,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Users,
  ChevronDown,
  Check,
  X,
  Minus,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const RoomsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Rooms");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const MIN_ROOM_PRICE = Math.min(...rooms.map((room) => room.price));
  const MAX_ROOM_PRICE = Math.max(...rooms.map((room) => room.price));
  const MAX_GUESTS = Math.max(...rooms.map((room) => room.guests));

  const [minPrice, setMinPrice] = useState(MIN_ROOM_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_ROOM_PRICE);

  const [minRating, setMinRating] = useState(0);

  const [minGuests, setMinGuests] = useState(1);

  const locationRef = useRef<HTMLDivElement | null>(null);

  const filteredRooms = rooms.filter((room) => {
    const matchesCategory =
      activeCategory === "All Rooms" || room.category === activeCategory;

    const matchesLocation =
      activeLocation === "All Locations" || room.location === activeLocation;

    const matchesPrice = room.price >= minPrice && room.price <= maxPrice;

    const matchesRating = room.rating >= minRating;

    const matchesGuests = room.guests >= minGuests;

    return (
      matchesCategory &&
      matchesLocation &&
      matchesPrice &&
      matchesRating &&
      matchesGuests
    );
  });

  const activeFilterCount =
    Number(minPrice > MIN_ROOM_PRICE) +
    Number(maxPrice < MAX_ROOM_PRICE) +
    Number(minRating > 0) +
    Number(minGuests > 1);

  const resetFilters = () => {
    setActiveCategory("All Rooms");
    setActiveLocation("All Locations");
    setMinPrice(MIN_ROOM_PRICE);
    setMaxPrice(MAX_ROOM_PRICE);
    setMinRating(0);
    setMinGuests(1);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 pt-12 sm:pt-16 lg:pt-10">
        <div className="text-center">
          <h1
            className={`${cormorant.className} text-[16vw] font-medium leading-[0.88] tracking-tight sm:text-[12vw] lg:text-[110px]`}
          >
            Rooms & Suites
          </h1>
        </div>

        {/* Hero Image */}
        <div className="group relative mx-10 mt-12 h-[340px] overflow-hidden rounded-[25px] sm:mt-16 sm:h-[480px] sm:rounded-[35px] lg:h-[620px] lg:rounded-[45px]">
          <img
            src="https://cdn.prod.website-files.com/62e545b3db35992e653f9087/6967cdf0c4492e27096c53a1_oneandonly-aesthesis-athens-greece-boutique-hotel-31.webp"
            alt="Luxury boutique hotel suite"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 text-white sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-14">
            <div>
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">
                A PLACE TO CALL YOUR OWN
              </p>

              <h2
                className={`${cormorant.className} text-4xl leading-none sm:text-6xl lg:text-7xl`}
              >
                Your own kind of
                <span className="block italic">beautiful.</span>
              </h2>
            </div>

            <Link
              href="#room-collection"
              className="flex w-fit items-center gap-4 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[11px] backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#332c26]"
            >
              Explore our rooms
              <ArrowDown size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* Room Collection */}
      <section
        id="room-collection"
        className="mx-auto w-full max-w-[1500px] scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pt-15"
      >
        {/* Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={`${sectionHeadingClass}`}>Find Your Perfect Stay</h2>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 border-b border-[var(--border)] pb-5 sm:mt-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Room Categories */}
            <div className="hide-scrollbar min-w-0 flex-1 overflow-x-auto">
              <div className="flex w-max gap-3 whitespace-nowrap">
                {roomCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full px-5 py-3 text-[10px] font-medium transition-all duration-300 sm:px-7 sm:text-xs ${
                      activeCategory === category
                        ? "bg-[var(--primary)] text-white shadow-md"
                        : "border border-[var(--border)] text-[var(--foreground)]/65 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="flex w-full shrink-0 gap-3 lg:w-auto">
              {/* Location Filter */}
              <div
                ref={locationRef}
                className="relative min-w-0 flex-1 lg:flex-none"
              >
                <button
                  onClick={() => {
                    (setIsFilterOpen(false),
                      setIsLocationOpen((prev) => !prev));
                  }}
                  className="flex h-[48px] w-full items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 transition-all duration-300 hover:border-[var(--primary)] lg:min-w-[190px]"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <MapPin
                      size={16}
                      className="shrink-0 text-[var(--primary)]"
                    />

                    <span className="truncate text-xs font-medium text-[var(--foreground)]">
                      {activeLocation}
                    </span>
                  </div>

                  <ChevronDown
                    size={15}
                    className={`shrink-0 text-[var(--foreground)]/55 transition-transform duration-300 ${
                      isLocationOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLocationOpen && (
                  <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[190px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl">
                    {roomLocations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setActiveLocation(location);
                          setIsLocationOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-xs transition-colors ${
                          activeLocation === location
                            ? "bg-[var(--primary)]/10 font-semibold text-[var(--primary)]"
                            : "text-[var(--foreground)]/70 hover:bg-[var(--background)]"
                        }`}
                      >
                        {location}

                        {activeLocation === location && (
                          <Check size={14} className="text-[var(--primary)]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price, Rating & Guest Filter */}
              <div className="flex w-full shrink-0 gap-3 lg:w-auto">
                <div className="relative min-w-0 flex-1 lg:flex-none">
                  {/* Filters Button */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="flex h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <SlidersHorizontal size={15} />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--primary)] px-1 text-[10px] text-white">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  {/* Filter Bottom Sheet */}
                  {isFilterOpen && (
                    <div
                      className="absolute right-0 top-full z-30 mt-2 w-[calc(100vw-2.5rem)] sm:w-[520px] lg:w-[520px]"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="filter-heading"
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[88vh] w-full max-w-[520px] overflow-y-auto hide-scrollbar rounded-t-[28px] border border-[var(--border)] bg-[var(--background)] p-6 shadow-2xl sm:rounded-[28px] sm:p-8"
                      >
                        {/* Header */}
                        <div className="mb-7 flex items-center justify-between">
                          <div>
                            <h3
                              id="filter-heading"
                              className={`${cormorant.className} text-3xl font-medium`}
                            >
                              Refine Your Stay
                            </h3>
                            <p className="mt-1 text-[11px] text-[var(--foreground)]/50">
                              Find the perfect room for your experience.
                            </p>
                          </div>

                          <button
                            onClick={() => setIsFilterOpen(false)}
                            aria-label="Close filters"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-[var(--surface)]"
                          >
                            <X size={17} />
                          </button>
                        </div>

                        {/* Price Range */}
                        <div className="border-t border-[var(--border)] py-6">
                          <div className="mb-5 flex items-center justify-between">
                            <h4 className="text-sm font-semibold">
                              Price per night
                            </h4>
                            <span className="text-[10px] text-[var(--foreground)]/50">
                              INR
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="mb-1 text-[10px] text-[var(--foreground)]/45">
                                Minimum
                              </p>
                              <p className="text-sm font-medium">
                                ₹{minPrice.toLocaleString("en-IN")}
                              </p>
                            </div>

                            <div className="h-px w-8 bg-[var(--border)]" />

                            <div className="text-right">
                              <p className="mb-1 text-[10px] text-[var(--foreground)]/45">
                                Maximum
                              </p>
                              <p className="text-sm font-medium">
                                ₹{maxPrice.toLocaleString("en-IN")}
                              </p>
                            </div>
                          </div>

                          {/* Minimum Price */}
                          <div className="mt-5">
                            <label className="mb-2 block text-[10px] text-[var(--foreground)]/50">
                              Minimum price
                            </label>

                            <input
                              type="range"
                              min={MIN_ROOM_PRICE}
                              max={MAX_ROOM_PRICE}
                              step={100}
                              value={minPrice}
                              onChange={(e) =>
                                setMinPrice(
                                  Math.min(Number(e.target.value), maxPrice),
                                )
                              }
                              className="w-full cursor-pointer accent-[var(--primary)]"
                            />
                          </div>

                          {/* Maximum Price */}
                          <div className="mt-4">
                            <label className="mb-2 block text-[10px] text-[var(--foreground)]/50">
                              Maximum price
                            </label>

                            <input
                              type="range"
                              min={MIN_ROOM_PRICE}
                              max={MAX_ROOM_PRICE}
                              step={100}
                              value={maxPrice}
                              onChange={(e) =>
                                setMaxPrice(
                                  Math.max(Number(e.target.value), minPrice),
                                )
                              }
                              className="w-full cursor-pointer accent-[var(--primary)]"
                            />
                          </div>
                        </div>

                        {/* Guest Rating */}
                        <div className="border-t border-[var(--border)] py-6">
                          <h4 className="mb-4 text-sm font-semibold">
                            Guest rating
                          </h4>

                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { label: "Any rating", value: 0 },
                              { label: "4.0+", value: 4 },
                              { label: "4.5+", value: 4.5 },
                            ].map((rating) => (
                              <button
                                key={rating.value}
                                onClick={() => setMinRating(rating.value)}
                                className={`flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-xs transition-all duration-300 ${
                                  minRating === rating.value
                                    ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                                    : "border-[var(--border)] text-[var(--foreground)]/65 hover:border-[var(--primary)]"
                                }`}
                              >
                                {rating.value === 0 ? (
                                  <span className="font-medium">
                                    Any rating
                                  </span>
                                ) : (
                                  <>
                                    <span className="flex items-center gap-1 font-semibold">
                                      <Star
                                        size={12}
                                        fill="currentColor"
                                        className="text-[var(--primary)]"
                                      />
                                      {rating.label}
                                    </span>
                                    <span className="text-[9px] opacity-60">
                                      & above
                                    </span>
                                  </>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Number of Guests */}
                        <div className="border-t border-[var(--border)] py-6">
                          <h4 className="mb-4 text-sm font-semibold">
                            Number of guests
                          </h4>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-medium">Guests</p>
                              <p className="mt-1 text-[10px] text-[var(--foreground)]/50">
                                Minimum room capacity
                              </p>
                            </div>

                            <div className="flex items-center gap-4">
                              <button
                                onClick={() =>
                                  setMinGuests((prev) => Math.max(1, prev - 1))
                                }
                                disabled={minGuests <= 1}
                                aria-label="Decrease guests"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="w-5 text-center text-sm font-semibold tabular-nums">
                                {minGuests}
                              </span>

                              <button
                                onClick={() =>
                                  setMinGuests((prev) =>
                                    Math.min(MAX_GUESTS, prev + 1),
                                  )
                                }
                                disabled={minGuests >= MAX_GUESTS}
                                aria-label="Increase guests"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center gap-4 border-t border-[var(--border)] pt-6">
                          <button
                            onClick={resetFilters}
                            className="shrink-0 text-xs font-medium text-[var(--foreground)]/60 underline underline-offset-4 transition-colors hover:text-[var(--primary)]"
                          >
                            Reset all
                          </button>

                          <button
                            onClick={() => setIsFilterOpen(false)}
                            className="group flex h-[50px] flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-xs font-medium text-white transition-all duration-300 hover:brightness-110"
                          >
                            Show Stays
                            <ArrowUpRight
                              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                              size={15}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3 lg:gap-x-7 lg:gap-y-16">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="group relative min-w-0 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[var(--border)] sm:h-[300px] lg:h-[330px] lg:rounded-[30px] xl:h-[350px]">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                  {room.tag}
                </span>

                {/* Favourite */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(room.id)}
                  aria-label={`Toggle favourite for ${room.name}`}
                  aria-pressed={favorites.includes(room.id)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#332c26] backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    size={17}
                    strokeWidth={1.5}
                    fill={favorites.includes(room.id) ? "currentColor" : "none"}
                    className={
                      favorites.includes(room.id) ? "text-[var(--primary)]" : ""
                    }
                  />
                </button>
              </div>

              {/* Details */}
              <div className="pt-5">
                {/* Room Title */}
                <h3
                  className={`${cormorant.className} min-w-0 truncate text-[clamp(1.6rem,2vw,2.2rem)] font-medium leading-[1.05] transition-colors duration-300 group-hover:text-[var(--primary)]`}
                >
                  {room.name}
                </h3>

                {/* Description */}
                <p className="truncate text-xs leading-6 text-[var(--foreground)]/55">
                  {room.description}
                </p>

                {/* Room Features */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-3 border-b border-[var(--border)] pb-5 text-[10px] text-[var(--foreground)]/60">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <Users size={13} className="text-[var(--primary)]" />
                      {room.guests} Guests
                    </span>

                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <BedDouble size={13} className="text-[var(--primary)]" />
                      {room.beds}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <MapPin size={13} className="text-[var(--primary)]" />
                    {room.location}
                  </span>
                </div>

                {/* Price + Rating */}
                <div className="flex items-end justify-between gap-3">
                  {/* Price */}

                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`${cormorant.className} text-3xl font-semibold sm:text-4xl`}
                    >
                      ₹{room.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-[10px] text-[var(--foreground)]/50">
                      / night
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 pb-1">
                    <Star
                      size={13}
                      fill="currentColor"
                      className="text-[var(--primary)]"
                    />
                    <span className="text-xs font-medium">
                      {room.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Full Card Navigation */}
              <Link
                href="/contact"
                aria-label={`Enquire about ${room.name}`}
                className="absolute inset-0 z-10 rounded-[24px] lg:rounded-[30px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
              />
            </article>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="py-20 text-center">
            <p className={`${cormorant.className} text-4xl`}>No rooms found</p>
            <p className="mt-3 text-xs text-[var(--foreground)]/55">
              Explore another category.
            </p>
          </div>
        )}
      </section>
      {/* Guest Experiences & Reviews */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 editorial-showcase overflow-hidden px-5 py-20 text-[var(--foreground)] transition-colors duration-500">
        <div className="mx-auto w-full max-w-[1350px]">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                <Sparkles size={14} />
                MOMENTS THAT MATTER
              </p>

              <h2 className={`${sectionHeadingClass}`}>
                Memories made
                <span className="block italic text-[var(--primary)]">
                  with us.
                </span>
              </h2>
            </div>
          </div>

          {/* Guest Review Gallery */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Featured Guest Review */}
            {guestReviews
              .filter((review) => review.featured)
              .map((review) => (
                <div
                  key={review.id}
                  className="group relative min-h-[480px] overflow-hidden rounded-[26px] lg:col-span-7 lg:min-h-[550px]"
                >
                  <img
                    src={review.image}
                    alt={review.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-[40%] to-black/10" />

                  {/* Top Label */}
                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-2 backdrop-blur-md sm:left-4 sm:top-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-[10px] leading-none text-white">
                      {review.label}
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10 lg:p-4">
                    <div className="mb-5 flex gap-1 text-[#e6b77c]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill="currentColor"
                          strokeWidth={1}
                        />
                      ))}
                    </div>

                    <h3
                      className={`${cormorant.className} max-w-[650px] text-3xl leading-[1.1] sm:text-4xl lg:text-[52px]`}
                    >
                      "{review.review}"
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/30 pt-5">
                      <p className="text-xs font-medium tracking-wide">
                        {review.guest}
                      </p>

                      <p className="text-[9px] tracking-[0.15em] text-white/60">
                        GUEST REVIEW
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {/* Smaller Guest Experiences */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {guestReviews
                .filter((review) => !review.featured)
                .map((review) => (
                  <div
                    key={review.id}
                    className="group relative min-h-[310px] overflow-hidden rounded-[26px] sm:min-h-[350px] lg:min-h-0 lg:flex-1"
                  >
                    <img
                      src={review.image}
                      alt={review.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-[50%] to-black/10" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-4">
                      <div className="mb-3 flex gap-1 text-[#e6b77c]">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={11}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>

                      <p
                        className={`${cormorant.className} text-2xl leading-[1.1] sm:text-3xl`}
                      >
                        "{review.review}"
                      </p>

                      <p className="mt-2 text-[10px] tracking-wide text-white/65">
                        — {review.guest}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom Information */}
          <div className="flex flex-col items-center justify-between gap-6 pt-6 sm:flex-row">
            <p className="max-w-md text-center text-[10px] leading-6 tracking-wide text-[var(--foreground)]/50 sm:text-left">
              The finest memories are the ones we create together. We look
              forward to welcoming you.
            </p>

            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-5 border-b border-[var(--primary)]/50 pb-2 text-[10px] font-medium tracking-[0.2em] transition-colors hover:text-[var(--primary)]"
            >
              CREATE YOUR OWN STORY
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
