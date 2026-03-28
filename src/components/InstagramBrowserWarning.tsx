"use client";

import { useEffect, useState } from "react";

export default function InstagramBrowserWarning() {
  const [show, setShow] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const inInstagram = ua.includes("Instagram");
    if (!inInstagram) return;
    setIsAndroid(/android/i.test(ua));
    setShow(true);
  }, []);

  if (!show) return null;

  const handleAndroidOpen = () => {
    window.location.href =
      "intent://lesnrg.com/thegame#Intent;scheme=https;package=com.android.chrome;end";
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#111111] flex flex-col items-center justify-center px-8 text-center">
      {/* Fan logo */}
      <svg height="72" viewBox="0 0 270 140" xmlns="http://www.w3.org/2000/svg" className="mb-8">
        <svg x="0" y="20" width="80" height="80" viewBox="8.511 8.511 82.977 82.977">
          <circle cx="50" cy="50" r="31.72" fill="white" />
          <path d="M82.454 8.511h-64.91c-4.989 0-9.033 4.044-9.033 9.033v64.911c0 4.989 4.044 9.033 9.033 9.033h64.91c4.989 0 9.034-4.044 9.034-9.033V17.544C91.489 12.555 87.443 8.511 82.454 8.511zM49.999 81.719c-17.517 0-31.718-14.202-31.718-31.721 0-17.517 14.201-31.718 31.718-31.718 17.518 0 31.719 14.201 31.719 31.718C81.718 67.517 67.517 81.719 49.999 81.719z" fill="#F5C500" fillRule="evenodd" />
        </svg>
        <rect x="90" y="16" width="2" height="94" fill="white" fillOpacity="0.4" rx="1" />
        <text x="100" y="56" fontFamily="Peddana, serif" fontSize="75" fill="white">LES</text>
        <text x="100" y="98" fontFamily="Peddana, serif" fontSize="75" fill="white">NRG</text>
      </svg>

      <h1 className="font-black text-white text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>
        Open in your browser<br />to play the game.
      </h1>
      <p className="text-white/40 text-sm mb-10 max-w-xs leading-relaxed">
        The game needs your phone's full browser for the best experience — fullscreen, controls, and leaderboard.
      </p>

      {isAndroid ? (
        <button onClick={handleAndroidOpen} className="btn-primary text-base px-8 py-4">
          Open in Chrome
        </button>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 max-w-xs">
          <p className="text-white/70 text-sm leading-relaxed">
            Tap the <span className="text-[#F5C500] font-bold">···</span> menu at the bottom of your screen, then tap{" "}
            <span className="text-[#F5C500] font-bold">Open in Browser</span>.
          </p>
        </div>
      )}
    </div>
  );
}
