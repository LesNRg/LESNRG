import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Wind, ClipboardList, HomeIcon, BarChart2, Award, Wrench, Building2, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroBigFans from "@/components/HeroBigFans";

export const metadata: Metadata = {
  title: "LES NRG | Blower Door Testing, HERS Ratings & Building Performance | Philadelphia, PA",
  description: "Expert blower door testing, envelope integrity testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings. Located in Philadelphia, PA, serving PA, NJ, NY, DE and beyond.",
  openGraph: {
    title: "LES NRG | Blower Door Testing & Building Performance | Philadelphia, PA",
    description: "Expert blower door testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings.",
    url: "https://www.lesnrg.com",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const services = [
  {
    icon: <Wind size={22} className="text-[#F5C500]" />,
    title: "Blower Door Testing",
    desc: "Air leakage testing for code compliance and energy performance verification, scheduled at your convenience with prompt report delivery.",
    href: "/services",
  },
  {
    icon: <BarChart2 size={22} className="text-[#F5C500]" />,
    title: "HERS Rating",
    desc: "Standardized Home Energy Rating System assessments comparing homes to a reference home. The lower the score, the more efficient the home.",
    href: "/services",
  },
  {
    icon: <HomeIcon size={22} className="text-[#F5C500]" />,
    title: "Residential Energy Audits",
    desc: "Comprehensive evaluations including inspection, energy modeling, HERS score generation, and actionable energy-saving recommendations.",
    href: "/services",
  },
  {
    icon: <ClipboardList size={22} className="text-[#F5C500]" />,
    title: "Testing & Verification",
    desc: "Duct blaster, ventilation, thermal enclosure, HVAC system, window and insulation, and water management assessment services.",
    href: "/services",
  },
  {
    icon: <Award size={22} className="text-[#F5C500]" />,
    title: "Building Standard Certification",
    desc: "Third-party verification and certification support across the full spectrum, from code compliance to Energy Star, HERS, and Passive House.",
    href: "/services",
  },
  {
    icon: <Wrench size={22} className="text-[#F5C500]" />,
    title: "Building Science Consulting",
    desc: "Investigating building problems at their source: condensation, moisture intrusion, air quality issues, and more. We use data-driven diagnostics to deliver actionable solutions.",
    href: "/services",
  },
];

const stats = [
  { value: 4000, suffix: "+", label: "Blower Door Tests Completed" },
  { value: 347, suffix: "", label: "Energy Star Certified Units" },
  { value: 25, suffix: "", label: "PHIUS Certified Units" },
  { value: 20, suffix: "+", label: "Years of Experience" },
];


const credentials = [
  "HERS Certified Rater (RESNET Accredited)",
  "PHIUS Verifier (Passive House Institute US)",
  "Energy Star for New Homes Partner",
  "NJCEP Partner (New Jersey Clean Energy Program)",
  "Indoor airPlus Verifier",
  "Zero Energy Ready Homes Verifier",
  "Master's Degree in Construction Management",
];

const specializedPages = [
  {
    icon: <Building2 size={22} className="text-[#F5C500]" />,
    title: "Large Building Testing",
    desc: "Multi-fan blower door testing for commercial and industrial facilities. ASTM E779 & E1827 compliant.",
    href: "/large-building-blower-door-testing",
    label: "Commercial Testing",
  },
  {
    icon: <Shield size={22} className="text-[#F5C500]" />,
    title: "Passive House Verification",
    desc: "Independent PHIUS+ certification for the most demanding high-performance building standard in North America.",
    href: "/phius-passive-house-verification",
    label: "PHIUS Certified",
  },
  {
    icon: <Award size={22} className="text-[#F5C500]" />,
    title: "Energy Star Certification",
    desc: "Third-party verification for Energy Star Multifamily New Construction and DOE Zero Energy Ready Home programs.",
    href: "/energy-star-multifamily",
    label: "Energy Star Partner",
  },
];


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero — dark */}
      <section className="min-h-screen flex items-center pt-32 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/ENEGYSTAR%20AND%20LARGE%20BUILDING/IMG_3458%202.JPG"
            alt="Building blower door testing"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5C500]/6 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-10 relative w-full z-10">
          <div className="max-w-3xl">
            <span className="section-label">Located in Philadelphia, PA</span>
            <h1
              className="font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", letterSpacing: "-0.03em" }}
            >
              <span className="sm:whitespace-nowrap" style={{ color: "#FFFFFF" }}>Consulting, Inspecting & Testing</span><br />
              <span style={{ color: "#FCF0BF" }}>building for</span><br />
              <span style={{ color: "#FAE280" }}>Performance, Comfort</span><br />
              <span style={{ color: "#F5C500" }}>&amp; Durability.</span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed mb-12 max-w-xl">
              Building science isn&apos;t what we do, it&apos;s who we are. New or existing, commercial or residential, small or large. We bring the same relentless precision and passion to every envelope we pressurize.
            </p>
            <HeroBigFans />
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Our Services
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-yellow">
                Get in Touch
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-5">
              {["HERS Certified Rater", "PHIUS Verifier", "Energy Star Partner", "ABAA Member"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-white/40 text-sm">
                  <CheckCircle size={13} className="text-[#F5C500]/70" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats — yellow bar */}
      <section className="bg-[#F5C500] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-[#111111] mb-1" style={{ letterSpacing: "-0.04em" }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#111111]/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focused Services */}
      <section className="py-10 bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {specializedPages.map((page) => (
              <Link key={page.href} href={page.href} className="card-dark group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5C500]/10 flex items-center justify-center">
                    {page.icon}
                  </div>
                  <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">{page.label}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{page.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{page.desc}</p>
                <div className="flex items-center gap-1 text-[#F5C500] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-12">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card group">
                <div className="w-10 h-10 rounded-lg bg-[#F5C500]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5C500]/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-[#111111] font-bold mb-2">{s.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1 text-[#111111] text-sm font-semibold mt-5 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#111111] border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title !text-white mb-5">Engaged Early. Present Throughout.</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-white/50 leading-relaxed">
              Most verification and testing happens at the end of construction, a pass/fail check
              after all the decisions have been made. We work differently. Early engagement means we
              review plans, flag potential performance issues, and help teams make better choices
              before they become expensive corrections.
            </p>
            <p className="text-white/50 leading-relaxed">
              Whether you&apos;re a builder targeting Energy Star or PHIUS certification, a homeowner
              seeking an honest energy assessment, or a developer navigating code and incentive
              requirements. We provide clear, technically rigorous guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-6" style={{ height: "320px" }}>
          {[
            "/new%20website%20photo/mis/IMG_2738.JPG",
            "/new%20website%20photo/mis/IMG_2870.JPG",
            "/new%20website%20photo/mis/IMG_2898.JPG",
            "/new%20website%20photo/mis/IMG_2949.JPG",
            "/new%20website%20photo/mis/IMG_4344.JPG",
            "/new%20website%20photo/mis/IMG_4935.JPG",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="LES NRG field work" fill className="object-cover" sizes="(max-width: 640px) 33vw, 17vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-8">
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
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/logos/RESNET_HERS_Rater_Vertical_Logo_RGB_Web_Use.avif", alt: "RESNET", height: 56 },
              { src: "/logos/logo-energy-star.png", alt: "Energy Star", height: 64 },
              { src: "/logos/PHIUS.avif", alt: "PHIUS", height: 56 },
              { src: "/logos/logo-epa-airplus.png", alt: "Indoor airPlus", height: 56 },
              { src: "/logos/ZERH Logo.avif", alt: "DOE Zero Energy Ready Home", height: 64 },
              { src: "/logos/ABAA_540.png", alt: "ABAA Member", height: 56 },
            ].map((logo) => (
              <div key={logo.alt} className="bg-[#f5f5f0] rounded-xl p-4 flex items-center justify-center">
                <Image src={logo.src} alt={logo.alt} height={logo.height} width={130} style={{ height: logo.height, width: "auto", maxWidth: 110 }} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA — yellow */}
      <section className="py-8 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-[#111111]/60 text-lg mb-8">
            Get in touch and we&apos;ll help you determine the right services for your building.
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
