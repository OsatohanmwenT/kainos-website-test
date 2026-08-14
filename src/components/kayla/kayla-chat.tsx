"use client";

import { useEffect, useRef, useState } from "react";
import { examplePrompts } from "@/lib/content";

type Message = { role: "user" | "assistant"; content: string };

function KaylaAvatar() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-display text-paper">
      K
    </span>
  );
}

export function KaylaChat({ initialPrompt }: { initialPrompt?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentInitialPrompt = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (initialPrompt && !sentInitialPrompt.current) {
      sentInitialPrompt.current = true;
      send(initialPrompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrompt]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Coming soon — Kayla isn't live yet, but she's on her way." },
      ]);
      setLoading(false);
    }, 500);
  }

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-6 py-10">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center pt-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-paper">
                K
              </span>
              <h1 className="mt-6 font-display text-2xl">Ask Kayla</h1>
              <p className="mt-2 max-w-sm text-sm text-ink-soft/60">
                Nigeria&apos;s economic data, in plain language. Ask a question to get
                started.
              </p>

              <div className="mt-8 flex w-full max-w-lg flex-col gap-2">
                {examplePrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-xl border border-line px-4 py-3 text-left text-sm text-ink-soft/80 transition-colors hover:bg-paper-soft"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && <KaylaAvatar />}
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl bg-ink px-4 py-3 text-sm text-paper"
                        : "max-w-[80%] text-sm leading-relaxed text-ink"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <KaylaAvatar />
                  <div className="flex items-center gap-1 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-soft/40 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-soft/40 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-soft/40" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-line bg-paper px-6 py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-line bg-paper-soft px-4 py-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Kayla about Nigeria's economy…"
            className="flex-1 bg-transparent py-2 text-sm text-ink placeholder:text-ink-soft/40 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-opacity disabled:opacity-30"
          >
            →
          </button>
        </form>
      </div>
    </div>
  );
}
