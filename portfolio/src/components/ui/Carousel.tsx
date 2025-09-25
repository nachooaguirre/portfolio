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

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? validImages.length - 1 : i - 1));
  }, [validImages.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === validImages.length - 1 ? 0 : i + 1));
  }, [validImages.length]);

  if (!validImages.length) return null;

  useEffect(() => {
    if (validImages.length <= 1) return;
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i === validImages.length - 1 ? 0 : i + 1));
      }
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [validImages.length]);

  return (
    <div
      className={["relative w-full overflow-hidden", aspectClass, className].filter(Boolean).join(" ")}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    > 
      <button type="button" aria-label="Next image" onClick={next} className="absolute inset-0 z-0">
        <span className="sr-only">Next</span>
      </button>
      <div className="absolute inset-0">
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
    </div>
  );
}


