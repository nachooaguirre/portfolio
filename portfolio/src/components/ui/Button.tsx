import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { buttonStyles as styles } from "@/styles/styles";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "ghost" | "outline" | "solid";
  }
>;

export default function Button({ variant = "outline", className, children, ...rest }: ButtonProps) {
  const variantClass = styles[variant];
  return (
    <button className={[styles.base, variantClass, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}


