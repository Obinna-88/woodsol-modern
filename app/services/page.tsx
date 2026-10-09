import type { Metadata } from "next";
import ServicesList from "./ServicesList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Boiler, cooling tower, demineralisation, ETP/ZLD and chemical cleaning services from Woodsol Chemicals.",
};

export default function ServicesPage() {
  return <ServicesList />;
}
