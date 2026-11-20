import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  ChevronRight,
} from "lucide-react";

import { blogPosts } from "@/app/data/blogPosts";

export const instant = false;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    (item) => item.slug !== post.slug && item.category === post.category,
  );

  const fallbackPosts = [
    ...relatedPosts,
    ...blogPosts.filter(
      (item) => item.slug !== post.slug && item.category !== post.category,
    ),
  ].slice(0, 4);

  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      {/* EDITORIAL INTRO */}
      <section className="px-5 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--primary)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
              {post.category}
            </span>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-10">
              <h1
                className={`${cormorant.className} max-w-[1250px] text-[16vw] font-medium leading-[0.78] tracking-[-0.065em] sm:text-[12vw] lg:text-[145px]`}
              >
                {post.title}
                <span className="text-[var(--primary)]">.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative h-[350px] overflow-hidden sm:h-[550px] lg:h-[760px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 sm:bottom-12 sm:left-12">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                A story by {post.author}
              </p>

              <p
                className={`${cormorant.className} mt-3 text-4xl italic text-white sm:text-6xl`}
              >
                Beyond the ordinary.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between border-t border-[var(--border)] pt-3 sm:gap-5">
            <p className=" text-xs font-medium">{post.author}</p>

            <div className="flex gap-10">
              <span className=" flex items-center gap-2 text-xs">
                <CalendarDays size={13} className="text-[var(--primary)]" />
                {post.date}
              </span>

              <span className=" flex items-center gap-2 text-xs">
                <Clock3 size={13} className="text-[var(--primary)]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY CONTENT */}
      <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1200px]">
          {/* Opening statement */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
                A little introduction
              </p>

              <div className="mt-8 h-px w-12 bg-[var(--border)]" />

              <p className="mt-5 text-xs leading-7 text-[var(--foreground)]/45">
                Take your time. There is always something beautiful waiting to
                be discovered.
              </p>
            </div>

            <div className="lg:col-span-8">
              <p
                className={`${cormorant.className} text-3xl leading-[1.35] tracking-[-0.02em] sm:text-4xl lg:text-[46px]`}
              >
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Article sections */}

          <div className="mt-24 border-t border-[var(--border)] sm:mt-32">
            {post.content.map((section, index) => (
              <section
                key={section.heading}
                id={`section-${index + 1}`}
                className="grid grid-cols-1 gap-7 border-b border-[var(--border)] py-12 sm:py-16 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-2">
                  <span className="text-[11px] font-medium tracking-[0.15em] text-[var(--primary)]">
                    0{index + 1}
                  </span>

                  <span className="ml-4 inline-block h-px w-8 align-middle bg-[var(--border)]" />
                </div>

                <div className="lg:col-span-10">
                  <h2
                    className={`${cormorant.className} mb-8 max-w-[850px] text-4xl font-medium leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-6xl`}
                  >
                    {section.heading}
                  </h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-8 text-[var(--foreground)]/65 sm:text-[15px] sm:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Quote */}

          {post.quote && (
            <div className="mx-auto max-w-[950px] py-24 text-center sm:py-32">
              <span className="text-6xl leading-none text-[var(--primary)]">
                “
              </span>

              <blockquote
                className={`${cormorant.className} mt-5 text-4xl italic leading-[1.2] tracking-[-0.025em] sm:text-6xl`}
              >
                {post.quote}
              </blockquote>

              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-[var(--primary)]" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--foreground)]/40">
                  The Travel Journal
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED STORIES */}
      {/* RELATED STORIES */}
      {fallbackPosts.length > 0 && (
        <section className="relative overflow-hidden bg-[var(--foreground)]/[0.025] px-5 py-24 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-[1450px]">
            {/* Header */}
            <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
              <div>
                <p className="mb-6 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.28em] text-[var(--primary)]">
                  <span className="h-px w-8 bg-[var(--primary)]" />
                  More from the journal
                </p>

                <h2
                  className={`${cormorant.className} text-6xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-7xl lg:text-[105px]`}
                >
                  Keep wandering
                  <span className="italic text-[var(--primary)]">.</span>
                </h2>
              </div>

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between lg:w-[340px] lg:flex-col lg:items-start">
                <Link
                  href="/blogs-page"
                  className="group inline-flex items-center gap-4 border-b border-[var(--foreground)]/30 pb-2 text-[9px] font-medium uppercase tracking-[0.2em] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Explore all stories
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            {/* Featured Story */}
            {fallbackPosts[0] && (
              <Link
                href={`/blogs/${fallbackPosts[0].slug}`}
                className="group mb-16 grid grid-cols-1 gap-8 border-y border-[var(--border)] py-8 md:grid-cols-[1.35fr_0.85fr] md:items-center md:gap-12 lg:mb-24 lg:gap-20 lg:py-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                  <img
                    src={fallbackPosts[0].image}
                    alt={fallbackPosts[0].title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />

                  <span className="absolute bottom-5 left-5 bg-[var(--background)] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]">
                    Editor's selection
                  </span>
                </div>

                <div className="flex flex-col items-start">
                  <div className="mb-6 flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.18em]">
                    <span className="text-[var(--primary)]">
                      {fallbackPosts[0].category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[var(--foreground)]/30" />
                    <span className="text-[var(--foreground)]/45">
                      {fallbackPosts[0].date}
                    </span>
                  </div>

                  <h3
                    className={`${cormorant.className} max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-5xl lg:text-6xl xl:text-7xl`}
                  >
                    {fallbackPosts[0].title}
                  </h3>

                  <p className="mt-5 max-w-md text-xs leading-7 text-[var(--foreground)]/55 sm:text-sm">
                    {fallbackPosts[0].excerpt}
                  </p>

                  <div className="mt-8 flex w-full items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/50">
                      <Clock3 size={13} strokeWidth={1.5} />
                      {fallbackPosts[0].readTime}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <ArrowUpRight size={18} strokeWidth={1.4} />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Other Stories */}
            {fallbackPosts.length > 1 && (
              <div>
                <div className="mb-9 flex items-center justify-between">
                  <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--foreground)]/50">
                    Continue exploring
                  </p>

                  <span className="text-[9px] uppercase tracking-[0.16em] text-[var(--foreground)]/40">
                    {String(fallbackPosts.length - 1).padStart(2, "0")} stories
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                  {fallbackPosts.slice(1).map((relatedPost, index) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blogs/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="relative mb-6 aspect-[5/4] overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />

                        <span
                          className={`${cormorant.className} absolute bottom-4 left-5 text-3xl italic text-white`}
                        >
                          {String(index + 2).padStart(2, "0")}
                        </span>

                        <span className="group absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)] text-[var(--foreground)] group-hover:bg-[var(--primary)] group-hover:text-white">
                          <ArrowUpRight
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            size={17}
                          />
                        </span>
                      </div>

                      <div className="mb-3 flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em]">
                        <span className="text-[var(--primary)]">
                          {relatedPost.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-[var(--foreground)]/30" />
                        <span className="text-[var(--foreground)]/45">
                          {relatedPost.date}
                        </span>
                      </div>

                      <h3
                        className={`${cormorant.className} text-3xl font-medium leading-[1.08] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-4xl`}
                      >
                        {relatedPost.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-xs leading-6 text-[var(--foreground)]/55">
                        {relatedPost.excerpt}
                      </p>

                      <div className="mt-5 border-t border-[var(--border)] pt-4">
                        <span className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                          <Clock3 size={12} />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Closing Detail */}
            <div className="mt-20 flex items-center gap-5 border-t border-[var(--border)] pt-7">
              <span className="h-px w-10 bg-[var(--primary)]" />
              <p
                className={`${cormorant.className} text-xl italic text-[var(--foreground)]/55`}
              >
                Every journey begins with a story.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FINAL SECTION */}
      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                Until the next story
              </p>

              <h2
                className={`${cormorant.className} text-[15vw] font-medium leading-[0.85] tracking-[-0.055em] sm:text-[11vw] lg:text-[130px]`}
              >
                The world is
                <span className="block italic text-[var(--primary)]">
                  yours to discover.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-3">
              <p className="max-w-xs text-sm leading-7 text-[var(--foreground)]/55">
                Find a place to pause, explore somewhere new and create memories
                that stay with you.
              </p>

              <Link
                href="/rooms"
                className="group mt-8 inline-flex items-center gap-5 border-b border-[var(--primary)]/50 pb-3 text-[9px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-[var(--primary)]"
              >
                Explore our stays
                <span className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={17}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
