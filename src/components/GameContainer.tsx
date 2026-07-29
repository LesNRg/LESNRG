"use client";

import { useState, useEffect, useRef } from "react";

export default function GameContainer() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function focusGame() {
    iframeRef.current?.contentWindow?.focus();
  }

  useEffect(() => {
    const mobileMq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobileDevice(mobileMq.matches);
  }, []);

  if (isMobileDevice) {
    return (
      <div style={{ maxWidth: "800px" }} className="w-full">
        <div className="relative w-full overflow-hidden border-2 border-[#F5C500]/20 rounded-xl min-h-[55svh] flex flex-col items-center justify-center gap-4 px-8">
          <p className="text-[#F5C500] font-black text-2xl text-center" style={{ letterSpacing: "-0.02em" }}>
            Desktop Only
          </p>
          <p className="text-white/50 text-sm text-center max-w-xs leading-relaxed">
            This game is best played on a computer. Open this page on a desktop or laptop to play.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "975px" }} className="w-full">
      <div
        className="relative w-full overflow-hidden rounded-xl border-2 border-[#F5C500]/20 h-[95vh] max-h-[1075px]"
        onMouseEnter={focusGame}
        onClick={focusGame}
      >
        <iframe
          ref={iframeRef}
          src="/beta/index.html?v=ARCADE1"
          className="w-full h-full border-0 block"
          title="LES NRG: The Game"
          allow="autoplay"
        />
      </div>
    </div>
  );
}
