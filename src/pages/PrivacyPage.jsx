import { useLang } from "../lib/i18n.jsx";
import PageScaffold from "../components/PageScaffold.jsx";
import BackLink from "../components/BackLink.jsx";
import privacyDe from "../i18n/privacy-de.html?raw";
import privacyEn from "../i18n/privacy-en.html?raw";

export default function PrivacyPage() {
  const { t, language } = useLang();
  const body = language === "de" ? privacyDe : privacyEn;
  return (
    <PageScaffold topPad={false}>
      <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20">
        <div className="max-w-[820px] mx-auto">
          <div className="mb-12">
            <BackLink href="/">{t.footer.backLink}</BackLink>
          </div>
          <article className="legal-prose" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </main>
    </PageScaffold>
  );
}
