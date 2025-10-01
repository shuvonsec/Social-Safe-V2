"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "socialsafe-consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    setVisible(!consent);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
      <p className="text-sm text-slate-600">
        We use a privacy-friendly, cookie-less tracker to understand page visits. No personal data is stored. By continuing, you
        consent to basic analytics.
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            window.localStorage.setItem(CONSENT_KEY, "declined");
            setVisible(false);
          }}
        >
          Decline
        </Button>
        <Button
          onClick={() => {
            window.localStorage.setItem(CONSENT_KEY, "granted");
            setVisible(false);
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
