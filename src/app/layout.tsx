import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Both are variable fonts, so a single file per family covers every weight
// used in the design (Inter 400/600, Plus Jakarta Sans 600/700/800).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Absolute URL for canonical/Open Graph tags: an explicit override, else the
// production domain Vercel provides at build time, else local dev.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
const title = "Luma — Build skills that actually move you forward";
const description =
  "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Luma",
  keywords: ["online courses", "product design", "technology", "business", "creative skills", "learning"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Luma",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-learner.jpg",
        width: 900,
        height: 1100,
        alt: "A learner smiling while studying on her laptop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-learner.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f8f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-lg bg-primary px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
