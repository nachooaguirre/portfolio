"use client";

import Image from "next/image";
import { useState, type SVGProps } from "react";
import { Project } from "@/domain/models/Project";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";

type ProjectsProps = { items: Project[] };

const styles = {
  container: "relative",
  scroller: "overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]",
  scrollerInner: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-full",
  card: "flex flex-col",
  imageWrap: "relative w-full h-40",
  body: "flex flex-col gap-2 flex-1",
  name: "font-medium text-lg",
  desc: "text-sm text-foreground/80 flex-1",
  tags: "mt-1 flex flex-wrap gap-2",
  tag: "text-xs px-2 py-0.5 rounded-full border border-foreground/15",
  links: "mt-3 flex gap-3",
  link: "text-sm underline hover:no-underline",
  actions: "flex justify-center mt-6",
  btn: "text-sm rounded-full border border-foreground/15 px-3 py-1 hover:bg-foreground/5",
} as const;

export default function Projects({ items }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 3);

  return (
    <Section title="Proyectos">
      <div className={styles.container}>
        <div className={styles.scroller} data-hide-scrollbar="true">
          <div className={styles.scrollerInner}>
          {visible.map((p) => (
            <div key={p.id}>
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


