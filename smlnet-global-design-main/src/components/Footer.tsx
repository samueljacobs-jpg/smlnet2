/**
 * Footer.tsx
 *
 * Simple site footer with navigation links and contact info.
 * Shown at the bottom of every page.
 */
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-heading font-bold tracking-tight">
              SML<span className="text-primary">net</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              {t(translations.footer.tagline)}
            </p>
          </div>

          {/* Page links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-primary transition-colors">{t(translations.footer.services)}</Link>
            <Link to="/pricing"  className="hover:text-primary transition-colors">{t(translations.footer.pricing)}</Link>
            <Link to="/contact"  className="hover:text-primary transition-colors">{t(translations.footer.contact)}</Link>
          </div>

          {/* Contact details — direct links, no data stored */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:samueljacobsmaart@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> samueljacobsmaart@gmail.com
            </a>
            <a href="tel:+31614129527" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +31 6 14129527
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} SMLnet. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">{t(translations.footer.cookiePolicy)}</Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">{t(translations.footer.privacyPolicy)}</Link>
            <button
              onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
              className="hover:text-primary transition-colors"
            >
              {t(translations.cookieBanner.cookieSettings)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
