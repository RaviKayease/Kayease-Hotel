"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="px-[3vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw]">
        {children}
        <Footer />
      </div>
    </>
  );
}
