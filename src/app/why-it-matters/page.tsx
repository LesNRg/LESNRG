import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Air Leakage Matters | Comfort, Durability & Performance | LES NRG",
  description: "Uncontrolled air infiltration degrades comfort, accelerates building decay, and drives up energy costs. Learn why airtightness is the foundation of a healthy, durable, efficient building.",
  openGraph: {
    title: "Why Air Leakage Matters | LES NRG",
    description: "Uncontrolled air infiltration degrades comfort, accelerates building decay, and drives up energy costs.",
    url: "https://www.lesnrg.com/why-it-matters",
    siteName: "LES NRG",
    locale: "en_US",
    type: "website",
  },
};

export default function WhyItMattersPage() {
  return (
    <div className="min-h-screen pt-32">

      {/* Hero */}
      <section className="bg-[#111111] py-8 min-h-[520px] border-b border-white/8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">Building Science</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Why Air Leakage<br />
            <span className="text-[#F5C500]">Matters</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-10">
            Every building leaks air. Most leak far more than they should. Uncontrolled air movement through the building envelope is the single biggest driver of comfort problems, moisture damage, poor indoor air quality, and wasted energy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get Your Building Tested
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-yellow">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">The Problem</span>
            <h2 className="section-title mb-5">Air Goes Where It Wants</h2>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              Buildings are not naturally airtight. Every penetration, seam, gap around a window frame, improperly detailed wall assembly, or rushed piece of insulation becomes a pathway for air to move between inside and outside. Some of these gaps are tiny. Many are not.
            </p>
            <p className="text-[#6b6b62] leading-relaxed mb-5">
              The problem is not that buildings breathe. Controlled ventilation is essential. The problem is uncontrolled air movement — leaks that carry heat, moisture, allergens, and pollutants through the envelope at random, responding to wind pressure and stack effect rather than the needs of the occupants.
            </p>
            <p className="text-[#6b6b62] leading-relaxed">
              Blower door testing is the only way to quantify exactly how much air a building is losing, locate where those leaks are concentrated, and measure the improvement after sealing. Without a test, it is all guesswork.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { stat: "25–40%", label: "of heating and cooling energy lost through air leakage in a typical building" },
              { stat: "1 CFM50", label: "of measured air leakage can represent dozens of small gaps working together" },
              { stat: "3 ACH50", label: "maximum allowed by code — many existing buildings fail by a wide margin" },
              { stat: "0.06 CFM50/ft²", label: "PHIUS Passive House standard — the tightest residential target in North America" },
            ].map((item) => (
              <div key={item.stat} className="bg-[#f5f5f0] rounded-xl p-5 flex gap-5 items-center">
                <div className="text-[#F5C500] font-black text-xl shrink-0" style={{ letterSpacing: "-0.02em", minWidth: "7rem" }}>{item.stat}</div>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort */}
      <section className="bg-[#111111] border-y border-white/8 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Impact 01</span>
            <h2 className="section-title !text-white">Comfort</h2>
            <p className="text-white/40 text-sm leading-relaxed mt-3 max-w-2xl">
              Air leakage is the leading cause of comfort complaints in buildings. The symptoms are familiar, but the root cause is rarely diagnosed correctly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Cold Drafts in Winter",
                desc: "Cold outside air infiltrating through gaps in the envelope creates localized cold zones near exterior walls, floors, and windows. Occupants feel the draft even when the thermostat reads a comfortable temperature. The HVAC system runs longer trying to compensate for air that keeps leaking in.",
              },
              {
                title: "Hot Spots in Summer",
                desc: "In summer, the same pathways allow hot, humid outside air to enter. Upper floors and south-facing rooms become difficult to cool as infiltration adds latent and sensible load faster than the mechanical system can remove it. Oversized or undersized equipment makes this worse.",
              },
              {
                title: "Temperature Swings",
                desc: "Leaky buildings struggle to hold a stable temperature because their thermal boundary is poorly defined. Rooms on the perimeter swing with outdoor conditions. Central rooms stay comfortable while corners and edges remain problematic regardless of thermostat setting.",
              },
              {
                title: "Humidity Imbalance",
                desc: "In heating season, infiltrating cold dry air drives indoor relative humidity down, causing dry skin, static electricity, and respiratory irritation. In cooling season, humid outdoor air loads the building and makes spaces feel sticky even at acceptable temperatures.",
              },
              {
                title: "Noise Transmission",
                desc: "Air pathways are also sound pathways. Gaps around window frames, electrical boxes, and pipe penetrations allow exterior noise — traffic, mechanical equipment, neighbors — to transmit directly into occupied spaces at levels that sealed assemblies would block.",
              },
              {
                title: "Uneven Room Performance",
                desc: "End units, corner rooms, and top-floor spaces perform dramatically worse in leaky buildings because they have more exterior surface area relative to volume. Occupants in these spaces report discomfort that HVAC adjustments alone cannot resolve.",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark">
                <div className="w-1 h-5 bg-[#F5C500] rounded-full mb-3" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Durability */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Impact 02</span>
            <h2 className="section-title">Durability</h2>
            <p className="text-[#6b6b62] text-sm leading-relaxed mt-3 max-w-2xl">
              Air leakage does not just waste energy. It physically degrades the building over time. Moisture carried by moving air is the primary cause of premature structural failure in residential and commercial construction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Moisture in Wall Assemblies",
                desc: "When warm, humid interior air infiltrates into a cold exterior wall cavity, it encounters the dew point and condenses. Liquid water accumulates inside the wall where it cannot dry quickly. Over months and years this leads to rot in wood framing, corrosion in metal fasteners, and deterioration of insulation — none of which is visible until the damage is significant.",
              },
              {
                title: "Mold Growth",
                desc: "Mold requires three things: a food source, the right temperature, and moisture. Building materials provide the food source. Air leakage provides the moisture. Once mold colonizes wall cavities, ceiling assemblies, or subfloor structures, remediation is expensive and disruptive. Prevention starts with controlling air movement.",
              },
              {
                title: "Ice Dams",
                desc: "In cold climates, warm conditioned air leaking into the attic heats the roof deck unevenly. Snow melts near the ridge and refreezes at the cold eaves, forming ice dams that force water back under shingles and into the building. The solution is not better gutters — it is a tighter, better-insulated attic assembly.",
              },
              {
                title: "Envelope Degradation",
                desc: "Repeated wetting and drying cycles caused by infiltration-driven moisture stress exterior cladding, window assemblies, and through-wall penetrations. Caulk fails. Sealants crack. Flashing separates. The building requires more frequent maintenance, and the repairs treat symptoms rather than the underlying air leakage driving the problem.",
              },
              {
                title: "Foundation and Slab Issues",
                desc: "Ground-level air infiltration brings soil gases, radon, and moisture vapor into below-grade spaces. Unconditioned basements and crawlspaces with poor air sealing become chronic moisture problems that migrate upward into the occupied areas above, affecting floors, walls, and indoor air quality throughout the building.",
              },
              {
                title: "Shorter Service Life",
                desc: "Buildings with uncontrolled air leakage simply do not last as long. The mechanical systems work harder and fail sooner. The structure accumulates moisture damage invisibly. The envelope materials degrade faster under thermal and moisture stress. Tight buildings, properly detailed, outlast leaky ones by decades.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="w-1 h-5 bg-[#F5C500] rounded-full mb-3" />
                <h3 className="text-[#111111] font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & IAQ */}
      <section className="bg-[#f9f9f7] border-y border-[#e4e4de] py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Impact 03</span>
            <h2 className="section-title">Health & Indoor Air Quality</h2>
            <p className="text-[#6b6b62] text-sm leading-relaxed mt-3 max-w-2xl">
              The air inside a leaky building is not controlled air. It is whatever the outdoor environment, the soil beneath the slab, and the wall cavities are pushing in at any given moment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Allergens and Pollen",
                desc: "Outdoor air entering through envelope gaps bypasses filtration entirely. Pollen, mold spores, and fine particulate matter infiltrate directly into occupied spaces, aggravating respiratory conditions and making mechanical filtration ineffective no matter how good the filter is.",
              },
              {
                title: "Radon Infiltration",
                desc: "Radon is a naturally occurring radioactive gas that migrates from soil into buildings through foundation cracks, slab penetrations, and below-grade air gaps. It is the second leading cause of lung cancer in the United States. Tightening below-grade assemblies and depressurizing the soil layer are the primary mitigation strategies.",
              },
              {
                title: "Vehicle Exhaust and Combustion Gases",
                desc: "Attached garages, nearby roadways, and combustion equipment create localized outdoor air quality problems that infiltrate directly into buildings through leaky assemblies. Carbon monoxide, nitrogen dioxide, and volatile organic compounds enter unconditioned and unfiltered, especially when the building is under negative pressure.",
              },
              {
                title: "Moisture and Mold Spores",
                desc: "Humid infiltrating air and the condensation it creates inside wall assemblies provides the conditions for mold growth. Mold spores released from within walls can enter the occupied space through the same air pathways that allowed the moisture in, creating health problems long before visible mold is detected.",
              },
              {
                title: "Compromised Ventilation Effectiveness",
                desc: "Mechanical ventilation systems are designed to deliver a specific quantity of fresh air to specific locations. In leaky buildings, random infiltration paths short-circuit this design. Some spaces get too much uncontrolled air; others get too little fresh air. The ventilation system cannot perform as intended when the envelope competes with it.",
              },
              {
                title: "Pressure Imbalances",
                desc: "Exhaust fans, HVAC systems, and stack effect can place portions of a building under negative pressure, drawing air in from wherever it can find an opening. In combustion equipment zones, this can cause backdrafting — pulling flue gases from water heaters, furnaces, and fireplaces back into the occupied space.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="w-1 h-5 bg-[#F5C500] rounded-full mb-3" />
                <h3 className="text-[#111111] font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Performance */}
      <section className="bg-[#111111] border-y border-white/8 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">Impact 04</span>
            <h2 className="section-title !text-white">Energy Performance</h2>
            <p className="text-white/40 text-sm leading-relaxed mt-3 max-w-2xl">
              Air leakage is the most common gap between a building&apos;s designed energy performance and its actual performance. Models assume a certain level of airtightness. Reality is often much worse.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {[
                {
                  title: "The Performance Gap",
                  desc: "Energy models used during design assume airtightness levels that are rarely achieved in practice without deliberate air barrier detailing and verification testing. The result is buildings that underperform their predicted energy use from day one, and the gap widens as materials age and settle.",
                },
                {
                  title: "HVAC Oversizing and Short-Cycling",
                  desc: "When infiltration loads are high and unpredictable, mechanical engineers add buffer capacity to ensure comfort under worst-case conditions. Oversized equipment short-cycles, fails to properly dehumidify, and wears out faster. Tighter envelopes allow right-sized systems to operate efficiently at design conditions.",
                },
                {
                  title: "Utility Cost, Month After Month",
                  desc: "Every cubic foot of conditioned air that leaks out must be replaced and re-conditioned. In cold climates, that means heating infiltrating air from 20°F to 70°F continuously. In hot humid climates, it means removing sensible and latent heat from infiltrating outdoor air around the clock. The meter runs whether you know about the leaks or not.",
                },
              ].map((item) => (
                <div key={item.title} className="card-dark">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Blower door testing quantifies exactly how much air a building is exchanging with the outside under a standardized pressure. That number — CFM50, ACH50, or leakage per square foot of envelope — tells you where the building actually sits relative to code, relative to certification targets, and relative to its own energy model.
              </p>
              <ul className="space-y-3">
                {[
                  "Air leakage accounts for 25–40% of heating and cooling loads in typical buildings",
                  "Leaky buildings routinely use 30–50% more energy than comparable tight buildings",
                  "Sealing to code-minimum levels typically reduces air leakage by 50–70% in older buildings",
                  "Every dollar invested in air sealing delivers ongoing monthly savings for the life of the building",
                  "Certification programs (Energy Star, PHIUS, ZERH) require verified airtightness testing",
                  "Blower door results are required documentation for code compliance in most jurisdictions",
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

      {/* The Solution */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">
          <div className="mb-10">
            <span className="section-label">The Solution</span>
            <h2 className="section-title">Test. Find. Fix. Verify.</h2>
            <p className="text-[#6b6b62] text-sm leading-relaxed mt-3 max-w-2xl">
              The path to a tighter, healthier, more durable building starts with measurement. You cannot improve what you have not quantified.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Test",
                desc: "A blower door test depressurizes the building to a standard 50 Pascals and measures total airflow required to maintain that pressure. The result is a precise, repeatable leakage number that can be compared to code limits, certification targets, and baseline measurements.",
              },
              {
                step: "02",
                title: "Find",
                desc: "Under pressure, leaks become detectable. Infrared thermography, smoke pencils, and pressure diagnostics locate the specific pathways driving the total leakage number — wall-ceiling intersections, penetrations, window frames, mechanical chases, and party walls.",
              },
              {
                step: "03",
                title: "Fix",
                desc: "Identified leaks can be sealed using appropriate materials for each location: spray foam, caulk, gaskets, rigid air barriers, or mastic depending on the assembly. Air sealing is most cost-effective during construction, but meaningful improvements can be made in existing buildings too.",
              },
              {
                step: "04",
                title: "Verify",
                desc: "A post-remediation test confirms that the work performed actually improved airtightness, and by how much. This is the only honest way to demonstrate improvement — and it is required documentation for code compliance and certification programs.",
              },
            ].map((item) => (
              <div key={item.step} className="card relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-[#F5C500]/8 leading-none select-none">{item.step}</div>
                <div className="text-[#F5C500] font-bold text-xs mb-3 uppercase tracking-wider">Step {item.step}</div>
                <h3 className="text-[#111111] font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b6b62] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#F5C500]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-black text-[#111111] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}>
            Find Out Where Your Building Stands
          </h2>
          <p className="text-[#111111]/60 mb-8">
            A blower door test gives you a precise leakage number and a roadmap for improvement. It takes a few hours. The results last the life of the building.
          </p>
          <Link href="/contact" className="btn-dark">
            Schedule a Test
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
