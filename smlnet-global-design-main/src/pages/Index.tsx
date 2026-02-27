/**
 * Index.tsx — Homepage
 *
 * Hero section + About section + footer.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default Index;
