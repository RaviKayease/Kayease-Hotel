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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const essentials = [
  "Check the property's location and amenities.",
  "Confirm your dates and the number of guests.",
  "Read the cancellation and payment conditions.",
  "Review the final price before confirming.",
];

const page = () => {
  return (
    <main>
      {/* HERO */}
      <section className="px-5 pt-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]/45">
              Your journey begins here
            </p>
          </div>

          <div className="relative min-h-[580px] overflow-hidden sm:min-h-[680px] rounded-4xl">
            <img
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=90"
              alt="Beautiful secluded holiday cabin surrounded by nature"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/10" />

            <div className="relative flex min-h-[580px] flex-col justify-between p-7 text-white sm:min-h-[680px] sm:p-12 lg:p-16">
              <div className="flex items-center justify-between">
                <span className="border border-white/40 px-4 py-2 text-[9px] uppercase tracking-[0.22em]">
                  A simpler way to stay
                </span>
                <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/65 sm:block">
                  Discover · Plan · Experience
                </span>
              </div>

              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/75">
                  Everything you need to know
                </p>

                <h1
                  className={`${cormorant.className} font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[6vw] leading-none`}
                >
                  The art of
                  <br />
                  <span className="italic">booking well.</span>
                </h1>

                <div className="mt-9 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
                  <p className="max-w-[390px] text-xs leading-6 text-white/75 sm:text-sm">
                    A few thoughtful steps between finding your perfect stay and
                    being right where you want to be.
                  </p>

                  <a
                    href="#how-it-works"
                    className="inline-flex w-fit items-center gap-3 border-b border-white/60 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em]"
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
      <section
        id="how-it-works"
        className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
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
                Four steps.
                <br />
                <span className="italic text-[var(--primary)]">
                  One beautiful escape.
                </span>
              </h2>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-20 sm:space-y-28">
            {/* Step 01 */}
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="group relative h-[340px] overflow-hidden sm:h-[480px] lg:h-[540px] rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85"
                  alt="Beautiful destination surrounded by mountains and nature"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  01
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  The discovery
                </span>
              </div>

              <div className="lg:pl-4">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  First things first
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  Find somewhere
                  <br />
                  <span className="italic">to fall for.</span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  Begin with a little inspiration. Browse through our collection
                  of stays, explore the destinations and discover a place that
                  feels just right for your next getaway.
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
                  Make it your own
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  Choose your
                  <br />
                  <span className="italic">perfect moment.</span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  Pick the dates that work for you, enter the number of guests
                  and explore the availability. Your getaway begins to take
                  shape, one detail at a time.
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

              <div className="group relative order-1 h-[340px] overflow-hidden sm:h-[480px] lg:order-2 lg:h-[540px] rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=85"
                  alt="Peaceful luxury accommodation overlooking a scenic landscape"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  02
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  The planning
                </span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div className="group relative h-[340px] overflow-hidden sm:h-[480px] lg:h-[540px] rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                  alt="Elegant interior of a carefully designed accommodation"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  03
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  The details
                </span>
              </div>

              <div className="lg:pl-4">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  A moment to review
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  Every detail,
                  <br />
                  <span className="italic">just right.</span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  Take a final look at your selected stay, travel dates, guest
                  information and booking conditions. Make sure everything is
                  exactly as you want it.
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
                  And just like that
                </p>
                <h3 className={`${sectionHeadingClass}`}>
                  It's time to
                  <br />
                  <span className="italic">look forward.</span>
                </h3>
                <p className="mt-6 max-w-[400px] text-sm leading-7 text-[var(--foreground)]/55">
                  Complete your reservation by following the checkout
                  instructions. Once confirmed, keep your booking details close
                  and start looking forward to the experience ahead.
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

              <div className="group relative order-1 h-[340px] overflow-hidden sm:h-[480px] lg:order-2 lg:h-[540px] rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85"
                  alt="Beautiful scenic destination ready to be explored"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span
                  className={`${cormorant.className} absolute bottom-5 left-7 text-8xl italic leading-none text-white/90 sm:bottom-8 sm:left-10 sm:text-[120px]`}
                >
                  04
                </span>
                <span className="absolute right-7 top-7 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  The beginning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIALS */}
      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
          <div className="relative min-h-[440px] overflow-hidden sm:min-h-[570px] rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
              alt="Beautifully designed and welcoming holiday accommodation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                A little attention goes a long way
              </p>
              <p
                className={`${cormorant.className} mt-3 max-w-[350px] text-4xl leading-[1.05] sm:text-5xl`}
              >
                The details make the difference.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Before you confirm
            </p>

            <h2 className={`${sectionHeadingClass}`}>
              A few things
              <br />
              to keep in <span className="italic">mind.</span>
            </h2>

            <p className="mt-6 max-w-[410px] text-sm leading-7 text-[var(--foreground)]/55">
              Before making your reservation, take a moment to go through these
              essentials. It helps ensure everything is just right.
            </p>

            <div className="mt-10 border-t border-[var(--border)]">
              {essentials.map((item, index) => (
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
      <section className="px-5 pb-24 sm:px-10 sm:pb-32 lg:px-16">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden bg-[var(--editorial-background)] px-7 py-20 text-center text-[var(--foreground)] sm:px-12 sm:py-28">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full border border-[var(--foreground)]/[0.08]" />
          <div className="absolute -bottom-48 -right-20 h-[420px] w-[420px] rounded-full border border-[var(--foreground)]/[0.08]" />

          <div className="relative mx-auto max-w-[680px]">
            <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]/55">
              Your next chapter awaits
            </p>

            <h2
              className={`${cormorant.className} text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-7xl`}
            >
              Now, all that's left
              <br />
              is to <span className="italic">get away.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[410px] text-xs leading-7 text-[var(--foreground)]/55 sm:text-sm">
              Find somewhere special, make it yours and start looking forward to
              the moments ahead.
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

export default page;
