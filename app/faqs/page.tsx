"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  Search,
  Plus,
  Minus,
  ArrowUpRight,
  MessageCircle,
  CalendarDays,
  CreditCard,
  BedDouble,
  Sparkles,
  X,
} from "lucide-react";
import { categories, faqData } from "../data/faqs";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} font-medium leading-[0.95] tracking-tight text-[var(--foreground)]`;

const categoryIcons: Record<string, React.ElementType> = {
  "All Questions": Sparkles,
  Reservations: CalendarDays,
  "Your Stay": BedDouble,
  Payments: CreditCard,
  "Changes & Support": MessageCircle,
};

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" || faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setOpenQuestion(null);
  };

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="pt-10 lg:pt-15">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[var(--primary)]/[0.045] blur-3xl" />

        <div className="relative mx-auto max-w-[1350px]">
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <h1
              className={`${cormorant.className} font-bold lg:font-semibold text-[13vw] xl:text-[6vw] leading-none`}
            >
              A few things,
              <span className="block italic text-[var(--primary)]">
                made clear.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= FAQ CONTENT ================= */}
      <section className="py-10 lg:py-15">
        <div className="mx-auto max-w-[1250px]">
          {/* Section Header */}
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                THE HELP DESK
              </p>

              <h2
                className={`${sectionHeadingClass} text-4xl sm:text-5xl lg:text-6xl`}
              >
                How can we help?
              </h2>

              <p className="mt-3 max-w-md text-xs leading-6 text-[var(--foreground)]/55 sm:text-sm">
                Browse through our frequently asked questions or search for
                something specific.
              </p>
            </div>

            <p className="text-xs text-[var(--foreground)]/45">
              {filteredFAQs.length.toString().padStart(2, "0")} QUESTIONS
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-7 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-colors duration-300 focus-within:border-[var(--primary)]/60">
            <Search size={19} className="shrink-0 text-[var(--primary)]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search your questions..."
              aria-label="Search frequently asked questions"
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--foreground)]/35"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                aria-label="Clear search"
                className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--foreground)]/50 transition hover:bg-[var(--background)] hover:text-[var(--primary)]"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="mb-3 lg:mb-12 flex w-full items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-xs transition-all duration-300 sm:px-5 ${
                    isActive
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/15"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]/60 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                  }`}
                >
                  <Icon size={14} strokeWidth={1.7} />
                  {category}
                </button>
              );
            })}
          </div>

          {/* FAQ Layout */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Side Information */}
            <aside className="lg:sticky lg:top-28 lg:col-span-4">
              <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
                <div className="pointer-events-none absolute -right-8 -top-8 text-[150px] leading-none text-[var(--primary)]/[0.055]">
                  ✳
                </div>

                <div className="relative">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/10 text-[var(--primary)]">
                    <MessageCircle size={21} strokeWidth={1.5} />
                  </div>

                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                    STILL CURIOUS?
                  </p>

                  <h3
                    className={`${cormorant.className} text-4xl font-medium leading-[1.05] sm:text-5xl`}
                  >
                    We're happy
                    <span className="block italic text-[var(--primary)]">
                      to help.
                    </span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--foreground)]/55">
                    Sometimes you just need a little more information. Our team
                    is here to help make planning your next stay simple and
                    enjoyable.
                  </p>

                  <div className="my-8 h-px w-full bg-[var(--border)]" />

                  <Link
                    href="/contact-us"
                    className="group flex w-full items-center justify-between rounded-full bg-[var(--primary)] px-5 py-4 text-xs font-medium text-white transition-all duration-300 hover:brightness-90"
                  >
                    Get in touch
                    <span className="flex h-8 w-8 items-center justify-center rounded-full">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Additional Links */}
              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]/45">
                  QUICK INFORMATION
                </p>

                <div className="space-y-4">
                  <Link
                    href="/booking-guide"
                    className="group flex items-center justify-between text-sm text-[var(--foreground)]/70 transition-colors hover:text-[var(--primary)]"
                  >
                    Booking guide
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <div className="h-px bg-[var(--border)]" />

                  <Link
                    href="/privacy-policy"
                    className="group flex items-center justify-between text-sm text-[var(--foreground)]/70 transition-colors hover:text-[var(--primary)]"
                  >
                    Privacy policy
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <div className="h-px bg-[var(--border)]" />

                  <Link
                    href="/terms-and-conditions"
                    className="group flex items-center justify-between text-sm text-[var(--foreground)]/70 transition-colors hover:text-[var(--primary)]"
                  >
                    Terms & Conditions
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Side Accordion */}
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                  {activeCategory === "All Questions"
                    ? "ALL FREQUENTLY ASKED QUESTIONS"
                    : activeCategory.toUpperCase()}
                </p>

                <span className="text-[10px] text-[var(--foreground)]/40">
                  {filteredFAQs.length} RESULTS
                </span>
              </div>

              <div className="border-t border-[var(--border)]">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => {
                    const isOpen = openQuestion === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className="border-b border-[var(--border)]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : faq.id)
                          }
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                          className="group flex w-full items-start gap-4 py-6 text-left sm:gap-6 sm:py-7"
                        >
                          {/* Number */}
                          <span className="pt-1 text-[10px] font-medium tracking-widest text-[var(--primary)]/70">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>

                          {/* Question */}
                          <span
                            className={`${cormorant.className} flex-1 text-[22px] font-medium leading-snug transition-colors duration-300 sm:text-[27px] ${
                              isOpen
                                ? "text-[var(--primary)]"
                                : "text-[var(--foreground)] group-hover:text-[var(--primary)]"
                            }`}
                          >
                            {faq.question}
                          </span>

                          {/* Toggle Icon */}
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "rotate-180 border-[var(--primary)] bg-[var(--primary)] text-white"
                                : "border-[var(--border)] text-[var(--foreground)]/50 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]"
                            }`}
                          >
                            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                          </span>
                        </button>

                        {/* Answer */}
                        <div
                          id={`faq-answer-${faq.id}`}
                          hidden={!isOpen}
                          className="pb-7 pl-8 sm:pl-12"
                        >
                          <div className="max-w-[610px]">
                            <p className="text-[13px] leading-[1.9] text-[var(--foreground)]/60 sm:text-sm sm:leading-8">
                              {faq.answer}
                            </p>

                            <span className="mt-5 inline-block rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/[0.06] px-3 py-1.5 text-[9px] font-medium tracking-wider text-[var(--primary)]">
                              {faq.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  /* Empty Search Result */
                  <div className="flex flex-col items-center justify-center border-b border-[var(--border)] px-5 py-20 text-center">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Search size={23} />
                    </div>

                    <h3
                      className={`${cormorant.className} text-3xl font-medium`}
                    >
                      Nothing found just yet.
                    </h3>

                    <p className="mt-3 max-w-xs text-xs leading-6 text-[var(--foreground)]/50">
                      We couldn't find any questions matching your search. Try
                      another keyword or explore a different category.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("All Questions");
                        setOpenQuestion(1);
                      }}
                      className="mt-6 text-xs font-medium text-[var(--primary)] underline underline-offset-4"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Note */}
              {filteredFAQs.length > 0 && (
                <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[var(--surface)] px-5 py-4">
                  <Sparkles
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />

                  <p className="text-xs leading-6 text-[var(--foreground)]/55">
                    Still have a question? Our team would be delighted to help
                    you find the information you need.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="pb-10">
        <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-3xl bg-[var(--primary)] px-7 py-12 text-white sm:rounded-[35px] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-10 -top-24 text-[270px] font-light leading-none text-white/[0.07]">
            ✳
          </div>

          <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full border border-white/15" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.3em] text-white/65">
                WE'RE JUST A MESSAGE AWAY
              </p>

              <h2
                className={`${cormorant.className} text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-[76px]`}
              >
                Your next question
                <span className="block italic text-white/75">
                  starts a conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/75">
                Whether you're planning a getaway or need help with an existing
                reservation, we're always happy to hear from you.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex w-fit shrink-0 items-center gap-8 rounded-full bg-white py-2 pl-6 pr-2 text-xs font-semibold text-[var(--primary)] hover:shadow-xl"
            >
              Contact our team
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={20}
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQsPage;
