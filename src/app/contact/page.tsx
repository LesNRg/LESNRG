"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Instagram, Send, CheckCircle } from "lucide-react";

const services = [
  "Blower Door Testing",
  "HERS Rating",
  "Residential Energy Audit",
  "Duct Blaster Testing",
  "Ventilation System Testing",
  "Thermal Enclosure Verification",
  "HVAC System Verification",
  "Program Compliance (Energy Star / PHIUS / ZERH)",
  "Large Building Blower Door Testing",
  "Building Science Consulting",
  "Construction Consulting",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mgollbvl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="bg-[#111111] py-28 border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new%20website%20photo/mis/IMG_9075.JPG"
            alt="LES NRG project"
            fill
            className="object-cover opacity-50"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-[#111111]/20" />
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F5C500]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 relative z-10">
          <span className="section-label">Reach Out</span>
          <h1 className="font-black text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}>
            Contact
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-[#111111] font-bold mb-4">Contact Us</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-[#6b6b62] text-sm">
                  <MapPin size={14} className="text-[#F5C500] mt-0.5 shrink-0" />
                  <div>
                    <div>Located in Philadelphia, Pennsylvania</div>
                  </div>
                </div>
                <a
                  href="https://instagram.com/les.nrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#6b6b62] text-sm hover:text-[#F5C500] transition-colors"
                >
                  <Instagram size={14} className="text-[#F5C500]" />
                  @les.nrg
                </a>
              </div>
            </div>

            <div className="divider" />

            <div className="card">
              <h3 className="text-[#111111] font-semibold text-sm mb-3">What to Expect</h3>
              <ul className="space-y-2">
                {[
                  "Response within 1 business day",
                  "No-pressure initial conversation",
                  "Clear project scope and pricing",
                  "Early engagement encouraged",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#6b6b62] text-sm">
                    <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-[#111111] font-semibold text-sm mb-3">Service Area</h3>
              <p className="text-[#6b6b62] text-sm leading-relaxed mb-3">
                Located in Philadelphia, PA — we travel wherever buildings are.
                We regularly serve clients throughout Pennsylvania, New Jersey, New York, Delaware,
                and beyond. No project is too far.
              </p>
              <div className="flex items-start gap-2 text-[#6b6b62] text-sm">
                <CheckCircle size={13} className="text-[#F5C500] mt-0.5 shrink-0" />
                Travel costs included in project scope
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card text-center py-16">
                <div className="w-14 h-14 rounded-full bg-[#F5C500]/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-[#F5C500]" />
                </div>
                <h3 className="text-[#111111] font-bold text-xl mb-2">Message Sent</h3>
                <p className="text-[#6b6b62] max-w-sm mx-auto text-sm">
                  Thanks for reaching out. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Full Name *</label>
                    <input
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(215) 555-0100"
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Company / Builder</label>
                    <input
                      name="company"
                      placeholder="Optional"
                      value={form.company}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Service Needed *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select...</option>
                      <option>New Construction — Single Family</option>
                      <option>New Construction — Multifamily</option>
                      <option>Existing Home</option>
                      <option>Commercial Building</option>
                      <option>Large / Industrial Building</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — location, size, timeline, and any specific goals or questions..."
                    value={form.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button type="submit" disabled={sending} className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={15} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
