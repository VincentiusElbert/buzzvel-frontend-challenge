import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, type Category } from "@/data/content";

export function Categories() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="bg-white py-[60px] lg:py-[100px]">
      <Container>
        <SectionHeading
          id="categories-title"
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
          className="max-w-[560px]"
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li key={category.number}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

type CategoryCardProps = { category: Category };

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,translate] duration-300 hover:border-primary/40 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-1 lg:min-h-[265px] lg:p-7"
    >
      <span className="mt-0.5 self-start rounded-md bg-primary-soft px-2 py-1 text-xs leading-4 font-semibold tracking-[0.12em] text-primary">
        {category.number}
      </span>
      <h3 className="mt-[21px] font-display text-xl leading-7 font-bold text-ink lg:leading-8">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
      <span className="mt-auto flex items-center gap-2 pt-5 text-sm leading-6 font-bold text-ink">
        Explore
        <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        <span className="sr-only"> {category.title} courses</span>
      </span>
    </Link>
  );
}
