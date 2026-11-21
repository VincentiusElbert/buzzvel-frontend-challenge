import type { SVGProps } from "react";

/**
 * Icons exported from the Figma file and converted to components.
 * They use `currentColor`, so colour comes from the surrounding text colour,
 * and they are decorative by default (`aria-hidden`).
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false, fill: "none" } as const;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M4 10H16M11 15L16 10L11 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} width="14" height="14" viewBox="0 0 14 14" {...props}>
      <path
        d="M7 1L8.54 4.12L12 4.76L9.5 7.19L10.09 10.63L7 8.77L3.91 10.63L4.5 7.19L2 4.76L5.46 4.12L7 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="22" viewBox="0 0 24 22" {...props}>
      <path
        d="M23.7616 4.38434C23.7616 5.42823 23.4223 7.43772 22.7438 10.4128C22.0652 13.3879 21.3084 17.2503 20.4733 22H18.0463C17.446 18.1376 16.7675 14.4579 16.0107 10.9609C15.28 7.46382 14.9146 5.27165 14.9146 4.38434C14.9146 3.18387 15.28 2.15302 16.0107 1.29181C16.7414 0.430605 17.8505 0 19.3381 0C20.7734 0 21.8695 0.430605 22.6263 1.29181C23.3832 2.15302 23.7616 3.18387 23.7616 4.38434ZM8.80783 4.38434C8.80783 5.42823 8.46856 7.43772 7.79004 10.4128C7.11151 13.3879 6.35469 17.2503 5.51957 22H3.13167C2.42705 17.5635 1.72242 13.7794 1.01779 10.6477C0.339265 7.48992 0 5.40214 0 4.38434C0 3.18387 0.365362 2.15302 1.09609 1.29181C1.82681 0.430605 2.93594 0 4.42349 0C5.83274 0 6.91578 0.430605 7.6726 1.29181C8.42942 2.15302 8.80783 3.18387 8.80783 4.38434Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  const dot = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5C16.7239 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.7239 12.5 17 12.5Z" {...dot} />
      <path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" {...dot} />
      <path d="M7 12.5C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5Z" {...dot} />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
        {...dot}
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M10 4.99962V10L13.3336 11.6668M18.334 10C18.334 14.6028 14.6028 18.334 10 18.334C5.39727 18.334 1.66602 14.6028 1.66602 10C1.66602 5.39727 5.39727 1.66602 10 1.66602C14.6028 1.66602 18.334 5.39727 18.334 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.25l2.25 2.25 4.75-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Decorative line icons used in the final call-to-action (desktop only) ---- */

const deco = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** "Bold" text icon; already rotated 15° in the export, as in the design. */
export function DecoBoldIcon(props: IconProps) {
  return (
    <svg {...base} width="102" height="102" viewBox="0 0 102 102" {...props}>
      <path
        d="M51.2994 49.8827C51.2994 49.8827 64.7069 53.4752 61.4138 65.7652C58.1206 78.0555 44.7131 74.463 44.7131 74.463L33.3167 71.4093C32.206 71.1117 31.5468 69.9702 31.8445 68.8593L37.8919 46.2902M51.2994 49.8827L37.8919 46.2902L51.2994 49.8827ZM51.2994 49.8827C51.2994 49.8827 62.4722 52.8764 65.466 41.7034C68.4597 30.5306 57.2869 27.5368 57.2869 27.5368L45.8906 24.4831C44.7799 24.1855 43.6382 24.8447 43.3406 25.9554L37.8919 46.2902L51.2994 49.8827Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.513"
      />
    </svg>
  );
}

export function DecoCodepenIcon(props: IconProps) {
  return (
    <svg {...base} width="80" height="80" viewBox="0 0 80 80" {...props}>
      <path d="M70 30V50M10 50V30M40 70V50M40 10V30" {...deco} />
      <path d="M40 50L10 30L40 10L70 30L40 50Z" {...deco} />
      <path d="M40 70L10 50L40 30L70 50L40 70Z" {...deco} />
    </svg>
  );
}

export function DecoChatIcon(props: IconProps) {
  return (
    <svg {...base} width="32" height="32" viewBox="0 0 32 32" {...props}>
      <path
        d="M16 29.3332C23.3637 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3637 2.6665 16 2.6665C8.63616 2.6665 2.66663 8.63604 2.66663 15.9998C2.66663 18.4284 3.31592 20.7053 4.45039 22.6665L3.33329 28.6665L9.33329 27.5494C11.2945 28.6838 13.5714 29.3332 16 29.3332Z"
        fill="currentColor"
        {...deco}
      />
    </svg>
  );
}

export function DecoDropIcon(props: IconProps) {
  return (
    <svg {...base} width="62" height="62" viewBox="0 0 62 62" {...props}>
      <path
        d="M38.7501 40.8169C38.7501 36.2513 31.0001 28.4169 31.0001 28.4169C31.0001 28.4169 23.2501 36.2513 23.2501 40.8169C23.2501 45.3824 26.7198 49.0835 31.0001 49.0835C35.2804 49.0835 38.7501 45.3824 38.7501 40.8169Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.515"
      />
      <path
        d="M31 10.333v10.334M9.042 19.375l7.75 7.75M45.208 27.125l7.75-7.75M5.167 43.917H15.5M46.5 43.917h10.333"
        {...deco}
        strokeWidth="1.515"
      />
    </svg>
  );
}

export function DecoCashIcon(props: IconProps) {
  return (
    <svg {...base} width="48" height="48" viewBox="0 0 48 48" {...props}>
      <path
        d="M20 38V10M28 10H42.8C43.4628 10 44 10.5373 44 11.2V36.8C44 37.4628 43.4628 38 42.8 38H28V10ZM28 10V38V10ZM28 10H20H28ZM28 38H20H28ZM20 38H5.2C4.53726 38 4 37.4628 4 36.8V11.2C4 10.5373 4.53726 10 5.2 10H20V38Z"
        {...deco}
      />
      <path
        d="M14 19.6976C14 18.8694 13.1736 18.3007 12.5012 18.7842C10.9865 19.8733 10 21.651 10 23.659C10 25.667 10.9865 27.4448 12.5012 28.5338C13.1736 29.0172 14 28.4488 14 27.6206C14 25.1126 14 22.7538 14 19.6976ZM34 19.6976C34 18.8694 34.8264 18.3007 35.4988 18.7842C37.0136 19.8733 38 21.651 38 23.659C38 25.667 37.0136 27.4448 35.4988 28.5338C34.8264 29.0172 34 28.4488 34 27.6206C34 25.1126 34 22.7538 34 19.6976Z"
        fill="currentColor"
      />
    </svg>
  );
}
