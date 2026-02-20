import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Award, FileText, Home } from "lucide-react";

const programs = [
  {
    name: "Energy Star MFNC v2",
    desc: "Required for projects with permits issued on or after January 1, 2025. Introduced stricter airtightness requirements in colder climate zones, updated verification protocols, and expanded recognition for projects pursuing DOE Zero Energy Ready Home simultaneously.",
  },
  {
    name: "DOE Zero Energy Ready Home",
    desc: "Formerly known as ZERH — the DOE has rebranded and expanded the program nationally. Requires Energy Star as a prerequisite and adds high-performance envelopes, efficient mechanical systems, and solar-ready provisions.",
  },
  {
    name: "Indoor airPlus",
    desc: "EPA program for superior indoor air quality — low-VOC materials, radon mitigation, enhanced filtration, and controlled ventilation. Can be layered onto Energy Star and DOE ZERH projects.",
  },
  {
    name: "RESNET / HERS",
    desc: "Energy Star MFNC uses the HERS Index or equivalent energy rating number. An accredited HERS Rater or MRO is required to verify compliance using an approved energy model.",
  },
];

const process = [
  {
    step: "01",
    title: "Program Registration",
    desc: "We register your project with Energy Star and, if applicable, DOE Zero Energy Ready Home — establishing compliance requirements and documentation upfront.",
  },
  {
    step: "02",
    title: "Design Review",
    desc: "We review drawings, energy models, and specifications to confirm compliance targets are achievable and flag any gaps before construction begins.",
  },
  {
    step: "03",
    title: "Thermal Enclosure Verification",
    desc: "On-site inspection of insulation installation, air barrier continuity, and window and door installation — required for both Energy Star and DOE ZERH.",
  },
  {
    step: "04",
    title: "HVAC & Ventilation Verification",
    desc: "Verification of mechanical system installation and commissioning — HVAC sizing, duct tightness, ventilation rates, and distribution system performance.",
  },
  {
    step: "05",
    title: "Airtightness Testing",
    desc: "Blower door testing for each unit (compartmentalization) and/or whole-building air leakage per Energy Star and DOE ZERH requirements.",
  },
  {
    step: "06",
    title: "Certification Submission",
    desc: "We compile all checklists, test reports, and supporting documentation and submit on your behalf — coordinating with Energy Star and DOE through certificate issuance.",
  },
];

const njRebates = [
  { program: "NJCEP Home Performance with Energy Star", detail: "Rebates for insulation, air sealing, HVAC, and ventilation improvements in qualifying residential and multifamily projects." },
  { program: "PSE&G, JCP&L, RECO & ACE Utility Programs", detail: "Supplemental rebates for Energy Star certified new construction, high-efficiency heating and cooling systems, and envelope improvements." },
  { program: "NJ Clean Energy Residential Incentives", detail: "Additional rebates for heat pump water heaters, high-efficiency HVAC, and projects achieving Energy Star for New Homes certification." },
];

const paRebates = [
  { program: "PECO Smart Ideas", detail: "Rebates on insulation, air sealing, and high-efficiency HVAC equipment for qualifying residential and multifamily buildings in the PECO service territory." },
  { program: "PPL Electric Utilities", detail: "Home energy rebates for high-efficiency heat pumps, insulation, and air sealing improvements for PPL customers." },
  { program: "Columbia Gas of PA", detail: "Rebates for high-efficiency furnaces, water heaters, and insulation upgrades for Columbia Gas customers." },
];

const faqs = [
  {
    q: "What changed with Energy Star MFNC v2?",
    a: "Energy Star Multifamily New Construction version 2 became required for projects with permits issued on or after January 1, 2025. The update introduced stricter airtightness requirements in colder climate zones, updated verification protocols, and improved alignment with DOE Zero Energy Ready Home. Projects that registered under v1 prior to the deadline may continue on that version.",
  },
  {
    q: "What is the DOE Zero Energy Ready Home program — and what happened to ZERH?",
    a: "The DOE Zero Energy Ready Home program is the current name for what was previously called ZERH (Zero Energy Ready Home). The DOE rebranded and expanded the program in 2024 as part of a national rollout. The requirements are largely the same — Energy Star certification as a prerequisite, a high-performance envelope, efficient mechanical systems, and solar-ready provisions — but the updated program includes improved documentation and expanded recognition across all climate zones.",
  },
  {
    q: "Do we need a HERS Rater, or can any third party verify?",
    a: "Energy Star MFNC requires verification by either an accredited HERS Rater (for buildings three stories or fewer under residential provisions) or an approved Multifamily Rating Organization (MRO) for larger buildings. We are an accredited HERS Rater and work regularly with MROs for larger multifamily projects.",
  },
  {
    q: "Can Energy Star and DOE ZERH be certified simultaneously?",
    a: "Yes — and we recommend it. DOE Zero Energy Ready Home requires Energy Star as a prerequisite, so the field verification, testing, and documentation overlap significantly. Pursuing both programs together adds minimal overhead while substantially increasing the market value and recognition of the project.",
  },
  {
    q: "What airtightness is required for multifamily units under Energy Star?",
    a: "Energy Star MFNC requires individual unit compartmentalization testing. The 2021 IECC (§ R402.4.1.2) sets a maximum of 0.3 CFM50 per square foot of unit enclosure area at 50 Pa for buildings up to three stories. Each dwelling unit must pass independently — sampling is not permitted.",
  },
  {
    q: "When should we bring you onto the project?",
    a: "As early as possible — ideally during design development. Early engagement allows us to confirm program requirements, review the energy model for feasibility, and identify potential field verification challenges before construction locks in details that are costly to change.",
  },
];

export default function EnergyStarMultifamilyPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1634.JPG"
            alt="Energy Star multifamily certification"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">Energy Star Partner</span>
          </div>

          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Energy Star Multifamily<br />Certification
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            Third-party verification and certification support for Energy Star Multifamily New Construction
            and DOE Zero Energy Ready Home.
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

          {/* Key specs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {[
              { value: "347+", label: "Energy Star Units Certified" },
              { value: "20+ yrs", label: "Experience" },
              { value: "4,000+", label: "Blower Door Tests" },
            ].map((s) => (
              <div key={s.label} className="stat-card-dark">
                <div className="text-xl font-bold text-[#F5C500] mb-1" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-white/30 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Photo strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-6">
            {[
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1342.JPG",
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1381.JPG",
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_1737.JPG",
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3195.JPG",
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3445.JPG",
              "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_4864.JPG",
            ].map((src, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden" style={{ height: "200px" }}>
                <Image src={src} alt="Energy Star project" fill className="object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Energy Star MFNC */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">The Program</span>
            <h2 className="section-title mb-5">Energy Star Multifamily New Construction</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              Energy Star Multifamily New Construction (MFNC) is the EPA&apos;s certification program for
              energy-efficient multifamily buildings. It requires third-party verification to confirm that
              the building is designed and built to meet performance targets that go meaningfully beyond
              code minimum.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              Version 2 of the program — required for permits issued on or after January 1, 2025 —
              introduced stricter airtightness requirements and updated verification protocols. Buildings
              pursuing Energy Star MFNC must be verified by an approved HERS Rater or Multifamily Rating
              Organization (MRO).
            </p>
            <p className="text-[#9a9a90] text-sm leading-relaxed">
              Energy Star is also a prerequisite for DOE Zero Energy Ready Home certification — making
              it a natural entry point for projects pursuing multiple high-performance designations.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
            <Image
              src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3202.JPG"
              alt="Energy Star multifamily building verification"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Award size={18} className="text-[#F5C500]" />,
                title: "Third-Party Verified",
                desc: "Certification requires an accredited HERS Rater or approved MRO to conduct field inspections and testing. No self-certification is permitted.",
              },
              {
                icon: <Home size={18} className="text-[#F5C500]" />,
                title: "Multi-Program Alignment",
                desc: "Energy Star certification is a prerequisite for DOE Zero Energy Ready Home and aligns with Indoor airPlus — reducing total documentation overhead when pursuing multiple programs.",
              },
              {
                icon: <FileText size={18} className="text-[#F5C500]" />,
                title: "From Design to Certificate",
                desc: "We manage program registration, design review, field verification, testing, and documentation — from initial plans through final certificate issuance.",
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

      {/* DOE ZERH */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">DOE Program</span>
            <h2 className="section-title mb-5">DOE Zero Energy Ready Home</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              The DOE Zero Energy Ready Home program — formerly known as ZERH — was rebranded and expanded
              by the Department of Energy as part of a broader national initiative. The program recognizes
              buildings that go beyond Energy Star to deliver a high-performance envelope, efficient
              mechanical systems, and solar-readiness.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              Energy Star certification is a prerequisite. Projects that pursue DOE Zero Energy Ready Home
              alongside Energy Star MFNC leverage the same field verification and documentation with
              minimal additional overhead.
            </p>
            <p className="text-[#9a9a90] text-sm leading-relaxed">
              DOE Zero Energy Ready Home is recognized by many utility incentive programs, green mortgage
              products, and municipal sustainability commitments — adding market value beyond the certification itself.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-[#111111] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1">
                  <span className="text-[#F5C500] font-bold text-xs">DOE Zero Energy Ready Home</span>
                </div>
                <span className="text-white/20 text-xs">formerly ZERH</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Energy Star certification required as prerequisite",
                  "High-performance thermal envelope",
                  "Efficient mechanical and water heating systems",
                  "Solar-ready provisions (conduit, panel capacity)",
                  "Indoor airPlus certification recommended",
                  "HERS Rater or MRO verification required",
                  "Recognized by utility incentive programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/50 text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NJ & PA Rebates */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">Incentives</span>
            <h2 className="section-title text-white">New Jersey & Pennsylvania Rebates</h2>
            <p className="text-white/40 text-sm leading-relaxed mt-3 max-w-2xl">
              Energy Star certification unlocks access to rebate programs in both NJ and PA.
              As an NJCEP Partner, we help clients identify and qualify for applicable incentives as part of the certification process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1">
                  <span className="text-[#F5C500] font-bold text-xs">New Jersey</span>
                </div>
              </div>
              <div className="space-y-3">
                {njRebates.map((r) => (
                  <div key={r.program} className="card-dark">
                    <div className="text-white font-semibold text-sm mb-1">{r.program}</div>
                    <p className="text-white/40 text-xs leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1">
                  <span className="text-[#F5C500] font-bold text-xs">Pennsylvania</span>
                </div>
              </div>
              <div className="space-y-3">
                {paRebates.map((r) => (
                  <div key={r.program} className="card-dark">
                    <div className="text-white font-semibold text-sm mb-1">{r.program}</div>
                    <p className="text-white/40 text-xs leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">Compliance</span>
            <h2 className="section-title">Programs & Standards</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {programs.map((s) => (
              <div key={s.name} className="card">
                <div className="inline-block bg-[#F5C500]/15 border border-[#F5C500]/25 rounded px-2.5 py-1 mb-3">
                  <span className="text-[#F5C500] font-bold text-xs">{s.name}</span>
                </div>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="section-title text-white">Our Verification Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.step} className="card-dark relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-[#F5C500]/8 leading-none select-none">
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

      {/* Photo Collage */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-16">
        <div className="mb-8">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">In the Field</h2>
        </div>
        {/* Desktop bento */}
        <div className="hidden md:grid grid-cols-4 gap-3" style={{ gridTemplateRows: "280px 280px 280px" }}>
          <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3278.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3654.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3896.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_5941.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_6661.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="col-span-2 relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7750.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
          <div className="col-span-2 relative rounded-xl overflow-hidden">
            <Image src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7911.JPG" alt="Energy Star project" fill className="object-cover" unoptimized />
          </div>
        </div>
        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {[
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3278.JPG",
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3654.JPG",
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3896.JPG",
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_5941.JPG",
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_6661.JPG",
            "/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7750.JPG",
          ].map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-square">
              <Image src={src} alt="Energy Star project" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Deliverables</span>
              <h2 className="section-title mb-5">What&apos;s Included</h2>
              <p className="text-[#6b6b62] text-sm leading-relaxed mb-8">
                We manage every deliverable required for Energy Star MFNC and DOE Zero Energy Ready Home
                certification — from design review through final certificate.
              </p>
              <ul className="space-y-3">
                {[
                  "Project registration with EPA and DOE programs",
                  "Energy model review and verification",
                  "Thermal Enclosure System (TES) checklist — all site visits",
                  "HVAC System Quality Installation (ACCA Manual J/S/D) verification",
                  "Ventilation system commissioning and airflow verification",
                  "Unit compartmentalization blower door testing",
                  "Water heating and distribution system verification",
                  "DOE ZERH solar-ready and mechanical system verification",
                  "All documentation compiled and submitted on your behalf",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#6b6b62] text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/2] mb-5">
                <Image
                  src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_7551.JPG"
                  alt="Energy Star certification field work"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C500]/10 flex items-center justify-center">
                    <FileText size={17} className="text-[#F5C500]" />
                  </div>
                  <div>
                    <div className="text-[#111111] font-bold text-sm">Certification Milestones</div>
                    <div className="text-[#6b6b62] text-xs">Energy Star MFNC v2 + DOE ZERH</div>
                  </div>
                </div>
                {[
                  { section: "Phase 1", title: "Project Registration & Program Setup" },
                  { section: "Phase 2", title: "Design Review & Energy Model Verification" },
                  { section: "Phase 3", title: "Thermal Enclosure Rough-In Inspection" },
                  { section: "Phase 4", title: "HVAC & Mechanical Verification" },
                  { section: "Phase 5", title: "Airtightness Testing (Unit & Whole-Building)" },
                  { section: "Phase 6", title: "Final Inspection & System Commissioning" },
                  { section: "Phase 7", title: "Documentation Submission & Certificate Issuance" },
                ].map((item) => (
                  <div key={item.section} className="flex gap-3 py-2.5 border-b border-[#e4e4de] last:border-0">
                    <span className="text-[#F5C500] text-xs font-medium shrink-0 w-20">{item.section}</span>
                    <span className="text-[#6b6b62] text-xs">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[#111111] border-y border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Why Us</span>
              <h2 className="section-title text-white mb-5">Experience Across Multifamily Programs</h2>
              <p className="text-white/50 leading-relaxed mb-5">
                We have certified over 347 Energy Star units and 25 PHIUS-certified units. With a Master&apos;s degree in
                Construction Management and deep experience in multifamily construction, we understand both the
                certification requirements and the practical realities of getting buildings built right.
              </p>
              <p className="text-white/50 leading-relaxed">
                We work with builders and developers to coordinate program documentation efficiently —
                so certification doesn&apos;t slow down your project.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "HERS Certified Rater (RESNET Accredited)",
                "Energy Star for New Homes Partner",
                "NJCEP Partner (New Jersey Clean Energy Program)",
                "DOE Zero Energy Ready Home Verifier",
                "PHIUS Certified Verifier",
                "Indoor airPlus Verifier",
                "M.S. Construction Management",
                "Founding Member — Greater Philadelphia Passive House Association",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-[#F5C500] shrink-0" />
                  <span className="text-white/50 text-sm">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
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
      <section className="py-20 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Ready to Certify Your Project?
          </h2>
          <p className="text-[#111111]/60 mb-8">
            Share your project details and we will confirm the right certification approach within one business day.
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
