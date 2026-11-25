"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  MapPin,
  ShoppingBag,
  Trash2,
  Users,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type CartItem = {
  id: string;
  roomId: number | string;
  roomName: string;
  image: string;
  location: string;
  pricePerNight: number;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  guests: number;
  rooms: number;
  nights: number;
  totalPrice: number;
};

const formatDate = (date: string) => {
  if (!date) return "";

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState("");

  const handleBookRooms = () => {
    if (cartItems.length === 0) return;

    try {
      const savedRequests = localStorage.getItem("hotelBookingRequests");
      const existingRequests = savedRequests ? JSON.parse(savedRequests) : [];

      if (!Array.isArray(existingRequests)) {
        throw new Error("Invalid booking request data");
      }

      const bookingRequest = {
        id: `BOOKING-${Date.now()}`,
        items: cartItems,
        subtotal,
        totalRooms: cartItems.reduce(
          (sum, item) => sum + Number(item.rooms || 0),
          0,
        ),
        submittedAt: new Date().toISOString(),
        status: "Pending",
      };

      localStorage.setItem(
        "hotelBookingRequests",
        JSON.stringify([...existingRequests, bookingRequest]),
      );

      localStorage.setItem("hotelCart", JSON.stringify([]));
      setCartItems([]);
      window.dispatchEvent(new Event("cartUpdated"));

      setBookingError("");
      setBookingSubmitted(true);
    } catch {
      setBookingError(
        "Unable to submit your booking request. Please try again.",
      );
    }
  };

  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem("hotelCart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      } catch {
        setCartItems([]);
      } finally {
        setCartLoaded(true);
      }
    };

    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("hotelCart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id: string) => {
    updateCart(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    updateCart([]);
  };

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + Number(item.totalPrice || 0),
        0,
      ),
    [cartItems],
  );

  if (!cartLoaded) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <p className="text-xs text-[var(--muted)]">Loading your cart...</p>
      </main>
    );
  }

  if (bookingSubmitted) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-5">
        <section className="w-full max-w-xl py-16 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
            <ShoppingBag
              size={28}
              strokeWidth={1.3}
              className="text-[var(--primary)]"
            />
          </div>

          <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[var(--primary)]">
            Booking request submitted
          </p>

          <h1
            className={`${cormorant.className} text-5xl leading-tight sm:text-6xl`}
          >
            Your stay is one step closer.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-xs leading-7 text-[var(--muted)]">
            Thank you for choosing us. Your booking request for{" "}
            {cartItems.length} selected{" "}
            {cartItems.length === 1 ? "stay" : "stays"} has been submitted
            successfully. Our team will confirm availability and pricing.
          </p>

          <Link
            href="/rooms"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-7 py-4 text-[9px] uppercase tracking-[0.17em] text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Explore more rooms
            <ArrowUpRight size={15} />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* PAGE INTRO */}
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-14">
        <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[var(--primary)]">
          Your selected stays
        </p>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1
              className={`${cormorant.className} text-6xl font-medium leading-none sm:text-7xl lg:text-8xl`}
            >
              Your Cart<span className="text-[var(--primary)]">.</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
            <ShoppingBag
              size={17}
              className="text-[var(--primary)]"
              strokeWidth={1.4}
            />
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "selected stay" : "selected stays"}
          </div>
        </div>
      </section>

      {cartItems.length === 0 ? (
        /* EMPTY CART */
        <section className="flex min-h-[420px] flex-col items-center justify-center border-y border-[var(--border)] px-5 text-center">
          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
            <ShoppingBag
              size={28}
              strokeWidth={1.2}
              className="text-[var(--primary)]"
            />
          </div>

          <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[var(--primary)]">
            Nothing selected yet
          </p>

          <h2 className={`${cormorant.className} text-4xl sm:text-5xl`}>
            Your next escape awaits.
          </h2>

          <p className="mt-4 max-w-[380px] text-xs leading-7 text-[var(--muted)]">
            Explore our collection of rooms and add your preferred stay to your
            cart.
          </p>

          <Link
            href="/rooms"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-7 py-4 text-[9px] uppercase tracking-[0.17em] text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Explore rooms
            <ArrowUpRight size={15} />
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-10 pb-16 lg:grid-cols-[1fr_370px] lg:gap-14">
          {/* CART ITEMS */}
          <div>
            <div className="mb-7 flex items-center justify-between border-b border-[var(--border)] pb-5">
              <h2 className={`${cormorant.className} text-3xl`}>
                Selected rooms
              </h2>

              <button
                type="button"
                onClick={clearCart}
                className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)] transition-colors hover:text-red-500"
              >
                Clear cart
              </button>
            </div>

            <div className="space-y-7">
              {[...cartItems].reverse().map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 gap-5 border-b border-[var(--border)] pb-7 sm:grid-cols-[190px_1fr] sm:gap-7"
                >
                  {/* ROOM IMAGE */}
                  <Link
                    href={`/rooms/${item.roomId}`}
                    className="group relative block h-[220px] overflow-hidden rounded-[20px] bg-[var(--surface)] sm:h-[190px]"
                  >
                    <img
                      src={item.image}
                      alt={item.roomName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* ROOM INFORMATION */}
                  <div className="flex min-w-0 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                            Selected accommodation
                          </p>

                          <Link
                            href={`/rooms/${item.roomId}`}
                            className={`${cormorant.className} block text-3xl leading-tight transition-colors hover:text-[var(--primary)] sm:text-4xl`}
                          >
                            {item.roomName}
                          </Link>

                          <p className="mt-2 flex items-center gap-2 text-[10px] text-[var(--muted)]">
                            <MapPin size={12} />
                            {item.location}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.roomName} from cart`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-red-400 hover:text-red-500"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* BOOKING DETAILS */}
                      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
                        <div className="flex items-start gap-3">
                          <CalendarDays
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                              Check in
                            </p>
                            <p className="mt-1 text-xs">
                              {formatDate(item.checkIn)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CalendarDays
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                              Check out
                            </p>
                            <p className="mt-1 text-xs">
                              {formatDate(item.checkOut)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Users
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                              Guests
                            </p>
                            <p className="mt-1 text-xs">
                              {item.adults} adults
                              {item.children > 0
                                ? `, ${item.children} children`
                                : ""}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <BedDouble
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                              Rooms and nights
                            </p>
                            <p className="mt-1 text-xs">
                              {item.rooms} {item.rooms === 1 ? "room" : "rooms"}
                              {" · "}
                              {item.nights}{" "}
                              {item.nights === 1 ? "night" : "nights"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ITEM PRICE */}
                    <div className="mt-6 flex items-end justify-between border-t border-[var(--border)] pt-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                          ₹{item.pricePerNight.toLocaleString("en-IN")} per room
                          / night
                        </p>

                        <p className="mt-1 text-[9px] text-[var(--muted)]">
                          {item.rooms} room(s) × {item.nights} night(s)
                        </p>
                      </div>

                      <p className={`${cormorant.className} text-3xl`}>
                        ₹{item.totalPrice.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="/rooms"
              className="mt-8 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
            >
              <ArrowLeft size={14} />
              Continue exploring rooms
            </Link>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8">
              <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-[var(--primary)]">
                Your selection
              </p>

              <h2 className={`${cormorant.className} text-4xl`}>
                Cart summary
              </h2>

              <div className="mt-8 space-y-5 border-y border-[var(--border)] py-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--muted)]">Selected stays</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--muted)]">Total rooms</span>
                  <span>
                    {cartItems.reduce((sum, item) => sum + item.rooms, 0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--muted)]">
                    Estimated subtotal
                  </span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="mt-7 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Estimated total
                  </p>
                  <p className="mt-2 text-[9px] text-[var(--muted)]">
                    Before applicable taxes
                  </p>
                </div>

                <p className={`${cormorant.className} text-4xl`}>
                  ₹{subtotal.toLocaleString("en-IN")}
                </p>
              </div>

              <p className="mt-6 text-[10px] leading-[1.8] text-[var(--muted)]">
                Your selections are saved in this browser. Final availability
                and pricing will be confirmed by our team.
              </p>

              <button
                type="button"
                onClick={handleBookRooms}
                className="group mt-7 flex w-full items-center justify-between rounded-full bg-[var(--foreground)] px-6 py-3 text-[9px] uppercase tracking-[0.16em] text-[var(--background)] transition-opacity hover:opacity-85"
              >
                <span>Book rooms</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              {bookingError && (
                <p
                  role="alert"
                  className="mt-3 text-center text-xs text-red-500"
                >
                  {bookingError}
                </p>
              )}
            </div>
          </aside>
        </section>
      )}
    </main>
  );
};

export default CartPage;
