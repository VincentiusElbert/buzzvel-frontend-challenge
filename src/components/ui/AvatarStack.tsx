import Image from "next/image";
import type { Avatar } from "@/data/content";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: Avatar[];
  /** Diameter in px: 32 in the hero, 40 in the final CTA. */
  size: 32 | 40;
  /** Ring colour that separates the overlapping faces. */
  ringClassName: string;
  className?: string;
};

/** Overlapping circular avatars (8px overlap, 2px ring), as in the design. */
export function AvatarStack({ avatars, size, ringClassName, className }: AvatarStackProps) {
  return (
    <ul className={cn("flex", className)} aria-hidden>
      {avatars.map((avatar, index) => (
        <li key={avatar.src} className={cn(index > 0 && "-ml-2")}>
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size}
            height={size}
            className={cn("rounded-full border-2 bg-primary-soft object-cover", ringClassName)}
            style={{ width: size, height: size }}
          />
        </li>
      ))}
    </ul>
  );
}
