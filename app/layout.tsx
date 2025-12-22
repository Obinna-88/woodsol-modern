import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";
import ChatWidget from "./components/ChatWidget";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
	title: "Woodsol Chemicals — Water & Air Treatment Solutions",
	description:
		"Woodsol Chemicals — advanced water and air treatment solutions for boilers and cooling towers. Vision: 'To be healthy through caring.' Committed to low operating costs, cutting-edge technical services and accurate water analysis to minimise downtime.",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// Keep markup simple and stable for SSR/hydration. Use a site-root class
		// to allow a flex column layout so footer stays at the bottom naturally.
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<meta property="og:title" content="Woodsol Chemicals — Water & Air Treatment Solutions" />
				<meta property="og:description" content="Woodsol Chemicals — advanced water and air treatment solutions for boilers and cooling towers." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yourdomain.com/" />
				<meta property="og:image" content="/og-image.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Woodsol Chemicals — Water & Air Treatment Solutions" />
				<meta name="twitter:description" content="Woodsol Chemicals — advanced water and air treatment solutions for boilers and cooling towers." />
				<meta name="twitter:image" content="/og-image.png" />
			</head>
			<body className="site-root">
				{/* Accessible skip link visible on keyboard focus */}
				<a href="#main-content" className="skip-link">Skip to content</a>

				<Header />

				<main id="main-content" role="main" className="site-main">
					{children}
				</main>

				<Footer />

				<ChatWidget />
			</body>
		</html>
	);
}
