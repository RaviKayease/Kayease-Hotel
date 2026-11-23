import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  LockKeyhole,
  Eye,
  UserRound,
  Mail,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sectionHeadingClass = `${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)]`;

const sections = [
  {
    id: "information",
    number: "01",
    title: "The information we collect",
    description:
      "Every journey begins with a little information. When you interact with our platform, we collect details that help us provide a smooth and reliable experience.",
    items: [
      [
        "Personal details",
        "Your name, email address, phone number, account information, and details you choose to share with us.",
      ],
      [
        "Reservation details",
        "Booking dates, guest information, accommodation preferences, special requests, and reservation history.",
      ],
      [
        "Payment information",
        "Transaction details required to process payments. Sensitive payment information may be handled by our payment partners.",
      ],
      [
        "Technical information",
        "Your IP address, device type, browser, operating system, pages visited, and general website activity.",
      ],
    ],
  },
  {
    id: "purpose",
    number: "02",
    title: "Why we use your information",
    description:
      "Your information helps us bring the different parts of your experience together, from the first enquiry to the details of your reservation.",
    items: [
      [
        "Reservations",
        "To process bookings, coordinate with accommodation providers, and send confirmations or updates.",
      ],
      [
        "Account management",
        "To create your account, maintain your preferences, and provide access to our services.",
      ],
      [
        "Customer support",
        "To answer questions, resolve concerns, and assist with booking-related requests.",
      ],
      [
        "Service improvements",
        "To understand how our website is used, improve functionality, and develop better experiences.",
      ],
      [
        "Safety and compliance",
        "To detect fraud, prevent misuse, protect our platform, and meet applicable legal obligations.",
      ],
    ],
  },
  {
    id: "sharing",
    number: "03",
    title: "When information is shared",
    description:
      "We share information only where it is reasonably necessary to provide our services, fulfil your requests, or meet our legal responsibilities.",
    items: [
      [
        "Accommodation providers",
        "Relevant guest and booking details may be shared with the property responsible for your reservation.",
      ],
      [
        "Service partners",
        "Trusted providers may process information for payment services, website hosting, analytics, communications, and technical support.",
      ],
      [
        "Legal requirements",
        "Information may be disclosed when required by law or when necessary to protect our rights and the safety of others.",
      ],
      [
        "Business transfers",
        "Information may form part of a merger, acquisition, or business transfer, subject to applicable legal requirements.",
      ],
    ],
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & website preferences",
    description:
      "Small technologies help our website remember certain preferences and understand how visitors interact with our pages.",
    items: [
      [
        "Essential cookies",
        "Support important website functions, account sessions, and basic security.",
      ],
      [
        "Preference cookies",
        "Remember settings and choices to make future visits more convenient.",
      ],
      [
        "Analytics cookies",
        "Help us understand website performance and improve our services.",
      ],
    ],
    note: "You can manage cookies through your browser settings. Where required, we will provide choices for non-essential cookies. Disabling certain cookies may affect website functionality.",
  },
  {
    id: "security",
    number: "05",
    title: "Keeping your information safe",
    description:
      "We take the security of personal information seriously and use reasonable technical and organisational measures designed to protect it.",
    items: [
      [
        "Protection measures",
        "We aim to prevent unauthorised access, alteration, disclosure, loss, or misuse of personal information.",
      ],
      [
        "Limited access",
        "Information should only be accessible to authorised individuals and service providers who need it for legitimate purposes.",
      ],
      [
        "Your part",
        "Please keep your login credentials confidential and contact us if you believe your account has been accessed without permission.",
      ],
    ],
    note: "No online service or electronic storage system can be guaranteed to be completely secure.",
  },
  {
    id: "retention",
    number: "06",
    title: "How long we keep information",
    description:
      "We retain personal information only for as long as reasonably necessary for the purposes explained in this policy.",
    items: [
      [
        "Active accounts",
        "Information may be retained while your account remains active.",
      ],
      [
        "Booking records",
        "Certain transaction and reservation records may need to be retained for accounting, dispute resolution, or legal purposes.",
      ],
      [
        "Deletion",
        "When information is no longer needed, we take reasonable steps to delete or anonymise it, subject to applicable retention requirements.",
      ],
    ],
  },
  {
    id: "rights",
    number: "07",
    title: "Your information, your rights",
    description:
      "Depending on your location and applicable data protection laws, you may have choices and rights concerning the personal information we hold.",
    items: [
      ["Access", "Request access to personal information we hold about you."],
      ["Correction", "Ask us to correct inaccurate or incomplete information."],
      [
        "Deletion",
        "Request deletion of personal information where applicable law allows.",
      ],
      [
        "Objection",
        "Object to or request restrictions on certain processing activities where legally available.",
      ],
      [
        "Consent",
        "Withdraw consent where processing is based on your consent.",
      ],
      ["Marketing", "Opt out of promotional communications at any time."],
    ],
    note: "Contact us to exercise an applicable privacy right. We may need to verify your identity before responding.",
  },
  {
    id: "third-party",
    number: "08",
    title: "External websites & services",
    description:
      "Our website may contain links to third-party websites, payment providers, or other external services.",
    items: [
      [
        "Independent policies",
        "Third parties may collect and process information under their own privacy policies.",
      ],
      [
        "External links",
        "We are not responsible for the content, security, or privacy practices of websites we do not operate.",
      ],
      [
        "Your choice",
        "We recommend reviewing the relevant privacy policy before sharing information with an external service.",
      ],
    ],
  },
  {
    id: "international",
    number: "09",
    title: "International information transfers",
    description:
      "Depending on where our systems and service providers operate, your information may be processed or stored in countries outside your own.",
    items: [
      [
        "Cross-border processing",
        "Information may be transferred where necessary to provide our services.",
      ],
      [
        "Safeguards",
        "Where required by law, we will take appropriate measures to protect personal information during international transfers.",
      ],
    ],
  },
  {
    id: "children",
    number: "10",
    title: "Children's privacy",
    description:
      "Our platform is not intended for children to use independently where parental or guardian consent is required by applicable law.",
    items: [
      [
        "Information about children",
        "We do not knowingly collect personal information from children in circumstances where such collection is prohibited by law.",
      ],
      [
        "Concerns",
        "If you believe a child has provided personal information improperly, please contact us so we can review the situation.",
      ],
    ],
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to this policy",
    description:
      "Our services and legal responsibilities may evolve. We may therefore update this policy from time to time.",
    items: [
      [
        "Updated policy",
        "Changes will be published on this page with a revised effective date.",
      ],
      [
        "Staying informed",
        "We encourage you to revisit this page periodically to understand our current privacy practices.",
      ],
    ],
  },
];

const page = () => {
  return (
    <main>
      {/* HERO */}
      <section className="px-4 pb-5 pt-24 sm:px-7 sm:pt-28 lg:px-10 lg:pt-24">
        <div className="relative mx-auto min-h-[570px] max-w-[1600px] overflow-hidden bg-[var(--editorial-background)] sm:min-h-[650px] rounded-4xl">
          <Image
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=85"
            alt="Quiet architectural space surrounded by natural light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[570px] flex-col justify-between p-7 text-white sm:min-h-[650px] sm:p-12 lg:p-16">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={17} strokeWidth={1.4} />
                <span className="text-[9px] font-medium uppercase tracking-[0.24em]">
                  Privacy & protection
                </span>
              </div>
            </div>

            <div className="max-w-[850px] py-16">
              <h1
                className={`${cormorant.className} font-bold lg:font-semibold text-[15vw] sm:text-[13vw] xl:text-[6vw] leading-none`}
              >
                Privacy is
                <br />
                <span className="italic">personal.</span>
              </h1>
              <p className="mt-8 max-w-[440px] text-xs leading-7 text-white/75 sm:text-sm">
                We believe trust is built through transparency. Discover how we
                handle your information and the choices that remain yours.
              </p>
              <a
                href="#policy"
                className="mt-9 inline-flex items-center gap-4 border-b border-white/50 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-white"
              >
                Read our privacy policy
                <ArrowDown size={14} />
              </a>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-white/30 pt-5 sm:flex-row sm:items-center">
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

      {/* INTRO */}
      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              A note from us
            </p>
            <h2
              className={`${sectionHeadingClass}`}
            >
              Your journey is yours.
              <span className="block italic text-[var(--primary)]">
                Your information too.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="text-sm leading-8 text-[var(--foreground)]/70">
              This Privacy Policy explains how [Legal Business Name] ("we",
              "us", or "our") collects, uses, stores, and shares personal
              information when you visit our website or use our services.
            </p>
            <p className="mt-5 text-sm leading-8 text-[var(--foreground)]/70">
              Whether you are exploring accommodation, creating an account,
              making a reservation, or getting in touch with our team, we want
              you to understand how your information is handled.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)]">
                <LockKeyhole size={17} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-xs font-semibold">Privacy with purpose</p>
                <p className="mt-1 text-[10px] text-[var(--foreground)]/50">
                  Clear information. Responsible handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1350px] gap-10 sm:grid-cols-3 sm:gap-8">
          {[
            {
              icon: Eye,
              title: "Transparency",
              text: "Understand what information we collect and why.",
            },
            {
              icon: LockKeyhole,
              title: "Responsibility",
              text: "We take reasonable steps to protect the information entrusted to us.",
            },
            {
              icon: UserRound,
              title: "Your control",
              text: "Understand the rights and choices available to you.",
            },
          ].map((item, index) => (
            <div key={item.title} className="relative">
              <div className="flex items-center justify-between">
                <item.icon
                  size={22}
                  strokeWidth={1.35}
                  className="text-[var(--primary)]"
                />
              </div>
              <h3 className={`${cormorant.className} mt-6 text-3xl`}>
                {item.title}
              </h3>
              <p className="mt-2 max-w-[280px] text-xs leading-6 text-[var(--foreground)]/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section
        id="policy"
        className="scroll-mt-16 px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <h2
                className={`${sectionHeadingClass}`}
              >
                What you should
                <br />
                <span className="italic text-[var(--primary)]">know.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-x-16 gap-y-0 lg:grid-cols-2">
            {sections.map((section, index) => (
              <article
                id={section.id}
                key={section.id}
                className={`scroll-mt-24 border-t border-[var(--border)] py-10 sm:py-12 ${
                  index === sections.length - 1 && sections.length % 2 !== 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                      Section {section.number}
                    </span>
                    <h3
                      className={`${cormorant.className} mt-3 text-4xl leading-[1.05] sm:text-[42px]`}
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
                      className="grid gap-1 border-t border-[var(--border)]/70 py-4 sm:grid-cols-[145px_1fr] sm:gap-5"
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
      <section className="bg-[var(--editorial-background)] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              We're listening
            </p>
            <h2
              className={`${cormorant.className} mt-6 text-6xl leading-[0.9] sm:text-7xl lg:text-[95px]`}
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
              className="group mt-8 inline-flex items-center gap-5 border-b border-[var(--foreground)]/30 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Mail size={15} />
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED POLICIES */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                More information
              </p>
              <h2 className={`${sectionHeadingClass}`}>
                Other policies
              </h2>
            </div>
            <span className="hidden text-[9px] uppercase tracking-[0.16em] text-[var(--foreground)]/40 sm:block">
              Explore our guidelines
            </span>
          </div>

          <div className="grid gap-0 border-y border-[var(--border)] md:grid-cols-2">
            <Link
              href="/terms-and-conditions"
              className="group flex items-center justify-between gap-5 border-b border-[var(--border)] py-8 transition-colors hover:text-[var(--primary)] md:border-b-0 md:border-r md:pr-10"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  01 / Platform
                </span>
                <h3 className={`${cormorant.className} mt-2 text-3xl`}>
                  Terms & Conditions
                </h3>
                <p className="mt-2 text-[11px] text-[var(--foreground)]/50">
                  The terms governing your use of our platform.
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/booking-guide"
              className="group flex items-center justify-between gap-5 py-8 transition-colors hover:text-[var(--primary)] md:pl-10"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
                  02 / Reservations
                </span>
                <h3 className={`${cormorant.className} mt-2 text-3xl`}>
                  Booking Guide
                </h3>
                <p className="mt-2 text-[11px] text-[var(--foreground)]/50">
                  Reservation, cancellation and refund guidelines.
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
