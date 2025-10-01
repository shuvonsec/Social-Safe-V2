import { randomUUID } from "crypto";
import type { CaseInput } from "../schemas";

type CaseRecord = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone?: string;
  platform: CaseInput["platform"];
  urgency: CaseInput["urgency"];
  message: string;
  status: "new" | "in_progress" | "resolved";
  locale: string;
};

const cases = new Map<string, CaseRecord>();

export async function createCase(input: CaseInput) {
  const id = randomUUID();
  const record: CaseRecord = {
    id,
    createdAt: new Date(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    platform: input.platform,
    urgency: input.urgency,
    message: input.message,
    status: "new",
    locale: "en-MY"
  };
  cases.set(id, record);
  return record;
}

export function getCase(id: string) {
  return cases.get(id);
}
