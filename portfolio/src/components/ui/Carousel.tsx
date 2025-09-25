"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CarouselProps = {
  images: string[];
  alt: string;
  aspectClass?: string; // e.g. "aspect-video"
  className?: string;
};

export function ImageCarousel({ images, alt, aspectClass = "aspect-video", className }: CarouselProps) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? validImages.length - 1 : i - 1));
  }, [validImages.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === validImages.length - 1 ? 0 : i + 1));
  }, [validImages.length]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i === validImages.length - 1 ? 0 : i + 1));
      }
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [validImages.length]);

  // Pause autoplay while lightbox is open and handle Escape to close
  useEffect(() => {
    hoverRef.current = lightboxOpen ? true : hoverRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, next, prev]);

  if (!validImages.length) return null;

  return (
    <div
      className={["relative w-full overflow-hidden", aspectClass, className].filter(Boolean).join(" ")}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    > 
      <div className="absolute inset-0 cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <Image key={validImages[index]} src={validImages[index]} alt={alt} fill className="object-cover" />
      </div>
      {validImages.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 border border-foreground/15 px-2 py-1 text-sm"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 border border-foreground/15 px-2 py-1 text-sm"
          >
            ›
          </button>
          <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1 z-10">
            {validImages.length > 8 ? (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-background/70 border border-foreground/15">{index + 1} / {validImages.length}</span>
            ) : (
              validImages.map((_, i) => (
                <span
                  key={i}
                  className={["h-1.5 w-1.5 rounded-full border border-foreground/30", i === index ? "bg-foreground/80" : "bg-background/60"].join(" ")}
                />
              ))
            )}
          </div>
        </>
      ) : null}

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => {
            setLightboxOpen(false);
            hoverRef.current = false;
          }}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image src={validImages[index]} alt={alt} fill className="object-contain" />
            {validImages.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 border border-foreground/15 px-2 py-1 text-sm"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 border border-foreground/15 px-2 py-1 text-sm"
                >
                  ›
                </button>
              </>
            ) : null}
            <button
              type="button"
              aria-label="Close"
              onClick={() => {
                setLightboxOpen(false);
                hoverRef.current = false;
              }}
              className="absolute top-2 right-2 z-10 rounded-full bg-background/70 border border-foreground/15 px-2 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}


