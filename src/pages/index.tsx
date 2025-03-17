import { useEffect, useRef } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { FaTiktok, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 23) {
        video.currentTime = 0; // Reset to the start
        video.play(); // Play again
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/arabianpay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom-5 md:top-10 md:right-2 z-10 flex flex-row md:flex-col space-x-4 md:space-y-4">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaTiktok size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to ArabianPay</h1>
            <p className="text-lg max-w-2xl text-white">Empowering seamless and secure digital transactions across the Arabian region.</p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200">Get Started</button>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* About Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4">About ArabianPay</h2>
          <p className="max-w-3xl mx-auto text-lg">ArabianPay is dedicated to providing fast, secure, and reliable payment solutions tailored for the Middle Eastern market.</p>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-gray-200 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose ArabianPay?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fast Transactions</h3>
              <p>Experience instant payments with our cutting-edge technology.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p>Top-tier encryption and security measures to keep your transactions safe.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>We are always here to help, anytime you need us.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
              <p>Create an account in just a few easy steps.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">2. Link Your Bank</h3>
              <p>Connect your bank securely for seamless transactions.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">3. Start Paying</h3>
              <p>Make fast and secure payments anytime, anywhere.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-6 bg-blue-500 text-white text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started with ArabianPay Today</h2>
          <p className="max-w-3xl mx-auto text-lg">Join thousands of users who trust ArabianPay for seamless digital transactions.</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200">Sign Up Now</button>
        </section>

        {/* Footer Section */}
        <footer className="py-8 bg-gray-900 text-white text-center">
          <p>&copy; {new Date().getFullYear()} ArabianPay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}