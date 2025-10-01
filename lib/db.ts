import { randomUUID } from "crypto";
import type { CreateCaseInput } from "@/lib/schemas/case";

export type CaseRecord = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone?: string;
  platform: string;
  urgency: string;
  message: string;
  status: "new" | "in_progress" | "closed";
  locale: string;
};

const cases: CaseRecord[] = [];

export async function createCase(data: Omit<CreateCaseInput, "honeypot"> & { locale?: string }) {
  const caseRecord: CaseRecord = {
    id: randomUUID(),
    createdAt: new Date(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    platform: data.platform,
    urgency: data.urgency,
    message: data.message,
    status: "new",
    locale: data.locale ?? "en-MY"
  };
  cases.push(caseRecord);
  return caseRecord;
}

export async function listCases() {
  return cases;
}
