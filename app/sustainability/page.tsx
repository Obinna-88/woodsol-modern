export const metadata = {
  title: "Sustainability",
  description: "Learn about Woodsol Chemicals' commitment to sustainability, environmental responsibility, and resource efficiency in all projects.",
};
import Image from "next/image";
import Link from "next/link";

export default function SustainabilityPage() {
  return (
    <div className="container py-5">
      <header className="about-hero mb-4 p-4 d-flex flex-column flex-md-row gap-3">
        <div className="about-hero-copy">
          <h1 className="display-6 mb-1">Sustainability &amp; Environmental Commitment</h1>
          <p className="lead mb-3">Practical programs that reduce environmental impact and improve resource efficiency across projects, tailored to operational realities.</p>

          <div className="about-stats d-flex gap-3">
            <div className="about-stat text-center">
              <h4>32+</h4>
              <p>Years experience</p>
            </div>
            <div className="about-stat text-center">
              <h4>120+</h4>
              <p>Clients supported</p>
            </div>
            <div className="about-stat text-center">
              <h4>800+</h4>
              <p>Systems optimised</p>
            </div>
          </div>
        </div>

        <div className="about-hero-visual ms-md-3">
          <Image src="/image.jpeg" alt="Woodsol sustainability" className="hero-photo-main" width={720} height={420} priority />
        </div>
      </header>

      <section className="mb-4">
        <h2 className="h4">Our approach</h2>
        <p>We combine material selection, low-impact finishes and process optimisation to deliver projects that balance performance with environmental responsibility. Our work focuses on reducing waste, maximising reuse and supporting client sustainability targets with measurable outcomes.</p>
      </section>

      <section className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <article className="p-3 wood-card">
            <h3>Responsible materials</h3>
            <p className="text-muted">We prioritise certified and reclaimed materials where feasible and recommend low-VOC finishes to improve indoor air quality.</p>
            <p className="mb-0"><Link href="/contact" className="text-primary">Discuss materials →</Link></p>
          </article>
        </div>

        <div className="col-12 col-md-6">
          <article className="p-3 wood-card">
            <h3>Finish &amp; waste reduction</h3>
            <p className="text-muted">Factory-applied finishes and modular design reduce on-site waste and rework. We provide refurbishment paths to extend product life and circular-economy options.</p>
            <p className="mb-0"><Link href="/projects" className="text-primary">See refurbishment projects →</Link></p>
          </article>
        </div>
      </section>

      <section className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <article className="p-3 wood-card">
            <h3>Energy &amp; resource efficiency</h3>
            <p className="text-muted">We design for low-energy manufacturing, optimise logistics and help clients report on energy and carbon savings.</p>
            <p className="mb-0"><Link href="/services" className="text-primary">Learn about our audits →</Link></p>
          </article>
        </div>

        <div className="col-12 col-md-6">
          <article className="p-3 wood-card">
            <h3>Certifications &amp; reporting</h3>
            <p className="text-muted">We support ESG reporting, provide product declarations and advise on regulatory compliance to ease procurement and certification.</p>
            <p className="mb-0"><Link href="/about" className="text-primary">Read our commitments →</Link></p>
          </article>
        </div>
      </section>

      <section className="mb-4">
        <h3>Featured programs</h3>
        <div className="row g-3">
          <div className="col-sm-6 col-lg-3">
            <div className="p-3 wood-card">
              <strong>FSC Sourcing</strong>
              <p className="text-muted small mb-0">Sourcing policy and chain-of-custody support for timber-based projects.</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="p-3 wood-card">
              <strong>Low-VOC Finishes</strong>
              <p className="text-muted small mb-0">Recommend and specify finishes that improve indoor air quality.</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="p-3 wood-card">
              <strong>Modular Production</strong>
              <p className="text-muted small mb-0">Pre-finishing and modular assembly to reduce site waste and speed installation.</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="p-3 wood-card">
              <strong>Refurbishment</strong>
              <p className="text-muted small mb-0">Designed-in serviceability to extend lifecycle and reduce replacement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="p-3 wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h4 className="mb-1">Talk sustainability with us</h4>
            <p className="text-muted mb-0">We can help you include measurable sustainability outcomes in project specifications.</p>
          </div>
          <div className="d-flex gap-2">
            <Link href="/contact" className="btn btn-primary">Request sustainability briefing</Link>
            <a href="mailto:woodsol@woodsol.com" className="btn btn-outline-secondary" rel="noopener noreferrer">Email us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
