"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type SVGProps } from "react";
import { Project } from "@/domain/models/Project";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ImageCarousel } from "@/components/ui/Carousel";
import { projectsStyles as styles } from "@/styles/styles";

type ProjectsProps = { items: Project[] };

export default function Projects({ items }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const visible = showAll ? items : items.slice(0, 3);

  return (
    <Section title="Proyectos">
      <div className={styles.container}>
        <div className={styles.scroller} data-hide-scrollbar="true">
          <div className={styles.scrollerInner}>
          {visible.map((p) => {
            const isOpen = expandedId === p.id;
            return (
            <div key={p.id}>
              <Card className={styles.card}>
                {p.images && p.images.length ? (
                  <div className={styles.imageWrap}>
                    <ImageCarousel images={p.images} alt={p.name} aspectClass="!h-full" className="!h-full" />
                  </div>
                ) : p.image ? (
                  <div className={styles.imageWrap}>
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                ) : null}
                <CardBody className={styles.body}>
                  <div
                    className={[styles.header, styles.clickable].join(" ")}
                    onClick={() => setExpandedId((prev) => (prev === p.id ? null : p.id))}
                  >
                    <h3 className={styles.name}>{p.name}</h3>
                    <ChevronRightIcon className={[styles.chevron, isOpen ? styles.chevronOpen : ""].join(" ")} />
                  </div>
                  <p className={styles.desc}>{p.description}</p>
                  {isOpen && p.details && p.details.length ? (
                    <ul className={styles.details}>
                      {p.details.map((d, i) => (
                        <li key={i} className="text-sm text-foreground/80">{d}</li>
                      ))}
                    </ul>
                  ) : null}
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
                  {isOpen ? (
                    <div className={styles.details}>
                      <Link className={styles.link} href={`/projects/${p.id}`}>
                        Ver detalle del proyecto
                      </Link>
                    </div>
                  ) : null}
                </CardBody>
              </Card>
            </div>
          );})}
          </div>
        </div>
        {items.length > 3 ? (
          <div className={styles.actions}>
            <button type="button" className={styles.btn} onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Ver menos" : "Ver más"}
            </button>
          </div>
        ) : null}
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


