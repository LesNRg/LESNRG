"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Trophy, CheckCircle, Flame } from "lucide-react";
import Link from "next/link";

export default function GameContainer() {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "GAME_WIN") setWon(true);
      if (e.data?.type === "GAME_LOSE") setLost(true);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("https://formspree.io/f/mgollbvl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        address: form.address,
        _subject: "🏆 Game Winner — Enter to Win Entry",
        message: `Game winner entry! Name: ${form.name} | Email: ${form.email} | Property: ${form.address}`,
      }),
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden border-2 border-[#F5C500]/20" style={{ aspectRatio: "800/700", maxWidth: "800px" }}>

      {/* Game iframe */}
      {!won && !lost && (
        <iframe
          src="/beta/index.html?v=5.18"
          className="w-full h-full border-0 block"
          title="LES NRG: The Game"
          allow="autoplay"
        />
      )}

      {/* Lose overlay */}
      {lost && (
        <div className="absolute inset-0 bg-[#111111]/95 flex items-center justify-center p-8">
          <div className="text-center max-w-sm">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Flame size={18} className="text-[#F5C500]" />
            </div>
            <h2 className="font-black text-white text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
              The house won this time.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              If this house seems familiar, we can help. Check out our full list of services.
            </p>
            <Link href="/services" className="btn-primary justify-center">
              See our services
              <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => setLost(false)}
              className="block w-full text-center text-white/30 text-xs mt-5 hover:text-white/60 transition-colors"
            >
              Try again →
            </button>
          </div>
        </div>
      )}

      {/* Win overlay */}
      {won && (
        <div className="absolute inset-0 bg-[#111111]/95 flex items-center justify-center p-8">
          {!submitted ? (
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#F5C500] flex items-center justify-center shrink-0">
                  <Trophy size={18} className="text-[#111111]" />
                </div>
                <h2 className="font-black text-white text-2xl" style={{ letterSpacing: "-0.02em" }}>
                  You escaped!
                </h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                You beat the leaky house. Fill in your details below to enter to win a free blower door test.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Property address"
                  required
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center mt-2"
                >
                  {submitting ? "Submitting…" : "Enter to win"}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </form>
              <p className="text-white/25 text-xs mt-4 leading-relaxed">
                Terms apply. One prize per household. Valid for residential properties in PA, NJ, NY, or DE.
              </p>
            </div>
          ) : (
            <div className="text-center max-w-sm">
              <div className="w-12 h-12 rounded-full bg-[#F5C500] flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={22} className="text-[#111111]" />
              </div>
              <h2 className="font-black text-white text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
                We&apos;ll be in touch!
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                You&apos;re entered. We&apos;ll be in touch if you win. Keep an eye on your inbox.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
