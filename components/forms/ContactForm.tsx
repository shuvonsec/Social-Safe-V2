"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/FormField";
import { CASE_URL, OPS_URL } from "@/lib/constants";
import { caseSchema, platformOptions, urgencyOptions, type CaseInput } from "@/lib/schemas";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CaseInput>({
    resolver: zodResolver(caseSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      platform: "Instagram",
      urgency: "Normal",
      message: "",
      honey: ""
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus(null);
    setError(null);
    try {
      const res = await fetch(CASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          platform: values.platform,
          urgency: values.urgency,
          message: values.message
        })
      });
      if (!res.ok) {
        throw new Error("Case submission failed");
      }
      const data = await res.json();
      setStatus(`Case created: ${data.id}`);
      await fetch(OPS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseId: data.id, email: values.email, platform: values.platform })
      });
      form.reset();
    } catch (submissionError) {
      setError("We couldn’t submit your case. Please try again.");
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <FormField label="Full name" htmlFor="contact-name" error={form.formState.errors.name?.message}>
        <input
          type="text"
          {...form.register("name")}
          className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
          autoComplete="name"
        />
      </FormField>
      <FormField label="Email" htmlFor="contact-email" error={form.formState.errors.email?.message}>
        <input
          type="email"
          {...form.register("email")}
          className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
          autoComplete="email"
        />
      </FormField>
      <FormField
        label="Phone (optional)"
        htmlFor="contact-phone"
        helpText="Only used for urgent coordination."
        error={form.formState.errors.phone?.message}
      >
        <input
          type="tel"
          {...form.register("phone")}
          className="w-full rounded-2xl border border-slate-200 p-3 text-sm"
          autoComplete="tel"
        />
      </FormField>
      <FormField
        label="Platform"
        htmlFor="contact-platform"
        error={form.formState.errors.platform?.message}
      >
        <select
          {...form.register("platform")}
          className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm"
        >
          {platformOptions.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Urgency"
        htmlFor="contact-urgency"
        error={form.formState.errors.urgency?.message}
      >
        <select
          {...form.register("urgency")}
          className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm"
        >
          {urgencyOptions.map((urgency) => (
            <option key={urgency} value={urgency}>
              {urgency}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="What happened?"
        htmlFor="contact-message"
        helpText="Please do not include passwords, passcodes, or 2FA codes."
        error={form.formState.errors.message?.message}
      >
        <textarea
          {...form.register("message")}
          className="min-h-[120px] w-full rounded-2xl border border-slate-200 p-3 text-sm"
          placeholder="Share what changed, any emails from the platform, and what you’ve tried."
        />
      </FormField>
      <div className="hidden">
        <label htmlFor="contact-honey">Do not fill</label>
        <input id="contact-honey" type="text" {...form.register("honey")} tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" className="w-full">
        Start My Recovery
      </Button>
      {status ? (
        <p className="rounded-2xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">{status}</p>
      ) : null}
      {error ? (
        <p className="rounded-2xl bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>
      ) : null}
    </form>
  );
}
