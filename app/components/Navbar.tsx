"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Plus, Minus, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ChangeTheme from "@/app/components/ChangeTheme";
import { getWishlist } from "@/app/utils/wishlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCollection, setExpandedCollection] = useState<string | null>(
    null,
  );
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
        className={`w-full
    bg-[var(--background)]/85
    backdrop-blur-xl
    border-b-[0.5px] border-[var(--primary)]/20
    text-sm text-white
    transition-all duration-300
    ${isMenuOpen ? "hidden" : ""}`}
      >
        <div className="mx-auto max-w-[1350px] px-5 sm:px-7 py-3 flex justify-between items-center">
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

          {/* Wishlist */}
          <div className="flex gap-2">
            <Link
              href="/wishlist"
              className={`relative flex items-center justify-center text-[var(--primary)]`}
            >
              <Heart size={28} strokeWidth={1.5} fill={"currentColor"} />

              <span className="absolute -right-[1] -top-[-13px] flex leading-none text-[9px] font-medium text-white">
                {wishlistCount}
              </span>
            </Link>
            
            {/* Change Theme Button */}
            <ChangeTheme />

            {/* Login Button */}
            <button className="hidden lg:block font-semibold rounded-full px-4 py-1 bg-[var(--primary)] text-white transition-colors duration-300 hover:brightness-90">
              Login
            </button>

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
        className={`fixed inset-0 z-50 md:hidden bg-white ${
          isMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 text-[#292824] overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b border-black/10">
            <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
              <Logo />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={21} strokeWidth={1.4} />
              </button>
            </div>
          </div>

          <div className="px-6 pt-8 pb-7 flex flex-col gap-5">
            {[
              { name: "Accommodation", href: "/accommodation" },
              { name: "Dining", href: "/dining" },
              { name: "Wellness", href: "/wellness" },
              { name: "Experiences", href: "/experiences" },
              { name: "Offers", href: "/offers" },
              { name: "Vouchers", href: "/vouchers" },
              { name: "Gallery", href: "/gallery" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mx-6 border-t border-b border-black/15 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-5">
              Our Collection
            </p>

            {[
              {
                name: "Hotels",
                count: 2,
                items: ["Hotel One", "Hotel Two"],
              },
              {
                name: "Villas & Chalets",
                count: 6,
                items: ["Beach Villas", "Mountain Chalets"],
              },
              {
                name: "Residences",
                count: 1,
                items: ["Private Residences"],
              },
            ].map((collection) => (
              <div
                key={collection.name}
                className="border-b border-black/5 last:border-0"
              >
                <button
                  onClick={() =>
                    setExpandedCollection(
                      expandedCollection === collection.name
                        ? null
                        : collection.name,
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-sm"
                >
                  <span>
                    {collection.name} ({collection.count})
                  </span>

                  {expandedCollection === collection.name ? (
                    <Minus size={17} strokeWidth={1.3} />
                  ) : (
                    <Plus size={17} strokeWidth={1.3} />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    expandedCollection === collection.name
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {collection.items.map((item) => (
                      <Link
                        key={item}
                        href="/rooms"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 pl-3 text-xs text-neutral-500 hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-7 flex flex-col gap-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Hotel Kayease
            </p>

            {[
              { name: "Rooms", href: "/rooms" },
              { name: "About Us", href: "/about-us" },
              { name: "Contact Us", href: "/contact-us" },
              { name: "Blogs", href: "/blogs" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
