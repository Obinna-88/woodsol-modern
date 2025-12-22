export const metadata = {
  title: "Products | Woodsol Chemicals",
  description: "Explore Woodsol Chemicals' full range of water and air treatment products for industrial and commercial applications.",
};
import ProductsList from "../components/ProductsList";

const PRODUCTS = [
  {
    id: 'boiler-chemicals',
    title: 'Boiler Water Treatment Chemicals',
    desc: 'Polylignin, sulphite, DEHA, amines, hydrazine, cetamine and bespoke formulations.',
    industries: ['Palm Oil Mills','Petrochemical','Power','Timber','Refineries']
  },
  {
    id: 'cooling-chemicals',
    title: 'Cooling Water Chemicals',
    desc: 'Scale and corrosion inhibitors, biocides and antifoulants for cooling towers.',
    industries: ['Power','Manufacturing','Petrochemical','Food & Beverage']
  },
  {
    id: 'chilled-chemicals',
    title: 'Chilled Water Chemicals',
    desc: 'Chemicals and cleaning for chilled water systems to ensure thermal efficiency.',
    industries: ['Pharmaceuticals','Commercial Buildings','Data Centers']
  },
  {
    id: 'demin-plants',
    title: 'Demin Water & Plants',
    desc: 'Demin water supply (1–50 m³/hr), custom demin plants (up to 150 m³/hr), mobile units (up to 20 m³/hr) and CLRP for crude oil.',
    industries: ['Shipping','Pharmaceuticals','Refineries','Processing','Power']
  },
  {
    id: 'raw-water',
    title: 'Raw Water Treatment & Equipment',
    desc: 'Clarifiers, sand filters, softeners, deaerators, polymers and RO plant design/supply/maintenance.',
    industries: ['Municipal','Industrial','Agriculture']
  },
  {
    id: 'air-pollution',
    title: 'Air Pollution Control Equipment',
    desc: 'ESP, Venturi scrubbers and turnkey EPC services in partnership with specialists.',
    industries: ['Palm Oil Mills','Sugar Mills','Power','Refineries']
  },
  {
    id: 'etp-zld',
    title: 'Effluent Treatment & ZLD',
    desc: 'ETP, ZLD systems and biogas integration for zero-discharge facilities.',
    industries: ['Agriculture','Food Processing','Industrial','Municipal']
  },
  {
    id: 'engineering-skids',
    title: 'Engineering Skid Systems',
    desc: 'H₂S removal skids, bioscrubbers, pressure reducing stations, metering and chemical injection skids.',
    industries: ['Oil & Gas','Industrial']
  },
  {
    id: 'sulphur',
    title: 'Sulphur Management',
    desc: 'Recovery and marketing of biological sulphur (“Sulfabact”).',
    industries: ['Agriculture','Industrial']
  },
  {
    id: 'additives-reagents',
    title: 'Fuel Additives, Lab Reagents & Industrial Chemicals',
    desc: 'Fuel oil additives, lab reagents (GPR & AR grade) and a broad range of industrial chemicals.',
    industries: ['Industrial','Laboratories','Refineries']
  }
];

export default function ProductsPage() {
  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1 className="display-6">Products</h1>
        <p className="text-muted">Our product and equipment catalogue for water, air and effluent treatment.</p>
      </header>

      <section>
        <ProductsList products={PRODUCTS} />
      </section>
    </main>
  );
}
