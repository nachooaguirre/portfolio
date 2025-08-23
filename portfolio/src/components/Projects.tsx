"use client";

import Image from "next/image";
import { useRef, useState, type SVGProps, type MouseEvent } from "react";
import { Project } from "@/domain/models/Project";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type ProjectsProps = { items: Project[] };

const styles = {
  container: "relative",
  scroller: "flex gap-6 flex-nowrap overflow-x-auto snap-x snap-mandatory px-1 select-none",
  item: "flex-shrink-0 min-w-[280px] sm:min-w-[340px] lg:min-w-[360px]",
  card: "flex flex-col transition-transform duration-200 snap-start",
  imageWrap: "relative w-full h-40",
  body: "flex flex-col gap-2 flex-1",
  name: "font-medium text-lg",
  desc: "text-sm text-foreground/80 flex-1",
  tags: "mt-1 flex flex-wrap gap-2",
  tag: "text-xs px-2 py-0.5 rounded-full border border-foreground/15",
  links: "mt-3 flex gap-3",
  link: "text-sm underline hover:no-underline",
  edgeOverlayRight: "pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-background/60 to-transparent",
  edgeOverlayLeft: "pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-background/60 to-transparent",
  navBtn: "absolute top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center shadow-md hover:opacity-90",
  navLeft: "left-2",
  navRight: "right-2",
} as const;

export default function Projects({ items }: ProjectsProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    dragStartX.current = e.clientX;
    dragScrollLeft.current = scrollerRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging || !scrollerRef.current) return;
    const delta = e.clientX - dragStartX.current;
    scrollerRef.current.scrollLeft = dragScrollLeft.current - delta;
  };
  const onMouseUp = () => setDragging(false);
  const onMouseLeave = () => setDragging(false);

  const scrollByCard = (dir: 1 | -1) => {
    const container = scrollerRef.current;
    if (!container) return;
    const firstCard = firstCardRef.current;
    const cardWidth = firstCard ? firstCard.offsetWidth : Math.floor(container.clientWidth / 3);
    container.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <Section title="Proyectos">
      <div className={styles.container}
        onMouseLeave={onMouseLeave}
      >
        <div
          ref={scrollerRef}
          className={styles.scroller}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          {items.map((p, idx) => (
            <div key={p.id} className={styles.item} ref={idx === 0 ? firstCardRef : undefined}>
              <Card className={styles.card}>
                {p.image ? (
                  <div className={styles.imageWrap}>
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                ) : null}
                <CardBody className={styles.body}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.description}</p>
                  {p.tags && p.tags.length ? (
                    <div className={styles.tags}>
                      {p.tags.map((t) => (
                        <span key={t} className={styles.tag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className={styles.links}>
                    {p.url ? (
                      <a className={styles.link} href={p.url} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    ) : null}
                    {p.repo ? (
                      <a className={styles.link} href={p.repo} target="_blank" rel="noreferrer">
                        Código
                      </a>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        <div className={styles.edgeOverlayLeft} />
        <div className={styles.edgeOverlayRight} />
        <button aria-label="Anterior" className={[styles.navBtn, styles.navLeft].join(" ")} onClick={() => scrollByCard(-1)}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button aria-label="Siguiente" className={[styles.navBtn, styles.navRight].join(" ")} onClick={() => scrollByCard(1)}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </Section>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}


