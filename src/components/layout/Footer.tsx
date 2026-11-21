import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, type FooterColumn } from "@/data/content";

type FooterProps = { columns?: FooterColumn[] };

export function Footer({ columns = footerColumns }: FooterProps) {
  const year = 2026; // Fixed to match the design; avoids a dynamic Date during prerender.

  return (
    <footer className="surface-dark bg-ink pt-[60px] pb-5 text-footer-text lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8 lg:grid-cols-[1fr_repeat(3,208px)]">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex w-fit rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Logo />
              <span className="sr-only">Luma — back to top</span>
            </Link>
            <p className="mt-3 text-sm leading-6 lg:max-w-[240px]">Practical learning for curious people.</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs leading-4 font-semibold tracking-[0.12em] text-mist uppercase">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block rounded-sm align-top text-sm leading-6 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-body pt-6 lg:mt-16">
          <p className="text-center text-[13px] leading-[19.5px] text-white lg:text-left lg:text-mist">
            © {year} Luma Learning
          </p>
        </div>
      </Container>
    </footer>
  );
}
