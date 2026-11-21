import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ChatIcon, ClockIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { contactDetails } from "@/data/content";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-[480px]">
          <Eyebrow>Contact</Eyebrow>
          <h2
            id="contact-title"
            className="mt-4 font-display text-[32px] leading-9 font-extrabold tracking-[-0.025em] text-ink lg:text-5xl lg:leading-14"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-6 text-body lg:text-lg lg:leading-7">
            Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team
            or interested in teaching with Luma, we’d love to hear from you.
          </p>

          <ul className="mt-8 flex flex-col gap-4 lg:mt-10">
            <ContactCard icon={<ChatIcon />} title="Email">
              <a
                href={`mailto:${contactDetails.email}`}
                className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {contactDetails.email}
              </a>
            </ContactCard>
            <ContactCard icon={<ClockIcon />} title="Response Time">
              <span className="text-muted">{contactDetails.responseTime}</span>
            </ContactCard>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

type ContactCardProps = { icon: ReactNode; title: string; children: ReactNode };

function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5 text-sm leading-6 lg:gap-1">
        <p className="text-ink">{title}</p>
        {children}
      </div>
    </li>
  );
}
