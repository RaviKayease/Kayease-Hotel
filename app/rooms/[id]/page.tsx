"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getWishlist, saveWishlist } from "@/app/utils/wishlist";
import { rooms } from "../../data/roomsPageData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const getLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const addDays = (date: string, days: number) => {
  const result = new Date(`${date}T12:00:00`);
  result.setDate(result.getDate() + days);
  return getLocalDate(result);
};

const RoomDetailPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const room = rooms.find((item) => String(item.id) === String(id));

  const today = getLocalDate(new Date());

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(addDays(today, 1));
  const [adults, setAdults] = useState(2);
  const [roomCount, setRoomCount] = useState(1);
  const [showGuests, setShowGuests] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const [activeDatePicker, setActiveDatePicker] = useState<
    "checkIn" | "checkOut" | null
  >(null);

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const date = new Date(`${today}T12:00:00`);
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ananya Sharma",
      date: "October 2026",
      rating: 5,
      comment:
        "Absolutely loved our stay. The room was beautifully maintained, the interiors were elegant, and every little detail made the experience special.",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      date: "September 2026",
      rating: 5,
      comment:
        "A wonderful place to unwind. The room was spacious, comfortable, and exactly as described. Would definitely come back.",
    },
    {
      id: 3,
      name: "Priya Kapoor",
      date: "August 2026",
      rating: 4,
      comment:
        "Beautiful room and a very peaceful atmosphere. The overall experience was lovely, and the staff were welcoming.",
    },
    {
      id: 4,
      name: "Arjun Malhotra",
      date: "July 2026",
      rating: 5,
      comment:
        "One of the most relaxing stays we've had. Thoughtful design, comfortable bedding, and a great experience from start to finish.",
    },
  ]);

  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const averageReviewRating = useMemo(() => {
    if (!reviews.length) return 0;

    return (
      reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length
    );
  }, [reviews]);

  const ratingDistribution = useMemo(
    () =>
      [5, 4, 3, 2, 1].map((rating) => ({
        rating,
        count: reviews.filter((review) => review.rating === rating).length,
        percentage: reviews.length
          ? (reviews.filter((review) => review.rating === rating).length /
              reviews.length) *
            100
          : 0,
      })),
    [reviews],
  );

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!reviewName.trim() || !reviewComment.trim() || reviewRating === 0) {
      setReviewError(
        "Please enter your name, select a rating, and write a review.",
      );
      return;
    }

    const newReview = {
      id: Date.now(),
      name: reviewName.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
      rating: reviewRating,
      comment: reviewComment.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setReviewName("");
    setReviewComment("");
    setReviewRating(0);
    setHoverRating(0);
    setReviewError("");
    setShowReviewForm(false);
    setShowAllReviews(true);
  };

  const formatDate = (date: string) => {
    if (!date) return "Select date";

    return new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    return [
      ...Array(firstDay).fill(null),
      ...Array.from({ length: totalDays }, (_, index) => index + 1),
    ];
  }, [calendarMonth]);

  const changeMonth = (direction: number) => {
    setCalendarMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + direction, 1),
    );
  };

  const selectDate = (day: number) => {
    const selectedDate = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      day,
    );

    const value = getLocalDate(selectedDate);

    if (activeDatePicker === "checkIn") {
      handleCheckIn(value);
    } else if (activeDatePicker === "checkOut") {
      setCheckOut(value);
    }

    setActiveDatePicker(null);
  };

  const isDateDisabled = (day: number) => {
    const date = getLocalDate(
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day),
    );

    return activeDatePicker === "checkIn" ? date < today : date <= checkIn;
  };

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;

    const start = new Date(`${checkIn}T12:00:00`);
    const end = new Date(`${checkOut}T12:00:00`);

    return Math.max(
      1,
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),
    );
  }, [checkIn, checkOut]);

  if (!room) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--primary)]">
          Room not found
        </p>

        <h1 className={`${cormorant.className} text-5xl`}>
          This room is unavailable.
        </h1>

        <Link
          href="/rooms"
          className="mt-8 inline-flex items-center gap-2 border-b border-[var(--foreground)] pb-2 text-xs uppercase tracking-[0.15em]"
        >
          <ArrowLeft size={14} />
          Explore all rooms
        </Link>
      </main>
    );
  }

  const roomImages = room.images?.length > 0 ? room.images : [room.image];

  const additionalRooms = rooms
    .filter((item) => String(item.id) !== String(room.id))
    .slice(0, 4);

  const totalPrice = room.price * nights * roomCount;

  const handleCheckIn = (value: string) => {
    setCheckIn(value);

    if (value >= checkOut) {
      setCheckOut(addDays(value, 1));
    }
  };

  const bookingUrl = `/contact?${new URLSearchParams({
    room: room.name,
    roomId: String(room.id),
    checkIn,
    checkOut,
    guests: String(adults),
    rooms: String(roomCount),
    nights: String(nights),
    total: String(totalPrice),
  }).toString()}`;

  const openGallery = (index = 0) => {
    setActivePhoto(index);
    setShowAllPhotos(true);
  };

  const nextPhoto = () => {
    setActivePhoto((current) => (current + 1) % roomImages.length);
  };

  const previousPhoto = () => {
    setActivePhoto(
      (current) => (current - 1 + roomImages.length) % roomImages.length,
    );
  };

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(updated);
    saveWishlist(updated);
  };

  useEffect(() => {
    // Load the saved wishlist
    setFavorites(getWishlist());

    // Listen for wishlist changes from other components
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
      {/* PAGE INTRO */}
      <section className="pb-9 pt-12 sm:pt-16">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <h1
              className={`${cormorant.className} text-[clamp(48px,7vw,94px)] font-normal leading-[0.95] tracking-[-0.045em]`}
            >
              {room.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                {room.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <Star
                  size={13}
                  fill="currentColor"
                  className="text-[var(--primary)]"
                />
                {room.rating} Guest rating
              </span>

              <span className="inline-flex items-center gap-2">
                <Users size={14} />
                Up to {room.guests} guests
              </span>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Starting from
            </p>

            <p className={`${cormorant.className} text-4xl`}>
              ₹{room.price.toLocaleString("en-IN")}
              <span className="ml-2 font-sans text-xs text-[var(--muted)]">
                / night
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ROOM TOUR */}
      <section className="pb-10 border-b border-[var(--border)]">
        {/* EDITORIAL PHOTO GRID */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 sm:grid-rows-2 sm:gap-4 sm:h-[540px] lg:h-[640px]">
          {/* FEATURED PHOTO */}
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="group relative min-h-[330px] overflow-hidden rounded-[24px] text-left sm:col-span-7 sm:row-span-2 sm:min-h-0"
          >
            <img
              src={roomImages[0]}
              alt={`${room.name} main view`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            <div className="absolute bottom-7 left-7 text-white sm:bottom-10 sm:left-10">
              <span className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/75">
                The room experience
              </span>

              <span
                className={`${cormorant.className} block max-w-[450px] text-4xl leading-[1.05] sm:text-6xl`}
              >
                A little world of your own.
              </span>
            </div>
          </button>

          {/* SECOND PHOTO */}
          <button
            type="button"
            onClick={() => openGallery(1)}
            className="group relative min-h-[220px] overflow-hidden rounded-[24px] sm:col-span-5 sm:min-h-0"
          >
            <img
              src={roomImages[1] || roomImages[0]}
              alt={`${room.name} interior`}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
            />
          </button>

          {/* THIRD PHOTO */}
          <button
            type="button"
            onClick={() => openGallery(2)}
            className="group relative min-h-[220px] overflow-hidden rounded-[24px] sm:col-span-3 sm:min-h-0"
          >
            <img
              src={roomImages[2] || roomImages[0]}
              alt={`${room.name} room details`}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
            />
          </button>

          {/* FOURTH PHOTO / GALLERY BUTTON */}
          <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:col-span-2 sm:min-h-0">
            <button
              type="button"
              onClick={() => openGallery(3)}
              className="group absolute inset-0"
            >
              <img
                src={roomImages[3] || roomImages[0]}
                alt={`${room.name} additional view`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />

              <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
                <Images size={22} strokeWidth={1.3} />
                <span className="text-[9px] uppercase tracking-[0.16em]">
                  View gallery
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FULL SCREEN PHOTO VIEWER */}
      {showAllPhotos && (
        <div
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[#171714] text-white"
          role="dialog"
          aria-modal="true"
          aria-label={`${room.name} photo gallery`}
        >
          {/* HEADER */}
          <div className="flex shrink-0 items-center justify-between border-b border-white/15 px-5 py-4 sm:px-10">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                Room collection
              </p>

              <p className={`${cormorant.className} text-2xl`}>{room.name}</p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllPhotos(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:bg-white hover:text-black"
              aria-label="Close gallery"
            >
              <X size={19} />
            </button>
          </div>

          {/* GALLERY CONTENT */}
          <div className="flex min-h-0 flex-1 flex-col items-center px-5 py-4 sm:px-10 sm:py-5">
            {/* MAIN IMAGE */}
            <div className="relative flex min-h-0 w-full max-w-[1150px] flex-1 items-center justify-center">
              <img
                src={roomImages[activePhoto]}
                alt={`${room.name} photo ${activePhoto + 1}`}
                className="block max-h-full max-w-full rounded-[16px] object-contain"
              />

              {roomImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-white hover:text-black sm:left-5"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-white hover:text-black sm:right-5"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* PHOTO INFO */}
            <div className="mt-4 flex w-full max-w-[1150px] shrink-0 items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.17em] text-white/55">
                {room.name}
              </p>

              <p className="text-xs tabular-nums text-white/70">
                {activePhoto + 1} / {roomImages.length}
              </p>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex w-full max-w-[1150px] shrink-0 justify-center gap-2 overflow-x-auto overflow-y-hidden pb-2">
              {roomImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                    activePhoto === index
                      ? "border-white opacity-100"
                      : "border-transparent opacity-45 hover:opacity-80"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ROOM DETAILS + BOOKING */}
      <section className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1fr_420px] lg:gap-20 lg:py-24">
        {/* LEFT CONTENT */}
        <div>
          {/* SECTION INTRO */}
          <div className="mb-10">
            <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[var(--primary)]">
              Designed around you
            </p>

            <h2
              className={`${cormorant.className} max-w-[600px] text-5xl leading-[1.05] tracking-[-0.025em] sm:text-6xl`}
            >
              Everything you need
              <span className="italic text-[var(--primary)]"> to unwind.</span>
            </h2>

            <p className="mt-5 max-w-[510px] text-xs leading-[2] text-[var(--muted)]">
              Thoughtfully considered details, generous comfort and little
              touches that make your stay feel like your own.
            </p>
          </div>

          {/* AT A GLANCE */}
          <div className="border-y border-[var(--border)] py-9">
            <div className="mb-9 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">
                The essentials
              </p>

              <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
                At a glance
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {[
                {
                  icon: Users,
                  value: `${room.guests} Guests`,
                  label: "Maximum occupancy",
                },
                {
                  icon: BedDouble,
                  value: room.beds,
                  label: "Sleeping arrangement",
                },
                {
                  icon: Sparkles,
                  value: room.size,
                  label: "Room dimensions",
                },
                {
                  icon: MapPin,
                  value: room.location,
                  label: "Room location",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="group">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/5">
                      <Icon
                        size={19}
                        strokeWidth={1.3}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <p className="text-xs font-medium">{item.value}</p>

                    <p className="mt-2 text-[10px] text-[var(--muted)]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GOOD TO KNOW */}
          <div className="mt-9 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.4}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.17em]">
                    Good to know
                  </p>
                  <p className="mt-1 text-[10px] text-[var(--muted)]">
                    A few details before your stay
                  </p>
                </div>
              </div>

              <Sparkles
                size={17}
                strokeWidth={1.2}
                className="text-[var(--primary)]/60"
              />
            </div>

            <div className="space-y-5">
              {[
                "Check-in and check-out timings will be confirmed with your reservation.",
                "Room preferences are subject to availability.",
                "Special requests can be shared with our team before arrival.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[9px] text-[var(--primary)]">
                    0{index + 1}
                  </span>

                  <p className="pt-1 text-xs leading-[1.8] text-[var(--muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <aside className="lg:sticky lg:top-10 lg:self-start">
          <div className="overflow-visible rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.045)]">
            {/* BOOKING HEADER */}
            <div className="border-b border-[var(--border)] p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Your private escape
                </p>

                <span className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-[9px] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Reservation
                </span>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className={`${cormorant.className} text-5xl leading-none`}>
                    ₹{room.price.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-2 text-[10px] text-[var(--muted)]">
                    Per room, per night
                  </p>
                </div>

                <div className="mb-1 flex items-center gap-1.5">
                  <Star
                    size={13}
                    fill="currentColor"
                    className="text-[var(--primary)]"
                  />
                  <span className="text-xs font-medium">{room.rating}</span>
                  <span className="text-[9px] text-[var(--muted)]">
                    Guest rating
                  </span>
                </div>
              </div>
            </div>

            {/* BOOKING FORM */}
            <div className="p-7 sm:p-8">
              {/* CUSTOM DATE PICKER */}
              <div className="relative mb-6">
                <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  When would you like to stay?
                </p>

                <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--border)]">
                  {/* CHECK IN */}
                  <button
                    type="button"
                    onClick={() => {
                      setCalendarMonth(
                        new Date(
                          new Date(`${checkIn}T12:00:00`).getFullYear(),
                          new Date(`${checkIn}T12:00:00`).getMonth(),
                          1,
                        ),
                      );
                      setActiveDatePicker(
                        activeDatePicker === "checkIn" ? null : "checkIn",
                      );
                    }}
                    className={`group min-w-0 border-r border-[var(--border)] p-4 text-left transition-colors ${
                      activeDatePicker === "checkIn"
                        ? "bg-[var(--primary)]/[0.06]"
                        : "hover:bg-[var(--background)]"
                    }`}
                  >
                    <span className="mb-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      <CalendarDays
                        size={13}
                        className="text-[var(--primary)]"
                      />
                      Check in
                    </span>

                    <span className="block text-sm font-medium">
                      {formatDate(checkIn)}
                    </span>

                    <span className="mt-1 block text-[9px] text-[var(--muted)]">
                      Arrival date
                    </span>
                  </button>

                  {/* CHECK OUT */}
                  <button
                    type="button"
                    onClick={() => {
                      setCalendarMonth(
                        new Date(
                          new Date(`${checkOut}T12:00:00`).getFullYear(),
                          new Date(`${checkOut}T12:00:00`).getMonth(),
                          1,
                        ),
                      );
                      setActiveDatePicker(
                        activeDatePicker === "checkOut" ? null : "checkOut",
                      );
                    }}
                    className={`group min-w-0 p-4 text-left transition-colors ${
                      activeDatePicker === "checkOut"
                        ? "bg-[var(--primary)]/[0.06]"
                        : "hover:bg-[var(--background)]"
                    }`}
                  >
                    <span className="mb-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      <CalendarDays
                        size={13}
                        className="text-[var(--primary)]"
                      />
                      Check out
                    </span>

                    <span className="block text-sm font-medium">
                      {formatDate(checkOut)}
                    </span>

                    <span className="mt-1 block text-[9px] text-[var(--muted)]">
                      Departure date
                    </span>
                  </button>
                </div>

                {/* CALENDAR PANEL */}
                {activeDatePicker && (
                  <div className="absolute left-0 right-0 top-full z-40 mt-3 rounded-[22px] border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:p-6">
                    {/* CALENDAR HEADER */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className={`${cormorant.className} text-2xl`}>
                          {activeDatePicker === "checkIn"
                            ? "Arrival"
                            : "Departure"}
                        </p>

                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          {activeDatePicker === "checkIn"
                            ? "Choose your check-in date"
                            : "Choose your check-out date"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveDatePicker(null)}
                        aria-label="Close calendar"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--surface)]"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    {/* MONTH NAVIGATION */}
                    <div className="mb-5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => changeMonth(-1)}
                        disabled={
                          calendarMonth.getFullYear() ===
                            new Date(
                              `${activeDatePicker === "checkIn" ? today : checkIn}T12:00:00`,
                            ).getFullYear() &&
                          calendarMonth.getMonth() <=
                            new Date(
                              `${activeDatePicker === "checkIn" ? today : checkIn}T12:00:00`,
                            ).getMonth()
                        }
                        aria-label="Previous month"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <p className="text-xs font-medium">
                        {calendarMonth.toLocaleDateString("en-IN", {
                          month: "long",
                          year: "numeric",
                        })}
                      </p>

                      <button
                        type="button"
                        onClick={() => changeMonth(1)}
                        aria-label="Next month"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* WEEKDAYS */}
                    <div className="mb-3 grid grid-cols-7 text-center">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <span
                          key={day}
                          className="py-2 text-[9px] font-medium uppercase tracking-wider text-[var(--muted)]"
                        >
                          {day}
                        </span>
                      ))}
                    </div>

                    {/* CALENDAR DAYS */}
                    <div className="grid grid-cols-7 gap-y-1">
                      {calendarDays.map((day, index) => {
                        if (!day) {
                          return <div key={`empty-${index}`} />;
                        }

                        const date = getLocalDate(
                          new Date(
                            calendarMonth.getFullYear(),
                            calendarMonth.getMonth(),
                            day,
                          ),
                        );

                        const selected =
                          date ===
                          (activeDatePicker === "checkIn" ? checkIn : checkOut);

                        const inRange = date > checkIn && date < checkOut;

                        const disabled = isDateDisabled(day);

                        return (
                          <button
                            key={date}
                            type="button"
                            disabled={disabled}
                            onClick={() => selectDate(day)}
                            className={`relative mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[11px] transition-all duration-200 ${
                              selected
                                ? "bg-[var(--foreground)] font-medium text-[var(--background)]"
                                : inRange
                                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                  : disabled
                                    ? "cursor-not-allowed text-[var(--muted)]/30"
                                    : "hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* CALENDAR FOOTER */}
                    <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
                      <p className="text-[10px] text-[var(--muted)]">
                        {activeDatePicker === "checkIn"
                          ? "Your stay begins here"
                          : "Your stay ends here"}
                      </p>

                      <button
                        type="button"
                        onClick={() => setActiveDatePicker(null)}
                        className="text-[9px] uppercase tracking-[0.16em] text-[var(--primary)]"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* CUSTOM GUEST SELECTOR */}
              <div className="relative">
                <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Who is coming?
                </p>

                <button
                  type="button"
                  onClick={() => setShowGuests(!showGuests)}
                  aria-expanded={showGuests}
                  className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                    showGuests
                      ? "border-[var(--primary)] bg-[var(--primary)]/[0.035]"
                      : "border-[var(--border)] hover:border-[var(--primary)]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <Users
                        size={17}
                        strokeWidth={1.4}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium">
                        {adults} {adults === 1 ? "Guest" : "Guests"}
                        <span className="mx-2 text-[var(--muted)]">·</span>
                        {roomCount} {roomCount === 1 ? "Room" : "Rooms"}
                      </p>

                      <p className="mt-1 text-[10px] text-[var(--muted)]">
                        Select your stay details
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`text-[var(--muted)] transition-transform duration-300 ${
                      showGuests ? "rotate-180 text-[var(--primary)]" : ""
                    }`}
                  />
                </button>

                {/* CUSTOM FLOATING PANEL */}
                {showGuests && (
                  <div className="absolute left-0 right-0 top-full z-30 mt-3 rounded-[22px] border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:p-6">
                    {/* PANEL HEADING */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className={`${cormorant.className} text-2xl`}>
                          Your party
                        </p>
                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          Choose who is joining you
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowGuests(false)}
                        aria-label="Close guest selector"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--surface)]"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    {/* ADULTS */}
                    <div className="flex items-center justify-between border-b border-[var(--border)] py-5">
                      <div>
                        <p className="text-xs font-medium">Adults</p>
                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          Maximum {room.guests} guests per room
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          disabled={adults <= 1}
                          aria-label="Remove adult"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-5 text-center text-sm tabular-nums">
                          {adults}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setAdults(Math.min(room.guests, adults + 1))
                          }
                          disabled={adults >= room.guests}
                          aria-label="Add adult"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* ROOMS */}
                    <div className="flex items-center justify-between py-5">
                      <div>
                        <p className="text-xs font-medium">Rooms</p>
                        <p className="mt-1 text-[10px] text-[var(--muted)]">
                          Up to 5 rooms
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setRoomCount(Math.max(1, roomCount - 1))
                          }
                          disabled={roomCount <= 1}
                          aria-label="Remove room"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-5 text-center text-sm tabular-nums">
                          {roomCount}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setRoomCount(Math.min(5, roomCount + 1))
                          }
                          disabled={roomCount >= 5}
                          aria-label="Add room"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* APPLY */}
                    <button
                      type="button"
                      onClick={() => setShowGuests(false)}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] py-4 text-[9px] uppercase tracking-[0.18em] text-[var(--background)] transition-opacity hover:opacity-80"
                    >
                      <Check size={14} />
                      Apply selection
                    </button>
                  </div>
                )}
              </div>

              {/* PRICE BREAKDOWN */}
              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="mb-5 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Your stay summary
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="text-[var(--muted)]">
                      ₹{room.price.toLocaleString("en-IN")} × {nights}{" "}
                      {nights === 1 ? "night" : "nights"}
                    </span>

                    <span>
                      ₹{(room.price * nights).toLocaleString("en-IN")}
                    </span>
                  </div>

                  {roomCount > 1 && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)]">
                        {roomCount} rooms
                      </span>

                      <span>
                        ₹
                        {(room.price * nights * roomCount).toLocaleString(
                          "en-IN",
                        )}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--muted)]">Guests</span>
                    <span>
                      {adults} {adults === 1 ? "adult" : "adults"}
                    </span>
                  </div>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-7 flex items-end justify-between border-t border-[var(--border)] pt-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Estimated total
                  </p>

                  <p className="mt-2 text-[10px] text-[var(--muted)]">
                    {nights} {nights === 1 ? "night" : "nights"} · {roomCount}{" "}
                    {roomCount === 1 ? "room" : "rooms"}
                  </p>
                </div>

                <p className={`${cormorant.className} text-4xl leading-none`}>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </p>
              </div>

              {/* RESERVATION BUTTON */}
              <Link
                href={bookingUrl}
                className="group mt-7 flex w-full items-center justify-between rounded-full bg-[var(--foreground)] px-6 py-3 text-[9px] uppercase tracking-[0.17em] text-[var(--background)] transition-all duration-300 hover:opacity-85"
              >
                <span>Request reservation</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <div className="mt-5 flex items-start justify-center gap-2 text-center">
                <ShieldCheck
                  size={13}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <p className="max-w-[270px] text-[9px] leading-[1.8] text-[var(--muted)]">
                  Your request will be reviewed by our team. No payment is
                  collected at this stage.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* EXPLORE MORE ROOMS */}
      <section className=" relative left-1/2 flex w-screen -translate-x-1/2 bg-[var(--surface)] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-[var(--primary)]">
                Continue exploring
              </p>

              <h2
                className={`${cormorant.className} max-w-[650px] text-5xl leading-[1.05] sm:text-6xl`}
              >
                Find another place
                <span className="italic"> to belong.</span>
              </h2>

              <p className="mt-4 max-w-[450px] text-xs leading-[1.9] text-[var(--muted)]">
                Each room has its own personality. Discover another thoughtfully
                designed space for your next stay.
              </p>
            </div>

            <Link
              href="/rooms"
              className="group inline-flex items-center gap-3 border-b border-[var(--foreground)] pb-2 text-[9px] uppercase tracking-[0.17em] transition-colors hover:text-[var(--primary)]"
            >
              Explore all rooms
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* ONE IMAGE PER ROOM */}
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-16">
            {additionalRooms.map((room) => (
              <article
                key={room.id}
                className="group relative min-w-0 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[var(--border)] sm:h-[300px] lg:h-[330px] lg:rounded-[30px] xl:h-[250px]">
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
                      fill={
                        favorites.includes(room.id) ? "currentColor" : "none"
                      }
                      className={
                        favorites.includes(room.id)
                          ? "text-[var(--primary)]"
                          : ""
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
                        <BedDouble
                          size={13}
                          className="text-[var(--primary)]"
                        />
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
        </div>
      </section>

      {/* GUEST REVIEWS */}
      <section id="reviews" className="py-20 sm:py-28">
        <div>
          {/* SECTION HEADER */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
                Guest experiences
              </p>

              <h2
                className={`${cormorant.className} text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl`}
              >
                Guest reviews<span className="text-[var(--primary)]">.</span>
              </h2>

              <p className="mt-4 max-w-[480px] text-xs leading-7 text-[var(--muted)]">
                Read about the experiences of guests who have stayed in this
                room.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowReviewForm((prev) => !prev)}
              className="inline-flex h-12 items-center justify-center gap-3 self-start border border-[var(--foreground)] px-6 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)] sm:self-auto"
            >
              {showReviewForm ? "Close form" : "Write a review"}
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* RATING OVERVIEW */}
          <div className="mb-14 grid grid-cols-1 gap-10 border-y border-[var(--border)] py-9 md:grid-cols-[220px_1fr] md:gap-16">
            {/* OVERALL RATING */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <Star
                  size={23}
                  fill="currentColor"
                  className="text-[var(--primary)]"
                />

                <span
                  className={`${cormorant.className} text-6xl leading-none`}
                >
                  {averageReviewRating.toFixed(1)}
                </span>
              </div>

              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    fill={
                      star <= Math.round(averageReviewRating)
                        ? "currentColor"
                        : "none"
                    }
                    className={
                      star <= Math.round(averageReviewRating)
                        ? "text-[var(--primary)]"
                        : "text-[var(--muted)]"
                    }
                  />
                ))}
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
                {reviews.length} guest{" "}
                {reviews.length === 1 ? "review" : "reviews"}
              </p>

              <p className="mt-1 text-[10px] text-[var(--muted)]">
                Overall guest rating
              </p>
            </div>

            {/* RATING BREAKDOWN */}
            <div className="flex flex-col justify-center gap-3">
              {ratingDistribution.map((item) => (
                <div
                  key={item.rating}
                  className="grid grid-cols-[35px_1fr_35px] items-center gap-4"
                >
                  <span className="text-[10px] text-[var(--muted)]">
                    {item.rating} star
                  </span>

                  <div className="h-[5px] overflow-hidden rounded-full bg-[var(--border)]">
                    <div
                      className="h-full rounded-full bg-[var(--primary)] transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <span className="text-right text-[10px] tabular-nums text-[var(--muted)]">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WRITE A REVIEW FORM */}
          {showReviewForm && (
            <div className="mb-14 border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10">
              <div className="mb-8">
                <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-[var(--primary)]">
                  Share your experience
                </p>

                <h3 className={`${cormorant.className} text-4xl`}>
                  How was your stay?
                </h3>

                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                  Your feedback helps other guests make the right choice.
                </p>
              </div>

              <form onSubmit={handleReviewSubmit} className="max-w-[750px]">
                {/* STAR SELECTOR */}
                <div className="mb-8">
                  <label className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.16em]">
                    Your rating
                  </label>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        aria-label={`Rate ${star} out of 5 stars`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setReviewRating(star)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          size={27}
                          strokeWidth={1.5}
                          fill={
                            star <= (hoverRating || reviewRating)
                              ? "currentColor"
                              : "none"
                          }
                          className={
                            star <= (hoverRating || reviewRating)
                              ? "text-[var(--primary)]"
                              : "text-[var(--muted)]"
                          }
                        />
                      </button>
                    ))}

                    <span className="ml-3 text-[10px] text-[var(--muted)]">
                      {reviewRating
                        ? `${reviewRating} out of 5`
                        : "Select your rating"}
                    </span>
                  </div>
                </div>

                {/* NAME */}
                <div className="mb-6">
                  <label
                    htmlFor="review-name"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.16em]"
                  >
                    Your name
                  </label>

                  <input
                    id="review-name"
                    type="text"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="Enter your name"
                    maxLength={60}
                    className="h-12 w-full border border-[var(--border)] bg-transparent px-4 text-xs outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                  />
                </div>

                {/* REVIEW */}
                <div className="mb-6">
                  <label
                    htmlFor="review-comment"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.16em]"
                  >
                    Your experience
                  </label>

                  <textarea
                    id="review-comment"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Tell us what you loved about your stay..."
                    rows={5}
                    maxLength={1000}
                    className="w-full resize-none border border-[var(--border)] bg-transparent p-4 text-xs leading-7 outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                  />

                  <p className="mt-2 text-right text-[9px] text-[var(--muted)]">
                    {reviewComment.length}/1000
                  </p>
                </div>

                {reviewError && (
                  <p className="mb-5 text-xs text-red-500">{reviewError}</p>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-3 bg-[var(--foreground)] px-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--background)] transition-opacity hover:opacity-80"
                  >
                    Submit review
                    <ArrowUpRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowReviewForm(false);
                      setReviewError("");
                    }}
                    className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* REVIEWS LIST HEADER */}
          <div className="mb-8 flex items-center justify-between">
            <h3 className={`${cormorant.className} text-3xl`}>
              What guests are saying
            </h3>

            <span className="text-[10px] text-[var(--muted)]">
              {reviews.length} reviews
            </span>
          </div>

          {/* INDIVIDUAL REVIEWS */}
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
              {reviews
                .slice(0, showAllReviews ? reviews.length : 4)
                .map((review) => (
                  <article
                    key={review.id}
                    className="border-t border-[var(--border)] py-7"
                  >
                    {/* REVIEWER */}
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-semibold uppercase">
                          {review.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div>
                          <p className="text-xs font-semibold">{review.name}</p>
                          <p className="mt-1 text-[10px] text-[var(--muted)]">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Star
                          size={12}
                          fill="currentColor"
                          className="text-[var(--primary)]"
                        />
                        <span className="text-[11px] font-semibold">
                          {review.rating}.0
                        </span>
                      </div>
                    </div>

                    {/* REVIEW TEXT */}
                    <p className="max-w-[550px] text-xs leading-[2] text-[var(--muted)]">
                      {review.comment}
                    </p>
                  </article>
                ))}
            </div>
          ) : (
            <div className="border-t border-[var(--border)] py-12 text-center">
              <p className={`${cormorant.className} text-3xl`}>
                No reviews yet.
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                Be the first guest to share your experience.
              </p>
            </div>
          )}

          {/* VIEW ALL */}
          {reviews.length > 4 && (
            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <button
                type="button"
                onClick={() => setShowAllReviews((prev) => !prev)}
                className="inline-flex h-12 items-center gap-3 border border-[var(--foreground)] px-6 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              >
                {showAllReviews
                  ? "Show fewer reviews"
                  : `Show all ${reviews.length} reviews`}
                <ArrowUpRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default RoomDetailPage;
