"use client";

import { useState, useEffect } from "react";

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
    <div className="mb-10">
      <p className="text-[#F5C500] text-2xl font-bold" style={{ letterSpacing: "-0.02em" }}>
        We&apos;re big fans.
      </p>
      <p
        className="text-white text-2xl font-bold"
        style={{
          letterSpacing: "-0.02em",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 350ms ease, transform 350ms ease",
        }}
      >
        of {fanItems[current]}.
      </p>
    </div>
  );
}
