"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

type GamePhase = "splash" | "playing" | "gameover";
type BoardEntry = { name: string; company: string; score: number };

function lockLandscape() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (screen.orientation as any)?.lock?.("landscape").catch(() => {});
  } catch {}
}
function unlockOrientation() {
  try {
    screen.orientation?.unlock?.();
  } catch {}
}
function lockPortrait() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (screen.orientation as any)?.lock?.("portrait").catch(() => {});
  } catch {}
}
function requestFullscreen() {
  try {
    const el = document.documentElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const req = (el as any).requestFullscreen ?? (el as any).webkitRequestFullscreen ?? (el as any).mozRequestFullScreen;
    req?.call(el, { navigationUI: "hide" })?.catch?.(() => {});
  } catch {}
}
function exitFullscreen() {
  try {
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  } catch {}
}

export default function GameContainer() {
  const [phase, setPhase] = useState<GamePhase>("splash");
  const [survived, setSurvived] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [board, setBoard] = useState<BoardEntry[]>([]);
  const [form, setForm] = useState({ initials: "", name: "", email: "", building: "", company: "", services: "", otherService: "" });
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [waitingForLandscape, setWaitingForLandscape] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
      if (e.data?.type === "GAME_WIN") {
        setFinalScore(e.data.score ?? 0);
        setSurvived(true);
        setPhase("gameover");
        lockPortrait();
        exitFullscreen();
      }
      if (e.data?.type === "GAME_LOSE") {
        setFinalScore(e.data.score ?? 0);
        setSurvived(false);
        setPhase("gameover");
        lockPortrait();
        exitFullscreen();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const mobileMq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const orientMq = window.matchMedia("(orientation: landscape)");
    setIsMobileDevice(mobileMq.matches);
    setIsLandscape(orientMq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsLandscape(e.matches);
      // Reset viewport scale on rotation — iOS Safari can carry over incorrect zoom
      const mv = document.querySelector('meta[name=viewport]') as HTMLMetaElement | null;
      if (mv) mv.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    };
    orientMq.addEventListener("change", handler);
    return () => orientMq.removeEventListener("change", handler);
  }, []);

  // Auto-start once phone rotates to landscape
  useEffect(() => {
    if (isLandscape && waitingForLandscape) {
      setWaitingForLandscape(false);
      gameStarted.current = false;
      notifyStart();
      setPhase("playing");
    }
  }, [isLandscape, waitingForLandscape, notifyStart]);


  useEffect(() => {
    // During gameplay lock all touch gestures (prevents pinch-zoom + scroll on overlay).
    // Outside gameplay only block multi-touch pinch.
    const prevent = (e: TouchEvent) => {
      if (phase === "playing" || e.touches.length > 1) e.preventDefault();
    };
    // iOS Safari fires gesturestart/change/end for pinch-zoom — block those too
    const blockGesture = (e: Event) => e.preventDefault();
    document.addEventListener("touchstart", prevent, { passive: false });
    document.addEventListener("touchmove", prevent, { passive: false });
    document.addEventListener("gesturestart", blockGesture, { passive: false } as EventListenerOptions);
    document.addEventListener("gesturechange", blockGesture, { passive: false } as EventListenerOptions);
    document.addEventListener("gestureend", blockGesture, { passive: false } as EventListenerOptions);
    return () => {
      document.removeEventListener("touchstart", prevent);
      document.removeEventListener("touchmove", prevent);
      document.removeEventListener("gesturestart", blockGesture);
      document.removeEventListener("gesturechange", blockGesture);
      document.removeEventListener("gestureend", blockGesture);
    };
  }, [phase]);


  // Native non-passive touch lock on the mobile overlay itself — iOS Safari ignores
  // user-scalable=no, so we must preventDefault directly on the element.
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const block = (e: TouchEvent) => e.preventDefault();
    el.addEventListener("touchstart", block, { passive: false });
    el.addEventListener("touchmove", block, { passive: false });
    return () => {
      el.removeEventListener("touchstart", block);
      el.removeEventListener("touchmove", block);
    };
  });

  function startGame() {
    requestFullscreen();
    lockLandscape();
    if (isMobileDevice && !isLandscape) {
      // Portrait on mobile: wait for rotation, then auto-start
      setWaitingForLandscape(true);
      return;
    }
    gameStarted.current = false;
    notifyStart();
    setPhase("playing");
  }

  const sendKey = useCallback((key: string, down: boolean) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: down ? "KEY_DOWN" : "KEY_UP", key }, "*"
    );
  }, []);

  const startFire = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    notifyStart();
    iframeRef.current?.contentWindow?.postMessage({ type: "SHOOT" }, "*");
    fireIntervalRef.current = setInterval(() => {
      iframeRef.current?.contentWindow?.postMessage({ type: "SHOOT" }, "*");
    }, 150);
  }, [notifyStart]);

  const stopFire = useCallback(() => {
    if (fireIntervalRef.current) { clearInterval(fireIntervalRef.current); fireIntervalRef.current = null; }
  }, []);

  function tryAgain() {
    setPhase("splash");
    setWaitingForLandscape(false);
    setSurvived(false);
    setSubmitted(false);
    setForm({ initials: "", name: "", email: "", building: "", company: "", services: "", otherService: "" });
    setBoard([]);
    gameStarted.current = false;
    if (fireIntervalRef.current) { clearInterval(fireIntervalRef.current); fireIntervalRef.current = null; }
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
          initials: name, name: form.name, email: form.email, building: form.building,
          score: finalScore,
          _subject: `🏆 Game Result — ${finalScore} CFM@50pa — ${name}`,
          message: `CFM@50pa: ${finalScore} | Initials: ${name} | Name: ${form.name} | Email: ${form.email} | Comment: ${form.building}`,
        }),
      }),
    ]);
    let data: BoardEntry[] = [];
    try {
      const res = await fetch("/api/scores", { cache: "no-store" });
      if (res.ok) data = await res.json();
    } catch { /* fall through */ }
    const myEntry: BoardEntry = { name, company: form.building, score: finalScore };
    const alreadyIn = data.some(e => e.name === name && e.score === finalScore);
    if (!alreadyIn) data = [myEntry, ...data];
    data.sort((a, b) => a.score - b.score);
    setBoard(data.slice(0, 10));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: "800px", touchAction: "manipulation" }} className="w-full">

      {/* ── Mobile fullscreen overlay — only during active play ── */}
      {isMobileDevice && phase === "playing" && (
        <div ref={overlayRef} className="fixed inset-0 z-[9999] bg-[#0a0a0a]" style={{ touchAction: "none" }}>
          <iframe
            ref={iframeRef}
            src="/beta/index.html?v=BETA20"
            className="w-full h-full border-0 block"
            title="LES NRG: The Game"
            allow="autoplay; screen-wake-lock; screen-orientation"
          />
          {/* Mobile controls — only shown in landscape */}
          {isLandscape && <div className="absolute inset-0 pointer-events-none select-none z-10">
            <div className="absolute flex gap-3 pointer-events-auto" style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", left: "max(1rem, env(safe-area-inset-left))" }}>
              <button
                className="w-[4.8rem] h-[4.8rem] rounded-full bg-white/10 border border-white/15 text-white/60 text-xl active:bg-white/25 active:border-white/30"
                style={{ touchAction: "none" }}
                onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); notifyStart(); sendKey("ArrowLeft", true); }}
                onPointerUp={() => sendKey("ArrowLeft", false)}
                onPointerCancel={() => sendKey("ArrowLeft", false)}
              >◀</button>
              <button
                className="w-[4.8rem] h-[4.8rem] rounded-full bg-white/10 border border-white/15 text-white/60 text-xl active:bg-white/25 active:border-white/30"
                style={{ touchAction: "none" }}
                onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); notifyStart(); sendKey("ArrowRight", true); }}
                onPointerUp={() => sendKey("ArrowRight", false)}
                onPointerCancel={() => sendKey("ArrowRight", false)}
              >▶</button>
            </div>
            <div className="absolute flex gap-3 items-end pointer-events-auto" style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", right: "max(1rem, env(safe-area-inset-right))" }}>
              <button
                className="w-[4.8rem] h-[4.8rem] rounded-full bg-[#FF6B00]/25 border border-[#FF6B00]/35 text-white/70 text-[11px] font-black tracking-widest active:bg-[#FF6B00]/50"
                style={{ touchAction: "none" }}
                onPointerDown={startFire} onPointerUp={stopFire} onPointerCancel={stopFire}
              >FIRE</button>
              <div className="flex flex-col items-center gap-0.5">
                <button
                  className="w-[4.8rem] h-[4.8rem] rounded-full bg-[#F5C500]/20 border border-[#F5C500]/30 text-[#F5C500]/70 text-[11px] font-black tracking-widest active:bg-[#F5C500]/45"
                  style={{ touchAction: "none" }}
                  onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); notifyStart(); iframeRef.current?.contentWindow?.postMessage({ type: "JUMP" }, "*"); }}
                >JUMP</button>
                <span className="text-white/20 text-[9px]">tap ×2</span>
              </div>
            </div>
          </div>}
        </div>
      )}

      {/* ── Mobile fullscreen gameover ── */}
      {isMobileDevice && phase === "gameover" && (
        <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] overflow-y-auto" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" } as React.CSSProperties}>
          <div className="min-h-full flex items-center justify-center p-6">
            {!submitted ? (
              <div className="w-full max-w-sm">
                <p className="text-[#F5C500] text-4xl font-black mb-1 tabular-nums">{finalScore.toLocaleString()} <span className="text-2xl font-bold">CFM@50pa</span></p>
                <p className="text-white/40 text-xs mb-3">Lower is better — seal more leaks to reduce infiltration.</p>
                <h2 className="font-black text-white text-xl mb-5" style={{ letterSpacing: "-0.02em" }}>Submit your results to get on the leaderboard.</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Initials (3 letters)</label>
                    <input className="input-field uppercase tracking-[0.3em] text-center text-lg font-black" type="text" maxLength={3} placeholder="AAA" required value={form.initials} onChange={e => setForm(f => ({ ...f, initials: e.target.value.replace(/[^a-zA-Z]/g, "") }))} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Name</label>
                    <input className="input-field" type="text" placeholder="Your name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Email (for prize entry)</label>
                    <input className="input-field" type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Beta test comment</label>
                    <input className="input-field" type="text" placeholder="Feedback, bugs, thoughts..." value={form.building} onChange={e => setForm(f => ({ ...f, building: e.target.value }))} />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-2">
                    {submitting ? "Saving…" : "Submit score"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
                <button onClick={tryAgain} className="w-full font-mono text-sm font-bold tracking-widest py-2.5 rounded-lg border border-white/15 text-white/40 hover:text-white/60 hover:border-white/30 transition-colors mt-2">▶ TRY AGAIN</button>
                <p className="text-white/20 text-xs mt-3 leading-relaxed">Terms apply. One prize per household. Valid for PA, NJ, or DE.</p>
              </div>
            ) : (
              <div className="w-full max-w-sm font-mono">
                <div className="text-center mb-4">
                  <p className="text-[#00ff41] text-xs tracking-[0.4em] animate-pulse">▶ LOWEST CFM@50pa ◀</p>
                  <p className="text-[#00ff41]/40 text-[10px] tracking-widest mt-1">THIS WEEK — LOWER IS BETTER</p>
                </div>
                <div className="bg-black border border-[#00ff41]/25 rounded-lg overflow-hidden mb-4">
                  {board.length === 0 ? (
                    <p className="text-[#00ff41]/40 text-xs text-center py-4">NO SCORES YET</p>
                  ) : board.map((s, i) => {
                    const isMe = s.name === form.initials.toUpperCase().slice(0, 3).padEnd(3, "_");
                    return (
                      <div key={i} className={`flex items-center gap-3 px-4 py-2 text-xs border-b border-[#00ff41]/10 last:border-0 ${isMe ? "bg-[#00ff41]/8" : ""}`}>
                        <span className={`w-5 tabular-nums ${i === 0 ? "text-[#F5C500]" : i === 1 ? "text-white/50" : i === 2 ? "text-[#cd7f32]" : "text-[#00ff41]/30"}`}>{i + 1}</span>
                        <span className={`flex-1 tracking-widest ${isMe ? "text-[#F5C500]" : "text-[#00ff41]/80"}`}>{s.name}</span>
                        {s.company && <span className="text-[#00ff41]/30 text-[10px] truncate max-w-[80px]">{s.company}</span>}
                        <span className={`tabular-nums font-bold ${isMe ? "text-[#F5C500]" : "text-[#00ff41]"}`}>{s.score.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
                <button onClick={tryAgain} className="w-full font-mono text-sm font-bold tracking-widest py-3 rounded-lg border border-[#F5C500]/60 text-[#F5C500] hover:bg-[#F5C500]/10 transition-colors">▶ PLAY AGAIN</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── In-page game area (splash, gameover on desktop, desktop gameplay) ── */}
      <div className="relative">
        <div className={`relative w-full overflow-hidden border-2 border-[#F5C500]/20 ${
          phase === "playing" && !isMobileDevice
            ? "rounded-xl aspect-[800/500] md:aspect-[800/700]"
            : "rounded-xl min-h-[55svh] md:aspect-[800/700] md:min-h-0"
        }`}>

          {/* Splash screen */}
          {phase === "splash" && (
            <div className="absolute inset-0 bg-[#111111] flex flex-col items-center justify-center gap-8">
              {waitingForLandscape ? (
                <p className="text-[#F5C500] font-black tracking-widest uppercase text-lg">Rotate to play</p>
              ) : (
                <>
                  <div className="text-center px-8">
                    <p className="text-[#F5C500] font-black mb-3" style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", letterSpacing: "-0.03em" }}>
                      LES NRG: The Game
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                      Survive 60 seconds. Shoot the air leaks to seal them and lower your CFM@50pa score. Look for leaks in the walls, windows, plugs, duct work, can lights, and more.
                    </p>
                  </div>
                  <button
                    onClick={startGame}
                    className="btn-primary text-base px-10 py-4 font-black tracking-widest"
                  >
                    ▶ PLAY GAME
                  </button>
                </>
              )}
            </div>
          )}

          {/* Desktop iframe — mobile uses the fullscreen overlay above */}
          {phase === "playing" && !isMobileDevice && (
            <iframe
              ref={iframeRef}
              src="/beta/index.html?v=BETA20"
              className="w-full h-full border-0 block"
              title="LES NRG: The Game"
              allow="autoplay; screen-wake-lock; screen-orientation"
            />
          )}

          {/* Game over — desktop only (mobile uses fullscreen overlay above) */}
          {phase === "gameover" && !isMobileDevice && (
            <div className="absolute inset-0 bg-[#111111] overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
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
                        <label className="text-white/40 text-xs uppercase tracking-widest block mb-1">Beta test comment</label>
                        <input
                          className="input-field"
                          type="text" placeholder="Feedback, bugs, thoughts..."
                          value={form.building}
                          onChange={e => setForm(f => ({ ...f, building: e.target.value }))}
                        />
                      </div>
                      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center mt-2">
                        {submitting ? "Saving…" : "Submit score"}
                        {!submitting && <ArrowRight size={16} />}
                      </button>
                    </form>
                    <button onClick={tryAgain} className="w-full font-mono text-sm font-bold tracking-widest py-2.5 rounded-lg border border-white/15 text-white/40 hover:text-white/60 hover:border-white/30 transition-colors mt-2">
                      ▶ TRY AGAIN
                    </button>
                    <p className="text-white/20 text-xs mt-3 leading-relaxed">
                      Terms apply. One prize per household. Valid for PA, NJ, or DE.
                    </p>
                  </div>
                ) : (
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
      </div>

    </div>
  );
}
