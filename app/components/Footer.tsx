import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-4 pb-4 w-100" role="contentinfo">
      {/* full-bleed background wrapper */}
      <div className="container-fluid px-0">
        <div className="footer-inner">
          <div className="container">
            <div className="row align-items-start">
          <div className="col-md-4 d-flex align-items-center gap-3">
            <Image src="/image.jpeg" alt="Woodsol Chemicals logo" width={48} height={48} className="rounded logo-img" />
            <div>
              <div className="fw-bold">Woodsol Chemicals</div>
              <div className="small text-white-50">Devoted to the Heart of Industries — We care for what keeps you running.</div>
              <div className="small text-white-50 mt-1">Innovative, reliable and environmentally friendly solutions — Over 30 years of industrial experience.</div>
            </div>
          </div>

          <div className="col-md-4 mt-3 mt-md-0">
            <h6 className="mb-2">Contact</h6>
            <div className="small">Tel: <a href="tel:+60333713360" className="muted-link">+60 3-3371 3360</a> &nbsp;|&nbsp; <a href="tel:+60333719516" className="muted-link">+60 3-3371 9516</a></div>
            <div className="small">WhatsApp: <a href="https://wa.me/60125117450" className="muted-link" target="_blank" rel="noopener noreferrer">+60 12 511 7450</a></div>
            <div className="small">Email: <a href="mailto:woodsol@woodsol.com" className="muted-link">woodsol@woodsol.com</a></div>
          </div>

          <div className="col-md-4 mt-3 mt-md-0">
            <h6 className="mb-2">Quick links</h6>
            <div className="d-flex flex-column flex-md-row gap-2 footer-links">
              <Link href="/about" className="muted-link">About</Link>
              <Link href="/services" className="muted-link">Services</Link>
              <Link href="/portfolio" className="muted-link">Portfolio</Link>
              <Link href="/contact" className="muted-link">Contact</Link>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text-center small text-white-50">
            © {new Date().getFullYear()} WoodSol. All rights reserved. &nbsp;|&nbsp; <Link href="/privacy" className="muted-link">Privacy</Link> &nbsp;|&nbsp; <Link href="/terms" className="muted-link">Terms</Link>
          </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
