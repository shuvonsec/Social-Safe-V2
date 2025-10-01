"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "socialsafe-consent";

type ConsentState = "unknown" | "accepted" | "declined";

export function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("unknown");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (stored) {
      setState(stored);
    }
  }, []);

  if (state !== "unknown") {
    return null;
  }

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setState("accepted");
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setState("declined");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-3xl rounded-t-2xl border border-slate-200 bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          We use a privacy-friendly, cookie-less analytics tool to understand page views. No personal data is stored.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="subtle" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
