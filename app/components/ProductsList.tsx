"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

// Industry icon helper: returns a small inline SVG for known industries, falls back to generic icon
function getIndustryIcon(name: string) {
  const key = (name || "").toLowerCase();
  switch (true) {
    case /pharm|pharmaceutical/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.08" />
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case /food|soft|drink|feed/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="9" r="3" fill="currentColor" opacity="0.14" />
          <path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case /paper|pulp/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="4" y="4" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" fill="currentColor" opacity="0.04" />
          <path d="M8 8h8M8 12h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case /steel|iron|fabrication|auto|parts|cable|wire|metal/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="3" y="7" width="6" height="10" rx="1" fill="currentColor" opacity="0.12" />
          <rect x="11" y="4" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
    case /textile|fabric|laundry|clothe|towel|textile/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 10c4-6 12-6 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 14c4 6 12 6 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case /hotels|hospital|hospitals|health|healthcare/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.06" />
          <path d="M7 12h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case /palm|oil/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3c2 2 4 4 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M6 9c2 2 4 4 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case /pharma|personal|cosmetic|care/.test(key):
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.12" />
          <rect x="13" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 14h12v-4l-3-1-3 2-3-2-3 1v4z" fill="currentColor" opacity="0.9" />
          <rect x="3" y="2" width="4" height="4" rx="1" fill="currentColor" opacity="0.75" />
        </svg>
      );
  }
}

type Product = {
  id: string;
  title: string;
  desc: string;
  industries?: string[];
};

export default function ProductsList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string | null>(null);

  const industries = useMemo(() => {
    const s = new Set<string>();
    products.forEach((p) => (p.industries || []).forEach((i: string) => s.add(i)));
    return Array.from(s).sort();
  }, [products]);

  const filtered = useMemo(() => {
    if (!filter) return products;
    return products.filter((p) => (p.industries || []).includes(filter));
  }, [products, filter]);

  return (
    <div>
      <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
        <div className="small text-muted me-2">Filter by industry:</div>
        <button
          className={`btn btn-sm ${!filter ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {industries.map((i) => (
          <button
            key={i}
            className={`btn btn-sm ${filter === i ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter(filter === i ? null : i)}
          >
            {i}
          </button>
        ))}
        {filter && (
          <button className="btn btn-sm btn-link text-decoration-none ms-auto" onClick={() => setFilter(null)}>Clear</button>
        )}
      </div>

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 wood-card p-3">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <div className="mb-2 d-flex flex-wrap align-items-center">
                  {(p.industries || []).map((i: string) => (
                    <span key={i} className="industry-badge me-1 small d-inline-flex align-items-center" title={i} data-industry={i}>
                      {getIndustryIcon(i)}
                      <span className="ms-1">{i}</span>
                    </span>
                  ))}
                </div>
                <p className="card-text text-muted mb-3">{p.desc}</p>
                <div className="mt-auto d-flex gap-2">
                  <Link href="/contact" className="btn btn-outline-primary btn-sm">Request specifications</Link>
                  {p.id === 'demin-plants' ? (
                    <Link href="/products/demin-plants" className="btn btn-outline-secondary btn-sm">Details</Link>
                  ) : p.id === 'etp-zld' ? (
                    <Link href="/products/etp-zld" className="btn btn-outline-secondary btn-sm">Details</Link>
                  ) : (
                    <Link href="/services" className="btn btn-outline-secondary btn-sm">Related services</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
