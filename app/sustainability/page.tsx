import Link from "next/link";

export default function SustainabilityPage() {
  return (
    <main className="container py-5">
      <header className="about-hero mb-4 p-4">
        <h1 className="display-6 mb-1">Sustainability &amp; Environmental Commitment</h1>
        <p className="lead mb-0">Practical programs that reduce environmental impact and improve resource efficiency across projects.</p>
      </header>

      <section className="mb-4">
        <h2 className="h5">Our approach</h2>
        <p>We combine material selection, low-impact finishes and process optimisation to deliver projects that balance performance with environmental responsibility. Our work focuses on reducing waste, maximising reuse and supporting client sustainability targets.</p>
      </section>

      <section className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="p-3 wood-card">
            <h3>Responsible materials</h3>
            <p className="text-muted">We prioritise FSC-certified timbers and reclaimed materials where feasible and recommend low-VOC finishes to improve indoor air quality.</p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3 wood-card">
            <h3>Finish &amp; waste reduction</h3>
            <p className="text-muted">Factory-applied finishes and modular design reduce on-site waste and rework. We also provide refurbishment paths to extend product life.</p>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="p-3 wood-card">
            <h3>Energy &amp; resource efficiency</h3>
            <p className="text-muted">Where applicable we design for low-energy manufacturing, optimise transport logistics and support client-level reporting for energy and carbon.</p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3 wood-card">
            <h3>Certifications &amp; reporting</h3>
            <p className="text-muted">We help clients select compliant materials and provide documentation for ESG reporting, product declarations and local regulatory compliance.</p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h3>Programs &amp; technologies</h3>
        <ul>
          <li>Responsible timber sourcing (FSC where possible)</li>
          <li>Low-VOC and water-based finishes</li>
          <li>Modular production and pre-finishing to reduce site waste</li>
          <li>Refurbishment and lifecycle extension programs</li>
        </ul>
      </section>

      <section className="mt-4">
        <div className="p-3 wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h4 className="mb-1">Talk sustainability with us</h4>
            <p className="text-muted mb-0">We can help you include measurable sustainability outcomes in project specifications.</p>
          </div>
          <div className="d-flex gap-2">
            <Link href="/contact" className="btn btn-primary">Request sustainability briefing</Link>
            <a href="mailto:info@woodsol.com" className="btn btn-outline-secondary" rel="noopener noreferrer">Email us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
