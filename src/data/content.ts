/**
 * Local mock content for the landing page. In a real product this would come
 * from a CMS/API; keeping it typed and in one place keeps the sections dumb.
 */

export type NavLink = { label: string; href: string };

/** Section anchors, shared by the header, footer and CTAs. */
export const anchors = {
  top: "#top",
  categories: "#categories",
  featured: "#featured-course",
  howItWorks: "#how-it-works",
  community: "#community",
  contact: "#contact",
} as const;

export const mainNav: NavLink[] = [
  { label: "Courses", href: anchors.categories },
  { label: "For Teams", href: anchors.contact },
  { label: "Community", href: anchors.community },
  { label: "About", href: anchors.howItWorks },
];

export type Avatar = { src: string; alt: string };

export const learnerAvatars: Avatar[] = [
  { src: "/images/avatar-1.jpg", alt: "" },
  { src: "/images/avatar-2.jpg", alt: "" },
  { src: "/images/avatar-3.jpg", alt: "" },
  { src: "/images/avatar-4.jpg", alt: "" },
];

export type Category = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export const categories: Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: anchors.featured,
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: anchors.featured,
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: anchors.featured,
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: anchors.featured,
  },
];

export const featuredCourse = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: { name: "Maya Chen", role: "Senior Product Designer" },
  meta: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/featured-course.jpg",
    alt: "A designer’s hands arranging colour swatches and paper prototypes on a work table",
  },
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: "focus" | "experience" | "practice";
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    number: "03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];

export const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: "Alex Morgan",
  role: "Product Manager",
  avatar: "/images/testimonial-alex-morgan.jpg",
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

/**
 * Collage tile positions measured from the Figma frames, as percentages of the
 * collage box (desktop box 530×522, mobile box 362×310) so the layout scales.
 */
export type CollagePhoto = {
  src: string;
  alt: string;
  /** [left, top, width, height] in px on the mobile frame */
  mobile: [number, number, number, number];
  /** [left, top, width, height] in px on the desktop frame */
  desktop: [number, number, number, number];
};

export const communityPhotos: CollagePhoto[] = [
  { src: "/images/people-01.jpg", alt: "A young girl waving at her laptop during an online class", mobile: [22, 63, 72, 96], desktop: [35, 106, 103, 154] },
  { src: "/images/people-02.jpg", alt: "A group of students gathered around a laptop, laughing together", mobile: [0, 167, 94, 129], desktop: [0, 273, 138, 207] },
  { src: "/images/people-03.jpg", alt: "A student in a hoodie reading a book at a desk full of books", mobile: [106, 0, 72, 106], desktop: [154, 25, 103, 170] },
  { src: "/images/people-04.jpg", alt: "A music teacher and student practising by a large window", mobile: [106, 114, 72, 108], desktop: [154, 208, 103, 173] },
  { src: "/images/people-05.jpg", alt: "A young man studying from an open book next to his tablet", mobile: [106, 230, 72, 80], desktop: [154, 394, 103, 128] },
  { src: "/images/people-06.jpg", alt: "A smiling graduate in cap and gown holding his diploma", mobile: [190, 13, 72, 86], desktop: [273, 33, 103, 137] },
  { src: "/images/people-07.jpg", alt: "A woman working on her laptop in a bright home office", mobile: [190, 107, 72, 86], desktop: [273, 183, 103, 138] },
  { src: "/images/people-08.jpg", alt: "A boy joining a video lesson with his teacher on a desktop computer", mobile: [190, 201, 72, 96], desktop: [273, 334, 103, 154] },
  { src: "/images/people-09.jpg", alt: "A student with curly hair carrying books on a university campus", mobile: [274, 46, 88, 128], desktop: [391, 86, 128, 205] },
  { src: "/images/people-10.jpg", alt: "A student in a hijab holding a coffee and notebooks", mobile: [274, 182, 72, 83], desktop: [391, 303, 103, 132] },
];

export const contactDetails = {
  email: "contact@luma.com",
  responseTime: "Up to 24 hours on business days",
};

export type FooterColumn = { title: string; links: NavLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: anchors.categories },
      { label: "Categories", href: anchors.categories },
      { label: "Instructors", href: anchors.community },
      { label: "For Teams", href: anchors.contact },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: anchors.howItWorks },
      { label: "Careers", href: anchors.contact },
      { label: "Journal", href: anchors.featured },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: anchors.contact },
      { label: "Contact", href: anchors.contact },
      { label: "Terms", href: anchors.top },
      { label: "Privacy", href: anchors.top },
    ],
  },
];
