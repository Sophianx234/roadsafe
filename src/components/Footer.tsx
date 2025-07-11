// components/Footer.tsx
import { Circle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-600 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-10 text-sm">
        {/* Logo + Intro */}
        <div className="md:col-span-1">
          <Logo />
          <p className="text-gray-500 text-sm pl-2">
            Rent an electric car for your travel needs wherever you want with
            your device!
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Assets</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Social</h4>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Behance</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 font-inter text-xs text-gray-400">
        © 2025 Damian X. All rights reserved.
      </div>
    </footer>
  );
}
