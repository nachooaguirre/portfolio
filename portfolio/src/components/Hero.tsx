"use client";

import Image from "next/image";

type HeroProps = {
  name: string;
  pitch: string;
  avatarSrc?: string;
};

const styles = {
  section: "w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-10",
  avatarWrapper: "relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden ring-2 ring-foreground/10",
  textWrapper: "text-center sm:text-left max-w-2xl",
  title: "text-2xl sm:text-3xl font-semibold tracking-tight",
  pitch: "mt-3 text-base sm:text-lg text-foreground/80",
} as const;

export default function Hero({ name, pitch, avatarSrc = "/next.svg" }: HeroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.avatarWrapper}>
        <Image src={avatarSrc} alt={`${name} avatar`} fill className="object-cover" />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.pitch}>{pitch}</p>
      </div>
    </section>
  );
}


