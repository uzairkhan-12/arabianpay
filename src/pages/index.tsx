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
    const video: any = videoRef.current;

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
        <section className="h-screen mt-18 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
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
          <div className="absolute bottom-10 md:top-8 md:right-3 z-10 flex flex-row md:flex-col space-x-4 md:space-y-4">
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
            <p className="text-lg max-w-2xl text-white mb-6">
              Empowering micro-enterprises, small businesses, and startups with flexible "Buy Now, Pay Later" solutions. Split your payments into three installments and take control of your financial growth.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-4">About ArabianPay</h2>
          <p className="max-w-3xl mx-auto text-lg">
            ArabianPay specializes in providing "Buy Now, Pay Later" services for micro-enterprises, small businesses, and startups. We offer a budget of up to 20,000 Saudi Riyals, divided into three installments, to help businesses manage their finances better and grow sustainably.
          </p>
        </section>

        {/* Benefits for Suppliers Section */}
        <section className="py-20 px-6 text-center relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/about.jpg" // Path to the image in the public folder
      alt="Benefits for Suppliers Background"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better readability */}
  </div>

  {/* Content */}
  <div className="relative z-10">
  <h2 className="text-3xl font-semibold mb-6 text-white">Benefits for Suppliers</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-white">Advertising & Promotion</h3>
      <p className="text-white/80">
        We promote your products on our platform, increasing your visibility and helping you reach new customers.
      </p>
    </div>

    {/* Card 2 */}
    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-white">Immediate Cash Flow</h3>
      <p className="text-white/80">
        Receive payments instantly while customers enjoy flexible installment plans.
      </p>
    </div>

    {/* Card 3 */}
    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md border border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-white">Kingdom-Wide Coverage</h3>
      <p className="text-white/80">
        Sell your products across Saudi Arabia, no matter where you're located.
      </p>
    </div>
  </div>
</div>
</section>

        {/* Benefits for Customers Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-6">Benefits for Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Wide Range of Products</h3>
              <p>Access a variety of products from trusted suppliers on our platform.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Flexible Payments</h3>
              <p>Pay in three easy installments, making it easier to manage your finances.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
              <p>Your information is safe with us. Enjoy secure transactions with complete confidentiality.</p>
            </div>
          </div>
        </section>

        {/* Marketplace Showcase Section */}
        <section className="py-16 px-6 bg-gray-200 text-center">
  <h2 className="text-3xl font-semibold mb-6">Explore Our Marketplace</h2>
  <p className="max-w-3xl mx-auto text-lg mb-8">
    Discover a wide range of products from trusted suppliers. Whether you're a small business or a startup, ArabianPay connects you with the best in the market.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden rounded-t-lg">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/pic1.jpg"
            alt="Product 1"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Business Essentials</h3>
        <p className="text-gray-600">
          Get the tools and equipment you need to run your business smoothly.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden rounded-t-lg">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/pic2.jpg"
            alt="Product 2"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Office Supplies</h3>
        <p className="text-gray-600">
          Stock up on high-quality office supplies at affordable prices.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="overflow-hidden rounded-t-lg">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/pic3.jpg"
            alt="Product 3"
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Tech Gadgets</h3>
        <p className="text-gray-600">
          Upgrade your business with the latest tech gadgets and devices.
        </p>
      </div>
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