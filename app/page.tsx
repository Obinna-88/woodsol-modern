"use client";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import { useMemo, useState } from "react";

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

	return (
		<div>
						{/* Theme overrides for this page; core variables live in globals.css */}
						<style>{`
						.hero-gradient{
							background: linear-gradient(135deg, rgba(11,122,68,0.08), rgba(11,122,68,0.02));
							border-radius: 1rem;
						}
				.brand-badge{
					background: linear-gradient(90deg, var(--woodsol-green), #119c57);
					color: white;
					border-radius: .5rem;
					padding: .25rem .6rem;
					font-weight:600;
				}
						.wood-card{
							border-radius: .8rem;
							border: 1px solid rgba(11,122,68,0.06);
							box-shadow: 0 6px 18px rgba(11,122,68,0.04);
						}
						.hero-image-bg { background: linear-gradient(180deg,var(--woodsol-green-50),#e9f6ee); }
						.hero-image-wrapper { width:100%; max-width:520px; height:260px; }
				.accent-underline{ display:inline-block; height:4px; background:var(--woodsol-green); width:48px; vertical-align:middle; margin-left:.5rem; border-radius:2px; }

				/* Local button tweaks (global rules live in globals.css) */
				.btn-primary { background-color: var(--woodsol-green) !important; border-color: var(--woodsol-green) !important; color: #fff !important; }
				.btn-primary:hover, .btn-primary:focus { background-color: var(--woodsol-green-700) !important; border-color: var(--woodsol-green-700) !important; }

				.text-primary { color: var(--woodsol-green) !important; }

				@media (prefers-color-scheme: dark){ body { background: #07140b; color: #e9efe9; } }

				/* Service card hover/focus styles */
				.service-card { transition: transform .18s ease, box-shadow .18s ease; will-change: transform; }
				.service-card:hover, .service-card:focus-within { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(11,122,68,0.10); }
				.service-card:focus-within { outline: 2px solid rgba(11,122,68,0.12); outline-offset: 6px; }
			`}</style>

			{/* Header is rendered in the root layout now */}

			{/* Main container */}
			<main className="container py-5">
				{/* Hero */}
				<section className="row align-items-center gy-4 hero-gradient p-4 wood-card">
					<div className="col-12 col-md-6">
						<h1 className="display-6 fw-bold">
							Woodsol Chemicals — keeping systems healthy, efficient and reliable
							<span className="accent-underline" />
						</h1>
								<p className="mt-3 text-muted">
									Vision: “To be healthy through caring.” We deliver tailored water and
									air treatment programs to reduce operating costs, lower downtime and
									improve equipment life for boilers and cooling towers.
								</p>

								<div className="mt-3">
									<strong>Key brand messages</strong>
									<ul className="mb-0 mt-2">
										<li>Devoted to the Heart of Industries</li>
										<li>We Care for What Keeps You Running</li>
										<li>Innovative, Reliable, and Environmentally Friendly Solutions</li>
										<li>Over 30 years of Comprehensive Industrial Experience</li>
									</ul>
								</div>

						<div className="d-flex gap-2 flex-wrap mt-3">
							<Link href="/contact" className="btn btn-primary btn-lg">Get a quote</Link>
							<Link href="/portfolio" className="btn btn-outline-secondary btn-lg">View portfolio</Link>
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
									<div className="card-body">
										<h5 className="card-title">{s.title}</h5>
										<p className="card-text text-muted">{s.desc}</p>
												<Link href="/contact" className="stretched-link text-decoration-none text-primary">Request quote →</Link>
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
							<div className="p-3 wood-card">
								<blockquote className="mb-0">
									&ldquo;Outstanding craft and clear communication — delivered on time.&rdquo;
								</blockquote>
								<footer className="text-muted mt-2">
									— A. Client, Hospitality
								</footer>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="p-3 wood-card">
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
					<div className="p-4 wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
						<div>
							<h4 className="mb-1">Ready to start your project?</h4>
							<div className="text-muted">
								Tell us about your needs and we will respond with a custom proposal.
							</div>
						</div>
						<div className="d-flex gap-2">
							<Link href="/contact" className="btn btn-primary">Request a quote</Link>
							<Link
								href="/portfolio"
								className="btn btn-outline-secondary"
							>
								See portfolio
							</Link>
						</div>
					</div>
				</section>

				{/* Footer is rendered in the root layout — removed local Footer to avoid duplicate */}
			</main>
		</div>
	);
}