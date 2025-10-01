import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsentBanner } from "@/components/consent-banner";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.socialsafe.my";
const ogImage = "/og-image.svg";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "SocialSafe.my — Social Account Recovery in Malaysia.",
  description:
    "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
  alternates: {
    canonical: baseUrl
  },
  openGraph: {
    title: "SocialSafe.my — Social Account Recovery in Malaysia.",
    description:
      "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
    url: baseUrl,
    siteName: "Social Safe",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Social Safe account recovery"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialSafe.my — Social Account Recovery in Malaysia.",
    description:
      "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
    images: [ogImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Social Safe",
    url: baseUrl,
    sameAs: [
      "https://www.instagram.com/",
      "https://www.facebook.com/",
      "https://www.tiktok.com/",
      "https://twitter.com/",
      "https://www.youtube.com/"
    ]
  } satisfies Record<string, unknown>;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100", inter.className)}>
        <AnalyticsProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ChatWidget />
          <ConsentBanner />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
