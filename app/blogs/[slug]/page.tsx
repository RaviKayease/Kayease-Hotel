import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { blogPosts } from "@/app/data/blogPosts";
import { detailedBlogPageData } from "@/app/data/blogDetailedPage";

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

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

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
    <main>
      {/* EDITORIAL INTRO */}
      <section className="pt-10 lg:pt-15">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-10">
              <h1
                className={`${cormorant.className} font-bold lg:font-semibold text-[10vw] xl:text-[6vw] leading-none`}
              >
                {post.title}
                <span className="text-[var(--primary)]">.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="mt-5">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative h-[25vh] sm:h-[35vh] md:h-[45vh] lg:h-[60vh] overflow-hidden rounded-4xl">
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
                {detailedBlogPageData.heroTagline}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between border-t border-[var(--border)] pt-3 sm:gap-5">
            <p className=" text-xs font-medium">{post.author}</p>

            <div className="flex gap-3 lg:gap-10">
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
      <section>
        <div className="mx-auto max-w-[1200px]">
          {/* Article sections */}
          {post.content.map((section, index) => (
            <section
              key={section.heading}
              id={`section-${index + 1}`}
              className="grid grid-cols-1 gap-7 border-b border-[var(--border)] py-10 sm:py-16 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-2">
                <span className="text-[11px] font-medium tracking-[0.15em] text-[var(--primary)]">
                  0{index + 1}
                </span>

                <span className="ml-4 inline-block h-px w-8 align-middle bg-[var(--border)]" />
              </div>

              <div className="lg:col-span-10">
                <h2 className={`${sectionHeadingClass} mb-2`}>
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
                  {detailedBlogPageData.journalLabel}
                </span>
                <span className="h-px w-8 bg-[var(--primary)]" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED STORIES */}
      {fallbackPosts.length > 0 && (
        <section className="relative left-1/2 flex w-screen -translate-x-1/2 overflow-hidden bg-[var(--foreground)]/[0.025] px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15 ">
          <div className="mx-auto max-w-[1450px]">
            {/* Header */}
            <div className="mb-10 lg:mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
              <div>
                <h2
                  className={`${cormorant.className} text-5xl font-medium leading-[0.88] tracking-[-0.045em] sm:text-7xl lg:text-[105px]`}
                >
                  {detailedBlogPageData.relatedStories.eyebrow}
                  <span className="italic text-[var(--primary)]">.</span>
                </h2>
              </div>
            </div>

            {/* Featured Story */}
            {fallbackPosts[0] && (
              <Link
                href={`/blogs/${fallbackPosts[0].slug}`}
                className="group mb-16 grid grid-cols-1 gap-8 border-y border-[var(--border)] py-8 xl:grid-cols-[1.35fr_0.85fr] xl:items-center xl:gap-12 lg:mb-24 lg:gap-20 lg:py-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] rounded-[24px]">
                  <img
                    src={fallbackPosts[0].image}
                    alt={fallbackPosts[0].title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />

                  <span className="absolute bottom-5 left-5 bg-[var(--background)] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {detailedBlogPageData.relatedStories.featuredLabel}
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

                    <span className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                      <ArrowUpRight
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={18}
                        strokeWidth={1.4}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Other Stories */}
            {fallbackPosts.length > 1 && (
              <div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
                  {fallbackPosts.slice(1).map((relatedPost, index) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blogs/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="relative mb-6 aspect-[5/4] overflow-hidden rounded-[24px]">
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
          </div>
        </section>
      )}

      {/* FINAL SECTION */}
      <section className="py-10 px-3 sm:px-10 sm:py-15 md:py-20 lg:py-24 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="mb-8 text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
                {detailedBlogPageData.closingSection.eyebrow}
              </p>

              <h2
                className={`${cormorant.className} text-[15vw] font-medium leading-[0.85] tracking-[-0.055em] sm:text-[11vw] lg:text-[90px]`}
              >
                {detailedBlogPageData.closingSection.title}
                <span className="block italic text-[var(--primary)]">
                  {detailedBlogPageData.closingSection.highlightedTitle}
                </span>
              </h2>
            </div>

            <div className="lg:col-span-3">
              <p className="max-w-xs text-sm leading-7 text-[var(--foreground)]/55">
                {detailedBlogPageData.closingSection.description}
              </p>

              <Link
                href="/rooms"
                className="group mt-8 inline-flex items-center gap-5 border-b border-[var(--primary)]/50 pb-3 text-[9px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-[var(--primary)]"
              >
                {detailedBlogPageData.closingSection.ctaText}
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
