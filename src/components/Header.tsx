import React, { useState } from 'react';
import { GDALogo } from './GDALogo';
import { 
  Plane, 
  Calendar, 
  Phone, 
  User, 
  Globe, 
  Search, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenTrack: () => void;
  onOpenSchedule: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenTrack,
  onOpenSchedule,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Cargo Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'network', label: 'Network' },
    { id: 'safety', label: 'Safety & Compliance' },
    { id: 'charter', label: 'Charter' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm transition-all">
      {/* Top Utility Bar */}
      <div className="bg-[#0b1f3a] text-gray-200 text-xs py-1.5 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <button
            onClick={onOpenTrack}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Plane className="w-3.5 h-3.5 text-blue-400 rotate-45" />
            <span>Track Shipment</span>
          </button>
          
          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden sm:flex"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>Flight Schedule</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden md:flex"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Contact</span>
          </button>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Customer Portal</span>
          </div>

          {/* Language Switcher Dropdown */}
          <div className="relative border-l border-blue-800/60 pl-4">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold tracking-wider">{currentLang.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => {
                    setCurrentLang('en');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 cursor-pointer ${
                    currentLang === 'en' ? 'font-bold text-[#dc2626] bg-red-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>English</span>
                  <span className="text-[10px] text-slate-400">EN</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentLang('bn');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 cursor-pointer ${
                    currentLang === 'bn' ? 'font-bold text-[#dc2626] bg-red-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>বাংলা</span>
                  <span className="text-[10px] text-slate-400">BN</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer"
          >
            <GDALogo size="md" lang={currentLang} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[13px] font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors py-1 cursor-pointer relative ${
                    isActive
                      ? 'text-[#e11d2a] font-bold'
                      : 'hover:text-[#0b1f3a]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e11d2a] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#0b1f3a] hover:border-gray-400 transition cursor-pointer"
                title="Search routes, cargo or information"
              >
                <Search className="w-4 h-4" />
              </button>
              
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg p-2 border border-gray-200 z-50">
                  <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search cargo, routes, fleet..."
                      className="bg-transparent border-none text-xs w-full focus:outline-none"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Single Get a Quote Button */}
            <button
              onClick={onOpenQuote}
              className="bg-[#e11d2a] hover:bg-[#c91420] text-white text-xs sm:text-[13px] font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Get a Quote
            </button>

            {/* Mobile / Tablet Menu Hamburger (only menu icon, no duplicate button) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md font-medium ${
                activeNav === item.id
                  ? 'bg-red-50 text-[#e11d2a] font-bold'
                  : 'text-slate-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrack();
              }}
              className="w-full text-center bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 rounded"
            >
              Track Shipment
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full text-center bg-[#e11d2a] text-white text-xs font-semibold py-2.5 rounded"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
