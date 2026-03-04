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

export default function HeroBigFans() {
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
    <div className="mb-10 flex items-baseline gap-3 flex-wrap">
      <span className="text-white/45 font-semibold whitespace-nowrap text-base">
        We&apos;re big fans of
      </span>
      <span
        className={`${caveat.className} text-[#F5C500] border-b-2 border-[#F5C500]/35 pb-0.5`}
        style={{
          fontSize: "1.75rem",
          lineHeight: 1.1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 350ms ease, transform 350ms ease",
        }}
      >
        {fanItems[current]}
      </span>
    </div>
  );
}
