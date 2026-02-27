import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Link from "next/link";
import NavMenu from "./components/NavMenu";
import { CookieProvider } from "./components/CookieProvider";
import CookieBanner from "./components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "FormbyGuide.co.uk — Your Complete Guide to Formby",
    template: "%s | FormbyGuide.co.uk",
  },
  description:
    "Discover the best restaurants, beaches, walks and things to do in Formby. Your local guide to the National Trust pinewoods, red squirrels and the Sefton Coast.",
  keywords:
    "Formby, things to do Formby, Formby beach, red squirrels Formby, National Trust Formby, Formby pinewoods, restaurants Formby, Formby guide",
  authors: [{ name: "Churchtown Media", url: "https://churchtownmedia.co.uk" }],
  creator: "Churchtown Media",
  publisher: "FormbyGuide.co.uk",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "FormbyGuide.co.uk",
    title: "FormbyGuide.co.uk — Your Complete Guide to Formby",
    description:
      "Discover the best restaurants, beaches, walks and things to do in Formby. Red squirrels, pinewoods and the Sefton Coast.",
    images: [
      {
        url: `${BASE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "FormbyGuide.co.uk — Discover Formby",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FormbyGuide.co.uk — Your Complete Guide to Formby",
    description: "Discover the best restaurants, beaches, walks and things to do in Formby.",
    images: [`${BASE_URL}/og-default.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script id="crisp-chat" strategy="afterInteractive">{`
          window.$crisp=[];window.CRISP_WEBSITE_ID="923512e8-2a2f-4ea8-95d4-78bc7809b34d";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}</Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#F7F9F6]`}>
        <CookieProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </CookieProvider>
        <Analytics />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <nav className="relative bg-white/95 backdrop-blur-sm border-b border-[#1C3220]/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <span className="font-display text-xl font-bold text-[#1C3220] group-hover:text-[#2E6B3E] transition-colors">
              Formby<span className="text-[#2E6B3E]">Guide</span>
            </span>
            <span className="hidden sm:block text-xs text-gray-400 font-light tracking-widest uppercase mt-0.5">.co.uk</span>
          </Link>

          <NavMenu />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1C3220] text-white/80">
      <div className="h-1 bg-gradient-to-r from-[#C9A96E] via-[#E8C87A] to-[#C9A96E]" />

      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold text-white mb-3">
              Formby<span className="text-[#C9A96E]">Guide</span>
              <span className="text-white/40 text-sm font-normal ml-1">.co.uk</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-4 max-w-xs">
              Your local guide to Formby — beach, pinewoods, red squirrels, and the best places to eat and explore on the Sefton Coast.
            </p>
            <a href="https://churchtownmedia.co.uk" className="text-xs text-[#C9A96E] hover:text-[#E8C87A] transition">
              Built by Churchtown Media ↗
            </a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Sefton Coast Network</p>
              <ul className="space-y-1.5">
                <li>
                  <span className="text-sm font-semibold text-white/40">FormbyGuide.co.uk</span>
                </li>
                <li>
                  <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/70 hover:text-[#C9A96E] transition">
                    SouthportGuide.co.uk ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.seftonlinks.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/70 hover:text-[#C9A96E] transition">
                    SeftonLinks.com ↗
                  </a>
                </li>
                <li>
                  <a href="https://seftoncoastwildlife.co.uk" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/70 hover:text-[#C9A96E] transition">
                    Sefton Coast Wildlife ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Places</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Formby Beach", "/formby-beach"],
                ["Red Squirrels", "/red-squirrels-formby"],
                ["Pinewoods", "/formby-pinewoods"],
                ["Things To Do", "/things-to-do"],
                ["About Formby", "/about-formby"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A96E] transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Directory</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Restaurants", "/restaurants"],
                ["Pubs & Bars", "/pubs"],
                ["Cafes", "/cafes"],
                ["Blog", "/blog"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A96E] transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">For Business</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                ["About this site", "/about"],
                ["List Your Business", "/claim-listing"],
                ["Advertise With Us", "/advertise"],
                ["Claim Listing", "/claim-listing"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-[#C9A96E] transition">{label}</Link>
                </li>
              ))}
              <li>
                <a href="https://www.southportguide.co.uk/the-open-2026" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A96E] transition">
                  The Open 2026 ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <span>Part of the <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="hover:text-white/60 transition">Sefton Coast Network</a></span>
          <div className="flex gap-5">
            <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener" className="hover:text-white/60 transition">SouthportGuide</a>
            <a href="https://www.seftonlinks.com" target="_blank" rel="noopener" className="hover:text-white/60 transition">SeftonLinks</a>
            <a href="https://seftoncoastwildlife.co.uk" target="_blank" rel="noopener" className="hover:text-white/60 transition">Sefton Coast Wildlife</a>
            <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="hover:text-white/60 transition">SeftonCoast.network</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 pb-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/50">
            Run a business in Formby?{" "}
            <span className="text-[#C9A96E] font-semibold">Partner with the Sefton Coast Network</span>
          </p>
          <a href="mailto:hello@seftoncoast.network" className="text-[#C9A96E] hover:text-white transition font-medium text-sm">
            hello@seftoncoast.network →
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; 2026 FormbyGuide.co.uk — All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition">Terms</Link>
            <Link href="/contact" className="hover:text-white/70 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
