"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Phone,
  Clock3,
  Plus,
  Check,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { BRAND_NAME } from "../components/brand";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ContactPage = () => {
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectOptions = [
    "General enquiry",
    "Reservation assistance",
    "Property information",
    "Partnership enquiry",
    "Something else",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your contact API here.
    console.log("Contact enquiry:", formData);
  };

  return (
    <main>
      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <h1
              className={`${cormorant.className} text-[16vw] font-medium leading-[0.82] tracking-[-0.055em] sm:text-[13vw] lg:text-[145px]`}
            >
              Let's talk
              <span className="italic text-[var(--primary)]">.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--foreground)]/65 sm:text-base">
              Have a question or planning your next getaway? We’re just a
              conversation away.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT EXPERIENCE */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT IMAGE AND INFORMATION */}
          <div className="flex flex-col lg:col-span-5">
            {/* Image */}
            <div className="group relative h-[360px] overflow-hidden rounded-[28px] sm:h-[470px] lg:h-[510px] lg:rounded-[34px]">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85"
                alt="Welcoming luxury hotel entrance and hospitality space"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
                <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
                  The {BRAND_NAME} Experience
                </p>

                <h2
                  className={`${cormorant.className} max-w-sm text-4xl leading-[1.02] sm:text-5xl lg:text-[52px]`}
                >
                  A little help goes a long way.
                </h2>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <div className="mb-3 flex items-center gap-3 text-[var(--primary)]">
                  <Mail size={16} strokeWidth={1.5} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Email
                  </p>
                </div>

                <p className="text-sm font-medium">hello@example.com</p>
                <p className="mt-1 text-[11px] text-[var(--foreground)]/45">
                  For general enquiries
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3 text-[var(--primary)]">
                  <Phone size={16} strokeWidth={1.5} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Phone
                  </p>
                </div>

                <p className="text-sm font-medium">+91 98765 43210</p>
                <p className="mt-1 text-[11px] text-[var(--foreground)]/45">
                  Speak with our team
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3 text-[var(--primary)]">
                  <Clock3 size={16} strokeWidth={1.5} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Working hours
                  </p>
                </div>

                <p className="text-sm font-medium">Monday – Saturday</p>
                <p className="mt-1 text-[11px] text-[var(--foreground)]/45">
                  10:00 AM – 6:00 PM
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3 text-[var(--primary)]">
                  <FaInstagram size={16} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Follow along
                  </p>
                </div>

                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--primary)]"
                >
                  Instagram
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <p className="mt-1 text-[11px] text-[var(--foreground)]/45">
                  A little inspiration every day
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="relative flex flex-col overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9 lg:col-span-7 lg:rounded-[36px] lg:p-12">
            {/* Heading */}
            <div className="mb-10 lg:mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--primary)]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                  Your enquiry
                </p>
              </div>

              <h2
                className={`${cormorant.className} text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-[72px]`}
              >
                Tell us a little
                <span className="block italic text-[var(--primary)]">
                  about it.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-xs leading-7 text-[var(--foreground)]/55 sm:text-sm">
                We'd love to know what you're looking for. Share a few details
                and let's make your next stay special.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]/60"
                  >
                    Your name <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-xl border border-[var(--border)] bg-[var(--background)]/50 px-4 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--foreground)]/35 hover:border-[var(--foreground)]/25 focus:border-[var(--primary)] focus:bg-[var(--surface)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]/60"
                  >
                    Email address{" "}
                    <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-xl border border-[var(--border)] bg-[var(--background)]/50 px-4 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--foreground)]/35 hover:border-[var(--foreground)]/25 focus:border-[var(--primary)] focus:bg-[var(--surface)]"
                  />
                </div>

                {/* SUBJECT / CUSTOM DROPDOWN */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]/60"
                  >
                    What can we help you with?
                  </label>

                  <div className="relative">
                    {/* Dropdown Trigger */}
                    <button
                      type="button"
                      onClick={() => setIsSubjectOpen((prev) => !prev)}
                      onBlur={(e) => {
                        if (
                          !e.currentTarget.parentElement?.contains(
                            e.relatedTarget,
                          )
                        ) {
                          setIsSubjectOpen(false);
                        }
                      }}
                      aria-haspopup="listbox"
                      aria-expanded={isSubjectOpen}
                      className={`flex h-14 w-full items-center justify-between rounded-xl border bg-[var(--background)]/50 px-4 text-left text-sm outline-none transition-all duration-300 ${
                        isSubjectOpen
                          ? "border-[var(--primary)] bg-[var(--surface)]"
                          : "border-[var(--border)] hover:border-[var(--foreground)]/25"
                      }`}
                    >
                      <span className="text-[var(--foreground)]">
                        {formData.subject || "Choose an enquiry type"}
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center text-[var(--foreground)]/55 transition-all duration-300 ${
                          isSubjectOpen
                            ? "rotate-180 border-[var(--primary)] text-[var(--primary)]"
                            : ""
                        }`}
                      >
                        <ChevronDown size={15} strokeWidth={1.5} />
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 right-0 top-[calc(100%+10px)] z-30 origin-top rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 ${
                        isSubjectOpen
                          ? "visible translate-y-0 scale-100 opacity-100"
                          : "invisible -translate-y-2 scale-[0.98] opacity-0"
                      }`}
                      role="listbox"
                      aria-label="Enquiry type"
                    >
                      {subjectOptions.map((option, index) => {
                        const isSelected = formData.subject === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                subject: option,
                              }));
                              setIsSubjectOpen(false);
                            }}
                            className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                              isSelected
                                ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                : "text-[var(--foreground)] hover:bg-[var(--background)]"
                            }`}
                          >
                            <span className="flex items-center gap-4">
                              <span
                                className={`text-[9px] font-medium tabular-nums ${
                                  isSelected
                                    ? "text-[var(--primary)]"
                                    : "text-[var(--foreground)]/35"
                                }`}
                              >
                                0{index + 1}
                              </span>

                              <span className="text-xs font-medium">
                                {option}
                              </span>
                            </span>

                            {isSelected && (
                              <Check
                                size={15}
                                strokeWidth={1.8}
                                className="text-[var(--primary)]"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hidden field so the selected subject is included in FormData */}
                  <input
                    type="hidden"
                    name="subject"
                    value={formData.subject}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]/60"
                  >
                    Your message{" "}
                    <span className="text-[var(--primary)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you have in mind..."
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)]/50 px-4 py-4 text-sm leading-7 text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--foreground)]/35 hover:border-[var(--foreground)]/25 focus:border-[var(--primary)] focus:bg-[var(--surface)]"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 flex flex-col gap-6 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[250px] text-[10px] leading-5 text-[var(--foreground)]/45">
                  Your details are safe with us. We'll only use them to respond
                  to your enquiry.
                </p>

                <button
                  type="submit"
                  className="group inline-flex h-13 shrink-0 items-center justify-center gap-5 rounded-full bg-[var(--primary)] px-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:brightness-90"
                >
                  Send enquiry
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-36">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[#252821] px-6 py-20 text-center shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:rounded-[40px] sm:px-12 sm:py-28 lg:py-32">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000&q=85"
              alt="Beautiful scenic mountain destination"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Content */}
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#e8b77d]">
            Until we meet
          </p>

          <h2
            className={`${cormorant.className} mx-auto max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[76px]`}
          >
            Your next beautiful
            <span className="block italic text-[#e8b77d]">escape awaits.</span>
          </h2>

          <Link
            href="/rooms#room-collection"
            className="group mt-8 inline-flex items-center gap-4 border-b border-[#e8b77d]/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#e8b77d]"
          >
            Explore our stays
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8b77d]/60 text-[#e8b77d] transition-all duration-300 group-hover:bg-[#e8b77d] group-hover:text-[#252821]">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* QUICK QUESTIONS */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT HEADING */}
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--primary)]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                A little clarity
              </p>
            </div>

            <h2
              className={`${cormorant.className} max-w-md text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-[68px]`}
            >
              A few things you
              <span className="block italic text-[var(--primary)]">
                might wonder.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--foreground)]/55">
              From planning your stay to finding the right property, here are a
              few answers to help you get started.
            </p>

            <p className="mt-8 text-xs text-[var(--foreground)]/45">
              Still have questions? We'd be happy to help.
            </p>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--border)]">
              {[
                {
                  question: "How can I make a reservation?",
                  answer:
                    "You can explore our available stays and make a reservation through our website. If you need assistance, simply send us an enquiry and our team will guide you.",
                },
                {
                  question: "Can I ask about a specific property?",
                  answer:
                    "Absolutely. Share the property name or destination you're interested in through our contact form, and we'll help you with the details.",
                },
                {
                  question: "Can I modify or cancel my booking?",
                  answer:
                    "For changes or cancellation requests, please contact our team with your booking details. The applicable booking terms and conditions will guide the process.",
                },
                {
                  question: "How soon can I expect a response?",
                  answer:
                    "Our team aims to respond to enquiries during working hours, Monday to Saturday, between 10:00 AM and 6:00 PM.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group border-b border-[var(--border)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start gap-5">
                      <span className="mt-1 text-[10px] font-medium tabular-nums text-[var(--primary)]">
                        0{index + 1}
                      </span>

                      <h3 className="text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-base">
                        {item.question}
                      </h3>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]/55 transition-all duration-300 group-open:rotate-45 group-open:border-[var(--primary)] group-open:text-[var(--primary)]">
                      <Plus size={15} strokeWidth={1.5} />
                    </span>
                  </summary>

                  <div className="pb-7 pl-10 pr-12">
                    <p className="max-w-xl text-xs leading-7 text-[var(--foreground)]/55 sm:text-sm">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
