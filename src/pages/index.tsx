import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <HeroSection videoSrc="/arabianpay.mp4" />
        <FeaturesSection />
        <HowItWorksSection />
        <MarketplaceSection />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}