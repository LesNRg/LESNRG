import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Fan Club | Builders, Architects & Trades We Work With | LES NRG",
  description: "The builders, architects, developers and trade partners we work alongside on high performance projects. We're big fans of the people who get the details right.",
  alternates: { canonical: "/fan-club" },
  openGraph: {
    title: "The Fan Club | LES NRG",
    description: "The builders, architects, developers and trade partners we work alongside on high performance projects.",
    url: "https://www.lesnrg.com/fan-club",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

type Partner = {
  name: string;
  url: string;
  logo?: string;
  invert?: boolean;
};

const partners: Partner[] = [
  // Add partners here. Drop logo files in /public/logos/partners/ and set `logo`.
  // Partners without a logo render as an initials tile.
  { name: "Re:Vision", url: "https://revisionarch.com/", logo: "/logos/partners/revision.png" },
  { name: "Thriven Design", url: "https://thriven.design/", logo: "/logos/partners/thriven.png" },
  { name: "Scribe Design Build", url: "https://www.scribedesignbuild.com/home", logo: "/logos/partners/scribe.png" },
  { name: "Red Oak Builders", url: "https://www.redoakbuilders.com/", logo: "/logos/partners/redoak.png" },
  { name: "Main Line Craftsmen", url: "https://mlcgc.com/", logo: "/logos/partners/mlc.svg", invert: true },
  { name: "Gurney Kerr Contractors", url: "https://www.gurneykerr.com/", logo: "/logos/partners/gurneykerr.webp" },
  { name: "BluPath Design", url: "https://blupath.us/", logo: "/logos/partners/blupath.jpg" },
  { name: "Longview Structures", url: "https://www.longviewstructures.com/", logo: "/logos/partners/longview.jpg" },
  { name: "Passive to Positive", url: "https://www.passivetopositive.com/", logo: "/logos/partners/passivetopositive.webp" },
  { name: "Bellweather Design-Build", url: "https://bellweatherdesignbuild.com/", logo: "/logos/partners/bellweather.png" },
  { name: "Hanson Fine Building", url: "https://www.hansonfinebuilding.com/", logo: "/logos/partners/hanson.svg" },
  { name: "Habitat for Humanity Philadelphia", url: "https://www.habitatphiladelphia.org/", logo: "/logos/partners/habitat.svg" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function FanPage() {
  return (
    <div className="min-h-screen pt-32">

      {/* Hero */}
      <section className="bg-[#111111] py-8 min-h-[520px] border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/mis/IMG_8452.JPEG"
            alt="LES NRG on site with trade partners"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">Who We Work With</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            The <span className="text-[#F5C500]">Fan</span> Club
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
            Good buildings are a team sport. These are the builders, architects, developers and
            trades we work alongside — the people who sweat the details, sequence the work right,
            and hit their numbers on test day. We&apos;re big fans of every one of them.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Work With Us
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-yellow">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <span className="section-label">Our Partners</span>
          <h2 className="section-title mb-5">Builders, Architects & Trades</h2>
          <p className="text-[#6b6b62] leading-relaxed max-w-2xl mb-10">
            Testing tells you where a building stands. These are the teams that get it there.
            Every company below has worked with us on projects where airtightness, envelope
            detailing and verified performance actually mattered.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center text-center border border-black/10 rounded-xl p-6 hover:border-[#F5C500] hover:shadow-lg transition-all"
                style={{ minHeight: "180px" }}
              >
                <ArrowUpRight
                  size={16}
                  className="absolute top-3 right-3 text-[#6b6b62] opacity-0 group-hover:opacity-100 transition-opacity"
                />
                {partner.logo ? (
                  <div className="relative w-full" style={{ height: "72px" }}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className={partner.invert ? "object-contain invert" : "object-contain"}
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#F5C500]">
                    <span className="font-black text-[#111111] text-xl">{initials(partner.name)}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ gridAutoRows: "300px" }}>
          {[
            "/new%20website%20photo/mis/IMG_2615.JPG",
            "/new%20website%20photo/mis/IMG_3209.JPG",
            "/new%20website%20photo/mis/IMG_4686.JPG",
            "/new%20website%20photo/mis/IMG_4922.JPG",
            "/new%20website%20photo/mis/IMG_4984.JPG",
            "/new%20website%20photo/mis/IMG_5460.JPG",
            "/new%20website%20photo/mis/IMG_5461.JPG",
            "/new%20website%20photo/mis/IMG_9782.JPG",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <Image src={src} alt="LES NRG field work with trade partners" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 text-center">
          <h2 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em" }}>
            Want to see your company here?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            If you build, design or seal buildings in the Philadelphia region and you care about
            hitting your numbers, let&apos;s talk. We test early, report fast, and tell you exactly
            what to fix.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
