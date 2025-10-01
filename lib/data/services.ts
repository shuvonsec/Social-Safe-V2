export const services = [
  {
    title: "Instagram Account Recovery",
    description: "Hacked, email changed, or disabled.",
    includedIn: ["Basic", "Standard", "Priority"]
  },
  {
    title: "Facebook Account/Page Recovery",
    description: "Owner verification, admin hijack remediation.",
    includedIn: ["Standard", "Priority"]
  },
  {
    title: "TikTok Account Recovery",
    description: "Locked, banned, or restricted.",
    includedIn: ["Standard", "Priority"]
  },
  {
    title: "X / Twitter Access Recovery",
    description: "Compromised login, suspended handles.",
    includedIn: ["Standard", "Priority"]
  },
  {
    title: "YouTube/Google Brand Recovery",
    description: "Channel hijacks, brand account access.",
    includedIn: ["Priority"]
  },
  {
    title: "Impersonation Takedown",
    description: "Remove fake profiles with evidence packs.",
    includedIn: ["Standard", "Priority"]
  },
  {
    title: "Shadowban Review",
    description: "Policy review to restore reach.",
    includedIn: ["Basic", "Standard", "Priority"]
  },
  {
    title: "2FA Setup & Hardening",
    description: "App-based 2FA, backup codes, hygiene.",
    includedIn: ["Standard", "Priority"]
  }
] as const;

export const testimonials = [
  {
    name: "Aisyah, Lifestyle Creator",
    quote:
      "Social Safe guided me from panic to recovery within days without ever asking for my password."
  },
  {
    name: "Hafiz, SME Owner",
    quote:
      "Their analysts understood Facebook Business Manager inside out and helped us secure all admins."
  },
  {
    name: "Li Mei, Agency Lead",
    quote:
      "We send difficult cases to Social Safe because they operate transparently and lawfully."
  }
] as const;

export const pricingTiers = [
  {
    name: "Basic",
    subtitle: "DIY + AI",
    successFee: 199,
    features: [
      "AI assistant guidance",
      "Security checklist",
      "Email template pack",
      "Shadowban review basics"
    ]
  },
  {
    name: "Standard",
    subtitle: "Most cases",
    successFee: 399,
    features: [
      "One platform recovery",
      "Analyst updates 24–72h",
      "Ownership verification support",
      "Post-recovery hardening",
      "Impersonation takedown included where marked"
    ]
  },
  {
    name: "Priority",
    subtitle: "Urgent & business",
    successFee: 899,
    features: [
      "Fast-track queue under 24h",
      "Multi-platform support",
      "Dedicated case manager",
      "Impersonation takedown pack"
    ]
  }
] as const;

export const team = [
  {
    name: "Shuvonsec",
    role: "Founder & CEO",
    bio: "Cybersecurity researcher, ethical hacker & bug bounty hunter with global recognition."
  }
] as const;
