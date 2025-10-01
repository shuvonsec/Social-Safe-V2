"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleEscalate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    try {
      const endpoint = process.env.NEXT_PUBLIC_SOCIALSAFE_ASSIST_URL ?? "/api/assist";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "user", content: message.trim() },
            { role: "assistant", content: "Escalate to human" }
          ],
          meta: { source: "chat-widget" }
        })
      });
      if (response.ok) {
        const data = (await response.json()) as { reply: string };
        setStatus(data.reply);
      } else {
        setStatus("We'll connect you to a human analyst shortly.");
      }
    } catch (error) {
      setStatus("We'll connect you to a human analyst shortly.");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        type="button"
        variant="default"
        size="lg"
        className="shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden />
        Need help?
      </Button>
      {open ? (
        <div className="mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <h2 className="text-base font-semibold">Social Safe Assistant</h2>
          <p className="mt-1 text-xs text-slate-500">For urgent cases, use WhatsApp or the recovery form. No passwords.</p>
          <form className="mt-3 space-y-3" onSubmit={handleEscalate}>
            <Textarea
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Summarise your issue"
              aria-label="Chat message"
            />
            <Button type="submit" className="w-full">
              Escalate to human
            </Button>
          </form>
          {status ? <p className="mt-2 text-xs text-slate-500">{status}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
