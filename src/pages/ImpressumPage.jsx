import { useLang } from "../lib/i18n.jsx";
import PageScaffold from "../components/PageScaffold.jsx";
import BackLink from "../components/BackLink.jsx";

export default function ImpressumPage() {
  const { t } = useLang();
  return (
    <PageScaffold topPad={false}>
      <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20">
        <div className="max-w-[820px] mx-auto">
          <div className="mb-12">
            <BackLink href="/">{t.footer.backLink}</BackLink>
          </div>
          <div className="space-y-16">
            <section>
              <h1 className="mb-10">Impressum</h1>
              <div className="space-y-6" style={{ color: "var(--text-muted)" }}>
                <p
                  className="uppercase tracking-[0.1em] text-sm"
                  style={{
                    color: "var(--text-dim)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Angaben gemäß § 5 DDG
                </p>
                <div>
                  <p style={{ color: "var(--text)" }}>2CHuB GmbH</p>
                  <p>Leopoldstr. 32, c/o AWEX GmbH</p>
                  <p>80802 München</p>
                  <p>Deutschland</p>
                </div>
                <div>
                  <p>Vertreten durch die Geschäftsführer:</p>
                  <p>Till-Ole Lohse</p>
                  <p>Leon A. Paletta</p>
                </div>
                <div>
                  <p
                    className="uppercase tracking-[0.1em] text-sm mb-2"
                    style={{
                      color: "var(--text-dim)",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    Kontakt
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:info@2chub.com"
                      className="text-link focus-halo rounded-sm"
                    >
                      info@2chub.com
                    </a>
                  </p>
                </div>
                <div>
                  <p>Handelsregister: HRB 311657</p>
                  <p>Registergericht: Amtsgericht München</p>
                  <p>EUID: DED2601V.HRB311657</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6">Haftung für Inhalte</h2>
              <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                  werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-6">Urheberrecht</h2>
              <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageScaffold>
  );
}
