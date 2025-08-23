import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

const styles = {
  card: "border border-foreground/10 rounded-md overflow-hidden bg-background",
  body: "p-4",
} as const;

export function Card({ className, children }: CardProps) {
  return <article className={[styles.card, className].filter(Boolean).join(" ")}>{children}</article>;
}

export function CardBody({ className, children }: CardProps) {
  return <div className={[styles.body, className].filter(Boolean).join(" ")}>{children}</div>;
}


