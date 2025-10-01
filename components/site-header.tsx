"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "WhatsApp", href: "#whatsapp" },
  { name: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Social Safe home">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white font-bold">
            SS
          </div>
          <span className="text-lg font-semibold">Social Safe</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-primary">
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Start My Recovery
            </Link>
          </Button>
        </nav>
        <button
          type="button"
          className="rounded-full p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open ? "max-h-[500px] border-t border-slate-200" : "max-h-0 overflow-hidden"
        )}
      >
        <nav className="flex flex-col gap-4 px-4 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Start My Recovery
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
