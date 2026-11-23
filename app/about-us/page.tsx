import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight, Sparkles, Heart, Compass, Leaf } from "lucide-react";
import { BRAND_NAME } from "../components/brand";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const values = [
  {
    number: "01",
    icon: Heart,
    title: "Thoughtful Hospitality",
    description:
      "We believe true luxury is found in the little things. Every detail matters when it comes to creating a stay that feels personal, welcoming, and memorable.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Exceptional Experiences",
    description:
      "From beautiful surroundings to carefully considered spaces, we celebrate experiences that make every journey feel a little more extraordinary.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Meaningful Escapes",
    description:
      "We believe travel should be more than simply visiting a destination. It should give you the opportunity to slow down, reconnect, and discover something new.",
  },
];

const experiences = [
  {
    title: "Beautifully Considered Spaces",
    description:
      "Discover thoughtfully selected spaces where beautiful design meets everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=85",
  },
  {
    title: "Moments Worth Remembering",
    description:
      "From peaceful mornings to unforgettable evenings, make room for moments that matter.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=85",
  },
  {
    title: "Destinations to Discover",
    description:
      "Explore inspiring surroundings and discover places that make you want to stay a little longer.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&q=85",
  },
];

const stayHighlights = [
  {
    title: "Thoughtful Living",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=85",
    alt: "Elegant luxury hotel suite",
  },
  {
    title: "Remarkable Destinations",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1000&q=85",
    alt: "Beautiful architectural hotel exterior",
  },
  {
    title: "Meaningful Experiences",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85",
    alt: "Sophisticated luxury hotel living space",
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-15 lg:pt-20">
        <div className="mx-auto max-w-[1380px]">
          {/*  Heading */}
          <div className="mb-16 text-center">
            <h1
              className={`${cormorant.className} font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[6vw] leading-none`}
            >
              Beautiful Stays
            </h1>
          </div>

          {/* Three Image Gallery */}
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-5 lg:gap-7">
            {stayHighlights.map((item, index) => (
              <div className="group" key={index}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2
                      className={`${cormorant.className} text-2xl leading-none sm:text-[27px]`}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="relative aspect-[1.12/1] overflow-hidden rounded-[24px]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-[var(--border)] pt-7 text-center sm:mt-9 sm:pt-2">
            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-[var(--foreground)]/60 sm:text-sm">
              Discover a more meaningful way to travel, where every place has
              something special to offer.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-[1380px]">
          {/* Section Intro */}
          <div className="mb-12 text-center sm:mb-16">
            <h2 className={`${sectionHeadingClass}`}>
              Where every stay becomes
              <span className="italic text-[var(--primary)]"> a story.</span>
            </h2>
          </div>

          {/* Editorial Composition */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Text */}
            <div className="relative z-10 lg:col-span-3">
              <span className="mb-5 block text-[10px] tracking-[0.2em] text-[var(--primary)]">
                01 — OUR BELIEF
              </span>

              <h3
                className={`${cormorant.className} text-3xl leading-[1.08] sm:text-4xl`}
              >
                Travel is not just about where you go.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--foreground)]/60">
                It is about how a place makes you feel, the moments you
                discover, and the memories you carry with you.
              </p>

              <div className="mt-7 h-px w-14 bg-[var(--primary)]" />
            </div>

            {/* Main Image */}
            <div className="relative lg:col-span-6">
              <div className="group relative h-[390px] overflow-hidden sm:h-[530px] lg:h-[620px] rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=90"
                  alt="Luxury resort surrounded by tropical nature"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 left-4 bg-[var(--surface)] px-5 py-4 sm:-left-7 sm:px-7">
                <p
                  className={`${cormorant.className} text-2xl italic sm:text-3xl`}
                >
                  The beauty of getting away.
                </p>
              </div>
            </div>

            {/* Right Image + Text */}
            <div className="flex flex-col gap-7 lg:col-span-3 lg:pl-3">
              <div className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[250px] rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85"
                  alt="Elegant and thoughtfully designed hotel interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div>
                <span className="mb-3 block text-[10px] tracking-[0.2em] text-[var(--primary)]">
                  02 — OUR APPROACH
                </span>

                <h3
                  className={`${cormorant.className} text-3xl leading-tight sm:text-4xl`}
                >
                  Thoughtful stays. Meaningful moments.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/60">
                  At {BRAND_NAME}, we bring beautiful places and thoughtful
                  hospitality together to make every journey feel special.
                </p>

                <Link
                  href="/rooms#room-collection"
                  className="group mt-6 inline-flex items-center gap-3 border-b border-[var(--foreground)]/30 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Explore Our Stays
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="relative left-1/2 flex w-screen -translate-x-1/2 editorial-showcase overflow-hidden px-5 py-24 text-[var(--foreground)] transition-colors duration-500 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Introduction */}
          <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                WHAT WE BELIEVE IN
              </p>

              <h2 className={`${sectionHeadingClass} max-w-3xl`}>
                Hospitality is found in
                <span className="italic text-[var(--primary)]">
                  {" "}
                  the details.
                </span>
              </h2>
            </div>
          </div>

          {/* Values List */}
          <div className="border-t border-[var(--border)]">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group grid gap-5 border-b border-[var(--border)] py-9 transition-all duration-500 sm:py-11 lg:grid-cols-[100px_1fr_1.1fr] lg:items-center lg:gap-10"
                >
                  {/* Number and Icon */}
                  <div className="flex items-center gap-5">
                    <span
                      className={`${cormorant.className} text-3xl text-[var(--foreground)]/35`}
                    >
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary)] transition-all duration-500 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Value Title */}
                  <h3
                    className={`${cormorant.className} text-3xl font-medium transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-[42px]`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <div className="flex items-center justify-between gap-5 lg:pl-8">
                    <p className="max-w-lg text-sm leading-7 text-[var(--foreground)]/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR EXPERIENCE */}
      <section className="overflow-hidden px-5 py-24 transition-colors duration-500 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          {/* Section Heading */}
          <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                THE EXPERIENCE
              </p>

              <h2 className={`${sectionHeadingClass} max-w-3xl`}>
                More than a destination.
                <span className="block italic text-[var(--primary)]">
                  A feeling to remember.
                </span>
              </h2>
            </div>
          </div>

          {/* Editorial Experience Gallery */}
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            {/* Featured Experience */}
            {experiences[0] && (
              <article className="group min-w-0">
                <div className="relative h-[420px] overflow-hidden sm:h-[560px] lg:h-[680px] rounded-[24px]">
                  <Image
                    src={experiences[0].image}
                    alt={experiences[0].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">
                      THE HIGHLIGHT
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-start sm:justify-between">
                  <h3
                    className={`${cormorant.className} text-3xl font-medium sm:text-4xl lg:text-5xl`}
                  >
                    {experiences[0].title}
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-[var(--foreground)]/55 sm:text-right">
                    {experiences[0].description}
                  </p>
                </div>
              </article>
            )}

            {/* Supporting Experiences */}
            <div className="flex flex-col gap-10 sm:gap-12 lg:justify-between lg:pt-20">
              {experiences.slice(1, 3).map((item, index) => (
                <article key={item.title} className="group min-w-0">
                  <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[310px] rounded-[24px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>

                  <div className="pt-5">
                    <h3
                      className={`${cormorant.className} text-3xl font-medium sm:text-4xl`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-7 text-[var(--foreground)]/55">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="relative mx-5 overflow-hidden rounded-3xl lg:mx-8 lg:rounded-[40px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=2000&q=85"
            alt="Peaceful ocean landscape"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center text-white sm:min-h-[550px] lg:min-h-[620px]">
          <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-[10px]">
            OUR PROMISE TO YOU
          </p>

          <h2
            className={`${cormorant.className} text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-8xl`}
          >
            Not just a destination.
            <span className="block italic text-white/75">
              A feeling to remember.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Wherever life takes you, we believe there is always room for a
            little more beauty, comfort, and discovery.
          </p>

          <div className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-9 bg-white/60" />
            {BRAND_NAME}
            <span className="h-px w-9 bg-white/60" />
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
            <Compass size={25} strokeWidth={1.4} />
          </div>

          <h2 className={sectionHeadingClass}>
            Your next beautiful
            <span className="block italic text-[var(--primary)]">
              escape awaits.
            </span>
          </h2>

          <Link
            href="/rooms#room-collection"
            className="group mx-auto mt-9 inline-flex items-center gap-6 rounded-full bg-[var(--primary)] px-7 py-4 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:brightness-95 sm:text-sm"
          >
            Explore Our Collection
            <span className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
