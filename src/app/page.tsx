import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <ShowcaseSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
