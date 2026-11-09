import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Neil Goldman | LES NRG | Philadelphia, PA",
  description:
    "Neil Goldman is a building science consultant with more than 15 years of experience bridging design and construction. Founder of LES NRG, Phius Verifier since 2017, HERS Rater, and LEED AP.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Neil Goldman | LES NRG",
    description:
      "Building science consultant bridging design and construction. Phius verification, HERS ratings, and building diagnostics in Philadelphia.",
    url: "https://www.lesnrg.com/about",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

const credentials = [
  "Phius Verifier",
  "HERS Certified Rater (RESNET)",
  "ABAA Level I Certified Whole Building Airtightness Technician",
  "LEED AP",
  "Master of Construction Management",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Bio */}
      <section className="bg-[#111111] py-12 border-b border-white/8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User size={13} className="text-[#F5C500]" />
                <span className="text-[#F5C500] text-[10px] font-bold tracking-[0.14em] uppercase">About</span>
              </div>
              <h1
                className="font-black text-white mb-2 leading-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
              >
                Neil Goldman
              </h1>
              <p className="text-[#F5C500] font-semibold mb-8">LEED AP, HERS Rater, Phius Verifier</p>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  Neil Goldman is a building science consultant with more than 15 years of experience bridging
                  design and construction. He founded LES NRG, a Philadelphia firm focused on Phius verification,
                  HERS ratings, and building diagnostics, and he has been verifying Phius projects since 2017.
                </p>
                <p>
                  Neil has consulted on building details at a design firm and led construction in the field, on
                  projects ranging from affordable housing to high-end homes. LES NRG has since grown its work to
                  include commercial buildings.
                </p>
                <p>
                  LES NRG believes every occupant deserves a building that is healthy, comfortable, and affordable
                  to run, and that those results are won or lost in the details on site. Whether the job is a
                  special inspection or Phius consulting, LES NRG brings the same commitment to getting the
                  building science right.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/new%20website%20photo/Neil/IMG_5701.JPG"
                alt="Neil Goldman on a rooftop job site"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-12 border-b border-[#111111]/8">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="section-label">Why We Do This</span>
          <p className="text-[#111111] text-xl leading-relaxed mt-4">
            Most people never think about the walls around them, and they shouldn&apos;t have to. A good building
            just works. It stays warm in the winter and cool in the summer, the air feels fresh, and the energy
            bill doesn&apos;t sting. We do this work because we like sweating the small stuff on site, so the
            people inside get a building that takes care of them for decades to come.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Credentials</span>
              <h2 className="section-title mb-6">Certified to Test, Verify, and Advise</h2>
              <div className="space-y-3">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#F5C500] shrink-0" />
                    <span className="text-[#6b6b62] text-sm">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/new%20website%20photo/Neil/IMG_3201.JPG"
                alt="Neil Goldman inspecting wall framing on a new construction site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2
            className="font-black text-[#111111] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}
          >
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-[#111111]/60 mb-8">
            From Phius verification to special inspections, we bring the field to the design table.
          </p>
          <Link href="/contact" className="btn-dark">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
