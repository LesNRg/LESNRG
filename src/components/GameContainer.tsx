"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

type BoardEntry = { name: string; company: string; score: number };

export default function GameContainer() {
  const [won, setWon] = useState(false);
  const [survived, setSurvived] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [board, setBoard] = useState<BoardEntry[]>([]);
  const [form, setForm] = useState({ initials: "", name: "", email: "", building: "", company: "", services: "", otherService: "" });
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const gameStarted = useRef(false);
  const fireIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const notifyStart = useCallback(() => {
    if (!gameStarted.current) {
      gameStarted.current = true;
      window.dispatchEvent(new CustomEvent("game-started"));
    }
  }, []);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "GAME_WIN") { setFinalScore(e.data.score ?? 0); setSurvived(true); setWon(true); }
      if (e.data?.type === "GAME_LOSE") { setFinalScore(e.data.score ?? 0); setSurvived(false); setWon(true); }
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

  // Hold-to-fire: shoot immediately then repeat every 150 ms while held
  const startFire = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    notifyStart();
    iframeRef.current?.contentWindow?.postMessage({ type: "SHOOT" }, "*");
    fireIntervalRef.current = setInterval(() => {
      iframeRef.current?.contentWindow?.postMessage({ type: "SHOOT" }, "*");
    }, 150);
  }, [notifyStart]);

  const stopFire = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (fireIntervalRef.current) { clearInterval(fireIntervalRef.current); fireIntervalRef.current = null; }
  }, []);

  function tryAgain() {
    setWon(false); setSurvived(false); setSubmitted(false);
    setForm({ initials: "", name: "", email: "", building: "", company: "", services: "", otherService: "" });
    setBoard([]);
    gameStarted.current = false;
    if (fireIntervalRef.current) { clearInterval(fireIntervalRef.current); fireIntervalRef.current = null; }
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
        body: JSON.stringify({ name, company: form.company || form.building, score: finalScore }),
      }),
      fetch("https://formspree.io/f/mgollbvl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          initials: name, name: form.name, email: form.email, company: form.company, building: form.building,
          services: form.services === "Other" ? `Other: ${form.otherService}` : form.services,
          score: finalScore,
          _subject: `🏆 Game Result — ${finalScore} CFM@50pa — ${name}`,
          message: `CFM@50pa: ${finalScore} | Initials: ${name} | Name: ${form.name} | Affiliation: ${form.company} | Email: ${form.email} | Services: ${form.services === "Other" ? `Other: ${form.otherService}` : form.services || "none"} | Comment: ${form.building}`,
        }),
      }),
    ]);
    let data: BoardEntry[] = [];
    try {
      const res = await fetch("/api/scores", { cache: "no-store" });
      if (res.ok) data = await res.json();
    } catch { /* fall through */ }
    const myEntry: BoardEntry = { name, company: form.company || form.building, score: finalScore };
    const alreadyIn = data.some(e => e.name === name && e.score === finalScore);
    if (!alreadyIn) data = [myEntry, ...data];
    data.sort((a, b) => a.score - b.score);
    setBoard(data.slice(0, 10));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: "800px", touchAction: "manipulation" }} className="w-full">
      {/* Game area */}
      <div className="relative w-full rounded-xl overflow-hidden border-2 border-[#F5C500]/20 aspect-[800/1080] md:aspect-[800/700]">

        {/* Game iframe */}
        {!won && (
          <iframe
            ref={iframeRef}
            src="/beta/index.html?v=BETA3"
            className="w-full h-full border-0 block"
            title="LES NRG: The Game"
            allow="autoplay"
          />
        )}


        {/* Win overlay */}
        {won && (
          <div className="absolute inset-0 bg-[#111111]/95 overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          <div className="min-h-full flex items-center justify-center p-6">
            {!submitted ? (
              <div className="w-full max-w-sm">
                <p className="text-[#F5C500] text-4xl font-black mb-1 tabular-nums">{finalScore.toLocaleString()} <span className="text-2xl font-bold">CFM@50pa</span></p>
                <p className="text-white/40 text-xs mb-3">Lower is better — seal more leaks to reduce infiltration.</p>
                <h2 className="font-black text-white text-xl mb-5" style={{ letterSpacing: "-0.02em" }}>
                  Submit your results to get on the leaderboard.
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
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Name</label>
                    <input
                      className="input-field"
                      type="text" placeholder="Your name" required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Email (for prize entry)</label>
                    <input
                      className="input-field"
                      type="email" placeholder="your@email.com" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Affiliation</label>
                    <input
                      className="input-field"
                      type="text" placeholder="Company, school, firm..."
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Beta test comment</label>
                    <input
                      className="input-field"
                      type="text" placeholder="Feedback, bugs, thoughts..."
                      value={form.building}
                      onChange={e => setForm(f => ({ ...f, building: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Services interested in <span className="normal-case">(optional)</span></label>
                    <select
                      className="input-field"
                      value={form.services}
                      onChange={e => setForm(f => ({ ...f, services: e.target.value, otherService: "" }))}
                    >
                      <option value="">— Select a service —</option>
                      <option value="Large Building Blower Door">Large Building Blower Door</option>
                      <option value="Passive House Verification">Passive House Verification</option>
                      <option value="Energy Star for Homes Certification">Energy Star for Homes Certification</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {form.services === "Other" && (
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Please describe</label>
                      <input
                        className="input-field"
                        type="text" placeholder="Tell us what you need..."
                        value={form.otherService}
                        onChange={e => setForm(f => ({ ...f, otherService: e.target.value }))}
                      />
                    </div>
                  )}
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-2">
                    {submitting ? "Saving…" : "Submit score"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
                <p className="text-white/20 text-xs mt-3 leading-relaxed">
                  Terms apply. One prize per household. Valid for PA, NJ, or DE.
                </p>
              </div>
            ) : (
              /* ── Arcade leaderboard ── */
              <div className="w-full max-w-sm font-mono">
                <div className="text-center mb-4">
                  <p className="text-[#00ff41] text-xs tracking-[0.4em] animate-pulse">▶ LOWEST CFM@50pa ◀</p>
                  <p className="text-[#00ff41]/40 text-[10px] tracking-widest mt-1">THIS WEEK — LOWER IS BETTER</p>
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
                            {s.score.toLocaleString()}
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
          </div>
        )}
      </div>

      {/* Mobile controls — below game, well-spaced */}
      <div className="md:hidden flex justify-between items-center px-4 pt-3 pb-2 select-none">
        {/* Left: move */}
        <div className="flex gap-4">
          <button
            className="w-[88px] h-[88px] rounded-2xl bg-white/10 border border-white/20 text-white text-3xl font-bold active:bg-[#F5C500]/30 active:border-[#F5C500]/50"
            onTouchStart={e => { e.preventDefault(); notifyStart(); sendKey("ArrowLeft", true); }}
            onTouchEnd={e => { e.preventDefault(); sendKey("ArrowLeft", false); }}
            onTouchCancel={e => { e.preventDefault(); sendKey("ArrowLeft", false); }}
          >◀</button>
          <button
            className="w-[88px] h-[88px] rounded-2xl bg-white/10 border border-white/20 text-white text-3xl font-bold active:bg-[#F5C500]/30 active:border-[#F5C500]/50"
            onTouchStart={e => { e.preventDefault(); notifyStart(); sendKey("ArrowRight", true); }}
            onTouchEnd={e => { e.preventDefault(); sendKey("ArrowRight", false); }}
            onTouchCancel={e => { e.preventDefault(); sendKey("ArrowRight", false); }}
          >▶</button>
        </div>
        {/* Right: fire + jump */}
        <div className="flex gap-4 items-end">
          <button
            className="w-[88px] h-[88px] rounded-2xl bg-[#FF6B00] text-white text-sm font-black tracking-widest active:bg-[#FF6B00]/60"
            onTouchStart={startFire}
            onTouchEnd={stopFire}
            onTouchCancel={stopFire}
          >FIRE</button>
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-[88px] h-[88px] rounded-2xl bg-[#F5C500] text-[#111111] text-sm font-black tracking-widest active:bg-[#F5C500]/70"
              onTouchStart={e => {
                e.preventDefault(); notifyStart();
                iframeRef.current?.contentWindow?.postMessage({ type: "JUMP" }, "*");
              }}
            >JUMP</button>
            <span className="text-white/30 text-[10px]">tap ×2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
