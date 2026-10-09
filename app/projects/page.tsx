import Link from "next/link";
import Image from "next/image";

const CASES = [
  { id: 'hotel-lobby', title: 'Boiler Refit Case', excerpt: 'Full boiler reconditioning and chemical conditioning for improved uptime.', image: '/Boiler4.jpg' },
  { id: 'restaurant-fitout', title: 'Tank Maintenance', excerpt: 'Storage tank cleaning and lining services for safe storage.', image: '/Tank2.jpg' },
  { id: 'office-fitout', title: 'Tank Inspection Program', excerpt: 'Scheduled inspection and repair for process tanks and vessels.', image: '/Tank3.jpg' },
];

export default function ProjectsPage() {
  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Projects</h1>
        <p className="text-muted">Selected projects and case studies showcasing our craft and delivery.</p>
      </header>

      <section className="row g-4">
        {CASES.map((c) => (
          <article key={c.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 wood-card overflow-hidden">
              <div className="p-3">
                <div className="project-thumb rounded mb-3 overflow-hidden" aria-hidden="true">
                  <Image src={c.image} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="rounded" />
                </div>
                <h5>{c.title}</h5>
                <p className="text-muted small">{c.excerpt}</p>
                <div className="mt-2">
                  <Link href="/portfolio" className="btn btn-outline-primary btn-sm">View case study</Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
