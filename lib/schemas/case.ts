import { z } from "zod";

export const platformOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "X / Twitter",
  "YouTube"
] as const;

export const urgencyOptions = ["Normal", "Priority"] as const;

const messageGuard = z
  .string()
  .max(2000, "Message is too long")
  .refine((value) => !/password/i.test(value), {
    message: "Please do not share passwords or recovery codes."
  });

export const createCaseSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
    phone: z.string().optional(),
    platform: z.enum(platformOptions),
    urgency: z.enum(urgencyOptions).default("Normal"),
    message: messageGuard,
    honeypot: z.string().optional(),
    transcript: z
      .array(
        z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string().max(1000)
        })
      )
      .optional()
  })
  .superRefine((data, ctx) => {
    if (data.honeypot && data.honeypot.trim().length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid submission",
        path: ["honeypot"]
      });
    }
  });

export type CreateCaseInput = z.infer<typeof createCaseSchema>;

export const notifyOpsSchema = z.object({
  caseId: z.string().optional(),
  email: z.string().email("Valid email required"),
  platform: z.string().optional(),
  transcript: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(1000)
      })
    )
    .optional()
});

export const assistSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(2000)
      })
    )
    .min(1),
  meta: z.record(z.any()).optional()
});
