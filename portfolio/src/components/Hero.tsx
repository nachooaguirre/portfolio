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
        <div className={styles.actions}>
          <span className={styles.techBadge}>
            <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
            Santa Fe, Argentina
          </span>
          <a className={styles.techBadge} href="mailto:ignacioaguirre.site@gmail.com">
            <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.1 5.1c.3.22.7.22 1 0L19.6 6H4.4Z"/></svg>
            Email
          </a>
          <a className={styles.techBadge} href="https://www.linkedin.com/in/ignacioaguirresite/" target="_blank" rel="noreferrer">
            <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-3.8V8z"/></svg>
            LinkedIn
          </a>
          <a className={styles.techBadge} href="https://github.com/nachooaguirre" target="_blank" rel="noreferrer">
            <svg className={styles.actionIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.51-.35.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd"/></svg>
            GitHub
          </a>
        </div>
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


