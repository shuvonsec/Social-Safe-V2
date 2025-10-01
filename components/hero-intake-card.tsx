"use client";

import { motion } from "framer-motion";
import { RecoveryForm } from "@/components/recovery-form";

export function HeroIntakeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-blue-100 bg-white/70 p-8 shadow-lg backdrop-blur"
    >
      <h2 className="text-xl font-semibold">Start Your Recovery</h2>
      <p className="mt-2 text-sm text-slate-600">
        Submit the details of what happened. Our analysts respond quickly without ever requesting your password.
      </p>
      <div className="mt-6">
        <RecoveryForm />
      </div>
    </motion.div>
  );
}
