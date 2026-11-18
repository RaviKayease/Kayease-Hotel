"use client";

import React, { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowDown,
  ArrowUpRight,
  BedDouble,
  Check,
  Heart,
  MapPin,
  Maximize2,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const roomCategories = ["All Rooms", "Deluxe Rooms", "Suites", "Luxury Rooms"];

const rooms = [
  {
    id: 1,
    name: "The Heritage Suite",
    category: "Suites",
    description:
      "A beautiful blend of timeless architecture, warm interiors and modern indulgence.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
    price: 12500,
    size: "650 sq.ft.",
    guests: 3,
    beds: "King Bed",
    tag: "Most Loved",
    rating: 4.9,
  },
  {
    id: 2,
    name: "The Garden Deluxe",
    category: "Deluxe Rooms",
    description:
      "Wake up to peaceful garden views and enjoy a slower, more beautiful kind of living.",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1200",
    price: 7500,
    size: "420 sq.ft.",
    guests: 2,
    beds: "Queen Bed",
    tag: "Garden View",
    rating: 4.8,
  },
  {
    id: 3,
    name: "The Royal Residence",
    category: "Luxury Rooms",
    description:
      "An intimate sanctuary featuring refined details and exceptional comfort.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
    price: 15800,
    size: "820 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Exclusive",
    rating: 5.0,
  },
  {
    id: 4,
    name: "The Courtyard Room",
    category: "Deluxe Rooms",
    description:
      "Thoughtfully designed spaces that bring together understated luxury and serenity.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
    price: 6800,
    size: "380 sq.ft.",
    guests: 2,
    beds: "Queen Bed",
    tag: "Peaceful Escape",
    rating: 4.7,
  },
  {
    id: 5,
    name: "The Signature Suite",
    category: "Suites",
    description:
      "A spacious retreat with elegant furnishings, beautiful textures and room to unwind.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
    price: 14500,
    size: "720 sq.ft.",
    guests: 3,
    beds: "King Bed",
    tag: "Signature Stay",
    rating: 4.9,
  },
  {
    id: 6,
    name: "The Grand Escape",
    category: "Luxury Rooms",
    description:
      "Experience a little more space, privacy and effortless sophistication.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    price: 18000,
    size: "900 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Premium",
    rating: 5.0,
  },
];

const guestReviews = [
  {
    id: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1400",
    alt: "Guests enjoying an elegant dining experience",
    label: "A GUEST STORY",
    review:
      "An evening to remember, surrounded by beautiful details and wonderful hospitality.",
    guest: "A Happy Guest",
    rating: 5,
  },
  {
    id: 2,
    featured: false,
    image: "https://resizer.otstatic.com/v2/photos/xlarge/2/43573935.webp",
    alt: "Guests sharing a memorable restaurant experience",
    review: "A beautiful escape from the everyday.",
    guest: "A Happy Guest",
    rating: 5,
  },
  {
    id: 3,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000",
    alt: "Guests enjoying time together",
    review: "Thoughtful service and moments we will cherish.",
    guest: "A Happy Guest",
    rating: 5,
  },
];

const RoomsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Rooms");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredRooms =
    activeCategory === "All Rooms"
      ? rooms
      : rooms.filter((room) => room.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

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

            <a
              href="#room-collection"
              className="flex w-fit items-center gap-4 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[11px] backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#332c26]"
            >
              Explore our rooms
              <ArrowDown size={16} />
            </a>
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
            <h2 className={`${sectionHeadingClass}`}>Explore our collection</h2>
          </div>
        </div>

        {/* Filters */}

        <div className="hide-scrollbar mt-10 flex w-full items-center gap-2 overflow-x-auto border-b border-[var(--border)] pb-4 sm:mt-12 sm:gap-4">
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

        {/* Room Cards */}

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-16">
          {filteredRooms.map((room, index) => (
            <article key={room.id} className="group min-w-0">
              {/* Image */}

              <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[var(--border)] sm:h-[300px] lg:h-[330px] lg:rounded-[30px] xl:h-[370px]">
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
                  onClick={() => toggleFavorite(room.id)}
                  aria-label={`Toggle favourite for ${room.name}`}
                  aria-pressed={favorites.includes(room.id)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#332c26] backdrop-blur-md transition-all duration-300 hover:scale-110"
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

                {/* Image Number */}

                <span className="absolute bottom-4 right-5 text-[10px] tracking-[0.2em] text-white/80">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(filteredRooms.length).padStart(2, "0")}
                </span>
              </div>

              {/* Details */}

              <div className="pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      className={`${cormorant.className} text-3xl font-medium leading-tight transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-4xl`}
                    >
                      {room.name}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-6 text-[var(--foreground)]/55">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1 pt-2">
                    <Star
                      size={13}
                      fill="currentColor"
                      className="text-[var(--primary)]"
                    />
                    <span className="text-xs font-semibold">
                      {room.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Room Features */}

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-[var(--border)] pb-5 text-[10px] text-[var(--foreground)]/60">
                  <span className="flex items-center gap-1.5">
                    <Maximize2 size={14} className="text-[var(--primary)]" />
                    {room.size}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-[var(--primary)]" />
                    {room.guests} Guests
                  </span>

                  <span className="flex items-center gap-1.5">
                    <BedDouble size={14} className="text-[var(--primary)]" />
                    {room.beds}
                  </span>
                </div>

                {/* Price + Action */}

                <div className="flex items-end justify-between gap-3 pt-5">
                  <div>
                    <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]/45">
                      STARTING FROM
                    </p>

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
                  </div>

                  <a
                    href="/contact"
                    className="group/link flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                    aria-label={`Enquire about ${room.name}`}
                  >
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
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

            <a
              href="/contact"
              className="group flex shrink-0 items-center gap-5 border-b border-[var(--primary)]/50 pb-2 text-[10px] font-medium tracking-[0.2em] transition-colors hover:text-[var(--primary)]"
            >
              CREATE YOUR OWN STORY
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomsPage;
