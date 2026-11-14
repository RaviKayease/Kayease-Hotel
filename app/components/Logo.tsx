import React from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const Logo = ({ name = "Oravilles" }) => {
  const brandName = name.trim() || "Oravilles";

  return (
    <Link href="/" aria-label={brandName} className="inline-flex items-center">
      {/* Mobile & Tablet Logo */}
      <div className="flex items-end gap-[2px] text-[var(--foreground)]">
        <span className="text-[var(--primary)] text-md leading-none mb-[2px]">
          ✦
        </span>

        <span
          className={`${cormorant.className} text-2xl md:text-3xl leading-none font-normal tracking-[-0.8px] whitespace-nowrap`}
        >
          {brandName}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
