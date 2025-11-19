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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// suppressHydrationWarning prevents React from logging hydration attribute mismatch
		// warnings when browser extensions (for example: CrossPilot/Copilot extensions)
		// mutate the DOM before React hydrates. The real root cause is usually an
		// extension altering the page; disabling it in the browser or running in
		// a clean profile will avoid the mismatch. This keeps the console clean
		// while preserving SSR and hydration behavior.
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Add favicons, additional meta tags, Open Graph here */}
			</head>
			<body>
						<Header />
						<div id="page-content" role="main">
							{children}
						</div>
						<Footer />
						<ChatWidget />
			</body>
		</html>
	);
}
