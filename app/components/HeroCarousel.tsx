"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; caption?: string; blurDataURL?: string };

// Selected carousel images with matching 4:3 aspect ratio for consistent slides
const SLIDES: Slide[] = [
  {
    src: "/Boiler4.jpg",
    alt: "Boiler maintenance",
    caption: "Maintenance & servicing",
  blurDataURL: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 16 12'><rect width='16' height='12' fill='%237f9f8a'/></svg>",
  },
  {
    src: "/Boilers1.jpg",
    alt: "Boiler plant overview",
    caption: "Industrial boiler water treatment",
  blurDataURL: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 16 12'><rect width='16' height='12' fill='%236b9276'/></svg>",
  },
  {
    src: "/Tank4.jpg",
    alt: "Tank systems",
    caption: "Process tank cleaning & treatment",
  blurDataURL: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 16 12'><rect width='16' height='12' fill='%236f9a83'/></svg>",
  },
];

export default function HeroCarousel({ interval = 5000, autoplay = true }: { interval?: number; autoplay?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Respect prefers-reduced-motion: if the user prefers reduced motion, disable autoplay
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (paused) return;
    if (!autoplay) return;
    if (prefersReducedMotion) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, interval, autoplay, prefersReducedMotion]);

  function go(i: number) {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }

  function prev() {
    go(index - 1);
  }
  function next() {
    go(index + 1);
  }

  // Simple touch support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let moved = false;
    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
      moved = false;
      setPaused(true);
    }
    function onTouchMove(e: TouchEvent) {
      const dx = e.touches[0].clientX - startX;
      if (Math.abs(dx) > 20) moved = true;
    }
    function onTouchEnd(e: TouchEvent) {
      setPaused(false);
      if (!moved) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx < -40) {
        setIndex((i) => (i + 1) % SLIDES.length);
      } else if (dx > 40) {
        setIndex((i) => ((i - 1 + SLIDES.length) % SLIDES.length));
      }
    }
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart as EventListener);
      el.removeEventListener("touchmove", onTouchMove as EventListener);
      el.removeEventListener("touchend", onTouchEnd as EventListener);
    };
  }, [index]);

  // keep aria-hidden attributes in sync via DOM to avoid JSX expression values
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll<HTMLElement>('.hero-slide'));
    slides.forEach((s, i) => s.setAttribute('aria-hidden', i === index ? 'false' : 'true'));
  }, [index]);

  return (
    <div
      className="hero-carousel position-relative overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`hero-slides d-flex slide-${index}`}>
        {SLIDES.map((s, i) => (
          <div className="hero-slide flex-shrink-0" key={s.src}>
            {s.src === '/Boilers1.jpg' ? (
              // Use Next/Image unoptimized for Boilers1.jpg so we get an <Image> component
              // (satisfies the linter) but bypass the optimizer and load directly from /public.
              <Image
                src={s.src}
                alt={s.alt}
                width={1200}
                height={700}
                sizes="(max-width: 768px) 90vw, 50vw"
                priority={i === 0}
                unoptimized
                className="d-block w-100"
                placeholder={s.blurDataURL ? 'blur' : 'empty'}
                {...(s.blurDataURL ? { blurDataURL: s.blurDataURL } : {})}
                onError={(ev) => {
                  try {
                    const img = ev.currentTarget as HTMLImageElement;
                    if (img && img.src && !img.src.endsWith('/Boilers1.jpg')) img.src = '/Boilers1.jpg';
                  } catch {
                    /* ignore */
                  }
                }}
              />
            ) : (
              <Image
                src={s.src}
                alt={s.alt}
                width={1200}
                height={700}
                sizes="(max-width: 768px) 90vw, 50vw"
                priority={i === 0}
                className="d-block w-100"
                placeholder={s.blurDataURL ? 'blur' : 'empty'}
                {...(s.blurDataURL ? { blurDataURL: s.blurDataURL } : {})}
              />
            )}
            {s.caption && (
              <div className="carousel-caption">
                <div className="badge brand-badge">{s.caption}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      

      <button className="carousel-control prev btn btn-light" aria-label="Previous slide" onClick={prev}>
        ‹
      </button>
      <button className="carousel-control next btn btn-light" aria-label="Next slide" onClick={next}>
        ›
      </button>

      <div className="carousel-indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`indicator btn ${i === index ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
