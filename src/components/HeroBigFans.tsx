"use client";

import { useState, useEffect } from "react";

const fanItems = [
  "Energy Star!",
  "testing and verification",
  "efficiency",
  "phius certification",
  "tight envelopes",
  "building science",
  "fresh air",
  "lower utility bills",
  "blower door testing",
  "philadelphia",
  "HVAC systems that work",
  "passive house",
  "quality control",
  "good design",
  "vapor control layers",
  "tape",
  "indoor air quality",
  "enjoying where you live",
  "big fans",
  "pulik",
  "duct leakage testing",
  "little fans",
  "preconstruction meetings",
  "less energy",
  "the beatles",
  "HVAC design",
  "energy recovery",
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
        of&nbsp;&nbsp;
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
