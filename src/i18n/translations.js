// Auto-extracted translation table from the original PULSE/2CHuB website.
// DE + EN content for the entire site. Edit text here; structure is consumed by
// src/lib/i18n.jsx.

export const translations = {
  de:{
    nav:{
      research:"Forschung",
      platform:"PULSE Environment",
      team:"Team",
      contact:"Kontakt",
      methods:"Methoden",
      applications:"Anwendungen",
      pricing:"Preise",
      about:"Über uns",
      login:"Login",
      allMethods:"Alle Methoden",
      seeApp:"Die App ansehen",
      publications:"Publikationen",
      pulseEnvironment:{
        items:[
          {label:"Plattform",href:"/plattform",description:"Studienkonsole, Pipeline und Datenmodell"},
          {label:"Mobile App",href:"/app",description:"Native iOS/Android-App für Teilnehmende"},
          // {label:"Methoden",href:"/methoden",description:"ESM, Sensing, Interventionen, Auswertung"},
          {label:"Features",href:"/features",description:"Fragetypen und Sensorik im Überblick"}
        ]
      }
    },
    hero:{
      eyebrow:"Center for Computation of Human Behavior",
      title:`Die Plattform für smartphonebasierte
Verhaltensforschung`,
      subtitle:"Experience Sampling, passive Sensordatenerfassung und adaptive Interventionen in einer durchgängigen Studieninfrastruktur.",
      tagline:"Die Plattform geht auf PhoneStudy (2014) zurück und wird heute am Center for Computation of Human Behavior als Software-Infrastruktur für mobile Verhaltensforschung weitergeführt. Studienteams planen, erheben und analysieren ihre Daten in einem gemeinsamen System.",
      primaryCta:"Plattform ansehen",
      secondaryCta:"Demo vereinbaren"
    },
    team:{
      eyebrow:"Das Team",
      heading:"Wer hinter 2CHuB steht",
      members:[{
        name:"Prof. Dr. Markus Bühner",
        role:"Mitgründer, Psychometrik und Methodenlehre",
        background:"Professor für Psychologische Methodenlehre und Diagnostik. Forschungsschwerpunkte: Psychometrie, Intelligenztheorien, digitale Assessments.",
        email:"info@2chub.com"
      },
      {
        name:"Dr. Yannik Terhorst",
        role:"Mitgründer, Klinische Psychologie und Digital Health",
        background:"Forscher im Bereich Klinische Psychologie und Psychotherapie. Fokus auf digitale Interventionen, Mobile Health und Ecological Momentary Assessment.",
        email:"info@2chub.com"
      },
      {
        name:"Leon Paletta",
        role:"Mitgründer, Plattform und Data",
        background:"M.Sc. Robotics & AI, B.Sc. Engineering Science. Fokus auf Plattformarchitektur, Data Engineering und Produkt."
      },
      {
        name:"Till-Ole Lohse",
        role:"Mitgründer, Engineering",
        background:"B.Sc. Computer Science, B.Sc. Management. Verantwortlich für Systemarchitektur, Infrastruktur und Hardware-Integration."
      }]
    },
    contact:{
      heading:"Unklarheiten bei der Förderung?",
      subheading:"Wir unterstützen Sie dabei, PULSE in Förderanträgen nachvollziehbar darzustellen – ob für DFG, BMBF, EU-Förderprogramme oder Industrieprojekte. Methoden-Bausteine, Kostenkalkulationen und Referenzen aus laufenden Studien stellen wir auf Anfrage zur Verfügung.",
      email:"info@2chub.com",
      location:"München",
      cta:"Antragsunterlagen anfordern",
      mailSubject:"Antragsunterlagen PULSE"
    },
    footer:{
      legalName:"2CHuB GmbH · Center for Computation of Human Behavior",
      imprint:"Impressum",
      privacy:"Datenschutz",
      backLink:"Zurück",
      status:{
        none:"Status",
        minor:"Kleinere Störung",
        major:"Störung",
        critical:"Kritische Störung",
        maintenance:"Wartung läuft",
        unknown:"Status"
      }
    },
    methods:{
      eyebrow:"Methoden",
      title:"Methoden mobiler Verhaltensforschung",
      intro:"PULSE integriert vier Methoden mobiler Verhaltensforschung in eine konsistente Studieninfrastruktur: Experience Sampling, passives Sensing, adaptive Interventionen und reproduzierbare Auswertung. Die Methoden können isoliert oder in Kombination eingesetzt werden, unter denselben Garantien für Datenschutz und Reproduzierbarkeit.",
      items:[{
        number:"01",
        slug:"befragen",
        title:"Befragen",
        shortDesc:"ESM / EMA",
        cardDesc:"Kurze, kontextsensitive Fragen direkt im Alltag. Branching, Quoten, multilingual.",
        pageTitle:"Befragen: Experience Sampling",
        pageIntro:"Kurze, kontextsensitive Fragebögen direkt im Alltag. Gedanken, Emotionen und Erfahrungen erfassen, ohne auf retrospektive Erinnerung angewiesen zu sein.",
        bullets:["Wiederholte Mikro-Befragungen über Tage, Wochen oder Monate.",
        "Trigger nach Zeit, Kontext, Sensor-Signal oder Studienlogik.",
        "Adaptive Item-Auswahl je nach vorherigen Antworten."],
        rich:{
          whatIsIt:{
            eyebrow:"Was & Warum",
            title:"Was ESM und EMA sind",
            body:"Ecological Momentary Assessment (EMA) und Experience Sampling (ESM) sind seit den 1980er-Jahren etablierte Verfahren der Verhaltenswissenschaft zur Erfassung von Erleben und Verhalten in Echtzeit. Statt eines retrospektiven Wochenfragebogens werden mehrere kurze Stichproben pro Tag erhoben, typischerweise über Tage, Wochen oder Monate.",
            keyPoints:[{
              number:"01",
              title:"Recall-Bias minimal",
              description:"Erleben wird im Moment erfasst, nicht retrospektiv rekonstruiert."
            },
            {
              number:"02",
              title:"Hohe ökologische Validität",
              description:"Daten entstehen im Alltag der Teilnehmenden, nicht im Labor."
            },
            {
              number:"03",
              title:"Für Längsschnittdesigns geeignet",
              description:"Innersubjektvariabilität, Zeitreihen, Dynamiken werden sichtbar."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"Ablauf in PULSE",
            body:"Sie definieren Items, Sampling-Logik und Trigger im Admin-Panel. Den Rest übernimmt die Plattform.",
            steps:[{
              number:"01",
              title:"Items konfigurieren",
              description:"Eigene Items oder validierte Skalen importieren. Branching, Randomisierung, Quoten, multilingual."
            },
            {
              number:"02",
              title:"Trigger definieren",
              description:"Zeitbasiert (z. B. 6× täglich in zufälligen Slots), eventbasiert (Standortwechsel) oder kontextabhängig (nur bei aktiver Nutzung)."
            },
            {
              number:"03",
              title:"App zeigt Befragungen an",
              description:"Native iOS- und Android-App. Offline-fähig, lokale Speicherung, Energiemanagement."
            },
            {
              number:"04",
              title:"Antworten landen verschlüsselt",
              description:"Direkt in der Studienumgebung, pseudonymisiert und audit-loggbar, optional live im Dashboard."
            }],
            schemaEyebrow:"Was Sie als Datensatz bekommen",
            schemaIntro:"Sauber strukturiert, dokumentiert, sofort analysefähig.",
            schemaLabel:"Schema · ESM / EMA",
            schemaRows:[{
              key:"participant_id",
              value:"p_034 · pseudonymisiert"
            },
            {
              key:"study_wave",
              value:"wave_2 · day_14"
            },
            {
              key:"trigger_type",
              value:"time_random · 16:42"
            },
            {
              key:"stress_now",
              value:"5 / 7"
            },
            {
              key:"context_location",
              value:"home"
            },
            {
              key:"response_latency_s",
              value:"23.4"
            },
            {
              key:"schema_version",
              value:"esm_v1.3.0"
            }]
          },
          useCases:{
            eyebrow:"Anwendungsfälle",
            title:"Untersuchungsbeispiele",
            cases:[{
              tag:"Klinische Psychologie",
              question:"Wie variieren depressive Symptome zwischen Vormittag und Abend in einer Therapiephase?"
            },
            {
              tag:"Stress & Erholung",
              question:"Welche Alltagssituationen lösen akuten Stress aus und wie schnell folgt Erholung?"
            },
            {
              tag:"Substanzkonsum",
              question:"Welche Trigger gehen Konsumereignissen bei Personen mit Alkoholabhängigkeit voraus?"
            },
            {
              tag:"Bildung",
              question:"Wie hängt momentane Konzentration mit Schlafqualität der Vornacht zusammen?"
            }]
          },
          pulseDifference:{
            eyebrow:"Methodische Tiefe",
            title:"Über die Item-Engine hinaus",
            body:"PULSE versteht Experience Sampling als Teil einer durchgängigen Forschungspipeline. Item-Konfiguration, Trigger-Logik, Auslieferung, Compliance-Monitoring und Auswertung sind methodisch konsistent integriert.",
            checks:["Validierte Skalen aus klinischer Forschung als Vorlagen",
            "Echtzeit-Compliance-Monitoring pro Teilnehmer:in im Dashboard",
            "Drop-out-Detection mit automatisierter Re-Engagement-Logik",
            "Automatische Verknüpfung mit Passive-Sensing-Kontext",
            "Reproduzierbare Item-Versionierung pro Studie"]
          },
          catalog:{
            eyebrow:"Item-Typen",
            title:"Zwölf Item-Typen in einem Editor",
            body:"Drag-and-Drop im Studio. Branching, Computation und kontextsensitive Trigger inklusive.",
            items:[{
              name:"Single-Choice",
              description:"Klassische Einfachauswahl"
            },
            {
              name:"Multiple-Choice",
              description:"Mehrere Optionen gleichzeitig"
            },
            {
              name:"Likert-Skala",
              description:"Granularität frei wählbar"
            },
            {
              name:"Slider",
              description:"Mit optionalem Anker der letzten Antwort"
            },
            {
              name:"Continuous Line",
              description:"Intensitätsverläufe einzeichnen"
            },
            {
              name:"Freitext",
              description:"Kurz oder lang, mit Längenlimit"
            },
            {
              name:"Voice Memo",
              description:"Audio-Antworten mit Transkription"
            },
            {
              name:"Foto / Bild",
              description:"Probandenfoto direkt im Item"
            },
            {
              name:"Video",
              description:"Kurze Video-Clips als Antwort"
            },
            {
              name:"Matrix",
              description:"Zweidimensionale Anordnung, etwa als Mood-Map"
            },
            {
              name:"Conditional Logic",
              description:"Verzweigungen je nach Antwort"
            },
            {
              name:"Computation",
              description:"Werte aus Vorantworten on-device berechnen"
            }]
          },
          architectureCallout:{
            eyebrow:"Architektur",
            title:"Wie Items zu Antworten werden",
            body:"Die Plattform-Seite beschreibt im Detail das Zusammenspiel von Capture, Process und Analyse, einschließlich Live-Event-Log.",
            cta:"Plattform-Architektur"
          }
        }
      },
      {
        number:"02",
        slug:"beobachten",
        title:"Beobachten",
        shortDesc:"Passive Sensing",
        cardDesc:"Bewegung, Standort, Aktivität, Schlaf und Bildschirmzeit, erhoben über Smartphone und Wearable.",
        pageTitle:"Beobachten: Passive Sensing",
        pageIntro:"Bewegung, Standort, Aktivität, Kommunikation, Medienkonsum und Bildschirmzeit: hochfrequente, anonymisierte Verhaltensdaten direkt vom Smartphone.",
        bullets:["Konfigurierbare Sensorik je Studie und Teilnehmer:in.",
        "Granulare Einwilligung pro Datenkategorie.",
        "Edge-Aggregation reduziert Datenvolumen vor dem Upload."],
        rich:{
          whatIsIt:{
            eyebrow:"Was & Warum",
            title:"Was Passive Sensing umfasst",
            body:"Smartphones und Wearables sind hochauflösende Messinstrumente, deren Nutzung in der Verhaltensforschung bislang an fehlender Infrastruktur scheitert. PULSE adressiert diese Lücke durch eine granulare, transparente Erhebung mit kategoriespezifischer Einwilligung pro Sensor.",
            keyPoints:[{
              number:"01",
              title:"Niedrigschwellig",
              description:"Keine zusätzlichen Geräte, kein zusätzlicher Aufwand für Teilnehmende."
            },
            {
              number:"02",
              title:"Hohe Datendichte",
              description:"Tausende Datenpunkte pro Person und Tag bieten objektive Marker ergänzend zur Selbstauskunft."
            },
            {
              number:"03",
              title:"Datenschutzorientiert",
              description:"Granulare Einwilligung, lokale Vorverarbeitung, keine Inhaltserfassung."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"Vom Sensor zum verwertbaren Feature",
            body:"PULSE liefert keine unstrukturierten Rohdatenexporte. Sie bekommen direkt analysefertige Verhaltensfeatures.",
            steps:[{
              number:"01",
              title:"Sensorik erfassen",
              description:"GPS, Bewegungssensoren, Schritte, Bildschirmzeit, Schlaf via Wearable, Bluetooth-Proximity."
            },
            {
              number:"02",
              title:"Lokal vorverarbeiten",
              description:"Cleaning, Aggregation und Privacy-Filter laufen on-device, bevor Daten überhaupt das Gerät verlassen."
            },
            {
              number:"03",
              title:"Features berechnen",
              description:"Mobilitätsradius, Anzahl besuchter Orte, Sleep-Onset, Step-Count und Bildschirmpattern, berechnet nach validierten Algorithmen."
            },
            {
              number:"04",
              title:"Bereitstellen",
              description:"Verschlüsselt in der EU, pseudonymisiert, mit dokumentierter Schema-Version."
            }],
            schemaEyebrow:"Beispiel: ein Tag im Datensatz",
            schemaIntro:"Pro Person und Tag eine kompakte Feature-Zeile, auf Wunsch zusätzlich die Rohzeitreihe.",
            schemaLabel:"Schema · Passive Sensing",
            schemaRows:[{
              key:"participant_id",
              value:"p_034"
            },
            {
              key:"date",
              value:"2026-04-22"
            },
            {
              key:"mobility_radius_km",
              value:"3.8"
            },
            {
              key:"places_visited",
              value:"4"
            },
            {
              key:"time_at_home_min",
              value:"612"
            },
            {
              key:"steps",
              value:"7341"
            },
            {
              key:"sleep_onset",
              value:"23:48"
            },
            {
              key:"screen_minutes",
              value:"184"
            },
            {
              key:"bedtime_use_min",
              value:"22"
            }]
          },
          useCases:{
            eyebrow:"Anwendungsfälle",
            title:"Messbare Fragestellungen",
            cases:[{
              tag:"Mobilität",
              question:"Schrumpft der Aktionsradius bei Personen mit depressiver Episode?"
            },
            {
              tag:"Schlaf",
              question:"Wie verschiebt sich die Schlafonset-Zeit über eine 12-Wochen-Studie?"
            },
            {
              tag:"Soziale Interaktion",
              question:"Korrelieren Bluetooth-Proximity-Cluster mit selbstberichteter Einsamkeit?"
            },
            {
              tag:"Digitales Verhalten",
              question:"Wie verändert sich Bedtime-Use im Vorfeld klinischer Symptomschübe?"
            }]
          },
          pulseDifference:{
            eyebrow:"Forschungsfähige Sensorpipeline",
            title:"Validierte Features statt Roh-Zeitstempel",
            body:"PULSE liefert keine unstrukturierten Sensorströme, sondern dokumentierte Verhaltensfeatures auf validierten Algorithmen. Die Auswertung beginnt mit publikationsreifen Variablen.",
            checks:["Pre-processed Features statt unstrukturierten Rohdatenexporten",
            "Validierte Algorithmen aus peer-reviewter Forschung",
            "On-device Privacy-Filter vor Upload",
            "Transparenter Sensor-Toggle für Teilnehmende",
            "Wearable-Integration (Apple Health, Garmin, WHOOP, Oura, Fitbit)"]
          },
          catalog:{
            eyebrow:"Sensoren & Wearables",
            title:"Smartphone und Wearable in einer Pipeline",
            body:"Technisch möglicher Sensorumfang, konfigurierbar pro Studie und granular einwilligbar pro Sensor.",
            items:[{
              name:"GPS / Standort",
              description:"Mobilitätsprofile, Heim-Aufenthalt, besuchte Orte"
            },
            {
              name:"Accelerometer",
              description:"Bewegungsenergie und Aktivitätserkennung"
            },
            {
              name:"Schritte",
              description:"Pedometer-Integration, robust gegen Drift"
            },
            {
              name:"Bildschirm-Events",
              description:"Screen on/off, App-Wechsel, Sessions"
            },
            {
              name:"Bildschirmzeit",
              description:"Bedtime-Use, App-Kategorien, Tagesdauer"
            },
            {
              name:"Umgebungslicht",
              description:"Tageslicht-Exposition, Indoor/Outdoor"
            },
            {
              name:"Mikrofon (Lautstärke)",
              description:"Umgebungsgeräusch ohne Inhaltserfassung"
            },
            {
              name:"Apple Health",
              description:"Apple Watch, HRV, Schlaf, Aktivität"
            },
            {
              name:"WHOOP",
              description:"Strain, Recovery, Schlafphasen"
            },
            {
              name:"Oura Ring",
              description:"Schlaf, Temperatur, Readiness"
            },
            {
              name:"Garmin",
              description:"Rohdaten oder Aggregator-Bridge"
            },
            {
              name:"Fitbit",
              description:"Über Aggregator: Aktivität und Schlaf"
            }]
          },
          architectureCallout:{
            eyebrow:"Architektur",
            title:"Wo Sensorströme zu Features werden",
            body:"Die Plattform-Seite beschreibt im Detail das Zusammenspiel von Capture, Process und Analyse, einschließlich Live-Event-Log.",
            cta:"Plattform-Architektur"
          }
        }
      },
      {
        number:"03",
        slug:"intervenieren",
        title:"Intervenieren",
        shortDesc:"JITAI",
        cardDesc:"Just-in-Time Adaptive Interventions im richtigen Moment, personalisiert und wirksam.",
        pageTitle:"Intervenieren: Just-in-Time Adaptive Interventions",
        pageIntro:"Just-in-Time Adaptive Interventions verbinden Befragung, Sensorik und Inhalt in einer kohärenten Logik, sodass eine Mikro-Intervention dann zugestellt wird, wenn ein definierter Kontext oder Bedarf vorliegt.",
        bullets:["Trigger-Logik basierend auf Sensorik + Kontext + Studienarm.",
        "Mikro-Interventionen, die im Alltag verankert sind.",
        "Effekte werden im selben Studienlauf gemessen."],
        rich:{
          whatIsIt:{
            eyebrow:"Was & Warum",
            title:"Was eine JITAI ist",
            body:"JITAIs sind kontextsensitive digitale Interventionen, die nicht starr nach Zeitplan ausgespielt werden, sondern in dem Moment, in dem ein konkreter Zustand und eine konkrete Bedürfnislage vorliegen. Forschungsstandard nach Nahum-Shani et al. (2018).",
            keyPoints:[{
              number:"01",
              title:"Kontextsensitiv",
              description:"Trigger orientieren sich an Stimmung, Kontext und Verhalten, nicht an einer fixen Uhrzeit."
            },
            {
              number:"02",
              title:"Adaptiv",
              description:"Lerneffekte und Dosierung werden in der Logik berücksichtigt."
            },
            {
              number:"03",
              title:"Messbar",
              description:"Intervention und Wirkung sind Teil derselben Datenstruktur."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"Wie eine JITAI in PULSE entsteht",
            body:"Sie konfigurieren Trigger, Inhalt und Dosis-Regeln. Die Plattform sorgt für Auslieferung und Logging.",
            steps:[{
              number:"01",
              title:"Trigger definieren",
              description:"Kombiniert aus ESM-Antworten, Sensorik-Werten, Tageszeit, Kontext."
            },
            {
              number:"02",
              title:"Inhalte konfigurieren",
              description:"Mikro-Interventionen, Push, In-App-Inhalte, Audio. Validierte Inhaltsvorlagen verfügbar."
            },
            {
              number:"03",
              title:"Dosis kontrollieren",
              description:"Cooldowns, Tages-Caps und Lerneffekte verhindern eine Überlastung der Teilnehmenden."
            },
            {
              number:"04",
              title:"Wirkung messen",
              description:"Pre- und Post-EMA sowie Verhaltensfeatures erlauben eine unmittelbare Wirkungserfassung."
            }],
            schemaEyebrow:"Eine ausgelöste Intervention im Datensatz",
            schemaIntro:"Protokollierte Felder, die jede Intervention reproduzierbar dokumentieren.",
            schemaLabel:"Schema · JITAI",
            schemaRows:[{
              key:"intervention_id",
              value:"stress_breath_v2"
            },
            {
              key:"trigger_rule",
              value:"stress>=5 AND context=work"
            },
            {
              key:"fired_at",
              value:"2026-04-22 14:18:02"
            },
            {
              key:"delivered",
              value:"true"
            },
            {
              key:"engagement",
              value:"completed"
            },
            {
              key:"post_ema_stress",
              value:"3 / 7"
            },
            {
              key:"delta",
              value:"-2"
            },
            {
              key:"schema_version",
              value:"jitai_v0.9.4"
            }]
          },
          useCases:{
            eyebrow:"Anwendungsfälle",
            title:"Beispiele aus der Praxis",
            cases:[{
              tag:"Stressregulation",
              question:"Atemübung, sobald selbstberichteter Stress ≥ 5/7 und Arbeitskontext erkannt."
            },
            {
              tag:"Schlaf",
              question:"Wind-Down-Reminder, wenn Bildschirmzeit nach 22:30 anhält."
            },
            {
              tag:"Aktivität",
              question:"Spaziergang vorschlagen bei vier Stunden ohne nennenswerte Bewegung."
            },
            {
              tag:"Adhärenz",
              question:"Reflexionsnachricht 30 Min vor üblicher Therapietätigkeit."
            }]
          },
          pulseDifference:{
            eyebrow:"Integrierte Wirkungsmessung",
            title:"Intervention und Ergebnismaße in einer Datenstruktur",
            body:"PULSE protokolliert ausgelöste Interventionen und deren Wirkung im selben reproduzierbaren Datensatz. Effekte lassen sich dadurch kontextspezifisch quantifizieren, ohne separate Daten-Joins.",
            checks:["Trigger über Sensorik und Befragung kombinierbar",
            "Inhaltsvorlagen aus klinischer Forschung",
            "Dosis-Logik mit Lerneffekten",
            "Wirkungsmessung integriert",
            "Vollständige Audit-Logs für klinische Studien"]
          },
          architectureCallout:{
            eyebrow:"Architektur",
            title:"Wo Trigger zu Wirkung werden",
            body:"Die Plattform-Seite beschreibt im Detail das Zusammenspiel von Trigger-Engine, Inhaltsbibliothek und Wirkungsmessung im Studio.",
            cta:"Plattform-Architektur"
          }
        }
      },
      {
        number:"04",
        slug:"auswerten",
        title:"Auswerten",
        shortDesc:"Pre-processed",
        cardDesc:"Vorverarbeitete Features, automatische Berichtsentwürfe (LLM-gestützt, direkt aus Ihren Feature-Daten), Exporte für R, SPSS, Python.",
        pageTitle:`Auswerten:
analysefertige Daten`,
        pageIntro:"Vorverarbeitete Features, LLM-gestützte Berichtsentwürfe und reproduzierbare Pipelines. Studienteams erhalten keinen Zeitstempel-Dump, sondern validierte Verhaltensfeatures, dokumentierte Schemas und sofort analysefähige Datensätze.",
        bullets:["Automatische Vor-Aggregation: stündlich, täglich, sitzungsbasiert.",
        "Feature-Bibliotheken für Bewegung, Schlaf, Kommunikation, App-Use.",
        "Export als CSV, Parquet oder direkt nach R / Python."],
        rich:{
          whatIsIt:{
            eyebrow:"Was & Warum",
            title:"Warum Vorverarbeitung wichtig ist",
            body:"Rohe Sensorströme stellen keinen Datensatz dar, sondern eine Aufbereitungsaufgabe. PULSE übergibt diese Aufgabe nicht an die Studienteams, sondern liefert validierte Features, dokumentierte Schemas und reproduzierbare Hashes. Die wissenschaftliche Arbeit beginnt damit bei der Hypothese, nicht bei der Datenbereinigung.",
            keyPoints:[{
              number:"01",
              title:"Schneller zur Hypothesenprüfung",
              description:"Wochenlange Datenbereinigung entfällt."
            },
            {
              number:"02",
              title:"Methodisch sauber",
              description:"Validierte, peer-reviewte und versionierte Algorithmen ersetzen ad-hoc geschriebene Skripte."
            },
            {
              number:"03",
              title:"Reproduzierbar",
              description:"Schema-Hash macht jede Auswertung Monate später exakt rekonstruierbar."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"Von Rohdaten zu analysefertigen Features",
            body:"Vier Schritte, jeder dokumentiert und versioniert.",
            steps:[{
              number:"01",
              title:"Cleaning",
              description:"Lücken, Sensor-Drift, technische Artefakte werden nach festen Regeln behandelt."
            },
            {
              number:"02",
              title:"Feature-Extraktion",
              description:"Validierte Algorithmen erzeugen Verhaltensfeatures auf Tages-, Wochen- und Sitzungsebene."
            },
            {
              number:"03",
              title:"Aggregation & Export",
              description:"CSV, Parquet, RData, JSON. Schema dokumentiert. Hash pro Datensatz."
            },
            {
              number:"04",
              title:"LLM-gestützter Berichtsentwurf (optional)",
              description:"Automatischer Vorbericht aus den Features, einschließlich eines zitierfähigen Methodikteils."
            }],
            schemaEyebrow:"Schema-Snippet eines Exports",
            schemaIntro:"Auszug aus einem typischen Paket, in dem jede Spalte dokumentiert und jede Version eingefroren ist.",
            schemaLabel:"Schema · Pre-processed",
            schemaRows:[{
              key:"dataset_hash",
              value:"f3a8…d201"
            },
            {
              key:"feature_set",
              value:"core_v2.1"
            },
            {
              key:"n_participants",
              value:"184"
            },
            {
              key:"n_days",
              value:"27"
            },
            {
              key:"rows_total",
              value:"4 968"
            },
            {
              key:"schema_doc",
              value:"/schemas/core_v2.1.md"
            },
            {
              key:"export_format",
              value:"Parquet · CSV · RData"
            }]
          },
          useCases:{
            eyebrow:"Anwendungsfälle",
            title:"Mögliche Analyseworkflows",
            cases:[{
              tag:"R / RStudio",
              question:"Mehrebenenmodell auf Tages-Features mit Person-Random-Effects."
            },
            {
              tag:"Python / Jupyter",
              question:"Cluster-Analyse auf Mobilitätsprofilen für Subgruppen."
            },
            {
              tag:"SPSS",
              question:"Korrelations- und Regressionsanalysen für klinische Reviews."
            },
            {
              tag:"Berichte",
              question:"LLM-generierter Vorbericht mit Methoden- und Ergebnisabschnitt."
            }]
          },
          pulseDifference:{
            eyebrow:"Reproduzierbarer Export",
            title:"Dokumentierte Feature-Sets statt Roh-Streams",
            body:"PULSE exportiert vorverarbeitete Feature-Sets in standardisierten Formaten mit dokumentiertem Schema und Datensatz-Hash. Die Auswertung beginnt mit publikationsreifen Variablen statt mit Datenbereinigung.",
            checks:["Pre-processed Features in einem konsistenten Schema",
            "Automatische Versionierung pro Studie und Feature-Set",
            "Reproduzierbarkeit über dokumentierte Schema-Hashes",
            "LLM-Berichte als methodische Erstentwürfe",
            "Direkte API-Anbindung für Forschungs-Pipelines"]
          },
          quote:{
            eyebrow:"Aus einer laufenden Studie",
            text:"Vor PULSE haben wir Wochen damit verbracht, Sensor-Streams aufzubereiten, bevor überhaupt eine Hypothese geprüft werden konnte. Jetzt setzt die Analyse direkt auf validierten Features mit dokumentiertem Schema auf, sodass methodische Arbeit dort beginnt, wo sie hingehört: an der Forschungsfrage.",
            author:"Studienleitung",
            affiliation:"Klinisch-psychologische Multi-Site-Studie"
          },
          architectureCallout:{
            eyebrow:"Live im Studio",
            title:"Wie Daten zu Erkenntnis werden",
            body:"Der Live-Event-Log auf der Plattform-Page zeigt jeden Schritt von der ESM-Antwort bis zum LLM-Bericht.",
            cta:"Plattform · Live Studio"
          }
        }
      }],
      overviewCta:"Alle Methoden ansehen",
      appCta:"Die PULSE App ansehen",
      backToMethods:"Zurück zur Methoden-Übersicht",
      placeholder:"Detaillierte Inhalte zu dieser Methode folgen. Fragen erreichen uns jederzeit unter info@2chub.com.",
      cardCta:"Methode öffnen",
      flowStart:"Rohsignal · Moment im Alltag",
      flowEnd:"Publikationsreifer Datensatz",
      exploreEyebrow:"Weiter erkunden",
      finalDemo:{
        eyebrow:"Demo vereinbaren",
        title:"Diese Methode in einer realen Studie ansehen",
        body:"Eine 30-minütige Demo zeigt den Workflow vom Studien-Setup bis zum reproduzierbaren Datensatz, anhand von Beispielen aus laufenden Forschungsprojekten.",
        primary:"Demo vereinbaren",
        secondary:"Preise ansehen"
      }
    },
    plattform:{
      eyebrow:"Plattform",
      title:"Studieninfrastruktur und Architektur",
      subtitle:"Native mobile Anwendung, Studio-Cockpit, validierte Sensorpipelines und reproduzierbare Datenexporte.",
      intro:"PULSE bündelt mobile Datenerhebung, on-device Vorverarbeitung, Studienkonfiguration und Auswertung in einer einheitlichen Plattform. Studienteams konfigurieren ihre Erhebungen im PULSE Admin Panel, statt sie zu programmieren. Teilnehmende nutzen eine zurückhaltende, transparente Anwendung. Daten werden DSGVO-konform und mit dokumentierter Schema-Version verarbeitet, vom ersten Pilotprojekt bis zur Multi-Site-Studie.",
      ctaPrimary:"Demo vereinbaren",
      ctaSecondary:"Preise ansehen",
      architecture:{
        eyebrow:"Architektur",
        title:"Drei Schichten, sauber getrennt",
        description:"Erhebung, Aufbereitung und Auswertung sind klar voneinander getrennt. Jede Schicht ist eigenständig, lässt sich einzeln anpassen oder austauschen, und jede Änderung bleibt durch Versionierung nachvollziehbar.",
        layers:[{
          number:"01",
          tag:"iOS · Android · Wearable",
          title:"Erfassen",
          description:"Native Apps lösen Befragungen kontextabhängig aus; erhoben wird nur, was die Studie wirklich braucht."
        },
        {
          number:"02",
          tag:"Datenaufbereitung",
          title:"Aufbereiten",
          description:"Rohdaten werden mit geprüften Verfahren zu reproduzierbaren, analysefertigen Kennwerten verdichtet."
        },
        {
          number:"03",
          tag:"Dashboard · API · KI",
          title:"Auswerten",
          description:"Live-Dashboard, R-/SPSS-Export und API-Anbindung liefern direkt auswertbare Ergebnisse statt eines reinen Rohdaten-Exports."
        }]
      },
      whiteLabel:{
        eyebrow:"White-Label",
        title:`Die institutionelle Marke im Store
und auf dem Gerät der Probanden`,
        body:"Forschungsinstitutionen erhalten eine eigene App-Variante mit eigenem Namen, Icon und Akzentfarbe. Probanden interagieren mit der vertrauten institutionellen Marke, während PULSE im Hintergrund als Engine arbeitet.",
        bullets:["Eigenes App-Icon und Store-Eintrag",
        "Institutionelle Primär- und Akzentfarben",
        "Custom Onboarding-Texte und Einwilligungs-Wording",
        "Konfigurierbar nach App-Download (Remote-Theming)",
        "Voller Funktionsumfang, keine reduzierte Variante"],
        variantsLabel:"Beispiel-Varianten",
        variants:[{
          name:`Mood
Study`,
          tag:"Variante A",
          tone:"navy",
          mark:"MS"
        },
        {
          name:`Daily
Check`,
          tag:"Variante B",
          tone:"blue",
          mark:"DC"
        },
        {
          name:`Health
Lab`,
          tag:"Variante C",
          tone:"ink",
          mark:"HL"
        }]
      },
      participantExperience:{
        eyebrow:"Probanden-Erlebnis",
        title:"Was Teilnehmende täglich sehen",
        body:"Die Forschungsplattform hat ein Gegenstück in Form einer nativen iOS- und Android-App, die für die Probanden bedienbar gestaltet ist und optional mit White-Label-Branding der Institution ausgeliefert wird.",
        cta:"Die App ansehen"
      },
    },
    app:{
      eyebrow:"Mobile Anwendung",
      title:"Die PULSE-Studien-App",
      subtitle:"Native iOS- und Android-Anwendung für Experience Sampling, passive Sensordatenerfassung und adaptive Interventionen. Datensparsam, transparent, white-label-fähig.",
      intro:"Zur Forschungsplattform PULSE gehört eine native App für Studienteilnehmende, die im Studienalltag genutzt wird. Sie geht sparsam mit der Zeit der Teilnehmenden um, holt Einwilligungen kategoriespezifisch ein und läuft datensparsam im Hintergrund. Auf Wunsch im Branding der jeweiligen Forschungsinstitution.",
      ctaPrimary:"Demo vereinbaren",
      ctaSecondary:"Plattform ansehen",
      survey:{
        eyebrow:"Befragung im Alltag",
        title:"Befragungen, die in den Alltag passen",
        body:"Kurze, kontextsensitive Fragen werden im jeweils relevanten Moment angezeigt. Likert-Skalen, Slider, Single- und Multiple-Choice, Freitext sowie Voice-Memo stehen zur Verfügung. Branching-Logik passt Items je nach vorheriger Antwort an.",
        bullets:["Adaptive Items mit Branching und Computation",
        "Klare Fortschrittsanzeige pro Studienwelle",
        "Offline-fähig: sammelt Daten lokal und synchronisiert später",
        "12 Item-Typen im Studio konfigurierbar"],
        imageAlt:"PULSE-App: Fragebogen-Screen mit Likert-Skala und Slidern"
      },
      sensing:{
        eyebrow:"Mobile Sensing",
        title:"Sensing im Hintergrund",
        body:"Smartphone und Wearables dienen als Forschungsinstrumente und erfassen Bewegung, Standort, Aktivität, Schlaf sowie Bildschirmzeit. Probanden sehen jederzeit, welche Sensoren aktiv sind, und können einzelne Kategorien deaktivieren.",
        bullets:["Granulare Einwilligung pro Sensor-Kategorie",
        "On-device Preprocessing ohne Upload von Rohdaten-Streams",
        "Live-Daten-Vorschau für Transparenz",
        "Energie-optimiert: unter 3 % Akkuverbrauch pro Tag bei Standardkonfiguration"],
        imageAlt:"PULSE-App: Mobile-Sensing-Dashboard mit Live-Sensordaten"
      },
      participantPromise:{
        eyebrow:"Versprechen an Teilnehmende",
        title:"Eine App, der Teilnehmende vertrauen können",
        intro:"Verlässliche Daten setzen Teilnahmetreue voraus – und diese entsteht durch Transparenz, Kontrolle und respektvollen Umgang. Die App ist entsprechend auf die Erwartungen Forschungsteilnehmender zugeschnitten.",
        items:[{
          title:"Granulare Einwilligung",
          description:"Jede Sensor-Kategorie lässt sich einzeln aktivieren und vor sowie während der Studie ändern."
        },
        {
          title:"Datensparsam by Design",
          description:"On-device Processing und Privacy-Filter greifen, bevor Daten das Gerät verlassen."
        },
        {
          title:"Keine Werbung, kein Tracking",
          description:"Keine Drittanbieter-SDKs, keine Analytics, keine Weitergabe an Werbenetzwerke."
        },
        {
          title:"Akkuschonend",
          description:"Adaptive Sampling-Raten und Edge-Aggregation halten den Akkuverbrauch unter 3 % pro Tag bei Standardkonfiguration."
        },
        {
          title:"Datenlöschung jederzeit möglich",
          description:"Eine Mail genügt: Alle personenbezogenen Daten werden vollständig gelöscht."
        },
        {
          title:"Eigenes Branding möglich",
          description:"White-Label: eigenes Icon, eigener Name, eigene Akzentfarbe. PULSE bleibt als technische Grundlage im Hintergrund."
        }]
      },
    },
    welcome:{
      usp:{
        eyebrow:"Pre-processed Pipeline",
        titleLine1:"Validierte Verhaltensfeatures statt",
        titleLine2:"unstrukturierter Sensor-Streams.",
        body:"PULSE verdichtet hochfrequente Sensor- und ESM-Streams automatisch zu validierten Verhaltensfeatures mit dokumentierter Provenienz. Studienteams beginnen ihre Auswertung bei der wissenschaftlichen Hypothese, nicht bei der Datenbereinigung.",
        link:"Zur Plattform-Architektur",
        diagram:{
          rawLabel:"Roh",
          pipelineLabel:"Pipeline",
          insightLabel:"Insight"
        }
      },
      subpages:{
        eyebrow:"Bereiche",
        title:"Inhalte im Überblick",
        intro:"Ein schneller Überblick über die zentralen Bereiche von PULSE: Plattform-Architektur, Studien-App, Features, Anwendungsfelder, Preismodelle und institutioneller Hintergrund.",
        items:[{
          href:"/plattform",
          eyebrow:"01 · Plattform",
          title:"Studieninfrastruktur und Architektur",
          description:"Studien-App, webbasiertes Cockpit, validierte Sensorverarbeitung und dokumentierte Datenexporte – eine durchgängige Infrastruktur von der Studienanlage bis zum analysierbaren Datensatz."
        },
        {
          href:"/app",
          eyebrow:"02 · App",
          title:"Mobile Anwendung für Studienteilnehmende",
          description:"Native iOS- und Android-Anwendung. Datensparsam, transparent, white-label-fähig."
        },
        {
          href:"/features",
          eyebrow:"03 · Features",
          title:"Fragetypen und Sensorik",
          description:"Zwölf Fragetypen für Experience Sampling und zwölf Sensor- und Wearable-Datenquellen für Passive Sensing – alles konfigurierbar im Studio."
        },
        {
          href:"/anwendungen",
          eyebrow:"04 · Anwendungen",
          title:"Anwendungsfelder in Wissenschaft und Praxis",
          description:"Akademische Forschung, klinische Versorgung, Forschungsinstitute und Unternehmen."
        },
        {
          href:"/preise",
          eyebrow:"05 · Preise",
          title:"Preismodelle und Konditionen",
          description:"Fünf Pakete für unterschiedliche Forschungskontexte – transparent kalkulierbar für Drittmittelanträge."
        },
        {
          href:"/ueber-uns",
          eyebrow:"06 · Institut",
          title:"Center for Computation of Human Behavior",
          description:"Eigenständiges Institut hinter PULSE – der Weiterentwicklung der PhoneStudy-Plattform auf Basis von zwölf Jahren akademischer Vorarbeit."
        },
]
      },
      trustBar:{
        dsgvo:{ title:"DSGVO", sub:"konform" },
        germany:{ line1:"Entwickelt in Deutschland", line2:"Gehostet in Deutschland" },
        lmu:{ label:"ein LMU Spinoff" }
      }
    },
    anwendungen:{
      eyebrow:"Anwendungsfelder",
      title:"Anwendungsfelder von PULSE",
      intro:"PULSE wird in akademischer Forschung, in der klinischen Versorgung, in Forschungsinstituten, in Unternehmen sowie in der Markt- und Feldforschung eingesetzt. Im Folgenden zeigen wir fünf Anwendungsfelder mit typischen Anforderungen, Lösungsansätzen und konkreten Beispielprojekten.",
      ctaPrimary:"Demo vereinbaren",
      ctaSecondary:"Plattform ansehen",
      pubTeaser:{
        eyebrow:"Publikationen",
        title:"Peer-reviewed Studien mit PULSE & PhoneStudy",
        body:"Veröffentlichte Arbeiten aus Experience Sampling und Mobile Sensing.",
        cta:"Alle Publikationen"
      },
      needsLabel:"Bedarf",
      deliversLabel:"Was PULSE liefert",
      areas:[{
        number:"01",
        domain:"Forschende & Universitäten",
        title:"Längsschnittstudien im Alltag – ohne eigenes IT-Projekt",
        body:"Vom Methodenseminar bis zum DFG-Großantrag stellt PULSE die technische und methodische Infrastruktur bereit, damit Forschende sich auf ihre wissenschaftliche Fragestellung konzentrieren können – nicht auf App-Entwicklung. Besonders häufig wird PULSE in Psychologie, BWL, Pädagogik sowie Konsum- und Kommunikationsforschung eingesetzt. Rund 90 % der laufenden Studien werden an öffentlich finanzierten Hochschulen und Forschungseinrichtungen durchgeführt.",
        needs:["Schneller Studienstart, oft mit knappem Budget",
        "Methodische Flexibilität für Pilot- und Hauptstudien",
        "Transparente Datenherkunft und Reproduzierbarkeit",
        "Einbindung von Studierenden und wissenschaftlichen Hilfskräften"],
        delivers:["Studienstart in Tagen, nicht Quartalen",
        "Methodenvorlagen aus peer-reviewter Forschung",
        "Granulare Versionierung pro Studie",
        "Ab € 1.900/Jahr, Drittmittel-kompatibel"],
        example:{
          label:"Referenzstudie",
          text:"CoCo-Studie (Coping with Corona): Multi-Site-Längsschnittstudie der WWU Münster, Universität Osnabrück und LMU München. EMA und Passive Sensing zur Erfassung von sozialer Interaktion, Persönlichkeit, Stimmung und Wohlbefinden im Alltag der COVID-19-Pandemie. Weitere Studie: DIPS (Universität Heidelberg, DIW Berlin, LMU München) – Längsschnittuntersuchung zu Dynamiken in sozialen Beziehungen und dem Einfluss von Persönlichkeitsmerkmalen im Alltag."
        }
      },
      {
        number:"02",
        domain:"Kliniken & Therapie",
        title:"EMA für Diagnostik, Therapieverlauf und Prävention",
        body:"PULSE wird in Universitätskliniken und klinischen Versorgungskontexten als Instrument für Diagnostik, Verlaufserfassung und ergänzende digitale Interventionen eingesetzt.",
        needs:["Klinisch validierte Methoden",
        "Einbindung in den Therapiealltag mit wenig Zusatzaufwand",
        "Sichere Verarbeitung von Gesundheitsdaten",
        "Reporting für Behandlungsteams"],
        delivers:["EMA-, EMI- und JITAI-Designs out of the box",
        "Therapeut:innen-Cockpit mit Verlaufsansicht",
        "Verschlüsselung, Pseudonymisierung, Audit-Logs",
        "Schnittstelle zu KIS und elektronischer Patientenakte"],
        example:{
          label:"Beispielprojekt",
          text:"Moody Life Study (LMU München): 14-tägige Studie zu Schlaf, Stimmung und Smartphone-Nutzungsverhalten – mit EMA-Kurzfragebögen, Passive Sensing und Bewegungsmessungsarmband. Untersuchung, wie Smartphone-Nutzungsdaten auf Schlafgewohnheiten und -qualität im Alltag schließen lassen."
        }
      },
      {
        number:"03",
        domain:"Institute & öffentlicher Sektor",
        title:"Gesundheits-, Bildungs- und Sozialforschung im Alltag",
        body:"Forschungsinstitute und öffentliche Auftraggeber setzen PULSE ein, wenn klassische Befragungen an methodische Grenzen stoßen und Verhaltensdaten aus Alltagssituationen erforderlich sind.",
        needs:["Nachvollziehbare Methodik für Auftraggeber",
        "Hohe Stichprobenqualität und Teilnahmetreue",
        "Bilinguale und barrierearme Erhebung",
        "Klare Vergabe- und Vertragsstrukturen"],
        delivers:["Validierte Erhebungsmodule für Public Health, Bildung, Arbeit",
        "Mehrsprachige Apps mit barrierearmer Nutzerführung",
        "Berichte für Stakeholder:innen, nicht nur Forschende",
        "Rechtssichere Grundlagen für Auftragsforschung"],
        example:{
          label:"Beispielprojekt",
          text:"ZPID Smartphone Sensing Panel (Leibniz-Institut für Psychologie, ZPID): Großangelegte Panel-Studie mit über 800 Teilnehmenden über 3 bis 6 Monate. Untersuchung von Smartphone-Nutzungsgewohnheiten, menschlichem Erleben, Gewohnheiten und Verhalten im Alltag."
        }
      },
      {
        number:"04",
        domain:"Unternehmen & HR",
        title:"Wohlbefinden, Belastung und Verhaltensmuster im Arbeitskontext",
        body:"Für Unternehmen, die psychische Gesundheit fördern wollen, ohne die Belegschaft zu überwachen. PULSE liefert anonymisierte, aggregierte Befunde, die für Entscheidungsträger:innen nutzbar sind.",
        needs:["Realistisches Bild psychischer Belastung",
        "Vertrauen der Belegschaft",
        "Rechtssichere Lösung nach DSGVO und Betriebsverfassungsrecht",
        "Integration in Gesundheitsstrategie und EAP"],
        delivers:["Aggregierte Erkenntnisse, niemals individuelle Profile",
        "Klar dokumentierte Datenflüsse für Betriebsräte",
        "Validierte Skalen aus klinischer Forschung",
        "Konfigurierbare Auswertungen für HR und Führung"],
        example:{
          label:"Beispielprojekt",
          text:"Pilot bei einem Industrieunternehmen: anonymisierte EMA zu Belastung und Erholung über vier Wochen, daraus wurden konkrete Maßnahmen für Schichtmodelle abgeleitet."
        }
      },
      {
        number:"05",
        domain:"EMA-Only & Markt­forschung",
        title:"Verifizierte Befragungen — Antworten, die nicht gefälscht werden können",
        body:"Reine Fragebogen-Studien ohne Sensing-Overhead, aber mit eingebauter Verifikation. Jede Antwort ist über die installierte App einer realen Person zugeordnet und kann optional mit GPS-Kontext hinterlegt werden. Das löst das Problem, an dem Online-Panels und Click-Worker-Studien scheitern: nachweisbar echte Antworten von echten Menschen — auf Wunsch sogar aus einem definierten Kontext (Filiale, Klinik, Schulgebäude, Veranstaltung).",
        needs:["Schutz vor Mehrfachteilnahmen und Panel-Betrug",
        "Niedrige Einstiegskosten ohne Sensing-Paket",
        "Hohe Datenqualität ohne aufwendige Rekrutierung",
        "Marktforschung, Behavioural Science, Feldexperimente, Mystery-Shopping"],
        delivers:["App-gebundene Identität — eine Person, eine Pulse-ID, keine gemeinsame Account-Nutzung",
        "Optionaler GPS-Kontext pro Antwort (mit transparenter Einwilligung)",
        "Geofence-Trigger: Fragebögen werden erst am definierten Ort angezeigt",
        "Günstigstes Einstiegspaket (EMA Only · € 1.900) — bewusst ohne Sensing, dafür mit voller API + Onboarding-Call"],
        example:{
          label:"Beispielprojekt",
          text:"Marktforschung bei einer Handelskette: 600 Teilnehmende beantworten POS-bezogene Fragen direkt am Standort. Geofence triggert den Fragebogen beim Betreten, GPS-Stempel verifiziert die Antwort vor Ort, die Pulse-ID schließt Mehrfach-Eintragungen aus."
        }
      }]
    },
    ueberUns:{
      eyebrow:"Institut",
      title:"Center for Computation of Human Behavior",
      subtitle:"Wissenschaftliches Spin-out der LMU München, gegründet von Forschenden für Forschungsteams.",
      intro:"Die Plattform geht auf PhoneStudy zurück, ein 2014 am Lehrstuhl für psychologische Methodenlehre der LMU München in Kooperation mit der Universität St. Gallen und der Universität Bayreuth entwickeltes Forschungsinstrument. Über mehr als ein Jahrzehnt bildete PhoneStudy die methodische Grundlage zahlreicher Studien zu Experience Sampling und Mobile Sensing. 2026 wurde mit dem Center for Computation of Human Behavior (2CHuB) ein eigenständiges Institut gegründet, und auf der gesammelten Wissensgrundlage entstand PULSE als Weiterentwicklung von PhoneStudy: produktreife Software-Infrastruktur für Forschungsteams an Universitäten, Kliniken und in der Industrie.",
      timeline:{
        eyebrow:"Zeitleiste",
        title:"Von PhoneStudy zu PULSE",
        intro:"Zwölf Jahre methodische Vorarbeit am Lehrstuhl, neu gefasst in einer eigenständigen Plattform unter dem Dach von 2CHuB.",
        items:[{
          year:"2014",
          title:"PhoneStudy entsteht an der LMU München",
          description:"Entwicklung als Forschungs-App am Lehrstuhl für psychologische Methodenlehre der LMU München, in Kooperation mit der Universität St. Gallen und der Universität Bayreuth.",
          highlighted:!0
        },
        {
          year:"2014–2025",
          title:"Über ein Jahrzehnt Studienpraxis",
          description:"PhoneStudy bildet die methodische Grundlage zahlreicher peer-reviewter Studien zu Experience Sampling, Mobile Sensing und digitaler Verhaltensforschung in Deutschland und der Schweiz."
        },
        {
          year:"2025",
          title:"Entscheidung zur eigenständigen Ausgründung",
          description:"Drittmittel werden knapper, Kooperationsaufwand steigt. Tragfähigkeit der Infrastruktur über das Lehrstuhlleben hinaus erfordert eine eigenständige Trägerstruktur."
        },
        {
          year:"2026",
          title:"Gründung von 2CHuB und Launch von PULSE",
          description:"Das Center for Computation of Human Behavior entsteht als eigenständiges Institut. PULSE wird auf der Wissensgrundlage aus zwölf Jahren PhoneStudy neu entwickelt und als produktreife Plattform veröffentlicht.",
          highlighted:!0
        },
        {
          year:"Heute",
          title:"Software-Infrastruktur für Forschungsteams",
          description:"PULSE als Produkt von 2CHuB im Einsatz an Universitäten, Kliniken und in der Industrie für Studien zu mobiler Verhaltensforschung."
        }]
      },
      mehrAlsSaas:{
        eyebrow:"Service-Schicht",
        title:"Methodische Begleitung als Teil der Plattform",
        body:"PULSE wird durch eine Service-Schicht ergänzt, die studienspezifische Methodenberatung, Ethik- und Datenschutz-Templates, Onboarding-Workshops und EU-Hosting umfasst. Methodische Unterstützung kommt vom selben Team, das auch die Plattform entwickelt.",
        cta:"Mit dem Team sprechen",
        services:[{
          title:"Methodenberatung",
          description:"Studiendesign-Begleitung durch das Team hinter PULSE – mit Expertise aus über einem Jahrzehnt mobiler Verhaltensforschung und mehr als 20 begleiteten Studien."
        },
        {
          title:"Ethik und Datenschutz",
          description:"Vorlagen für DSGVO-Folgenabschätzung, technisch-organisatorische Maßnahmen sowie Ethikanträge, abgestimmt auf das Studiendesign und die zuständige Ethikkommission."
        },
        {
          title:"Onboarding-Workshops",
          description:"ESM- und Sensing-Workshops für Ihre Forschungsgruppe, sodass Studienteams nicht durch eine Dokumentation navigieren müssen, sondern in kurzer Zeit produktiv arbeiten können."
        },
        {
          title:"EU-Hosting & lokale Optionen",
          description:"Standardmäßig EU-Cloud. Auf Wunsch dediziertes Hosting auf Ihren Universitätsservern."
        }]
      }
    },
    preise:{
      eyebrow:"Preise",
      title:"Wählen Sie den Plan, der zu Ihrer Studie passt.",
      intro:"Unbegrenzte Studienanzahl, API und vollständiger Datenexport sind in jedem Paket inklusive. EU-Hosting, DSGVO-konform, Drittmittel-kompatibel. Alle Preise zzgl. MwSt.",
      badge:"Beliebt",
      close:"Schließen",
      overflowNote:"",
      plans:[
        {
          id:"emaOnly",
          name:"EMA Only",
          price:"€ 1.900",
          period:"/ Jahr",
          tagline:"Für Forschende, die EMA ohne App-Entwicklung betreiben wollen — ohne Sensing, volles API.",
          features:["bis 400 Teilnehmer","Alle EMA-Fragebogentypen","CSV + API + Custom Export","E-Mail + Onboarding-Call","DSGVO-konformes EU-Hosting"],
          overage:"Mehrnutzung: € 10 / zusätzl. Teilnehmer (bis 1.000)",
          cta:"EMA Only wählen",
          ctaHref:"https://pulse.2chub.com",
          detail:"Spezialplan für reine Fragebogen-Studien — ohne Sensing, dafür günstiger und bis 400 Teilnehmer. API-Zugang und Onboarding-Call inklusive."
        },
        {
          id:"explore",
          name:"Explore",
          price:"€ 2.900",
          period:"/ Jahr",
          tagline:"Für Pilotstudien mit Sensing-Komponente.",
          features:["bis 100 Teilnehmer","Standard Sensing (Steps, Location, Screen Time)","Alle EMA-Fragebogentypen","CSV + API + Custom Export","E-Mail-Support","DSGVO-konformes EU-Hosting"],
          cta:"Explore wählen",
          ctaHref:"https://pulse.2chub.com",
          detail:"Einstiegsplan für Pilotstudien. Standard-Sensing (Steps, Location, Screen Time), alle Fragebogentypen und voller Datenexport inklusive. Upgrade auf Research jederzeit möglich."
        },
        {
          id:"research",
          name:"Research",
          price:"€ 9.900",
          period:"/ Jahr",
          tagline:"Ideal für DFG-Projekte & Dissertationen.",
          features:["bis 400 Teilnehmer","Full Sensing (alle Sensoren)","Alle EMA-Fragebogentypen","CSV + API + Custom Export","Priority + Onboarding-Call","DSGVO-konformes EU-Hosting"],
          overage:"Mehrnutzung: € 25 / zusätzl. Teilnehmer über 400",
          cta:"Research wählen",
          ctaHref:"https://pulse.2chub.com",
          highlight:!0,
          detail:"Für DFG-Projekte und Dissertationen. Full Sensing (alle Sensoren), Priority-Support und dediziertes Onboarding-Gespräch inklusive."
        },
        {
          id:"lab",
          name:"Lab",
          price:"€ 14.900",
          period:"/ Jahr",
          tagline:"Ideal für Forschungsgruppen & Laboratorien.",
          features:["bis 1.000 Teilnehmer","Full Sensing + Priority Processing","Alle EMA-Fragebogentypen","CSV + API + Custom Export","Priority + Onboarding-Call","DSGVO-konformes EU-Hosting"],
          overage:"Mehrnutzung: € 15 / zusätzl. Teilnehmer über 1.000",
          cta:"Lab wählen",
          ctaHref:"https://pulse.2chub.com",
          detail:"Für Forschungsgruppen und größere Labs bis 1.000 Teilnehmer. Full Sensing mit Priority Processing, Priority-Support für die gesamte Gruppe."
        },
        {
          id:"enterprise",
          name:"Enterprise",
          price:"Auf Anfrage",
          period:"",
          tagline:"Für Kliniken, Konsortien & 1.000+ Teilnehmer.",
          features:["1.000+ Teilnehmer","Custom Sensor-Konfiguration","Dedicated Account Manager","Vertragsmodell nach Vereinbarung","Hosting nach Vereinbarung"],
          cta:"Angebot anfragen",
          ctaHref:"mailto:info@2chub.com?subject=Enterprise-Anfrage%20PULSE",
          isEnterprise:!0,
          detail:"Für Kliniken, Konsortien und Studien ab 1.000 Teilnehmern. Sensor-Konfiguration, Pipeline, Vertrag und Hosting individuell; dedizierter Account Manager."
        }
      ],
      matrixHeading:"Leistungsstufen im Vergleich",
      matrix:{
        featureColLabel:"Feature",
        compareHint:"ausgewählt",
        rows:[
          {label:"Teilnehmer",group:!0,cells:["bis 400","bis 100","bis 400","bis 1.000","Custom"]},
          {label:"Alle EMA-Fragebogentypen",cells:["check","check","check","check","check"]},
          {label:"Standard Sensing (Steps, Location, Screen Time)",cells:["dash","check","check","check","check"]},
          {label:"Full Sensing (alle Sensoren)",cells:["dash","dash","check","check","check"]},
          {label:"Priority Processing",cells:["dash","dash","dash","check","check"]},
          {label:"Custom Sensor-Konfiguration",cells:["dash","dash","dash","dash","check"]},
          {label:"CSV + API + Custom Export",cells:["check","check","check","check","check"]},
          {label:"EU-Server (DSGVO)",cells:["check","check","check","check","check"]},
          {label:"Vollständiger Rohdatenzugriff",cells:["check","check","check","check","check"]},
          {label:"Setup-Fee inklusive",cells:["check","check","check","check","individuell"]},
          {label:"E-Mail-Support",cells:["check","check","check","check","check"]},
          {label:"Onboarding-Call",cells:["check","dash","check","check","check"]},
          {label:"Priority-Support",cells:["dash","dash","check","check","check"]},
          {label:"Dedicated Account Manager",cells:["dash","dash","dash","dash","check"]},
          {label:"Mehrnutzung",group:!0,cells:["€ 10/TN bis 1.000","Upgrade","€ 25/TN über 400","€ 15/TN über 1.000","Nach Vereinbarung"]}
        ]
      },
      requestModal:{
        subjectPrefix:"PULSE Anfrage",
        intro:"Tragen Sie Ihre E-Mail-Adresse ein — wir melden uns innerhalb von 2 Werktagen mit allen Details zu Lizenz, Aktivierung und individueller Konfiguration.",
        emailLabel:"Ihre E-Mail-Adresse",
        emailPlaceholder:"Ihre Mailadresse",
        messageLabel:"Anmerkungen (optional)",
        messagePlaceholder:"Studiengröße, Zeitplan, besondere Anforderungen …",
        contactNote:"Wir nutzen Ihre Adresse ausschließlich zur Beantwortung dieser Anfrage.",
        submit:"Anfrage senden",
        sending:"Wird gesendet…",
        cancel:"Abbrechen",
        closeAria:"Schließen",
        error:"Anfrage konnte nicht gesendet werden. Bitte erneut versuchen oder direkt an info@2chub.com schreiben.",
        successTitle:"Anfrage gesendet",
        successBody:"Vielen Dank — wir haben Ihre Anfrage erhalten und melden uns innerhalb von 2 Werktagen unter der angegebenen E-Mail-Adresse.",
        successCta:"Schließen"
      },
      faqHeading:"Häufige Fragen",
      faqs:[
        {q:"Was passiert bei mehr als 1.000 Teilnehmenden?",a:"Ab 1.000 Teilnehmenden ist Enterprise das richtige Paket. Sensor-Konfiguration, Datenpipeline und Hosting werden individuell aufgesetzt. Schreiben Sie uns für ein Angebot."},
        {q:"Was bedeutet Mehrnutzung (Overage)?",a:"Die Pakete Research, Lab und EMA Only erlauben die Aufnahme zusätzlicher Teilnehmender über das jeweilige Kontingent hinaus — gegen einen festen Preis pro zusätzlichem Teilnehmer. EMA Only: € 10 bis 1.000 TN. Research: € 25 über 400 TN. Lab: € 15 über 1.000 TN."},
        {q:"Was passiert nach Ablauf der Studie mit den Daten?",a:"Ihre Daten verbleiben 90 Tage nach Studienabschluss in PULSE und können vollständig exportiert werden. Danach werden sie DSGVO-konform gelöscht."},
        {q:"Gibt es ein kostenloses Paket?",a:"Für Studierende und Masterarbeiten bieten wir ein kostenloses Paket (bis 50 Teilnehmende) auf der vollständigen Plattform. Kontaktieren Sie uns für einen Zugang."},
        {q:"Brauche ich Programmierkenntnisse, um eine Studie aufzusetzen?",a:"Nein. Das PULSE Studio ist eine No-Code-Oberfläche. Fragebogen-Builder, Sensor-Konfiguration, Teilnehmerverwaltung und Datenexport sind komplett visuell bedienbar. Für erweiterte API-Integrationen oder R/Python-Auswertungen sind Grundkenntnisse hilfreich, aber nicht Voraussetzung."},
        {q:"Funktioniert PULSE auf iOS und Android?",a:"Ja. PULSE stellt native Apps für iOS und Android bereit. Teilnehmende laden die App direkt aus dem App Store oder Google Play Store herunter und erhalten per Studiencode oder Link Zugang zur jeweiligen Studie."},
        {q:"Können mehrere Forschende gleichzeitig auf eine Studie zugreifen?",a:"Ja. Alle bezahlten Pakete unterstützen mehrere Nutzerkonten pro Studie. Rollen (z. B. Studienleitung, Koordination, Datenanalyse) können individuell konfiguriert werden."},
        {q:"Kann ich mehrere Studien gleichzeitig laufen lassen?",a:"Ja. Alle Pakete erlauben eine unbegrenzte Anzahl gleichzeitiger Studien. Das Teilnehmerkontingent gilt pro Paket und Vertragslaufzeit — nicht pro Studie."},
        {q:"Wie kommen Teilnehmende in eine Studie?",a:"Teilnehmende erhalten einen persönlichen Studienlink oder QR-Code. Nach dem Download der App und dem Einlesen des Codes sind sie sofort aktiv. Optional können Onboarding-Schritte (Einwilligungserklärung, Baseline-Fragebogen) direkt in die App integriert werden."}
      ]
    },
    publikationen:{
      eyebrow:"Wissenschaftlicher Hintergrund",
      title:"Publikationen",
      intro:"Peer-reviewed Studien, die mit PULSE bzw. PhoneStudy erhoben wurden. Ein wachsendes Corpus aus Experience Sampling und Mobile Sensing.",
      stats:[
        {value:"9+", label:"Veröffentlichungen"},
        {value:"2022–2025", label:"Zeitraum"},
        {value:"Nature Comms.", label:"Höchste Sichtbarkeit"}
      ],
      searchPlaceholder:"Titel, Autoren oder Journal …",
      filterAll:"Alle",
      entries:"Einträge",
      colYear:"Jahr",
      colTitle:"Titel / Autoren",
      colJournal:"Journal",
      colDoi:"DOI",
      noResults:"Keine Einträge gefunden.",
      note:"Liste wird laufend aktualisiert. Wenn Ihre Studie auf PhoneStudy oder PULSE basiert und hier fehlt, schreiben Sie uns."
    },
    // Eigenständiger Block für /features — bewusst getrennt von methods.items, da Methoden-Route deaktiviert ist.
    features:{
      eyebrow:"Features",
      title:"Fragetypen und Sensorik",
      intro:"Alle erhebbaren Datenpunkte im Überblick: zwölf Fragetypen für Experience Sampling und zwölf Sensor- und Wearable-Datenquellen für Passive Sensing.",
      itemTypes:{
        eyebrow:"Fragetypen",
        title:"Zwölf Fragetypen in einem Editor",
        body:"Drag-and-Drop im Studio. Branching, Computation und kontextsensitive Trigger inklusive.",
        items:[{
          name:"Single-Choice",
          description:"Klassische Einfachauswahl"
        },
        {
          name:"Multiple-Choice",
          description:"Mehrere Optionen gleichzeitig"
        },
        {
          name:"Likert-Skala",
          description:"Granularität frei wählbar"
        },
        {
          name:"Slider",
          description:"Mit optionalem Anker der letzten Antwort"
        },
        {
          name:"Continuous Line",
          description:"Intensitätsverläufe einzeichnen"
        },
        {
          name:"Freitext",
          description:"Kurz oder lang, mit Längenlimit"
        },
        {
          name:"Voice Memo",
          description:"Audio-Antworten mit Transkription"
        },
        {
          name:"Foto / Bild",
          description:"Probandenfoto direkt im Item"
        },
        {
          name:"Video",
          description:"Kurze Video-Clips als Antwort"
        },
        {
          name:"Matrix",
          description:"Zweidimensionale Anordnung, etwa als Mood-Map"
        },
        {
          name:"Conditional Logic",
          description:"Verzweigungen je nach Antwort"
        },
        {
          name:"Computation",
          description:"Werte aus Vorantworten on-device berechnen"
        }]
      },
      sensors:{
        eyebrow:"Sensoren & Wearables",
        title:"Smartphone und Wearable in einer Pipeline",
        body:"Technisch möglicher Sensorumfang, konfigurierbar pro Studie und granular einwilligbar pro Sensor.",
        items:[{
          name:"GPS / Standort",
          description:"Mobilitätsprofile, Heim-Aufenthalt, besuchte Orte"
        },
        {
          name:"Accelerometer",
          description:"Bewegungsenergie und Aktivitätserkennung"
        },
        {
          name:"Schritte",
          description:"Pedometer-Integration, robust gegen Drift"
        },
        {
          name:"Bildschirm-Events",
          description:"Screen on/off, App-Wechsel, Sessions"
        },
        {
          name:"Bildschirmzeit",
          description:"Bedtime-Use, App-Kategorien, Tagesdauer"
        },
        {
          name:"Umgebungslicht",
          description:"Tageslicht-Exposition, Indoor/Outdoor"
        },
        {
          name:"Mikrofon (Lautstärke)",
          description:"Umgebungsgeräusch ohne Inhaltserfassung"
        },
        {
          name:"Apple Health",
          description:"Apple Watch, HRV, Schlaf, Aktivität"
        },
        {
          name:"WHOOP",
          description:"Strain, Recovery, Schlafphasen"
        },
        {
          name:"Oura Ring",
          description:"Schlaf, Temperatur, Readiness"
        },
        {
          name:"Garmin",
          description:"Rohdaten oder Aggregator-Bridge"
        },
        {
          name:"Fitbit",
          description:"Über Aggregator: Aktivität und Schlaf"
        }]
      }
    }
  },
  en:{
    nav:{
      research:"Research",
      platform:"PULSE Environment",
      team:"Team",
      contact:"Contact",
      methods:"Methods",
      applications:"Applications",
      pricing:"Pricing",
      about:"About",
      login:"Login",
      allMethods:"All Methods",
      seeApp:"See the App",
      publications:"Publications",
      pulseEnvironment:{
        items:[
          {label:"Platform",href:"/plattform",description:"Study console, pipeline and data model"},
          {label:"Mobile App",href:"/app",description:"Native iOS/Android app for participants"},
          // {label:"Methods",href:"/methoden",description:"ESM, sensing, interventions, analysis"},
          {label:"Features",href:"/features",description:"Question types and sensors at a glance"}
        ]
      }
    },
    hero:{
      eyebrow:"Center for Computation of Human Behavior",
      title:`The platform for mobile
behavioural research`,
      subtitle:"Experience sampling, passive sensing and adaptive interventions within a single study infrastructure.",
      tagline:"The platform traces back to PhoneStudy (2014) and is maintained today at the Center for Computation of Human Behavior as software infrastructure for mobile behavioural research. Research teams design, conduct and analyse their studies in one system.",
      primaryCta:"See the platform",
      secondaryCta:"Request a demo"
    },
    team:{
      eyebrow:"The team",
      heading:"Who is behind 2CHuB",
      members:[{
        name:"Prof. Dr. Markus Bühner",
        role:"Co-founder, Psychometrics and Methodology",
        background:"Professor of Psychological Methodology and Assessment. Research focus: psychometrics, theories of intelligence, digital assessments.",
        email:"info@2chub.com"
      },
      {
        name:"Dr. Yannik Terhorst",
        role:"Co-founder, Clinical Psychology and Digital Health",
        background:"Researcher in clinical psychology and psychotherapy. Focus on digital interventions, mobile health, and ecological momentary assessment.",
        email:"info@2chub.com"
      },
      {
        name:"Leon Paletta",
        role:"Co-founder, Platform and Data",
        background:"M.Sc. Robotics & AI, B.Sc. Engineering Science. Platform architecture, data engineering, and product."
      },
      {
        name:"Till-Ole Lohse",
        role:"Co-founder, Engineering",
        background:"B.Sc. Computer Science, B.Sc. Management. System architecture, infrastructure, and hardware integration."
      }]
    },
    contact:{
      heading:"Questions about funding?",
      subheading:"We help researchers integrate PULSE into grant applications — DFG, BMBF, EU or industry. Methodology blocks, cost calculations and references from ongoing studies are available on request.",
      email:"info@2chub.com",
      location:"Munich, Germany",
      cta:"Request proposal material",
      mailSubject:"PULSE proposal material"
    },
    footer:{
      legalName:"2CHuB GmbH · Center for Computation of Human Behavior",
      imprint:"Imprint",
      privacy:"Privacy Policy",
      backLink:"Back",
      status:{
        none:"Status",
        minor:"Minor incident",
        major:"Major outage",
        critical:"Critical outage",
        maintenance:"Under maintenance",
        unknown:"Status"
      }
    },
    methods:{
      eyebrow:"Methods",
      title:"Methods of mobile behavioural research",
      intro:"PULSE integrates four methods of mobile behavioural research into a consistent study infrastructure: experience sampling, passive sensing, adaptive interventions and reproducible analysis. The methods can be used in isolation or in combination, under the same guarantees for data protection and reproducibility.",
      items:[{
        number:"01",
        slug:"befragen",
        title:"Survey",
        shortDesc:"ESM / EMA",
        cardDesc:"Brief, context-aware questions in everyday life. Branching, quotas, multilingual.",
        pageTitle:"Survey: Experience Sampling",
        pageIntro:"Brief, context-aware questionnaires delivered in the moment. Capture thoughts, emotions, and experiences without relying on retrospective recall.",
        bullets:["Repeated micro-surveys across days, weeks, or months.",
        "Triggers based on time, context, sensor signal or study logic.",
        "Adaptive item selection driven by previous responses."],
        rich:{
          whatIsIt:{
            eyebrow:"What & Why",
            title:"What ESM and EMA are",
            body:"Ecological Momentary Assessment (EMA) and the Experience Sampling Method (ESM) are established behavioural science procedures, in use since the 1980s, for capturing experience and behaviour in real time. Rather than a single retrospective weekly questionnaire, several brief samples are collected per day, typically across days, weeks or months.",
            keyPoints:[{
              number:"01",
              title:"Recall bias minimised",
              description:"Experience is captured in the moment, not reconstructed afterwards."
            },
            {
              number:"02",
              title:"High ecological validity",
              description:"Data emerges in participants' everyday life rather than in the laboratory."
            },
            {
              number:"03",
              title:"Longitudinal-ready",
              description:"Within-person variability, time series and dynamics become visible."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"How it runs in PULSE",
            body:"You define items, sampling logic and triggers in the admin panel. The platform handles the rest.",
            steps:[{
              number:"01",
              title:"Configure items",
              description:"Import your own items or validated scales. Branching, randomisation, quotas, multilingual."
            },
            {
              number:"02",
              title:"Define triggers",
              description:"Time-based (e.g. 6× daily in random slots), event-based (location change) or context-aware (only during active use)."
            },
            {
              number:"03",
              title:"App delivers",
              description:"Native iOS and Android app. Offline-capable, local storage, energy management."
            },
            {
              number:"04",
              title:"Responses land encrypted",
              description:"Directly within the study environment, pseudonymised and audit-loggable, optionally live in the dashboard."
            }],
            schemaEyebrow:"What you get as a dataset",
            schemaIntro:"Cleanly structured, documented, ready to analyse.",
            schemaLabel:"Schema · ESM / EMA",
            schemaRows:[{
              key:"participant_id",
              value:"p_034 · pseudonymised"
            },
            {
              key:"study_wave",
              value:"wave_2 · day_14"
            },
            {
              key:"trigger_type",
              value:"time_random · 16:42"
            },
            {
              key:"stress_now",
              value:"5 / 7"
            },
            {
              key:"context_location",
              value:"home"
            },
            {
              key:"response_latency_s",
              value:"23.4"
            },
            {
              key:"schema_version",
              value:"esm_v1.3.0"
            }]
          },
          useCases:{
            eyebrow:"Use cases",
            title:"Representative research questions",
            cases:[{
              tag:"Clinical Psychology",
              question:"How do depressive symptoms vary between morning and evening during a treatment phase?"
            },
            {
              tag:"Stress & Recovery",
              question:"Which everyday situations trigger acute stress and how quickly does recovery follow?"
            },
            {
              tag:"Substance Use",
              question:"Which triggers precede consumption events in people with alcohol dependence?"
            },
            {
              tag:"Education",
              question:"How does momentary concentration relate to last night's sleep quality?"
            }]
          },
          pulseDifference:{
            eyebrow:"Methodological depth",
            title:"Beyond the item engine",
            body:"PULSE treats experience sampling as part of an end-to-end research pipeline. Item configuration, trigger logic, delivery, compliance monitoring and analysis are methodologically integrated.",
            checks:["Validated scales from clinical research as templates",
            "Real-time compliance monitoring per participant in the dashboard",
            "Drop-out detection with automated re-engagement logic",
            "Automatic linking with passive-sensing context",
            "Reproducible item versioning per study"]
          },
          catalog:{
            eyebrow:"Item types",
            title:"Twelve item types in one editor",
            body:"Drag-and-drop in the studio. Branching, computation and context-aware triggers included.",
            items:[{
              name:"Single Choice",
              description:"Classic single selection"
            },
            {
              name:"Multiple Choice",
              description:"Several options at once"
            },
            {
              name:"Likert Scale",
              description:"Granularity freely chosen"
            },
            {
              name:"Slider",
              description:"Optional anchor of the last response"
            },
            {
              name:"Continuous Line",
              description:"Intensity drawn over time"
            },
            {
              name:"Free Text",
              description:"Short or long, with length limit"
            },
            {
              name:"Voice Memo",
              description:"Audio responses with transcription"
            },
            {
              name:"Photo / Image",
              description:"Participant photo within the item"
            },
            {
              name:"Video",
              description:"Short video clips as response"
            },
            {
              name:"Matrix",
              description:"Two-dimensional arrangement such as a mood map"
            },
            {
              name:"Conditional Logic",
              description:"Branching based on answers"
            },
            {
              name:"Computation",
              description:"Values computed on-device from prior answers"
            }]
          },
          architectureCallout:{
            eyebrow:"Architecture",
            title:"How items become responses",
            body:"The platform page describes in detail how capture, process and analysis interact, including a live event log.",
            cta:"Platform architecture"
          }
        }
      },
      {
        number:"02",
        slug:"beobachten",
        title:"Observe",
        shortDesc:"Passive Sensing",
        cardDesc:"Motion, location, activity, sleep and screen time, collected via smartphone and wearable.",
        pageTitle:"Observe: Passive Sensing",
        pageIntro:"Motion, location, activity, communication, media use and screen time: high-frequency, anonymised behavioural data collected directly from the phone.",
        bullets:["Configurable sensing per study and per participant.",
        "Granular consent for every data category.",
        "Edge aggregation reduces upload volume."],
        rich:{
          whatIsIt:{
            eyebrow:"What & Why",
            title:"What passive sensing comprises",
            body:"Smartphones and wearables function as high-resolution measurement instruments whose use in behavioural research is typically constrained by missing infrastructure. PULSE addresses this gap through granular, transparent data collection with sensor-level consent.",
            keyPoints:[{
              number:"01",
              title:"Low-friction",
              description:"No additional devices, no extra effort for participants."
            },
            {
              number:"02",
              title:"High data density",
              description:"Thousands of data points per person per day provide objective markers alongside self-report."
            },
            {
              number:"03",
              title:"Privacy-respecting",
              description:"Granular consent, local pre-processing, no content capture."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"From sensor to actionable feature",
            body:"PULSE does not deliver raw-data dumps, but analysis-ready behavioural features.",
            steps:[{
              number:"01",
              title:"Capture sensors",
              description:"GPS, motion sensors, steps, screen time, sleep via wearable, Bluetooth proximity."
            },
            {
              number:"02",
              title:"Pre-process locally",
              description:"Cleaning, aggregation and privacy filters run on-device, before any data leaves the phone."
            },
            {
              number:"03",
              title:"Compute features",
              description:"Mobility radius, places visited, sleep onset, step count and screen patterns, computed via validated algorithms."
            },
            {
              number:"04",
              title:"Deliver",
              description:"Encrypted in the EU, pseudonymised, with documented schema version."
            }],
            schemaEyebrow:"Example: a day in the dataset",
            schemaIntro:"One compact feature row per person per day, with the raw time series available on request.",
            schemaLabel:"Schema · Passive Sensing",
            schemaRows:[{
              key:"participant_id",
              value:"p_034"
            },
            {
              key:"date",
              value:"2026-04-22"
            },
            {
              key:"mobility_radius_km",
              value:"3.8"
            },
            {
              key:"places_visited",
              value:"4"
            },
            {
              key:"time_at_home_min",
              value:"612"
            },
            {
              key:"steps",
              value:"7341"
            },
            {
              key:"sleep_onset",
              value:"23:48"
            },
            {
              key:"screen_minutes",
              value:"184"
            },
            {
              key:"bedtime_use_min",
              value:"22"
            }]
          },
          useCases:{
            eyebrow:"Use cases",
            title:"Measurable phenomena",
            cases:[{
              tag:"Mobility",
              question:"Does the action radius shrink in people experiencing a depressive episode?"
            },
            {
              tag:"Sleep",
              question:"How does sleep-onset time shift over a 12-week study?"
            },
            {
              tag:"Social interaction",
              question:"Do Bluetooth proximity clusters correlate with self-reported loneliness?"
            },
            {
              tag:"Digital behaviour",
              question:"How does bedtime use change before clinical symptom flare-ups?"
            }]
          },
          pulseDifference:{
            eyebrow:"Research-ready sensor pipeline",
            title:"Validated features rather than raw timestamps",
            body:"PULSE delivers documented behavioural features on validated algorithms rather than unstructured sensor streams. Analysis begins with publication-ready variables.",
            checks:["Pre-processed features instead of timestamp dumps",
            "Validated algorithms from peer-reviewed research",
            "On-device privacy filter before upload",
            "Transparent sensor toggle for participants",
            "Wearable integration (Apple Health, Garmin, WHOOP, Oura, Fitbit)"]
          },
          catalog:{
            eyebrow:"Sensors & wearables",
            title:"Smartphone and wearable in one pipeline",
            body:"Technically available sensors, configurable per study and with granular consent per sensor.",
            items:[{
              name:"GPS / Location",
              description:"Mobility profiles, time at home, places visited"
            },
            {
              name:"Accelerometer",
              description:"Movement energy and activity recognition"
            },
            {
              name:"Steps",
              description:"Pedometer integration, drift-resistant"
            },
            {
              name:"Screen events",
              description:"Screen on/off, app switches, sessions"
            },
            {
              name:"Screen time",
              description:"Bedtime use, app categories, daily duration"
            },
            {
              name:"Ambient light",
              description:"Daylight exposure, indoor/outdoor"
            },
            {
              name:"Microphone (volume)",
              description:"Ambient noise without content capture"
            },
            {
              name:"Apple Health",
              description:"Apple Watch, HRV, sleep, activity"
            },
            {
              name:"WHOOP",
              description:"Strain, recovery, sleep stages"
            },
            {
              name:"Oura Ring",
              description:"Sleep, temperature, readiness"
            },
            {
              name:"Garmin",
              description:"Raw data or aggregator bridge"
            },
            {
              name:"Fitbit",
              description:"Via aggregator: activity and sleep"
            }]
          },
          architectureCallout:{
            eyebrow:"Architecture",
            title:"Where sensor streams become features",
            body:"The platform page describes in detail how capture, process and analysis interact, including a live event log.",
            cta:"Platform architecture"
          }
        }
      },
      {
        number:"03",
        slug:"intervenieren",
        title:"Intervene",
        shortDesc:"JITAI",
        cardDesc:"Just-in-Time Adaptive Interventions delivered in the right moment, personalised and effective.",
        pageTitle:"Intervene: Just-in-Time Adaptive Interventions",
        pageIntro:"Just-in-Time Adaptive Interventions link survey, sensing and content within one coherent logic, so that a micro-intervention is delivered when it is contextually effective.",
        bullets:["Trigger logic combining sensors, context and study arm.",
        "Micro-interventions anchored in everyday life.",
        "Effects measured within the same study run."],
        rich:{
          whatIsIt:{
            eyebrow:"What & Why",
            title:"What a JITAI is",
            body:"JITAIs are context-aware digital interventions that are not delivered on a rigid schedule, but precisely when they are most effective, i.e. in a concrete state and in response to a concrete need. The research standard follows Nahum-Shani et al. (2018).",
            keyPoints:[{
              number:"01",
              title:"Context-aware",
              description:"Triggers respond to mood, context and behaviour rather than to a fixed clock time."
            },
            {
              number:"02",
              title:"Adaptive",
              description:"Learning effects and dosing are part of the trigger logic."
            },
            {
              number:"03",
              title:"Measurable",
              description:"Intervention and effect live in the same data structure."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"How a JITAI is built in PULSE",
            body:"You configure triggers, content and dosing rules. The platform handles delivery and logging.",
            steps:[{
              number:"01",
              title:"Define triggers",
              description:"Combine ESM responses, sensor values, time of day and context."
            },
            {
              number:"02",
              title:"Build content",
              description:"Micro-interventions, push, in-app content, audio. Validated content templates available."
            },
            {
              number:"03",
              title:"Control dosing",
              description:"Cooldowns, daily caps and learning effects prevent participant overload."
            },
            {
              number:"04",
              title:"Measure effect",
              description:"Pre- and post-EMA together with behavioural features allow effects to be captured directly."
            }],
            schemaEyebrow:"A triggered intervention in the dataset",
            schemaIntro:"Logged fields that keep every intervention reproducible.",
            schemaLabel:"Schema · JITAI",
            schemaRows:[{
              key:"intervention_id",
              value:"stress_breath_v2"
            },
            {
              key:"trigger_rule",
              value:"stress>=5 AND context=work"
            },
            {
              key:"fired_at",
              value:"2026-04-22 14:18:02"
            },
            {
              key:"delivered",
              value:"true"
            },
            {
              key:"engagement",
              value:"completed"
            },
            {
              key:"post_ema_stress",
              value:"3 / 7"
            },
            {
              key:"delta",
              value:"-2"
            },
            {
              key:"schema_version",
              value:"jitai_v0.9.4"
            }]
          },
          useCases:{
            eyebrow:"Use cases",
            title:"Examples from practice",
            cases:[{
              tag:"Stress regulation",
              question:"Breathing exercise as soon as self-reported stress ≥ 5/7 and work context is detected."
            },
            {
              tag:"Sleep",
              question:"Wind-down reminder when screen time continues past 22:30."
            },
            {
              tag:"Activity",
              question:"Suggest a walk after four hours without significant movement."
            },
            {
              tag:"Adherence",
              question:"Reflection prompt 30 min before usual therapy activity."
            }]
          },
          pulseDifference:{
            eyebrow:"Integrated effect measurement",
            title:"Intervention and effect in one data structure",
            body:"PULSE records triggered interventions and their effects within the same reproducible dataset. Effects can therefore be quantified context-specifically without separate data joins.",
            checks:["Triggers combine sensing and survey responses",
            "Content templates from clinical research",
            "Dosing logic with learning effects",
            "Effect measurement integrated",
            "Full audit logs for clinical studies"]
          },
          architectureCallout:{
            eyebrow:"Architecture",
            title:"Where triggers turn into measurable effects",
            body:"The platform page shows in detail how the trigger engine, content library and effect measurement work together inside the studio.",
            cta:"Platform architecture"
          }
        }
      },
      {
        number:"04",
        slug:"auswerten",
        title:"Analyse",
        shortDesc:"Pre-processed",
        cardDesc:"Pre-processed features, LLM-drafted reports, exports for R, SPSS, Python.",
        pageTitle:`Analyse,
ready for science`,
        pageIntro:"Pre-processed features, LLM-drafted reports and reproducible pipelines. Research teams do not receive a timestamp dump, but validated behavioural features, documented schemas and analysis-ready datasets.",
        bullets:["Automatic pre-aggregation: hourly, daily, session-based.",
        "Feature libraries for motion, sleep, communication, app use.",
        "Export as CSV, Parquet, or directly to R / Python."],
        rich:{
          whatIsIt:{
            eyebrow:"What & Why",
            title:"Rationale for pre-processing",
            body:"Raw sensor streams are not a dataset but a preparation task. PULSE does not pass this task on to research teams; it provides the finished dataset, comprising validated features, documented schemas and reproducible hashes. Scientific work therefore begins with the hypothesis rather than with data cleaning.",
            keyPoints:[{
              number:"01",
              title:"Faster to hypothesis",
              description:"Weeks of data-cleaning work disappear."
            },
            {
              number:"02",
              title:"Methodologically clean",
              description:"Validated, peer-reviewed and versioned algorithms replace ad-hoc scripts."
            },
            {
              number:"03",
              title:"Reproducible",
              description:"Schema hash makes every analysis exactly reconstructible months later."
            }]
          },
          pipeline:{
            eyebrow:"Pipeline",
            title:"From raw stream to insight",
            body:"Four steps, each documented and versioned.",
            steps:[{
              number:"01",
              title:"Cleaning",
              description:"Gaps, sensor drift and technical artefacts are handled by fixed rules."
            },
            {
              number:"02",
              title:"Feature extraction",
              description:"Validated algorithms produce behavioural features at daily, weekly and session level."
            },
            {
              number:"03",
              title:"Aggregation & export",
              description:"CSV, Parquet, RData, JSON. Schema documented. Hash per dataset."
            },
            {
              number:"04",
              title:"LLM report (optional)",
              description:"Automatic draft report generated from the features, including a citable methods section."
            }],
            schemaEyebrow:"Schema snippet from an export",
            schemaIntro:"Excerpt from a typical package, with every column documented and every version frozen.",
            schemaLabel:"Schema · Pre-processed",
            schemaRows:[{
              key:"dataset_hash",
              value:"f3a8…d201"
            },
            {
              key:"feature_set",
              value:"core_v2.1"
            },
            {
              key:"n_participants",
              value:"184"
            },
            {
              key:"n_days",
              value:"27"
            },
            {
              key:"rows_total",
              value:"4 968"
            },
            {
              key:"schema_doc",
              value:"/schemas/core_v2.1.md"
            },
            {
              key:"export_format",
              value:"Parquet · CSV · RData"
            }]
          },
          useCases:{
            eyebrow:"Use cases",
            title:"Supported analysis workflows",
            cases:[{
              tag:"R / RStudio",
              question:"Multilevel models on daily features with person-level random effects."
            },
            {
              tag:"Python / Jupyter",
              question:"Cluster analysis on mobility profiles for subgroups."
            },
            {
              tag:"SPSS",
              question:"Correlation and regression analyses for clinical reviews."
            },
            {
              tag:"Reports",
              question:"LLM-drafted preliminary report with methods and results sections."
            }]
          },
          pulseDifference:{
            eyebrow:"Reproducible export",
            title:"Documented feature sets rather than raw streams",
            body:"PULSE exports pre-processed feature sets in standardised formats with documented schema and dataset hash. Analysis begins with publication-ready variables rather than with data cleaning.",
            checks:["Pre-processed features in a consistent schema",
            "Automatic versioning per study and feature set",
            "Reproducibility via documented schema hashes",
            "LLM reports as methodological first drafts",
            "Direct API integration for research pipelines"]
          },
          quote:{
            eyebrow:"From an ongoing study",
            text:"Before PULSE, we spent weeks cleaning sensor streams before we could even test a hypothesis. Now the analysis starts directly on validated features with a documented schema, so methodological work begins where it belongs: with the research question.",
            author:"Lead investigator",
            affiliation:"Multi-site clinical psychology study"
          },
          architectureCallout:{
            eyebrow:"Live in the studio",
            title:"How data becomes insight",
            body:"The live event log on the platform page shows every step from the ESM response to the LLM report.",
            cta:"Platform · Live Studio"
          }
        }
      }],
      overviewCta:"View all methods",
      appCta:"See the PULSE app",
      backToMethods:"Back to methods overview",
      placeholder:"Detailed content for this method is forthcoming. Questions are welcome at info@2chub.com.",
      cardCta:"Open method",
      flowStart:"Raw signal · Moment in everyday life",
      flowEnd:"Publication-ready dataset",
      exploreEyebrow:"Explore further",
      finalDemo:{
        eyebrow:"Request a demo",
        title:"This method in a real study",
        body:"A 30-minute demo walks through the workflow from study setup to reproducible dataset, drawing on examples from ongoing research projects.",
        primary:"Request a demo",
        secondary:"See pricing"
      }
    },
    plattform:{
      eyebrow:"Platform",
      title:"Study infrastructure and architecture",
      subtitle:"Native mobile application, studio cockpit, validated sensor pipelines and reproducible data exports.",
      intro:"PULSE bundles mobile data collection, on-device pre-processing, study configuration and analysis into a unified platform. Research teams configure their studies in the PULSE Admin Panel rather than programming them. Participants use a quiet, transparent application. Data is processed GDPR-compliant and with a documented schema version, from the first pilot to the multi-site study.",
      ctaPrimary:"Request a demo",
      ctaSecondary:"See pricing",
      architecture:{
        eyebrow:"Architecture",
        title:"Three layers, cleanly separated",
        description:"Collection, preparation and analysis are kept clearly separate. Each layer works on its own, can be adapted or swapped individually, and every change stays traceable through versioning.",
        layers:[{
          number:"01",
          tag:"iOS · Android · Wearable",
          title:"Capture",
          description:"Native apps trigger surveys based on context; only what the study truly needs is collected."
        },
        {
          number:"02",
          tag:"Data preparation",
          title:"Prepare",
          description:"Raw data is processed with validated methods into reproducible, analysis-ready metrics."
        },
        {
          number:"03",
          tag:"Dashboard · API · AI",
          title:"Analyse",
          description:"Live dashboard, R/SPSS export and API integration deliver directly analysable findings — not just a raw-data export."
        }]
      },
      whiteLabel:{
        eyebrow:"White-label",
        title:`Your institutional brand, in the store
and in the hands of participants`,
        body:"Research institutions receive their own app variant with their own name, icon and accent colour. Participants interact with the familiar institutional brand while PULSE operates as the underlying engine.",
        bullets:["Own app icon and store listing",
        "Institutional primary and accent colours",
        "Custom onboarding copy and consent wording",
        "Configurable after download (remote theming)",
        "Full functionality, with no reduced variant"],
        variantsLabel:"Example variants",
        variants:[{
          name:`Mood
Study`,
          tag:"Variant A",
          tone:"navy",
          mark:"MS"
        },
        {
          name:`Daily
Check`,
          tag:"Variant B",
          tone:"blue",
          mark:"DC"
        },
        {
          name:`Health
Lab`,
          tag:"Variant C",
          tone:"ink",
          mark:"HL"
        }]
      },
      participantExperience:{
        eyebrow:"Participant experience",
        title:"What participants see every day",
        body:"The research platform has a counterpart in the form of a native iOS and Android app designed for participant use, optionally delivered with white-label branding of the institution.",
        cta:"See the app"
      },
    },
    app:{
      eyebrow:"Mobile application",
      title:"The PULSE mobile application",
      subtitle:"Native iOS and Android application for experience sampling, passive sensing and adaptive interventions. Data-minimal, transparent, white-label-ready.",
      intro:"The PULSE research platform has a counterpart in the hands of study participants: a native mobile application that is used every day. It respects study time, obtains consent per data category and works unobtrusively in the background. Optionally branded for the respective research institution.",
      ctaPrimary:"Request a demo",
      ctaSecondary:"See the platform",
      survey:{
        eyebrow:"Surveys in everyday life",
        title:"Items that respect everyday life",
        body:"Brief, context-aware items are delivered in the moment they matter. Likert scales, sliders, single and multiple choice, free text and voice memos are available, and branching logic adapts items based on previous responses.",
        bullets:["Adaptive items with branching and computation",
        "Clear progress indicator per study wave",
        "Offline-capable, syncs later when online",
        "12 item types configurable from the studio"],
        imageAlt:"PULSE app: questionnaire screen with Likert scale and sliders"
      },
      sensing:{
        eyebrow:"Mobile sensing",
        title:"Sensing that runs in the background",
        body:"Smartphone and wearable act as research instruments that capture motion, location, activity, sleep and screen time. Participants can always see which sensors are active and may disable individual categories at any time.",
        bullets:["Granular consent per sensor category",
        "On-device pre-processing with no raw streams uploaded",
        "Live data preview for transparency",
        "Battery-optimised: under 3 % battery use per day at default settings"],
        imageAlt:"PULSE app: mobile sensing dashboard with live sensor data"
      },
      participantPromise:{
        eyebrow:"Promise to participants",
        title:"An app that earns trust",
        intro:"Reliable data depends on compliance, and compliance rests on respectful treatment of participants. The application is designed accordingly, in line with the expectations of research participants.",
        items:[{
          title:"Granular consent",
          description:"Each sensor category can be toggled individually and adjusted before and during the study."
        },
        {
          title:"Data-minimal by design",
          description:"On-device cleaning and privacy filters run before any data leaves the device."
        },
        {
          title:"No ads, no tracking",
          description:"No third-party SDKs, no analytics, no sharing with advertising networks."
        },
        {
          title:"Battery-friendly",
          description:"Adaptive sampling rates and edge aggregation keep battery use under 3 % per day at default settings."
        },
        {
          title:"Deletion any time",
          description:"A single email is sufficient: all personal data is fully deleted."
        },
        {
          title:"Your branding possible",
          description:"White-label: own icon, own name, own accent colour. PULSE stays the engine in the background."
        }]
      },
    },
    welcome:{
      usp:{
        eyebrow:"Pre-processed pipeline",
        titleLine1:"Validated behavioural features instead of",
        titleLine2:"unstructured sensor streams.",
        body:"PULSE automatically condenses high-frequency sensor and ESM streams into validated behavioural features with documented provenance. Research teams start their analysis with the scientific hypothesis rather than with data cleaning.",
        link:"View the platform architecture",
        diagram:{
          rawLabel:"Raw",
          pipelineLabel:"Pipeline",
          insightLabel:"Insight"
        }
      },
      subpages:{
        eyebrow:"Sections",
        title:"Content at a glance",
        intro:"Direct access to the central areas of the platform: architecture, mobile app, features, application fields, pricing structure and institutional background.",
        items:[{
          href:"/plattform",
          eyebrow:"01 · Platform",
          title:"Study infrastructure and architecture",
          description:"Native mobile application, studio cockpit, validated sensor pipelines, and documented data exports — end-to-end infrastructure from study setup to analysis-ready dataset."
        },
        {
          href:"/app",
          eyebrow:"02 · App",
          title:"Mobile application for study participants",
          description:"Native iOS and Android application. Data-minimal, transparent, white-label-ready."
        },
        {
          href:"/features",
          eyebrow:"03 · Features",
          title:"Question types and sensors",
          description:"Twelve question types for experience sampling and twelve sensor and wearable data sources for passive sensing — all configurable in the studio."
        },
        {
          href:"/anwendungen",
          eyebrow:"04 · Applications",
          title:"Application areas in research and practice",
          description:"Academic research, clinical care, research institutes and companies."
        },
        {
          href:"/preise",
          eyebrow:"05 · Pricing",
          title:"Pricing models and terms",
          description:"Five packages for different research contexts, compatible with grant proposals."
        },
        {
          href:"/ueber-uns",
          eyebrow:"06 · Institute",
          title:"Center for Computation of Human Behavior",
          description:"Independent institute, founded in 2026 as the home of PULSE, the successor to the PhoneStudy platform built on twelve years of academic groundwork."
        },
]
      },
      trustBar:{
        dsgvo:{ title:"GDPR", sub:"compliant" },
        germany:{ line1:"Developed in Germany", line2:"Hosted in Germany" },
        lmu:{ label:"an LMU Spin-off" }
      }
    },
    anwendungen:{
      eyebrow:"Application areas",
      title:"Application areas of PULSE",
      intro:"PULSE is used in academic research, in clinical care, in research institutes, in companies and in market and field research. Below are five application areas with typical requirements, approaches and concrete example projects.",
      ctaPrimary:"Request a demo",
      ctaSecondary:"See the platform",
      pubTeaser:{
        eyebrow:"Publications",
        title:"Peer-reviewed studies with PULSE & PhoneStudy",
        body:"Published papers spanning experience sampling and mobile sensing.",
        cta:"All publications"
      },
      needsLabel:"Needs",
      deliversLabel:"What PULSE delivers",
      areas:[{
        number:"01",
        domain:"Researchers & Universities",
        title:"Longitudinal field studies without an IT project",
        body:"From a methods seminar to a major DFG grant, PULSE provides the infrastructure that allows researchers to focus on the scientific question rather than on application development. The strongest domains are psychology, business administration, education and consumer and communication research. Roughly 90 % of all currently active studies are conducted at publicly funded chairs.",
        needs:["Fast study start, often with a tight budget",
        "Methodological flexibility for pilots and main studies",
        "Transparent data provenance and reproducibility",
        "Inclusion of students and research assistants"],
        delivers:["Study start in days, not quarters",
        "Method templates from peer-reviewed research",
        "Granular versioning per study",
        "From € 1,900/year, compatible with third-party funding"],
        example:{
          label:"Example study",
          text:"CoCo Study (Coping with Corona): multi-site longitudinal study by WWU Münster, University of Osnabrück and LMU Munich. EMA and passive sensing to capture social interaction, personality, mood and wellbeing during the COVID-19 pandemic. Further reference: DIPS (University of Heidelberg, DIW Berlin, LMU Munich) – longitudinal investigation of dynamics in social relationships and the influence of personality traits in everyday life."
        }
      },
      {
        number:"02",
        domain:"Clinics & Therapy",
        title:"EMA for diagnostics, treatment trajectories and prevention",
        body:"PULSE is deployed in university hospitals and care structures as an instrument for diagnostics, trajectory measurement and complementary digital interventions.",
        needs:["Clinically validated methods",
        "Low-friction integration into the therapy workflow",
        "Secure processing of health data",
        "Reporting for treatment teams"],
        delivers:["EMA, EMI and JITAI designs out of the box",
        "Therapist cockpit with trajectory view",
        "Encryption, pseudonymisation, audit logs",
        "Interface to HIS and electronic patient records"],
        example:{
          label:"Example project",
          text:"Moody Life Study (LMU Munich): 14-day study on sleep, mood and smartphone use – combining EMA, passive sensing and a wrist-worn accelerometer. Investigated how smartphone usage data can indicate sleep habits and sleep quality in everyday life."
        }
      },
      {
        number:"03",
        domain:"Institutes & Public Sector",
        title:"Health, education and social research in everyday life",
        body:"Research institutes and public commissioners deploy PULSE when classical surveys reach their methodological limits and behavioural data from real-world settings becomes necessary.",
        needs:["Methodology that commissioners can audit",
        "High sample quality and compliance",
        "Bilingual and accessible data collection",
        "Clear procurement and contract structures"],
        delivers:["Validated survey modules for public health, education, work",
        "Multilingual apps with accessible UX",
        "Reports for stakeholders, not only for researchers",
        "Contractually clean commissioned research"],
        example:{
          label:"Example project",
          text:"ZPID Smartphone Sensing Panel (Leibniz Institute for Psychology, ZPID): large-scale panel study with over 800 participants across 3 to 6 months. Investigation of smartphone usage habits, everyday experiences, routines and behaviour."
        }
      },
      {
        number:"04",
        domain:"Companies & HR",
        title:"Wellbeing, strain and behaviour patterns in the work context",
        body:"For organisations that wish to address mental health without surveilling their workforce. PULSE delivers anonymised, aggregated findings that decision-makers can act upon.",
        needs:["An accurate picture of psychological strain",
        "Trust from the workforce",
        "GDPR- and works-council-clean solution",
        "Integration into health strategy and EAP"],
        delivers:["Aggregated insights, never individual profiles",
        "Clearly documented data flows for works councils",
        "Validated scales from clinical research",
        "Configurable reports for HR and leadership"],
        example:{
          label:"Example project",
          text:"Pilot at an industrial company: anonymised EMA on strain and recovery over four weeks, leading to concrete measures for shift models."
        }
      },
      {
        number:"05",
        domain:"EMA-Only & Market Research",
        title:"Verified surveys — responses that can't be faked",
        body:"Survey-only studies without the sensing overhead, but with built-in verification. Every response is tied to a real person via the installed app and can optionally be timestamped with GPS context. This solves what online panels and click-worker studies cannot: provably real responses from real people — and on request, from a defined context (store, clinic, school, event).",
        needs:["Protection against multi-participation and panel fraud",
        "Low entry cost without a sensing tier",
        "High data quality without complex recruitment",
        "Market research, behavioural science, field experiments, mystery shopping"],
        delivers:["App-bound identity — one person, one Pulse ID, no account sharing",
        "Optional GPS context per response (with transparent consent)",
        "Geofence trigger: questionnaires only appear at the defined location",
        "Lowest tier entry (EMA Only · € 1,900) — deliberately without sensing, but with full API + onboarding call"],
        example:{
          label:"Example project",
          text:"Market research for a retail chain: 600 participants answer point-of-sale questions directly at the store. A geofence triggers the questionnaire on arrival, the GPS stamp verifies the on-site response, and the Pulse ID prevents double entries."
        }
      }]
    },
    ueberUns:{
      eyebrow:"Institute",
      title:"Center for Computation of Human Behavior",
      subtitle:"A scientific spin-out from LMU Munich, built by researchers for research teams.",
      intro:"The platform traces back to PhoneStudy, a research application developed in 2014 at the Chair of Psychological Methodology at LMU Munich, in collaboration with the University of St. Gallen and the University of Bayreuth. For more than a decade, PhoneStudy provided the methodological foundation for numerous studies on experience sampling and mobile sensing. In 2026, the Center for Computation of Human Behavior (2CHuB) was founded as an independent institute, and on this accumulated knowledge base PULSE was built as the successor to PhoneStudy: production-grade software infrastructure for research teams at universities, clinics and in industry.",
      timeline:{
        eyebrow:"Timeline",
        title:"From PhoneStudy to PULSE",
        intro:"Twelve years of methodological groundwork at the chair, re-cast in an independent platform under the umbrella of 2CHuB.",
        items:[{
          year:"2014",
          title:"PhoneStudy is founded at LMU Munich",
          description:"Development of a research application at the Chair of Psychological Methodology at LMU Munich, in collaboration with the University of St. Gallen and the University of Bayreuth.",
          highlighted:!0
        },
        {
          year:"2014–2025",
          title:"More than a decade of study practice",
          description:"PhoneStudy serves as the methodological foundation for numerous peer-reviewed studies on experience sampling, mobile sensing and digital behavioural research across Germany and Switzerland."
        },
        {
          year:"2025",
          title:"Decision to become an independent platform",
          description:"Third-party funding tightens and collaboration overhead grows. Long-term sustainability of the infrastructure beyond the lifetime of a single chair requires an independent organisational structure."
        },
        {
          year:"2026",
          title:"Founding of 2CHuB and launch of PULSE",
          description:"The Center for Computation of Human Behavior is established as an independent institute. PULSE is built on the knowledge base accumulated through twelve years of PhoneStudy and released as a production-grade platform.",
          highlighted:!0
        },
        {
          year:"Today",
          title:"Software infrastructure for research teams",
          description:"PULSE, as a product of 2CHuB, is in use at universities, clinics and in industry for studies in mobile behavioural research."
        }]
      },
      mehrAlsSaas:{
        eyebrow:"Service layer",
        title:"Methodological support as part of the platform",
        body:"PULSE is complemented by a service layer covering study-specific methodological consulting, ethics and data-protection templates, onboarding workshops and EU hosting. Methodological support comes from the same team that develops the platform.",
        cta:"Talk to the team",
        services:[{
          title:"Methods consulting",
          description:"Study-design support from the team behind PULSE — with expertise from over a decade of mobile behavioural research and more than 20 studies accompanied."
        },
        {
          title:"Ethics and data protection",
          description:"Templates for GDPR impact assessments, technical-organisational measures and ethics applications, tailored to the study design and the responsible ethics committee."
        },
        {
          title:"Onboarding workshops",
          description:"ESM and sensing workshops for the research group, so that teams do not need to navigate documentation but can become productive within a short period."
        },
        {
          title:"EU hosting & local options",
          description:"EU cloud by default. Dedicated hosting on your university servers on request."
        }]
      }
    },
    preise:{
      eyebrow:"Pricing",
      title:"Choose the plan that fits your study.",
      intro:"Unlimited studies, API and full data export are included in every tier. EU hosting, GDPR-compliant, grant-friendly. All prices excl. VAT.",
      badge:"Popular",
      close:"Close",
      overflowNote:"",
      plans:[
        {
          id:"emaOnly",
          name:"EMA Only",
          price:"€ 1,900",
          period:"/ year",
          tagline:"For researchers running EMA without app development — no sensing, full API.",
          features:["up to 400 participants","All ESM questionnaire types","CSV + API + Custom export","Email + onboarding call","GDPR-compliant EU hosting"],
          overage:"Overage: € 10 / extra participant (up to 1,000)",
          cta:"Choose EMA Only",
          ctaHref:"https://pulse.2chub.com",
          detail:"The specialised plan for survey-only studies — no sensing, a lower price and up to 400 participants. API access and an onboarding call included."
        },
        {
          id:"explore",
          name:"Explore",
          price:"€ 2,900",
          period:"/ year",
          tagline:"For pilot studies with a sensing component.",
          features:["up to 100 participants","Standard sensing (steps, location, screen time)","All ESM questionnaire types","CSV + API + Custom export","Email support","GDPR-compliant EU hosting"],
          cta:"Choose Explore",
          ctaHref:"https://pulse.2chub.com",
          detail:"Entry-level plan for pilot studies. Standard sensing (steps, location, screen time), all question types and full data export included. Upgrade to Research at any time."
        },
        {
          id:"research",
          name:"Research",
          price:"€ 9,900",
          period:"/ year",
          tagline:"Ideal for grant projects & dissertations.",
          features:["up to 400 participants","Full sensing (all sensors)","All ESM questionnaire types","CSV + API + Custom export","Priority + onboarding call","GDPR-compliant EU hosting"],
          overage:"Overage: € 25 / extra participant above 400",
          cta:"Choose Research",
          ctaHref:"https://pulse.2chub.com",
          highlight:!0,
          detail:"For grant projects and dissertations. Full sensing (all sensors), priority support and a dedicated onboarding call included."
        },
        {
          id:"lab",
          name:"Lab",
          price:"€ 14,900",
          period:"/ year",
          tagline:"Ideal for research groups & labs.",
          features:["up to 1,000 participants","Full sensing + priority processing","All ESM questionnaire types","CSV + API + Custom export","Priority + onboarding call","GDPR-compliant EU hosting"],
          overage:"Overage: € 15 / extra participant above 1,000",
          cta:"Choose Lab",
          ctaHref:"https://pulse.2chub.com",
          detail:"For research groups and larger labs up to 1,000 participants. Full sensing with priority processing, priority support for the whole group."
        },
        {
          id:"enterprise",
          name:"Enterprise",
          price:"On request",
          period:"",
          tagline:"For clinics, consortia & 1,000+ participants.",
          features:["1,000+ participants","Custom sensor configuration","Dedicated account manager","Contract model on agreement","Hosting on agreement"],
          cta:"Request a quote",
          ctaHref:"mailto:info@2chub.com?subject=Enterprise%20request%20PULSE",
          isEnterprise:!0,
          detail:"For clinics, consortia and studies with 1,000+ participants. Sensor config, pipeline, contract and hosting tailored; dedicated account manager."
        }
      ],
      matrixHeading:"Tiers compared",
      matrix:{
        featureColLabel:"Feature",
        compareHint:"selected",
        rows:[
          {label:"Participants",group:!0,cells:["up to 400","up to 100","up to 400","up to 1,000","Custom"]},
          {label:"All ESM questionnaire types",cells:["check","check","check","check","check"]},
          {label:"Standard sensing (steps, location, screen time)",cells:["dash","check","check","check","check"]},
          {label:"Full sensing (all sensors)",cells:["dash","dash","check","check","check"]},
          {label:"Priority processing",cells:["dash","dash","dash","check","check"]},
          {label:"Custom sensor configuration",cells:["dash","dash","dash","dash","check"]},
          {label:"CSV + API + Custom export",cells:["check","check","check","check","check"]},
          {label:"EU servers (GDPR)",cells:["check","check","check","check","check"]},
          {label:"Full raw-data access",cells:["check","check","check","check","check"]},
          {label:"Setup fee included",cells:["check","check","check","check","custom"]},
          {label:"Email support",cells:["check","check","check","check","check"]},
          {label:"Onboarding call",cells:["check","dash","check","check","check"]},
          {label:"Priority support",cells:["dash","dash","check","check","check"]},
          {label:"Dedicated account manager",cells:["dash","dash","dash","dash","check"]},
          {label:"Overage",group:!0,cells:["€ 10/p up to 1,000","Upgrade","€ 25/p above 400","€ 15/p above 1,000","On agreement"]}
        ]
      },
      requestModal:{
        subjectPrefix:"PULSE inquiry",
        intro:"Enter your email — we'll reply within 2 business days with all the details on licensing, activation and custom configuration.",
        emailLabel:"Your email address",
        emailPlaceholder:"Your email address",
        messageLabel:"Notes (optional)",
        messagePlaceholder:"Study size, timeline, special requirements …",
        contactNote:"We only use your address to reply to this inquiry.",
        submit:"Send inquiry",
        sending:"Sending…",
        cancel:"Cancel",
        closeAria:"Close",
        error:"Could not send inquiry. Please try again or write directly to info@2chub.com.",
        successTitle:"Inquiry sent",
        successBody:"Thank you — we've received your inquiry and will get back to you within 2 business days at the email address you provided.",
        successCta:"Close"
      },
      faqHeading:"Frequently asked questions",
      faqs:[
        {q:"What happens with more than 1,000 participants?",a:"Above 1,000 participants Enterprise is the right tier. Sensor configuration, data pipeline and hosting are set up individually. Contact us for a quote."},
        {q:"What does overage mean?",a:"The Research, Lab and EMA Only tiers allow adding more participants beyond the included contingent — at a fixed price per additional participant. EMA Only: € 10 up to 1,000. Research: € 25 above 400. Lab: € 15 above 1,000."},
        {q:"What happens with the data after the study ends?",a:"Your data stays in PULSE for 90 days after the study ends and can be fully exported. After that it is deleted in line with GDPR."},
        {q:"Is there a free tier?",a:"For students and master's theses we offer a free tier (up to 50 participants) on the full platform. Contact us for access."},
        {q:"Do I need programming skills to set up a study?",a:"No. The PULSE Studio is a no-code environment. Questionnaire builder, sensor configuration, participant management and data export are all handled through visual interfaces. Basic R or Python knowledge is helpful for advanced analysis, but not required to run a study."},
        {q:"Does PULSE work on both iOS and Android?",a:"Yes. PULSE provides native apps for both iOS and Android. Participants download the app from the App Store or Google Play Store and join a study via a study code or invite link."},
        {q:"Can multiple team members access the same study?",a:"Yes. All paid plans support multiple researcher accounts per study. Roles (e.g. principal investigator, study coordinator, data analyst) can be configured individually."},
        {q:"Can I run multiple studies at the same time?",a:"Yes. All plans allow an unlimited number of simultaneous studies. The participant contingent applies per plan and contract period — not per individual study."},
        {q:"How do participants join a study?",a:"Participants receive a personal study link or QR code. After downloading the app and scanning the code, they are immediately enrolled. Onboarding steps (informed consent, baseline questionnaire) can optionally be integrated directly into the app flow."}
      ]
    },
    publikationen:{
      eyebrow:"Academic background",
      title:"Publications",
      intro:"Peer-reviewed studies collected with PULSE or PhoneStudy. A growing corpus across experience sampling and mobile sensing research.",
      stats:[
        {value:"9+", label:"Publications"},
        {value:"2022–2025", label:"Time span"},
        {value:"Nature Comms.", label:"Highest visibility"}
      ],
      searchPlaceholder:"Title, authors or journal …",
      filterAll:"All",
      entries:"entries",
      colYear:"Year",
      colTitle:"Title / Authors",
      colJournal:"Journal",
      colDoi:"DOI",
      noResults:"No entries found.",
      note:"This list is updated continuously. If your study used PhoneStudy or PULSE and is missing here, please get in touch."
    },
    // Standalone block for /features — intentionally separate from methods.items since methods route is disabled.
    features:{
      eyebrow:"Features",
      title:"Question Types and Sensors",
      intro:"All collectible data points at a glance: twelve question types for experience sampling and twelve sensor and wearable data sources for passive sensing.",
      itemTypes:{
        eyebrow:"Question types",
        title:"Twelve question types in one editor",
        body:"Drag-and-drop in the studio. Branching, computation and context-aware triggers included.",
        items:[{
          name:"Single Choice",
          description:"Classic single selection"
        },
        {
          name:"Multiple Choice",
          description:"Several options at once"
        },
        {
          name:"Likert Scale",
          description:"Granularity freely chosen"
        },
        {
          name:"Slider",
          description:"Optional anchor of the last response"
        },
        {
          name:"Continuous Line",
          description:"Intensity drawn over time"
        },
        {
          name:"Free Text",
          description:"Short or long, with length limit"
        },
        {
          name:"Voice Memo",
          description:"Audio responses with transcription"
        },
        {
          name:"Photo / Image",
          description:"Participant photo within the item"
        },
        {
          name:"Video",
          description:"Short video clips as response"
        },
        {
          name:"Matrix",
          description:"Two-dimensional arrangement such as a mood map"
        },
        {
          name:"Conditional Logic",
          description:"Branching based on answers"
        },
        {
          name:"Computation",
          description:"Values computed on-device from prior answers"
        }]
      },
      sensors:{
        eyebrow:"Sensors & wearables",
        title:"Smartphone and wearable in one pipeline",
        body:"Technically available sensors, configurable per study and with granular consent per sensor.",
        items:[{
          name:"GPS / Location",
          description:"Mobility profiles, time at home, places visited"
        },
        {
          name:"Accelerometer",
          description:"Movement energy and activity recognition"
        },
        {
          name:"Steps",
          description:"Pedometer integration, drift-resistant"
        },
        {
          name:"Screen events",
          description:"Screen on/off, app switches, sessions"
        },
        {
          name:"Screen time",
          description:"Bedtime use, app categories, daily duration"
        },
        {
          name:"Ambient light",
          description:"Daylight exposure, indoor/outdoor"
        },
        {
          name:"Microphone (volume)",
          description:"Ambient noise without content capture"
        },
        {
          name:"Apple Health",
          description:"Apple Watch, HRV, sleep, activity"
        },
        {
          name:"WHOOP",
          description:"Strain, recovery, sleep stages"
        },
        {
          name:"Oura Ring",
          description:"Sleep, temperature, readiness"
        },
        {
          name:"Garmin",
          description:"Raw data or aggregator bridge"
        },
        {
          name:"Fitbit",
          description:"Via aggregator: activity and sleep"
        }]
      }
    }
  }
};

export const languages = /** @type {const} */ (["de", "en"]);
