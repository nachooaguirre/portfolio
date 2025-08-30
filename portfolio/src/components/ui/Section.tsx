import { PropsWithChildren } from "react";
import { sectionStyles as styles } from "@/styles/styles";

type SectionProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}> 
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </section>
  );
}


