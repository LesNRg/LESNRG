import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Instagram, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact LES NRG | Building Performance Testing | Philadelphia, PA",
  description: "Get in touch with LES NRG for blower door testing, HERS ratings, energy audits, and program certification. Located in Philadelphia, PA — response within one business day.",
  openGraph: {
    title: "Contact LES NRG | Philadelphia, PA",
    description: "Get in touch for blower door testing, HERS ratings, energy audits, and program certification. Response within one business day.",
    url: "https://www.lesnrg.com/contact",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/mis/IMG_9075.JPG"
            alt="LES NRG project"
            fill
            className="object-cover opacity-50"
            priority
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">Reach Out</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Contact
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-[#111111] font-bold mb-4">Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-[#6b6b62] text-sm">
                  <MapPin size={14} className="text-[#F5C500] mt-0.5 shrink-0" />
                  <div>
                    <div>Located in Philadelphia, Pennsylvania</div>
                  </div>
                </div>
                <a
                  href="https://instagram.com/les.nrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#6b6b62] text-sm hover:text-[#F5C500] transition-colors"
                >
                  <Instagram size={14} className="text-[#F5C500]" />
                  @les.nrg
                </a>
              </div>
            </div>

            <div className="divider" />

            <div className="card">
              <h3 className="text-[#111111] font-semibold text-sm mb-3">What to Expect</h3>
              <ul className="space-y-2">
                {[
                  "Response within 1 business day",
                  "No-pressure initial conversation",
                  "Clear project scope and pricing",
                  "Early engagement encouraged",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-[#111111] font-semibold text-sm mb-3">Service Area</h3>
              <p className="text-[#6b6b62] text-sm leading-relaxed mb-3">
                Located in Philadelphia, PA — we travel wherever buildings are.
                We regularly serve clients throughout Pennsylvania, New Jersey, New York, Delaware,
                and beyond. No project is too far.
              </p>
              <div className="flex items-start gap-2 text-[#6b6b62] text-sm">
                <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                Travel costs included in project scope
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
