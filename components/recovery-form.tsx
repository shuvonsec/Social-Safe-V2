"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createCaseSchema, type CreateCaseInput, platformOptions, urgencyOptions } from "@/lib/schemas/case";
import { FormField } from "@/components/form-field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { notifyOps } from "@/lib/notify-ops";
import { createZodResolver } from "@/lib/zod-resolver";

export function RecoveryForm({ size = "md" }: { size?: "md" | "lg" }) {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const form = useForm<CreateCaseInput>({
    resolver: createZodResolver(createCaseSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      platform: "Instagram",
      urgency: "Normal",
      message: "",
      honeypot: ""
    }
  });

  const messageValue = form.watch("message");

  useEffect(() => {
    if (/password/i.test(messageValue ?? "")) {
      form.setError("message", {
        type: "manual",
        message: "Please do not share passwords or recovery codes."
      });
    } else {
      if (form.formState.errors.message?.type === "manual") {
        form.clearErrors("message");
      }
    }
  }, [messageValue, form]);

  async function onSubmit(values: CreateCaseInput) {
    setStatus(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_SOCIALSAFE_CASE_URL ?? "/api/cases";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error("Unable to create case");
      }
      const data = (await response.json()) as { id: string };
      setStatus({ type: "success", message: `Case created: ${data.id}` });
      void notifyOps({ caseId: data.id, email: values.email, platform: values.platform });
      form.reset({
        name: "",
        email: "",
        phone: "",
        platform: "Instagram",
        urgency: "Normal",
        message: "",
        honeypot: ""
      });
    } catch (error) {
      setStatus({ type: "error", message: "We couldn't submit your request. Please try again." });
      console.error("case submit error", error);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
      noValidate
      aria-label="Start your recovery"
    >
      <input type="text" hidden {...form.register("honeypot")} tabIndex={-1} autoComplete="off" />
      <FormField label="Full name" htmlFor="name" required error={form.formState.errors.name?.message}>
        <Input id="name" autoComplete="name" {...form.register("name")} required aria-required />
      </FormField>
      <FormField label="Email" htmlFor="email" required error={form.formState.errors.email?.message}>
        <Input id="email" type="email" autoComplete="email" {...form.register("email")} required aria-required />
      </FormField>
      <FormField
        label="Phone (optional)"
        htmlFor="phone"
        description="We never ask for passwords or security codes."
        error={form.formState.errors.phone?.message}
      >
        <Input id="phone" type="tel" autoComplete="tel" {...form.register("phone")} />
      </FormField>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Platform"
          htmlFor="platform"
          required
          error={form.formState.errors.platform?.message}
        >
          <Select id="platform" {...form.register("platform")}>
            {platformOptions.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Urgency" htmlFor="urgency" error={form.formState.errors.urgency?.message}>
          <Select id="urgency" {...form.register("urgency")}>
            {urgencyOptions.map((urgency) => (
              <option key={urgency} value={urgency}>
                {urgency}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField
        label="What happened?"
        htmlFor="message"
        required
        description="Do not include passwords or recovery codes."
        error={form.formState.errors.message?.message}
      >
        <Textarea id="message" rows={size === "lg" ? 6 : 5} {...form.register("message")} required aria-required />
      </FormField>
      <Button type="submit" className="w-full">
        Start My Recovery
      </Button>
      {status ? (
        <p
          className={`rounded-full px-4 py-2 text-center text-sm font-semibold ${
            status.type === "success" ? "bg-green-100 text-success" : "bg-red-100 text-red-600"
          }`}
          role={status.type === "error" ? "alert" : undefined}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
