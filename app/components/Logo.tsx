import React from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const Logo = ({ name = "Oravilles", variant = "default" }) => {
  const brandName = name.trim() || "Oravilles";
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      aria-label={brandName}
      className="group inline-flex items-center"
    >
      <div
        className={`flex items-center gap-[2px] ${
          isFooter ? "text-[#f5eee2]" : "text-[var(--foreground)]"
        }`}
      >
        <span className="relative top-[3px] text-md leading-none text-[var(--primary)]">
          ✦
        </span>

        <span
          className={`${cormorant.className} ${
            isFooter
              ? "text-4xl font-medium tracking-wide sm:text-[38px] group-hover:text-[#c8b18b]"
              : "text-2xl font-normal tracking-[-0.8px] md:text-3xl"
          } relative -top-[3px] block leading-[0.8] whitespace-nowrap transition-colors duration-300`}
        >
          {brandName}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
