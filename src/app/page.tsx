import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Wind, ClipboardList, HomeIcon, BarChart2, Award, Wrench, Building2, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "LES NRG | Blower Door Testing, HERS Ratings & Building Performance | Philadelphia, PA",
  description: "Expert blower door testing, HERS ratings, energy audits, and code compliance verification for new construction and existing buildings. Located in Philadelphia, PA — serving PA, NJ, NY, DE and beyond.",
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
    title: "Program Compliance",
    desc: "Certification support for Energy Star for New Homes, Indoor airPlus, Zero Energy Ready Homes, and PHIUS (Passive House Institute US).",
    href: "/services",
  },
  {
    icon: <Wrench size={22} className="text-[#F5C500]" />,
    title: "Consulting",
    desc: "Building science guidance and construction consulting to optimize efficiency, timelines, and sustainable construction practices.",
    href: "/services",
  },
];

const stats = [
  { value: 4000, suffix: "+", label: "Blower Door Tests Completed" },
  { value: 347, suffix: "", label: "Energy Star Certified Units" },
  { value: 25, suffix: "", label: "PHIUS Certified Units" },
  { value: 20, suffix: "+", label: "Years of Experience" },
];

const specializedPages = [
  {
    icon: <Building2 size={22} className="text-[#F5C500]" />,
    title: "Large Building Testing",
    desc: "Multi-fan blower door testing for commercial and industrial facilities. ASTM E779 & E1827 compliant.",
    href: "/large-building-blower-door-testing",
    label: "Specialized Service",
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-24 relative w-full z-10">
          <div className="max-w-3xl">
            <span className="section-label">Located in Philadelphia, PA</span>
            <h1
              className="font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", letterSpacing: "-0.03em" }}
            >
              New Construction, <span className="text-[#F5C500]">Existing Buildings</span> & Code Verification
            </h1>
            <p className="text-white/55 text-xl leading-relaxed mb-10 max-w-xl">
              Blower door testing, HERS ratings, energy audits, and program certification for new construction and existing buildings — keeping projects code-compliant from conception to final sign-off.
            </p>
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
              {["HERS Certified Rater", "PHIUS Verifier", "Energy Star Partner"].map((badge) => (
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
      <section className="bg-[#F5C500] py-12">
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

      {/* Quote */}
      <section className="py-16 bg-[#f9f9f7] border-b border-[#e4e4de]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 xl:px-12 text-center">
          <div className="w-8 h-1 bg-[#F5C500] rounded-full mx-auto mb-6" />
          <blockquote className="text-2xl font-semibold text-[#111111] leading-snug mb-4" style={{ letterSpacing: "-0.01em" }}>
            &ldquo;Bringing us onboard early in the project holds significant benefits, as it allows us to have a greater influence on the project&rsquo;s overall success.&rdquo;
          </blockquote>
          <cite className="text-[#9a9a90] text-sm not-italic">— Neil Goldman, Founder</cite>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
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

      {/* Specialized Services */}
      <section className="py-16 bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Specialized Programs</span>
            <h2 className="section-title text-white">In-Depth Services</h2>
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

      {/* About Callout — dark */}
      <section className="bg-[#111111] py-20 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">About Us</span>
              <h2 className="section-title text-white mb-5">
                Built on 20+ Years of Building Science
              </h2>
              <p className="text-white/50 leading-relaxed mb-5">
                Founded by Neil Goldman — a building performance expert with a Master&apos;s degree in
                Construction Management and over 20 years of experience — bringing deep technical
                expertise to every project.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                Neil is a contributing author to the Passive House Rowhouse Manual, a founding member
                of the Greater Philadelphia Passive House Association, and a long-standing advisor to
                Philadelphia Habitat for Humanity.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { title: "PHIUS Verifier", desc: "Passive House Institute US certified — one of a select group of verifiers in the country." },
                { title: "HERS Certified Rater", desc: "Accredited to perform official Home Energy Rating System assessments for new and existing homes." },
                { title: "Energy Star Partner", desc: "Authorized to certify homes under the Energy Star for New Homes and related programs." },
              ].map((item) => (
                <div key={item.title} className="card-dark">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#F5C500] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                      <div className="text-white/40 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

      {/* CTA — yellow */}
      <section className="py-20 bg-[#F5C500]">
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
