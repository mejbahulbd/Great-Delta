import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ASSET_IMAGES } from '../data/airlineData';

export const MissionVision: React.FC = () => {
  const missionPoints = [
    'Fast and reliable international air cargo transportation',
    'Support exporters, manufacturers and e-commerce platforms',
    'Establish Bangladesh as a regional air cargo gateway',
    'Maintain high standards of aviation safety and cargo security',
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Item 1: Boeing 747 Cargo Loading Image (Left) */}
          <div className="lg:col-span-3">
            <div className="h-full min-h-[260px] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img
                src={ASSET_IMAGES.cargoLoading}
                alt="Boeing 747 cargo freighter nose loading"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Item 2: Our Mission (Center) */}
          <div className="lg:col-span-4 flex flex-col justify-center bg-slate-50/70 p-6 lg:p-7 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-0.5 bg-[#e11d2a]" />
              <span className="text-[#e11d2a] text-xs font-bold tracking-widest uppercase">
                OUR MISSION
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c2340] leading-snug tracking-tight mb-5">
              A Strategic Aviation Logistics Bridge from Bangladesh
            </h3>

            <div className="space-y-3">
              {missionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 text-blue-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Item 3: Our Vision Card (Center-Right) */}
          <div className="lg:col-span-3 relative bg-[#091b35] text-white p-6 lg:p-7 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden border border-blue-900/60">
            {/* Background decorative soft glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e11d2a] ring-2 ring-red-500/30" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                  OUR VISION
                </span>
              </div>

              <p className="text-sm sm:text-[15px] font-normal text-slate-200 leading-relaxed">
                To become a globally recognized cargo airline brand from
                Bangladesh by delivering efficient, safe and technologically
                advanced cargo aviation services that support global supply chains
                and international trade.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Great Delta Air</span>
              <span className="text-blue-400 font-semibold">Excellence in Flight</span>
            </div>
          </div>

          {/* Item 4: Bangladesh National Parliament Landmark Image (Right) */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[260px] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img
                src={ASSET_IMAGES.parliament}
                alt="National Parliament of Bangladesh at sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a33]/90 via-[#081a33]/40 to-transparent" />

              {/* Overlay Text matching image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-serif-italic text-slate-300">
                  Bangladesh
                </p>
                <p className="text-sm font-extrabold tracking-tight leading-tight">
                  Our Home
                </p>
                <p className="text-[11px] text-red-400 font-bold uppercase tracking-wider mt-0.5">
                  | Global Vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
