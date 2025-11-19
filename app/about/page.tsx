import Link from "next/link";
import Image from "next/image";

// small mapping helper for industry icons used in the About industries grid
function getIndustryIcon(name: string) {
  const key = (name || "").toLowerCase();
  if (/pharm|pharmaceutical/.test(key)) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.08" />
        <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (/food|soft|drink|feed/.test(key)) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="9" r="3" fill="currentColor" opacity="0.14" />
        <path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // default small building motif
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="7" width="6" height="10" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="10" y="4" width="11" height="13" rx="1" fill="currentColor" opacity="0.75" />
      <circle cx="6" cy="19" r="1" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="container py-5">
      <header className="about-hero mb-4 p-3 p-md-4">
        <div className="about-hero-grid d-flex flex-column flex-md-row align-items-stretch gap-3">
          <div className="about-hero-copy flex-fill">
            <h1 className="display-6 mb-2">About Woodsol Chemicals</h1>
            <p className="lead mb-3">Keeping the heart of industry running — advanced water and air treatment for boilers, cooling towers and process plants.</p>

            <p className="mb-3">We partner with plant operators to reduce downtime, improve energy efficiency and extend equipment life through bespoke chemical programs, on-site analysis and engineering support.</p>

            <div className="d-flex gap-2 align-items-center">
              <span className="brand-badge">Established 1991</span>
              <span className="brand-subtitle ms-2">Trusted by industries across Malaysia &amp; the region</span>
            </div>
          </div>

          <div className="about-hero-visual d-none d-md-block flex-shrink-0">
            {/* Decorative hero photo on larger screens - prioritized visually but not using next/image to keep layout stable */}
            <Image src="/Boilers1.jpg" alt="Industrial boiler plant" width={480} height={320} className="hero-photo-main" priority />
          </div>
        </div>
      </header>

      <div className="mb-4">
        <div className="about-stats">
          <div className="about-stat">
            <h4>30+</h4>
            <p>Years in operation</p>
          </div>
          <div className="about-stat">
            <h4>1,200+</h4>
            <p>Projects supported</p>
          </div>
          <div className="about-stat">
            <h4>500+</h4>
            <p>Satisfied clients</p>
          </div>
        </div>

        <section className="mt-3">
          <h2 className="h5">Overview</h2>
          <p>
            Woodsol Chemicals specialises in keeping industrial boilers and cooling towers efficient
            and reliable through advanced water and air treatment solutions. We partner with plant
            operators to reduce downtime, improve energy efficiency and extend equipment life.
          </p>
        </section>
      </div>

      <section className="mb-4">
        <div className="row">
          <div className="col-md-8">
            <h3>Vision &amp; Commitment</h3>
            <p className="mb-2 vision-text"><strong>Vision:</strong> “To be healthy through caring.”</p>

            <p className="mb-2 commitment-title"><strong>Commitment:</strong></p>
            <ul>
              <li>Deliver low operating costs</li>
              <li>Provide cutting-edge technical services</li>
              <li>Achieve yearly targets of clean, efficient boiler, cooling towers &amp; water conditions</li>
              <li>Ensure minimum downtime through accurate water analysis and tailored solutions</li>
            </ul>

            <h4 className="mt-3">Our approach</h4>
            <p>
              We combine on-site water analysis, preventative maintenance and tailored chemical
              programs so plants run cleaner, safer and more efficiently. Our teams prioritise
              measurable outcomes and minimum downtime.
            </p>
          </div>

          <aside className="col-md-4">
            <div className="card wood-card p-3">
              <h5 className="mb-1">Contact</h5>
              <p className="mb-1">35, Jalan Raya Barat, 41100 Klang, Selangor, Malaysia</p>
              <p className="mb-1">Phone: <a href="tel:+60333713360" className="text-decoration-none">+60 3-3371 3360</a> &nbsp;|&nbsp; <a href="tel:+60333719516" className="text-decoration-none">+60 3-3371 9516</a></p>
              <p className="mb-2">Email: <a href="mailto:info@woodsol.com" className="text-decoration-none">info@woodsol.com</a></p>
              <div className="d-grid gap-2">
                <Link href="/contact" className="btn btn-primary btn-sm">Request a quote</Link>
                <a href="https://wa.me/60125117450" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">Chat on WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mb-4">
        <h3>Industries Served</h3>
        <p>We serve a broad cross-section of industries — supporting processes, utilities and production with chemicals, equipment and engineering services.</p>
  <div className="row row-cols-2 row-cols-md-4 g-2 mt-2" role="list" aria-label="Industries served">
          {/* industry list with tooltips */}
          {(() => {
            const industryList = [
              'Animal Feed','Boiler Contractors','Electronics','Concrete','Auto Parts','Hotels','Tobacco','Laundry',
              'Packaging','Personal Care','Pharmaceuticals','Paper','Soft Drinks','Steel/Iron','Textile','Timber',
              'Fabrication','Palm Oil','Rubber','Food','Cable/Wire','Furniture','Chemical','Hospitals'
            ];

            const tooltips: Record<string, string> = {
              'Animal Feed': 'Additives, water treatment and quality control for feed production',
              'Boiler Contractors': 'Boiler chemistry and commissioning support',
              'Electronics': 'High-purity water and closed-loop cooling solutions',
              'Concrete': 'Water treatment for concrete mixing and curing applications',
              'Auto Parts': 'Corrosion control and process water treatment',
              'Hotels': 'Cooling tower and boiler maintenance programs for hospitality',
              'Tobacco': 'Process water and effluent treatment for tobacco processing',
              'Laundry': 'High-efficiency water treatment for commercial laundries',
              'Packaging': 'Process water conditioning for packaging production lines',
              'Personal Care': 'High-quality water and hygiene-safe chemical supply',
              'Pharmaceuticals': 'Purity-critical solutions: demin, RO and polishing',
              'Paper': 'Scale and deposit control for paper machines and boilers',
              'Soft Drinks': 'Food-grade water treatment and compliance support',
              'Steel/Iron': 'Scale, passivation and corrosion control for metalworks',
              'Textile': 'Fibre-safe chemicals and water reuse solutions',
              'Timber': 'Process water and effluent management for timber mills',
              'Fabrication': 'Cleaning, passivation and wastewater handling for fabricators',
              'Palm Oil': 'Cooling water and effluent solutions tailored to palm oil mills',
              'Rubber': 'Process water stability and contamination control',
              'Food': 'HACCP-aware water treatment and sanitisation',
              'Cable/Wire': 'Cooling and quench water treatment for cable manufacture',
              'Furniture': 'Process and finish water treatment',
              'Chemical': 'Industrial chemical supply with quality control',
              'Hospitals': 'Sanitised water and effluent management for healthcare'
            };

            return industryList.map((i) => (
              <div key={i} className="col" role="listitem">
                <div className="p-2 wood-card small industry-card" data-tooltip={tooltips[i]} title={tooltips[i]} aria-label={i}>
                  {getIndustryIcon(i)}
                  <span>{i}</span>
                </div>
              </div>
            ));
          })()}
        </div>
      </section>

      <section className="mb-4">
        <h3>Partners &amp; Associated Companies</h3>
        <p>We work with established specialists and technology partners to deliver turnkey chemical, equipment and engineering solutions.</p>

        <div className="mb-3">
          <h4 className="h6">Tandex Chemicals</h4>
          <p className="mb-1">Established: 1986 — specialists in industrial chemical cleaning (acid &amp; alkali). Trained by German experts (VGB guidelines) and certified by Petronas for technical excellence.</p>
          <p className="mb-1"><strong>Services:</strong> Chemical cleaning, alkali boil-out, steam blowing, oil flushing, metal laundry, wastewater treatment &amp; hydrojetting.</p>
          <p className="mb-0 text-muted small"><strong>Clients include:</strong> Siemens, Alstom, GE, Mitsubishi, Hitachi, Toyo, Petronas, BASF, Technicas, CTCI, Toshiba, and more.</p>
        </div>

        <div className="mb-3">
          <h4 className="h6">ACEPL (Air Control Experts Pvt. Ltd.)</h4>
          <p className="mb-1">Specialists in electrostatic precipitator (ESP) design and installation, renovation, retrofitting and upgradation of air pollution control systems. Also manufactures industrial fans and cage vents.</p>
          <p className="mb-0 text-muted small">We partner with ACEPL for ESP projects and complex air pollution control work.</p>
        </div>

        <div>
          <h4 className="h6">ENMAS</h4>
          <p className="mb-1">A large asset-management provider with over 1,600 personnel focused on Operation &amp; Maintenance, Asset Integrity and Material Optimization across Power, Oil &amp; Gas, Steel &amp; Cement sectors.</p>
          <p className="mb-0 text-muted small">ENMAS supports large-scale O&amp;M contracts and lifecycle services for critical infrastructure.</p>
        </div>
      </section>

      <section className="mb-5">
        <h3>Environmental commitment</h3>
        <p>We prioritize certified timbers, low-VOC finishes and responsible waste management. Our approach balances quality with measurable environmental improvements.</p>
      </section>

      <section className="mb-5 d-flex justify-content-center">
        <div className="w-100 w-md-50 text-center">
          <h4>Ready to start?</h4>
          <p className="text-muted">Tell us about your project and we will prepare a tailored estimate.</p>
          <div className="d-flex justify-content-center gap-2">
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
            <Link href="/portfolio" className="btn btn-outline-secondary">View portfolio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
