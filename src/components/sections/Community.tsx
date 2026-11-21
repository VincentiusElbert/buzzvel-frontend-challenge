import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { anchors, communityPhotos, type CollagePhoto } from "@/data/content";

export function Community() {
  return (
    <section id="community" aria-labelledby="community-title" className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="lg:flex-1">
          <SectionHeading
            id="community-title"
            eyebrow="The people"
            title="Meet international students & teachers"
            gap="sm"
            className="max-w-[530px]"
          />
          {/* Placeholder copy kept exactly as provided in the design. */}
          <p className="mt-6 max-w-[530px] text-base leading-[26px] text-body lg:mt-8 lg:text-lg lg:leading-7">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget
            commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
            aenean lorem faucibus integer.
          </p>
          <ButtonLink href={anchors.contact} variant="secondary" className="mt-6 lg:mt-8">
            Explore teachers and students
          </ButtonLink>
        </div>

        <PhotoCollage photos={communityPhotos} />
      </Container>
    </section>
  );
}

const MOBILE_BOX = { w: 362, h: 310 };
const DESKTOP_BOX = { w: 530, h: 522 };

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

/** Tile rects come from Figma; converting to % lets the collage scale with its column. */
function tileVars({ mobile, desktop }: CollagePhoto) {
  return {
    "--m-l": pct(mobile[0], MOBILE_BOX.w),
    "--m-t": pct(mobile[1], MOBILE_BOX.h),
    "--m-w": pct(mobile[2], MOBILE_BOX.w),
    "--m-h": pct(mobile[3], MOBILE_BOX.h),
    "--d-l": pct(desktop[0], DESKTOP_BOX.w),
    "--d-t": pct(desktop[1], DESKTOP_BOX.h),
    "--d-w": pct(desktop[2], DESKTOP_BOX.w),
    "--d-h": pct(desktop[3], DESKTOP_BOX.h),
  } as CSSProperties;
}

type PhotoCollageProps = { photos: CollagePhoto[] };

export function PhotoCollage({ photos }: PhotoCollageProps) {
  return (
    <div className="relative mx-auto aspect-[362/310] w-full max-w-[530px] lg:aspect-[530/522] lg:flex-1">
      <div
        aria-hidden
        className="absolute top-[-2.9%] left-[4.42%] aspect-square w-[91.16%] rounded-full bg-primary-soft lg:top-[2.1%] lg:left-[2.83%] lg:w-[94.34%]"
      />
      <ul>
        {photos.map((photo) => (
          <li
            key={photo.src}
            style={tileVars(photo)}
            className="absolute top-(--m-t) left-(--m-l) h-(--m-h) w-(--m-w) overflow-hidden rounded-[5px] bg-primary-soft shadow-photo lg:top-(--d-t) lg:left-(--d-l) lg:h-(--d-h) lg:w-(--d-w) lg:rounded-[4px]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 140px, 26vw"
              className="object-cover transition-transform duration-500 motion-safe:hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
