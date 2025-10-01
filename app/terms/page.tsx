import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Social Safe",
  description: "Review the legal terms governing Social Safe account recovery engagements.",
  alternates: { canonical: "https://www.socialsafe.my/terms" },
  openGraph: {
    title: "Terms of Service — Social Safe",
    description: "Review the legal terms governing Social Safe account recovery engagements.",
    url: "https://www.socialsafe.my/terms",
    images: [
      {
        url: "/og-image.svg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Social Safe",
    description: "Review the legal terms governing Social Safe account recovery engagements.",
    images: ["/og-image.svg"]
  }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-sm text-slate-600">
        By engaging Social Safe you confirm you are the lawful owner or authorised representative of the affected account(s).
        Our services focus on lawful account recovery, impersonation takedowns, and security hardening. We do not hack, bypass
        security controls, or request sensitive credentials.
      </p>
      <p className="text-sm text-slate-600">
        The RM 100 advance is non-refundable and covers analyst time for case setup. Success fees are payable upon documented
        recovery. We limit liability to the amount paid for services, and Malaysian law governs any disputes. For clarifications,
        contact legal@socialsafe.my.
      </p>
    </div>
  );
}
