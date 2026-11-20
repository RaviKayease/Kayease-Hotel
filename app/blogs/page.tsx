"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowUpRight,
  Search,
  Clock3,
  CalendarDays,
  MoveUpRight,
  BookOpen,
  X,
} from "lucide-react";
import { blogPosts } from "@/app/data/blogPosts";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const categories = [
  "All Stories",
  "Destinations",
  "Travel Guides",
  "Experiences",
  "Hospitality",
  "Inspiration",
];



const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Stories" || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <main>
      {/* EDITORIAL INTRO + FEATURED STORY */}
      <section className="relative px-5 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-12 lg:px-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1350px]">
          {/* Editorial Intro */}
          <div className="mb-6 flex flex-col items-start justify-between gap-8 pb-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                <span className="h-px w-8 bg-[var(--primary)]" />
                The Travel Journal
              </p>

              <h1
                className={`${cormorant.className} text-[17vw] font-medium leading-[0.82] tracking-[-0.055em] sm:text-[12vw] lg:text-[145px]`}
              >
                Stories worth
                <span className="block italic text-[var(--primary)]">
                  travelling for.
                </span>
              </h1>
            </div>
          </div>

          {/* Featured Story */}
          <article className="grid grid-cols-1 overflow-hidden border border-[var(--border)] lg:grid-cols-12">
            {/* Image */}
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="group relative min-h-[300px] overflow-hidden sm:min-h-[430px] lg:col-span-7 lg:min-h-[560px]"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

              <span className="absolute bottom-5 left-5 border border-white/40 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Featured Article
              </span>
            </Link>

            {/* Content */}
            <div className="flex flex-col justify-between bg-[var(--surface)] p-6 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
                  <span>{featuredPost.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />
                  <span>Editor's Pick</span>
                </div>

                <h2
                  className={`${cormorant.className} mt-7 text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-[58px]`}
                >
                  {featuredPost.title}
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--foreground)]/60">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-12">
                <div className="mb-6 flex items-center gap-5 border-t border-[var(--border)] pt-5 text-[10px] text-[var(--foreground)]/50">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={13} />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock3 size={13} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="group flex items-center justify-between border-b border-[var(--primary)]/50 pb-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-[var(--primary)]"
                >
                  Read the full story
                  <span className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={19}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* JOURNAL COLLECTION */}
      <section
        id="journal"
        className="px-5 pb-20 pt-2 sm:px-8 sm:pb-28 lg:px-12"
      >
        <div className="mx-auto max-w-[1350px]">
          {/* Section heading */}

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
                Discover Something New
              </p>

              <h2
                className={`${cormorant.className} text-5xl font-medium leading-none sm:text-6xl lg:text-7xl`}
              >
                The latest <span className="italic">stories.</span>
              </h2>
            </div>
          </div>

          {/* Filters and search */}

          <div className="flex flex-col gap-5 border-y border-[var(--border)] py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative shrink-0 pb-2 text-[11px] font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)]/50 hover:text-[var(--foreground)]"
                  }`}
                >
                  {category}

                  {activeCategory === category && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--primary)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex w-full items-center gap-3 pb-2 lg:w-[230px]">
              <Search size={16} className="shrink-0 text-[var(--primary)]" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stories..."
                className="w-full bg-transparent text-xs text-[var(--foreground)] outline-none placeholder:text-[var(--foreground)]/40"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="text-[var(--foreground)]/50 hover:text-[var(--primary)]"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Article collection */}
          {filteredPosts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group relative min-w-0">
                  {/* Article image */}

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="relative block h-[310px] overflow-hidden bg-[var(--surface)] sm:h-[340px] lg:h-[370px]"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 bg-[var(--background)]/90 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)] backdrop-blur-md">
                      {post.category}
                    </span>
                  </Link>

                  {/* Article details */}
                  <div className="pt-5">
                    <div className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.13em] text-[var(--foreground)]/45">
                      <span>{post.date}</span>

                      <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />

                      <span>{post.readTime}</span>
                    </div>

                    <Link href={`/blogs/${post.slug}`}>
                      <h3
                        className={`${cormorant.className} text-[32px] font-medium leading-[1.05] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-[35px]`}
                      >
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-3 line-clamp-2 text-xs leading-6 text-[var(--foreground)]/55 sm:text-sm">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]/45">
                        Journal No. {String(index + 1).padStart(2, "0")}
                      </span>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"
                      >
                        Read story
                        <MoveUpRight
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          size={14}
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <BookOpen
                size={32}
                strokeWidth={1}
                className="text-[var(--primary)]"
              />

              <h3 className={`${cormorant.className} mt-5 text-3xl`}>
                No stories found
              </h3>

              <p className="mt-2 text-sm text-[var(--foreground)]/50">
                Try another search or explore a different category.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Stories");
                }}
                className="mt-6 border-b border-[var(--primary)] pb-1 text-xs text-[var(--primary)]"
              >
                View all stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING EDITORIAL SECTION */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:pb-28 sm:pt-18 lg:px-12">
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
              Every journey begins somewhere
            </p>

            <h2
              className={`${cormorant.className} max-w-4xl text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-[90px]`}
            >
              Let the next story
              <span className="block italic text-[var(--primary)]">
                be yours.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-8">
            <p className="text-sm leading-7 text-[var(--foreground)]/55">
              Find your next favourite destination, discover extraordinary stays
              and create moments that deserve to be remembered.
            </p>

            <Link
              href="/rooms"
              className="group mt-7 inline-flex items-center gap-5 border-b border-[var(--primary)]/60 pb-3 text-[10px] font-medium uppercase tracking-[0.18em]"
            >
              Explore our stays
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={17}
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
