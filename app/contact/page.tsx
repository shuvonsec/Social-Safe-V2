import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Social Safe",
  description:
    "Request Social Safe account recovery support. Share your case details securely and our analysts will respond within business hours.",
  alternates: {
    canonical: "https://www.socialsafe.my/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Talk to Social Safe</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Provide your details and we’ll triage the incident. We never request passwords or 2FA codes. For urgent cases, tap WhatsApp to chat with a specialist.
        </p>
        <p className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm">
          We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation. You only pay the remaining success fee if we recover access.
        </p>
      </section>
      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ContactForm />
        </div>
        <aside className="space-y-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900">Prefer messaging?</h2>
          <p>
            Reach us directly on WhatsApp during 9am–10pm MYT. Real humans respond with a step-by-step checklist tailored to your platform.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Message us on WhatsApp
          </a>
        </aside>
      </section>
      <WhatsAppCTA />
    </div>
  );
}
