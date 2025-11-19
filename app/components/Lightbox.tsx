"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: { src: string; alt?: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="lightbox-content" role="document">
        <button className="lightbox-close btn btn-light" onClick={onClose} aria-label="Close">✕</button>
        <div className="lightbox-image-wrapper">
          <Image src={img.src} alt={img.alt || ""} width={1200} height={800} className="lightbox-image" />
        </div>
        <button className="lightbox-nav prev btn btn-light" onClick={onPrev} aria-label="Previous">‹</button>
        <button className="lightbox-nav next btn btn-light" onClick={onNext} aria-label="Next">›</button>
      </div>
    </div>
  );
}
