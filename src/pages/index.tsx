import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

interface HomeProps {
  videoSrc: string;
}

export default function Home({ videoSrc }: HomeProps) {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <HeroSection videoSrc={videoSrc} />
        <FeaturesSection />
        <HowItWorksSection />
        <MarketplaceSection />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      videoSrc: "/arabianpay.mp4",
    },
  };
}