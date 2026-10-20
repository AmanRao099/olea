"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to the newsletter provider.
        setStatus("Thank you — you're on the list.");
        e.currentTarget.reset();
      }}
    >
      <div className="flex items-end border-b border-white/30 focus-within:border-white">
        <input
          type="email"
          name="email"
          required
          placeholder="your.email"
          aria-label="Email address"
          autoComplete="email"
          className="w-full bg-transparent py-3 font-display text-2xl font-light text-white placeholder:text-white/30 focus:outline-none"
        />
        <button type="submit" aria-label="Subscribe" className="pb-3 pl-4 text-white/70 hover:text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-xs text-white/60">
        {status}
      </p>
    </form>
  );
}
