import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

interface CtaBannerProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote, onOpenContact }) => {
  const { getImage, isCustom } = useSiteImages();

  const backgroundSrc = getImage('ctaCloudBackground');
  const hasCustomBg = isCustom('ctaCloudBackground');

  return (
    <section className="relative w-full py-14 lg:py-20 overflow-hidden bg-slate-900">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundSrc}
          alt="Cargo CTA Section Background"
          className="w-full h-full object-cover object-center transition-all duration-300"
          referrerPolicy="no-referrer"
        />
        {/* Soft balanced gradient overlay so text remains readable while keeping the image visible */}
        <div className={`absolute inset-0 ${
          hasCustomBg 
            ? 'bg-gradient-to-r from-[#071933]/85 via-[#0b264e]/65 to-[#0b264e]/50'
            : 'bg-gradient-to-r from-[#071933]/95 via-[#0b264e]/85 to-[#0b264e]/70'
        }`} />
      </div>

      {/* Subtle Floating Silhouette Airplane Image on the Left */}
      {!hasCustomBg && (
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-72 sm:w-96 opacity-25 pointer-events-none">
          <img
            src={getImage('fleet')}
            alt=""
            className="w-full h-auto object-contain filter brightness-150 contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#e11d2a]" />
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
                GLOBAL FREIGHT NETWORK
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Move Your Cargo. Connect to the World.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-100/90 font-normal leading-relaxed drop-shadow-xs max-w-xl">
              Reliable air cargo connectivity from Bangladesh to global markets with our heavy-lift freighters.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#e11d2a] hover:bg-[#c91823] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#0c2340]/90 hover:bg-[#07172c] border border-blue-400/40 hover:border-blue-400 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-lg shadow-md transition cursor-pointer backdrop-blur-xs"
            >
              Contact Cargo Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
