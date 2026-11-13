import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-end gap-[3px]">
        <span className="h-2 w-2 rounded-full bg-orange-500 relative translate-y-[-7px]"></span>
        <h1 className="text-xl font-bold">Oravilles</h1>
      </div>
    </Link>
  );
};

export default Logo;
 