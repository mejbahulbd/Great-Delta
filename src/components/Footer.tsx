import React, { useState } from 'react';
import { GDALogo } from './GDALogo';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Plane, 
  CheckCircle,
  Linkedin,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#051326] text-slate-300 pt-16 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/50">
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <GDALogo variant="dark" size="md" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              International cargo airline connecting Bangladesh to global trade corridors.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter X"
                className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-600/20 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Cargo Services', id: 'services' },
                { label: 'Fleet', id: 'fleet' },
                { label: 'Network', id: 'network' },
                { label: 'Safety & Compliance', id: 'safety' },
                { label: 'News', id: 'news' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-0.5 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cargo Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Cargo Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  General Air Freight
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  E-Commerce Logistics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  Specialized Cargo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  Temperature-Controlled Cargo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  Dangerous Goods
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  Charter Cargo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Network (1.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Network
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('network')} className="hover:text-white transition cursor-pointer">
                  Middle East
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('network')} className="hover:text-white transition cursor-pointer">
                  Asia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('network')} className="hover:text-white transition cursor-pointer">
                  Europe
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('network')} className="hover:text-white transition cursor-pointer">
                  Africa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-6" id="contact">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Head Office Bangladesh</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="mailto:info@greatdeltaair.com" className="hover:text-white transition">
                    info@greatdeltaair.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href="tel:+880298400000" className="hover:text-white transition">
                    +880 2 9840 0000
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Plane className="w-4 h-4 text-blue-400 shrink-0 rotate-45" />
                  <span>Airport Operations</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Newsletter
              </h4>
              <p className="text-[11px] text-slate-400 mb-2">
                Stay updated with Great Delta Air
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-800">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-blue-950/60 border border-blue-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold px-3.5 py-1.5 rounded transition cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2025 Great Delta Air Limited. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('Privacy Policy')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegal('Terms & Conditions')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegal('Cookie Policy')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
