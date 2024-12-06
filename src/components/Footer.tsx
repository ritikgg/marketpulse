import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">MarketPulse</h3>
            <p className="text-sm">
              Your one-stop shop for all your needs. Quality products, competitive
              prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="hover:text-white">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="hover:text-white">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>123 Store Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <span>support@store.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MarketPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};