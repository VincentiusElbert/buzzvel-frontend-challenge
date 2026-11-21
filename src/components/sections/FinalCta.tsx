import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import {
  DecoBoldIcon,
  DecoCashIcon,
  DecoChatIcon,
  DecoCodepenIcon,
  DecoDropIcon,
} from "@/components/ui/icons";
import { anchors, learnerAvatars } from "@/data/content";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-butter py-[60px] lg:py-[100px]">
      <Decorations />

      <div className="relative mx-auto flex max-w-[720px] flex-col items-center px-5 text-center md:px-8">
        <AvatarStack avatars={learnerAvatars} size={40} ringClassName="border-sun" />
        <h2
          id="cta-title"
          className="mt-8 font-display text-4xl leading-10 font-extrabold tracking-[-0.025em] text-ink lg:text-[56px] lg:leading-16"
        >
          What will you learn next?
        </h2>
        <p className="mt-4 text-base leading-[26px] text-body lg:text-lg lg:leading-7">
          Start with one course. Build from there.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={anchors.categories}>Explore all courses</ButtonLink>
          <ButtonLink href={anchors.contact} variant="secondary">
            Join Luma
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/**
 * Floating peach shapes from the desktop frame. Positions are the Figma
 * coordinates inside a 1280px-wide box; shapes on the right half are anchored
 * to the right edge. Hidden below 1180px, where they would collide with the copy
 * (the mobile design has none).
 */
function Decorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden min-[1180px]:block">
      <div className="relative mx-auto h-full max-w-[1280px] text-peach">
        {/* left side */}
        <span className="absolute top-4 left-[22px] size-[108px] rounded-full border-2 border-peach" />
        <span className="absolute top-[373px] left-14 size-[120px] rounded-full bg-peach" />
        <span className="absolute top-[235px] left-[-28px] size-14 rotate-12 rounded-lg bg-peach" />
        <span className="absolute top-[47px] left-[322px] size-14 rotate-12 rounded-lg border border-peach" />
        <DecoChatIcon className="absolute top-[214px] left-[141px]" />
        <DecoBoldIcon className="absolute top-[360px] left-[272px]" />

        {/* right side */}
        <span className="absolute top-[-13.5px] right-[10.5px] size-[115px] rotate-12 rounded-lg bg-peach" />
        <span className="absolute top-[43px] right-[371px] size-8 rounded-full border-2 border-peach" />
        <span className="absolute top-[429px] right-10 size-8 rounded-full border-2 border-peach" />
        <span className="absolute top-[468px] right-44 size-10 rounded-full bg-peach" />
        <DecoDropIcon className="absolute top-[82px] right-[202px]" />
        <DecoCodepenIcon className="absolute top-[220px] right-20" />
        <DecoCashIcon className="absolute top-[381px] right-[269px]" />
      </div>
    </div>
  );
}
