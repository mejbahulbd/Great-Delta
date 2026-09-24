import React, { useState } from 'react';
import { 
  Globe2, 
  Layers, 
  Maximize2, 
  ArrowRight, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import { ASSET_IMAGES } from '../data/airlineData';
import { EditableImage } from './EditableImage';

export const FleetSection: React.FC = () => {
  const [showSpecModal, setShowSpecModal] = useState(false);

  const fleetSpecs = [
    { label: 'Maximum Takeoff Weight (MTOW)', value: '396,890 kg / 875,000 lbs' },
    { label: 'Revenue Cargo Payload', value: '112,000 kg / 112 Metric Tonnes' },
    { label: 'Cargo Volume Capacity', value: '735 m³ / 26,000 cu ft' },
    { label: 'Maximum Flight Range', value: '8,240 km / 4,450 nm (full payload)' },
    { label: 'Main Deck Pallet Positions', value: '30 standard 96 x 125 in pallets' },
    { label: 'Lower Hold Capacity', value: '32 LD-1 containers + bulk hold' },
    { label: 'Cruise Speed', value: 'Mach 0.845 (907 km/h / 564 mph)' },
    { label: 'Powerplant', value: '4 × General Electric CF6-80C2 turbofans' },
  ];

  return (
    <section id="fleet" className="w-full bg-[#081a33] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Airborne Boeing 747-400 Freighter Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group min-h-[280px]">
              <EditableImage
                imageKey="fleet"
                alt="Great Delta Air Boeing 747-400 Freighter in flight"
                label="Boeing 747-400F Fleet"
                className="w-full h-auto min-h-[300px] object-cover group-hover:scale-103 transition-transform duration-700"
                containerClassName="relative w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a33]/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 bg-[#081a33]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-slate-200 pointer-events-none z-10">
                Boeing 747-400F Intercontinental
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Information & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-0.5 bg-[#e11d2a]" />
                <span className="text-[#e11d2a] text-xs font-bold tracking-widest uppercase">
                  OUR FLEET
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Boeing 747-400 Freighter
              </h2>

              <h3 className="text-lg font-semibold text-slate-300 mt-1">
                Long-Haul Cargo Platform
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
                Designed as a long-haul freighter platform connecting Bangladesh with
                major international markets through high-payload, intercontinental cargo
                flights.
              </p>
            </div>

            {/* Learn More Button */}
            <div>
              <button
                onClick={() => setShowSpecModal(true)}
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Feature Badges with Circular Icons */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              {/* Feature 1: Long Range */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300 shadow-sm">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Long Range
                  </h4>
                  <p className="text-xs text-slate-400">
                    Intercontinental cargo capability
                  </p>
                </div>
              </div>

              {/* Feature 2: High Payload */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    High Payload
                  </h4>
                  <p className="text-xs text-slate-400">
                    High-capacity cargo operations
                  </p>
                </div>
              </div>

              {/* Feature 3: Wide-Body */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300 shadow-sm">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Wide-Body
                  </h4>
                  <p className="text-xs text-slate-400">
                    Efficient heavy cargo transportation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Specification Modal */}
      {showSpecModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0b1f3a] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <button
              onClick={() => setShowSpecModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-0.5 bg-[#e11d2a]" />
              <span className="text-xs font-bold text-[#e11d2a] uppercase">Aircraft Specifications</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Boeing 747-400 Freighter (B747-400F)
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              The Queen of the Skies configured for dedicated heavy intercontinental cargo logistics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {fleetSpecs.map((spec, idx) => (
                <div key={idx} className="bg-blue-950/60 p-3 rounded-lg border border-blue-900/50">
                  <p className="text-[11px] text-slate-400 font-medium">{spec.label}</p>
                  <p className="text-sm font-bold text-blue-200">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => setShowSpecModal(false)}
                className="bg-[#e11d2a] hover:bg-[#c91823] text-white px-5 py-2 text-xs font-bold rounded-md transition"
              >
                Close Specifications
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
