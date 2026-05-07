export function Impressum() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="mb-10">Impressum</h1>

        <div className="space-y-6" style={{ color: "var(--text-muted)" }}>
          <p
            className="uppercase tracking-[0.1em] text-sm"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Angaben gemäß § 5 DDG
          </p>

          <div>
            <p style={{ color: "var(--text)" }}>
              2chub – Center for Computation of Human Behavior
            </p>
            <p>Anschrift wird ergänzt</p>
            <p>München</p>
          </div>

          <div>
            <p>
              Mitgründer: Prof. Dr. Markus Bühner, Dr. Yannik Terhorst, Leon Paletta, Till-Ole Lohse
            </p>
          </div>

          <div>
            <p
              className="uppercase tracking-[0.1em] text-sm mb-2"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Kontakt
            </p>
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
          </div>

          <div>
            <p>Handelsregister: wird ergänzt</p>
            <p>USt-IdNr.: wird ergänzt</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6">Haftung für Inhalte</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-6">Urheberrecht</h2>
        <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>

    </div>
  );
}
