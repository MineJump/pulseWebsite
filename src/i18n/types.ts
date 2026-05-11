export type Language = "de" | "en";

export interface TeamMember {
  name: string;
  role: string;
  background: string;
  email?: string;
}

export interface USPItem {
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    methoden: string;
    features: string;
    ueber_uns: string;
    login: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  testimonials: {
    items: string[];
  };
  usps: {
    heading: string;
    items: USPItem[];
  };
  howItWorks: {
    heading: string;
    steps: string[];
    cta: string;
  };
  methoden: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    members: TeamMember[];
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    location: string;
    cta: string;
  };
  footer: {
    legalName: string;
    imprint: string;
    privacy: string;
    backLink: string;
    docs: string;
    contact: string;
  };
}
