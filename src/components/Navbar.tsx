"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/large-building-blower-door-testing", label: "Large Building Testing" },
  { href: "/energy-star-multifamily", label: "Energy Star Certification" },
  { href: "/phius-passive-house-verification", label: "Passive House Verification" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-[#111111]/97 border-b border-white/8 shadow-lg shadow-black/20"
          : "bg-[#111111]"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <svg
              height="128"
              viewBox="0 0 270 140"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="LES NRG"
              style={{ display: "block" }}
            >
              <svg x="0" y="20" width="80" height="80" viewBox="8.511 8.511 82.977 82.977">
                <circle cx="50" cy="50" r="31.72" fill="white" />
                <path
                  d="M82.454 8.511h-64.91c-4.989 0-9.033 4.044-9.033 9.033v64.911c0 4.989 4.044 9.033 9.033 9.033h64.91c4.989 0 9.034-4.044 9.034-9.033V17.544C91.489 12.555 87.443 8.511 82.454 8.511zM49.999 81.719c-17.517 0-31.718-14.202-31.718-31.721 0-17.517 14.201-31.718 31.718-31.718 17.518 0 31.719 14.201 31.719 31.718C81.718 67.517 67.517 81.719 49.999 81.719z"
                  fill="#F5C500"
                  fillRule="evenodd"
                />
                <path
                  className="animate-spin-slow"
                  d="M65.663 31.972c-0.431 1.082-2.916 6.376-6.887 11.376-1.854 2.335-4.236 4.094-6.037 5.222-0.153-0.331-0.353-0.628-0.596-0.891 1.85-2.367 4.409-6.216 5.24-10.302 1.82-6.495-0.103-12.741-0.895-14.089-1.195-3.259-4.372-4.667-6.383-3.377-2.025 1.29-2.585 4.068-1.761 6.367 0.461 1.07 2.446 6.569 3.174 12.911 0.325 2.829-0.061 5.623-0.511 7.672-0.359-0.157-0.752-0.245-1.162-0.269-0.392-2.977-1.319-7.293-3.531-10.638-3.309-5.88-9.083-8.934-10.596-9.329-3.152-1.456-6.393-0.209-6.901 2.126-0.52 2.344 1.048 4.703 3.256 5.746 1.084 0.43 6.376 2.917 11.377 6.886 2.093 1.662 3.72 3.746 4.847 5.457-0.41 0.174-0.78 0.427-1.09 0.737-2.387-1.794-5.96-4.032-9.728-4.799-6.498-1.82-12.74 0.1-14.089 0.894-3.26 1.196-4.667 4.371-3.377 6.383 1.289 2.026 4.066 2.585 6.365 1.762 1.071-0.461 6.57-2.447 12.914-3.177 2.56-0.292 5.09-0.003 7.069 0.389-0.092 0.309-0.157 0.628-0.157 0.967 0 0.131 0.025 0.253 0.039 0.378-2.95 0.425-7.011 1.373-10.186 3.471-5.881 3.309-8.937 9.08-9.329 10.598-1.459 3.149-0.208 6.393 2.126 6.901 2.343 0.52 4.703-1.048 5.745-3.258 0.431-1.081 2.916-6.376 6.887-11.376 1.62-2.04 3.644-3.641 5.331-4.764 0.25 0.36 0.567 0.67 0.935 0.912-1.808 2.387-4.095 6.001-4.874 9.822-1.82 6.495 0.103 12.74 0.898 14.083 1.195 3.263 4.37 4.672 6.381 3.382 2.026-1.292 2.585-4.069 1.759-6.367-0.46-1.07-2.446-6.57-3.174-12.913-0.314-2.74 0.039-5.453 0.47-7.485 0.139 0.019 0.275 0.042 0.42 0.042 0.264 0 0.52-0.033 0.767-0.092 0.382 2.979 1.303 7.376 3.551 10.77 3.307 5.881 9.08 8.936 10.593 9.327 3.152 1.462 6.392 0.211 6.904-2.126 0.517-2.343-1.051-4.7-3.26-5.745-1.081-0.428-6.374-2.916-11.375-6.886-2.289-1.818-4.02-4.14-5.151-5.927 0.289-0.213 0.543-0.467 0.752-0.759 2.36 1.854 6.247 4.453 10.368 5.292 6.498 1.82 12.741-0.1 14.089-0.895 3.259-1.195 4.668-4.372 3.378-6.384-1.291-2.023-4.068-2.583-6.367-1.759-1.069 0.461-6.569 2.447-12.913 3.174-2.992 0.345-5.946-0.108-8.021-0.591 0.067-0.265 0.113-0.539 0.113-0.827 0-0.064-0.017-0.122-0.019-0.188 2.975-0.349 7.621-1.258 11.163-3.598 5.882-3.31 8.937-9.083 9.329-10.598 1.461-3.149 0.21-6.392-2.126-6.901C69.065 28.195 66.707 29.762 65.663 31.972z"
                  fill="#F5C500"
                />
              </svg>
              <rect x="90" y="16" width="2" height="94" fill="white" fillOpacity="0.4" rx="1" />
              <text x="100" y="56" fontFamily="Peddana, serif" fontSize="75" fill="white">LES</text>
              <text x="100" y="98" fontFamily="Peddana, serif" fontSize="75" fill="white">NRG</text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-evenly ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-center px-2 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  pathname === link.href
                    ? "text-[#F5C500] bg-white/8"
                    : "text-white/60 hover:text-white hover:bg-white/6"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/8 px-5 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-3 rounded-md text-sm font-medium my-0.5 transition-all ${
                pathname === link.href
                  ? "text-[#F5C500] bg-white/8"
                  : "text-white/60 hover:text-white hover:bg-white/6"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full justify-center mt-3"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
