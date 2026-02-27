/**
 * About.tsx
 *
 * Everything a visitor needs to know about SMLnet — who we are,
 * where we're based, and how we work. This merges the original
 * About section and the "Over Ons" subpage into one component.
 */
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Building2, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

// The three info cards shown below the bullet points
const aboutCards = [
  { icon: MapPin,    titleKey: "card1title" as const, descKey: "card1desc" as const },
  { icon: Building2, titleKey: "card2title" as const, descKey: "card2desc" as const },
  { icon: Users,     titleKey: "card3title" as const, descKey: "card3desc" as const },
];

function About() {
  const { lang, t } = useLanguage();
  const bulletPoints = translations.about.points[lang];

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Section header */}
        <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
          {t(translations.about.label)}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t(translations.about.heading)} <span className="text-gradient">SMLnet</span>
        </h2>

        {/* Short intro */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t(translations.about.description)}
        </p>

        {/* Extended description (from the old Over Ons page) */}
        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
          {t(translations.about.extendedDescription)}
        </p>

        {/* Key selling points */}
        <ul className="space-y-3 mb-12">
          {bulletPoints.map((point) => (
            <li key={point} className="flex items-center gap-3 text-secondary-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>

        {/* Detail cards — Dutch Roots, Websites Only, Personal Approach */}
        <div className="space-y-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl glass flex gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {t(translations.about[card.titleKey])}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(translations.about[card.descKey])}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
