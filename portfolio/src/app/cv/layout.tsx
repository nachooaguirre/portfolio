import type { ReactNode } from "react";

/** Wrapper para que globals.css pueda desactivar el fondo decorativo del portfolio solo en /cv */
export default function CVLayout({ children }: { children: ReactNode }) {
  return <div data-cv-root>{children}</div>;
}
