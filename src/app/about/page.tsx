import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About LES NRG | Building Performance Experts | Philadelphia, PA",
  description: "LES NRG is a Philadelphia-based building performance verification firm with 20+ years of experience. PHIUS Verifier, HERS Certified Rater, Energy Star Partner, and NJCEP Partner.",
  openGraph: {
    title: "About LES NRG | Building Performance Experts | Philadelphia, PA",
    description: "20+ years of building performance expertise. PHIUS Verifier, HERS Certified Rater, and Energy Star Partner based in Philadelphia, PA.",
    url: "https://www.lesnrg.com/about",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const credentials = [
  "HERS Certified Rater (RESNET Accredited)",
  "PHIUS Verifier (Passive House Institute US)",
  "Energy Star for New Homes Partner",
  "NJCEP Partner (New Jersey Clean Energy Program)",
  "Indoor airPlus Verifier",
  "Zero Energy Ready Homes Verifier",
  "Master's Degree in Construction Management",
];

const trackRecord = [
  { num: "4,000+", label: "Blower Door Tests Completed" },
  { num: "347", label: "Energy Star Certified Units" },
  { num: "25", label: "PHIUS Certified Units" },
  { num: "20+", label: "Years of Experience" },
];

const highlights = [
  {
    title: "Contributing Author",
    desc: "Passive House Rowhouse Manual — a key reference for high-performance urban residential construction.",
  },
  {
    title: "Founding Member",
    desc: "Greater Philadelphia Passive House Association — advancing passive building standards in the region.",
  },
  {
    title: "Construction Advisor",
    desc: "Philadelphia Habitat for Humanity — applying energy efficiency expertise to affordable housing projects.",
  },
  {
    title: "Conference Speaker",
    desc: "Presented at the New Gravity Conference 2020 on building performance verification topics.",
  },
];

const companyServices = [
  { title: "HERS Ratings & Energy Audits", desc: "Standardized energy assessments for new and existing homes, with RESNET-compliant reporting and mortgage qualification support." },
  { title: "PHIUS Verification", desc: "Third-party certification support for the most rigorous passive building standard in North America — from design review through certificate." },
  { title: "Energy Star Certification", desc: "Authorized verification for Energy Star Multifamily New Construction and DOE Zero Energy Ready Home programs." },
  { title: "Large Building Testing", desc: "Multi-fan blower door testing for commercial and industrial facilities — ASTM E779 and E1827 compliant." },
  { title: "Program Compliance", desc: "Certification documentation and field verification for Indoor airPlus, ZERH, and state and utility incentive programs including NJCEP." },
  { title: "Building Science Consulting", desc: "Pre-construction design review, construction guidance, and troubleshooting to keep projects on target from conception to final certification." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/mis/IMG_8984.JPG"
            alt="LES NRG building performance"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">Who We Are</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            About LES NRG
          </h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            A building performance verification firm located in Philadelphia, Pennsylvania.
            We test, verify, and certify residential and commercial buildings — from single-family
            new construction to large multifamily passive house developments.
          </p>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-[#F5C500] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trackRecord.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-[#111111] mb-1" style={{ letterSpacing: "-0.04em" }}>{s.num}</div>
                <div className="text-[#111111]/60 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="mb-10">
          <span className="section-label">What We Do</span>
          <h2 className="section-title mb-5">Comprehensive Building Performance Services</h2>
          <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
            LES NRG provides a full range of energy efficiency testing, verification, and certification services —
            serving builders, developers, architects, and homeowners throughout the region and beyond.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companyServices.map((s) => (
            <div key={s.title} className="card">
              <h3 className="text-[#111111] font-bold mb-2">{s.title}</h3>
              <p className="text-[#6b6b62] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Strip */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-5" style={{ height: "320px" }}>
          {[
            "/new%20website%20photo/mis/IMG_5429.JPG",
            "/new%20website%20photo/mis/IMG_5762.JPG",
            "/new%20website%20photo/mis/IMG_6094.JPG",
            "/new%20website%20photo/mis/IMG_8452.JPEG",
            "/new%20website%20photo/mis/IMG_8830.JPG",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="LES NRG field work" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Our Approach</span>
              <h2 className="section-title text-white mb-5">Engaged Early. Present Throughout.</h2>
              <p className="text-white/50 leading-relaxed mb-5">
                Most verification and testing happens at the end of construction — a pass/fail check
                after all the decisions have been made. We work differently. Early engagement means we
                review plans, flag potential performance issues, and help teams make better choices
                before they become expensive corrections.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Whether you&apos;re a builder targeting Energy Star or PHIUS certification, a homeowner
                seeking an honest energy assessment, or a developer navigating code and incentive
                requirements — we provide clear, technically rigorous guidance every step of the way.
              </p>
              <blockquote className="border-l-4 border-[#F5C500] pl-5 py-1">
                <p className="text-white/80 font-semibold leading-relaxed text-sm">
                  &ldquo;Bringing us onboard early in the project holds significant benefits, as it allows
                  us to have a greater influence on the project&rsquo;s overall success.&rdquo;
                </p>
                <cite className="text-white/30 text-xs not-italic mt-2 block">— Neil Goldman, Founder</cite>
              </blockquote>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/new%20website%20photo/Neil/IMG_0421.JPG"
                alt="Neil Goldman, LES NRG founder"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Credentials</span>
            <h2 className="section-title mb-5">Accreditations & Certifications</h2>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[#6b6b62] text-sm">
                  <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          {/* Program logos */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/logos/RESNET_HERS_Rater_Vertical_Logo_RGB_Web_Use.avif", alt: "RESNET", height: 56 },
              { src: "/logos/logo-energy-star.png", alt: "Energy Star", height: 64 },
              { src: "/logos/PHIUS.avif", alt: "PHIUS", height: 56 },
              { src: "/logos/logo-epa-airplus.png", alt: "Indoor airPlus", height: 56 },
              { src: "/logos/ZERH Logo.avif", alt: "DOE Zero Energy Ready Home", height: 64 },
            ].map((logo) => (
              <div key={logo.alt} className="bg-[#f5f5f0] rounded-xl p-4 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.height}
                  width={130}
                  style={{ height: logo.height, width: "auto", maxWidth: 110 }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="bg-[#111111] border-y border-white/8 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Industry Involvement</span>
            <h2 className="text-white font-bold text-2xl" style={{ letterSpacing: "-0.02em" }}>
              Active in the Building Science Community
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="card-dark">
                <div className="w-1 h-6 bg-[#F5C500] rounded-full mb-3" />
                <h3 className="text-white font-bold mb-2">{h.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Ready to Work Together?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Reach out and let&apos;s talk about your project.
          </p>
          <Link href="/contact" className="btn-dark">
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
