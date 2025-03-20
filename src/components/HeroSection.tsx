import { useRef, useEffect } from "react";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import { HeroSectionPropsI } from "../../shared.interface";

export default function HeroSection({ videoSrc }: HeroSectionPropsI) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 23) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      <div className="absolute top-16 inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
          poster="/video-placeholder.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute bottom-10 md:top-20 md:right-3 z-10 flex flex-row md:flex-col space-x-4 md:space-y-4">
        <SocialIcon href="https://tiktok.com" icon={<FaTiktok size={24} />} />
        <SocialIcon
          href="https://facebook.com"
          icon={<FaFacebook size={24} />}
        />
        <SocialIcon
          href="https://instagram.com"
          icon={<FaInstagram size={24} />}
        />
        <SocialIcon
          href="https://linkedin.com"
          icon={<FaLinkedin size={24} />}
        />
        <SocialIcon href="https://youtube.com" icon={<FaYoutube size={24} />} />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Empower Your Business with{" "}
            <span className="text-primary">ArabianPay</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white mb-6">
            Buy Now, Pay Later – Simplified for Your Business. Get up to{" "}
            <span className="font-semibold">20,000 SAR</span> in flexible
            installments.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Button variant="primary" >
        Get Started
      </Button>
      <Button variant="outline" >
        Learn More
      </Button>

        </div>
      </div>
    </section>
  );
}
