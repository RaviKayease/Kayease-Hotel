"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import DecorativeLeaf from "@/public/FooterImage/image.png";
import Image from "next/image";
import Logo from "./Logo";
import { BRAND_NAME } from "./brand";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blogs" },
];

const supportLinks = [
  { name: "FAQs", href: "/faqs" },
  { name: "Booking Guide", href: "/booking-guide" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
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
        <div className="pointer-events-none absolute -right-0 -bottom-0 z-0 h-[300px] w-[225px] sm:-right-4 sm:-top-5 sm:h-[370px] sm:w-[278px] lg:h-[400px] lg:w-[300px]">
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
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[8vw] xl:gap-[14vw] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Brand */}
          <div className="flex flex-col items-start w-full max-w-[200px]">
            <Logo variant="footer" />

            <p className="mt-2 text-[11px] leading-6 tracking-wide text-[#c5c0b5] sm:text-xs">
              Live Beautiful, Live Extraordinary.
            </p>
          </div>

          <div className="relative w-full z-10 flex flex-wrap justify-between gap-x-8 gap-y-10">
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
                  <FaFacebookF className="h-4 w-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c0af]/50 text-[#eee8dc] transition-all duration-300 hover:border-[#d7bd91] hover:bg-[#d7bd91] hover:text-[#191a16]"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c0af]/50 text-[#eee8dc] transition-all duration-300 hover:border-[#d7bd91] hover:bg-[#d7bd91] hover:text-[#191a16]"
                >
                  <SiX className="h-3.5 w-3.5" />
                </a>
              </div>
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

          <div className="text-[9px] text-[#aaa69c] sm:text-[10px]">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#d7bd91]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
