/**
 * PrivacyPolicyPage.tsx
 *
 * Explains that no personal data, tracking, or profiling is used.
 * Links to the Cookie Policy page for cookie-specific details.
 */
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

function PrivacyPolicyPage() {
  const { t } = useLanguage();
  const p = translations.privacyPolicy;

  const sections = [
    { title: t(p.noDataTitle),      text: t(p.noDataText) },
    { title: t(p.noTrackingTitle),  text: t(p.noTrackingText) },
    { title: t(p.cookiesTitle),     text: t(p.cookiesText), link: "/cookie-policy" },
    { title: t(p.hostingTitle),     text: t(p.hostingText) },
    { title: t(p.contactTitle),     text: t(p.contactText), link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t(p.title)}
          </h1>
          <p className="text-muted-foreground mb-10">{t(p.intro)}</p>

          {sections.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-2">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.text}
                {section.link && (
                  <>
                    {" "}
                    <Link
                      to={section.link}
                      className="text-primary hover:underline"
                    >
                      →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
