/**
 * LanguageSwitcher.tsx
 *
 * A small pill-shaped toggle that lets the user switch between
 * English and Dutch. The active language gets a sliding highlight
 * behind it (animated with framer-motion's layoutId).
 */
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";
import { motion } from "framer-motion";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-0.5 border border-border/50">
      {languages.map(({ code, flag, label }) => {
        const isActive = lang === code;

        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={`Switch to ${label}`}
            className={`
              relative flex items-center gap-1.5 px-2.5 py-1 rounded-full
              text-xs font-medium transition-colors
              ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
            `}
          >
            {/* Animated background pill that slides to the active language */}
            {isActive && (
              <motion.div
                layoutId="lang-slider"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 text-sm leading-none">{flag}</span>
            <span className="relative z-10 hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
