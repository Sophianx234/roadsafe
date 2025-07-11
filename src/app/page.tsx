import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AdvantagesGrid from "../components/AdvantagesGrid";
import ServiceOverview from "../components/ServiceOverview";
import PopularDestinations from "../components/PopularDestinations";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ConsultingHero from "@/components/ConsultingHero";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AdvantagesGrid />
      <PopularDestinations />
      <ServiceOverview />
      <AboutSection />
      <ConsultingHero/>
      <Testimonials />
      <Footer />
    </main>
  );
}
