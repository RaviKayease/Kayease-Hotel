"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import {
  rooms,
  roomCategories,
  roomLocations,
  guestReviews,
  roomsHero,
  roomsCollectionContent,
  guestExperienceContent,
} from "../data/roomsPageData";
import {
  ArrowUpRight,
  BedDouble,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Users,
  ChevronDown,
  Check,
  Minus,
  Plus,
  SlidersHorizontal,
} from "lucide-react";
import { getWishlist, saveWishlist } from "@/app/utils/wishlist";

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

  const [minPrice, setMinPrice] = useState<number | "">(MIN_ROOM_PRICE);
  const [maxPrice, setMaxPrice] = useState<number | "">(MAX_ROOM_PRICE);

  const [minRating, setMinRating] = useState(0);

  const [minGuests, setMinGuests] = useState(1);

  const locationRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const filteredRooms = rooms.filter((room) => {
    const matchesCategory =
      activeCategory === "All Rooms" || room.category === activeCategory;

    const matchesLocation =
      activeLocation === "All Locations" || room.location === activeLocation;

    const matchesPrice =
      (minPrice === "" || room.price >= minPrice) &&
      (maxPrice === "" || room.price <= maxPrice);

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
    Number(minPrice === "" || minPrice > MIN_ROOM_PRICE) +
    Number(maxPrice === "" || maxPrice < MAX_ROOM_PRICE) +
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
    const updated = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(updated);
    saveWishlist(updated);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleFilterClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleFilterClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleFilterClickOutside);
    };
  }, []);

  useEffect(() => {
    setFavorites(getWishlist());

    const handleWishlistUpdate = () => {
      setFavorites(getWishlist());
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-10 lg:pt-15">
        <div className="text-center">
          <h1
            className={`${cormorant.className} font-bold lg:font-semibold text-[13vw] xl:text-[6vw] leading-none`}
          >
            {roomsHero.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="group relative mt-5 h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[60vh] overflow-hidden rounded-[25px] sm:mt-5 sm:rounded-[35px] lg:rounded-[45px]">
          <img
            src={roomsHero.image}
            alt={roomsHero.imageAlt}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 text-white sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-14">
            <div>
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">
                {roomsHero.eyebrow}
              </p>

              <h2
                className={`${cormorant.className} text-4xl leading-none sm:text-6xl lg:text-7xl`}
              >
                {roomsHero.heading}
                <span className="block italic">
                  {roomsHero.highlightedHeading}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Room Collection */}
      <section id="room-collection" className="w-full pt-12 lg:py-15 lg:mt-10">
        {/* Heading */}
        <div className="text-center sm:text-start">
          <h2 className={`${sectionHeadingClass}`}>
            {roomsCollectionContent.heading}
          </h2>
        </div>

        {/* Filters */}
        <div className="relative mt-10 border-b border-[var(--border)] pb-5 sm:mt-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Room Categories */}
            <div className="hide-scrollbar min-w-0 flex-1 overflow-x-auto">
              <div className="flex w-max gap-3 whitespace-nowrap">
                {["All Rooms", ...roomCategories].map((category) => (
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
            <div className="flex w-full flex-1 gap-3 lg:w-auto lg:flex-none">
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
              <div className="flex w-full flex-1 gap-3 lg:w-auto lg:flex-none">
                <div className="w-full flex-1 lg:flex-none">
                  {/* Filters Button */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="flex h-[48px] w-full shrink-0 items-center justify-between gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <SlidersHorizontal size={15} />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--primary)] px-1 text-[10px] text-white">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Filter Bottom Sheet */}
              <div
                ref={filterRef}
                className={`hidden xl:block absolute left-0 right-0 top-[-35px] z-30 w-full origin-right overflow-hidden transition-transform duration-500 ease-in-out ${
                  isFilterOpen ? "scale-x-100" : "scale-x-0"
                }`}
              >
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Room filters"
                  onClick={(e) => e.stopPropagation()}
                  className="flex w-full flex-col gap-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-3 sm:px-6 lg:flex-row lg:px-4 lg:py-3"
                >
                  {/* PRICE RANGE */}
                  <div className="flex min-w-0 flex-[1.5] flex-col gap-2 pr-6 py-1 lg:py-0 border-r border-[var(--border)]">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/65">
                        Price per night
                      </p>

                      <span className="rounded-md bg-[var(--surface)] px-2 py-1 text-[10px] font-medium text-[var(--foreground)]/50">
                        INR
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* MINIMUM PRICE */}
                      <div className="flex h-11 justify-between items-center rounded-lg border border-[var(--border)] bg-[var(--background)] pl-3 pr-2 transition-colors focus-within:border-[var(--primary)]/60">
                        <div>
                          <label
                            htmlFor="min-room-price"
                            className="mb-0.5 block text-[9px] leading-tight text-[var(--foreground)]/45"
                          >
                            Minimum price
                          </label>

                          <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold text-[var(--foreground)]">
                              ₹
                            </span>

                            <input
                              id="min-room-price"
                              type="number"
                              min={MIN_ROOM_PRICE}
                              max={maxPrice}
                              step={100}
                              value={minPrice}
                              onChange={(e) => {
                                setMinPrice(
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                                );
                              }}
                              className="w-full min-w-0 bg-transparent text-sm font-semibold tabular-nums text-[var(--foreground)] outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                              aria-label="Minimum price"
                            />
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.3">
                          <button
                            type="button"
                            onClick={() =>
                              setMinPrice((prev) =>
                                Math.max(
                                  (prev === "" ? MIN_ROOM_PRICE : prev) - 100,
                                  MIN_ROOM_PRICE,
                                ),
                              )
                            }
                            disabled={
                              minPrice !== "" && minPrice <= MIN_ROOM_PRICE
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all duration-200 hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                            aria-label="Decrease minimum price"
                          >
                            −
                          </button>

                          <div className="h-4 w-px bg-[var(--border)]" />

                          <button
                            type="button"
                            onClick={() =>
                              setMinPrice((prev) =>
                                Math.min(
                                  (prev === "" ? MIN_ROOM_PRICE : prev) + 100,
                                  maxPrice === "" ? Infinity : maxPrice,
                                ),
                              )
                            }
                            disabled={
                              minPrice !== "" &&
                              maxPrice !== "" &&
                              minPrice >= maxPrice
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all duration-200 hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                            aria-label="Increase minimum price"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* MAXIMUM PRICE */}
                      <div className="flex h-11 justify-between items-center rounded-lg border border-[var(--border)] bg-[var(--background)] pl-3 pr-2 transition-colors focus-within:border-[var(--primary)]/60">
                        <div>
                          <label
                            htmlFor="max-room-price"
                            className="mb-0.5 block text-[9px] leading-tight text-[var(--foreground)]/45"
                          >
                            Maximum price
                          </label>

                          <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold text-[var(--foreground)]">
                              ₹
                            </span>

                            <input
                              id="max-room-price"
                              type="number"
                              min={undefined}
                              max={undefined}
                              step={100}
                              value={maxPrice}
                              onChange={(e) => {
                                setMaxPrice(
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                                );
                              }}
                              className="w-full min-w-0 bg-transparent text-sm font-semibold tabular-nums text-[var(--foreground)] outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                              aria-label="Maximum price"
                            />
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.3">
                          <button
                            type="button"
                            onClick={() =>
                              setMaxPrice((prev) =>
                                Math.max(
                                  (prev === "" ? MAX_ROOM_PRICE : prev) - 100,
                                  minPrice === "" ? 0 : minPrice,
                                ),
                              )
                            }
                            disabled={
                              maxPrice !== "" &&
                              minPrice !== "" &&
                              maxPrice <= minPrice
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all duration-200 hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                            aria-label="Decrease maximum price"
                          >
                            −
                          </button>

                          <div className="h-4 w-px bg-[var(--border)]" />

                          <button
                            type="button"
                            onClick={() =>
                              setMaxPrice((prev) =>
                                Math.min(
                                  (prev === "" ? MAX_ROOM_PRICE : prev) + 100,
                                  MAX_ROOM_PRICE,
                                ),
                              )
                            }
                            disabled={
                              maxPrice !== "" && maxPrice >= MAX_ROOM_PRICE
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all duration-200 hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                            aria-label="Increase maximum price"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GUEST RATING */}
                  <div className="flex shrink-0 flex-col gap-1 pr-6 border-r border-[var(--border)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/65">
                      Guest rating
                    </p>

                    <div className="flex h-full items-center gap-2">
                      {[
                        { label: "Any", value: 0 },
                        { label: "4.0+", value: 4 },
                        { label: "4.5+", value: 4.5 },
                      ].map((rating) => (
                        <button
                          key={rating.value}
                          onClick={() => setMinRating(rating.value)}
                          className={`flex h-11 items-center gap-1.5 rounded-lg border px-3 text-xs transition-all duration-200 ${
                            minRating === rating.value
                              ? "border-[var(--primary)]/30 bg-[var(--primary)]/10 font-semibold text-[var(--primary)]"
                              : "border-[var(--border)] bg-transparent text-[var(--foreground)]/60 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                          }`}
                        >
                          {rating.value !== 0 && (
                            <Star
                              size={12}
                              fill={
                                minRating === rating.value
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          )}
                          {rating.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* GUESTS */}
                  <div className="flex shrink-0 flex-col gap-4 pr-6 border-r border-[var(--border)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/65">
                      Guests
                    </p>

                    <div className="flex h-11 w-fit items-center gap-3 rounded-lg border border-[var(--border)] px-2">
                      <button
                        onClick={() =>
                          setMinGuests((prev) => Math.max(1, prev - 1))
                        }
                        disabled={minGuests <= 1}
                        aria-label="Decrease guests"
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--foreground)]/60 transition-colors hover:bg-[var(--surface)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="min-w-5 text-center text-sm font-semibold tabular-nums text-[var(--foreground)]">
                        {minGuests}
                      </span>

                      <button
                        onClick={() =>
                          setMinGuests((prev) => Math.min(MAX_GUESTS, prev + 1))
                        }
                        disabled={minGuests >= MAX_GUESTS}
                        aria-label="Increase guests"
                        className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--foreground)]/60 transition-colors hover:bg-[var(--surface)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex shrink-0 items-center justify-between gap-3 py-2 lg:flex-col lg:items-stretch lg:gap-2 lg:py-0">
                    <button
                      onClick={resetFilters}
                      className="flex h-10 items-center justify-center whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--background)] px-5 text-xs font-semibold text-[var(--foreground)]/65 transition-all duration-300 hover:border-[var(--primary)]/40 hover:bg-[var(--surface)] hover:text-[var(--primary)]"
                    >
                      Reset filters
                    </button>

                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="group flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[var(--primary)] px-5 text-xs font-semibold text-white transition-all duration-300 hover:brightness-110"
                    >
                      Apply
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* RESPONSIVE FILTER BOTTOM SHEET - BELOW XL */}
              {isFilterOpen && (
                <div
                  className="xl:hidden fixed inset-0 z-[200] flex items-end bg-[var(--foreground)]/40 backdrop-blur-sm"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <div
                    ref={filterRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Room filters"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-h-[90dvh] overflow-hidden rounded-t-[30px] border-t border-[rgb(var(--glass-border)/0.5)] bg-[rgb(var(--glass)/0.88)] text-[var(--glass-text)] shadow-xl backdrop-blur-2xl animate-[slideUp_0.3s_ease-out]"
                  >
                    {/* HEADER */}
                    <div className="flex items-center justify-between px-6 pt-5 pb-4">
                      <div>
                        <p
                          className={`${cormorant.className} text-2xl font-semibold text-[var(--foreground)]`}
                        >
                          Refine your stay
                        </p>

                        <p className="mt-1 text-xs text-[var(--foreground)]/60">
                          Customize your room preferences.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsFilterOpen(false)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)] text-xl text-[var(--foreground)] transition hover:brightness-95"
                        aria-label="Close filters"
                      >
                        ×
                      </button>
                    </div>

                    {/* SCROLLABLE FILTER CONTENT */}
                    <div className="max-h-[calc(90dvh-145px)] overflow-y-auto overscroll-contain px-5 pb-5">
                      {/* PRICE RANGE */}
                      <div className="mb-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                            PRICE PER NIGHT
                          </p>

                          <span className="rounded-md bg-[var(--surface)] px-2 py-1 text-[10px] font-medium text-[var(--foreground)]/50">
                            INR
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {/* MINIMUM PRICE */}
                          <div className="flex h-12 min-w-0 items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] pl-3 pr-2 transition-colors focus-within:border-[var(--primary)]/60">
                            <div className="min-w-0 flex-1">
                              <label
                                htmlFor="mobile-min-room-price"
                                className="mb-0.5 block text-[9px] leading-tight text-[var(--foreground)]/45"
                              >
                                Minimum price
                              </label>

                              <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold text-[var(--foreground)]">
                                  ₹
                                </span>

                                <input
                                  id="mobile-min-room-price"
                                  type="number"
                                  min={MIN_ROOM_PRICE}
                                  max={maxPrice}
                                  step={100}
                                  value={minPrice}
                                  onChange={(e) => {
                                    setMinPrice(
                                      e.target.value === ""
                                        ? ""
                                        : Number(e.target.value),
                                    );
                                  }}
                                  className="w-full min-w-0 bg-transparent text-sm font-semibold tabular-nums text-[var(--foreground)] outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                  aria-label="Minimum price"
                                />
                              </div>
                            </div>

                            <div className="ml-2 flex shrink-0 items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  setMinPrice((prev) =>
                                    Math.max(
                                      (prev === "" ? MIN_ROOM_PRICE : prev) -
                                        100,
                                      MIN_ROOM_PRICE,
                                    ),
                                  )
                                }
                                disabled={
                                  minPrice !== "" && minPrice <= MIN_ROOM_PRICE
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Decrease minimum price"
                              >
                                −
                              </button>

                              <div className="h-4 w-px bg-[var(--border)]" />

                              <button
                                type="button"
                                onClick={() =>
                                  setMinPrice((prev) =>
                                    Math.min(
                                      (prev === "" ? MIN_ROOM_PRICE : prev) +
                                        100,
                                      maxPrice === "" ? Infinity : maxPrice,
                                    ),
                                  )
                                }
                                disabled={
                                  minPrice !== "" &&
                                  maxPrice !== "" &&
                                  minPrice >= maxPrice
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Increase minimum price"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* MAXIMUM PRICE */}
                          <div className="flex h-12 min-w-0 items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] pl-3 pr-2 transition-colors focus-within:border-[var(--primary)]/60">
                            <div className="min-w-0 flex-1">
                              <label
                                htmlFor="mobile-max-room-price"
                                className="mb-0.5 block text-[9px] leading-tight text-[var(--foreground)]/45"
                              >
                                Maximum price
                              </label>

                              <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold text-[var(--foreground)]">
                                  ₹
                                </span>

                                <input
                                  id="mobile-max-room-price"
                                  type="number"
                                  step={100}
                                  value={maxPrice}
                                  onChange={(e) => {
                                    setMaxPrice(
                                      e.target.value === ""
                                        ? ""
                                        : Number(e.target.value),
                                    );
                                  }}
                                  className="w-full min-w-0 bg-transparent text-sm font-semibold tabular-nums text-[var(--foreground)] outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                  aria-label="Maximum price"
                                />
                              </div>
                            </div>

                            <div className="ml-2 flex shrink-0 items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  setMaxPrice((prev) =>
                                    Math.max(
                                      (prev === "" ? MAX_ROOM_PRICE : prev) -
                                        100,
                                      minPrice === "" ? 0 : minPrice,
                                    ),
                                  )
                                }
                                disabled={
                                  maxPrice !== "" &&
                                  minPrice !== "" &&
                                  maxPrice <= minPrice
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Decrease maximum price"
                              >
                                −
                              </button>

                              <div className="h-4 w-px bg-[var(--border)]" />

                              <button
                                type="button"
                                onClick={() =>
                                  setMaxPrice((prev) =>
                                    Math.min(
                                      (prev === "" ? MAX_ROOM_PRICE : prev) +
                                        100,
                                      MAX_ROOM_PRICE,
                                    ),
                                  )
                                }
                                disabled={
                                  maxPrice !== "" && maxPrice >= MAX_ROOM_PRICE
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium text-[var(--foreground)]/55 transition-all hover:bg-[var(--background)] hover:text-[var(--primary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Increase maximum price"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* GUEST RATING */}
                      <div className="mb-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                        <p className="mb-3 text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                          GUEST RATING
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: "Any", value: 0 },
                            { label: "4.0+", value: 4 },
                            { label: "4.5+", value: 4.5 },
                          ].map((rating) => (
                            <button
                              key={rating.value}
                              type="button"
                              onClick={() => setMinRating(rating.value)}
                              className={`flex h-11 items-center gap-1.5 rounded-lg border px-4 text-xs transition-all duration-200 ${
                                minRating === rating.value
                                  ? "border-[var(--primary)]/30 bg-[var(--primary)]/10 font-semibold text-[var(--primary)]"
                                  : "border-[var(--border)] bg-transparent text-[var(--foreground)]/60 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                              }`}
                            >
                              {rating.value !== 0 && (
                                <Star
                                  size={12}
                                  fill={
                                    minRating === rating.value
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              )}

                              {rating.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* GUESTS */}
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
                        <p className="mb-3 text-xs font-semibold tracking-widest text-[var(--foreground)]/60">
                          GUESTS
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-[var(--foreground)]">
                              Minimum guests
                            </p>

                            <p className="text-[11px] text-[var(--foreground)]/55">
                              Number of guests staying
                            </p>
                          </div>

                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() =>
                                setMinGuests((prev) => Math.max(1, prev - 1))
                              }
                              disabled={minGuests <= 1}
                              aria-label="Decrease guests"
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--primary)] text-[var(--primary)] transition hover:bg-[var(--primary)]/10 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="w-4 text-center text-sm font-semibold tabular-nums text-[var(--foreground)]">
                              {minGuests}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                setMinGuests((prev) =>
                                  Math.min(MAX_GUESTS, prev + 1),
                                )
                              }
                              disabled={minGuests >= MAX_GUESTS}
                              aria-label="Increase guests"
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* STICKY ACTION BUTTONS */}
                    <div className="flex items-center gap-3 border-t border-[var(--border)] bg-[var(--surface)]/95 px-5 py-4 pb-[max(16px,env(safe-area-inset-bottom))]">
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="flex flex-1 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] py-4 text-sm font-semibold text-[var(--foreground)]/70 transition hover:border-[var(--primary)]"
                      >
                        Reset
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsFilterOpen(false)}
                        className="flex flex-[1.5] items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-90 active:scale-[0.98]"
                      >
                        Apply Filters
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="my-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="group relative min-w-0 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden rounded-[24px] bg-[var(--border)] sm:h-[300px] lg:h-[330px] lg:rounded-[30px]">
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
                href={`/rooms/${room.id}`}
                aria-label={`View and book ${room.name}`}
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
      <section className="relative left-1/2 w-screen -translate-x-1/2 editorial-showcase overflow-hidden px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15 mb-10 text-[var(--foreground)] transition-colors duration-500">
        <div className="mx-auto w-full max-w-[1350px]">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                <Sparkles size={14} />
                {guestExperienceContent.eyebrow}
              </p>

              <h2 className={`${sectionHeadingClass}`}>
                {guestExperienceContent.heading}
                <span className="block italic text-[var(--primary)]">
                  {guestExperienceContent.highlightedHeading}
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
              {guestExperienceContent.bottomMessage}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
