import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-slate-600">
            We operate independently and follow platform policies and applicable laws.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:gap-6">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <p className="text-xs text-slate-500">© {year} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
