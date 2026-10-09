// Set NEXT_PUBLIC_SITE_URL in the deployment environment to override.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.woodsol.com").replace(/\/$/, "");
export const SITE_NAME = "Woodsol Chemicals";
export const SITE_TITLE = "Woodsol Chemicals — Water & Air Treatment Solutions";
export const SITE_DESCRIPTION =
  "Woodsol Chemicals — advanced water and air treatment solutions for boilers and cooling towers.";
