"use client";

import Image from "next/image";

type HeroProps = {
  name: string;
  pitch: string;
  avatarSrc?: string;
  technologies?: string[];
};

const styles = {
  section: "w-full flex flex-col items-center lg:items-start gap-6",
  avatarWrapper: "relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden ring-2 ring-foreground/10 mx-auto lg:mx-0",
  textWrapper: "text-center lg:text-left max-w-2xl",
  title: "text-2xl sm:text-3xl font-semibold tracking-tight",
  pitch: "mt-3 text-base sm:text-lg text-foreground/80",
  techsWrap: "mt-6 w-full",
  techsTitle: "text-sm font-medium text-foreground/70 mb-2",
  techsList: "flex flex-wrap gap-2",
  techBadge: "text-xs px-2 py-0.5 rounded-full border border-foreground/15",
} as const;

export default function Hero({ name, pitch, avatarSrc = "/next.svg", technologies = [] }: HeroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.avatarWrapper}>
        <Image src={avatarSrc} alt={`${name} avatar`} fill className="object-cover" />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.pitch}>{pitch}</p>
        {technologies.length ? (
          <div className={styles.techsWrap}>
            <p className={styles.techsTitle}>Tecnologías</p>
            <div className={styles.techsList}>
              {technologies.map((t) => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


