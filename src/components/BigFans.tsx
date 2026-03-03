"use client";

import { useState, useEffect } from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

const fanItems = [
  "sustainability",
  "energy efficiency",
  "Passive House",
  "PHIUS certification",
  "tight envelopes",
  "building science",
  "fresh air",
  "lower utility bills",
  "honest data",
  "buildings that perform",
  "blower door testing",
  "the science behind it all",
];

export default function BigFans() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % fanItems.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#111111] border-y border-white/8 py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <span className="section-label">Our Philosophy</span>
        <div className="mt-6 mb-16">
          <p
            className="text-white/45 font-semibold mb-4"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", letterSpacing: "-0.01em" }}
          >
            We&apos;re big fans of
          </p>
          <div className="relative overflow-hidden" style={{ height: "clamp(3.75rem, 8vw, 6rem)" }}>
            <span
              className={`${caveat.className} text-[#F5C500] absolute bottom-0 left-0 border-b-2 border-[#F5C500]/35 pb-1`}
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 1,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 350ms ease, transform 350ms ease",
              }}
            >
              {fanItems[current]}
            </span>
          </div>
        </div>
        <p className={`${caveat.className} text-[#F5C500]/50 text-3xl`}>
          After all, we&apos;re Big Fans.
        </p>
      </div>
    </section>
  );
}
