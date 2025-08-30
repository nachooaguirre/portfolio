"use client";

import Image from "next/image";
import { heroStyles as styles } from "@/styles/styles";

type HeroProps = {
  name: string;
  pitch: string;
  avatarSrc?: string;
  technologies?: string[];
  technologyGroups?: Record<string, string[]>;
};

export default function Hero({
  name,
  pitch,
  avatarSrc = "/next.svg",
  technologies = [],
  technologyGroups = {},
}: HeroProps) {
  const logoMap: Record<string, string> = {
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
    NestJS: "https://cdn.simpleicons.org/nestjs/E0234E",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    "Deploy en VPS": "/window.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  };

  const renderBadge = (label: string, key?: string) => (
    <span key={key ?? label} className={styles.techBadge}>
      {logoMap[label] ? (
        <span className={styles.techIconBadgeWrap}>
          <img src={logoMap[label]} alt={`${label} logo`} className={styles.techIcon} />
        </span>
      ) : null}
      {label}
    </span>
  );

  const renderGridItem = (label: string) => (
    <div key={label} className={styles.techItem}>
      {logoMap[label] ? (
        <span className={styles.techIconWrap}>
          <img src={logoMap[label]} alt={`${label} logo`} className={styles.techIconLg} />
        </span>
      ) : null}
      <span className={styles.techLabel}>{label}</span>
    </div>
  );
  return (
    <section className={styles.section}>
      <div className={styles.avatarWrapper}>
        <Image src={avatarSrc} alt={`${name} avatar`} fill className="object-cover" />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.pitch}>{pitch}</p>
        {(() => {
          const hasGroups = Object.values(technologyGroups || {}).some(
            (arr) => Array.isArray(arr) && arr.length > 0,
          );

          if (hasGroups) {
            const preferredOrder = ["Frontend", "Backend & DB", "Tools", "Learnings"];
            const extraGroups = Object.keys(technologyGroups).filter(
              (k) => !preferredOrder.includes(k),
            );
            const orderedKeys = [...preferredOrder, ...extraGroups];

            return (
              <div className={styles.techsWrap}>
                <p className={styles.techsTitle}>Tecnologías</p>
                <div className={styles.groupsGrid}>
                {orderedKeys.map((groupKey) => {
                  const items = technologyGroups[groupKey] || [];
                  if (!items.length) return null;
                  return (
                    <div
                      key={groupKey}
                      className={[styles.groupCard, groupKey === "Frontend" ? styles.groupCardPadMore : ""].filter(Boolean).join(" ")}
                    >
                      <p
                        className={styles.groupTitle}
                        style={{
                          color:
                            groupKey === "Frontend"
                              ? "#60A5FA"
                              : groupKey === "Backend & DB"
                              ? "#C084FC"
                              : groupKey === "Tools"
                              ? "#93C5FD"
                              : groupKey === "Learnings"
                              ? "#F59E0B"
                              : undefined,
                        }}
                      >
                        {groupKey}
                      </p>
                      <div className={styles.techGrid}>
                        {items.map((t) => renderGridItem(t))}
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            );
          }

          if (technologies.length) {
            return (
              <div className={styles.techsWrap}>
                <p className={styles.techsTitle}>Tecnologías</p>
                <div className={styles.techsList}>
                  {technologies.map((t) => renderBadge(t))}
                </div>
              </div>
            );
          }

          return null;
        })()}
      </div>
    </section>
  );
}


