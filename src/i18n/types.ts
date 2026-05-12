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

export interface PillarItem {
  title: string;
  desc: string;
}

export interface SensingCategory {
  name: string;
  modules: string[];
}

export interface InterventionType {
  label: string;
  detail: string;
}

export interface DesignItem {
  title: string;
  desc: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  overage?: string;
  cta: string;
  ctaHref: string;
  highlight?: boolean;
  detail: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TimelineItem {
  year: string;
  event: string;
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
    platforms: string;
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
    subheading: string;
    steps: { label: string; description: string }[];
    cta: string;
  };
  methoden: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
  };
  methodenPage: {
    platformTag: string;
    platformHeading: string;
    pillars: PillarItem[];
    sensingHeading: string;
    sensingBody: string;
    sensingModulesHeading: string;
    sensingModulesNote: string;
    sensingCategories: SensingCategory[];
    sensingPrivacyHeading: string;
    sensingPrivacyBody: string;
    sensingPrivacyPoints: string[];
    esmHeading: string;
    esmBody: string;
    esmQaHeading: string;
    esmQaBody: string;
    esmQaItems: string[];
    interventionsHeading: string;
    interventionsBody: string;
    interventionTypesHeading: string;
    interventionTypes: InterventionType[];
    interventionStudyHeading: string;
    studyDesigns: DesignItem[];
    analysisHeading: string;
    analysisBody: string;
    computationsHeading: string;
    computations: DesignItem[];
    vizHeading: string;
    vizBody: string;
    visualizations: DesignItem[];
    interventionsTag: string;
    analysisTag: string;
    exportHeading: string;
    exportBody: string;
    exportFormatsNote: string;
  };
  featuresPage: {
    eyebrow: string;
    heading: string;
    subheading: string;
    badge: string;
    close: string;
    overflowNote: string;
    plans: PricingPlan[];
    advisorHeading: string;
    advisorBody: string;
    advisorCta: string;
    advisorMailSubject: string;
    faqHeading: string;
    faqs: FaqItem[];
  };
  ueberUnsPage: {
    eyebrow: string;
    heading: string;
    body: string;
    milestonesHeading: string;
    timeline: TimelineItem[];
    chubHeading: string;
    chubBody: string;
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
  marquee: string[];
}
