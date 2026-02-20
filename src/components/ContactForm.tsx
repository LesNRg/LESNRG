"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="card text-center py-16">
        <div className="w-14 h-14 rounded-full bg-[#F5C500]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={28} className="text-[#F5C500]" />
        </div>
        <h3 className="text-[#111111] font-bold text-xl mb-2">Message Sent</h3>
        <p className="text-[#6b6b62] max-w-sm mx-auto text-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Full Name *</label>
          <input name="name" required placeholder="Jane Smith" value={form.name} onChange={handleChange} className="input-field" />
        </div>
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Email *</label>
          <input name="email" type="email" required placeholder="jane@email.com" value={form.email} onChange={handleChange} className="input-field" />
        </div>
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Phone</label>
          <input name="phone" type="tel" placeholder="(215) 555-0100" value={form.phone} onChange={handleChange} className="input-field" />
        </div>
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Company / Builder</label>
          <input name="company" placeholder="Optional" value={form.company} onChange={handleChange} className="input-field" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Service Needed *</label>
          <select name="service" required value={form.service} onChange={handleChange} className="input-field">
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[#6b6b62] text-xs font-medium mb-1.5 block">Project Type</label>
          <select name="projectType" value={form.projectType} onChange={handleChange} className="input-field">
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
        <textarea name="message" required rows={5} placeholder="Tell us about your project — location, size, timeline, and any specific goals or questions..." value={form.message} onChange={handleChange} className="input-field resize-none" />
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
  );
}
