import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StarIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { anchors, learnerAvatars } from "@/data/content";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-10 lg:grid lg:grid-cols-[560fr_500fr] lg:items-start lg:gap-[60px]">
        <div>
          <Eyebrow>Learn at your own pace</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[40px] leading-[44px] font-extrabold tracking-[-0.025em] text-ink lg:text-[52px] lg:leading-[58px] xl:text-[64px] xl:leading-[70px]"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="mt-6 max-w-[480px] text-base leading-[26px] text-body lg:text-lg lg:leading-7">
            Practical courses taught by people who do the work every day. Learn design, technology, business and
            more — one focused lesson at a time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={anchors.categories} className="w-full sm:w-auto">
              Explore courses
            </ButtonLink>
            <ButtonLink href={anchors.howItWorks} variant="secondary" className="w-full sm:w-auto">
              See how it works
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarStack avatars={learnerAvatars.slice(0, 3)} size={32} ringClassName="border-cream" />
            <p className="text-sm leading-6 text-ink">
              <strong className="font-bold">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

/** Photo with the peach panel, lavender circle and two floating badges from the design. */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[362/380] w-full max-w-[500px] -order-1 lg:order-none lg:aspect-[500/520] lg:max-w-none">
      {/* Decorative shapes sit behind the photo */}
      <div
        aria-hidden
        className="absolute top-6 right-[-11px] bottom-3.5 left-[28%] rounded-2xl bg-peach lg:right-[-39px] lg:bottom-7 lg:left-auto lg:w-[89px]"
      />
      <div
        aria-hidden
        className="absolute bottom-3 -left-2.5 size-16 rounded-full bg-primary-soft lg:bottom-[11px] lg:-left-[45px] lg:size-[106px]"
      />

      <div className="absolute inset-y-0 inset-x-2 overflow-hidden rounded-2xl bg-primary-soft lg:inset-x-0 lg:rounded-3xl">
        <Image
          src="/images/hero-learner.jpg"
          alt="A smiling learner with glasses studying on her laptop in a bright office"
          fill
          preload
          sizes="(min-width: 1024px) 500px, (min-width: 540px) 484px, calc(100vw - 56px)"
          className="object-cover"
        />
      </div>

      <div className="absolute top-1.5 left-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card lg:top-4 lg:-left-[22px]">
        <span className="rounded-lg bg-primary-soft px-1 text-sm leading-8 font-bold text-primary">120+</span>
        <span className="text-sm leading-6 text-ink">expert-led courses</span>
      </div>

      <div className="absolute right-[-11px] bottom-[35px] flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-card lg:right-[-24px] xl:right-[-57px]">
        <span className="flex gap-0.5 text-sun" aria-hidden>
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </span>
        <span className="text-sm leading-6 text-ink">
          4.9 avg rating<span className="sr-only"> out of 5</span>
        </span>
      </div>
    </div>
  );
}
