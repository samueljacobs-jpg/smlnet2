/**
 * ServicesPage.tsx
 *
 * Dedicated page for the services section.
 * Includes a CTA button at the bottom linking to contact.
 */
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <Services />
        <div className="container px-6 pb-16 text-center">
          <Button variant="hero" size="lg" className="px-8 py-6" asChild>
            <Link to="/contact">
              {t(translations.nav.contactCta)} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;
