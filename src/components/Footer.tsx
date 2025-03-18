import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/features" className="hover:text-blue-400">Features</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-blue-400">
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

          {/* Copyright Notice */}
          <div className="md:col-span-4 text-center mt-8">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Arabian Pay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}