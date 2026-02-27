/**
 * App.tsx
 *
 * Root of the application. Sets up routing, language support,
 * and global providers. Each page is its own route.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/"         element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing"  element={<PricingPage />} />
              <Route path="/contact"        element={<ContactPage />} />
              <Route path="/cookie-policy"  element={<CookiePolicyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*"              element={<NotFound />} />
            </Routes>
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
