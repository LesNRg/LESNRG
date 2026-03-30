"use client";
import { useEffect, useState } from "react";

export default function NoTrackPage() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("notrack", "1");
    setDone(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-8 text-center">
      <div>
        <p className="text-[#F5C500] font-black text-2xl mb-2">
          {done ? "This device won't be tracked." : "Setting up…"}
        </p>
        <p className="text-white/40 text-sm">You can close this page.</p>
      </div>
    </div>
  );
}
