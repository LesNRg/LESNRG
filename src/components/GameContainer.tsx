"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";

type BoardEntry = { name: string; company: string; score: number };

export default function GameContainer() {
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [board, setBoard] = useState<BoardEntry[]>([]);
  const [form, setForm] = useState({ initials: "", email: "", building: "" });
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
      { type: down ? "KEY_DOWN" : "KEY_UP", key }, "*"
    );
  }, []);

  function tryAgain() {
    setLost(false); setWon(false); setSubmitted(false);
    setForm({ initials: "", email: "", building: "" });
    setBoard([]);
    gameStarted.current = false;
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage({ type: "RESTART" }, "*");
    }, 50);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const name = form.initials.toUpperCase().slice(0, 3).padEnd(3, "_");
    await Promise.all([
      fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company: form.building, score: finalScore }),
      }),
      fetch("https://formspree.io/f/mgollbvl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          initials: name, email: form.email, building: form.building,
          score: finalScore,
          _subject: `🏆 Game Score — ${finalScore} pts — ${name}`,
          message: `Score: ${finalScore} | Initials: ${name} | Email: ${form.email} | Building: ${form.building}`,
        }),
      }),
    ]);
    const res = await fetch("/api/scores");
    const data = await res.json();
    setBoard(data);
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
            src="/beta/index.html?v=L2.3"
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
                Shoot the leaks to score — survive 2 minutes to win.
              </p>
              <button onClick={tryAgain} className="btn-primary justify-center w-full mb-3">
                Try again <ArrowRight size={16} />
              </button>
              <Link href="/services" className="block text-center text-white/30 text-xs hover:text-white/60 transition-colors">
                See our services →
              </Link>
            </div>
          </div>
        )}

        {/* Win overlay */}
        {won && (
          <div className="absolute inset-0 bg-[#111111]/95 flex items-center justify-center p-6 overflow-y-auto">
            {!submitted ? (
              <div className="w-full max-w-sm">
                <p className="text-[#F5C500] text-4xl font-black mb-1 tabular-nums">{finalScore} pts</p>
                <h2 className="font-black text-white text-xl mb-5" style={{ letterSpacing: "-0.02em" }}>
                  You survived! Enter your score.
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Initials (3 letters)</label>
                    <input
                      className="input-field uppercase tracking-[0.3em] text-center text-lg font-black"
                      type="text" maxLength={3} placeholder="AAA" required
                      value={form.initials}
                      onChange={e => setForm(f => ({ ...f, initials: e.target.value.replace(/[^a-zA-Z]/g, "") }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Favorite building</label>
                    <input
                      className="input-field"
                      type="text" placeholder="e.g. Empire State, your office..."
                      value={form.building}
                      onChange={e => setForm(f => ({ ...f, building: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Email (for prize entry)</label>
                    <input
                      className="input-field"
                      type="email" placeholder="optional"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-2">
                    {submitting ? "Saving…" : "Submit score"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
                <p className="text-white/20 text-xs mt-3 leading-relaxed">
                  Terms apply. One prize per household. Valid for PA, NJ, NY, or DE.
                </p>
              </div>
            ) : (
              /* ── Arcade leaderboard ── */
              <div className="w-full max-w-sm font-mono">
                <div className="text-center mb-4">
                  <p className="text-[#00ff41] text-xs tracking-[0.4em] animate-pulse">▶ HIGH SCORES ◀</p>
                  <p className="text-[#00ff41]/40 text-[10px] tracking-widest mt-1">THIS WEEK</p>
                </div>
                <div className="bg-black border border-[#00ff41]/25 rounded-lg overflow-hidden mb-4">
                  {board.length === 0 ? (
                    <p className="text-[#00ff41]/40 text-xs text-center py-4">NO SCORES YET</p>
                  ) : (
                    board.map((s, i) => {
                      const isMe = s.name === form.initials.toUpperCase().slice(0, 3).padEnd(3, "_");
                      return (
                        <div key={i} className={`flex items-center gap-3 px-4 py-2 text-xs border-b border-[#00ff41]/10 last:border-0 ${isMe ? "bg-[#00ff41]/8" : ""}`}>
                          <span className={`w-5 tabular-nums ${i === 0 ? "text-[#F5C500]" : i === 1 ? "text-white/50" : i === 2 ? "text-[#cd7f32]" : "text-[#00ff41]/30"}`}>
                            {i + 1}
                          </span>
                          <span className={`flex-1 tracking-widest ${isMe ? "text-[#F5C500]" : "text-[#00ff41]/80"}`}>
                            {s.name}
                          </span>
                          {s.company && (
                            <span className="text-[#00ff41]/30 text-[10px] truncate max-w-[80px]">{s.company}</span>
                          )}
                          <span className={`tabular-nums font-bold ${isMe ? "text-[#F5C500]" : "text-[#00ff41]"}`}>
                            {s.score}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
                <button onClick={tryAgain} className="w-full font-mono text-sm font-bold tracking-widest py-3 rounded-lg border border-[#F5C500]/60 text-[#F5C500] hover:bg-[#F5C500]/10 transition-colors">
                  ▶ PLAY AGAIN
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile controls */}
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
                e.preventDefault(); notifyStart();
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
