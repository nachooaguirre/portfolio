import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "ghost" | "outline" | "solid";
  }
>;

const styles = {
  base: "inline-flex items-center justify-center gap-2 text-sm rounded-full transition-colors",
  ghost: "underline hover:no-underline px-0 py-0 text-foreground",
  outline: "border border-foreground/25 px-3 py-1 hover:bg-foreground/10",
  solid: "bg-foreground text-background px-3 py-1 hover:opacity-90",
} as const;

export default function Button({ variant = "outline", className, children, ...rest }: ButtonProps) {
  const variantClass = styles[variant];
  return (
    <button className={[styles.base, variantClass, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}


