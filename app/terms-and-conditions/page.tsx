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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sections = [
  {
    id: "01",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. These terms apply to every visitor, registered user and individual making a reservation through our platform.",
      "If you do not agree with any part of these terms, please refrain from using our website or booking services.",
    ],
  },
  {
    id: "02",
    title: "About Our Services",
    paragraphs: [
      "Our platform allows guests to discover accommodation, explore destinations and make reservations. We bring together property information and booking services to make planning your next stay easier.",
      "Unless explicitly stated otherwise, we operate as a booking platform connecting guests with independent accommodation providers. The property provider remains responsible for the actual accommodation and the services delivered during your stay.",
    ],
  },
  {
    id: "03",
    title: "User Accounts",
    paragraphs: [
      "Certain features may require you to create an account. You agree to provide accurate and complete information when registering and to keep your account details up to date.",
      "You are responsible for maintaining the confidentiality of your login credentials and all activities carried out through your account. Please contact us immediately if you believe your account has been accessed without permission.",
    ],
  },
  {
    id: "04",
    title: "Reservations & Confirmation",
    paragraphs: [
      "When making a reservation, you must provide correct guest information, travel dates, occupancy details and any other information requested during the booking process.",
      "A reservation is confirmed only after you receive an official booking confirmation from our platform or an authorised provider. A booking request or payment attempt does not automatically guarantee availability.",
      "Please carefully review your reservation details before completing your booking. Special requests are subject to availability and property approval.",
    ],
  },
  {
    id: "05",
    title: "Pricing & Payments",
    paragraphs: [
      "All prices are displayed in the currency indicated on the website. Rates may vary based on travel dates, property availability, occupancy, seasonal demand and other applicable factors.",
      "The final payable amount, including any disclosed taxes or additional charges, will be presented during checkout. By completing a booking, you authorise the applicable payment provider to process the amount due.",
      "Payment processing may be subject to the separate terms and conditions of the payment service provider.",
    ],
  },
  {
    id: "06",
    title: "Cancellations & Refunds",
    paragraphs: [
      "Cancellation and refund conditions vary depending on the property, reservation type and selected rate. The policy presented during the booking process forms part of your reservation agreement.",
      "Some reservations may be non-refundable or subject to cancellation charges. Where a refund is approved, the time required for processing may depend on your payment provider.",
      "Please read our Booking & Cancellation Policy before confirming your reservation.",
    ],
  },
  {
    id: "07",
    title: "Guest Conduct",
    paragraphs: [
      "Guests must respect property rules, occupancy limits, check-in and check-out instructions and all applicable safety requirements.",
      "You must not engage in unlawful activity, cause damage, disturb other guests or misuse any property facilities. Any charges resulting from damage or violations may be your responsibility under the applicable booking terms.",
    ],
  },
  {
    id: "08",
    title: "Property Information",
    paragraphs: [
      "We make reasonable efforts to display accurate property descriptions, photographs, amenities, availability and pricing. Much of this information is supplied by the respective accommodation providers.",
      "Actual property conditions and services may occasionally differ due to maintenance, seasonal changes or circumstances beyond our control. Please contact us if you need clarification about a particular facility before booking.",
    ],
  },
  {
    id: "09",
    title: "Acceptable Website Use",
    paragraphs: [
      "You agree to use our website lawfully and responsibly. You must not attempt unauthorised access, interfere with website operations, distribute malicious software, submit fraudulent information or misuse another user's account.",
      "We reserve the right to restrict or suspend access where we reasonably believe that these terms have been violated.",
    ],
  },
  {
    id: "10",
    title: "Intellectual Property",
    paragraphs: [
      "All website content, including branding, logos, designs, text, graphics, software and original materials, is owned by or licensed to us unless otherwise stated.",
      "You may use the website for personal and lawful purposes. Copying, modifying, reproducing or commercially exploiting our content without written permission is prohibited.",
    ],
  },
  {
    id: "11",
    title: "Third-Party Services",
    paragraphs: [
      "Our website may include links to external websites, payment gateways or third-party services. These services operate independently and may have their own terms and privacy practices.",
      "We are not responsible for the content, security, availability or practices of third-party websites and services.",
    ],
  },
  {
    id: "12",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, we shall not be liable for indirect or consequential losses arising from the use of our platform or services independently provided by third-party property operators.",
      "Nothing in these terms excludes or limits any liability that cannot legally be excluded under applicable law.",
    ],
  },
  {
    id: "13",
    title: "Privacy & Data Protection",
    paragraphs: [
      "We collect and process personal information as necessary to provide our services, manage reservations, communicate with users and meet legal obligations.",
      "Our Privacy Policy explains what information we collect, how we use it and the choices available to you regarding your personal data.",
    ],
  },
  {
    id: "14",
    title: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms and Conditions periodically to reflect changes in our services, business operations or legal obligations.",
      "The updated version will be published on this page with a revised effective date. Your continued use of the platform after changes take effect will constitute acceptance where permitted by law.",
    ],
  },
  {
    id: "15",
    title: "Governing Law",
    paragraphs: [
      "These terms shall be governed by the laws of [Applicable Jurisdiction], subject to mandatory consumer protection provisions that may apply.",
      "Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts or dispute resolution authorities in the applicable jurisdiction.",
    ],
  },
];

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const page = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden text-[var(--foreground)] transition-colors duration-300">
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-12 sm:px-10 sm:pb-14 sm:pt-16 lg:px-16">
          {/* Hero content */}
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left content */}
            <div className="relative z-10">
              <h1
                className={`${cormorant.className} font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[6vw] leading-none`}
              >
                The
                <br />
                <span className="italic text-[var(--primary)]">
                  fine print.
                </span>
              </h1>

              <p className="mt-9 max-w-[440px] text-sm leading-8 text-[var(--foreground)]/65">
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

                {/* Document number */}
                <div className="mt-10">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                    Document no.
                  </span>
                  <p className={`${cormorant.className} mt-1 text-5xl`}>
                    001<span className="text-[var(--primary)]">.</span>
                  </p>
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
                    <p className="mt-2 text-xs font-medium">[Insert date]</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[8px] uppercase tracking-[0.17em] text-[var(--foreground)]/45">
                      Version
                    </p>
                    <p className="mt-2 text-xs font-medium">01 / 2026</p>
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
        className="relative left-1/2 flex w-screen -translate-x-1/2 border-t border-[var(--border)] bg-[var(--editorial-background)] px-5 py-14 transition-colors duration-300 sm:px-10 sm:py-20 lg:px-16"
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
              15 sections <span className="mx-2">/</span> Please read carefully
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
                {sections.map((section) => (
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
              {sections.map((section) => (
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

                    <p className="mt-2 text-sm">[Legal Business Name]</p>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                      Email address
                    </span>

                    <p className="mt-2 text-sm">[Business Email Address]</p>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--foreground)]/45">
                      Registered address
                    </span>

                    <p className="mt-2 text-sm">
                      [Registered Business Address]
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
      <section className="bg-[var(--background)] px-5 py-16 transition-colors duration-300 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex flex-col justify-between gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Explore further
              </span>

              <h2
                className={`${sectionHeadingClass}`}
              >
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
