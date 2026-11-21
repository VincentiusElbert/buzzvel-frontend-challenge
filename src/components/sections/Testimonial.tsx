import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/icons";
import { stats, testimonial, type Stat } from "@/data/content";

export function Testimonial() {
  return (
    <section aria-label="What learners say" className="bg-white py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between">
        <figure className="max-w-[600px]">
          <QuoteIcon className="text-primary" />
          <blockquote className="mt-4 font-display text-xl leading-8 font-semibold text-ink lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.025em]">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-primary-soft object-cover"
            />
            <div>
              <p className="text-base leading-[26px] font-bold text-ink lg:leading-7">{testimonial.author}</p>
              <p className="text-sm leading-6 text-body">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <StatList stats={stats} />
      </Container>
    </section>
  );
}

type StatListProps = { stats: Stat[] };

export function StatList({ stats }: StatListProps) {
  return (
    <dl className="grid grid-cols-3 lg:w-[401px] lg:shrink-0 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-line lg:pl-12">
      {stats.map((stat) => (
        // dt must precede dd in the markup; flex-col-reverse shows the number first.
        <div key={stat.label} className="flex flex-col-reverse justify-end">
          <dt className="mt-1 pr-2 text-sm leading-6 text-muted lg:mt-px">{stat.label}</dt>
          <dd className="font-display text-[40px] leading-[44px] font-extrabold tracking-[-0.025em] text-primary lg:text-[64px] lg:leading-[70px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
