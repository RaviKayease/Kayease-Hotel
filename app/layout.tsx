import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import LayoutContent from "./components/LayoutContent";
import { SITE_URL } from "../lib/site";
import { BRAND_NAME } from "./components/brand";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: BRAND_NAME,
    template: `%s | ${BRAND_NAME}`,
  },

  description: `Discover exceptional stays and hospitality experiences with ${BRAND_NAME}.`,

  applicationName: BRAND_NAME,

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("website-theme") || "earth";
                  const validThemes = [
                    "earth",
                    "ocean",
                    "forest",
                    "purple",
                    "rose",
                    "dark"
                  ];

                  document.documentElement.dataset.theme =
                    validThemes.includes(theme) ? theme : "earth";
                } catch (error) {
                  document.documentElement.dataset.theme = "earth";
                }
              })();
            `,
          }}
        />
      </head>

      <body>
        <Suspense fallback={null}>
          <LayoutContent>{children}</LayoutContent>
        </Suspense>
      </body>
    </html>
  );
}
