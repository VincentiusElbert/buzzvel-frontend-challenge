import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps, type Step } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-cream py-[60px] lg:py-[100px]">
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How Luma works"
          title="Less browsing. More learning."
          align="center"
          className="mx-auto max-w-[672px]"
        />

        {/* On tablet/desktop a 1px line (::before) runs from the first icon's centre to the last one's. */}
        <ol className="relative mt-10 [--gap:2rem] md:grid md:grid-cols-3 md:gap-(--gap) md:py-7 md:before:absolute md:before:top-14 md:before:right-[calc((100%-2*var(--gap))/3-28px)] md:before:left-7 md:before:h-px md:before:bg-line md:before:content-[''] lg:mt-20 lg:[--gap:80px]">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              <StepItem step={step} />
              {index < steps.length - 1 && (
                <div aria-hidden className="mt-[26px] ml-[27.5px] h-[50px] w-px bg-line md:hidden" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

type StepItemProps = { step: Step };

export function StepItem({ step }: StepItemProps) {
  return (
    <article aria-labelledby={`step-${step.number}`}>
      <StepIcon variant={step.icon} />
      <p className="mt-6 text-xs leading-4 font-semibold tracking-[0.12em] text-muted uppercase">Step {step.number}</p>
      <h3 id={`step-${step.number}`} className="mt-2 font-display text-xl leading-7 font-bold text-ink lg:leading-8">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-body lg:text-base lg:leading-7">{step.description}</p>
    </article>
  );
}

/** Abstract shape icons drawn with CSS, as in the design (no image assets needed). */
function StepIcon({ variant }: { variant: Step["icon"] }) {
  if (variant === "focus") {
    return (
      <div aria-hidden className="relative z-10 size-14 rounded-full bg-primary-soft">
        <span className="absolute top-2 left-2 size-6 rounded-md bg-primary" />
      </div>
    );
  }

  if (variant === "experience") {
    return (
      <div aria-hidden className="relative z-10 size-14">
        <span className="absolute inset-0 rotate-12 rounded-lg bg-peach" />
        <span className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
      </div>
    );
  }

  return (
    <div aria-hidden className="relative z-10 size-14 rounded-xl bg-butter">
      <span className="absolute top-7 left-2 size-5 rounded-full bg-mustard" />
    </div>
  );
}
