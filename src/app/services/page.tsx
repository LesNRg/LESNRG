import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Wind, BarChart2, HomeIcon, ClipboardList, Award, Wrench, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Performance Testing Services | LES NRG | Philadelphia, PA",
  description: "Blower door testing, HERS ratings, energy audits, duct blaster testing, PHIUS verification, Energy Star certification, and building science consulting. Serving PA, NJ, NY, DE and beyond.",
  openGraph: {
    title: "Building Performance Testing Services | LES NRG",
    description: "Blower door testing, HERS ratings, energy audits, PHIUS verification, Energy Star certification, and building science consulting.",
    url: "https://www.lesnrg.com/services",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    icon: <Wind size={28} className="text-[#F5C500]" />,
    title: "Blower Door Testing for Code Compliance",
    desc: "We measure building airtightness to minimize heat loss and ensure code adherence. Testing is scheduled at convenient times with prompt report delivery.",
    details: [
      "ASTM E779 & E1827 compliant",
      "Residential and light commercial",
      "New construction & existing homes",
      "Pass/fail and full CFM50 reporting",
      "Prompt digital report delivery",
    ],
  },
  {
    icon: <BarChart2 size={28} className="text-[#F5C500]" />,
    title: "HERS Rating",
    desc: "The Home Energy Rating System (HERS) is the industry standard for measuring a home's energy efficiency. A HERS score of 0 represents a net-zero energy home.",
    details: [
      "Accredited HERS Rater on staff",
      "New construction & existing homes",
      "Energy modeling and analysis",
      "RESNET compliant methodology",
      "Used for mortgage qualification (EEM)",
    ],
  },
  {
    icon: <HomeIcon size={28} className="text-[#F5C500]" />,
    title: "Residential Energy Audits",
    desc: "Comprehensive whole-home evaluations including visual inspection, energy modeling, HERS score generation, and prioritized recommendations for reducing energy costs.",
    details: [
      "Home inspection walkthrough",
      "Energy modeling & simulation",
      "HERS score generated",
      "Utility cost savings projections",
      "Detailed written report",
    ],
  },
  {
    icon: <ClipboardList size={28} className="text-[#F5C500]" />,
    title: "Testing & Verification Services",
    desc: "Comprehensive diagnostic testing to verify building performance across all major systems and assemblies.",
    details: [
      "Duct Blaster Testing (ductwork tightness)",
      "Ventilation System Testing (IAQ verification)",
      "Thermal Enclosure Verification",
      "High-Performance Windows & Insulation",
      "HVAC System Verification",
      "Water Management Assessment",
    ],
  },
  {
    icon: <Award size={28} className="text-[#F5C500]" />,
    title: "Program Compliance Certification",
    desc: "Authorized verification and certification support for the leading residential green building and energy efficiency programs.",
    details: [
      "Energy Star for New Homes",
      "Indoor airPlus",
      "Zero Energy Ready Homes (DOE)",
      "Passive House Institute U.S. (PHIUS)",
      "NJCEP (New Jersey Clean Energy Program)",
      "Documentation & submission support",
    ],
  },
  {
    icon: <Wrench size={28} className="text-[#F5C500]" />,
    title: "Consulting",
    desc: "Building science and construction consulting to help project teams make informed decisions early — where influence on project outcomes is greatest.",
    details: [
      "Building science guidance",
      "Construction means & methods",
      "Design review & feedback",
      "Issue prevention & troubleshooting",
      "Sustainable construction strategies",
    ],
  },
  {
    icon: <Scale size={28} className="text-[#F5C500]" />,
    title: "Energy Star Expert Witness",
    desc: "Independent expert witness services for legal proceedings, disputes, and arbitration involving Energy Star certification, building performance standards, and code compliance.",
    details: [
      "Legal and arbitration proceedings",
      "Expert reports and declarations",
      "Deposition and testimony experience",
      "Energy Star certification disputes",
      "Code compliance analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/mis/IMG_2507%202.JPG"
            alt="Building performance testing"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">What We Do</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Services
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            A full range of energy efficiency, performance verification, and consulting services
            for residential and commercial buildings.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-16">
        <div className="space-y-5">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#F5C500]/10 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <h2 className="text-[#111111] font-bold text-xl">{s.title}</h2>
                  </div>
                  <p className="text-[#6b6b62] leading-relaxed">{s.desc}</p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                        <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Strip */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ height: "320px" }}>
          {[
            "/new%20website%20photo/mis/IMG_8966.JPG",
            "/new%20website%20photo/mis/IMG_8986.JPG",
            "/new%20website%20photo/mis/IMG_9091.JPG",
            "/new%20website%20photo/mis/IMG_9094.JPG",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="LES NRG field work" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* Large Building CTA */}
      <section className="bg-[#111111] border-y border-white/8 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wind size={14} className="text-[#F5C500]" />
                <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">Specialized Service</span>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                Large Building Blower Door Testing
              </h3>
              <p className="text-white/50 text-sm max-w-xl">
                Multi-fan air leakage testing for commercial and industrial facilities — warehouses, manufacturing plants,
                schools, and large multifamily buildings. ASTM E779 and E1827 compliant.
              </p>
            </div>
            <Link href="/large-building-blower-door-testing" className="btn-primary shrink-0">
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Have a Project in Mind?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Reach out and we&apos;ll help scope the right services for your building and timeline.
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
