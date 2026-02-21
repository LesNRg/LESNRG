import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle, ArrowRight, FileText, Thermometer,
  Shield, BarChart3, Home, Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "PHIUS Passive House Verification | LES NRG | Philadelphia, PA",
  description: "Independent PHIUS+ passive house verification and certification. Third-party inspections, airtightness testing, and full certification support from design through certificate. Philadelphia, PA.",
  openGraph: {
    title: "PHIUS Passive House Verification | LES NRG",
    description: "Independent PHIUS+ passive house verification. Third-party inspections, airtightness testing, and full certification support.",
    url: "https://www.lesnrg.com/phius-passive-house-verification",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const standards = [
  {
    name: "PHIUS+ 2021",
    desc: "The current PHIUS standard sets climate-specific heating and cooling load limits and source energy budgets — the most rigorous residential energy standard available in North America.",
  },
  {
    name: "ASTM E779",
    desc: "Blower door airtightness testing protocol required as part of PHIUS certification. PHIUS targets 0.06 CFM50/ft² of enclosure area — far tighter than code minimum.",
  },
  {
    name: "ASHRAE 62.2",
    desc: "Mechanical ventilation standard that PHIUS projects must comply with to ensure controlled fresh air delivery in ultra-airtight buildings.",
  },
  {
    name: "Energy Star / DOE ZERH",
    desc: "PHIUS certified projects can simultaneously satisfy Energy Star for New Homes and DOE Zero Energy Ready Home requirements with a single verification pathway.",
  },
];

const process = [
  {
    step: "01",
    title: "Pre-Construction Review",
    desc: "We review your energy model, architectural drawings, and mechanical plans to confirm PHIUS compliance pathways before construction begins.",
  },
  {
    step: "02",
    title: "Energy Model Verification",
    desc: "Your WUFI Passive or PHIUS-approved energy model is reviewed for accuracy against approved component data and site conditions.",
  },
  {
    step: "03",
    title: "Rough-In Site Inspection",
    desc: "An on-site inspection verifies that air barrier continuity, insulation placement, and thermal bridge details match the approved design.",
  },
  {
    step: "04",
    title: "Airtightness Testing",
    desc: "We conduct a PHIUS-compliant blower door test targeting 0.06 CFM50/ft² or below. Results are logged and submitted directly to PHIUS.",
  },
  {
    step: "05",
    title: "Final Inspection",
    desc: "We confirm mechanical system installation, ventilation commissioning, window and door performance, and all remaining certification checklist items.",
  },
  {
    step: "06",
    title: "Certification Submission",
    desc: "We compile and submit all verification documentation to PHIUS on your behalf, coordinating any required follow-up until the certificate is issued.",
  },
];

const metrics = [
  { label: "0.06 CFM50/ft²", desc: "PHIUS airtightness target — roughly 5× tighter than IECC code minimum for residential" },
  { label: "Heating Demand", desc: "Climate-specific annual heating load limit in kBtu/ft²·yr set by the PHIUS+ 2021 standard" },
  { label: "Cooling Demand", desc: "Annual cooling load limit accounting for latent loads — especially critical in humid climates" },
  { label: "Source Energy", desc: "Total annual source energy budget in kBtu/ft²·yr ensuring overall building efficiency, not just envelope" },
];

const buildingTypes = [
  { type: "Single-Family Homes", note: "New construction & gut rehab" },
  { type: "Multifamily Buildings", note: "PHIUS+ Multifamily pathway" },
  { type: "Row Homes & Townhouses", note: "Contributing author to PH Rowhouse Manual" },
  { type: "Affordable Housing", note: "Habitat for Humanity advisor" },
  { type: "Mixed-Use Buildings", note: "Combined residential/commercial" },
  { type: "Accessory Dwelling Units", note: "Compact high-performance design" },
  { type: "Deep Energy Retrofits", note: "Existing building upgrades" },
  { type: "Net Zero Homes", note: "PHIUS + PV integration" },
];

const faqs = [
  {
    q: "What is a PHIUS Verifier and why do I need one?",
    a: "A PHIUS Certified Verifier is an independent third-party professional trained and credentialed by PHIUS to inspect and certify that a building meets the PHIUS+ standard. Certification cannot be self-reported — an approved verifier must conduct site inspections and airtightness testing and submit documentation directly to PHIUS.",
  },
  {
    q: "When should I bring a verifier onto the project?",
    a: "As early as possible — ideally during design development. Early engagement allows us to review the energy model and construction details before they are locked in, catching potential compliance gaps before they become expensive field problems.",
  },
  {
    q: "How many site visits are required?",
    a: "PHIUS certification typically requires a minimum of two site visits: a rough-in inspection and a final inspection that includes blower door testing. Additional visits may be needed for complex projects or if corrections are required.",
  },
  {
    q: "What airtightness level does my project need to achieve?",
    a: "PHIUS+ 2021 requires 0.06 CFM50/ft² of total enclosure area or better. This is significantly tighter than the IECC code minimum of 3 ACH50 for residential. Achieving this requires careful detailing of the air barrier at all penetrations and transitions.",
  },
  {
    q: "Can PHIUS certification satisfy other programs at the same time?",
    a: "Yes. A PHIUS+ certified project can simultaneously qualify for Energy Star for New Homes, DOE Zero Energy Ready Home (ZERH), and EPA Indoor airPlus. We coordinate all required documentation across programs to minimize your overhead.",
  },
  {
    q: "How long does the certification process take?",
    a: "Timeline varies by project complexity. Simple single-family projects with a clean design typically complete certification within 3–5 months of final inspection. We track all open items and communicate directly with PHIUS to keep your project moving.",
  },
];

export default function PhiusVerificationPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/passive%20house/IMG_9656.JPG"
            alt="Passive house verification"
            fill
            className="object-cover opacity-50"
            priority
           
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <div className="mb-6">
            <Image
              src="/logos/PHIUS.avif"
              alt="PHIUS"
              width={120}
              height={48}
              style={{ height: 48, width: "auto" }}
             
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={13} className="text-[#F5C500]" />
            <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">PHIUS Certified Verifier</span>
          </div>

          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Precision Testing for{" "}
            <span className="text-[#F5C500]">High Performance</span>{" "}
            Buildings
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            Independent PHIUS verification services for Passive House projects.
            Third-party inspections, airtightness testing, and full certification support from design through certificate.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
            <a href="#process" className="btn-outline-yellow">
              See Our Process
            </a>
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-10">
            {[
              "/new%20website%20photo/passive%20house/IMG_1607.JPG",
              "/new%20website%20photo/passive%20house/IMG_2850.JPG",
              "/new%20website%20photo/passive%20house/IMG_3209.JPG",
              "/new%20website%20photo/passive%20house/IMG_9164.JPG",
              "/new%20website%20photo/passive%20house/IMG_9177.JPG",
            ].map((src, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden" style={{ height: "200px" }}>
                <Image src={src} alt="Passive house project" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PHIUS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">The Standard</span>
            <h2 className="section-title mb-5">What Makes PHIUS Certification Different</h2>

            <p className="text-[#6b6b62] leading-relaxed mb-5">
              PHIUS+ 2021 is the most rigorous building energy standard available in North America.
              Unlike code minimum compliance or even Energy Star, PHIUS sets climate-specific limits on
              annual heating and cooling demand, peak loads, and total source energy — not just prescriptive
              measures like insulation R-values.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              The result is a building that uses 60–80% less energy than code minimum, maintains
              exceptional comfort without oversized mechanical systems, and outperforms conventional
              construction in resilience, indoor air quality, and long-term durability.
            </p>
            <p className="text-[#9a9a90] text-sm leading-relaxed">
              Third-party verification is mandatory. PHIUS requires an approved, credentialed verifier to
              conduct all inspections and submit documentation — no self-certification is permitted.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: <Thermometer size={18} className="text-[#F5C500]" />,
                title: "Climate-Specific Performance Targets",
                desc: "PHIUS sets heating and cooling demand limits specific to your project's climate zone — not one-size-fits-all thresholds that over-specify in mild climates and under-specify in cold ones.",
              },
              {
                icon: <Shield size={18} className="text-[#F5C500]" />,
                title: "Independent Third-Party Verification",
                desc: "Every PHIUS project requires a credentialed verifier. We conduct on-site inspections, blower door testing, and submit all documentation directly to PHIUS on your behalf.",
              },
              {
                icon: <Zap size={18} className="text-[#F5C500]" />,
                title: "Multi-Program Alignment",
                desc: "PHIUS certification can simultaneously satisfy Energy Star, DOE Zero Energy Ready Home, and Indoor airPlus — reducing total documentation burden across programs.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C500]/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#111111] font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-[#6b6b62] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">Compliance</span>
            <h2 className="section-title text-white">Standards & Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
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

      {/* Process */}
      <section id="process" className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="mb-12">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Our Verification Process</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((step) => (
            <div key={step.step} className="card relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-black text-[#F5C500]/8 leading-none select-none">
                {step.step}
              </div>
              <div className="text-[#F5C500] font-bold text-xs mb-3 uppercase tracking-wider">Step {step.step}</div>
              <h3 className="text-[#111111] font-bold mb-2">{step.title}</h3>
              <p className="text-[#6b6b62] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F5C500] py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#111111]/50 block mb-2">What We Measure</span>
            <h2 className="font-black text-[#111111]" style={{ fontSize: "2.25rem", letterSpacing: "-0.025em" }}>Key Performance Metrics</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#111111]/10 rounded-xl p-5 text-center">
                <div className="text-xl font-black text-[#111111] mb-3" style={{ letterSpacing: "-0.02em" }}>{m.label}</div>
                <p className="text-[#111111]/60 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="mb-12">
          <span className="section-label">Project Types</span>
          <h2 className="section-title">Buildings We Certify</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {buildingTypes.map((b) => (
            <div key={b.type} className="card py-4">
              <div className="flex items-start gap-3">
                <Home size={15} className="text-[#F5C500] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[#111111] text-sm font-semibold mb-0.5">{b.type}</div>
                  <div className="text-[#9a9a90] text-xs">{b.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Deliverables</span>
              <h2 className="section-title text-white mb-5">What&apos;s Included</h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                We handle every deliverable required for PHIUS certification, from initial design review through final certificate submission.
              </p>
              <ul className="space-y-3">
                {[
                  "Energy model review and compliance verification",
                  "PHIUS+ checklist documentation for all site visits",
                  "Blower door test report meeting PHIUS submission requirements",
                  "Ventilation commissioning verification",
                  "Thermal enclosure and window installation verification",
                  "HVAC system and duct performance verification",
                  "Direct submission of all documents to PHIUS",
                  "Coordination with PHIUS through certificate issuance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/50 text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-dark">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#F5C500]/10 flex items-center justify-center">
                  <FileText size={17} className="text-[#F5C500]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Certification Pathway</div>
                  <div className="text-white/30 text-xs">PHIUS+ 2021 verification milestones</div>
                </div>
              </div>
              {[
                { section: "Phase 1", title: "Design Review & Energy Model Verification" },
                { section: "Phase 2", title: "Pre-Construction Checklist Submission" },
                { section: "Phase 3", title: "Rough-In Site Inspection" },
                { section: "Phase 4", title: "Blower Door Airtightness Testing" },
                { section: "Phase 5", title: "Final Site Inspection & Commissioning" },
                { section: "Phase 6", title: "Final Documentation Submission to PHIUS" },
                { section: "Phase 7", title: "PHIUS Review & Certificate Issuance" },
                { section: "Appendix", title: "Test Reports, Photos, Calibration Records" },
              ].map((item) => (
                <div key={item.section} className="flex gap-3 py-2.5 border-b border-white/8 last:border-0">
                  <span className="text-[#F5C500]/60 text-xs font-medium shrink-0 w-20">{item.section}</span>
                  <span className="text-white/40 text-xs">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Callout */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div>
          <div>
            <span className="section-label">Why Us</span>
            <h2 className="section-title mb-5">Deep Roots in the Passive House Community</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              Over 20 years of involvement in passive house and high-performance construction.
              Founding member of the Greater Philadelphia Passive House Association and contributing
              author to the Passive House Rowhouse Manual — a reference guide for one of the most challenging
              building typologies in the region.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-8">
              That depth of experience means we understand not just the certification requirements, but the
              practical construction challenges that determine whether your project hits the numbers.
            </p>
            <div className="space-y-3">
              {[
                "PHIUS Certified Verifier",
                "HERS Certified Rater (RESNET)",
                "Founding Member — Greater Philadelphia Passive House Association",
                "Contributing Author — Passive House Rowhouse Manual",
                "Construction Advisor — Philadelphia Habitat for Humanity",
                "Speaker — New Gravity Conference 2020",
                "M.S. Construction Management",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-[#F5C500] shrink-0" />
                  <span className="text-[#6b6b62] text-sm">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="section-title text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-dark">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Ready to Certify Your Project?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Share your project details and we will outline the verification scope and timeline within one business day.
          </p>
          <Link href="/contact" className="btn-dark">
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
