import { PropsWithChildren } from "react";
import { cardStyles as styles } from "@/styles/styles";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, children }: CardProps) {
  return <article className={[styles.card, className].filter(Boolean).join(" ")}>{children}</article>;
}

export function CardBody({ className, children }: CardProps) {
  return <div className={[styles.body, className].filter(Boolean).join(" ")}>{children}</div>;
}


