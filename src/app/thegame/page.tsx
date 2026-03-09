import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GameContainer from "@/components/GameContainer";

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
      {/* Page Header */}
      <div className="pt-32 pb-8 max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <span className="section-label">Play</span>
        <h1
          className="font-black text-white mb-2 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          LESNRG{" "}
          <span className="text-[#F5C500]">The Game.</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl">
          Can you escape the leaky house?
        </p>
      </div>

      {/* Game Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 mb-12">
        <GameContainer />
      </div>

      {/* Prize Callout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 pb-20">
        <div className="bg-[#F5C500] rounded-2xl p-10 md:p-14 max-w-3xl">
          <h2
            className="font-black text-[#111111] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}
          >
            Escape the leaky house. Enter to win a free blower door test.
          </h2>
          <p className="text-[#111111]/70 text-lg leading-relaxed mb-6">
            Beat the game and enter to win a free blower door test. We&apos;ll come to your building and find exactly where it&apos;s losing energy — no charge.
          </p>
          <p className="text-[#111111]/50 text-sm mb-8">
            Terms apply. One prize per household. Valid for residential properties in PA, NJ, NY, or DE.
            Prize has no cash value and may not be combined with other offers. LES NRG reserves the right
            to verify game completion. Offer subject to scheduling availability.
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
