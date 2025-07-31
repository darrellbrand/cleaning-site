'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white -mt-1 px-6 marker-font">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-blue-200">805 Cleaning Crew</h3>
          <p className="text-gray-300 text-md">
            Serving the Central Coast with top-tier residential and commercial cleaning services you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h4>
          <ul className="space-y-2  text-blue-200 text-md">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4  text-blue-200">Contact Us</h4>
          <ul className=" text-blue-200 text-md space-y-2">
            <li><a href="tel:+18055551234" className="hover:text-blue-400">(820) 380-8067</a></li>
            <li><a href="mailto:info@805cleaningcrew.com" className="hover:text-blue-400">info@805cleaningcrew.com</a></li>
            <li>Central Coast, CA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12  pb-6 text-center text-md  text-blue-200">
        &copy; {new Date().getFullYear()} 805 Cleaning Crew. All rights reserved.
      </div>
    </footer>
  );
}
