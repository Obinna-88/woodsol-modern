import Link from "next/link";

export default function DeminPlantsPage() {
  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Demin Water Plants & Mobile Units</h1>
        <p className="text-muted">Design, supply and operate demineralized water systems tailored to your capacity and feedwater quality.</p>
      </header>

      <section className="mb-3">
        <h2 className="h6">Capacities</h2>
        <ul>
          <li>Continuous demin supply: 1 m³/hr to 50 m³/hr</li>
          <li>Custom skid-mounted plants: up to 150 m³/hr</li>
          <li>Mobile demin units: up to 20 m³/hr (rapid deployment for temporary needs)</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="h6">Features</h2>
        <ul>
          <li>Modular skid design for quick installation</li>
          <li>High-recovery RO and mixed-bed polishing options</li>
          <li>Redundancy and remote monitoring available</li>
          <li>CLRP (Chloride Removal Plant) options for crude oil applications</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="h6">Typical specifications</h2>
        <table className="table table-sm">
          <tbody>
            <tr><th>Feedwater</th><td>Raw / brackish / surface water (depends on pre-treatment)</td></tr>
            <tr><th>Permeate conductivity</th><td>&lt; 1 µS/cm (polishing dependent)</td></tr>
            <tr><th>Recovery</th><td>60% - 90% (system dependent)</td></tr>
            <tr><th>Typical utilities</th><td>Electricity, compressed air, chemical dosing</td></tr>
          </tbody>
        </table>
        <p className="small text-muted">Download a sample datasheet: <a href="/demin-plants-datasheet.pdf" download className="text-decoration-none">demin-plants-datasheet.pdf</a></p>
      </section>

      <section className="mb-3">
        <h2 className="h6">Industries served</h2>
        <p className="text-muted">Shipping, Pharmaceuticals, Refineries, Processing, Power Plants and any operation requiring high-purity water.</p>
      </section>

      <section className="mt-4">
        <div className="d-flex gap-2">
          <Link href="/contact" className="btn btn-primary">Request proposal</Link>
          <Link href="/products" className="btn btn-outline-secondary">Back to products</Link>
        </div>
      </section>
    </div>
  );
}
