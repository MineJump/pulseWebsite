import type { Language, Translations } from "./types";

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      research: "Forschung",
      platform: "Plattform",
      team: "Team",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "2chub – Research Institute",
      title: "Center for Computation\nof Human Behavior.",
      subtitle: "Verhaltensforschung, die im Alltag stattfindet.",
      tagline:
        "Wir erforschen menschliches Verhalten dort, wo es tatsächlich passiert – auf dem Smartphone. Mobile Studien, Experience Sampling, Passive Sensing und datengetriebene Psychometrik.",
      primaryCta: "Unsere Forschung",
      secondaryCta: "Plattform kennenlernen",
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
    },
  },
  en: {
    nav: {
      research: "Research",
      platform: "Platform",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      eyebrow: "2chub – Research Institute",
      title: "Center for Computation\nof Human Behavior.",
      subtitle: "Behavioural research, in everyday life.",
      tagline:
        "We study human behaviour where it actually happens – on the smartphone. Mobile studies, experience sampling, passive sensing, and data-driven psychometrics.",
      primaryCta: "Our research",
      secondaryCta: "See the platform",
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
    },
  },
};
