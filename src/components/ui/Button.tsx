import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type ButtonSize = "md" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary: "border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover",
  secondary: "border-line bg-white text-ink hover:border-ink/30 hover:bg-cream",
  accent: "border-sun bg-sun text-ink hover:border-sun-hover hover:bg-sun-hover",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-[52px] px-7 py-[13px]",
  sm: "min-h-11 px-5 py-2.5",
};

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretch to the parent's width (used on mobile in the design). */
  fullWidth?: boolean;
};

export function buttonClasses({ variant = "primary", size = "md", fullWidth }: StyleProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border text-sm leading-6 font-bold whitespace-nowrap",
    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:cursor-not-allowed disabled:opacity-70",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
  );
}

type ButtonLinkProps = StyleProps & ComponentPropsWithoutRef<typeof Link>;

/** A link styled as a button — every CTA in the design navigates somewhere. */
export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonClasses({ variant, size, fullWidth }), className)} {...props} />;
}

type ButtonProps = StyleProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, size, fullWidth, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonClasses({ variant, size, fullWidth }), className)} {...props} />;
}
