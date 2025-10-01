import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Social Safe</p>
          <p className="text-sm text-slate-500">Trusted by creators, SMEs, and agencies across Malaysia</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer links">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 py-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {year} Social Safe. All rights reserved.</span>
          <span>We operate independently and follow platform policies and applicable laws.</span>
        </div>
      </div>
    </footer>
  );
}
