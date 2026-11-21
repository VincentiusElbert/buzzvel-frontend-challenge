import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { anchors, featuredCourse } from "@/data/content";

export function FeaturedCourse() {
  const { title, description, instructor, meta, image } = featuredCourse;

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-title"
      className="surface-dark bg-primary py-[60px] text-white lg:py-[100px]"
    >
      <Container className="grid gap-[38px] lg:grid-cols-2 lg:items-center lg:gap-[60px]">
        <div className="relative">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl bg-primary-soft/20 lg:aspect-[538/408]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 530px, (min-width: 1024px) 42vw, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
          <p className="absolute -top-3 -left-3 rounded-md bg-sun px-3 py-1.5 text-xs leading-4 font-semibold tracking-[0.12em] text-ink uppercase">
            Featured course
          </p>
        </div>

        <div>
          <SectionHeading id="featured-title" eyebrow="Most popular this month" title={title} tone="inverse" />
          <p className="mt-5 text-sm leading-6 lg:text-base lg:leading-7">{description}</p>
          <p className="mt-6 text-sm leading-6 lg:text-base lg:leading-7">
            with {instructor.name} · {instructor.role}
          </p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Course details">
            {meta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line px-[14px] py-1.5 text-sm leading-6 text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={anchors.contact} variant="accent" className="w-full sm:w-auto">
              View course
            </ButtonLink>
            <Link
              href={anchors.categories}
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-[14px] text-sm leading-6 font-bold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Browse all courses
              <ArrowRightIcon className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
