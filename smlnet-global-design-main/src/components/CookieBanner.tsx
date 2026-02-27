/**
 * CookieBanner.tsx
 *
 * AVG/GDPR-compliant cookie consent banner.
 * Shows on first visit, blocks non-functional cookies until consent.
 * Three options: Accept all, Reject all, Customize.
 * Consent is stored in a functional cookie for 12 months.
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { getConsent, setConsent } from "@/lib/cookieConsent";

function CookieBanner() {
  const { t } = useLanguage();
  const c = translations.cookieBanner;

  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytical, setAnalytical] = useState(false);
  const [marketing, setMarketing] = useState(false);

  /* Show banner only if no consent cookie exists yet */
  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAcceptAll() {
    setConsent({ analytical: true, marketing: true });
    setVisible(false);
  }

  function handleRejectAll() {
    setConsent({ analytical: false, marketing: false });
    setVisible(false);
  }

  function handleSavePreferences() {
    setConsent({ analytical, marketing });
    setVisible(false);
    setShowPreferences(false);
  }

  /** Called from the footer "Cookie-instellingen" link */
  // We expose this via a global event so the footer can trigger it
  useEffect(() => {
    function handleOpenSettings() {
      setVisible(true);
      setShowPreferences(true);
      // Load existing preferences if available
      const consent = getConsent();
      if (consent) {
        setAnalytical(consent.analytical);
        setMarketing(consent.marketing);
      }
    }

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="container max-w-3xl mx-auto">
            <div className="glass rounded-xl border border-border p-5 md:p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-2">
                    {t(c.title)}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {t(c.description)}
                  </p>
                </div>
              </div>

              {/* Preference toggles — only shown when "Customize" is clicked */}
              <AnimatePresence>
                {showPreferences && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border border-border rounded-lg p-4 mb-4 space-y-3">
                      {/* Functional — always on */}
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {t(c.functional)}
                          </span>
                          <p className="text-xs text-muted-foreground">{t(c.functionalDesc)}</p>
                        </div>
                        <div className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded">
                          {t(c.alwaysActive)}
                        </div>
                      </label>

                      {/* Analytical */}
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {t(c.analytical)}
                          </span>
                          <p className="text-xs text-muted-foreground">{t(c.analyticalDesc)}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={analytical}
                          onChange={(e) => setAnalytical(e.target.checked)}
                          className="w-4 h-4 accent-primary rounded"
                        />
                      </label>

                      {/* Marketing */}
                      <label className="flex items-center justify-between cursor-pointer">
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {t(c.marketing)}
                          </span>
                          <p className="text-xs text-muted-foreground">{t(c.marketingDesc)}</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={marketing}
                          onChange={(e) => setMarketing(e.target.checked)}
                          className="w-4 h-4 accent-primary rounded"
                        />
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Links to policies */}
              <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                <Link to="/cookie-policy" className="hover:text-primary transition-colors underline">
                  {t(c.cookiePolicyLink)}
                </Link>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors underline">
                  {t(c.privacyPolicyLink)}
                </Link>
              </div>

              {/* Action buttons — equal visual weight, no dark patterns */}
              <div className="flex flex-col sm:flex-row gap-2">
                {showPreferences ? (
                  <Button onClick={handleSavePreferences} variant="hero" size="sm" className="flex-1">
                    {t(c.savePreferences)}
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleAcceptAll} variant="hero" size="sm" className="flex-1">
                      {t(c.acceptAll)}
                    </Button>
                    <Button onClick={handleRejectAll} variant="outline" size="sm" className="flex-1">
                      {t(c.rejectAll)}
                    </Button>
                    <Button
                      onClick={() => setShowPreferences(true)}
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                    >
                      <Settings className="w-3.5 h-3.5 mr-1" />
                      {t(c.customize)}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
