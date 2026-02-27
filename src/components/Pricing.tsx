/**
 * Pricing.tsx
 *
 * Explains that pricing varies per project and lists the main
 * factors that influence cost. Ends with a CTA to email or call
 * for a free estimate. No prices are shown on purpose — every
 * project is different.
 */
import { motion } from "framer-motion";
import { Mail, Phone, DollarSign, Users, Database, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

// Icons for the four pricing factor cards
const factorIcons = [DollarSign, Users, Database, Wrench];

function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24">
      <div className="container px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t(translations.pricing.label)}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            {t(translations.pricing.title)}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t(translations.pricing.subtitle)}
          </p>
        </motion.div>

        {/* Factor cards — what influences the price */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {translations.pricing.factors.map((factor, index) => {
            const Icon = factorIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{t(factor.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(factor.desc)}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Call-to-action box — email or phone for a quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 rounded-2xl p-8 md:p-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-foreground text-lg font-medium mb-6">
            {t(translations.pricing.cta)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email link — opens the user's mail client directly */}
            <a
              href="mailto:samueljacobsmaart@gmail.com?subject=Price%20Estimate%20Request"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t(translations.pricing.ctaEmail)}
            </a>
            {/* Phone link — opens the dialer on mobile */}
            <a
              href="tel:+31614129527"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t(translations.pricing.ctaPhone)}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
