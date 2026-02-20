import Link from "next/link";
import Image from "next/image";
import { MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/8 mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
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
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              HERS Rating and Verification for High Performance Buildings.
              A HERS Rating and PHIUS verifying company located in Philadelphia, PA.
            </p>
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
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "HERS Rating" },
                { href: "/services", label: "Blower Door Testing" },
                { href: "/large-building-blower-door-testing", label: "Large Building Testing" },
                { href: "/services", label: "Energy Audits" },
                { href: "/services", label: "Program Compliance" },
                { href: "/services", label: "Consulting" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-sm hover:text-[#F5C500] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-sm hover:text-[#F5C500] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-10 pt-8">
          <p className="text-white/25 text-xs text-center">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
