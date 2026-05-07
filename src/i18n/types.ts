export type Language = "de" | "en";

export interface ResearchArea {
  number: string;
  title: string;
  description: string;
}

export interface PlatformFeature {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  background: string;
  email?: string;
}

export interface Translations {
  nav: {
    research: string;
    platform: string;
    team: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  research: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: ResearchArea[];
  };
  platform: {
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
    features: PlatformFeature[];
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
  };
}
