import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/** Echoes the high-contrast serif in the logo's "wifey". Accents only. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["400"],
  variable: "--font-serif",
});

/** One annotation on the checklist. Nowhere else. */
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-hand",
});

const SITE = "https://www.hireawifeyaustralia.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Home Cleaning & Housekeeping Hervey Bay | Hire a Wifey",
  description:
    "Need help around the home? Hire a Wifey provides cleaning, housekeeping, laundry, ironing, dishes, bed making, meal prep and more across Hervey Bay. NDIS and DVA clients welcome. Book your Wifey today.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE,
    siteName: "Hire a Wifey",
    title: "Home Cleaning & Housekeeping Hervey Bay | Hire a Wifey",
    description:
      "Cleaning, housekeeping, laundry, ironing, dishes, bed making and meal prep across Hervey Bay. We Take Care of Home.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
