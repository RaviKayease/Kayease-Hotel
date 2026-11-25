import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight, ArrowDown, ShieldCheck, Mail } from "lucide-react";
import {
  privacySections,
  privacyPrinciples,
} from "@/app/data/privacyPolicyData";

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
        <div className="relative mx-auto min-h-[480px] max-w-[1600px] overflow-hidden rounded-3xl bg-[var(--editorial-background)] sm:min-h-[560px] sm:rounded-4xl lg:min-h-[650px]">
          <Image
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=85"
            alt="Quiet architectural space surrounded by natural light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[480px] flex-col justify-between p-6 text-white sm:min-h-[560px] sm:p-10 lg:min-h-[650px] lg:p-16">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={17} strokeWidth={1.4} />
                <span className="text-[9px] font-medium uppercase tracking-[0.24em]">
                  Privacy & protection
                </span>
              </div>
            </div>

            <div className="max-w-[850px] py-10 sm:py-12 lg:py-16">
              <h1
                className={`${cormorant.className} text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.95] lg:font-semibold`}
              >
                Privacy is
                <br />
                <span className="italic">personal.</span>
              </h1>

              <p className="mt-6 max-w-[440px] text-xs leading-7 text-white/75 sm:mt-8 sm:text-sm">
                We believe trust is built through transparency. Discover how we
                handle your information and the choices that remain yours.
              </p>

              <a
                href="#policy"
                className="mt-7 inline-flex items-center gap-4 border-b border-white/50 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-white sm:mt-9"
              >
                Read our privacy policy
                <ArrowDown size={14} />
              </a>
            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-white/30 pt-5 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/70">
                [Legal Business Name]
              </span>

              <span className="text-[9px] uppercase tracking-[0.16em] text-white/70">
                Effective date · [Insert date]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section className="relative left-1/2 flex w-screen -translate-x-1/2 bg-[var(--surface)] px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15">
        <div className="mx-auto grid max-w-[1350px] gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-[8vw]">
          {privacyPrinciples.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="flex items-center justify-between">
                <item.icon
                  size={22}
                  strokeWidth={1.35}
                  className="text-[var(--primary)]"
                />
              </div>

              <h3
                className={`${cormorant.className} mt-6 text-3xl text-center`}
              >
                {item.title}
              </h3>

              <p className="mt-2 max-w-[280px] text-center text-xs leading-6 text-[var(--foreground)]/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section id="policy" className="scroll-mt-16 py-10 lg:py-15">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end lg:gap-7">
            <div>
              <h2 className={sectionHeadingClass}>
                What you should
                <br />
                <span className="italic text-[var(--primary)]">know.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-0 lg:grid-cols-2 lg:gap-x-16">
            {privacySections.map((section, index) => (
              <article
                id={section.id}
                key={section.id}
                className={`scroll-mt-24 border-t border-[var(--border)] py-8 sm:py-12 ${
                  index === privacySections.length - 1 &&
                  privacySections.length % 2 !== 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                      Section {section.number}
                    </span>

                    <h3
                      className={`${cormorant.className} mt-3 text-3xl leading-[1.05] sm:text-4xl lg:text-[42px]`}
                    >
                      {section.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-[570px] text-xs leading-7 text-[var(--foreground)]/60">
                  {section.description}
                </p>

                <div className="mt-7 space-y-0">
                  {section.items.map(([title, text]) => (
                    <div
                      key={title}
                      className="grid grid-cols-1 gap-2 border-t border-[var(--border)]/70 py-4 md:grid-cols-[145px_minmax(0,1fr)] md:gap-5"
                    >
                      <h4 className="text-[11px] font-semibold">{title}</h4>

                      <p className="text-[11px] leading-6 text-[var(--foreground)]/55">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                {section.note && (
                  <p className="mt-5 border-l-2 border-[var(--primary)] pl-4 text-[11px] leading-6 text-[var(--foreground)]/55">
                    {section.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative left-1/2 flex w-screen -translate-x-1/2 bg-[var(--editorial-background)] px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-10 lg:py-15">
        <div className="md:mx-auto grid max-w-[1350px] gap-10 sm:gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h2
              className={`${cormorant.className} text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]`}
            >
              Questions about
              <br />
              <span className="italic text-[var(--primary)]">
                your privacy?
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[390px] text-sm leading-7 text-[var(--foreground)]/65">
              If you have a question, concern, or request about your personal
              information, our team is available to help.
            </p>

            <Link
              href="/contact-us"
              className="group mt-8 inline-flex items-center gap-4 border-b border-[var(--foreground)]/30 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] sm:gap-5"
            >
              <Mail size={15} />
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED POLICIES */}
      <section className="py-10 lg:py-15">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-8 sm:mb-10">
            <h2 className={sectionHeadingClass}>Other policies</h2>
          </div>

          <div className="grid grid-cols-1 gap-0 border-y border-[var(--border)] md:grid-cols-2">
            <Link
              href="/terms-and-conditions"
              className="group flex items-center justify-between gap-5 border-b border-[var(--border)] py-7 transition-colors hover:text-[var(--primary)] md:border-b-0 md:border-r md:py-8 md:pr-10"
            >
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  01 / Platform
                </span>

                <h3
                  className={`${cormorant.className} mt-2 text-2xl sm:text-3xl`}
                >
                  Terms & Conditions
                </h3>

                <p className="mt-2 text-[11px] leading-6 text-[var(--foreground)]/50">
                  The terms governing your use of our platform.
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/booking-guide"
              className="group flex items-center justify-between gap-5 py-7 transition-colors hover:text-[var(--primary)] md:py-8 md:pl-10"
            >
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  02 / Reservations
                </span>

                <h3
                  className={`${cormorant.className} mt-2 text-2xl sm:text-3xl`}
                >
                  Booking Guide
                </h3>

                <p className="mt-2 text-[11px] leading-6 text-[var(--foreground)]/50">
                  Reservation, cancellation and refund guidelines.
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
