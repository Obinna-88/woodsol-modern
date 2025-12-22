
"use client";
export const metadata = {
  title: "Services | Woodsol Chemicals",
  description: "Discover Woodsol Chemicals' services for water, air, and effluent treatment, including plant design, supply, and technical support.",
};
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { SERVICES } from "../../lib/services";

export default function ServicesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter((s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="container py-5">
      
      <header className="mb-4 d-flex flex-column flex-md-row gap-3 align-items-start">
        <div className="services-header-left">
          <h1 className="display-6 mb-1">Products & Services</h1>
          <p className="lead">Comprehensive water, air and effluent treatment solutions tailored for industrial operations.</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <label htmlFor="service-search" className="visually-hidden">Search services</label>
          <input
            id="service-search"
            type="search"
            className="form-control service-search"
            placeholder="Search services — try ‘boiler’, ‘ZLD’…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <section className="row g-4">
        {filtered.map((s) => (
          <div key={s.id} className="col-12 col-md-6 col-lg-4">
            <article className="wood-card overflow-hidden h-100 image-card">
              <div className="service-image-wrapper">
                <Image src={s.image} alt={s.title} fill className="service-image" />
              </div>
              <div className="p-3 d-flex flex-column service-body">
                <h3 className="h5 mb-1">{s.title}</h3>
                <p className="text-muted mb-2">{s.summary}</p>
                <ul className="mb-3 small text-muted service-bullets">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-auto d-flex gap-2 align-items-center">
                  <Link href={`/services/${s.id}`} className="btn btn-outline-secondary btn-sm">Learn more</Link>
                  <Link href="/contact" className="btn btn-primary btn-sm">Request quote</Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>

      <section className="mt-5">
        <div className="p-4 wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h4 className="mb-1">Need a tailored solution?</h4>
            <p className="mb-0 text-muted">Contact our technical team for site surveys, water analysis and turnkey proposals.</p>
          </div>
          <div className="d-flex gap-2">
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
            <Link href="/products" className="btn btn-outline-secondary">See products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
