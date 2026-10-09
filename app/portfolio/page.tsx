import type { Metadata } from "next";
import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected Woodsol Chemicals projects: boiler and cooling tower treatment, pipe cleaning, tank maintenance and effluent systems.",
};

export default function PortfolioPage() {
  return <PortfolioGallery />;
}
