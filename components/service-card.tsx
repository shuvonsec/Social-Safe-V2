"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  includedIn: readonly string[];
}

export function ServiceCard({ title, description, includedIn }: ServiceCardProps) {
  const tierLabel = `Included in: ${includedIn.join("/")}`;
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
      <div className="mt-auto">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-primary">
          {tierLabel}
        </span>
      </div>
    </motion.article>
  );
}
