"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BUSINESS_HOURS_BADGE, WHATSAPP_URL } from "@/lib/constants";

const quickLinks = [
  "Instagram hacked",
  "Business account disabled",
  "Need account appeal",
  "Impersonation takedown"
];

export function WhatsAppCTA() {
  return (
    <section
      aria-labelledby="whatsapp-support"
      className="rounded-2xl bg-whatsapp-gradient p-8 shadow-soft"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-600">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>{BUSINESS_HOURS_BADGE}</span>
          </div>
          <div>
            <h2 id="whatsapp-support" className="text-2xl font-bold text-slate-900">
              Chat with a specialist on WhatsApp
            </h2>
            <p className="text-sm text-slate-700">
              Real humans answer within business hours. Share what happened and we’ll guide your next steps.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Typical response under 30 minutes during 9am–10pm MYT.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((label) => {
              const url = `${WHATSAPP_URL}?text=${encodeURIComponent(label)}`;
              return (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-white/90"
                >
                  <a href={url} target="_blank" rel="noreferrer noopener">
                    {label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <motion.div
          className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold text-slate-900">Need hands-on help?</p>
          <p className="mt-2 text-sm text-slate-600">
            Our recovery analysts are on standby to triage your case and start evidence prep.
          </p>
          <Button asChild className="mt-6 w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
              Message us on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
