"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight, Sparkles, Heart, Compass, Leaf } from "lucide-react";
import { BRAND_NAME } from "../components/brand";
import {
  aboutUsHero,
  aboutUsStory,
  aboutUsValues,
  aboutUsExperiences,
  aboutUsBrandStatement,
  aboutUsFinalSection,
} from "@/app/data/aboutUsData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const valueIcons = [Heart, Sparkles, Leaf];

const AboutPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="pt-10 lg:pt-15">
        <div className="mx-auto max-w-[1380px]">
          {/*  Heading */}
          <div className="mb-10 lg:mb-16 text-center">
            <h1
              className={`${cormorant.className} font-bold lg:font-semibold text-[13vw] xl:text-[6vw] leading-none`}
            >
              {aboutUsHero.heading}
            </h1>
          </div>

          {/* Three Image Gallery */}
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:gap-7">
            {aboutUsHero.stayHighlights.map((item) => (
              <div className="group" key={item.title}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="text-center w-full">
                    <h2
                      className={`${cormorant.className} text-2xl leading-none sm:text-[27px]`}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="relative aspect-[1.12/1] overflow-hidden rounded-[24px] h-[25vh] sm:h-[35vh] md:h-[45vh] w-full">
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

          <div className="mt-4 border-t border-[var(--border)] text-center sm:mt-9 sm:pt-2">
            <p className="mx-auto mt-2 lg:mt-3 max-w-xl text-xs leading-6 text-[var(--foreground)]/60 sm:text-sm">
              {aboutUsHero.description}
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="overflow-hidden py-12 lg:py-15 lg:mt-10">
        <div className="mx-auto max-w-[1380px]">
          {/* Section Intro */}
          <div className="mb-12 sm:mb-16">
            <h2 className={`${sectionHeadingClass}`}>
              {aboutUsStory.heading}
              <span className="italic text-[var(--primary)]">
                {" "}
                {aboutUsStory.highlightedHeading}
              </span>
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
                {aboutUsStory.belief.heading}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--foreground)]/60">
                {aboutUsStory.belief.description}
              </p>

              <div className="mt-7 h-px w-14 bg-[var(--primary)]" />
            </div>

            {/* Main Image */}
            <div className="relative lg:col-span-6">
              <div className="group relative h-[390px] overflow-hidden sm:h-[430px] lg:h-[620px] rounded-[24px]">
                <Image
                  src={aboutUsStory.mainImage.src}
                  alt={aboutUsStory.mainImage.alt}
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
                  {aboutUsStory.imageCaption}
                </p>
              </div>
            </div>

            {/* Right Image + Text */}
            <div className="flex flex-col gap-7 lg:col-span-3 lg:pl-3">
              <div className="relative h-[220px] overflow-hidden sm:h-[280px] lg:h-[250px] rounded-[24px]">
                <Image
                  src={aboutUsStory.approach.image.src}
                  alt={aboutUsStory.approach.image.alt}
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
                  {aboutUsStory.approach.heading}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/60">
                  At {BRAND_NAME}, {aboutUsStory.approach.description}
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
      <section className="relative left-1/2 flex w-screen -translate-x-1/2 editorial-showcase overflow-hidden px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15 text-[var(--foreground)] transition-colors duration-500">
        <div className="mx-auto max-w-[1350px]">
          {/* Section Introduction */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                WHAT WE BELIEVE IN
              </p>

              <h2 className={`${sectionHeadingClass} max-w-3xl`}>
                {aboutUsValues.heading}
                <span className="italic text-[var(--primary)]">
                  {" "}
                  {aboutUsValues.highlightedHeading}
                </span>
              </h2>
            </div>
          </div>

          {/* Values List */}
          <div className="border-t border-[var(--border)]">
            {aboutUsValues.values.map((item, index) => {
              const Icon = valueIcons[index] ?? Heart;

              return (
                <article
                  key={item.title}
                  className="group grid gap-5 border-b border-[var(--border)] py-9 transition-all duration-500 sm:py-11 lg:grid-cols-[100px_1fr_1.1fr] lg:items-center lg:gap-10"
                >
                  {/* Number and Icon */}
                  <div className="flex items-center gap-5">
                    <span
                      className={`${cormorant.className} text-3xl text-[var(--foreground)]/35`}
                    >
                      {String(index + 1).padStart(2, "0")}
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
      <section className="overflow-hidden pt-12 lg:py-15 mb-10 transition-colors duration-500">
        <div className="mx-auto max-w-[1500px]">
          {/* Section Heading */}
          <div className="mb-10 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                THE EXPERIENCE
              </p>

              <h2 className={`${sectionHeadingClass} w-full`}>
                {aboutUsExperiences.heading}
                <span className="block italic text-[var(--primary)]">
                  {aboutUsExperiences.highlightedHeading}
                </span>
              </h2>
            </div>
          </div>

          {/* Editorial Experience Gallery */}
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            {/* Featured Experience */}
            {aboutUsExperiences.experiences[0] && (
              <article className="group min-w-0">
                <div className="relative h-[420px] overflow-hidden lg:h-[680px] rounded-[24px]">
                  <Image
                    src={aboutUsExperiences.experiences[0].image}
                    alt={aboutUsExperiences.experiences[0].alt}
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
                    {aboutUsExperiences.experiences[0].title}
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-[var(--foreground)]/55 sm:text-right">
                    {aboutUsExperiences.experiences[0].description}
                  </p>
                </div>
              </article>
            )}

            {/* Supporting Experiences */}
            <div className="flex flex-col gap-10 sm:gap-12 lg:justify-between lg:pt-20">
              {aboutUsExperiences.experiences.slice(1, 3).map((item) => (
                <article key={item.title} className="group min-w-0">
                  <div className="relative h-[300px] overflow-hidden lg:h-[310px] rounded-[24px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
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
      <section className="relative overflow-hidden rounded-3xl lg:mx-8 lg:rounded-[40px]">
        <div className="absolute inset-0">
          <Image
            src={aboutUsBrandStatement.backgroundImage.src}
            alt={aboutUsBrandStatement.backgroundImage.alt}
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
            {aboutUsBrandStatement.heading}
            <span className="block italic text-white/75">
              {aboutUsBrandStatement.highlightedHeading}
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            {aboutUsBrandStatement.description}
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
            {aboutUsFinalSection.heading}
            <span className="block italic text-[var(--primary)]">
              {aboutUsFinalSection.highlightedHeading}
            </span>
          </h2>

          <Link
            href="/rooms#room-collection"
            className="group mx-auto mt-9 inline-flex items-center gap-6 rounded-full bg-[var(--primary)] px-7 py-4 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:brightness-95 sm:text-sm"
          >
            Explore Our Collection
            <span className="flex h-4 h-4 md:h-8 md:w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
