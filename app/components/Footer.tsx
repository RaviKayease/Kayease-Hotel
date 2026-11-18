"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import DecorativeLeaf from "@/public/FooterImage/image.png";
import Image from "next/image";
import Logo from "./Logo";
import { BRAND_NAME } from "./brand";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Our Stays", href: "/hotels" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blogs-page" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "FAQs", href: "/faq" },
  { name: "Booking Guide", href: "/booking-guide" },
  { name: "Cancellation", href: "/cancellation" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="w-full bg-[var(--background)] pb-8 transition-colors duration-500 lg:pt-10">
      {/* Main Footer Container */}
      <div className="relative overflow-hidden rounded-4xl border border-[#b5a58b]/70 bg-[#191a16] text-[#f4eee3] shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
        {/* Decorative Leaf Image */}
        <div className="pointer-events-none absolute -right-5 -top-4 z-0 h-[300px] w-[225px] sm:-right-4 sm:-top-5 sm:h-[370px] sm:w-[278px] lg:h-[400px] lg:w-[300px]">
          <Image
            src={DecorativeLeaf}
            alt="Decorative olive green leaves"
            fill
            priority
            sizes="(max-width: 640px) 225px, (max-width: 1024px) 278px, 300px"
            className="object-contain object-right-top opacity-90"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-10 sm:grid-cols-4 sm:gap-6 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-start sm:col-span-1">
            <Logo variant="footer" />

            <p className="mt-2 max-w-[230px] text-[11px] leading-6 tracking-wide text-[#c5c0b5] sm:text-xs">
              Live Beautiful, Live Extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="mb-5 text-xs font-semibold tracking-wide text-[#f4eee3]">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-[#c5c0b5] transition-colors duration-300 hover:text-[#d7bd91] sm:text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start">
            <h3 className="mb-5 text-xs font-semibold tracking-wide text-[#f4eee3]">
              Support
            </h3>

            <ul className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-[#c5c0b5] transition-colors duration-300 hover:text-[#d7bd91] sm:text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="relative z-20 flex flex-col items-start">
            <h3 className="mb-5 text-xs font-semibold tracking-wide text-[#f4eee3]">
              Follow Us
            </h3>

            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c0af]/50 text-[#eee8dc] transition-all duration-300 hover:border-[#d7bd91] hover:bg-[#d7bd91] hover:text-[#191a16]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v1.9H7V13h2.8v8h3.7Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c0af]/50 text-[#eee8dc] transition-all duration-300 hover:border-[#d7bd91] hover:bg-[#d7bd91] hover:text-[#191a16]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c0af]/50 text-[#eee8dc] transition-all duration-300 hover:border-[#d7bd91] hover:bg-[#d7bd91] hover:text-[#191a16]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="relative z-10 mx-6 h-px bg-[#b5a58b]/25 sm:mx-10 lg:mx-14" />

        {/* Copyright */}
        <div className="relative z-10 flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p className="text-[9px] tracking-wide text-[#aaa69c] sm:text-[10px]">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-[9px] text-[#aaa69c] sm:text-[10px]">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#d7bd91]"
            >
              Privacy Policy
            </Link>

            <span className="text-[#777368]">|</span>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#d7bd91]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
