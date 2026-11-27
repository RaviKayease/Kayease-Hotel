"use client";

import React from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowDown,
  ArrowUpRight,
  Search,
  CalendarDays,
  ClipboardList,
  Check,
  CircleHelp,
} from "lucide-react";
import { bookingGuidePageData } from "@/app/data/bookingGuideData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const BookingGuidePageClient = () => {
  return (
    <main>
      {/* HERO */}
      <section className="pt-10 lg:pt-15">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-4 lg:mb-8 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]/45">
              Your journey begins here
            </p>
          </div>

          <div className="relative h-[25vh] min-h-[420px] sm:h-[35vh] md:h-[45vh] lg:h-[60vh] overflow-hidden rounded-4xl">
            <img
              src={bookingGuidePageData.hero.image}
              alt={bookingGuidePageData.hero.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/10" />

            <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-10 lg:p-16">
              <div className="flex items-center justify-between gap-3">
                <span className="border border-white/40 px-3 py-2 text-[8px] uppercase tracking-[0.18em] sm:px-4 sm:text-[9px] sm:tracking-[0.22em]">
                  A simpler way to stay
                </span>

                <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/65 sm:block">
                  Discover · Plan · Experience
                </span>
              </div>

              <div>
                <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/75 sm:mb-5 sm:text-[10px] sm:tracking-[0.3em]">
                  {bookingGuidePageData.hero.eyebrow}
                </p>

                <h1
                  className={`${cormorant.className} text-[13vw] font-bold leading-[0.95] sm:text-[11vw] sm:font-semibold xl:text-[6vw]`}
                >
                  {bookingGuidePageData.hero.title}
                  <br />
                  <span className="italic">
                    {bookingGuidePageData.hero.highlightedTitle}
                  </span>
                </h1>

                <div className="mt-5 flex flex-col justify-between gap-4 sm:mt-9 sm:flex-row sm:items-end sm:gap-7">
                  <p className="max-w-[390px] text-[11px] leading-5 text-white/75 sm:text-sm sm:leading-6">
                    {bookingGuidePageData.hero.description}
                  </p>

                  <a
                    href="#how-it-works"
                    className="inline-flex w-fit items-center gap-3 border-b border-white/60 pb-2 text-[8px] font-semibold uppercase tracking-[0.2em] sm:pb-3 sm:text-[9px]"
                  >
                    Explore the guide
                    <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING JOURNEY */}
      <section id="how-it-works" className="py-10 lg:py-15">
        <div className="mx-auto max-w-[1350px]">
          {/* Heading */}
          <div className="mb-5 flex flex-col justify-between gap-8 lg:mb-10 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[var(--primary)]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  Your booking journey
                </p>
              </div>

              <h2 className={`${sectionHeadingClass}`}>
                {bookingGuidePageData.journey.heading}
                <br />
                <span className="italic text-[var(--primary)]">
                  {bookingGuidePageData.journey.highlightedHeading}
                </span>
              </h2>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-10 lg:space-y-20">
            {/* Step 01 */}
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="group relative h-[340px] overflow-hidden lg:h-[540px] rounded-[24px]">
                <img
                  src={bookingGuidePageData.journey.steps[0].image}
                  alt={bookingGuidePageData.journey.steps[0].imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  01
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  {bookingGuidePageData.journey.steps[0].imageLabel}
                </span>
              </div>

              <div className="lg:pl-4">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  {bookingGuidePageData.journey.steps[0].eyebrow}
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  {bookingGuidePageData.journey.steps[0].title}
                  <br />
                  <span className="italic">
                    {bookingGuidePageData.journey.steps[0].highlightedTitle}
                  </span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  {bookingGuidePageData.journey.steps[0].description}
                </p>
                <div className="mt-9 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                  <Search
                    size={17}
                    strokeWidth={1.4}
                    className="text-[var(--primary)]"
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">
                    Explore places & properties
                  </span>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div className="order-2 lg:order-1 lg:pl-12">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  {bookingGuidePageData.journey.steps[1].eyebrow}
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  {bookingGuidePageData.journey.steps[1].title}
                  <br />
                  <span className="italic">
                    {bookingGuidePageData.journey.steps[1].highlightedTitle}
                  </span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  {bookingGuidePageData.journey.steps[1].description}
                </p>
                <div className="mt-9 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.4}
                    className="text-[var(--primary)]"
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">
                    Select dates & guests
                  </span>
                </div>
              </div>

              <div className="group relative order-1 h-[340px] overflow-hidden lg:order-2 lg:h-[540px] rounded-[24px]">
                <img
                  src={bookingGuidePageData.journey.steps[1].image}
                  alt={bookingGuidePageData.journey.steps[1].imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  02
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  {bookingGuidePageData.journey.steps[1].imageLabel}
                </span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="group relative h-[340px] overflow-hidden lg:h-[540px] rounded-[24px]">
                <img
                  src={bookingGuidePageData.journey.steps[2].image}
                  alt={bookingGuidePageData.journey.steps[2].imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  03
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  {bookingGuidePageData.journey.steps[2].imageLabel}
                </span>
              </div>

              <div className="lg:pl-4">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  {bookingGuidePageData.journey.steps[2].eyebrow}
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  {bookingGuidePageData.journey.steps[2].title}
                  <br />
                  <span className="italic">
                    {bookingGuidePageData.journey.steps[2].highlightedTitle}
                  </span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  {bookingGuidePageData.journey.steps[2].description}
                </p>
                <div className="mt-9 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                  <ClipboardList
                    size={17}
                    strokeWidth={1.4}
                    className="text-[var(--primary)]"
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">
                    Review your reservation
                  </span>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div className="order-2 lg:order-1 lg:pl-12">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  {bookingGuidePageData.journey.steps[3].eyebrow}
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  {bookingGuidePageData.journey.steps[3].title}
                  <br />
                  <span className="italic">
                    {bookingGuidePageData.journey.steps[3].highlightedTitle}
                  </span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  {bookingGuidePageData.journey.steps[3].description}
                </p>
                <div className="mt-9 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                  <Check
                    size={17}
                    strokeWidth={1.4}
                    className="text-[var(--primary)]"
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/55">
                    Your stay is within reach
                  </span>
                </div>
              </div>

              <div className="group relative order-1 h-[340px] overflow-hidden lg:order-2 lg:h-[540px] rounded-[24px]">
                <img
                  src={bookingGuidePageData.journey.steps[3].image}
                  alt={bookingGuidePageData.journey.steps[3].imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  04
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  {bookingGuidePageData.journey.steps[3].imageLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIALS */}
      <section className="pb-10 lg:p-15">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
          <div className="relative min-h-[410px] lg:min-h-[480px] xl:min-h-[510px] overflow-hidden rounded-[24px]">
            <img
              src={bookingGuidePageData.essentials.image}
              alt={bookingGuidePageData.essentials.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                {bookingGuidePageData.essentials.imageEyebrow}
              </p>
              <p
                className={`${cormorant.className} mt-3 max-w-[350px] text-4xl leading-[1.05] sm:text-5xl`}
              >
                {bookingGuidePageData.essentials.imageTitle}
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              {bookingGuidePageData.essentials.eyebrow}
            </p>

            <h2 className={`${sectionHeadingClass}`}>
              {bookingGuidePageData.essentials.title}
              <br />
              <span className="italic">
                {bookingGuidePageData.essentials.highlightedTitle}
              </span>
            </h2>

            <p className="mt-6 max-w-[410px] text-sm leading-7 text-[var(--foreground)]/55">
              {bookingGuidePageData.essentials.description}
            </p>

            <div className="mt-10 border-t border-[var(--border)]">
              {bookingGuidePageData.essentials.items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-5 border-b border-[var(--border)] py-5"
                >
                  <span className="mt-0.5 text-[10px] tracking-[0.1em] text-[var(--primary)]">
                    0{index + 1}
                  </span>
                  <p className="text-xs leading-6 text-[var(--foreground)]/65 sm:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-10 lg:pb-15">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden bg-[var(--editorial-background)] px-7 py-20 text-center text-[var(--foreground)] sm:px-12 sm:py-28">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full border border-[var(--foreground)]/[0.08]" />
          <div className="absolute -bottom-48 -right-20 h-[420px] w-[420px] rounded-full border border-[var(--foreground)]/[0.08]" />

          <div className="relative mx-auto max-w-[680px]">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]/55">
              {bookingGuidePageData.finalCta.eyebrow}
            </p>

            <h2
              className={`${cormorant.className} text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-7xl`}
            >
              {bookingGuidePageData.finalCta.title}
              <br />
              <span className="italic">
                {bookingGuidePageData.finalCta.highlightedTitle}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[410px] text-xs leading-7 text-[var(--foreground)]/55 sm:text-sm">
              {bookingGuidePageData.finalCta.description}
            </p>

            <Link
              href="/rooms"
              className="group mt-10 inline-flex items-center gap-4 border-b border-[var(--foreground)]/50 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Explore stays
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={15}
              />
            </Link>

            <div className="mt-14 flex items-center justify-center gap-2 text-[var(--foreground)]/40">
              <CircleHelp size={13} />
              <span className="text-[9px] uppercase tracking-[0.15em]">
                Need a little help?
              </span>
              <Link
                href="/contact-us"
                className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/80 transition-colors hover:text-[var(--primary)]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingGuidePageClient;
