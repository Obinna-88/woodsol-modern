"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const navItems = useMemo(() => [
    { href: '/', label: 'Home', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" fill="currentColor" />
      </svg>
    ) },
    { href: '/about', label: 'About', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" />
      </svg>
    ) },
    { href: '/services', label: 'Services', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zM13 3v6h8V3h-8zM3 21h8v-6H3v6z" fill="currentColor" />
      </svg>
    ) },
    { href: '/products', label: 'Products', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 7h16v2H4V7zm0 4h10v2H4v-2zm0 4h16v2H4v-2z" fill="currentColor" />
      </svg>
    ) },
    { href: '/portfolio', label: 'Portfolio', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-3 4 3 4-3 4 3z" fill="currentColor" />
      </svg>
    ) },
    { href: '/sustainability', label: 'Sustainability', icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-4 4-8 4-8zM6 20a6 6 0 0 1 12 0H6z" fill="currentColor" />
      </svg>
    ) },
  ], []);

  useEffect(() => {
    // set a real DOM aria-expanded attribute to avoid static-analysis complaints
    if (toggleRef.current) {
      toggleRef.current.setAttribute("aria-expanded", navOpen ? "true" : "false");
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navOpen]);

  // Debug helper: log pathname so we can inspect client-side if links render.
  // Do NOT include `navItems` in deps — it contains JSX nodes and may differ
  // between server/client renders which breaks the hook dependency size check.
  useEffect(() => {
    console.debug('Header mounted. pathname=', pathname);
  }, [pathname]);

  // Close mobile menu when navigation changes (user clicked a link)
  useEffect(() => {
    // Close the mobile menu when the pathname changes (user navigated).
    // We only depend on `pathname` so this effect won't run when `navOpen`
    // toggles locally (that was causing the menu to immediately close after
    // opening). Setting navOpen false here is safe because it runs after
    // navigation completes.
    // Defer the setState to avoid calling setState synchronously inside the
    // effect body (prevents cascading renders and satisfies lint rules).
    const t = setTimeout(() => setNavOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  // (mobile media-query tracking removed — we use a CSS data-attribute fallback)

  return (
    <>
      <a href="#page-content" className="skip-link">Skip to content</a>

      <nav className="navbar navbar-expand-md bg-brand shadow-sm py-2" role="navigation" aria-label="Primary">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" aria-label="WoodSol home">
            <Image src="/image.jpeg" alt="WoodSol logo" width={56} height={56} className="rounded logo-img" />
            <div className="d-flex flex-column ms-2">
              <span className="fw-bold text-white brand-title">Woodsol Chemicals</span>
              <small className="brand-subtitle text-white-50">“We are devoted to the heart of industries! We care!”</small>
            </div>
          </Link>

          <button
            className={`navbar-toggler ${navOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-controls="navMenu"
            onClick={() => setNavOpen((s) => !s)}
            ref={toggleRef}
          >
            <span className="navbar-toggler-icon" aria-hidden="true">
              <span className="toggler-line" />
              <span className="toggler-line" />
              <span className="toggler-line" />
            </span>
          </button>

      {/* use nav-collapse instead of Bootstrap's global .collapse so Tailwind
        or other utility classes that set `.collapse { visibility: collapse }`
        won't keep our menu hidden. We still preserve the id for
        accessibility/aria-controls. */}
      <div
        className={`navbar-collapse nav-collapse ${navOpen ? "open" : ""}`}
        id="navMenu"
        // Attribute used by CSS fallback to force display on mobile when open
        data-nav-open={navOpen ? 'true' : undefined}
      >
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 align-items-center">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item px-1">
                  <Link
                    href={item.href}
                    className={`nav-link d-flex align-items-center px-3 ${pathname === item.href ? 'active' : ''}`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setNavOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center ms-auto gap-2">
              <a href="https://wa.me/60125117450" className="btn btn-light btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp with WoodSol">WhatsApp</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Accessibility status for screen readers — announces open/close */}
      <div aria-live="polite" className="visually-hidden" role="status">
        {navOpen ? 'Navigation menu opened' : 'Navigation menu closed'}
      </div>
      {/* backdrop for mobile menu when open */}
      {navOpen && <div className="nav-backdrop" onClick={() => setNavOpen(false)} aria-hidden="true" />}
    </>
  );
}
