
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() && !form.phone.trim()) return "Please provide either an email address or a phone number.";
    if (!form.message.trim()) return "Please enter a short description of your project.";
    return "";
  }

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Message:\n${form.message}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    // open mail client
    window.location.href = `mailto:woodsol@woodsol.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function sendWhatsApp() {
    const text = encodeURIComponent(`Hello, my name is ${form.name || ""}. I am enquiring about: ${form.message || ""} Contact: ${form.email || form.phone || ""}`);
    window.open(`https://wa.me/60125117450?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Contact</h1>
        <p className="text-muted">Get in touch — we are happy to discuss your requirements.</p>
      </header>

      <section>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-3 wood-card">
              <h3>Headquarters</h3>
              <address>
                35, Jalan Raya Barat, 41100 Klang, Selangor, Malaysia<br />
                Phone: <a href="tel:+60333713360" className="text-decoration-none">+60 3-3371 3360</a> &nbsp;|&nbsp; <a href="tel:+60333719516" className="text-decoration-none">+60 3-3371 9516</a><br />
                WhatsApp: <a href="https://wa.me/60125117450" target="_blank" rel="noopener noreferrer" className="text-decoration-none">+60 12 511 7450</a><br />
                Email: <a href="mailto:woodsol@woodsol.com" className="text-decoration-none">woodsol@woodsol.com</a>
              </address>

              <hr />
              <p className="mb-1"><strong>Office hours</strong></p>
              <p className="text-muted mb-0">Mon — Fri: 9:00 — 17:30</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 wood-card">
              <h3>Quick enquiry</h3>
              <form onSubmit={sendEmail} aria-describedby="contact-form-desc">
                <p id="contact-form-desc" className="text-muted">Complete the form below or use WhatsApp for a faster reply.</p>

                <div className="mb-2">
                  <label htmlFor="name" className="form-label">Full name</label>
                  <input id="name" className="form-control" value={form.name} onChange={(e) => update("name", e.target.value)} required aria-required="true" />
                </div>

                <div className="mb-2">
                  <label htmlFor="company" className="form-label">Company (optional)</label>
                  <input id="company" className="form-control" value={form.company} onChange={(e) => update("company", e.target.value)} />
                </div>

                <div className="row g-2">
                  <div className="col-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" className="form-control" value={form.email} onChange={(e) => update("email", e.target.value)} aria-describedby="email-help" />
                    <div id="email-help" className="form-text">We will use this to reply.</div>
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input id="phone" className="form-control" value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-describedby="phone-help" />
                    <div id="phone-help" className="form-text">Optional — include country code for WhatsApp.</div>
                  </div>
                </div>

                <div className="mb-2 mt-2">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" rows={5} className="form-control" value={form.message} onChange={(e) => update("message", e.target.value)} required aria-required="true" />
                </div>

                <div aria-live="polite" className="mb-2">
                  {error && <div className="alert alert-danger" role="alert">{error}</div>}
                  {sent && <div className="alert alert-success" role="status">Opening your email client...</div>}
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">Send via email</button>
                  <button type="button" className="btn btn-light" onClick={sendWhatsApp}>Send via WhatsApp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
