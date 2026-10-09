// Set NEXT_PUBLIC_SITE_URL (e.g. https://example.com) in the deployment environment.
// Until it is set, absolute URLs (metadataBase, sitemap, robots sitemap link) are omitted.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
export const SITE_NAME = "Woodsol Chemicals";
export const SITE_TITLE = "Woodsol Chemicals — Water & Air Treatment Solutions";
export const SITE_DESCRIPTION =
  "Woodsol Chemicals — advanced water and air treatment solutions for boilers and cooling towers.";
