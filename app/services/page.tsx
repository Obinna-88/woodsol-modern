import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Products & Services</h1>
        <p className="text-muted">Comprehensive water, air and effluent treatment solutions for industrial plants.</p>
      </header>

      <section className="mb-4">
        <h2 className="h5">1. Boiler Water Treatment</h2>
        <p className="mb-1">Bespoke boiler water treatment chemicals and programs designed to protect heat exchange surfaces, reduce scale and corrosion, and improve thermal efficiency.</p>
        <ul>
          <li>Organic Polylignin Treatment (environmentally friendly)</li>
          <li>Inorganic treatments</li>
          <li>Chemical cleaning of boilers</li>
        </ul>
        <p className="mb-1"><strong>Programs:</strong> Sulphite Program, DEHA Program, Polylignin Program, Amine Program, Hydrazine Program, Cetamine Program</p>
        <p className="mb-0 text-muted small">Industries: Palm Oil Mills, Petrochemical, Power, Timber, Refineries</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">2. Cooling Water Treatment</h2>
        <p>Cooling water chemicals and chemical cleaning for cooling towers. Prevents corrosion, bacterial growth (including Legionella), algae, and fouling.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">3. Chilled Water System</h2>
        <p>Chilled water chemicals and comprehensive chemical cleaning services for chilled water systems.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">4. Demineralized (Demin) Water</h2>
        <ul>
          <li>Demin water supply (1m³/hr to 50m³/hr)</li>
          <li>Custom demin plants (up to 150m³/hr)</li>
          <li>Mobile demin plant (up to 20m³/hr)</li>
          <li>Chloride Removal Plant (CLRP) for crude oil</li>
        </ul>
        <p className="text-muted small">Industries served: Shipping, Pharmaceuticals, Refineries, Processing & Power Plants</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">5. Raw Water Treatment</h2>
        <p>Treatment chemicals and equipment including clarifiers, sand filters, softeners, and deaerators. We supply organic & inorganic polymers and design, supply & maintain Reverse Osmosis (RO) plants.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">6. Air Pollution Control</h2>
        <h4 className="h6 mt-2">a. Electrostatic Precipitators (ESP)</h4>
        <p>Design, fabrication, installation, testing & commissioning for removal of suspended particles from gas streams. Partners: ACEPL (Air Control Experts Pvt. Ltd.)</p>
        <h4 className="h6 mt-2">b. Venturi Scrubber</h4>
        <p>Corrosion-free, cost-effective Venturi scrubber designs for palm oil & sugar mills to reduce dust, SOx/NOx emissions and opacity levels.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">7. Effluent Treatment</h2>
        <p>Effluent Treatment Plants (ETP), Zero Liquid Discharge (ZLD) systems and biogas systems. ZLD recycles and reuses wastewater, offering zero discharge and low operational cost.</p>
        <p className="text-muted small">Feedstock: Agricultural, Animal, Industrial Waste, STP, MSW. Beneficiaries include farmers, gas producers and organic effluent industries.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">8. Engineering Skid Systems</h2>
        <ul>
          <li>Hydrogen Sulfide (H₂S) Removal Skids</li>
          <li>BioScrubber systems (100–200 kg/day)</li>
          <li>Absorbent-based systems</li>
          <li>Pressure reducing stations, metering skids and chemical injection skids</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h5">9. Sulphur Management</h2>
        <p>Recovery and marketing of biological sulphur (“Sulfabact”), with expertise in processing, bagging and field application.</p>
      </section>

      <section className="mb-4">
        <h2 className="h5">10. Additional Services</h2>
        <ul>
          <li>Fuel oil additives (prevent sludge, corrosion, wax)</li>
          <li>Lab reagents for water analysis (GPR & AR grade)</li>
          <li>Industrial chemicals & reagents</li>
        </ul>
      </section>

      <section className="mt-5">
        <div className="p-4 wood-card d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h4 className="mb-1">Need a tailored solution?</h4>
            <p className="mb-0 text-muted">Contact our technical team for site surveys, water analysis and turnkey proposals.</p>
          </div>
          <div className="d-flex gap-2">
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
            <Link href="/products" className="btn btn-outline-secondary">See products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
