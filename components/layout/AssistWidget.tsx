"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSIST_URL } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AssistWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [escalate, setEscalate] = useState(false);
  const [escalated, setEscalated] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const nextMessages = [...messages, { role: "user" as const, content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(ASSIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });
      if (!res.ok) {
        throw new Error("Failed");
      }
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }] as Message[]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn’t reach the assistant. You can escalate to a human specialist below."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Need quick guidance?</p>
            <button
              className="focus-ring text-xs text-slate-500"
              onClick={() => setOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>
          <div className="mt-3 max-h-48 space-y-3 overflow-y-auto" aria-live="polite">
            {messages.length === 0 ? (
              <p className="text-xs text-slate-500">
                Ask our internal assistant for tips. We never ask for passwords.
              </p>
            ) : (
              messages.map((message, index) => (
                <p
                  key={index}
                  className={`text-xs ${
                    message.role === "assistant" ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  <span className="font-semibold capitalize">{message.role}:</span> {message.content}
                </p>
              ))
            )}
          </div>
          <form
            className="mt-3 space-y-2"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <label className="sr-only" htmlFor="assist-input">
              Message
            </label>
            <textarea
              id="assist-input"
              className="w-full rounded-2xl border border-slate-200 p-2 text-sm"
              rows={2}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
            />
            <Button type="submit" size="sm" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
          <div className="mt-4 border-t border-slate-200 pt-3">
            <button
              type="button"
              className="text-xs font-semibold text-blue-600 underline-offset-4 hover:underline"
              onClick={() => setEscalate((prev) => !prev)}
            >
              {escalate ? "Hide human escalation" : "Escalate to human"}
            </button>
            {escalate ? (
              <form
                className="mt-3 space-y-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setEscalated(true);
                }}
              >
                <label className="sr-only" htmlFor="assist-email">
                  Email
                </label>
                <input
                  id="assist-email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 p-2 text-sm"
                  placeholder="Email for follow-up"
                />
                <Button type="submit" size="sm" variant="outline" className="w-full">
                  Request human support
                </Button>
                {escalated ? (
                  <p className="text-xs text-emerald-600">
                    Thank you. A specialist will reach out shortly.
                  </p>
                ) : null}
              </form>
            ) : null}
          </div>
        </div>
      ) : null}
      <Button
        type="button"
        variant="default"
        size="lg"
        className="shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
        {open ? "Close" : "Need help?"}
      </Button>
    </div>
  );
}
