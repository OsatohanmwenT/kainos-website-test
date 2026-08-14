"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-paper-soft p-8">
        <p className="font-display text-xl">Thank you.</p>
        <p className="mt-2 text-sm text-ink-soft/70">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="kicker mb-2 block text-ink-soft/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="kicker mb-2 block text-ink-soft/60">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="kicker mb-2 block text-ink-soft/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="kicker mb-2 block text-ink-soft/60">
          What do you need to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
