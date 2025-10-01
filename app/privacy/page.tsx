import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Social Safe",
  description: "Understand how Social Safe handles your information with lawful, minimal data practices.",
  alternates: {
    canonical: "https://www.socialsafe.my/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Privacy Policy</h1>
      <p>Last updated: May 2024</p>
      <p>
        Social Safe operates with a minimum data mindset. We collect only the information you provide in recovery requests to triage and service your case. We do not request or store passwords, 2FA codes, or payment details through this site.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details (name, email, optional phone)</li>
        <li>Platform and incident information you share</li>
        <li>Operational metadata such as case timestamps</li>
      </ul>
      <h2>How we use information</h2>
      <p>
        We use your information to verify ownership, prepare evidence packs, communicate with you, and deliver contracted recovery services. We may anonymise case learnings to improve processes.
      </p>
      <h2>Retention</h2>
      <p>
        Case data is retained for up to 12 months for audit and compliance purposes, after which it is securely deleted unless lawfully required otherwise.
      </p>
      <h2>Your rights</h2>
      <p>
        You may request access, correction, or deletion of your information by emailing privacy@socialsafe.my. We respond within 30 days.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to privacy@socialsafe.my. We operate independently and follow platform policies and applicable laws.
      </p>
    </article>
  );
}
