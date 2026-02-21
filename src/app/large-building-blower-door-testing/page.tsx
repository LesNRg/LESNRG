import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Wind, CheckCircle, ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Large Building Blower Door Testing | Commercial Air Leakage | LES NRG",
  description: "Multi-fan air leakage testing for commercial and industrial facilities. ASTM E779 & E1827 compliant. Warehouses, schools, large multifamily buildings, and more. Philadelphia, PA.",
  openGraph: {
    title: "Large Building Blower Door Testing | LES NRG",
    description: "Multi-fan air leakage testing for commercial and industrial facilities. ASTM E779 & E1827 compliant.",
    url: "https://www.lesnrg.com/large-building-blower-door-testing",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const standards = [
  {
    name: "ASTM E779",
    desc: "Primary protocol for large commercial envelope testing via fan pressurization.",
  },
  {
    name: "ASTM E1827",
    desc: "Pulse-technique alternative for shorter tests in occupied or time-sensitive facilities.",
  },
  {
    name: "ASHRAE 90.1",
    desc: "Mandates air leakage thresholds for new commercial construction and major renovations.",
  },
  {
    name: "IECC / Local Codes",
    desc: "International Energy Conservation Code and local variants for new construction compliance.",
  },
  {
    name: "2021 IECC R402.4.1.2",
    desc: "Requires individual unit compartmentalization testing for attached multifamily dwellings — max 0.3 CFM50/ft² at 50 Pa.",
  },
];

const process = [
  {
    step: "01",
    title: "Site Walk & Test Plan",
    desc: "We walk the building with the project team — reviewing drawings, mechanical systems, and envelope details — then deliver a comprehensive testing plan covering fan array configuration, access points, preparation requirements, and scheduling.",
  },
  {
    step: "02",
    title: "Building Preparation",
    desc: "Seal intentional openings — HVAC dampers, exhaust fans — and establish safe test zones.",
  },
  {
    step: "03",
    title: "Fan Deployment",
    desc: "Deploy and calibrate the fan array across multiple openings, synced to centralized data acquisition.",
  },
  {
    step: "04",
    title: "Pressurization Test",
    desc: "Run pressurization and depressurization sequences, collecting CFM at multiple pressure differentials.",
  },
  {
    step: "05",
    title: "Leak Survey",
    desc: "Systematic envelope survey under pressure — optionally combined with IR thermography.",
  },
  {
    step: "06",
    title: "Report",
    desc: "Engineering report delivered within 5 business days with results, compliance status, and remediation guidance.",
  },
];

const buildingTypes = [
  "Warehouses & Distribution Centers",
  "Manufacturing Facilities",
  "Big-Box Retail",
  "Schools & Universities",
  "Large Multifamily",
  "Government & Institutional",
  "Cold Storage Facilities",
  "Data Centers",
];

const faqs = [
  {
    q: "Can you perform unit compartmentalization testing for multifamily buildings?",
    a: "Yes. The 2021 IECC (Section R402.4.1.2) requires each dwelling unit in attached multifamily buildings up to three stories to pass an individual compartmentalization test at 50 Pa. The limit is 0.3 CFM50 per square foot of unit enclosure area — all floors, ceilings, and walls surrounding the unit. We test each unit individually and deliver per-unit results for code compliance.",
  },
  {
    q: "How long does testing take?",
    a: "Large buildings (200,000–1,000,000 sq ft) typically require 1–3 days on-site including setup, testing, and leak survey. We schedule around your operations.",
  },
  {
    q: "Can you test occupied buildings?",
    a: "Yes. We use the ASTM E1827 pulse technique with carefully managed pressurization protocols suited to partially or fully occupied facilities.",
  },
  {
    q: "How is this different from a residential blower door test?",
    a: "A residential test uses one fan producing 2,000–5,000 CFM. A large building may require 50,000–200,000+ CFM to reach 50 Pa. We deploy arrays of 2–20+ calibrated fans with centralized data acquisition built for large volumes.",
  },
];

export default function BlowerDoorTestingPage() {
  return (
    <div className="min-h-screen pt-32">

      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_6661.JPG"
            alt="Large building blower door testing"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Wind size={13} className="text-[#F5C500]" />
            <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">Specialized Service</span>
          </div>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Large Building<br />Blower Door<br />Testing
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            Multi-fan air leakage testing for new and existing commercial and multifamily facilities of any size.
            ASTM E779 and E1827 compliant.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <a href="#process" className="btn-outline-yellow">
              See Our Process
            </a>
          </div>
        </div>
      </section>

      {/* New Construction */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">New Construction</span>
            <h2 className="section-title mb-5">2021 IECC Compliance Testing</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-4">
              The 2021 International Energy Conservation Code (IECC) establishes mandatory air leakage testing
              requirements for new large commercial buildings. Under Section C402.5, buildings exceeding
              25,000 sq ft of conditioned floor area must demonstrate a maximum whole-building air leakage
              rate of <strong className="text-[#111111]">0.40 CFM75 per square foot</strong> of gross above-grade wall area,
              tested at 75 Pascals per ASTM E779 or ASTM E1827.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-6">
              For attached multifamily buildings up to three stories, Section R402.4.1.2 requires individual
              unit compartmentalization testing at 50 Pa with a maximum of 0.3 CFM50/ft² of unit enclosure area.
              Sampling is not permitted — every unit must pass independently.
            </p>
            <ul className="space-y-2">
              {[
                "Whole-building testing per ASTM E779 / ASTM E1827",
                "Unit compartmentalization per 2021 IECC § R402.4.1.2",
                "ASHRAE 90.1 compliance for commercial construction",
                "Signed engineering report accepted by AHJ",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#6b6b62] text-sm">
                  <CheckCircle size={13} className="text-[#F5C500] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111111] rounded-2xl p-8">
            <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-3 py-1.5 mb-6">
              <span className="text-[#F5C500] font-bold text-sm">2021 IECC § C402.5</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Max Leakage", value: "0.40 CFM75/ft²", sub: "Gross above-grade wall area" },
                { label: "Test Pressure", value: "75 Pa", sub: "Commercial buildings" },
                { label: "Threshold", value: "> 25,000 ft²", sub: "Conditioned floor area" },
                { label: "Test Methods", value: "E779 / E1827", sub: "ASTM compliant" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1.5">{item.label}</div>
                  <div className="text-[#F5C500] font-black text-lg mb-0.5" style={{ letterSpacing: "-0.02em" }}>{item.value}</div>
                  <div className="text-white/30 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              Many states and municipalities have adopted the 2021 IECC or equivalent. We verify the applicable
              code for your jurisdiction and deliver a report that satisfies your Authority Having Jurisdiction (AHJ).
            </p>
          </div>
        </div>
      </section>

      {/* Existing Buildings */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Existing Buildings</span>
            <h2 className="section-title mb-4">Why Test an Existing Building?</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              Air leakage testing is not just a code checkbox for new construction — it is one of the most
              effective diagnostic tools available for identifying performance problems in existing buildings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Energy Conservation",
                desc: "Uncontrolled air infiltration is responsible for 25–40% of heating and cooling loads in commercial buildings. A blower door test quantifies the exact leakage rate, giving owners a clear baseline before investing in envelope improvements — and measurable proof of savings afterward.",
              },
              {
                title: "Moisture & Mold",
                desc: "Air movement through the building envelope carries moisture into wall cavities and interstitial spaces. In cold climates this leads to condensation, rot, and mold growth that is often invisible until structural damage has occurred. Pressurization testing locates the breach before it becomes a costly repair.",
              },
              {
                title: "Indoor Air Quality",
                desc: "Uncontrolled infiltration introduces unconditioned, unfiltered outside air — along with pollutants, allergens, and vehicle exhaust — directly into occupied spaces. Identifying and sealing major air pathways improves occupant health and reduces the load on mechanical ventilation systems.",
              },
              {
                title: "Renovation & Re-Commissioning",
                desc: "After a major renovation, addition, or mechanical system upgrade, a post-construction blower door test confirms that the work performed actually improved the envelope. It also supports LEED, ENERGY STAR, and local incentive programs that require verified performance documentation.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="w-1.5 h-6 bg-[#F5C500] rounded-full mb-4" />
                <h3 className="text-[#111111] font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">The Challenge</span>
            <h2 className="section-title mb-5">Specialized Equipment for Large Volumes</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-6">
              A standard residential blower door produces 2,000–5,000 CFM. A large commercial building may
              require 50,000–200,000+ CFM to reach the 50 Pascal differential required by ASTM E779.
              We deploy arrays of 2–20+ calibrated fans synchronized through centralized data acquisition —
              accurate and code-compliant on facilities of any size.
            </p>
            <ul className="space-y-2">
              {[
                "Multi-fan arrays up to 20+ units",
                "Centralized data acquisition across all fans",
                "Zone-by-zone analysis for phased construction",
                "Occupied building protocols available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[#6b6b62] text-sm">
                  <CheckCircle size={13} className="text-[#F5C500] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
            <Image
              src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_0813.JPG"
              alt="Large building blower door testing setup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">Facility Types</span>
            <h2 className="section-title mb-6">Building Types We Test</h2>
            <div className="flex flex-wrap gap-2">
              {buildingTypes.map((b) => (
                <div key={b} className="flex items-center gap-2 bg-[#f5f5f0] rounded-lg px-3 py-2">
                  <Building2 size={13} className="text-[#F5C500] shrink-0" />
                  <span className="text-[#111111] text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
            <Image
              src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1664.JPG"
              alt="Large commercial building exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">How It Works</span>
            <h2 className="section-title text-white">Our Testing Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.step} className="card-dark relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-[#F5C500]/6 leading-none select-none">
                  {step.step}
                </div>
                <div className="text-[#F5C500] font-bold text-xs mb-3 uppercase tracking-wider">Step {step.step}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Deliverables</span>
              <h2 className="section-title text-white mb-5">What You Receive</h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Engineering report delivered within 5 business days of on-site testing.
              </p>
              <ul className="space-y-3">
                {[
                  "Pass/fail compliance summary",
                  "CFM50, ACH50, and ELA results",
                  "Code compliance analysis (ASHRAE 90.1, IECC)",
                  "Leak location mapping",
                  "IR thermography images (if selected)",
                  "Prioritized remediation recommendations",
                  "Post-remediation verification available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/50 text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
              <Image
                src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7897.JPG"
                alt="Engineering report and test results"
                fill
                className="object-cover"
               
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Compliance</span>
            <h2 className="section-title text-white">Testing Standards</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((s) => (
              <div key={s.name} className="card-dark">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1 mb-3">
                  <span className="text-[#F5C500] font-bold text-xs">{s.name}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Compartmentalization */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="mb-10">
          <span className="section-label">2021 IECC § R402.4.1.2</span>
          <h2 className="section-title mb-4">Multifamily Unit Compartmentalization Testing</h2>
          <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
            The 2021 IECC requires each dwelling unit in attached multifamily buildings to be tested and pass
            independently. Sampling is not permitted. This applies to attached dwellings up to three stories
            under the residential provisions.
          </p>
        </div>

        {/* Code callout */}
        <div className="bg-[#111111] rounded-2xl p-8 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-3 py-1.5">
              <span className="text-[#F5C500] font-bold text-sm">2021 IECC § R402.4.1.2</span>
            </div>
            <span className="text-white/30 text-sm">Residential Energy Efficiency — Air Leakage Testing</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Max Leakage Rate", value: "0.3 CFM50/ft²", sub: "of unit enclosure area" },
              { label: "Test Pressure", value: "50 Pa", sub: "0.2 in. w.g." },
              { label: "Applies To", value: "≤ 3 Stories", sub: "Attached multifamily, residential provisions" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-5 text-center">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2">{item.label}</div>
                <div className="text-[#F5C500] text-2xl font-black mb-1" style={{ letterSpacing: "-0.02em" }}>{item.value}</div>
                <div className="text-white/30 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="text-[#111111] font-bold mb-2">Unit Enclosure Area</h3>
            <p className="text-[#6b6b62] text-sm leading-relaxed">
              Leakage is measured against the combined surface area of all six bounding surfaces — floors,
              ceilings, exterior walls, and party walls shared with adjacent units, corridors, or stairwells.
              This surface-area metric is better suited to multifamily geometry than ACH50, which penalizes
              units with little exterior exposure.
            </p>
          </div>
          <div className="card">
            <h3 className="text-[#111111] font-bold mb-3">How the Test Works</h3>
            <ul className="space-y-2">
              {[
                "Blower door installed in the unit entry door",
                "Unit windows and exterior doors remain closed",
                "Adjacent unit doors and windows opened to outside",
                "Unit depressurized to 50 Pa; CFM50 divided by enclosure area",
                "Each unit passes or fails independently",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                  <CheckCircle size={12} className="text-[#F5C500] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="mb-10">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="card">
              <h3 className="text-[#111111] font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#6b6b62] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Ready to Schedule Your Test?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Share your building size and location and we&apos;ll put together a scope and estimate within one business day.
          </p>
          <Link href="/contact" className="btn-dark">
            Request a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
