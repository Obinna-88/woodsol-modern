"use client";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import { useMemo, useState, useEffect } from "react";

// Core services for Woodsol Chemicals (water & air treatment)
const SERVICES = [
	{ id: 1, title: "Boiler Water Treatment", desc: "Chemical programs and monitoring to keep boilers efficient and safe." },
	{ id: 2, title: "Cooling Tower Treatment", desc: "Scale, corrosion and microbiological control to improve uptime and efficiency." },
	{ id: 3, title: "Water Analysis & Testing", desc: "On-site and laboratory analysis with actionable recommendations." },
	{ id: 4, title: "Chemical Supply & Dosing", desc: "Reliable supply and precision dosing systems for consistent results." },
	{ id: 5, title: "System Audits & Training", desc: "Plant audits, reporting and operator training to reduce operating costs." },
];

export default function Home() {
	const [query, setQuery] = useState("");
	const [counts, setCounts] = useState({ years: 0, clients: 0, projects: 0 });

	// normalize helper: lowercase + remove diacritics for more reliable matching
	const normalize = (str: unknown) =>
		String(str ?? "")
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");

	const filtered = useMemo(() => {
		const q = normalize((query || "").trim());
		if (!q) return SERVICES;
		return SERVICES.filter((s) => {
			const title = normalize(s.title);
			const desc = normalize(s.desc);
			return title.includes(q) || desc.includes(q);
		});
	}, [query]);

	// simple animated counters for hero stats (runs once on mount)
	useEffect(() => {
		let raf = 0;
		const duration = 1400; // ms
		const start = performance.now();
		const targets = { years: 32, clients: 128, projects: 842 };

		const step = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			setCounts({
				years: Math.round(targets.years * eased),
				clients: Math.round(targets.clients * eased),
				projects: Math.round(targets.projects * eased),
			});
			if (t < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<div>


			{/* Header is rendered in the root layout now */}

			{/* Main container */}
			<main className="container py-5">
				{/* Hero */}
				<section className="row align-items-center gy-4 hero-gradient p-4 wood-card">
					<div className="col-12 col-md-6">
						<h1 className="display-6 fw-bold hero-headline">
							Woodsol Chemicals — dependable water &amp; air treatment
							<span className="accent-underline" />
						</h1>
						<p className="hero-lead">
							We design chemical programs, dosing systems and monitoring that reduce
							operational costs and extend equipment life for boilers, cooling towers
							and industrial water systems.
						</p>
						<div className="mt-3 d-flex gap-3 flex-wrap">
							<span className="badge bg-light text-muted">Operational Chemistry</span>
							<span className="badge bg-light text-muted">Dosing &amp; Supply</span>
							<span className="badge bg-light text-muted">Testing &amp; Audits</span>
						</div>

						<div className="d-flex gap-2 flex-wrap mt-3">
							<Link href="/contact" className="btn btn-wood btn-lg">Get a quote</Link>
							<Link href="/portfolio" className="btn btn-ghost btn-lg">View portfolio</Link>
						</div>

						{/* Hero stats (animated) */}
						<div className="d-flex gap-4 mt-4 flex-wrap align-items-center">
							<div className="text-center me-3">
								<div className="h3 mb-0 text-primary">{counts.years}+</div>
								<small className="text-muted">Years experience</small>
							</div>
							<div className="text-center me-3">
								<div className="h3 mb-0 text-primary">{counts.clients}+</div>
								<small className="text-muted">Satisfied clients</small>
							</div>
							<div className="text-center">
								<div className="h3 mb-0 text-primary">{counts.projects}+</div>
								<small className="text-muted">Projects delivered</small>
							</div>
						</div>

						{/* Search (Bootstrap input group) */}
						<div className="mt-4">
							<label
								htmlFor="search"
								className="form-label visually-hidden"
							>
								Search services
							</label>
							<div className="input-group">
								<input
									id="search"
									type="search"
									className="form-control"
									placeholder='Search services — try "flooring", "design"...'
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>
								<button
									className="btn btn-light"
									onClick={() => setQuery("")}
									aria-label="Clear search"
								>
									Clear
								</button>
							</div>
							<small className="text-muted">
								Showing {filtered.length} of {SERVICES.length} services
							</small>
						</div>
					</div>

					<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
						{/* New hero carousel (client) - improves LCP by prioritizing first slide */}
						<div className="w-100 d-flex justify-content-center">
							<HeroCarousel />
						</div>
					</div>
				</section>

				{/* Decorative marquee (accessible + respects reduced-motion) */}
				<section className="mt-4">
					<div className="marquee-wrap my-3" aria-hidden="true">
						<div className="marquee" role="presentation">
							<div className="marquee-group d-flex align-items-center">
								<Image src="/Boiler4.jpg" alt="Boiler equipment" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boilers1.jpg" alt="Boiler tube detail" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boiler3.jpg" alt="Industrial boiler" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Tank4.jpg" alt="Storage tank" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Tank3.jpg" alt="Process tank" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Pipe Cleaned.jpg" alt="Cleaned pipework" width={220} height={140} className="mx-3 rounded" />
								<Image src="/image.jpeg" alt="Woodsol site" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boiler2.jpg" alt="Boiler installation" width={220} height={140} className="mx-3 rounded" />
							</div>
							{/* duplicate group for continuous scroll */}
							<div className="marquee-group d-flex align-items-center" aria-hidden="true">
								<Image src="/Boiler4.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boilers1.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boiler3.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Tank4.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Tank3.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Pipe Cleaned.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/image.jpeg" alt="" width={220} height={140} className="mx-3 rounded" />
								<Image src="/Boiler2.jpg" alt="" width={220} height={140} className="mx-3 rounded" />
							</div>
						</div>
					</div>
                    
				</section>

				{/* Services */}
				<section id="services" className="mt-5">
					<div className="d-flex justify-content-between align-items-end">
						<div>
							<h2 className="h4 mb-0">Our Services</h2>
							<div className="text-muted">
								Core capabilities designed for durability, appearance and
								scalability.
							</div>
						</div>
						<div className="text-end text-muted">
							Filtered: <strong>{filtered.length}</strong>
						</div>
					</div>

					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-3">
						{filtered.map((s) => (
							<div key={s.id} className="col">
								<div className="card h-100 wood-card p-3 service-card">
									<div className="card-body d-flex flex-column h-100">
										<div className="d-flex align-items-start mb-2">
											<span className="service-icon" aria-hidden>🔬</span>
											<h5 className="card-title mb-0">{s.title}</h5>
										</div>
										<p className="card-text text-muted">{s.desc}</p>
										<div className="mt-auto">
											<Link href="/contact" className="stretched-link text-decoration-none text-primary">Request quote →</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Features / projects */}
				<section id="projects" className="mt-5">
					<div className="row g-4">
						<div className="col-md-6">
							<div className="p-4 wood-card">
								<h5>Scalable Manufacturing</h5>
								<p className="text-muted">
									From single bespoke pieces to large commercial orders —
									streamline production without sacrificing quality.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 wood-card">
								<h5>Sustainable Sourcing</h5>
								<p className="text-muted">
									We prioritize responsibly sourced materials and transparent
									supply chains.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 wood-card">
								<h5>Cross-platform Deliverables</h5>
								<p className="text-muted">
									Design files, manufacturing specs, and responsive web previews
									for client sign-off.
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="p-4 wood-card">
								<h5>Aftercare & Support</h5>
								<p className="text-muted">
									Maintenance programs and restoration help protect client
									investments over time.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="mt-5">
					<h3 className="h5">Trusted by clients</h3>
					<div className="row g-3 mt-3">
						<div className="col-sm-6">
							<div className="testimonial wood-card">
								<blockquote className="mb-0">
									&ldquo;Outstanding craft and clear communication — delivered on time.&rdquo;
								</blockquote>
								<footer className="text-muted mt-2">
									— A. Client, Hospitality
								</footer>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="testimonial wood-card">
								<blockquote className="mb-0">
									Quality materials and great aftercare program.
								</blockquote>
								<footer className="text-muted mt-2">
									— B. Client, Residential
								</footer>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section id="contact" className="mt-5">
					<div className="cta-strip wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
						<div>
							<h4 className="mb-1">Ready to start your project?</h4>
							<div className="text-muted">Tell us about your needs and we will respond with a custom proposal.</div>
						</div>
						<div className="d-flex gap-2">
							<Link href="/contact" className="btn btn-wood">Request a quote</Link>
							<Link href="/portfolio" className="btn btn-ghost">See portfolio</Link>
						</div>
					</div>
				</section>

				{/* Footer is rendered in the root layout — removed local Footer to avoid duplicate */}
			</main>
		</div>
	);
}