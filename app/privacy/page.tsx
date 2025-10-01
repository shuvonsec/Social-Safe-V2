import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Social Safe",
  description: "Understand how Social Safe handles your information during account recovery engagements.",
  alternates: { canonical: "https://www.socialsafe.my/privacy" },
  openGraph: {
    title: "Privacy Policy — Social Safe",
    description: "Understand how Social Safe handles your information during account recovery engagements.",
    url: "https://www.socialsafe.my/privacy",
    images: [
      {
        url: "/og-image.svg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Social Safe",
    description: "Understand how Social Safe handles your information during account recovery engagements.",
    images: ["/og-image.svg"]
  }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-slate-600">
        Social Safe collects the minimum information required to support your recovery case, including contact details and
        incident description. We do not request passwords, recovery codes, or payment information via this site. Data is stored
        securely and access is limited to authorised analysts supporting your case.
      </p>
      <p className="text-sm text-slate-600">
        We may share necessary case details with platform support channels strictly for verification and recovery purposes. We
        retain case information for compliance and audit for up to 12 months, after which it is securely removed unless required
        for legal reasons. For any questions, contact us at support@socialsafe.my.
      </p>
    </div>
  );
}
