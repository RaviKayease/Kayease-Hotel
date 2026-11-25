"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ChangeTheme from "@/app/components/ChangeTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling while sidebar is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms", mainPage: true },
    { name: "About Us", href: "/about-us", mainPage: true },
    { name: "Contact Us", href: "/contact-us", mainPage: true },
    { name: "Blogs", href: "/blogs", mainPage: true },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Cart", href: "/cart" },
    { name: "Login", href: "/sign-in" },
  ];
  return (
    <div className="sticky top-0 z-40">
      {/* Main Navbar */}
      <div className="w-full border-b-[0.5px] border-[var(--primary)]/20 bg-[var(--background)]/85 text-sm backdrop-blur-xl">
        <div className="flex items-center justify-between px-[3vw] py-3 sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw]">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[3vw] font-medium text-sm text-[var(--foreground)]">
            {[
              { name: "Rooms", href: "/rooms" },
              { name: "About Us", href: "/about-us" },
              { name: "Contact Us", href: "/contact-us" },
              { name: "Blogs", href: "/blogs" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-colors duration-300 hover:text-[var(--primary)] ${
                  pathname === item.href ? "text-[var(--primary)]" : ""
                }`}
              >
                {item.name}

                <span
                  className={`h-[2px] w-1/2 rounded-md bg-[var(--primary)] transition-all duration-300 ${
                    pathname === item.href ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <ChangeTheme />

            {/* Menu Button - Below LG Only */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={21} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-black/40 backdrop-blur-sm"
        />

        {/* Sidebar */}
        <aside
          id="navigation-sidebar"
          aria-label="Main navigation"
          className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-[var(--background)] text-[var(--foreground)] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[420px] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--primary)]/15 bg-[var(--background)]/95 px-6 py-5 backdrop-blur-xl">
            <Logo />

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/20 text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
            >
              <X size={19} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 flex-col p-8">
            <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Explore
            </p>

            <nav className="flex flex-col">
              {navigationLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`group ${
                    item.mainPage ? "lg:hidden" : ""
                  } flex items-center justify-between border-b border-[var(--primary)]/15 py-6 transition-all duration-300 ${
                    pathname === item.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:text-[var(--primary)]"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span className="text-[10px] tracking-widest text-[var(--primary)]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
