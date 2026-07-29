import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GameContainer from "@/components/GameContainer";
import Leaderboard from "./Leaderboard";
import InstagramBrowserWarning from "@/components/InstagramBrowserWarning";

export const metadata: Metadata = {
  title: "LESNRG The Game",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function GamePage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <InstagramBrowserWarning />
      {/* Page Header */}
      <div className="pt-8 pb-8 max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <span className="section-label">Play</span>
        <h1
          className="font-black text-white mb-2 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          LESNRG{" "}
          <span className="text-[#F5C500]">The Game.</span>
        </h1>
        <p className="text-[#F5C500] font-black text-2xl mb-2" style={{ letterSpacing: "-0.02em" }}>
          Seal the leaks. Post the lowest score.
        </p>
        <p className="text-white/50 text-lg max-w-xl">
          Survive 60 seconds. Move with <kbd className="bg-white/10 text-white/80 text-sm font-mono px-1.5 py-0.5 rounded">◀ ▶</kbd>, jump with <kbd className="bg-white/10 text-white/80 text-sm font-mono px-1.5 py-0.5 rounded">SPACE</kbd>, and shoot the air leaks with <kbd className="bg-white/10 text-white/80 text-sm font-mono px-1.5 py-0.5 rounded">F</kbd> to seal them up and lower your CFM@50pa score. Lowest score wins.
        </p>
      </div>

      {/* Game Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 mb-4">
        <GameContainer />
        <p className="text-white/30 text-xs font-mono text-center mt-4">
          Click the game, then press ENTER to start.
        </p>
      </div>

      {/* Leaderboard */}
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 pb-20">
          <p className="text-white/20 text-sm">Loading leaderboard…</p>
        </div>
      }>
        <Leaderboard />
      </Suspense>

      {/* Callout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 pb-20">
        <div className="bg-[#F5C500] rounded-2xl p-10 md:p-14 max-w-3xl">
          <h2
            className="font-black text-[#111111] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}
          >
            In the real world, we find the leaks for you.
          </h2>
          <p className="text-[#111111]/70 text-lg leading-relaxed mb-8">
            Every leak in the game is one we find in real buildings — rim joists, duct trunks, can lights, window edges.
            We come out, pressurize the envelope, and show you exactly where the building is losing energy.
          </p>
          <Link href="/contact" className="btn-dark">
            Questions? Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
