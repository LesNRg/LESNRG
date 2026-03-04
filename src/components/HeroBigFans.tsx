"use client";

import { useState, useEffect } from "react";

const fanItems = [
  "Energy Star!",
  "Testing and verification",
  "Efficiency",
  "PHIUS certification",
  "Tight envelopes",
  "Building science",
  "Fresh air",
  "Lower utility bills",
  "Blower door testing",
  "Philadelphia",
  "HVAC systems that work",
  "Passive House",
  "Quality control",
  "Good design",
  "Vapor control layers",
  "Tape",
  "Indoor air quality",
  "Enjoying where you live",
  "Big Fans",
  "Pulik",
  "Duct leakage testing",
  "Little fans",
  "Preconstruction meetings",
  "Less Energy",
  "The Beatles",
  "HVAC Design",
  "Energy Recovery",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeroBigFans() {
  const [items] = useState(() => shuffle(fanItems));
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % items.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-10">
      <p className="text-[#F5C500] text-2xl font-bold" style={{ letterSpacing: "-0.02em" }}>
        We&apos;re big fans.
      </p>
      <p className="text-white text-2xl font-bold" style={{ letterSpacing: "-0.02em" }}>
        of{" "}
        <span style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 350ms ease, transform 350ms ease",
          display: "inline-block",
        }}>
          {items[current]}.
        </span>
      </p>
    </div>
  );
}
