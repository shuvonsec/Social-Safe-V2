import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "SocialSafe.my — Social Account Recovery in Malaysia.",
  description:
    "Hacked, locked, or disabled? Social Safe restores access to Instagram, Facebook, TikTok, X/Twitter and YouTube. Fast, secure, and ethical.",
  alternates: {
    canonical: "https://www.socialsafe.my/"
  }
};

export default function Page() {
  return <HomeContent />;
}
