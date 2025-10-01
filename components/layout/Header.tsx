"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: WHATSAPP_URL, label: "WhatsApp", external: true },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-slate-900"
          aria-label={SITE_NAME}
        >
          <span className="h-3 w-3 rounded-full bg-blue-600" aria-hidden="true" />
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
              Start My Recovery
            </Link>
          </Button>
        </div>
        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-2xl p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <ul className="space-y-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer noopener" : undefined}
                  onClick={close}
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild className="w-full">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={close}
                >
                  Start My Recovery
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
