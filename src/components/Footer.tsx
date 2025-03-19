import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaHeart, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/features" className="hover:text-primary">Features</a></li>
              <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md text-white border border-gray-100"
            />
            <button className="mt-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://tiktok.com" className="text-white hover:text-primary">
                <FaTiktok size={24} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-primary">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-primary">
                <FaLinkedin size={24} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-primary">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@arabianpay.com</p>
            <p className="text-gray-400">Phone: +966 123 456 789</p>
          </div>
        </div>

        {/* Thin gray line */}
        <div className="border-t-[0.5px] border-gray-300 my-4"></div>

        {/* Copyright Notice */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Arabian Pay. Made with <FaHeart className="inline text-red-500" /> by UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
