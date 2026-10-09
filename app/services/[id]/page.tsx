import Image from "next/image";
import Link from "next/link";
import { findService, Service } from "../../../lib/services";

type Props = {
  params: { id: string };
};

export default function ServiceDetailPage({ params }: Props) {
  const id = params.id;
  const svc: Service | null = findService(id);

  if (!svc) {
    return (
      <div className="container py-5">
        <div className="mb-4 d-flex align-items-center gap-3">
          <Link href="/services" className="btn btn-outline-secondary btn-sm">← Back to services</Link>
          <h1 className="h4 mb-0">Service not found</h1>
        </div>
        <p className="text-muted">We could not find a service matching <strong>{id}</strong>. Try the listing below or contact us for help.</p>
        <div className="mt-4">
          <Link href="/services" className="btn btn-primary">Back to services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="mb-4 d-flex gap-3 align-items-start">
        <Link href="/services" className="btn btn-outline-secondary btn-sm">← Back to services</Link>
        <div>
          <h1 className="h3 mb-1">{svc.title}</h1>
          <p className="text-muted mb-0">{svc.summary}</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="service-hero rounded overflow-hidden shadow-sm bg-light d-flex align-items-center justify-content-center">
            {/* Use width/height to make rendering predictable; fallback to a simple caption if the image is missing */}
            {svc.image ? (
              <Image src={svc.image} alt={svc.title} width={1200} height={800} className="service-image" priority />
            ) : (
              <div className="p-4 text-center text-muted">No image available</div>
            )}
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="mb-3 service-meta">
            <h2 className="h5">Overview</h2>
            <p className="text-muted">{svc.details || svc.summary}</p>
          </div>

          <div className="mb-3">
            <h3 className="h6">Key features</h3>
            <ul className="small text-muted">
              {svc.bullets && svc.bullets.length ? (
                svc.bullets.map((b, i) => <li key={i}>{b}</li>)
              ) : (
                <li>No features listed. Contact us for details.</li>
              )}
            </ul>
          </div>

          <div className="mt-auto d-flex gap-2">
            <Link href="/contact" className="btn btn-primary">Request proposal</Link>
            {svc.datasheet ? (
              <a href={svc.datasheet} className="btn btn-outline-secondary" target="_blank" rel="noreferrer">Download datasheet</a>
            ) : (
              <Link href="/contact" className="btn btn-outline-secondary">Ask for datasheet</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
