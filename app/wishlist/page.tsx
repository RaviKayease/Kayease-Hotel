"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  Heart,
  MapPin,
  Star,
  Users,
  Trash2,
  ArrowRight,
} from "lucide-react";

import { rooms } from "../data/roomsPageData";
import { getWishlist, saveWishlist } from "@/app/utils/wishlist";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const syncWishlist = () => {
      setWishlist(getWishlist());
      setIsLoaded(true);
    };

    syncWishlist();

    window.addEventListener("wishlistUpdated", syncWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", syncWishlist);
    };
  }, []);

  const savedRooms = [...wishlist]
    .reverse()
    .map((id) => rooms.find((room) => room.id === id))
    .filter((room) => room !== undefined);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter((item) => item !== id);

    saveWishlist(updated);
    setWishlist(updated);
  };

  const clearWishlist = () => {
    saveWishlist([]);
    setWishlist([]);
  };

  if (!isLoaded) return null;

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <h1
            className={`${cormorant.className} font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[6vw] leading-none`}
          >
            Your Saved Stays
          </h1>

          <div className="mt-8 flex items-center gap-3 rounded-full border border-[var(--border)] px-5 py-3">
            <Heart size={15} className="text-[var(--primary)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.15em]">
              {savedRooms.length}{" "}
              {savedRooms.length === 1 ? "Saved Stay" : "Saved Stays"}
            </span>
          </div>
        </div>
      </section>

      {/* WISHLIST COLLECTION */}
      <section className="mx-auto w-full max-w-[1500px] px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        {/* COLLECTION HEADING */}
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-end">
          <div>
            <h2 className={`${sectionHeadingClass}`}>Places to dream about.</h2>
          </div>

          {savedRooms.length > 0 && (
            <button
              onClick={clearWishlist}
              className="flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/50 cursor-pointer"
            >
              <Trash2 size={14} />
              Clear wishlist
            </button>
          )}
        </div>

        {/* EMPTY STATE */}
        {savedRooms.length === 0 ? (
          <div className="flex min-h-[430px] flex-col items-center justify-center rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">
            <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <Heart
                size={30}
                strokeWidth={1}
                className="text-[var(--primary)]"
              />
            </div>

            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
              NOTHING SAVED JUST YET
            </p>

            <h3
              className={`${cormorant.className} text-4xl font-medium sm:text-5xl`}
            >
              Your next escape awaits.
            </h3>

            <p className="mt-4 max-w-sm text-xs leading-7 text-[var(--foreground)]/50">
              When a room catches your eye, save it here. Your favourite stays
              will be waiting for you whenever you return.
            </p>

            <Link
              href="/rooms"
              className="group mt-8 flex items-center gap-4 rounded-full bg-[var(--primary)] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:brightness-110"
            >
              Explore our rooms
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        ) : (
          /* SAVED ROOM CARDS */
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {savedRooms.map((room) => (
              <article key={room.id} className="group min-w-0">
                {/* IMAGE */}
                <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[var(--border)] sm:h-[330px] lg:h-[350px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                    {room.tag}
                  </span>

                  {/* REMOVE BUTTON */}
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(room.id)}
                    aria-label={`Remove ${room.name} from wishlist`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#332c26] transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:text-red-500"
                  >
                    <Heart size={17} strokeWidth={1.5} fill="currentColor" />
                  </button>

                  {/* IMAGE BOTTOM LABEL */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white backdrop-blur-md">
                    <Star
                      size={12}
                      fill="currentColor"
                      className="text-[#e6b77c]"
                    />

                    <span className="text-[10px] font-medium">
                      {room.rating.toFixed(1)} Guest Rating
                    </span>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3
                        className={`${cormorant.className} truncate text-3xl font-medium leading-tight transition-colors duration-300 group-hover:text-[var(--primary)]`}
                      >
                        {room.name}
                      </h3>

                      <p className="mt-1 truncate text-xs text-[var(--foreground)]/50">
                        {room.description}
                      </p>
                    </div>

                    <span className="shrink-0 pt-2 text-[9px] font-medium uppercase tracking-wider text-[var(--primary)]">
                      {room.category}
                    </span>
                  </div>

                  {/* ROOM FEATURES */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-5 text-[10px] text-[var(--foreground)]/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Users size={13} className="text-[var(--primary)]" />
                        {room.guests} Guests
                      </span>

                      <span className="flex items-center gap-1.5">
                        <BedDouble
                          size={13}
                          className="text-[var(--primary)]"
                        />
                        {room.beds}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[var(--primary)]" />
                      {room.location}
                    </span>
                  </div>

                  {/* PRICE AND ACTION */}
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-wider text-[var(--foreground)]/45">
                        Starting from
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

                    <Link
                      href={`/rooms/${room.id}`}
                      className="group/btn flex h-11 shrink-0 items-center gap-3 rounded-full bg-[var(--primary)] px-5 text-[10px] font-medium uppercase tracking-wider text-white transition-all duration-300 hover:brightness-110"
                    >
                      View Room
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* BOTTOM CTA */}
        {savedRooms.length > 0 && (
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-10 sm:flex-row">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
                STILL EXPLORING?
              </p>

              <p className={`${cormorant.className} mt-2 text-3xl font-medium`}>
                There's more to discover.
              </p>
            </div>

            <Link
              href="/rooms"
              className="group flex items-center gap-4 border-b border-[var(--primary)]/50 pb-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-[var(--primary)]"
            >
              Explore more stays
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default WishlistPage;
