import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import RaceDayVideosSection from "@/components/RaceDayVideosSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ARPreviewSection from "@/components/ARPreviewSection";
import MissionSection from "@/components/MissionSection";
import OverlayAdvertisingSection from "@/components/OverlayAdvertisingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <ScreenshotsSection />
        <RaceDayVideosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ARPreviewSection />
        <MissionSection />
        <OverlayAdvertisingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
