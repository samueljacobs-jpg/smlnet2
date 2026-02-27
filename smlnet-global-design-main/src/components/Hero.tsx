/**
 * Hero.tsx
 *
 * The big landing section on the homepage with the logo,
 * headline, and two call-to-action buttons.
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/smlnet-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Soft glow behind the content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="SMLnet logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="h-28 md:h-36 w-auto mx-auto mb-8 mix-blend-lighten"
          />

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            {t(translations.hero.heading1)}
            <br />
            <span className="text-gradient">{t(translations.hero.heading2)}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t(translations.hero.description)}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/contact">
                {t(translations.hero.cta)} <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/services">{t(translations.hero.services)}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
