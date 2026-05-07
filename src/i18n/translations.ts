import type { Language, Translations } from "./types";

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      methoden: "Methoden",
      befragen: "Befragen",
      beobachten: "Beobachten",
      intervenieren: "Intervenieren",
      auswerten: "Auswerten",
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
          title: "Top Preis-Leistungs-Verhältnis",
          description:
            "Zahlen Sie nur für das, was Sie brauchen. Alle Preise transparent, per Studie.",
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
      cards: [
        {
          title: "Befragen",
          tag: "ESM / EMA",
          description:
            "Konfiguriere kontextsensitive Kurzfragen, event- oder intervallbasiertes Sampling, Branching-Logik und validierte Skalen.",
          href: "/methoden/befragen",
        },
        {
          title: "Beobachten",
          tag: "Passive Sensing",
          description:
            "Aktiviere Sensorströme für Bewegung, Schlaf, Kommunikation und Mediennutzung. Sub-Millisekunden Datenschutzgranularität pro Studie.",
          href: "/methoden/beobachten",
        },
        {
          title: "Intervenieren",
          tag: "Digitale Interventionen",
          description:
            "Definiere Trigger-Bedingungen für Just-in-Time-Interventions, randomisiere Interventionen und steuere das Studiendesign.",
          href: "/methoden/intervenieren",
        },
        {
          title: "Auswerten",
          tag: "Automatisierte Analyse",
          description:
            "Deskriptive Statistik, Compliance-Reports, Mehrebenenmodelle direkt im Admin Panel. Export als CSV, SPSS oder direkt nach R.",
          href: "/methoden/auswerten",
        },
      ],
    },
    research: {
      eyebrow: "Was wir tun",
      heading: "Vier Säulen unserer Forschung.",
      intro:
        "Das Center for Computation of Human Behavior kombiniert etablierte Methoden der Psychologie mit moderner Sensorik und Datenanalyse. Unsere Studien entstehen in Kooperation mit Universitäten, Kliniken und Unternehmen.",
      items: [
        {
          number: "01",
          title: "Experience Sampling.",
          description:
            "Kurze, kontextsensitive Fragebögen direkt im Alltag. Gedanken, Emotionen und Erfahrungen erfassen, ohne auf retrospektive Erinnerung angewiesen zu sein.",
        },
        {
          number: "02",
          title: "Passive Sensing.",
          description:
            "Bewegung, Standort, Aktivität, Kommunikation, Medienkonsum, Bildschirmzeit – hochfrequente, anonymisierte Verhaltensdaten direkt vom Smartphone.",
        },
        {
          number: "03",
          title: "Momentary Interventions.",
          description:
            "Digitale Interventionen im richtigen Moment – personalisiert, wissenschaftlich validiert und messbar in ihrer Wirkung.",
        },
        {
          number: "04",
          title: "Clinical & Applied Research.",
          description:
            "Studien zu psychischer Gesundheit, Arbeit, Bildung und Konsumverhalten. Von der Forschungsfrage bis zur publikationsreifen Auswertung.",
        },
      ],
    },
    platform: {
      eyebrow: "Unsere Plattform",
      heading: "PULSE.",
      subheading: "Die Infrastruktur hinter jeder Studie.",
      description:
        "PULSE ist die vom Center for Computation of Human Behavior entwickelte Forschungsplattform für mobile Studien – mit einer iOS- und Android-App für Teilnehmende und einem Admin-Panel für Forschende. DSGVO-konform, gehostet in Europa, offen für Kooperationen.",
      features: [
        {
          title: "Mobile App",
          description:
            "Native Apps für iOS und Android. Abfragen, Benachrichtigungen, Sensorzugriff, Offline-Support.",
        },
        {
          title: "Admin Panel",
          description:
            "Studien konfigurieren, Fragebögen bauen, Teilnehmende verwalten, Daten exportieren. Ohne Code.",
        },
        {
          title: "Passive Sensing",
          description:
            "Sensorik für Standort, Bewegung, Aktivität, Anrufe, Musik und Bildschirmzeit – transparent und konfigurierbar.",
        },
        {
          title: "Datenschutz by Design",
          description:
            "Hosting in der EU, verschlüsselte Uploads, granulare Einwilligungen, DSGVO-konform.",
        },
      ],
    },
    team: {
      eyebrow: "Das Team",
      heading: "Wer hinter 2chub steht.",
      members: [
        {
          name: "Prof. Dr. Markus Bühner",
          role: "Mitgründer – Psychometrik & Methodenlehre",
          background:
            "Professor für Psychologische Methodenlehre und Diagnostik. Forschungsschwerpunkte: Psychometrie, Intelligenztheorien, digitale Assessments.",
          email: "markus.buehner@2chub.com",
        },
        {
          name: "Dr. Yannik Terhorst",
          role: "Mitgründer – Klinische Psychologie & Digital Health",
          background:
            "Forscher im Bereich Klinische Psychologie und Psychotherapie. Fokus auf digitale Interventionen, Mobile Health und Ecological Momentary Assessment.",
          email: "yannik.terhorst@2chub.com",
        },
        {
          name: "Leon Paletta",
          role: "Mitgründer – Plattform & Data",
          background:
            "M.Sc. Robotics & AI, B.Sc. Engineering Science. Fokus auf Plattformarchitektur, Data Engineering und Produkt.",
        },
        {
          name: "Till-Ole Lohse",
          role: "Mitgründer – Engineering",
          background:
            "B.Sc. Computer Science, B.Sc. Management. Verantwortlich für Systemarchitektur, Infrastruktur und Hardware-Integration.",
        },
      ],
    },
    contact: {
      heading: "Lust auf eine Studie?",
      subheading:
        "Ob Forschungskooperation, klinische Studie oder Auftragsforschung – wir hören zu.",
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
      befragen: "Survey",
      beobachten: "Observe",
      intervenieren: "Intervene",
      auswerten: "Analyse",
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
          title: "Best Price-Performance Ratio",
          description:
            "Pay only for what you need. All prices transparent, per study.",
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
      cards: [
        {
          title: "Survey",
          tag: "ESM / EMA",
          description:
            "Configure context-sensitive short surveys, event- or interval-based sampling, branching logic and validated scales.",
          href: "/methoden/befragen",
        },
        {
          title: "Observe",
          tag: "Passive Sensing",
          description:
            "Activate sensor streams for movement, sleep, communication and media use. Sub-millisecond privacy granularity per study.",
          href: "/methoden/beobachten",
        },
        {
          title: "Intervene",
          tag: "Digital Interventions",
          description:
            "Define trigger conditions for just-in-time interventions, randomise interventions and control study design.",
          href: "/methoden/intervenieren",
        },
        {
          title: "Analyse",
          tag: "Automated Analysis",
          description:
            "Descriptive statistics, compliance reports, multilevel models directly in the admin panel. Export as CSV, SPSS or R.",
          href: "/methoden/auswerten",
        },
      ],
    },
    research: {
      eyebrow: "What we do",
      heading: "Four pillars of our research.",
      intro:
        "The Center for Computation of Human Behavior combines established psychological methods with modern sensing and data science. Our studies run in partnership with universities, clinics, and industry.",
      items: [
        {
          number: "01",
          title: "Experience Sampling.",
          description:
            "Brief, context-aware surveys delivered in the moment. Capture thoughts, emotions, and experiences without relying on retrospective recall.",
        },
        {
          number: "02",
          title: "Passive Sensing.",
          description:
            "Motion, location, activity, communication, media use, screen time – high-frequency, anonymised behavioural data straight from the phone.",
        },
        {
          number: "03",
          title: "Momentary Interventions.",
          description:
            "Digital interventions in the right moment – personalised, validated, and measurable in their effect.",
        },
        {
          number: "04",
          title: "Clinical & Applied Research.",
          description:
            "Studies on mental health, work, education, and consumer behaviour. From research question to publication-ready analysis.",
        },
      ],
    },
    platform: {
      eyebrow: "Our platform",
      heading: "PULSE.",
      subheading: "The infrastructure behind every study.",
      description:
        "PULSE is the research platform built by the Center for Computation of Human Behavior – with native iOS and Android apps for participants and an admin panel for researchers. GDPR-compliant, hosted in Europe, open for collaboration.",
      features: [
        {
          title: "Mobile App",
          description:
            "Native iOS and Android apps. Questionnaires, notifications, sensor access, offline support.",
        },
        {
          title: "Admin Panel",
          description:
            "Configure studies, build questionnaires, manage participants, export data. No code required.",
        },
        {
          title: "Passive Sensing",
          description:
            "Sensors for location, motion, activity, calls, music, and screen time – transparent and configurable.",
        },
        {
          title: "Privacy by Design",
          description:
            "Hosted in the EU, encrypted uploads, granular consent, GDPR-compliant.",
        },
      ],
    },
    team: {
      eyebrow: "The team",
      heading: "Who is behind 2chub.",
      members: [
        {
          name: "Prof. Dr. Markus Bühner",
          role: "Co-founder – Psychometrics & Methodology",
          background:
            "Professor of Psychological Methodology and Assessment. Research focus: psychometrics, theories of intelligence, digital assessments.",
          email: "markus.buehner@2chub.com",
        },
        {
          name: "Dr. Yannik Terhorst",
          role: "Co-founder – Clinical Psychology & Digital Health",
          background:
            "Researcher in clinical psychology and psychotherapy. Focus on digital interventions, mobile health, and ecological momentary assessment.",
          email: "yannik.terhorst@2chub.com",
        },
        {
          name: "Leon Paletta",
          role: "Co-founder – Platform & Data",
          background:
            "M.Sc. Robotics & AI, B.Sc. Engineering Science. Platform architecture, data engineering, and product.",
        },
        {
          name: "Till-Ole Lohse",
          role: "Co-founder – Engineering",
          background:
            "B.Sc. Computer Science, B.Sc. Management. System architecture, infrastructure, and hardware integration.",
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
