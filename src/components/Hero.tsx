import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

interface HeroProps {
  onOpenTrack: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrack, onOpenQuote }) => {
  const { getImage } = useSiteImages();
  const displayImage = getImage('hero');

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#07172c]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={displayImage}
          alt="Great Delta Cargo Boeing 747 Freighter on tarmac"
          className="w-full h-full object-cover object-center transition-all duration-300"
          referrerPolicy="no-referrer"
        />
        {/* Balanced Minimal Overlays so the aircraft, nose door and livery stay clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172c]/75 via-[#07172c]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172c]/70 via-transparent to-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
        {/* Top Taglines Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#e11d2a]" />
            <span className="text-white/95 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              International Cargo Airline
            </span>
          </div>

          <div className="sm:text-right">
            <span className="font-serif-italic text-lg sm:text-xl lg:text-2xl text-amber-300 tracking-wide font-normal drop-shadow">
              From Bangladesh To The World
            </span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
            Connecting Bangladesh <br />
            <span className="text-[#f85942]">to Global Trade Corridors</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl font-normal drop-shadow">
            Reliable air freight and logistics connectivity between South Asia and
            major global destinations with our heavy-lift Boeing 747 freighter fleet.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenTrack}
              className="group inline-flex items-center gap-3 bg-[#e11d2a] hover:bg-[#c91823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-red-600/30 cursor-pointer"
            >
              <span>Track Shipment</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center border border-white/40 hover:border-white bg-slate-900/40 hover:bg-white/10 backdrop-blur-xs text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
