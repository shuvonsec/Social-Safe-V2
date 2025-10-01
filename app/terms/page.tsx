import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Social Safe",
  description: "Review Social Safe’s service terms, lawful conduct commitments, and customer responsibilities.",
  alternates: {
    canonical: "https://www.socialsafe.my/terms"
  }
};

export default function TermsPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Terms of Service</h1>
      <p>Last updated: May 2024</p>
      <h2>Scope of services</h2>
      <p>
        Social Safe provides advisory, documentation, and liaison support for account recovery, impersonation takedowns, and post-recovery hardening. We operate independently and follow platform policies and applicable laws.
      </p>
      <h2>Client responsibilities</h2>
      <ul>
        <li>Provide accurate ownership evidence when requested.</li>
        <li>Do not share passwords, one-time codes, or sensitive authentication factors.</li>
        <li>Comply with all applicable platform terms of service.</li>
      </ul>
      <h2>Fees</h2>
      <p>
        We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation. You only pay the remaining success fee if we recover access.
      </p>
      <h2>Liability</h2>
      <p>
        While we apply best-effort, lawful processes, Social Safe does not guarantee outcomes and is not liable for indirect or consequential damages. Liability is limited to fees paid for the relevant engagement.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about these terms, email legal@socialsafe.my.
      </p>
    </article>
  );
}
