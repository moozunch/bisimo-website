import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import TrialSection from './components/TrialSection';
import FooterCTA from './components/FooterCTA';
import ChatWidget from './components/ChatWidget';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 font-nunito">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      {/* <TestimonialsSection /> */}
      <TrialSection />
      <FooterCTA />
      <ChatWidget />
    </main>
  );
}