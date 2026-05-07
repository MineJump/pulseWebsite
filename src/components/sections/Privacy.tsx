import { useTranslation } from "../../i18n";

export function Privacy() {
  const { language } = useTranslation();
  return language === "de" ? <PrivacyDe /> : <PrivacyEn />;
}

const sectionHeading =
  "mb-6 text-[1.25rem] md:text-[1.5rem] leading-tight tracking-tight";
const subHeading = "mb-3 mt-6 text-[1rem] md:text-[1.125rem] tracking-tight";
const paragraph = "leading-relaxed";
const list = "list-disc pl-6 space-y-2";
const eyebrow = "uppercase tracking-[0.1em] text-sm mb-4";
const eyebrowStyle = {
  color: "var(--text-dim)",
  fontFamily: "'IBM Plex Mono', monospace",
};
const divider = "mt-16 pt-16 border-t";
const dividerStyle = { borderColor: "var(--border)" };
const promiseBox = "p-6 rounded-xl";
const promiseBoxStyle = { backgroundColor: "var(--bg-elev)" };

function PrivacyDe() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="mb-4">Datenschutzerklärung</h1>
        <p className={eyebrow} style={eyebrowStyle}>
          2chub GmbH &amp; PULSE Forschungsapp
        </p>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Datenschutz nehmen wir ernst. Wir erheben nur Daten, die wir für den
            Betrieb der Website oder für eine konkrete wissenschaftliche Studie
            tatsächlich brauchen, verarbeiten sie pseudonymisiert innerhalb der
            EU und geben sie niemals zu kommerziellen Zwecken an Dritte weiter.
          </p>
          <p className={paragraph}>Diese Erklärung besteht aus zwei Teilen:</p>
          <ul className={list}>
            <li>
              <strong>Teil A</strong> – Nutzung unserer Website{" "}
              <em>2chub.com</em>
            </li>
            <li>
              <strong>Teil B</strong> – Nutzung unserer Forschungsapp{" "}
              <em>PULSE</em>
            </li>
          </ul>
        </div>

        <div className={`${promiseBox} mt-8`} style={promiseBoxStyle}>
          <p className={eyebrow} style={eyebrowStyle}>
            Unser Versprechen
          </p>
          <ul className={list} style={{ color: "var(--text-muted)" }}>
            <li>
              <strong>Freiwillig &amp; widerrufbar</strong> – Teilnahme und
              Datenerhebung basieren immer auf Ihrer ausdrücklichen Einwilligung
              und können jederzeit ohne Nachteile widerrufen werden.
            </li>
            <li>
              <strong>Pseudonym</strong> – Wir identifizieren Sie über eine
              Pulse-ID, nicht über Klarname oder E-Mail-Adresse.
            </li>
            <li>
              <strong>Datensparsam</strong> – Sensor- und Studiendaten werden
              nur erhoben, wenn die konkrete Studie sie benötigt; Sie sehen vor
              Beginn, was erfasst wird.
            </li>
            <li>
              <strong>Ohne Werbung &amp; Tracking</strong> – keine Werbung,
              keine Analytics, keine Weitergabe an Werbenetzwerke.
            </li>
            <li>
              <strong>DSGVO-konform</strong> – Verarbeitung innerhalb der EU,
              verschlüsselte Übertragung, rollenbasierte Zugriffskontrolle.
            </li>
            <li>
              <strong>Löschung auf Wunsch</strong> – Eine kurze Mail genügt und
              Ihre personenbezogenen Daten werden vollständig gelöscht, soweit
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className={sectionHeading}>Verantwortlicher (für beide Teile)</h2>
        <div className="space-y-2" style={{ color: "var(--text-muted)" }}>
          <p>2chub – Center for Computation of Human Behavior GmbH</p>
          <p>München, Deutschland</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:info@2chub.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              info@2chub.com
            </a>
          </p>
          <p>
            Für studienspezifische Fragen kontaktieren Sie die in der jeweiligen
            Einwilligungserklärung genannte Studienleitung.
          </p>
        </div>
      </section>

      {/* ────────────── TEIL A – WEBSITE ────────────── */}
      <section className={divider} style={dividerStyle}>
        <p className={eyebrow} style={eyebrowStyle}>
          Teil A
        </p>
        <h2 className={sectionHeading}>Nutzung dieser Website (2chub.com)</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Die Website 2chub.com ist eine reine Informationsseite. Sie
            verwendet <strong>keine Cookies</strong>,{" "}
            <strong>kein Tracking</strong> und{" "}
            <strong>keine Analyse-Tools</strong> (kein Google Analytics, kein
            Matomo, keine Pixel).
          </p>
        </div>

        <h3 className={subHeading}>A.1 Hosting &amp; Server-Logs</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Unsere Website wird auf Servern in der EU gehostet. Beim Aufruf
            überträgt Ihr Browser technisch notwendige Daten an den Server
            (IP-Adresse, User-Agent, Zeitstempel, aufgerufene URL). Diese Logs
            dienen ausschließlich der Betriebssicherheit und werden nach{" "}
            <strong>maximal 14 Tagen</strong> automatisch gelöscht.
          </p>
          <p className={paragraph}>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einer stabilen, sicheren Website).
          </p>
        </div>

        <h3 className={subHeading}>A.2 Schriftarten</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Die verwendeten Schriftarten (IBM Plex Sans, IBM Plex Mono) werden
            lokal von unserem Server ausgeliefert. Es erfolgt keine Verbindung
            zu externen Schriftdiensten wie Google Fonts.
          </p>
        </div>

        <h3 className={subHeading}>A.3 Kontakt per E-Mail</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Nachricht
            inklusive Absender nur so lange, wie es zur Bearbeitung erforderlich
            ist. Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
          </p>
        </div>
      </section>

      {/* ────────────── TEIL B – APP ────────────── */}
      <section className={divider} style={dividerStyle}>
        <p className={eyebrow} style={eyebrowStyle}>
          Teil B
        </p>
        <h2 className={sectionHeading}>Nutzung der PULSE Forschungsapp</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            PULSE ist die mobile App des Center for Computation of Human
            Behavior (2CHuB). Sie wird ausschließlich im Rahmen konkreter
            psychologischer Studien eingesetzt. Welche Daten erfasst werden,
            hängt von der Konfiguration der jeweiligen Studie ab und wird in der
            Einwilligungserklärung sowie im App-Onboarding transparent
            aufgelistet.
          </p>
        </div>

        <h3 className={subHeading}>B.1 Zweck</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Die erhobenen Daten dienen ausschließlich der wissenschaftlichen
            Forschung zu Zusammenhängen zwischen Verhalten, Umgebung und
            psychischen Zuständen. Daten werden pseudonymisiert verarbeitet und
            nicht zu kommerziellen Zwecken genutzt.
          </p>
        </div>

        <h3 className={subHeading}>B.2 Welche Daten werden erhoben</h3>
        <div className="space-y-6" style={{ color: "var(--text-muted)" }}>
          <div>
            <p className={`${paragraph} font-medium`}>
              Studiendaten (Experience Sampling)
            </p>
            <ul className={list}>
              <li>
                Antworten auf kurze Fragebögen (Text, Auswahl, Skalen, Bilder,
                optionale Audio- oder Foto-Aufnahmen)
              </li>
              <li>Zeitpunkt und Kontext der Beantwortung</li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              Sensordaten (Passive Sensing)
            </p>
            <ul className={list}>
              <li>
                <strong>Standort</strong> – Vordergrund und Hintergrund, für
                Bewegungsmuster und Aufenthaltsorte
              </li>
              <li>
                <strong>Bewegung &amp; Aktivität</strong> – Beschleunigungs- und
                Gyroskop-Daten, erkannte Aktivitätsarten
              </li>
              <li>
                <strong>Schritte</strong> – Schrittzähler und Distanz
              </li>
              <li>
                <strong>Gesundheitsdaten</strong> – optional: Herzfrequenz,
                aktiver Energieverbrauch, Schlaf (iOS HealthKit / Android Health
                Connect)
              </li>
              <li>
                <strong>Bildschirmzeit &amp; App-Nutzung</strong> – anonyme
                Nutzungsdauer und -muster, keine Inhalte
              </li>
              <li>
                <strong>Wi-Fi &amp; Bluetooth</strong> – Geräte-IDs und
                Signalstärken in der Umgebung, keine Verbindung zu Geräten
              </li>
              <li>
                <strong>Umgebung</strong> – Umgebungslautstärke und Helligkeit
                (Android), Akkustand
              </li>
              <li>
                <strong>Telefonstatus</strong> – Dauer und Zeitpunkt von
                Anrufen, <strong>ohne Inhalt oder Nummern</strong>
              </li>
              <li>
                <strong>Tastatur</strong> – bei aktivierter PULSE-Tastatur:
                statistische Tipp-Metriken,{" "}
                <strong>
                  keine eingegebenen Texte, Nachrichten oder Passwörter
                </strong>
              </li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              Geräte- und Nutzungsdaten
            </p>
            <ul className={list}>
              <li>Pseudonyme Pulse-ID (kein Klarname, keine Adresse)</li>
              <li>Gerätetyp, Betriebssystem, App-Version</li>
              <li>Technische Logs zur Fehleranalyse</li>
              <li>
                Push-Notification-Token (für Benachrichtigungen zu Fragebögen)
              </li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              Externe Dienste (optional)
            </p>
            <ul className={list}>
              <li>
                <strong>Garmin Connect</strong> – bei freiwilliger Verbindung
                werden Gesundheits- und Aktivitätsdaten aus Ihrem Garmin-Konto
                abgerufen (OAuth 2.0)
              </li>
              <li>
                <strong>Spotify</strong> – bei freiwilliger Verbindung wird Ihr
                Wiedergabeverlauf abgerufen (OAuth 2.0)
              </li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              Berechtigungen des Geräts
            </p>
            <ul className={list}>
              <li>
                <strong>Kamera</strong> – ausschließlich zum Scannen von
                QR-Codes beim Login sowie für optionale Foto-Antworten in
                Fragebögen
              </li>
              <li>
                <strong>Mikrofon</strong> – ausschließlich für optionale
                Audio-Aufnahmen in Fragebögen sowie (Android) zur Messung der
                Umgebungslautstärke
              </li>
              <li>
                <strong>Fotos</strong> – für optionale Foto-Antworten
              </li>
              <li>
                <strong>Push-Benachrichtigungen</strong> – für
                Studien-Erinnerungen
              </li>
            </ul>
          </div>
        </div>

        <h3 className={subHeading}>B.3 Rechtsgrundlage</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Rechtsgrundlage ist Ihre ausdrückliche Einwilligung gemäß Art. 6
            Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO. Sie erteilen diese
            Einwilligung vor Studienbeginn innerhalb der App. Die Einwilligung
            kann jederzeit widerrufen werden, ohne dass Ihnen Nachteile
            entstehen.
          </p>
        </div>

        <h3 className={subHeading}>B.4 Weitergabe an Dritte</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Ihre Studiendaten werden <strong>nicht</strong> an Dritte für
            kommerzielle Zwecke weitergegeben. Zugriff haben ausschließlich die
            benannte Studienleitung und das Forschungsteam. Technische
            Dienstleister (Cloud-Hosting, Push-Notifications) erhalten Zugriff
            nur im Rahmen dokumentierter Auftragsverarbeitungsverträge und
            ausschließlich zum Betrieb der Infrastruktur. Publikationen erfolgen
            stets in aggregierter, anonymisierter Form.
          </p>
        </div>

        <h3 className={subHeading}>B.5 Speicherdauer &amp; Löschung</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Studiendaten werden so lange gespeichert, wie es der Studienzweck
            erfordert, maximal jedoch gemäß den in der jeweiligen
            Einwilligungserklärung genannten Fristen. Bei Widerruf Ihrer
            Einwilligung werden Ihre personenbezogenen Daten vollständig
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </div>

        <div
          id="data-deletion-request"
          className={`${promiseBox} mt-6`}
          style={promiseBoxStyle}
        >
          <p className={eyebrow} style={eyebrowStyle}>
            Löschung Ihrer Daten in der PULSE App (2chub) anfordern
          </p>
          <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
            <p className={paragraph}>
              Als Nutzerin oder Nutzer der <strong>PULSE Forschungsapp</strong>{" "}
              der{" "}
              <strong>
                2chub – Center for Computation of Human Behavior GmbH
              </strong>{" "}
              können Sie jederzeit die Löschung{" "}
              <strong>aller oder einzelner</strong> Daten verlangen, die wir
              über Sie gespeichert haben –{" "}
              <strong>auch ohne Ihr PULSE-Konto zu löschen</strong>.
            </p>

            <div>
              <p className={`${paragraph} font-medium`}>
                So fordern Sie die Löschung an:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>
                  Klicken Sie auf den untenstehenden Button oder schreiben Sie
                  eine E-Mail an{" "}
                  <a
                    href="mailto:info@2chub.com"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: "var(--text)" }}
                  >
                    info@2chub.com
                  </a>
                  .
                </li>
                <li>
                  Geben Sie Ihre <strong>Pulse-ID</strong> an (zu finden in der
                  App unter <em>Einstellungen → Konto</em>), damit wir Ihre
                  Daten eindeutig zuordnen können.
                </li>
                <li>
                  Geben Sie an, <strong>welche Daten</strong> gelöscht werden
                  sollen – alle Daten oder nur bestimmte Kategorien (z.&nbsp;B.
                  Standortdaten, Sensordaten einer bestimmten Studie,
                  Tastatur-Metriken).
                </li>
                <li>
                  Optional: Geben Sie an, ob Ihr <strong>PULSE-Konto</strong>{" "}
                  bestehen bleiben soll (Teil-Löschung) oder ebenfalls entfernt
                  werden soll (Voll-Löschung).
                </li>
                <li>
                  Wir bestätigen den Eingang innerhalb von{" "}
                  <strong>48 Stunden</strong> und schließen die Löschung
                  innerhalb von <strong>30 Tagen</strong> ab (Art. 12 Abs. 3
                  DSGVO).
                </li>
              </ol>
            </div>

            <p className={paragraph}>
              <a
                href="mailto:info@2chub.com?subject=PULSE%20App%20%E2%80%93%20Datenl%C3%B6schung%20anfordern&body=Hallo%202chub-Team%2C%0A%0Aich%20m%C3%B6chte%20die%20L%C3%B6schung%20meiner%20Daten%20in%20der%20PULSE%20Forschungsapp%20anfordern.%0A%0APulse-ID%3A%20%0ABetroffene%20Studie%20(falls%20zutreffend)%3A%20%0AZu%20l%C3%B6schende%20Daten%20(alle%20%2F%20einzelne%20Kategorien)%3A%20%0AKonto%20ebenfalls%20l%C3%B6schen%3F%20(ja%20%2F%20nein)%3A%20%0A%0AVielen%20Dank."
                className="inline-block rounded-lg px-4 py-2 transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-fg)",
                }}
              >
                Datenlöschung per E-Mail anfragen
              </a>
            </p>

            <div>
              <p className={`${paragraph} font-medium`}>
                Welche Daten werden gelöscht
              </p>
              <p className={paragraph}>
                Bei einer Voll-Löschung entfernen wir folgende Daten vollständig
                und unwiderruflich aus unseren aktiven Systemen sowie aus
                Backups (Backups werden nach der regulären Rotation innerhalb
                von maximal 35 Tagen überschrieben):
              </p>
              <ul className={list}>
                <li>Ihre Pulse-ID und zugehörige Konto-Metadaten</li>
                <li>
                  Alle Sensordaten (Standort, Bewegung, Aktivität, Schritte,
                  Gesundheit, Bildschirmzeit, App-Nutzung, Wi-Fi, Bluetooth,
                  Umgebungslautstärke, Helligkeit, Akku, Telefonstatus,
                  Tastatur-Metriken)
                </li>
                <li>
                  Alle Antworten auf Fragebögen (Experience Sampling) inkl.
                  optionaler Foto- und Audio-Antworten
                </li>
                <li>Push-Notification-Tokens und Geräte-Metadaten</li>
                <li>
                  OAuth-Verknüpfungen und abgerufene Daten aus Garmin Connect
                  und Spotify
                </li>
                <li>Technische Logs, die Ihrer Pulse-ID zugeordnet sind</li>
              </ul>
            </div>

            <div>
              <p className={`${paragraph} font-medium`}>
                Welche Daten möglicherweise aufbewahrt werden
              </p>
              <ul className={list}>
                <li>
                  <strong>
                    Bereits anonymisierte, aggregierte Forschungsergebnisse
                  </strong>{" "}
                  (z.&nbsp;B. Gruppen-Mittelwerte in Publikationen) können nicht
                  mehr auf Sie zurückgeführt werden und bleiben dauerhaft Teil
                  des wissenschaftlichen Datensatzes (Art. 17 Abs. 3 lit. d
                  DSGVO – Forschungsprivileg).
                </li>
                <li>
                  <strong>E-Mail-Korrespondenz</strong> mit Ihnen zur
                  Löschungsanfrage selbst (als Nachweis der Bearbeitung) –{" "}
                  <strong>bis zu 3 Jahre</strong> (§&nbsp;195 BGB).
                </li>
                <li>
                  <strong>Server-Logs der Website</strong> (IP-Adresse,
                  Zeitstempel) – werden unabhängig von der Löschungsanfrage
                  automatisch nach <strong>maximal 14 Tagen</strong> gelöscht.
                </li>
              </ul>
              <p className={paragraph}>
                Alle anderen personenbezogenen Daten werden ohne
                Aufbewahrungsfrist sofort gelöscht.
              </p>
            </div>
          </div>
        </div>

        <h3 className={subHeading}>B.6 Ihre Rechte</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>Sie haben jederzeit das Recht auf:</p>
          <ul className={list}>
            <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            <li>
              Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO) – zuständig
              ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA)
            </li>
          </ul>
          <p className={paragraph}>
            Zur Ausübung dieser Rechte genügt eine formlose Mail an{" "}
            <a
              href="mailto:info@2chub.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              info@2chub.com
            </a>
            .
          </p>
        </div>

        <h3 className={subHeading}>B.7 Datensicherheit</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Alle Übertragungen zwischen App und Server erfolgen verschlüsselt
            (TLS). Datenbanken und Backups werden verschlüsselt gespeichert.
            Zugriffe sind rollenbasiert beschränkt und protokolliert. Die
            Infrastruktur wird innerhalb der EU betrieben.
          </p>
        </div>

        <h3 className={subHeading}>B.8 Kinder</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            PULSE richtet sich an Personen ab 16 Jahren. Teilnehmende unter 18
            benötigen zusätzlich die Einwilligung einer sorgeberechtigten
            Person, sofern die jeweilige Studie Minderjährige einschließt.
          </p>
        </div>
      </section>

      <section className={divider} style={dividerStyle}>
        <h2 className={sectionHeading}>Änderungen dieser Erklärung</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Wir behalten uns vor, diese Datenschutzerklärung bei rechtlichen
            oder technischen Änderungen anzupassen. Maßgeblich ist die jeweils
            aktuelle Fassung auf{" "}
            <a
              href="https://2chub.com/privacy"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              2chub.com/privacy
            </a>
            .
          </p>
          <p className="text-sm" style={{ color: "var(--text-dim)" }}>
            Stand: April 2026
          </p>
        </div>
      </section>
    </div>
  );
}

function PrivacyEn() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="mb-4">Privacy Policy</h1>
        <p className={eyebrow} style={eyebrowStyle}>
          2chub GmbH &amp; PULSE Research App
        </p>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            We take data protection seriously. We only collect data that we
            actually need to operate the website or to run a specific scientific
            study, we process it in pseudonymised form within the EU, and we
            never share it with third parties for commercial purposes.
          </p>
          <p className={paragraph}>This policy has two parts:</p>
          <ul className={list}>
            <li>
              <strong>Part A</strong> – Use of our website <em>2chub.com</em>
            </li>
            <li>
              <strong>Part B</strong> – Use of our research app <em>PULSE</em>
            </li>
          </ul>
        </div>

        <div className={`${promiseBox} mt-8`} style={promiseBoxStyle}>
          <p className={eyebrow} style={eyebrowStyle}>
            Our promise
          </p>
          <ul className={list} style={{ color: "var(--text-muted)" }}>
            <li>
              <strong>Voluntary &amp; revocable</strong> – Participation and
              data collection are always based on your explicit consent and can
              be withdrawn at any time without disadvantage.
            </li>
            <li>
              <strong>Pseudonymous</strong> – We identify you via a Pulse ID,
              not by real name or email.
            </li>
            <li>
              <strong>Minimal data</strong> – Sensor and study data are only
              collected when the specific study requires them; you see exactly
              what is recorded before you start.
            </li>
            <li>
              <strong>No ads, no tracking</strong> – no advertising, no
              analytics, no sharing with ad networks.
            </li>
            <li>
              <strong>GDPR compliant</strong> – processing within the EU,
              encrypted transmission, role-based access control.
            </li>
            <li>
              <strong>Deletion on request</strong> – a short email is enough and
              your personal data is fully deleted, unless statutory retention
              obligations apply.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className={sectionHeading}>Data controller (for both parts)</h2>
        <div className="space-y-2" style={{ color: "var(--text-muted)" }}>
          <p>2chub – Center for Computation of Human Behavior GmbH</p>
          <p>Munich, Germany</p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:info@2chub.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              info@2chub.com
            </a>
          </p>
          <p>
            For study-specific questions please contact the principal
            investigator listed in the respective consent form.
          </p>
        </div>
      </section>

      {/* ────────────── PART A – WEBSITE ────────────── */}
      <section className={divider} style={dividerStyle}>
        <p className={eyebrow} style={eyebrowStyle}>
          Part A
        </p>
        <h2 className={sectionHeading}>Use of this website (2chub.com)</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            2chub.com is a purely informational website. It uses{" "}
            <strong>no cookies</strong>, <strong>no tracking</strong>, and{" "}
            <strong>no analytics tools</strong> (no Google Analytics, no Matomo,
            no pixels).
          </p>
        </div>

        <h3 className={subHeading}>A.1 Hosting &amp; server logs</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Our website is hosted on servers in the EU. When you visit, your
            browser sends technically necessary data to the server (IP address,
            user agent, timestamp, requested URL). These logs are used only for
            operational security and are automatically deleted after{" "}
            <strong>14 days at the latest</strong>.
          </p>
          <p className={paragraph}>
            Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a stable,
            secure website).
          </p>
        </div>

        <h3 className={subHeading}>A.2 Fonts</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            The fonts used (IBM Plex Sans, IBM Plex Mono) are served locally by
            our own server. No connection is made to external font services such
            as Google Fonts.
          </p>
        </div>

        <h3 className={subHeading}>A.3 Contact by email</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            When you contact us by email, we store your message including the
            sender only for as long as necessary to handle your request. Legal
            basis: Art. 6(1)(b) or (f) GDPR.
          </p>
        </div>
      </section>

      {/* ────────────── PART B – APP ────────────── */}
      <section className={divider} style={dividerStyle}>
        <p className={eyebrow} style={eyebrowStyle}>
          Part B
        </p>
        <h2 className={sectionHeading}>Use of the PULSE research app</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            PULSE is the mobile app of the Center for Computation of Human
            Behavior (2CHuB). It is used exclusively within specific
            psychological studies. The actual data collected depends on the
            configuration of each study and is listed transparently in the
            consent form and during in-app onboarding.
          </p>
        </div>

        <h3 className={subHeading}>B.1 Purpose</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            The data is used solely for scientific research into the
            relationship between behaviour, environment and mental states. Data
            is processed in pseudonymised form and is never used for commercial
            purposes.
          </p>
        </div>

        <h3 className={subHeading}>B.2 What data is collected</h3>
        <div className="space-y-6" style={{ color: "var(--text-muted)" }}>
          <div>
            <p className={`${paragraph} font-medium`}>
              Study data (Experience Sampling)
            </p>
            <ul className={list}>
              <li>
                Responses to short questionnaires (text, choice, scales, images,
                optional audio or photo answers)
              </li>
              <li>Timestamp and context of each response</li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              Sensor data (Passive Sensing)
            </p>
            <ul className={list}>
              <li>
                <strong>Location</strong> – foreground and background, to
                analyse movement patterns and places
              </li>
              <li>
                <strong>Motion &amp; activity</strong> – accelerometer and
                gyroscope data, detected activity types
              </li>
              <li>
                <strong>Steps</strong> – step count and distance
              </li>
              <li>
                <strong>Health data</strong> – optional: heart rate, active
                energy, sleep (iOS HealthKit / Android Health Connect)
              </li>
              <li>
                <strong>Screen time &amp; app usage</strong> – anonymous usage
                duration and patterns, no content
              </li>
              <li>
                <strong>Wi-Fi &amp; Bluetooth</strong> – nearby device IDs and
                signal strengths, no connection to devices
              </li>
              <li>
                <strong>Environment</strong> – ambient noise and light
                (Android), battery level
              </li>
              <li>
                <strong>Phone state</strong> – duration and time of calls,{" "}
                <strong>no content or phone numbers</strong>
              </li>
              <li>
                <strong>Keyboard</strong> – if the PULSE keyboard is enabled:
                statistical typing metrics only,{" "}
                <strong>no entered text, messages or passwords</strong>
              </li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>Device and usage data</p>
            <ul className={list}>
              <li>Pseudonymous Pulse ID (no clear name or address)</li>
              <li>Device type, operating system, app version</li>
              <li>Technical logs for error analysis</li>
              <li>Push-notification token (for questionnaire notifications)</li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>
              External services (optional)
            </p>
            <ul className={list}>
              <li>
                <strong>Garmin Connect</strong> – when voluntarily linked,
                health and activity data is fetched from your Garmin account
                (OAuth 2.0)
              </li>
              <li>
                <strong>Spotify</strong> – when voluntarily linked, your
                playback history is fetched (OAuth 2.0)
              </li>
            </ul>
          </div>

          <div>
            <p className={`${paragraph} font-medium`}>Device permissions</p>
            <ul className={list}>
              <li>
                <strong>Camera</strong> – used only to scan login QR codes and
                for optional photo answers in questionnaires
              </li>
              <li>
                <strong>Microphone</strong> – used only for optional audio
                answers in questionnaires and (Android) to measure ambient noise
                levels
              </li>
              <li>
                <strong>Photos</strong> – for optional photo answers
              </li>
              <li>
                <strong>Push notifications</strong> – for study reminders
              </li>
            </ul>
          </div>
        </div>

        <h3 className={subHeading}>B.3 Legal basis</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Processing is based on your explicit consent pursuant to Art.
            6(1)(a) and Art. 9(2)(a) GDPR. You provide this consent in the app
            before a study starts. Consent can be withdrawn at any time without
            disadvantage.
          </p>
        </div>

        <h3 className={subHeading}>B.4 Sharing with third parties</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Your study data is <strong>not</strong> shared with third parties
            for commercial purposes. Access is restricted to the named study
            lead and research team. Technical service providers (cloud hosting,
            push notifications) only have access to operate the infrastructure,
            under documented data processing agreements. Publications always
            present data in aggregated, anonymised form.
          </p>
        </div>

        <h3 className={subHeading}>B.5 Retention &amp; deletion</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            Study data is retained for as long as the study purpose requires and
            at most for the period stated in the respective consent form. Upon
            withdrawal of consent, your personal data is fully deleted, unless
            statutory retention obligations apply.
          </p>
        </div>

        <div
          id="data-deletion-request"
          className={`${promiseBox} mt-6`}
          style={promiseBoxStyle}
        >
          <p className={eyebrow} style={eyebrowStyle}>
            Request deletion of your data in the PULSE app (2chub)
          </p>
          <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
            <p className={paragraph}>
              As a user of the <strong>PULSE research app</strong> by{" "}
              <strong>
                2chub – Center for Computation of Human Behavior GmbH
              </strong>
              , you can request deletion of <strong>all or specific</strong>{" "}
              data we hold about you at any time –{" "}
              <strong>without having to delete your PULSE account</strong>.
            </p>

            <div>
              <p className={`${paragraph} font-medium`}>
                How to request deletion:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>
                  Click the button below or send an email to{" "}
                  <a
                    href="mailto:info@2chub.com"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: "var(--text)" }}
                  >
                    info@2chub.com
                  </a>
                  .
                </li>
                <li>
                  Include your <strong>Pulse ID</strong> (shown in the app under{" "}
                  <em>Settings → Account</em>) so we can uniquely identify your
                  data.
                </li>
                <li>
                  Specify <strong>which data</strong> should be deleted – all
                  data or only specific categories (e.g. location data, sensor
                  data from a specific study, keyboard metrics).
                </li>
                <li>
                  Optional: Indicate whether your <strong>PULSE account</strong>{" "}
                  should remain active (partial deletion) or be removed as well
                  (full deletion).
                </li>
                <li>
                  We confirm receipt within <strong>48 hours</strong> and
                  complete the deletion within <strong>30 days</strong>
                  (Art. 12(3) GDPR).
                </li>
              </ol>
            </div>

            <p className={paragraph}>
              <a
                href="mailto:info@2chub.com?subject=PULSE%20app%20%E2%80%93%20data%20deletion%20request&body=Hello%202chub%20team%2C%0A%0AI%20would%20like%20to%20request%20deletion%20of%20my%20data%20in%20the%20PULSE%20research%20app.%0A%0APulse%20ID%3A%20%0ARelated%20study%20(if%20applicable)%3A%20%0AData%20to%20be%20deleted%20(all%20%2F%20specific%20categories)%3A%20%0ADelete%20account%20as%20well%3F%20(yes%20%2F%20no)%3A%20%0A%0AThank%20you."
                className="inline-block rounded-lg px-4 py-2 transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-fg)",
                }}
              >
                Request data deletion by email
              </a>
            </p>

            <div>
              <p className={`${paragraph} font-medium`}>
                Data that will be deleted
              </p>
              <p className={paragraph}>
                In the case of a full deletion we permanently and irreversibly
                remove the following data from our active systems and from
                backups (backups are overwritten within a maximum of 35 days as
                part of normal rotation):
              </p>
              <ul className={list}>
                <li>Your Pulse ID and associated account metadata</li>
                <li>
                  All sensor data (location, motion, activity, steps, health,
                  screen time, app usage, Wi-Fi, Bluetooth, ambient noise,
                  ambient light, battery, phone state, keyboard metrics)
                </li>
                <li>
                  All questionnaire responses (Experience Sampling) including
                  optional photo and audio answers
                </li>
                <li>Push-notification tokens and device metadata</li>
                <li>
                  OAuth connections and data fetched from Garmin Connect and
                  Spotify
                </li>
                <li>Technical logs linked to your Pulse ID</li>
              </ul>
            </div>

            <div>
              <p className={`${paragraph} font-medium`}>
                Data that may be retained
              </p>
              <ul className={list}>
                <li>
                  <strong>
                    Already anonymised, aggregated research results
                  </strong>{" "}
                  (e.g. group averages in publications) can no longer be traced
                  back to you and remain a permanent part of the scientific
                  dataset (Art. 17(3)(d) GDPR – research exemption).
                </li>
                <li>
                  <strong>Email correspondence</strong> with you about the
                  deletion request itself (as evidence that the request was
                  handled) – <strong>up to 3 years</strong> (§&nbsp;195 BGB).
                </li>
                <li>
                  <strong>Website server logs</strong> (IP address, timestamp) –
                  automatically deleted after{" "}
                  <strong>no more than 14 days</strong>, independently of the
                  deletion request.
                </li>
              </ul>
              <p className={paragraph}>
                All other personal data is deleted immediately, without any
                retention period.
              </p>
            </div>
          </div>
        </div>

        <h3 className={subHeading}>B.6 Your rights</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>You have the right to:</p>
          <ul className={list}>
            <li>Access stored data (Art. 15 GDPR)</li>
            <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
            <li>Erasure (Art. 17 GDPR)</li>
            <li>Restriction of processing (Art. 18 GDPR)</li>
            <li>Data portability (Art. 20 GDPR)</li>
            <li>Withdraw consent (Art. 7(3) GDPR)</li>
            <li>
              Lodge a complaint with a supervisory authority (Art. 77 GDPR) –
              the competent authority is the Bavarian State Office for Data
              Protection Supervision (BayLDA)
            </li>
          </ul>
          <p className={paragraph}>
            To exercise these rights, a short email to{" "}
            <a
              href="mailto:info@2chub.com"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              info@2chub.com
            </a>{" "}
            is enough.
          </p>
        </div>

        <h3 className={subHeading}>B.7 Data security</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            All transmissions between app and server use TLS encryption.
            Databases and backups are stored encrypted. Access is role-based and
            logged. The infrastructure is operated within the EU.
          </p>
        </div>

        <h3 className={subHeading}>B.8 Children</h3>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            PULSE is intended for users aged 16 and above. Participants under 18
            additionally require the consent of a legal guardian if the specific
            study includes minors.
          </p>
        </div>
      </section>

      <section className={divider} style={dividerStyle}>
        <h2 className={sectionHeading}>Changes to this policy</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p className={paragraph}>
            We reserve the right to amend this policy to reflect legal or
            technical changes. The current version is always available at{" "}
            <a
              href="https://2chub.com/privacy"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              2chub.com/privacy
            </a>
            .
          </p>
          <p className="text-sm" style={{ color: "var(--text-dim)" }}>
            Last updated: April 2026
          </p>
        </div>
      </section>
    </div>
  );
}
