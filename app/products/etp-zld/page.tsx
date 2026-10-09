import Link from "next/link";

export default function ETPZldPage() {
  return (
    <div className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Effluent Treatment & ZLD Systems</h1>
        <p className="text-muted">Complete effluent management solutions including ETP, ZLD and biogas integration for sustainable water reuse.</p>
      </header>

      <section className="mb-3">
        <h2 className="h6">Capabilities</h2>
        <ul>
          <li>Effluent Treatment Plants (ETP) design and build</li>
          <li>Zero Liquid Discharge (ZLD) systems with thermal or mechanical evaporation
          and crystallization steps</li>
          <li>Biogas recovery and integration for energy-offsetting</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="h6">Typical specifications</h2>
        <table className="table table-sm">
          <tbody>
            <tr><th>Feed loading</th><td>Custom: BOD/COD/SS specified per project</td></tr>
            <tr><th>Effluent quality</th><td>Configured to local discharge or reuse standards</td></tr>
            <tr><th>ZLD options</th><td>Mechanical vapour recompression, multi-effect evaporators, and thermal crystallizers</td></tr>
            <tr><th>Energy</th><td>Site-dependent; biogas integration can offset energy use</td></tr>
          </tbody>
        </table>
        <p className="small text-muted">Download a sample datasheet: <a href="/etp-zld-datasheet.pdf" download className="text-decoration-none">etp-zld-datasheet.pdf</a></p>
      </section>

      <section className="mb-3">
        <h2 className="h6">Advantages of ZLD</h2>
        <ul>
          <li>Recycles & reuses wastewater</li>
          <li>Eliminates discharge and reduces environmental compliance risk</li>
          <li>Low ongoing operational cost when properly sized and optimised</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="h6">Feedstock & beneficiaries</h2>
        <p className="text-muted">Supports agricultural, animal, industrial and municipal waste streams; beneficiaries include farmers, gas producers and organic effluent industries.</p>
      </section>

      <section className="mt-4">
        <div className="d-flex gap-2">
          <Link href="/contact" className="btn btn-primary">Request a technical consultation</Link>
          <Link href="/products" className="btn btn-outline-secondary">Back to products</Link>
        </div>
      </section>
    </div>
  );
}
