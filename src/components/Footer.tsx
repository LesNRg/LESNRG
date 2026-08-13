"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Instagram, ArrowUp } from "lucide-react";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/large-building-blower-door-testing", label: "Large Building Testing" },
      { href: "/special-inspections", label: "Special Inspections" },
      { href: "/energy-star-multifamily", label: "Energy Star Certification" },
      { href: "/phius-passive-house-verification", label: "Passive House Verification" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/why-it-matters", label: "Why It Matters" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "More",
    links: [{ href: "/thegame", label: "LESNRG The Game" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/8 mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-5 group">
              <div className="relative w-32 h-32 shrink-0">
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center gap-1.5 text-white/40 text-sm mb-3">
              <MapPin size={12} className="text-[#F5C500]/70" />
              Located in Philadelphia, Pennsylvania
            </div>
            <a
              href="https://instagram.com/les.nrg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#F5C500] transition-colors text-sm"
            >
              <Instagram size={14} />
              @les.nrg
            </a>
            <p className="text-white/30 text-xs leading-relaxed mt-5 max-w-xs">
              Serving Pennsylvania, New Jersey, New York, Delaware and beyond.
              No project is too far.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-14">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-white/30 text-[10px] font-bold tracking-[0.14em] uppercase mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/45 hover:text-[#F5C500] transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 mt-10 pt-8 flex flex-col items-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-white/30 hover:text-[#F5C500] transition-colors text-xs"
          >
            <ArrowUp size={12} />
            Back to Top
          </button>
          <p className="text-[#F5C500] font-bold text-sm tracking-wide">We&apos;re Big Fans.</p>
          <p className="text-white/25 text-xs text-center">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
