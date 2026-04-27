import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Wind, CheckCircle, ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Whole Building Blower Door Testing | Large Building Air Leakage | LES NRG",
  description: "Whole building blower door testing for commercial and industrial facilities. Multi-fan arrays for ASTM E3158 compliance. Warehouses, schools, large multifamily buildings, and more. Philadelphia, PA.",
  keywords: "whole building blower door test, whole building blower door testing, large building blower door testing, commercial air leakage testing, ASTM E3158, whole building pressurization, commercial energy code compliance, multifamily blower door testing, IECC C402.5, Philadelphia commercial testing, building envelope air leakage",
  openGraph: {
    title: "Whole Building Blower Door Testing | LES NRG",
    description: "Multi-fan air leakage testing for commercial and industrial facilities. ASTM E3158 compliant.",
    url: "https://www.lesnrg.com/large-building-blower-door-testing",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const standards = [
  {
    name: "ASTM E3158-18",
    desc: "Primary standard for measuring the air leakage rate of large or multizone buildings. Evolved from the USACE protocol and ABAA standard. Provides multi-point, repeated two-point, and repeated single-point procedures. Recommended reporting pressure: 75 Pa.",
  },
  {
    name: "ASTM E779-19",
    desc: "Standard test method for determining air leakage rate by fan pressurization. The default standard in IECC and many North American jurisdictions. Limited to single-zone buildings; requires interior doors to be open. Multi-point method only, test range 10–60 Pa.",
  },
  {
    name: "CGSB 149.10-2019",
    desc: "Canadian standard for determination of the airtightness of building envelopes by the fan depressurization method. Includes closed-up and as-operated preparations. Maximum 60 Pa for multi-point; 50 ± 3 Pa for single- and two-point methods.",
  },
  {
    name: "ISO 9972:2015",
    desc: "International standard for thermal performance of buildings — determination of air permeability by fan pressurization. Commonly specified in European projects. Multi-point method, test range up to 100 Pa, reporting reference at 50 Pa.",
  },
  {
    name: "USACE (2012)",
    desc: "US Army Corps of Engineers Air Leakage Test Protocol for Building Envelopes. Developed for large military buildings; the precursor to ASTM E3158. Multi-point method, induced test pressure 50–85 Pa, reporting reference at 75 Pa.",
  },
];

const process = [
  {
    step: "01",
    title: "Test Coordination",
    desc: "We walk the building with the project team, reviewing drawings, mechanical systems, and envelope details, then deliver a comprehensive testing plan covering fan array configuration, access points, preparation requirements, and scheduling.",
  },
  {
    step: "02",
    title: "Building Preparation",
    desc: "Once the scope is agreed upon, we execute a contract and coordinate with the project team to prepare the building for testing. This includes sealing intentional openings including HVAC dampers, exhaust fans, and penetrations, and establishing safe test zones.",
  },
  {
    step: "03",
    title: "Equipment Setup",
    desc: "Deploy and calibrate the fan array across multiple openings, synced to centralized data acquisition.",
  },
  {
    step: "04",
    title: "Running the Test",
    desc: "Run pressurization and depressurization sequences, collecting CFM at multiple pressure differentials.",
  },
  {
    step: "05",
    title: "Data & Results Interpretation",
    desc: "Systematic envelope survey under pressure, optionally combined with IR thermography, followed by analysis of all collected data.",
  },
  {
    step: "06",
    title: "Reporting Test Results",
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
    a: "Yes. The 2021 IECC (Section R402.4.1.2) requires each dwelling unit in attached multifamily buildings up to three stories to pass an individual compartmentalization test at 50 Pa. The limit is 0.3 CFM50 per square foot of unit enclosure area, including all floors, ceilings, and walls surrounding the unit. We test each unit individually and deliver per-unit results for code compliance.",
  },
  {
    q: "How long does testing take?",
    a: "Large buildings (200,000–1,000,000 sq ft) typically require 1–3 days on-site including setup, testing, and leak survey. We schedule around your operations.",
  },
  {
    q: "Can you test occupied buildings?",
    a: "Yes. We use carefully managed pressurization protocols suited to partially or fully occupied facilities, coordinating with building management to minimize disruption.",
  },
  {
    q: "How is this different from a residential blower door test?",
    a: "Residential testing follows ASTM E779, using one fan producing 2,000–5,000 CFM. Large building testing follows ASTM E3158, which may require 50,000–200,000+ CFM. We deploy arrays of 2–20+ calibrated fans with centralized data acquisition built for large volumes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you perform unit compartmentalization testing for multifamily buildings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The 2021 IECC (Section R402.4.1.2) requires each dwelling unit in attached multifamily buildings up to three stories to pass an individual compartmentalization test at 50 Pa. The limit is 0.3 CFM50 per square foot of unit enclosure area, including all floors, ceilings, and walls surrounding the unit. We test each unit individually and deliver per-unit results for code compliance." },
    },
    {
      "@type": "Question",
      name: "How long does large building blower door testing take?",
      acceptedAnswer: { "@type": "Answer", text: "Large buildings (200,000–1,000,000 sq ft) typically require 1–3 days on-site including setup, testing, and leak survey. We schedule around your operations." },
    },
    {
      "@type": "Question",
      name: "Can you test occupied buildings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We use carefully managed pressurization protocols suited to partially or fully occupied facilities, coordinating with building management to minimize disruption." },
    },
    {
      "@type": "Question",
      name: "How is large building blower door testing different from residential testing?",
      acceptedAnswer: { "@type": "Answer", text: "Residential testing follows ASTM E779, using one fan producing 2,000–5,000 CFM. Large building testing follows ASTM E3158, which may require 50,000–200,000+ CFM. We deploy arrays of 2–20+ calibrated fans with centralized data acquisition built for large volumes." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lesnrg.com" },
    { "@type": "ListItem", position: 2, name: "Large Building Blower Door Testing", item: "https://www.lesnrg.com/large-building-blower-door-testing" },
  ],
};

export default function BlowerDoorTestingPage() {
  return (
    <div className="min-h-screen pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#111111] py-8 min-h-[520px] border-b border-white/8 relative overflow-hidden">
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
            <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">Commercial Testing</span>
          </div>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Whole Building<br />Blower Door<br />Testing
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            Multi-fan air leakage testing for new and existing commercial and multifamily facilities of any size.
            ASTM E3158 compliant.
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
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">New Construction</span>
            <h2 className="section-title mb-5">2021 IECC Compliance Testing</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-4">
              The 2021 International Energy Conservation Code (IECC) establishes mandatory air leakage testing
              requirements for new large commercial buildings. Under Section C402.5, buildings exceeding
              25,000 sq ft of conditioned floor area must demonstrate a maximum whole-building air leakage
              rate of <strong className="text-[#111111]">0.40 CFM75 per square foot</strong> of gross above-grade
              wall area, tested at 75 Pascals per ASTM E3158.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-6">
              For attached multifamily buildings up to three stories, Section R402.4.1.2 requires individual
              unit compartmentalization testing at 50 Pa with a maximum of 0.3 CFM50/ft² of unit enclosure area.
              Sampling is not permitted. Every unit must pass independently.
            </p>
            <ul className="space-y-2">
              {[
                "Whole-building testing per ASTM E3158",
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
                { label: "Test Method", value: "E3158", sub: "ASTM compliant" },
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
        </div>
      </section>

      {/* Existing Buildings */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Existing Buildings</span>
            <h2 className="section-title mb-4">Why Test an Existing Building?</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              Air leakage testing is not just a code checkbox for new construction. It is one of the most
              effective diagnostic tools available for identifying performance problems in existing buildings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Energy Conservation",
                desc: "Uncontrolled air infiltration accounts for 25–40% of heating and cooling loads in commercial buildings. Whole building blower door testing quantifies the exact leakage rate, giving owners a clear baseline before investing in envelope improvements and measurable proof of savings afterward.",
              },
              {
                title: "Moisture & Mold",
                desc: "Air movement through the building envelope carries moisture into wall cavities and interstitial spaces. In cold climates this leads to condensation, rot, and mold growth that is often invisible until structural damage has occurred. Pressurization testing locates the breach before it becomes a costly repair.",
              },
              {
                title: "Indoor Air Quality",
                desc: "Uncontrolled infiltration introduces unconditioned, unfiltered outside air including pollutants, allergens, and vehicle exhaust, directly into occupied spaces. Identifying and sealing major air pathways improves occupant health and reduces the load on mechanical ventilation systems.",
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

      {/* Building Types */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-8">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1664.JPG", alt: "Large commercial building" },
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_0813.JPG", alt: "Blower door fan setup" },
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3195.JPG", alt: "Large building testing" },
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3445.JPG", alt: "Commercial air leakage test" },
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7551.JPG", alt: "Building envelope testing" },
              { src: "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_9316.JPG", alt: "Multi-fan array deployment" },
            ].map((photo) => (
              <div key={photo.src} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:col-span-3">
              <Image
                src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1295.JPG"
                alt="Dual blower door fan array installed in commercial doorway"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">How It Works</span>
            <h2 className="section-title !text-white">Our Testing Process</h2>
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
      <section className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Deliverables</span>
              <h2 className="section-title !text-white mb-5">What You Receive</h2>
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

      {/* Building Preparation */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Building Preparation</span>
            <h2 className="section-title mb-4">Two Test Preparation Types</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              ASTM E3158 provides two preparation options depending on the purpose of the test. The correct preparation is determined by the applicable code, specification, or green standard — and must be agreed upon before testing begins.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card border-l-4 border-l-[#F5C500]">
              <h3 className="text-[#111111] font-bold mb-1">Building Envelope Preparation</h3>
              <p className="text-[#6b6b62] text-sm mb-4">Used when the goal is to test the air barrier itself — the most common method for code compliance. All intentional openings in the building envelope are sealed.</p>
              <ul className="space-y-2">
                {[
                  "All HVAC dampers closed; openings sealed",
                  "Natural ventilation openings sealed",
                  "Exhaust fans, dryer vents, and penetrations sealed",
                  "Floor drains and plumbing traps filled with water",
                  "Windows, exterior doors, and roof hatches closed and latched",
                  "Interior doors left open to ensure uniform pressure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                    <CheckCircle size={12} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-[#111111] font-bold mb-1">Operational Envelope Preparation</h3>
              <p className="text-[#6b6b62] text-sm mb-4">Used when the goal is to test the building in its as-operated condition — typical for energy benchmarking, commissioning, or occupied building tests.</p>
              <ul className="space-y-2">
                {[
                  "HVAC dampers closed as they would be during normal operation",
                  "Openings without dampers left as found",
                  "Interior doors that are normally closed remain closed and latched",
                  "Other interior doors left open",
                  "Dryers left as found; vent sealed only if dryer not installed",
                  "Floor drains and plumbing traps filled with water",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                    <CheckCircle size={12} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#f9f9f7] border border-[#e4e4de] rounded-2xl p-6">
            <h3 className="text-[#111111] font-bold mb-3">Safety Requirements on Test Day</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Combustion Appliances", desc: "All gas appliances, furnaces, fireplaces, and boilers must be powered off. Depressurization can cause backdrafting and draw combustion gases into the building." },
                { title: "Fire Alarms", desc: "Set fire alarm systems to test mode before starting. Construction dust or diagnostic smoke machines can trigger alarms during pressurization." },
                { title: "Plumbing Traps", desc: "Fill all floor drains and plumbing fixture traps with water prior to testing. Pressure differentials can draw sewer gases through dry traps." },
                { title: "Fan Guards & Power", desc: "Confirm all fan blade guards are undamaged. Use one fan per electrical circuit to avoid tripped breakers. Keep cords clear of foot traffic." },
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-[#111111] font-semibold text-sm mb-1">{item.title}</div>
                  <p className="text-[#6b6b62] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictional Requirements */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Jurisdictional Requirements</span>
            <h2 className="section-title mb-4">Air Leakage Thresholds by Code & Standard</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              Requirements vary by jurisdiction, building type, and intended use. Where jurisdictional requirements and project specifications conflict, the more conservative requirement governs. Always verify the applicable code before testing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "IECC (2018)", type: "Commercial & Multifamily", req: "0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "Compliance option; applies to most jurisdictions adopting the 2018 IECC or later." },
              { name: "ASHRAE 90.1 (2016)", type: "Commercial, all except low-rise residential", req: "0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "Energy standard compliance option. ASTM E779 or E3158 accepted." },
              { name: "Washington State (2018)", type: "All building types", req: "0.25 CFM75/ft²", pressure: "@ 75 Pa", note: "Mandatory energy code requirement; among the most stringent in the US. Failure requires repair and retest." },
              { name: "New York City (2020)", type: "Commercial, 10,000–50,000 ft², ≤75 ft", req: "0.25 CFM75/ft²", pressure: "@ 75 Pa", note: "Mandatory energy code requirement. Larger or taller buildings have separate requirements." },
              { name: "USACE (2012)", type: "US military buildings", req: "0.25 CFM75/ft²", pressure: "@ 75 Pa", note: "Army Corps of Engineers protocol. Multi-point test required; test pressure 50–85 Pa, reported at 75 Pa." },
              { name: "LEED v4.1", type: "All building types", req: "0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "0.40 CFM75/ft² earns points; higher performance (0.25 CFM75/ft²) earns additional credits. Retest required if over 0.60." },
              { name: "PHIUS (2018)", type: "All building types", req: "0.06–0.10 CFM75/ft²", pressure: "@ 75 Pa or 50 Pa", note: "≥5 stories: 0.10 CFM75/ft² or 0.08 CFM50/ft². Lower buildings: 0.08 CFM75/ft² or 0.06 CFM50/ft²." },
              { name: "ABAA Spec 01410", type: "Commercial", req: "0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "Standard specification language for projects without a jurisdictional requirement. Repair and retest if exceeded." },
              { name: "GSA (2018)", type: "Federal government buildings", req: "0.10–0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "Tiered requirements: T1 = 0.25, T2 = 0.15, T3 = 0.10 CFM75/ft² depending on project type." },
              { name: "Philadelphia, PA (2026)", type: "Commercial, all occupancies", req: "0.40 CFM75/ft²", pressure: "@ 75 Pa", note: "2021 IECC mandatory for permits filed on or after January 13, 2026. Section C401.3 requires a Thermal Envelope Certificate to be permanently posted in the building documenting insulation R-values, fenestration U-factors, and air leakage test results." },
            ].map((j) => (
              <div key={j.name} className="card">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1 mb-3">
                  <span className="text-[#111111] font-bold text-xs">{j.name}</span>
                </div>
                <div className="text-[#6b6b62] text-xs uppercase tracking-wider mb-1">{j.type}</div>
                <div className="text-[#111111] font-black text-lg mb-0.5" style={{ letterSpacing: "-0.02em" }}>{j.req}</div>
                <div className="text-[#F5C500] text-xs font-semibold mb-3">{j.pressure}</div>
                <p className="text-[#6b6b62] text-xs leading-relaxed">{j.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philadelphia Thermal Envelope Certificate */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Philadelphia, PA — Effective 2026</span>
              <h2 className="section-title mb-5">Commercial Thermal Envelope Certificate</h2>
              <p className="text-[#6b6b62] leading-relaxed mb-4">
                Philadelphia adopted the 2021 International Energy Conservation Code, effective for permit applications
                filed on or after January 13, 2026. Under Section C401.3, all new commercial construction must complete
                a <strong className="text-[#111111]">Commercial Thermal Envelope Certificate</strong> — a permanent
                document that must be posted in the building and submitted to the Authority Having Jurisdiction.
              </p>
              <p className="text-[#6b6b62] leading-relaxed mb-6">
                The certificate documents the entire thermal envelope as built, including verified air leakage test
                results. Testing must be conducted per ASTM E779, ASTM E3158, or an equivalent method
                approved by the code official. The maximum permitted air leakage rate for commercial buildings is
                <strong className="text-[#111111]"> 0.40 CFM75/ft²</strong> of gross above-grade wall area.
              </p>
              <ul className="space-y-2">
                {[
                  "Insulation R-values for all opaque envelope assemblies",
                  "U-factors and SHGCs for all fenestration",
                  "Verified air leakage test results from a qualified tester",
                  "Area-weighted averages required where multiple values exist",
                  "Certificate must be permanently posted in an approved location",
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
                <span className="text-[#F5C500] font-bold text-sm">2021 IECC § C401.3 — Philadelphia</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Max Leakage", value: "0.40 CFM75/ft²", sub: "Gross above-grade wall area" },
                  { label: "Test Pressure", value: "75 Pa", sub: "Commercial buildings" },
                  { label: "Test Methods", value: "E779 / E3158", sub: "ASTM or approved equivalent" },
                  { label: "Effective", value: "Jan 2026", sub: "New permit applications" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1.5">{item.label}</div>
                    <div className="text-[#F5C500] font-black text-lg mb-0.5" style={{ letterSpacing: "-0.02em" }}>{item.value}</div>
                    <div className="text-white/30 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                We perform the air leakage testing required to complete the certificate and deliver results in the
                format accepted by the Philadelphia Department of Licenses and Inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Compliance</span>
            <h2 className="section-title !text-white">Testing Standards</h2>
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
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
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
            <span className="text-white/30 text-sm">Residential Energy Efficiency, Air Leakage Testing</span>
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
              Leakage is measured against the combined surface area of all six bounding surfaces, including floors,
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 xl:px-12">
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
        </div>
      </section>

      {/* Stack Effect */}
      <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Stack Effect</span>
            <h2 className="section-title mb-5">A Challenge Unique to Tall Buildings</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-4">
              Stack effect is the pressure-driven movement of air through a building caused by temperature differences between inside and outside. In taller buildings, warm air rises and escapes through upper floors and the roof while cold outside air is drawn in at lower levels — or vice versa in summer. The taller the building, the greater the pressure differential.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-4">
              This constant pressure gradient masks air leakage measurements and can make it impossible to accurately test the building envelope without accounting for it. A test performed without correcting for stack effect will produce unreliable results — either overstating or understating actual leakage.
            </p>
            <p className="text-[#6b6b62] leading-relaxed">
              ASTM E3158 addresses this directly. By deploying manometers at multiple floors simultaneously — typically at grade level and at the roof — we measure the actual pressure differential across the building height during the test. This data is used to correct the fan pressurization readings and produce a true, stack-effect-compensated air leakage result.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-white p-6 border border-[#e4e4de]">
            <Image
              src="/stack-effect.png"
              alt="Stack effect diagram showing positive and negative pressure across building floors"
              width={800}
              height={520}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#F5C500]">
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
