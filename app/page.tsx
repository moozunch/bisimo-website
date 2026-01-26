import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import TrialSection from './components/TrialSection';
import FooterCTA from './components/FooterCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 font-nunito">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TrialSection />
      <FooterCTA />
    </main>
  );
}