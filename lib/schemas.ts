import { z } from "zod";

export const platformOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "X / Twitter",
  "YouTube"
] as const;

export const urgencyOptions = ["Normal", "Priority"] as const;

export const caseSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z
      .string()
      .optional()
      .transform((val) => (val ? val.trim() : val)),
    platform: z.enum(platformOptions, {
      errorMap: () => ({ message: "Choose a platform" })
    }),
    urgency: z.enum(urgencyOptions).default("Normal"),
    message: z
      .string()
      .min(10, "Tell us what happened")
      .refine(
        (value) => !/password|passcode|otp/i.test(value),
        "For your security, please do not share passwords or codes."
      ),
    transcript: z
      .array(
        z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string().min(1)
        })
      )
      .optional(),
    honey: z.string().optional().default("")
  })
  .superRefine((data, ctx) => {
    if (data.honey && data.honey.trim().length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["honey"],
        message: "Invalid submission"
      });
    }
  });

export type CaseInput = z.infer<typeof caseSchema>;

export const notifyOpsSchema = z.object({
  caseId: z.string().optional(),
  email: z.string().email(),
  platform: z.string().optional(),
  transcript: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string()
      })
    )
    .optional()
});

export const assistSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1)
      })
    )
    .min(1),
  meta: z.record(z.unknown()).optional()
});
