import React, { useState } from 'react';
import { NETWORK_REGIONS } from '../data/airlineData';
import { MapPin, Navigation, Compass } from 'lucide-react';

export const NetworkSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // SVG route coordinates scaled for an 800x420 world map canvas
  // Dhaka origin ~ (560, 215)
  const dhakaCoords = { x: 560, y: 215 };

  const destinations = [
    // Middle East
    { name: 'Dubai', region: 'Middle East', x: 450, y: 205 },
    { name: 'Doha', region: 'Middle East', x: 440, y: 215 },
    { name: 'Riyadh', region: 'Middle East', x: 425, y: 225 },
    { name: 'Muscat', region: 'Middle East', x: 470, y: 220 },
    // Asia
    { name: 'Singapore', region: 'Asia', x: 610, y: 275 },
    { name: 'Kuala Lumpur', region: 'Asia', x: 595, y: 265 },
    { name: 'Bangkok', region: 'Asia', x: 585, y: 235 },
    { name: 'Hong Kong', region: 'Asia', x: 645, y: 210 },
    { name: 'Guangzhou', region: 'Asia', x: 635, y: 200 },
    // Europe
    { name: 'Istanbul', region: 'Europe', x: 370, y: 155 },
    { name: 'Frankfurt', region: 'Europe', x: 320, y: 125 },
    { name: 'London', region: 'Europe', x: 290, y: 115 },
    { name: 'Moscow', region: 'Europe', x: 410, y: 95 },
    // Africa
    { name: 'Addis Ababa', region: 'Africa', x: 430, y: 270 },
    { name: 'Nairobi', region: 'Africa', x: 440, y: 295 },
    { name: 'Cape Town', region: 'Africa', x: 390, y: 390 },
  ];

  return (
    <section id="network" className="w-full bg-[#07162c] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-0.5 bg-[#e11d2a]" />
            <span className="text-[#e11d2a] text-xs font-bold tracking-widest uppercase">
              OUR NETWORK
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Global Reach <br className="hidden sm:inline" />
            Regional Connectivity
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            From Bangladesh to Asia, the Middle East, Europe and Africa — we
            connect your cargo to the world.
          </p>
        </div>

        {/* 3 Columns Layout: Regions List | Interactive Route Map | Key Stats Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Regions & Destinations List */}
          <div className="lg:col-span-3 space-y-5">
            {NETWORK_REGIONS.map((region) => {
              const isSelected = activeRegion === region.name;
              return (
                <div
                  key={region.name}
                  onMouseEnter={() => setActiveRegion(region.name)}
                  onMouseLeave={() => setActiveRegion(null)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900/40 border-red-500/80 shadow-md shadow-red-500/10'
                      : 'bg-blue-950/30 border-blue-900/40 hover:border-blue-700/60'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e11d2a] shadow-xs shadow-red-500" />
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {region.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300/85 leading-relaxed pl-4">
                    {region.destinations.join(', ')}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Route Map Graphic */}
          <div className="lg:col-span-6 relative bg-[#091b35] rounded-2xl border border-blue-900/50 p-4 shadow-2xl overflow-hidden min-h-[380px] flex items-center justify-center">
            {/* World Map Vector Silhouette SVG */}
            <svg
              viewBox="0 0 800 420"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glowing gradients for flight paths */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#e11d2a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* World Continents Background (Stylized simplified polygons) */}
              <g fill="#132b4f" opacity="0.75">
                {/* Europe */}
                <path d="M 270 80 Q 320 70 380 90 Q 390 140 350 160 Q 280 150 270 80 Z" />
                {/* Asia / Eurasia */}
                <path d="M 390 85 Q 520 70 700 110 Q 730 180 660 250 Q 560 220 480 170 Q 420 140 390 85 Z" />
                {/* Africa */}
                <path d="M 340 180 Q 420 170 450 230 Q 460 320 390 400 Q 330 330 310 240 Q 320 190 340 180 Z" />
                {/* Middle East Bridge */}
                <path d="M 400 170 Q 470 180 480 230 Q 430 250 400 200 Z" />
                {/* South East Asia Archipelago */}
                <path d="M 580 240 Q 640 250 670 290 Q 630 320 580 270 Z" />
              </g>

              {/* Flight Arcs from Dhaka (560, 215) to each destination */}
              {destinations.map((dest) => {
                const isHighlight =
                  activeRegion === dest.region || hoveredCity === dest.name;
                
                // Calculate curved bezier midpoint
                const midX = (dhakaCoords.x + dest.x) / 2;
                const midY = (dhakaCoords.y + dest.y) / 2 - 40;

                const pathData = `M ${dhakaCoords.x} ${dhakaCoords.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

                return (
                  <g key={dest.name}>
                    {/* Shadow/Glow Line */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke={isHighlight ? '#e11d2a' : '#38bdf8'}
                      strokeWidth={isHighlight ? '2.5' : '1.2'}
                      strokeOpacity={isHighlight ? '0.9' : '0.4'}
                      strokeDasharray={isHighlight ? 'none' : '4, 4'}
                      filter={isHighlight ? 'url(#glow)' : undefined}
                    />

                    {/* Destination Node */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r={isHighlight ? '5' : '3'}
                      fill={isHighlight ? '#e11d2a' : '#38bdf8'}
                      stroke="#ffffff"
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredCity(dest.name)}
                      onMouseLeave={() => setHoveredCity(null)}
                    />
                  </g>
                );
              })}

              {/* Dhaka Hub (Origin) */}
              <circle
                cx={dhakaCoords.x}
                cy={dhakaCoords.y}
                r="10"
                fill="#e11d2a"
                fillOpacity="0.3"
                className="animate-ping"
              />
              <circle
                cx={dhakaCoords.x}
                cy={dhakaCoords.y}
                r="6"
                fill="#e11d2a"
                stroke="#ffffff"
                strokeWidth="2"
              />

              {/* Dhaka Hub Label */}
              <text
                x={dhakaCoords.x - 22}
                y={dhakaCoords.y - 12}
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
              >
                Dhaka
              </text>

              {/* Regional labels on map */}
              <text x="320" y="90" fill="#94a3b8" fontSize="11" fontWeight="600">
                Europe
              </text>
              <text x="640" y="140" fill="#94a3b8" fontSize="11" fontWeight="600">
                Asia
              </text>
              <text x="410" y="195" fill="#94a3b8" fontSize="11" fontWeight="600">
                Middle East
              </text>
              <text x="370" y="280" fill="#94a3b8" fontSize="11" fontWeight="600">
                Africa
              </text>
            </svg>

            {/* Hovered City Tooltip */}
            {hoveredCity && (
              <div className="absolute top-4 right-4 bg-[#081a33]/90 border border-red-500/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e11d2a]" />
                <span>Destination: {hoveredCity}</span>
              </div>
            )}
          </div>

          {/* Right Column: Key Network Stats Box */}
          <div className="lg:col-span-3">
            <div className="bg-[#0b1f3a] rounded-2xl border border-blue-900/60 p-6 shadow-xl space-y-6">
              {/* Stat 1 */}
              <div className="border-b border-blue-900/60 pb-5">
                <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  4
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  Global Regions
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-blue-900/60 pb-5">
                <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
                  16<span className="text-[#e11d2a]">+</span>
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  Strategic Destinations
                </p>
              </div>

              {/* Stat 3 */}
              <div className="border-b border-blue-900/60 pb-5">
                <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  1
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  Bangladesh Cargo Gateway
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-[#e11d2a] tracking-tight">
                  24/7
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  Cargo Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
