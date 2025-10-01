import type { Metadata } from "next";
import { RecoveryForm } from "@/components/recovery-form";

export const metadata: Metadata = {
  title: "Contact — Social Safe",
  description: "Start your Social Safe account recovery case with our secure intake form.",
  alternates: { canonical: "https://www.socialsafe.my/contact" }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Start Your Recovery</h1>
        <p className="text-sm text-slate-600">
          We charge a RM 100 advance to open a case. This is non-refundable and covers analyst time and evidence preparation.
          You only pay the remaining success fee if we recover access.
        </p>
      </header>
      <RecoveryForm size="lg" />
    </div>
  );
}
