import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "../lib/site";
import ChatWidget from "./components/ChatWidget";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
	description: SITE_DESCRIPTION,
	manifest: "/manifest.json",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		type: "website",
		siteName: SITE_NAME,
		url: "/",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: ["/og-image.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: ["/og-image.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// Keep markup simple and stable for SSR/hydration. Use a site-root class
		// to allow a flex column layout so footer stays at the bottom naturally.
		<html lang="en" suppressHydrationWarning>
			<body className="site-root">
				{/* Accessible skip link visible on keyboard focus */}
				<a href="#main-content" className="skip-link">Skip to content</a>

				<Header />

				<main id="main-content" className="site-main">
					{children}
				</main>

				<Footer />

				<ChatWidget />
			</body>
		</html>
	);
}
