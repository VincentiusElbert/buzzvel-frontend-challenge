"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { anchors, mainNav, type NavLink } from "@/data/content";
import { cn } from "@/lib/cn";

type HeaderProps = { links?: NavLink[] };

const navLinkClass =
  "rounded-md text-sm leading-6 text-body transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function Header({ links = mainNav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape (returning focus to the toggle) and when the viewport
  // grows to the desktop layout, where the menu button no longer exists.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 md:px-10 lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr] xl:px-20">
        <Link
          href="/"
          className="justify-self-start rounded-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Logo />
          <span className="sr-only">Luma — home</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <Link href={anchors.contact} className={cn(navLinkClass, "px-4 py-2.5")}>
            Log in
          </Link>
          <ButtonLink href={anchors.featured} size="sm">
            Start learning
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-1.5 inline-flex size-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-primary lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile menu — not shown in the design, styled to match the header. */}
      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-cream shadow-card motion-safe:animate-menu-in lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pt-2 pb-6 md:px-10">
          <ul className="divide-y divide-line">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block py-3.5 text-base leading-6 text-ink transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3">
            <ButtonLink href={anchors.contact} variant="secondary" fullWidth onClick={close}>
              Log in
            </ButtonLink>
            <ButtonLink href={anchors.featured} fullWidth onClick={close}>
              Start learning
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
