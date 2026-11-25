import React from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import {
  termsSections,
  termsDocumentInfo,
} from "@/app/data/termsAndConditions";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const page = () => {
  return (
    <main>
      {/* HERO */}
      <section className="py-10 lg:py-15">
        <div className="mx-auto max-w-[1440px]">
          {/* Hero content */}
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left content */}
            <div className="relative z-10">
              <h1
                className={`${cormorant.className} font-bold lg:font-semibold text-[13vw] xl:text-[6vw] leading-none`}
              >
                The
                <br />
                <span className="italic text-[var(--primary)]">
                  fine print.
                </span>
              </h1>

              <p className="mt-4 lg:mt-9 max-w-[440px] text-sm leading-8 text-[var(--foreground)]/65">
                A little clarity goes a long way. These terms explain how our
                platform works, what you can expect when booking, and the
                responsibilities that help make every stay a better experience.
              </p>

              <a
                href="#terms-content"
                className="group mt-9 inline-flex items-center gap-4 border-b border-[var(--primary)] pb-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--primary)] transition-colors hover:opacity-65"
              >
                Explore the terms
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Right document card */}
            <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
              <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-7 text-[var(--foreground)] shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-10">
                {/* Card header */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    Legal document
                  </span>
                  <FileText size={17} className="text-[var(--primary)]" />
                </div>

                {/* Document title */}
                <div className="relative z-10 mt-9">
                  <h2 className={`${sectionHeadingClass}`}>
                    Terms &
                    <br />
                    Conditions
                  </h2>

                  <p className="mt-5 max-w-[240px] text-[11px] leading-6 text-[var(--foreground)]/55">
                    The guidelines and conditions governing the use of our
                    platform and booking services.
                  </p>
                </div>

                {/* Document footer */}
                <div className="mt-14 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-6">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.17em] text-[var(--foreground)]/45">
                      Effective date
                    </p>
                    <p className="mt-2 text-xs font-medium">
                      {termsDocumentInfo.effectiveDate}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[8px] uppercase tracking-[0.17em] text-[var(--foreground)]/45">
                      Version
                    </p>
                    <p className="mt-2 text-xs font-medium">
                      {termsDocumentInfo.version}
                    </p>
                  </div>
                </div>

                {/* Subtle watermark */}
                <span
                  className={`${cormorant.className} pointer-events-none absolute -bottom-12 -right-3 text-[180px] leading-none text-[var(--primary)]/[0.06]`}
                >
                  01
                </span>
              </div>

              {/* Decorative accent */}
              <div className="absolute -right-2 -top-2 -z-10 h-full w-full border border-[var(--primary)]/35" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section
        id="terms-content"
        className="relative left-1/2 flex w-screen -translate-x-1/2 border-t border-[var(--border)] bg-[var(--editorial-background)] px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                The complete document
              </span>

              <h2
                className={`${cormorant.className} mt-3 text-4xl tracking-[-0.025em] sm:text-5xl`}
              >
                Terms & Conditions
              </h2>
            </div>

            <p className="text-xs text-[var(--foreground)]/55">
              {termsSections.length} sections
              <span className="mx-2">/</span>
              Please read carefully
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
            {/* TABLE OF CONTENTS */}
            <aside className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-7 text-[var(--foreground)] transition-colors duration-300 lg:sticky lg:top-8">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  In this document
                </span>

                <FileText size={16} className="text-[var(--primary)]" />
              </div>

              <div className="mt-7 space-y-1">
                {termsSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#section-${section.id}`}
                    className="group flex items-center gap-3 border-b border-[var(--border)] py-3 text-xs text-[var(--foreground)]/65 transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="w-6 text-[9px] tabular-nums text-[var(--primary)]/70">
                      {section.id}
                    </span>

                    <span className="flex-1">{section.title}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-6">
                <div className="flex items-center gap-2 text-[var(--primary)]">
                  <ShieldCheck size={16} />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em]">
                    Need more information?
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-[var(--foreground)]/55">
                  Our team can help clarify any part of these terms.
                </p>

                <Link
                  href="/contact-us"
                  className="group mt-4 inline-flex items-center gap-2 text-xs text-[var(--primary)] transition-opacity hover:opacity-70"
                >
                  Contact our team{" "}
                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={13}
                  />
                </Link>
              </div>
            </aside>

            {/* SECTIONS */}
            <div className="space-y-4">
              {termsSections.map((section) => (
                <article
                  id={`section-${section.id}`}
                  key={section.id}
                  className="scroll-mt-8 border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 sm:p-9"
                >
                  <div className="flex items-start gap-5 sm:gap-7">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[10px] font-medium text-[var(--primary)]">
                      {section.id}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`${cormorant.className} text-[27px] font-medium leading-tight tracking-[-0.02em] sm:text-[32px]`}
                      >
                        {section.title}
                      </h3>

                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-[13px] leading-[1.9] text-[var(--foreground)]/65 sm:text-sm"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* CONTACT DETAILS */}
              <div className="border border-[var(--border)] bg-[var(--surface)] p-7 text-[var(--foreground)] transition-colors duration-300 sm:p-10">
                <div className="flex items-center gap-3 text-[var(--primary)]">
                  <Headphones size={19} />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                    We're here to help
                  </span>
                </div>

                <h3
                  className={`${cormorant.className} mt-5 text-4xl leading-tight`}
                >
                  Questions about our terms?
                </h3>

                <p className="mt-3 max-w-[500px] text-xs leading-7 text-[var(--foreground)]/60">
                  For questions or concerns regarding these terms, reach out to
                  us using the contact information below.
                </p>

                <div className="mt-7 grid gap-5 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                      Business name
                    </span>

                    <p className="mt-2 text-sm">
                      {termsDocumentInfo.businessName}
                    </p>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                      Email address
                    </span>

                    <p className="mt-2 text-sm">{termsDocumentInfo.email}</p>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                      Registered address
                    </span>

                    <p className="mt-2 text-sm">
                      {termsDocumentInfo.registeredAddress}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact-us"
                  className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-[var(--primary)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
                >
                  Get in touch{" "}
                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={14}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="bg-[var(--background)] transition-colors duration-300 py-10 lg:py-15">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex flex-col justify-between gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Explore further
              </span>

              <h2 className={`${sectionHeadingClass}`}>
                Other important details.
              </h2>
            </div>

            <p className="max-w-[300px] text-xs leading-6 text-[var(--foreground)]/60">
              A few more things worth knowing before you plan your stay.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/privacy-policy"
              className="group flex min-h-[150px] items-center justify-between border border-[var(--border)] p-7 transition-colors hover:border-[var(--primary)] hover:bg-[var(--surface)]"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  Your data & privacy
                </span>

                <h3 className={`${cormorant.className} mt-2 text-3xl`}>
                  Privacy Policy
                </h3>

                <p className="mt-2 text-xs text-[var(--foreground)]/60">
                  How we handle your information.
                </p>
              </div>

              <span className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors group-hover:border-[var(--primary)]">
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={17}
                />
              </span>
            </Link>
            <Link
              href="/booking-guide"
              className="group flex min-h-[150px] items-center justify-between border border-[var(--border)] p-7 transition-colors hover:border-[var(--primary)] hover:bg-[var(--surface)]"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  Platform guidelines
                </span>

                <h3 className={`${cormorant.className} mt-2 text-3xl`}>
                  Booking Guide
                </h3>

                <p className="mt-2 text-xs text-[var(--foreground)]/60">
                  Our terms, user responsibilities and service guidelines.
                </p>
              </div>

              <span className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors group-hover:border-[var(--primary)]">
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

export default page;
