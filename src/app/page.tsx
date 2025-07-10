import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AdvantagesGrid from "../components/AdvantagesGrid";
import ServiceOverview from "../components/ServiceOverview";
import PopularDestinations from "../components/PopularDestinations";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AdvantagesGrid />
      <PopularDestinations />
      <ServiceOverview />
      <AboutSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
