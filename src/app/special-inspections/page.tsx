import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, ArrowRight, AlertTriangle, FileCheck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Air Barrier Special Inspections Philadelphia | 2021 IECC Compliance | LES NRG",
  description: "LES NRG is Philadelphia's first certified special inspection agency for whole building air barrier testing. New 2021 IECC code adoption requires air barrier special inspections for all commercial construction with permits filed after January 13, 2026. Learn about compliance paths and testing requirements.",
  keywords: "special inspections Philadelphia, air barrier special inspection, 2021 IECC Philadelphia, air barrier testing Philadelphia, special inspection agency Philadelphia, whole building blower door testing, air barrier compliance, commercial air leakage testing, IBC 1705.18, Philadelphia energy code, air barrier continuity inspection, ASTM E3158 Philadelphia",
  openGraph: {
    title: "Air Barrier Special Inspections Philadelphia | LES NRG",
    description: "Philadelphia's first certified special inspection agency for whole building air barrier testing. 2021 IECC compliance for commercial construction.",
    url: "https://www.lesnrg.com/special-inspections",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const compliancePaths = [
  {
    path: "Option 1",
    title: "Materials",
    code: "C402.5.1.2.1",
    standard: "ASTM E2178",
    threshold: "0.004 CFM/ft²",
    pressure: "@ 75 Pa",
    desc: "Each individual material forming part of the air barrier is tested in a laboratory and certified to have an air permeability not exceeding 0.004 CFM per square foot at 75 Pa. The special inspector verifies that only approved materials are installed and that all joints, seams, and penetrations are sealed per the manufacturer's instructions.",
    inspectionFocus: [
      "Verify material certifications and test reports on file",
      "Confirm listed materials match approved submittals",
      "Inspect joints, seams, and transitions for continuity",
      "Document penetration sealing at all envelope openings",
    ],
  },
  {
    path: "Option 2",
    title: "Assemblies",
    code: "C402.5.1.2.2",
    standard: "ASTM E2357",
    threshold: "0.04 CFM/ft²",
    pressure: "@ 75 Pa",
    desc: "Complete wall, roof, and floor assemblies are tested as built-up systems in a laboratory. Each assembly must demonstrate an air leakage rate not exceeding 0.04 CFM per square foot at 75 Pa. The special inspector verifies that field-installed assemblies match the tested configurations and that transitions between different assembly types are properly detailed.",
    inspectionFocus: [
      "Verify assembly test reports match installed configurations",
      "Inspect transitions between different assembly types",
      "Confirm window and door rough opening integration",
      "Document roof-to-wall and wall-to-foundation connections",
    ],
  },
  {
    path: "Option 3",
    title: "Whole Building Testing",
    code: "C402.5.1.2.3",
    standard: "ASTM E3158",
    threshold: "0.40 CFM/ft²",
    pressure: "@ 75 Pa",
    desc: "The completed building is tested as a whole using multi-fan pressurization per ASTM E3158. The maximum permitted air leakage rate is 0.40 CFM per square foot of gross above-grade wall area at 75 Pa. This is the most definitive compliance path because it measures actual building performance rather than relying on material or assembly certifications alone.",
    inspectionFocus: [
      "Test performed by approved special inspection agency",
      "Multi-fan array deployed per ASTM E3158 protocol",
      "Results reported per square foot of above-grade wall area",
      "Signed inspection report submitted to AHJ",
    ],
  },
];

const whyItMatters = [
  {
    title: "Code Enforcement",
    desc: "Philadelphia L&I now requires documented proof of air barrier compliance before issuing a certificate of occupancy for commercial buildings. Without a special inspection report on file, the project cannot close out.",
  },
  {
    title: "Liability Protection",
    desc: "A special inspection conducted by an approved agency provides independent, third-party documentation that the air barrier was installed correctly. This protects architects, contractors, and owners from future disputes about envelope performance.",
  },
  {
    title: "Building Performance",
    desc: "Air leakage through the building envelope accounts for 25-40% of heating and cooling loads in commercial buildings. A verified air barrier reduces energy costs, prevents moisture-related failures, and improves occupant comfort from day one.",
  },
  {
    title: "Early Detection",
    desc: "Special inspections during construction catch air barrier defects before they are concealed behind finishes. Fixing a missed seal at the rough-in stage costs a fraction of what it would cost after the building is occupied.",
  },
];

const faqs = [
  {
    q: "What is a special inspection?",
    a: "A special inspection is a third-party quality assurance inspection required by the International Building Code (IBC Chapter 17) for certain building components that are critical to life safety and performance. The inspection must be performed by an agency approved by the Authority Having Jurisdiction — in Philadelphia, that is the Department of Licenses and Inspections (L&I).",
  },
  {
    q: "When did Philadelphia start requiring air barrier special inspections?",
    a: "Philadelphia adopted the 2021 International Energy Conservation Code (IECC) for all permit applications filed on or after January 13, 2026. The 2021 IECC, together with the referenced 2021 IBC Section 1705.18, requires special inspections for air barrier compliance on all new commercial construction.",
  },
  {
    q: "Which compliance path should I choose?",
    a: "It depends on the project. The materials path (Option 1) requires the least on-site testing but demands rigorous tracking of material certifications and continuous inspection during installation. The whole building testing path (Option 3) is the most definitive — it measures actual performance — and is often the most practical for large projects. We can help your team evaluate which path fits your project.",
  },
  {
    q: "Does this apply to residential construction?",
    a: "The special inspection requirement under IBC 1705.18 applies to commercial construction. Residential buildings under the IRC have separate air leakage testing requirements under Section R402.4.1.2, which requires individual unit compartmentalization testing for attached multifamily buildings up to three stories.",
  },
  {
    q: "Can you handle both the special inspection and the blower door test?",
    a: "Yes. LES NRG is an approved special inspection agency and performs whole building blower door testing per ASTM E3158. We handle the full scope — inspection during construction, final air leakage testing, and the signed special inspection report required for permit closeout.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Air Barrier Special Inspections",
  description: "LES NRG is Philadelphia's first certified special inspection agency for whole building air barrier testing. We perform air barrier special inspections per IBC 1705.18 and whole building blower door testing per ASTM E3158 for commercial construction in compliance with the 2021 IECC.",
  provider: {
    "@type": "ProfessionalService",
    name: "LES NRG",
    url: "https://www.lesnrg.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "State", name: "New Jersey" },
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "Delaware" },
    ],
  },
  serviceType: "Air Barrier Special Inspection",
  areaServed: [
    { "@type": "City", name: "Philadelphia" },
    { "@type": "State", name: "Pennsylvania" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lesnrg.com" },
    { "@type": "ListItem", position: 2, name: "Special Inspections", item: "https://www.lesnrg.com/special-inspections" },
  ],
};

export default function SpecialInspectionsPage() {
  return (
    <div className="min-h-screen pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#111111] py-8 min-h-[520px] border-b border-white/8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={13} className="text-[#F5C500]" />
            <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">Special Inspections</span>
          </div>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Air Barrier<br />Special Inspections<br />Philadelphia
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            Philadelphia adopted the 2021 IECC effective January 2026 — making air barrier testing a mandatory special
            inspection for all new commercial construction. LES NRG is Philadelphia&apos;s first certified special
            inspection agency for whole building blower door testing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <a href="#compliance-paths" className="btn-outline-yellow">
              Compliance Paths
            </a>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Philadelphia Code Update</span>
              <h2 className="section-title mb-5">What Changed in 2026</h2>
              <p className="text-[#6b6b62] leading-relaxed mb-4">
                On January 13, 2026, the City of Philadelphia adopted the <strong className="text-[#111111]">2021 International Energy
                Conservation Code (IECC)</strong> for all new commercial construction permit applications. This is a
                significant step forward from the previous code cycle and introduces several new requirements for
                building envelope performance.
              </p>
              <p className="text-[#6b6b62] leading-relaxed mb-4">
                The most consequential change for project teams is the addition of <strong className="text-[#111111]">air barrier
                special inspections</strong> under IBC Section 1705.18. For the first time in Philadelphia,
                commercial buildings must have their air barrier systems inspected by an approved special inspection
                agency during construction — and, under certain compliance paths, verified through whole building
                air leakage testing before a certificate of occupancy can be issued.
              </p>
              <p className="text-[#6b6b62] leading-relaxed">
                This requirement applies to all commercial occupancies, including offices, retail, institutional,
                industrial, and multifamily buildings classified under the commercial code.
              </p>
            </div>
            <div className="bg-[#111111] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle size={14} className="text-[#F5C500]" />
                <span className="text-[#F5C500] font-bold text-sm">New Requirement — Effective January 2026</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Code", value: "2021 IECC", sub: "Commercial provisions" },
                  { label: "Effective", value: "Jan 13, 2026", sub: "New permit applications" },
                  { label: "Requirement", value: "IBC 1705.18", sub: "Air barrier special inspection" },
                  { label: "Jurisdiction", value: "Philadelphia", sub: "Dept. of L&I" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1.5">{item.label}</div>
                    <div className="text-[#F5C500] font-black text-lg mb-0.5" style={{ letterSpacing: "-0.02em" }}>{item.value}</div>
                    <div className="text-white/30 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                All commercial construction projects filing for a building permit in Philadelphia on or after
                January 13, 2026 must comply with the 2021 IECC, including the air barrier special inspection
                requirements. Projects permitted before this date remain under the previous code cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Certified Agency */}
      <section className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="max-w-3xl">
            <span className="section-label">First in Philadelphia</span>
            <h2 className="section-title !text-white mb-5">Philadelphia&apos;s First Certified Agency for Air Barrier Testing</h2>
            <p className="text-white/50 leading-relaxed mb-4">
              LES NRG is the first special inspection agency approved in Philadelphia for whole building air
              barrier testing under the 2021 IECC. With over 4,000 blower door tests completed across
              Pennsylvania, New Jersey, New York, and Delaware, we bring unmatched field experience to
              every project.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              As a certified special inspection agency, we are authorized to perform the inspections and testing
              required under IBC Section 1705.18 and deliver the signed reports that Philadelphia L&I requires
              for permit closeout. Our team handles the full scope — from air barrier continuity inspections
              during construction through final whole building pressurization testing.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: "4,000+", label: "Blower door tests completed" },
                { value: "1st", label: "Certified agency in Philadelphia" },
                { value: "4 States", label: "PA, NJ, NY, DE coverage" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-5 text-center">
                  <div className="text-[#F5C500] text-3xl font-black mb-1" style={{ letterSpacing: "-0.02em" }}>{stat.value}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Paths */}
      <section id="compliance-paths" className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">2021 IECC § C402.5.1</span>
            <h2 className="section-title mb-4">Air Barrier Compliance Paths</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              The 2021 IECC requires a continuous air barrier for all commercial buildings. There are three
              compliance paths to demonstrate that the air barrier meets code. Each path has different testing
              standards, thresholds, and inspection requirements. The project team selects the compliance path;
              the special inspector verifies it.
            </p>
          </div>
          <div className="space-y-6">
            {compliancePaths.map((cp) => (
              <div key={cp.path} className="card border-l-4 border-l-[#F5C500]">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1">
                        <span className="text-[#111111] font-bold text-xs">{cp.path}: {cp.title}</span>
                      </div>
                      <span className="text-[#6b6b62] text-xs">§ {cp.code}</span>
                    </div>
                    <p className="text-[#6b6b62] leading-relaxed mb-4">{cp.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <div className="text-[#6b6b62] text-xs uppercase tracking-wider mb-0.5">Standard</div>
                        <div className="text-[#111111] font-bold text-sm">{cp.standard}</div>
                      </div>
                      <div>
                        <div className="text-[#6b6b62] text-xs uppercase tracking-wider mb-0.5">Max Leakage</div>
                        <div className="text-[#111111] font-bold text-sm">{cp.threshold} <span className="text-[#F5C500] font-semibold">{cp.pressure}</span></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#111111] font-semibold text-sm mb-3">Special Inspection Focus</div>
                    <ul className="space-y-2">
                      {cp.inspectionFocus.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                          <CheckCircle size={12} className="text-[#F5C500] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Callout */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">At a Glance</span>
            <h2 className="section-title mb-4">Compliance Path Comparison</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {compliancePaths.map((cp) => (
              <div key={cp.path} className={`card ${cp.path === "Option 3" ? "border-2 border-[#F5C500]" : ""}`}>
                {cp.path === "Option 3" && (
                  <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2 py-0.5 mb-3">
                    <span className="text-[#111111] font-bold text-[10px] uppercase tracking-wider">Most Definitive</span>
                  </div>
                )}
                <h3 className="text-[#111111] font-bold mb-1">{cp.path}: {cp.title}</h3>
                <div className="text-[#6b6b62] text-xs mb-4">§ {cp.code}</div>
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-[#6b6b62] text-xs uppercase tracking-wider">Standard</div>
                    <div className="text-[#111111] font-bold">{cp.standard}</div>
                  </div>
                  <div>
                    <div className="text-[#6b6b62] text-xs uppercase tracking-wider">Threshold</div>
                    <div className="text-[#F5C500] font-black text-xl" style={{ letterSpacing: "-0.02em" }}>{cp.threshold}</div>
                    <div className="text-[#6b6b62] text-xs">{cp.pressure}</div>
                  </div>
                  <div>
                    <div className="text-[#6b6b62] text-xs uppercase tracking-wider">What&apos;s Tested</div>
                    <div className="text-[#111111] font-medium text-sm">{cp.title === "Materials" ? "Individual materials" : cp.title === "Assemblies" ? "Built-up assemblies" : "Entire building"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Project Impact</span>
            <h2 className="section-title mb-4">Why This Matters for Your Project</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyItMatters.map((item) => (
              <div key={item.title} className="card">
                <div className="w-1.5 h-6 bg-[#F5C500] rounded-full mb-4" />
                <h3 className="text-[#111111] font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Scope of Service</span>
              <h2 className="section-title !text-white mb-5">What We Deliver</h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                As an approved special inspection agency, LES NRG provides the complete scope of air barrier
                inspection and testing services required under the 2021 IECC.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-construction air barrier plan review",
                  "On-site inspections during air barrier installation",
                  "Continuity verification at transitions and penetrations",
                  "Whole building air leakage testing per ASTM E3158",
                  "Leak location identification and documentation",
                  "Signed special inspection report for L&I",
                  "Thermal Envelope Certificate support (§ C401.3)",
                  "Post-remediation re-testing if needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/50 text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <FileCheck size={14} className="text-[#F5C500]" />
                <span className="text-[#F5C500] font-bold text-sm">Inspection Process</span>
              </div>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Plan Review", desc: "Review construction documents, air barrier details, and identify the compliance path before construction begins." },
                  { step: "02", title: "Field Inspections", desc: "Inspect air barrier installation at critical stages — before concealment by finishes, insulation, or cladding." },
                  { step: "03", title: "Testing", desc: "Perform whole building blower door testing per ASTM E3158 once the envelope is substantially complete." },
                  { step: "04", title: "Reporting", desc: "Deliver signed special inspection report documenting compliance, test results, and any corrective actions taken." },
                ].map((step) => (
                  <div key={step.step} className="relative pl-8">
                    <div className="absolute left-0 top-0 text-[#F5C500] font-bold text-xs">{step.step}</div>
                    <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thermal Envelope Certificate */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">2021 IECC § C401.3</span>
              <h2 className="section-title mb-5">Thermal Envelope Certificate</h2>
              <p className="text-[#6b6b62] leading-relaxed mb-4">
                In addition to the special inspection, the 2021 IECC requires a <strong className="text-[#111111]">Commercial
                Thermal Envelope Certificate</strong> for all new commercial buildings in Philadelphia. This
                certificate must be permanently posted in the building and filed with L&I.
              </p>
              <p className="text-[#6b6b62] leading-relaxed mb-6">
                The certificate documents the as-built thermal envelope including insulation R-values, fenestration
                U-factors and SHGCs, and verified air leakage test results. Air barrier testing performed as part of
                the special inspection directly feeds into this certificate.
              </p>
              <ul className="space-y-2">
                {[
                  "Insulation R-values for all opaque assemblies",
                  "Fenestration U-factors and SHGCs",
                  "Verified air leakage test results",
                  "Area-weighted averages where multiple values exist",
                  "Must be permanently posted in the building",
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
                <span className="text-[#F5C500] font-bold text-sm">§ C401.3 — Thermal Envelope Certificate</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Document Type", value: "Permanent", sub: "Posted in building" },
                  { label: "Filed With", value: "L&I", sub: "Authority Having Jurisdiction" },
                  { label: "Includes", value: "Air Test", sub: "Verified leakage results" },
                  { label: "Applies To", value: "All Commercial", sub: "New construction" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-1.5">{item.label}</div>
                    <div className="text-[#F5C500] font-black text-lg mb-0.5" style={{ letterSpacing: "-0.02em" }}>{item.value}</div>
                    <div className="text-white/30 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                We deliver air leakage test results in the format required for the Thermal Envelope Certificate,
                ensuring a seamless path from testing to permit closeout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-8">
            <span className="section-label">Applicable Projects</span>
            <h2 className="section-title mb-4">Buildings That Require Special Inspections</h2>
            <p className="text-[#6b6b62] leading-relaxed max-w-2xl">
              All new commercial construction in Philadelphia filing for permits after January 13, 2026 must comply
              with the 2021 IECC air barrier requirements. This includes:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Office Buildings",
              "Retail & Mixed-Use",
              "Hotels & Hospitality",
              "Schools & Universities",
              "Healthcare Facilities",
              "Large Multifamily (4+ stories)",
              "Warehouses & Industrial",
              "Government & Institutional",
              "Data Centers",
              "Laboratories",
            ].map((b) => (
              <div key={b} className="flex items-center gap-2 bg-[#f5f5f0] rounded-lg px-3 py-2">
                <Building2 size={13} className="text-[#F5C500] shrink-0" />
                <span className="text-[#111111] text-sm font-medium">{b}</span>
              </div>
            ))}
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

      {/* CTA */}
      <section className="py-8 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Need a Special Inspection Agency?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Get in touch and we&apos;ll scope the inspection and testing requirements for your Philadelphia project.
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
