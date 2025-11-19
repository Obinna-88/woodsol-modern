export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
  details?: string;
  datasheet?: string;
};

export const SERVICES: Service[] = [
  {
    id: "boiler",
    title: "Boiler Water Treatment",
    summary: "Chemical programs to protect heat-exchange surfaces, reduce scale and improve thermal efficiency.",
    bullets: ["Polylignin & organic programs", "Chemical cleaning", "Monitoring & dosing"],
    image: "/Boiler4.jpg",
    details:
      "Comprehensive boiler water treatment programs designed to protect the boiler, reduce fuel consumption and extend asset life. We provide routine monitoring, dosing systems, and emergency cleaning services.",
  },
  {
    id: "cooling",
    title: "Cooling Tower & Circulating Water",
    summary: "Scale, corrosion and microbiological control for cooling towers and closed systems.",
    bullets: ["Scale & corrosion control", "Microbial control (Legionella focus)", "Biocide programs"],
    image: "/Tank4.jpg",
    details:
      "Site-specific treatment programs for open and closed cooling systems. We focus on scale prevention, corrosion inhibition and microbiological control with robust monitoring and compliance reporting.",
  },
  {
    id: "demin",
    title: "Demineralized Water & RO",
    summary: "Design, supply and commissioning of demin plants and mobile units across flow ranges.",
    bullets: ["Mobile & skid units", "Custom demin plants", "CLRP chloride removal"],
    image: "/Tank3.jpg",
    details:
      "Turnkey demineralization and reverse-osmosis solutions including pre-treatment, membranes, post-treatment polishing and commissioning support. We supply both permanent and mobile skid units.",
  },
  {
    id: "etp",
    title: "Effluent Treatment & ZLD",
    summary: "End-to-end effluent treatment, ZLD and biogas solutions for industrial streams.",
    bullets: ["ETP design", "ZLD implementation", "Biogas recovery"],
    image: "/Pipe Cleaned.jpg",
    details:
      "Design and implementation of effluent treatment plants with options for Zero Liquid Discharge (ZLD) and resource recovery. We provide process design, equipment supply and commissioning.",
  },
  {
    id: "air",
    title: "Air Pollution Control",
    summary: "ESP, Venturi scrubbers and scrubber maintenance to reduce dust and gaseous emissions.",
    bullets: ["ESP services", "Venturi & scrubbers", "Emission monitoring"],
    image: "/Boiler3.jpg",
    details: "Air emission control systems, maintenance and monitoring to meet regulatory limits and improve plant reliability.",
  },
  {
    id: "skids",
    title: "Engineering Skid Systems",
    summary: "Custom skids for chemical dosing, H2S removal and metering skids for precise control.",
    bullets: ["Chemical injection skids", "Metering & dosing systems", "H2S removal skids"],
    image: "/Boiler2.jpg",
    details: "Skid-mounted process units designed for rapid deployment and simplified installation, including controls and commissioning support.",
  },
];

export function findService(id: string) {
  return SERVICES.find((s) => s.id === id) || null;
}
