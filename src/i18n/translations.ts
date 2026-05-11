import type { Language, Translations } from "./types";

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      methoden: "Methoden",
      features: "Features & Pricing",
      ueber_uns: "Über uns",
      login: "Login",
    },
    hero: {
      eyebrow: "Entwickelt an der LMU München",
      title: "Forschungsplattform\nfür mobile Studien.",
      subtitle: "Gebaut von Forschenden.",
      tagline:
        "ESM und Passive Sensing – weniger Aufwand: bessere Daten, mehr Erkenntnisse.",
      primaryCta: "Use Cases",
      secondaryCta: "Studie Konfigurieren",
    },
    testimonials: {
      items: ["EU-Hosted", "DSGVO-konform", "by 2c HUB", "A LMU München Venture"],
    },
    usps: {
      heading: "Warum PULSE",
      items: [
        {
          title: "Bessere Datenqualität",
          description:
            "Kontextsensitive Abfragen direkt im Alltag – weniger Erinnerungsverzerrung, mehr valide Daten.",
        },
        {
          title: "All-in-one Tool",
          description:
            "Befragung, Passive Sensing, Interventionen und automatisierte Auswertung in einer Plattform.",
        },
        {
          title: "Automatisierte Datenauswertung",
          description:
            "Von Rohdaten zur Erkenntnis – automatisiert, reproduzierbar und publikationsreif exportierbar.",
        },
        {
          title: "DSGVO-konform & EU-gehostet",
          description:
            "Hosting in der EU, verschlüsselte Übertragung, granulare Einwilligungen und vollständige DSGVO-Konformität.",
        },
      ],
    },
    howItWorks: {
      heading: "So funktioniert PULSE",
      steps: ["Studie konfigurieren", "Teilnehmende einladen", "Erkenntnisse gewinnen"],
      cta: "Jetzt Konfigurieren",
    },
    methoden: {
      eyebrow: "Methoden",
      heading: "Von der Erhebung bis zur Erkenntnis.",
      intro:
        "PULSE deckt vier Forschungsmethoden ab: aktive Befragung im Alltag, automatische Sensordaten, digitale Interventionen und automatisierte Auswertung. Alles in einer Plattform.",
      cta: "Eigene Studie konfigurieren",
    },
    team: {
      eyebrow: "Das Team",
      heading: "Wer hinter 2chub steht.",
      members: [
        {
          name: "Prof. Dr. Markus Bühner",
          role: "Mitgründer – Psychometrik & Methodenlehre",
          background:
            "Prof. für Psychologische Methodenlehre und Diagnostik, LMU München. Verantwortlich für Forschung zu Intelligenz, Aufmerksamkeit und psychologischer Diagnostik. Ehemaliger Präsident der Deutschen Gesellschaft für Psychologie.",
          email: "markus.buehner@2chub.com",
        },
        {
          name: "Dr. Yannik Terhorst",
          role: "Mitgründer – Klinische Psychologie & Digital Health",
          background:
            "M.Sc. Psychologie, Dr. rer. nat. Forscher an der Schnittstelle von Klinischer Psychologie, KI und digitaler Gesundheitsversorgung. Schwerpunkt auf eHealth, mHealth und datenbasierter Psychotherapie.",
          email: "yannik.terhorst@2chub.com",
        },
        {
          name: "Leon Paletta",
          role: "Mitgründer – Plattform & Data",
          background:
            "M.Sc. Robotics & AI, TU München. Co-Founder von THEO Labs. Fokus auf Anwendungen künstlicher Intelligenz, maschinelles Lernen und intelligente Systeme.",
          email: "leon.paletta@2chub.com",
        },
        {
          name: "Till-Ole Lohse",
          role: "Mitgründer – Engineering",
          background:
            "TU München. Mitgründer von THEO Labs. Verantwortlich für Produktentwicklung und technische Umsetzung an der Schnittstelle von KI und Praxisanwendung.",
          email: "till-ole.lohse@2chub.com",
        },
      ],
    },
    contact: {
      heading: "Gemeinsam forschen.",
      subheading:
        "Ob Forschungskooperation, klinische Studie oder Auftragsforschung – sprechen Sie uns an.",
      email: "info@2chub.com",
      location: "München",
      cta: "Kontakt aufnehmen",
    },
    footer: {
      legalName: "2chub – Center for Computation of Human Behavior",
      imprint: "Impressum",
      privacy: "Datenschutz",
      backLink: "Zurück",
      docs: "Docs",
      contact: "Kontakt",
    },
  },
  en: {
    nav: {
      methoden: "Methods",
      features: "Features & Pricing",
      ueber_uns: "About",
      login: "Login",
    },
    hero: {
      eyebrow: "Developed at LMU Munich",
      title: "Research platform\nfor mobile studies.",
      subtitle: "Built by researchers.",
      tagline:
        "ESM and Passive Sensing – less effort: better data, more insights.",
      primaryCta: "Use Cases",
      secondaryCta: "Configure Study",
    },
    testimonials: {
      items: ["EU-Hosted", "GDPR-compliant", "by 2c HUB", "A LMU Munich Venture"],
    },
    usps: {
      heading: "Why PULSE",
      items: [
        {
          title: "Better Data Quality",
          description:
            "Context-sensitive surveys in everyday life – less recall bias, more valid data.",
        },
        {
          title: "All-in-one Tool",
          description:
            "Surveys, passive sensing, interventions and automated analysis in one platform.",
        },
        {
          title: "Automated Data Analysis",
          description:
            "From raw data to insight – automated, reproducible and export-ready for publication.",
        },
        {
          title: "GDPR-compliant & EU-hosted",
          description:
            "Hosted in the EU, encrypted transmission, granular consent and full GDPR compliance.",
        },
      ],
    },
    howItWorks: {
      heading: "How PULSE works",
      steps: ["Configure study", "Invite participants", "Gain insights"],
      cta: "Configure Now",
    },
    methoden: {
      eyebrow: "Methods",
      heading: "From data collection to insight.",
      intro:
        "PULSE covers four research methods: active surveys in everyday life, automatic sensor data, digital interventions and automated analysis. All in one platform.",
      cta: "Configure your own study",
    },
    team: {
      eyebrow: "The team",
      heading: "Who is behind 2chub.",
      members: [
        {
          name: "Prof. Dr. Markus Bühner",
          role: "Co-founder – Psychometrics & Methodology",
          background:
            "Professor of Psychological Methodology and Assessment, LMU Munich. Research on intelligence, attention, and psychological diagnostics. Former president of the German Psychological Society.",
          email: "markus.buehner@2chub.com",
        },
        {
          name: "Dr. Yannik Terhorst",
          role: "Co-founder – Clinical Psychology & Digital Health",
          background:
            "M.Sc. Psychology, Dr. rer. nat. Researcher at the intersection of clinical psychology, AI, and digital healthcare. Focus on eHealth, mHealth, and data-driven psychotherapy.",
          email: "yannik.terhorst@2chub.com",
        },
        {
          name: "Leon Paletta",
          role: "Co-founder – Platform & Data",
          background:
            "M.Sc. Robotics & AI, TU Munich. Co-founder of THEO Labs. Focus on artificial intelligence applications, machine learning, and intelligent systems.",
          email: "leon.paletta@2chub.com",
        },
        {
          name: "Till-Ole Lohse",
          role: "Co-founder – Engineering",
          background:
            "TU Munich. Co-founder of THEO Labs. Responsible for product development and technical implementation at the intersection of AI and real-world application.",
          email: "till-ole.lohse@2chub.com",
        },
      ],
    },
    contact: {
      heading: "Want to run a study?",
      subheading:
        "Research collaborations, clinical trials, commissioned research – we listen.",
      email: "info@2chub.com",
      location: "Munich, Germany",
      cta: "Get in touch",
    },
    footer: {
      legalName: "2chub – Center for Computation of Human Behavior",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      backLink: "Back",
      docs: "Docs",
      contact: "Contact",
    },
  },
};
