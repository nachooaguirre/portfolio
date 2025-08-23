import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

const styles = {
  section: "w-full",
  title: "text-xl sm:text-2xl font-semibold mb-4",
} as const;

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}> 
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </section>
  );
}


