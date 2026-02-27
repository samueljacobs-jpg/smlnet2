/**
 * CookiePolicyPage.tsx
 *
 * Explains that only functional cookies are used.
 * No consent banner needed — this page serves as documentation.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

function CookiePolicyPage() {
  const { t } = useLanguage();
  const c = translations.cookiePolicy;

  const sections = [
    { title: t(c.whatTitle),        text: t(c.whatText) },
    { title: t(c.ourUseTitle),      text: t(c.ourUseText) },
    { title: t(c.noTrackingTitle),  text: t(c.noTrackingText) },
    { title: t(c.consentTitle),     text: t(c.consentText) },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t(c.title)}
          </h1>
          <p className="text-muted-foreground mb-10">{t(c.intro)}</p>

          {sections.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-2">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CookiePolicyPage;
