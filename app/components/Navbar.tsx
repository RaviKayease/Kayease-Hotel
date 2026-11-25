"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ChangeTheme from "@/app/components/ChangeTheme";
import { getWishlist } from "@/app/utils/wishlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const syncWishlist = () => {
      setWishlistCount(getWishlist().length);
    };

    syncWishlist();

    window.addEventListener("wishlistUpdated", syncWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", syncWishlist);
    };
  }, []);

  return (
    <div className="sticky top-0 z-40 ">
      {/* Desktop Navbar */}
      <div
        className={`w-full bg-[var(--background)]/85 backdrop-blur-xl border-b-[0.5px] border-[var(--primary)]/20 text-sm text-white transition-all duration-300 ${isMenuOpen ? "hidden" : ""}`}
      >
        <div className="px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] py-3 flex justify-between items-center">
          <Logo />

          {/* Page Navgation Buttons */}
          <div className="hidden lg:flex md:gap-[4vw] font-medium text-[var(--foreground)]">
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
                  className={`bg-[var(--primary)] h-[2px] w-1/2 rounded-md transition-all duration-300 ${
                    pathname === item.href ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex items-center justify-center text-[var(--primary)]"
            >
              <Heart size={28} strokeWidth={1.5} fill="currentColor" />

              <span className="absolute inset-0 flex items-center justify-center pt-[1px] text-[9px] font-semibold leading-none text-white">
                {wishlistCount}
              </span>
            </Link>

            {/* Change Theme Button */}
            <ChangeTheme />

            {/* Login Button */}
            <Link
              href="/sign-in"
              className="hidden lg:inline-flex items-center justify-center font-semibold rounded-full px-4 py-1 bg-[var(--primary)] text-white transition-colors duration-300 hover:brightness-90"
            >
              Login
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[var(--foreground)] lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[var(--background)]
    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      isMenuOpen
        ? "visible opacity-100"
        : "invisible opacity-0 pointer-events-none"
    }`}
      >
        <div
          className={`absolute inset-0 flex flex-col text-[var(--foreground)] overflow-y-auto
      transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${isMenuOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-[var(--primary)]/15 bg-[var(--background)]/95 backdrop-blur-xl">
            <Logo />

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/20 text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
            >
              <X size={19} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-1 flex-col p-8">
            <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Explore
            </p>

            <nav className="flex flex-col">
              {[
                { name: "Home", href: "/" },
                { name: "Rooms", href: "/rooms" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Blogs", href: "/blogs" },
                { name: "Login", href: "/sign-in" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center justify-between border-b border-[var(--primary)]/15 py-6 transition-all duration-300 ${
                    pathname === item.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:text-[var(--primary)]"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span className="text-[10px] tracking-widest text-[var(--primary)]/60">
                      0{index + 1}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
