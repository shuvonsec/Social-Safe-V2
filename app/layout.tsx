import "./globals.css";

import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { AssistWidget } from "@/components/layout/AssistWidget";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SocialSafe.my — Social Account Recovery in Malaysia.",
    template: "%s | Social Safe"
  },
  description:
    "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
  openGraph: {
    title: "SocialSafe.my — Social Account Recovery in Malaysia.",
    description:
      "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_MY",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialSafe.my — Social Account Recovery in Malaysia.",
    description:
      "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [
      "https://www.facebook.com/socialsafe",
      "https://www.instagram.com/socialsafe",
      "https://www.linkedin.com/company/socialsafe"
    ]
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-slate-50">
        <a
          href="#main"
          className="focus-ring absolute left-4 top-4 -translate-y-16 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto max-w-6xl px-4 pb-20 pt-10">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
        <AssistWidget />
        <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
