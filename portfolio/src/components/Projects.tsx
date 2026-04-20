"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "@/domain/models/Project";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ImageCarousel } from "@/components/ui/Carousel";
import { projectsStyles as styles } from "@/styles/styles";

type ProjectsProps = { items: Project[] };

export default function Projects({ items }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 3);

  return (
    <Section title="Proyectos">
      <div className={styles.container}>
        <div className={styles.scroller} data-hide-scrollbar="true">
          <div className={styles.scrollerInner}>
          {visible.map((p) => (
            <div key={p.id} className="h-full">
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
                  <div className={styles.header}>
                    <h3 className={styles.name}>{p.name}</h3>
                  </div>
                  <div className={styles.links}>
                    {p.url ? (
                      <a className={styles.link} href={p.url} target="_blank" rel="noreferrer">
                        Sitio web
                      </a>
                    ) : null}
                    {p.repo ? (
                      <a className={styles.link} href={p.repo} target="_blank" rel="noreferrer">
                        Código
                      </a>
                    ) : null}
                    <Link className={styles.link} href={`/projects/${p.id}`}>
                      Ver detalle
                    </Link>
                  </div>
                  {p.tags && p.tags.length ? (
                    <div className={styles.tags}>
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                      {p.tags.length > 4 && (
                        <span className={styles.tagMore}>+{p.tags.length - 4}</span>
                      )}
                    </div>
                  ) : null}
                  <p className={styles.desc}>{p.description}</p>
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


