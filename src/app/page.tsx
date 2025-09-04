import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";

const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ShowcaseSection = lazy(() => import("@/components/ShowcaseSection"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <ShowcaseSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <Footer />
      </Suspense>
    </main>
  );
}
