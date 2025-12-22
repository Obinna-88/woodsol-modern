
"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";

const PORTFOLIO = [
  { id: 'p1', title: 'Boiler Plant Installation', desc: 'Full boiler plant refurbishment and chemical conditioning.', image: '/Boiler3.jpg' },
  { id: 'p2', title: 'Pipe Cleaning & Maintenance', desc: 'High-pressure pipe cleaning and passivation services.', image: '/Pipe Cleaned.jpg' },
  { id: 'p3', title: 'Tank Works & Storage', desc: 'Storage tank cleaning, lining and inspection.', image: '/Tank1.jpg' },
  { id: 'p4', title: 'Boiler Suite', desc: 'Large-scale boiler installation.', image: '/Boiler2.jpg' },
  { id: 'p5', title: 'Boiler Maintenance', desc: 'Routine maintenance and servicing.', image: '/Boiler4.jpg' },
];

export default function PortfolioPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(() => PORTFOLIO.map((p) => ({ src: p.image, alt: p.title })), []);

  function open(i: number) { setOpenIndex(i); }
  function close() { setOpenIndex(null); }
  function prev() { if (openIndex === null) return; setOpenIndex((openIndex + images.length - 1) % images.length); }
  function next() { if (openIndex === null) return; setOpenIndex((openIndex + 1) % images.length); }

  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Portfolio</h1>
        <p className="text-muted">A selection of completed projects showcasing our craft. More items will be added soon.</p>
      </header>

      {PORTFOLIO.length === 0 ? (
        <section className="py-5 text-center">
          <p className="lead text-muted">No portfolio items have been published yet. Please check back soon or contact us for examples.</p>
          <div className="mt-3">
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
          </div>
        </section>
      ) : (
        <section className="row g-4">
        {PORTFOLIO.map((p, i) => (
          <article key={p.id} className="col-12 col-md-6 col-lg-4">
            <div className="card wood-card h-100 p-3">
              <div className="card-body d-flex flex-column">
                <button
                  type="button"
                  className="portfolio-thumb mb-3 overflow-hidden p-0 border-0 bg-transparent lightbox-open-focus"
                  onClick={() => open(i)}
                  aria-label={`Open ${p.title} preview`}
                >
                  <Image src={p.image} alt={p.title} width={1200} height={720} sizes="(max-width: 768px) 100vw, 33vw" className="rounded" />
                </button>
                <div className="portfolio-meta">
                  <h5 className="card-title mb-1">{p.title}</h5>
                  <p className="text-muted small mb-0">{p.desc}</p>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <Link href="/projects" className="btn btn-outline-primary btn-sm">Read more</Link>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => open(i)} aria-label={`Preview ${p.title}`}>Preview</button>
                </div>
              </div>
            </div>
          </article>
        ))}
        </section>
      )}

      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </main>
  );
}
