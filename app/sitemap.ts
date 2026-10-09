import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

const ROUTES = [
  "",
  "/about",
  "/services",
  "/products",
  "/products/demin-plants",
  "/products/etp-zld",
  "/portfolio",
  "/projects",
  "/sustainability",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.7,
  }));
}
