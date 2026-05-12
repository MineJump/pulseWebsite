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
      eyebrow: "Ein Produkt des 2CHUB · LMU München",
      title: "Forschungsplattform\nfür mobile Studien.",
      subtitle: "Gebaut von Forschenden.",
      tagline:
        "PULSE ist eine dedizierte Forschungsplattform für passives mobiles Sensing, Digital Phenotyping und Ecological Momentary Assessment. Sie befähigt Forschungsteams, authentische Verhaltensdaten in realen Alltagskontexten zu erfassen und in evidenzbasierte Erkenntnisse zu überführen.",
      primaryCta: "Angebote vergleichen",
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
      subheading: "In drei Schritten zur laufenden Studie.",
      steps: [
        {
          label: "Studie konfigurieren",
          description: "ESM-Protokoll, Sensing-Module und Interventionslogik per Dashboard einrichten – ohne Programmieraufwand.",
        },
        {
          label: "Teilnehmende einladen",
          description: "Link oder QR-Code versenden. Die PULSE-App führt Teilnehmende durch Onboarding und Consent.",
        },
        {
          label: "Erkenntnisse gewinnen",
          description: "Live-Dashboard, automatisierte Analysen und publikationsreife Exporte – alles in einer Plattform.",
        },
      ],
      cta: "Jetzt Konfigurieren",
    },
    methoden: {
      eyebrow: "Methoden",
      heading: "Von der Erhebung bis zur Erkenntnis.",
      intro:
        "PULSE deckt vier Forschungsmethoden ab: aktive Befragung im Alltag, automatische Sensordaten, digitale Interventionen und automatisierte Auswertung. Alles in einer Plattform.",
      cta: "Eigene Studie konfigurieren",
    },
    methodenPage: {
      platformTag: "Plattform",
      platformHeading: "Alles, was Sie für Ihre Studie brauchen.",
      pillars: [
        {
          title: "Passive Mobile Sensing",
          desc: "Smartphone-Sensordaten kontinuierlich und mit minimaler Teilnehmer-Belastung im Hintergrund erfassen.",
        },
        {
          title: "White-Label Study App",
          desc: "App an Ihre Studie anpassen – von Branding bis zu Inhalten und Workflows.",
        },
        {
          title: "Research Dashboard",
          desc: "Studien, Teilnehmende und Datenqualität überwachen, Fortschritt in Echtzeit verfolgen.",
        },
        {
          title: "Data Export & API-Ready",
          desc: "Daten in Standardformaten exportieren oder via API in Ihre Systeme integrieren.",
        },
        {
          title: "Privacy & Security by Design",
          desc: "Privacy-by-Design, Verschlüsselung, rollenbasierter Zugriff und Compliance.",
        },
      ],
      sensingHeading: "Verhalten passiv erfassen. Kontinuierlich, kontextuell, unauffällig.",
      sensingBody:
        "PULSE nutzt Smartphone- und Wearable-Sensoren, um die kontinuierliche Nutzung im Alltag zu erfassen. Die Sensorprofile sind datenschutzkonform konfigurierbar – mit Sampling-Raten, Aggregationsstufen und granularen Consent-Modulen.",
      sensingModulesHeading: "14 Sensing-Module in 5 Kategorien",
      sensingModulesNote: "iOS und Android. Modular aktivierbar – je nach Studiendesign und Consent.",
      sensingCategories: [
        {
          name: "Standort & Mobilität",
          modules: ["Location Tracking", "Pedometer", "Activity Tracking"],
        },
        {
          name: "Bewegung & Kontext",
          modules: ["Motion Sensor", "Ambient Sound & Light", "Battery Monitoring"],
        },
        {
          name: "Digitales Verhalten",
          modules: ["Phone Call Events", "Screen Time & App Events", "PULSE Keyboard"],
        },
        {
          name: "Gesundheit & Wearables",
          modules: ["Apple Health / Health Connect", "Garmin Smartwatch Integration"],
        },
        {
          name: "Konnektivität & Medien",
          modules: ["Wi-Fi & Bluetooth", "Music Tracking", "Spotify History"],
        },
      ],
      sensingPrivacyHeading: "Datenschutz im passiven Sensing",
      sensingPrivacyBody:
        "Jeder Sensorstrom kann individuell konfiguriert, pseudonymisiert und auf Teilnehmer-Ebene eingeschränkt werden. Die folgenden Schutzmaßnahmen greifen bei jedem Sensing-Modul.",
      sensingPrivacyPoints: [
        "Kommunikationsdaten: nur Metadaten (Zeitstempel, Dauer) – keine Inhalte.",
        "GPS: konfigurierbare Auflösung, auf 500 m-Genauigkeit reduzierbar.",
        "Audio: nur aggregierte Lautstärke-Features, keine Aufnahmen.",
        "Ende-zu-Ende-Verschlüsselung, Pseudonymisierung aller Rohdaten.",
        "Granulares Consent-Modul: Teilnehmende können einzelne Datenströme selektiv freigeben.",
      ],
      esmHeading: "Befragen im Alltag. Präzise, kontextsensitiv, wissenschaftlich fundiert.",
      esmBody:
        "PULSE unterstützt Experience Sampling (ESM), Ecological Momentary Assessment (EMA) und Daily Diary Designs in einer konfigurierbaren Umgebung. Sie definieren Trigger, Itemlogik und Sampling-Schema. PULSE übernimmt Auslieferung, Compliance-Monitoring und Datenaggregation.",
      esmQaHeading: "Qualitätssicherung in der Feldphase",
      esmQaBody:
        "PULSE protokolliert in Echtzeit und stellt Forschenden ein Live-Dashboard zur Verfügung. Die Berichterstellung folgt den Empfehlungen für intensive Längsschnittstudien.",
      esmQaItems: [
        "Response-Rate je Teilnehmender und je Prompt",
        "Latenz zwischen Prompt und Antwort",
        "Carelessness-Indikatoren",
        "Drop-out-Risiko über Verlaufsmuster der Compliance",
        "Forschende erhalten ein Live-Dashboard mit Empfehlungen für Re-Engagement-Nachrichten gemäß den STROBE- und CONSORT-Standards für Längsschnittstudien.",
      ],
      interventionsHeading: "Interventionen, die auf den richtigen Moment reagieren.",
      interventionsBody:
        "PULSE ermöglicht digitale Interventionen vom einfachen Reminder bis zu Just-in-Time Adaptive Interventionen (JITAIs). Sie definieren Auslöser, Inhalte und Randomisierungslogik. PULSE liefert aus und protokolliert Adhärenz automatisch.",
      interventionTypesHeading: "Welche Interventionsformen PULSE unterstützt",
      interventionTypes: [
        { label: "Push-Reminder", detail: "Kurze Erinnerung oder Handlungsaufforderung" },
        { label: "Mikro-Intervention", detail: "Angeleitete Kurzübung (1 bis 3 Minuten)" },
        { label: "Edukationsinhalt", detail: "Psychoedukative Texte, Grafiken oder kurze Videos" },
        { label: "Feedback", detail: "Rückmeldung auf Basis eigener Daten" },
        { label: "Selbstmonitoring-Prompt", detail: "Aufforderung zur Reflexion ohne Bewertung" },
      ],
      interventionStudyHeading: "Interventionsforschung mit kontrollierten Designs",
      studyDesigns: [
        { title: "Parallelgruppen-RCT", desc: "Zuweisung zu Interventions- und Kontrollgruppe bei Studienstart." },
        { title: "Micro-Randomized Trial", desc: "Randomisierung auf Momentebene (z. B. Trigger 50 % Intervention, 50 % Kontrolle)." },
        { title: "SMART-Design", desc: "Mehrstufige Randomisierung zur Optimierung adaptiver Interventionsstrategien." },
        { title: "Crossover-Washout", desc: "Zwei Bedingungen, konfigurierbare Washout-Phase." },
      ],
      analysisHeading: "Von Rohdaten zur Erkenntnis. Automatisiert und reproduzierbar.",
      analysisBody:
        "PULSE integriert statistische Analysen, Machine-Learning-Pipelines und interaktive Visualisierungen direkt in die Plattform. Sie konfigurieren die Auswertung parallel zum Studiendesign. PULSE liefert reproduzierbare Ergebnisse und publikationsreife Exporte.",
      computationsHeading: "Was PULSE berechnen kann",
      computations: [
        { title: "Deskriptive Statistik", desc: "Verteilungen, Compliance-Kennwerte, Missingness" },
        { title: "Multilevel-Modelle (MLM)", desc: "Within-Between-Effekte, Random Slopes, Cross-Level-Interaktionen" },
        { title: "Zeitreihenanalyse", desc: "Autokorrelation, Trend, Zyklen, VAR-Modelle" },
        { title: "DSEM", desc: "Autoregressive Prozesse, Mediation auf Momentebene" },
        { title: "Klassifikation / Regression (ML)", desc: "Prädiktion von Zuständen aus Sensorfeatures" },
      ],
      vizHeading: "Daten sichtbar machen",
      vizBody: "PULSE generiert interaktive Visualisierungen direkt aus den Studiendaten.",
      visualizations: [
        { title: "Verlaufskurven", desc: "Individuelle und aggregierte Trajektorien über die Studienzeit" },
        { title: "Heatmaps", desc: "Tageszeit-Map für Aktivität oder Affektvariablen" },
        { title: "Netzwerkgrafiken", desc: "Symptom- oder Affektmatrizen auf Personen- und Gruppenebene" },
        { title: "Compliance-Dashboards", desc: "Response-Raten, Sensorkonfigurbarkeit, Drop-out-Verläufe" },
      ],
      interventionsTag: "Interventionen",
      analysisTag: "Analyse",
      exportHeading: "Ihre Daten, Ihre Werkzeuge",
      exportBody:
        "Jeder Analysedurchlauf wird automatisch dokumentiert – Zeitstempel, Parameter, Datenstand und Diff-Ansicht zu früheren Durchläufen.",
      exportFormatsNote: "Alle Daten sind direkt für moderne Statistik-Software optimiert und sofort einsatzbereit.",
    },
    featuresPage: {
      eyebrow: "Features & Pricing",
      heading: "Wählen Sie den Plan, der zu Ihrer Studie passt.",
      subheading:
        "Vier Pläne für unterschiedliche Studiengrößen und Anforderungen. Alle Preise zzgl. MwSt.",
      badge: "Beliebt",
      close: "Schließen",
      overflowNote:
        "Für Studien mit über 1000 Teilnehmenden kontaktieren Sie uns für ein individuelles Angebot.",
      plans: [
        {
          id: "explore",
          name: "Explore",
          price: "€ 2.900",
          period: "/ Jahr",
          tagline: "Ideal für Studien mit bis zu 100 Teilnehmenden.",
          features: [
            "Einzelstudien-Setup",
            "Core Sensing-Module",
            "Vollständiges ESM / EMA",
            "Standard-Dashboard",
            "CSV-Datenexport",
            "E-Mail-Support",
          ],
          cta: "Explore wählen",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "Explore ist der Einstiegsplan für kleinere Studien und Pilotprojekte. Sie erhalten das vollständige ESM/EMA-Befragungsmodul und die Core Sensing-Module für bis zu 100 Teilnehmende, inklusive Standard-Dashboard und CSV-Export.",
        },
        {
          id: "professional",
          name: "Professional",
          price: "€ 9.900",
          period: "/ Jahr",
          tagline: "Ideal für Studien mit bis zu 400 Teilnehmenden.",
          features: [
            "Multi-Studien-Setup",
            "Alle 14 Sensing-Module + ESM",
            "White-Label-App",
            "Research-Dashboard",
            "Erweiterte Exporte",
            "Priority-Support",
          ],
          overage: "Mehrnutzung möglich für 25 €/Teilnehmer",
          cta: "Professional wählen",
          ctaHref: "https://app.pulse-research.de",
          highlight: true,
          detail:
            "Professional ist der meistgewählte Plan für etablierte Forschungsprojekte. Sie erhalten Zugriff auf alle 14 Sensing-Module, das vollständige ESM/EMA-Modul, eine White-Label-App mit Ihrem Branding sowie das Research-Dashboard für Live-Monitoring. Mehrnutzung über 400 Teilnehmende hinaus ist flexibel möglich.",
        },
        {
          id: "research",
          name: "Research",
          price: "€ 14.900",
          period: "/ Jahr",
          tagline: "Ideal für Studien mit bis zu 1000 Teilnehmenden.",
          features: [
            "Individuelles Studien-Setup",
            "Individuelles Teilnehmer-Volumen",
            "Erweiterte Analytik",
            "API-Integrationen",
            "Compliance-Support",
            "Dediziertes SLA (Service Level Agreement)",
          ],
          cta: "Research wählen",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "Research richtet sich an große Forschungseinrichtungen, klinische Studien und Konsortien. Sie erhalten ein individuell konfigurierbares Studien-Setup, erweiterte Analytik direkt in der Plattform, API-Integrationen in bestehende Systeme sowie dediziertes Service Level Agreement und Compliance-Support.",
        },
        {
          id: "ema-only",
          name: "EMA-Only",
          price: "€ 2.900",
          period: "/ Jahr",
          tagline: "Ideal für Studien mit bis zu 400 Teilnehmenden.",
          features: [
            "Nur ESM / EMA-Befragungen",
            "Individuelle Fragebögen",
            "Geplante Prompts",
            "Teilnehmer-Verwaltung",
            "Response-Monitoring",
            "CSV-Datenexport",
          ],
          overage: "Mehrnutzung möglich für 10 €/Teilnehmer",
          cta: "EMA-Only wählen",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "EMA-Only ist der spezialisierte Plan für Studien, die ausschließlich auf Selbstberichten basieren. Sie konfigurieren individuelle Fragebögen, planen Prompt-Schemata und überwachen Responses in Echtzeit – für bis zu 400 Teilnehmende, flexibel skalierbar.",
        },
      ],
      advisorHeading: "Nicht sicher, welcher Plan passt?",
      advisorBody:
        "Buchen Sie ein 15-minütiges Beratungsgespräch. Wir helfen Ihnen, die richtige Konfiguration für Ihre Studie zu finden – kostenlos und unverbindlich.",
      advisorCta: "Beratungsgespräch buchen",
      advisorMailSubject: "Beratungsgespräch PULSE",
      faqHeading: "Häufige Fragen",
      faqs: [
        {
          q: "Was passiert bei mehr als 1000 Teilnehmenden?",
          a: "Für Studien mit über 1000 Teilnehmenden erstellen wir ein individuelles Angebot. Kontaktieren Sie uns für ein Custom Quote.",
        },
        {
          q: "Was bedeutet Mehrnutzung (Overage)?",
          a: "Die Pläne Professional und EMA-Only erlauben die Aufnahme zusätzlicher Teilnehmender über das jeweilige Kontingent hinaus – pro zusätzlichem Teilnehmer fallen 25 € (Professional) bzw. 10 € (EMA-Only) an.",
        },
        {
          q: "Was passiert nach Ablauf der Studie mit den Daten?",
          a: "Ihre Daten verbleiben 90 Tage nach Studienabschluss in PULSE und können vollständig exportiert werden. Danach werden sie DSGVO-konform gelöscht.",
        },
        {
          q: "Gibt es eine Testversion?",
          a: "Wir bieten auf Anfrage eine Demo-Instanz für bis zu 10 Teilnehmende an. Kontaktieren Sie uns für einen kostenlosen Testzugang.",
        },
      ],
    },
    ueberUnsPage: {
      eyebrow: "Über uns",
      heading: "Aus der Forschung. Für die Forschung.",
      body:
        "PULSE entsteht am 2CHUB, dem Center for Computation of Human Behavior. Wir sind ein unabhängiges Forschungsinstitut für mobile Studien, Experience Sampling und Passive Sensing. PULSE ist das Werkzeug, das wir selbst gebraucht hätten.",
      milestonesHeading: "Meilensteine",
      timeline: [
        { year: "xxxx", event: "Start von PhoneStudy: Grundlagenforschung zu mobilem Sensing an der LMU München – Ausgangspunkt für 2CHUB und PULSE." },
        { year: "2021", event: "Gründung des 2CHUB am Department Psychologie der LMU München." },
        { year: "2022", event: "Erste PULSE-Pilotstudien mit externen Forschungspartnern." },
        { year: "2023", event: "Launch der PULSE-Plattform mit ESM und Passive Sensing." },
        { year: "2024", event: "Erweiterung um Interventionsmodul und automatisierte Analyse." },
      ],
      chubHeading: "2CHUB",
      chubBody:
        "Das Center for Computation of Human Behavior (2CHUB) ist eine unabhängige Forschungseinrichtung am Department Psychologie der LMU München. Wir entwickeln Methoden, Infrastruktur und Werkzeuge für die mobile Verhaltensforschung.",
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
      heading: "Bereit zu erkunden, was PULSE für Ihre Organisation leisten kann?",
      subheading:
        "Wir freuen uns auf Forschungskooperationen, klinische Partnerschaften und strategische Anfragen.",
      email: "info@2chub.com",
      location: "München",
      cta: "Team kontaktieren",
    },
    footer: {
      legalName: "2chub – Center for Computation of Human Behavior",
      imprint: "Impressum",
      privacy: "Datenschutz",
      backLink: "Zurück",
      docs: "Docs",
      contact: "Kontakt",
    },
    marquee: [
      "Experience Sampling",
      "Passive Sensing",
      "Ecological Momentary Assessment",
      "Mobile Forschung",
      "Klinische Studien",
      "Verhaltenswissenschaft",
    ],
  },
  en: {
    nav: {
      methoden: "Methods",
      features: "Features & Pricing",
      ueber_uns: "About",
      login: "Login",
    },
    hero: {
      eyebrow: "A product by 2CHUB · LMU Munich",
      title: "Research platform\nfor mobile studies.",
      subtitle: "Built by researchers.",
      tagline:
        "PULSE is a dedicated research platform built for passive mobile sensing, digital phenotyping, and Ecological Momentary Assessment. It empowers research teams to capture authentic behavioral data in real-world contexts and translate that data into evidence-based insights that drive discovery.",
      primaryCta: "Compare Plans",
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
      subheading: "Three steps to a running study.",
      steps: [
        {
          label: "Configure study",
          description: "Set up your ESM protocol, sensing modules and intervention logic via dashboard – no coding required.",
        },
        {
          label: "Invite participants",
          description: "Send a link or QR code. The PULSE app guides participants through onboarding and consent.",
        },
        {
          label: "Gain insights",
          description: "Live dashboard, automated analyses and publication-ready exports – all in one platform.",
        },
      ],
      cta: "Configure Now",
    },
    methoden: {
      eyebrow: "Methods",
      heading: "From data collection to insight.",
      intro:
        "PULSE covers four research methods: active surveys in everyday life, automatic sensor data, digital interventions and automated analysis. All in one platform.",
      cta: "Configure your own study",
    },
    methodenPage: {
      platformTag: "Platform",
      platformHeading: "Everything you need for your study.",
      pillars: [
        {
          title: "Passive Mobile Sensing",
          desc: "Continuously capture smartphone sensor data in the background with minimal burden on participants.",
        },
        {
          title: "White-Label Study App",
          desc: "Customise the app for your study – from branding to content and workflows.",
        },
        {
          title: "Research Dashboard",
          desc: "Monitor studies, participants and data quality; track progress in real time.",
        },
        {
          title: "Data Export & API-Ready",
          desc: "Export data in standard formats or integrate into your systems via API.",
        },
        {
          title: "Privacy & Security by Design",
          desc: "Privacy by design, encryption, role-based access control and compliance.",
        },
      ],
      sensingHeading: "Passively capture behaviour. Continuously, contextually, unobtrusively.",
      sensingBody:
        "PULSE uses smartphone and wearable sensors to capture continuous everyday behaviour. Sensor profiles are configurable in a privacy-compliant way – with sampling rates, aggregation levels and granular consent modules.",
      sensingModulesHeading: "14 sensing modules across 5 categories",
      sensingModulesNote: "iOS and Android. Modularly activatable – depending on study design and consent.",
      sensingCategories: [
        {
          name: "Location & Mobility",
          modules: ["Location Tracking", "Pedometer", "Activity Tracking"],
        },
        {
          name: "Motion & Context",
          modules: ["Motion Sensor", "Ambient Sound & Light", "Battery Monitoring"],
        },
        {
          name: "Digital Behaviour",
          modules: ["Phone Call Events", "Screen Time & App Events", "PULSE Keyboard"],
        },
        {
          name: "Health & Wearables",
          modules: ["Apple Health / Health Connect", "Garmin Smartwatch Integration"],
        },
        {
          name: "Connectivity & Media",
          modules: ["Wi-Fi & Bluetooth", "Music Tracking", "Spotify History"],
        },
      ],
      sensingPrivacyHeading: "Privacy in passive sensing",
      sensingPrivacyBody:
        "Each sensor stream can be individually configured, pseudonymised and restricted at participant level. The following safeguards apply to every sensing module.",
      sensingPrivacyPoints: [
        "Communication data: metadata only (timestamp, duration) – no content.",
        "GPS: configurable resolution, reducible to 500 m accuracy.",
        "Audio: aggregated volume features only, no recordings.",
        "End-to-end encryption, pseudonymisation of all raw data.",
        "Granular consent module: participants can selectively enable individual data streams.",
      ],
      esmHeading: "Surveying in everyday life. Precise, context-sensitive, scientifically grounded.",
      esmBody:
        "PULSE supports Experience Sampling (ESM), Ecological Momentary Assessment (EMA) and Daily Diary designs in a configurable environment. You define triggers, item logic and sampling schema. PULSE handles delivery, compliance monitoring and data aggregation.",
      esmQaHeading: "Quality assurance during the field phase",
      esmQaBody:
        "PULSE logs in real time and provides researchers with a live dashboard. Reporting follows recommendations for intensive longitudinal studies.",
      esmQaItems: [
        "Response rate per participant and per prompt",
        "Latency between prompt and response",
        "Carelessness indicators",
        "Drop-out risk based on compliance trajectory patterns",
        "Researchers receive a live dashboard with recommendations for re-engagement messages in line with STROBE and CONSORT standards for longitudinal studies.",
      ],
      interventionsHeading: "Interventions that respond to the right moment.",
      interventionsBody:
        "PULSE enables digital interventions ranging from simple reminders to Just-in-Time Adaptive Interventions (JITAIs). You define triggers, content and randomisation logic. PULSE delivers and automatically logs adherence.",
      interventionTypesHeading: "Intervention types supported by PULSE",
      interventionTypes: [
        { label: "Push reminder", detail: "Brief reminder or call to action" },
        { label: "Micro-intervention", detail: "Guided short exercise (1 to 3 minutes)" },
        { label: "Educational content", detail: "Psychoeducational texts, graphics or short videos" },
        { label: "Feedback", detail: "Feedback based on personal data" },
        { label: "Self-monitoring prompt", detail: "Prompt for reflection without evaluation" },
      ],
      interventionStudyHeading: "Intervention research with controlled designs",
      studyDesigns: [
        { title: "Parallel-group RCT", desc: "Assignment to intervention and control group at study start." },
        { title: "Micro-Randomized Trial", desc: "Moment-level randomisation (e.g. trigger 50 % intervention, 50 % control)." },
        { title: "SMART Design", desc: "Multi-stage randomisation to optimise adaptive intervention strategies." },
        { title: "Crossover-Washout", desc: "Two conditions, configurable washout phase." },
      ],
      analysisHeading: "From raw data to insight. Automated and reproducible.",
      analysisBody:
        "PULSE integrates statistical analyses, machine-learning pipelines and interactive visualisations directly into the platform. You configure the analysis in parallel with the study design. PULSE delivers reproducible results and publication-ready exports.",
      computationsHeading: "What PULSE can compute",
      computations: [
        { title: "Descriptive statistics", desc: "Distributions, compliance metrics, missingness" },
        { title: "Multilevel models (MLM)", desc: "Within-between effects, random slopes, cross-level interactions" },
        { title: "Time-series analysis", desc: "Autocorrelation, trend, cycles, VAR models" },
        { title: "DSEM", desc: "Autoregressive processes, moment-level mediation" },
        { title: "Classification / Regression (ML)", desc: "Prediction of states from sensor features" },
      ],
      vizHeading: "Making data visible",
      vizBody: "PULSE generates interactive visualisations directly from study data.",
      visualizations: [
        { title: "Trajectory plots", desc: "Individual and aggregated trajectories over the study period" },
        { title: "Heatmaps", desc: "Time-of-day map for activity or affect variables" },
        { title: "Network graphs", desc: "Symptom or affect matrices at individual and group level" },
        { title: "Compliance dashboards", desc: "Response rates, sensor configurability, drop-out trajectories" },
      ],
      interventionsTag: "Interventions",
      analysisTag: "Analysis",
      exportHeading: "Your data, your tools",
      exportBody:
        "Every analysis run is automatically documented – timestamps, parameters, data state and a diff view against previous runs.",
      exportFormatsNote: "All data is optimised for modern statistical software and ready to use immediately.",
    },
    featuresPage: {
      eyebrow: "Features & Pricing",
      heading: "Choose the plan that fits your study.",
      subheading:
        "Four plans for different study sizes and requirements. All prices excluding VAT.",
      badge: "Popular",
      close: "Close",
      overflowNote:
        "For studies with more than 1,000 participants, contact us for a custom quote.",
      plans: [
        {
          id: "explore",
          name: "Explore",
          price: "€ 2,900",
          period: "/ yr",
          tagline: "Ideal for studies with up to 100 participants.",
          features: [
            "Single-study setup",
            "Core sensing modules",
            "Full ESM / EMA",
            "Standard dashboard",
            "CSV data export",
            "Email support",
          ],
          cta: "Choose Explore",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "Explore is the entry plan for smaller studies and pilot projects. You get the full ESM/EMA survey module and core sensing modules for up to 100 participants, including a standard dashboard and CSV export.",
        },
        {
          id: "professional",
          name: "Professional",
          price: "€ 9,900",
          period: "/ yr",
          tagline: "Ideal for studies with up to 400 participants.",
          features: [
            "Multi-study setup",
            "All 14 sensing modules + ESM",
            "White-label app",
            "Research dashboard",
            "Extended exports",
            "Priority support",
          ],
          overage: "Overage available at €25/participant",
          cta: "Choose Professional",
          ctaHref: "https://app.pulse-research.de",
          highlight: true,
          detail:
            "Professional is the most popular plan for established research projects. You get access to all 14 sensing modules, the full ESM/EMA module, a white-label app with your branding and a research dashboard for live monitoring. Overage above 400 participants is flexibly available.",
        },
        {
          id: "research",
          name: "Research",
          price: "€ 14,900",
          period: "/ yr",
          tagline: "Ideal for studies with up to 1,000 participants.",
          features: [
            "Custom study setup",
            "Custom participant volume",
            "Advanced analytics",
            "API integrations",
            "Compliance support",
            "Dedicated SLA (Service Level Agreement)",
          ],
          cta: "Choose Research",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "Research is designed for large research institutions, clinical trials and consortia. You get a fully customisable study setup, advanced analytics directly in the platform, API integrations into existing systems, and a dedicated service level agreement with compliance support.",
        },
        {
          id: "ema-only",
          name: "EMA-Only",
          price: "€ 2,900",
          period: "/ yr",
          tagline: "Ideal for studies with up to 400 participants.",
          features: [
            "ESM / EMA surveys only",
            "Custom questionnaires",
            "Scheduled prompts",
            "Participant management",
            "Response monitoring",
            "CSV data export",
          ],
          overage: "Overage available at €10/participant",
          cta: "Choose EMA-Only",
          ctaHref: "https://app.pulse-research.de",
          detail:
            "EMA-Only is the specialised plan for studies based exclusively on self-reports. You configure custom questionnaires, schedule prompt schemas and monitor responses in real time – for up to 400 participants, flexibly scalable.",
        },
      ],
      advisorHeading: "Not sure which plan fits?",
      advisorBody:
        "Book a 15-minute consultation. We'll help you find the right configuration for your study – free and non-binding.",
      advisorCta: "Book a consultation",
      advisorMailSubject: "Consultation PULSE",
      faqHeading: "Frequently asked questions",
      faqs: [
        {
          q: "What happens with more than 1,000 participants?",
          a: "For studies with over 1,000 participants we create a custom quote. Contact us for details.",
        },
        {
          q: "What does overage mean?",
          a: "The Professional and EMA-Only plans allow additional participants beyond the included quota – at €25 (Professional) or €10 (EMA-Only) per additional participant.",
        },
        {
          q: "What happens to the data after the study ends?",
          a: "Your data remains in PULSE for 90 days after study completion and can be fully exported. It is then deleted in accordance with GDPR.",
        },
        {
          q: "Is there a trial version?",
          a: "We offer a demo instance for up to 10 participants on request. Contact us for free trial access.",
        },
      ],
    },
    ueberUnsPage: {
      eyebrow: "About us",
      heading: "From research. For research.",
      body:
        "PULSE is developed at the 2CHUB, the Center for Computation of Human Behavior. We are an independent research institute for mobile studies, experience sampling and passive sensing. PULSE is the tool we wished we'd had.",
      milestonesHeading: "Milestones",
      timeline: [
        { year: "xxxx", event: "Launch of PhoneStudy: foundational research on mobile sensing at LMU Munich – the origin of 2CHUB and PULSE." },
        { year: "2021", event: "Foundation of 2CHUB at the Department of Psychology, LMU Munich." },
        { year: "2022", event: "First PULSE pilot studies with external research partners." },
        { year: "2023", event: "Launch of the PULSE platform with ESM and Passive Sensing." },
        { year: "2024", event: "Extension with the intervention module and automated analysis." },
      ],
      chubHeading: "2CHUB",
      chubBody:
        "The Center for Computation of Human Behavior (2CHUB) is an independent research institution at the Department of Psychology, LMU Munich. We develop methods, infrastructure and tools for mobile behavioural research.",
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
      heading: "Ready to explore what PULSE can do for your organization?",
      subheading:
        "We welcome research collaborations, clinical partnerships, and strategic inquiries.",
      email: "info@2chub.com",
      location: "Munich, Germany",
      cta: "Contact Our Team",
    },
    footer: {
      legalName: "2chub – Center for Computation of Human Behavior",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      backLink: "Back",
      docs: "Docs",
      contact: "Contact",
    },
    marquee: [
      "Experience Sampling",
      "Passive Sensing",
      "Ecological Momentary Assessment",
      "Mobile Research",
      "Clinical Studies",
      "Behavioural Science",
    ],
  },
};
