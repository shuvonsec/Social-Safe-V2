"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Instagram hacked", query: "Instagram hacked" },
  { label: "Business account disabled", query: "Business account disabled" },
  { label: "Need account appeal", query: "Need account appeal" },
  { label: "Impersonation takedown", query: "Impersonation takedown" }
];

export function WhatsAppCTA() {
  const baseUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/";

  return (
    <section
      id="whatsapp"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 p-8 text-white shadow-xl"
      aria-labelledby="whatsapp-heading"
    >
      <div className="absolute right-0 top-0 h-48 w-48 translate-x-20 -translate-y-20 rounded-full bg-white/10" aria-hidden />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
            9am–10pm MYT
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/15 p-3">
              <MessageCircle aria-hidden className="h-8 w-8" />
            </span>
            <div>
              <h2 id="whatsapp-heading" className="text-2xl font-semibold">
                Chat with a specialist on WhatsApp
              </h2>
              <p className="text-sm text-blue-100">
                Real humans answer within business hours. Share what happened and we’ll guide your next steps.
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-blue-100">
            Typical response under 30 minutes during 9am–10pm MYT.
          </p>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((chip) => (
              <Button
                key={chip.label}
                variant="subtle"
                size="sm"
                asChild
                className="bg-white/20 text-white hover:bg-white/30"
              >
                <a
                  href={`${baseUrl}?text=${encodeURIComponent(chip.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chip.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
            <a href={baseUrl} target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
