"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Trophy, CheckCircle, Flame } from "lucide-react";
import Link from "next/link";

export default function GameContainer() {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const gameStarted = useRef(false);
  const notifyStart = useCallback(() => {
    if (!gameStarted.current) {
      gameStarted.current = true;
      window.dispatchEvent(new CustomEvent("game-started"));
    }
  }, []);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "GAME_WIN") { setFinalScore(e.data.score ?? 0); setWon(true); }
      if (e.data?.type === "GAME_LOSE") { setFinalScore(e.data.score ?? 0); setLost(true); }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const prevent = (e: TouchEvent) => { if (e.touches.length > 1) e.preventDefault(); };
    document.addEventListener("touchstart", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });
    return () => {
      document.removeEventListener("touchstart", prevent);
      document.removeEventListener("touchmove", prevent);
    };
  }, []);

  const sendKey = useCallback((key: string, down: boolean) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: down ? "KEY_DOWN" : "KEY_UP", key },
      "*"
    );
  }, []);

  function tryAgain() {
    setLost(false);
    setWon(false);
    setSubmitted(false);
    setForm({ name: "", email: "", company: "" });
    gameStarted.current = false;
    // Brief delay so iframe is back in DOM before we send RESTART
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage({ type: "RESTART" }, "*");
    }, 50);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("https://formspree.io/f/mgollbvl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        score: finalScore,
        _subject: `🏆 Game Winner — Score: ${finalScore}`,
        message: `Game winner! Name: ${form.name} | Email: ${form.email} | Company: ${form.company} | Score: ${finalScore}`,
      }),
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: "800px", touchAction: "manipulation" }} className="w-full">
      {/* Game area */}
      <div className="relative w-full rounded-xl overflow-hidden border-2 border-[#F5C500]/20 aspect-[800/1080] md:aspect-[800/700]">

        {/* Game iframe */}
        {!won && !lost && (
          <iframe
            ref={iframeRef}
            src="/beta/index.html?v=L2.1"
            className="w-full h-full border-0 block"
            title="LES NRG: The Game"
            allow="autoplay"
          />
        )}

        {/* Lose overlay */}
        {lost && (
          <div className="absolute inset-0 bg-[#111111]/95 flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Flame size={18} className="text-[#F5C500]" />
              </div>
              <h2 className="font-black text-white text-2xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                The house won this time.
              </h2>
              <p className="text-[#F5C500] text-3xl font-black mb-1">{finalScore} pts</p>
              <p className="text-white/50 text-sm mb-8">
                Shoot the leaks to score — earn enough points and beat the 2-minute timer.
              </p>
              <button onClick={tryAgain} className="btn-primary justify-center w-full mb-3">
                Try again
                <ArrowRight size={16} />
              </button>
              <Link href="/services" className="block text-center text-white/30 text-xs hover:text-white/60 transition-colors">
                See our services →
              </Link>
            </div>
          </div>
        )}

        {/* Win overlay */}
        {won && (
          <div className="absolute inset-0 bg-[#111111]/95 flex items-center justify-center p-8">
            {!submitted ? (
              <div className="w-full max-w-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F5C500] flex items-center justify-center shrink-0">
                    <Trophy size={18} className="text-[#111111]" />
                  </div>
                  <h2 className="font-black text-white text-2xl" style={{ letterSpacing: "-0.02em" }}>
                    You survived!
                  </h2>
                </div>
                <p className="text-[#F5C500] text-4xl font-black mb-1">{finalScore} pts</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  You made it through 2 minutes. Enter your details to get on the leaderboard and enter to win a free blower door test.
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
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center mt-2"
                  >
                    {submitting ? "Submitting…" : "Submit score"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
                <button onClick={tryAgain} className="block w-full text-center text-white/25 text-xs mt-4 hover:text-white/50 transition-colors">
                  Play again →
                </button>
                <p className="text-white/20 text-xs mt-3 leading-relaxed">
                  Terms apply. One prize per household. Valid for residential properties in PA, NJ, NY, or DE.
                </p>
              </div>
            ) : (
              <div className="text-center max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#F5C500] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={22} className="text-[#111111]" />
                </div>
                <h2 className="font-black text-white text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                  Score submitted!
                </h2>
                <p className="text-[#F5C500] text-3xl font-black mb-3">{finalScore} pts</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  You&apos;re on the board. We&apos;ll be in touch if you win.
                </p>
                <button onClick={tryAgain} className="btn-primary justify-center w-full">
                  Play again
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile controls — outside the iframe so they're never clipped */}
      <div className="md:hidden flex justify-between items-center px-2 pt-3 pb-1">
        <div className="flex gap-3">
          <button
            className="w-[104px] h-[104px] rounded-2xl bg-white/10 text-white text-2xl font-bold active:bg-[#F5C500]/30 select-none"
            onTouchStart={e => { e.preventDefault(); notifyStart(); sendKey("ArrowLeft", true); }}
            onTouchEnd={e => { e.preventDefault(); sendKey("ArrowLeft", false); }}
            onTouchCancel={e => { e.preventDefault(); sendKey("ArrowLeft", false); }}
          >◀</button>
          <button
            className="w-[104px] h-[104px] rounded-2xl bg-white/10 text-white text-2xl font-bold active:bg-[#F5C500]/30 select-none"
            onTouchStart={e => { e.preventDefault(); notifyStart(); sendKey("ArrowRight", true); }}
            onTouchEnd={e => { e.preventDefault(); sendKey("ArrowRight", false); }}
            onTouchCancel={e => { e.preventDefault(); sendKey("ArrowRight", false); }}
          >▶</button>
        </div>
        <div className="flex gap-2 items-start">
          <button
            className="w-[104px] h-[104px] rounded-2xl bg-[#FF6B00] text-white text-sm font-black tracking-wide active:bg-[#FF6B00]/60 select-none"
            onTouchStart={e => { e.preventDefault(); notifyStart(); iframeRef.current?.contentWindow?.postMessage({ type: "SHOOT" }, "*"); }}
          >FIRE</button>
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-[104px] h-[104px] rounded-2xl bg-[#F5C500] text-[#111111] text-sm font-black tracking-wide active:bg-[#F5C500]/70 select-none"
              onTouchStart={e => {
                e.preventDefault();
                notifyStart();
                iframeRef.current?.contentWindow?.postMessage({ type: "JUMP" }, "*");
              }}
            >JUMP</button>
            <span className="text-white/30 text-[10px]">tap twice to double jump</span>
          </div>
        </div>
      </div>
    </div>
  );
}
