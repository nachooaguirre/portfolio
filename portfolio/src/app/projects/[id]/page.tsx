import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { container } from "@/application/container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ImageCarousel } from "@/components/ui/Carousel";
import { projectsStyles as styles } from "@/styles/styles";

type PageProps = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await container.getProjectById.execute(id);
  if (!project) {
    return notFound();
  }

  return (
    <div className="font-sans min-h-screen p-6 sm:p-10 max-w-[1000px] mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-sm text-foreground/60 hover:text-foreground transition-colors"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver al inicio
      </Link>
      <Section title={project.name}>
        <Card className="flex flex-col">
          {project.images && project.images.length ? (
            <div className={styles.imageWrapLg}>
              <ImageCarousel images={project.images} alt={project.name} aspectClass="!h-full" className="!h-full" />
            </div>
          ) : project.image ? (
            <div className={styles.imageWrapLg}>
              <Image src={project.image} alt={project.name} fill className="object-cover" />
            </div>
          ) : null}
          <CardBody className="flex flex-col gap-2">
            <p className={styles.desc}>{project.description}</p>
            {project.details && project.details.length ? (
              <ul className="mt-2 space-y-2">
                {project.details.map((d) => (
                  <li key={d} className="text-sm text-foreground/80">{d}</li>
                ))}
              </ul>
            ) : null}
            {project.tags && project.tags.length ? (
              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
            <div className={styles.links}>
              {project.url ? (
                <a className={styles.link} href={project.url} target="_blank" rel="noreferrer">
                  Sitio web
                </a>
              ) : null}
              {project.repo ? (
                <a className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
                  Código
                </a>
              ) : null}
            </div>
          </CardBody>
        </Card>
      </Section>
    </div>
  );
}


