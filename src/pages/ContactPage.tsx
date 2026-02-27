/**
 * ContactPage.tsx
 *
 * Dedicated page for the contact form.
 * The form uses mailto: — no data is stored anywhere.
 */
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
