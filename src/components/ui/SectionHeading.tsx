import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "inverse";

type EyebrowProps = { children: ReactNode; tone?: Tone; className?: string };

/** Small uppercase label above section titles ("Desktop/Overline" in Figma). */
export function Eyebrow({ children, tone = "default", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs leading-4 font-semibold tracking-[0.12em] uppercase",
        tone === "inverse" ? "text-white" : "text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
  /** Spacing between eyebrow and title: 16px in most sections, 8px in "The people". */
  gap?: "sm" | "md";
};

/**
 * Eyebrow + H2 (+ optional lead paragraph). H2 is 48/56 on desktop and 32/36 on mobile,
 * matching the "Desktop/H2" and "Mobile/H2" text styles.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className,
  gap = "md",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          "font-display text-[32px] leading-9 font-extrabold tracking-[-0.025em] lg:text-5xl lg:leading-14",
          gap === "md" ? "mt-4" : "mt-2",
          tone === "inverse" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-[26px] text-body lg:text-lg lg:leading-7">{description}</p>
      )}
    </div>
  );
}
