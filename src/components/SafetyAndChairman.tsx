import React from 'react';
import { ShieldCheck, Award, Globe, FileCheck2, Quote } from 'lucide-react';
import { EditableImage } from './EditableImage';

export const SafetyAndChairman: React.FC = () => {
  return (
    <section id="safety" className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Safety & Compliance Banner */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-between p-8 sm:p-10 text-white min-h-[420px] group">
            {/* Background Image of Ground Crew / Inspection */}
            <div className="absolute inset-0 z-0">
              <EditableImage
                imageKey="safetyBackground"
                alt="Aircraft maintenance safety inspection"
                label="Safety Background"
                className="w-full h-full object-cover"
                containerClassName="relative w-full h-full"
              />
              {/* Deep Navy/Black Overlay */}
              <div className="absolute inset-0 bg-[#07172c]/90 backdrop-blur-[1px] pointer-events-none" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 pointer-events-none">
              <div className="inline-block bg-blue-900/60 border border-blue-500/30 px-3 py-1 rounded-md text-[11px] font-bold tracking-widest text-blue-300 uppercase mb-4">
                SAFETY & COMPLIANCE
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Safety. Security. Compliance.
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-normal">
                Great Delta Air Limited intends to operate within the regulatory
                framework of the Bangladesh Civil Aviation Authority (CAAB) and
                follow globally accepted aviation safety standards.
              </p>
            </div>

            {/* Bottom Badges Row: CAAB | ICAO | IATA | Cargo Security */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 pointer-events-none">
              {/* CAAB Badge */}
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-blue-300 mb-1" />
                <span className="text-xs font-black text-white tracking-wider">
                  CAAB
                </span>
                <span className="text-[9px] text-slate-300 leading-tight mt-0.5">
                  Civil Aviation Authority Bangladesh
                </span>
              </div>

              {/* ICAO Badge */}
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                <Globe className="w-6 h-6 text-blue-300 mb-1" />
                <span className="text-xs font-black text-white tracking-wider">
                  ICAO
                </span>
                <span className="text-[9px] text-slate-300 leading-tight mt-0.5">
                  International Civil Aviation Org
                </span>
              </div>

              {/* IATA Badge */}
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-6 h-6 text-blue-300 mb-1" />
                <span className="text-xs font-black text-white tracking-wider">
                  IATA
                </span>
                <span className="text-[9px] text-slate-300 leading-tight mt-0.5">
                  Standards & Operational Safety
                </span>
              </div>

              {/* Cargo Security */}
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/5 border border-white/10">
                <FileCheck2 className="w-6 h-6 text-blue-300 mb-1" />
                <span className="text-xs font-black text-white tracking-wider">
                  Cargo Security
                </span>
                <span className="text-[9px] text-slate-300 leading-tight mt-0.5">
                  Verified security protocols
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Chairman's Message */}
          <div className="lg:col-span-6 bg-slate-50/90 rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header Title */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-0.5 bg-[#e11d2a]" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0c2340]">
                  Chairman's Message
                </h3>
              </div>

              {/* Layout: Chairman Photo + Quote */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Chairman Portrait with In-Place Change Photo & Drag-Drop */}
                <div className="sm:col-span-5 flex flex-col items-center sm:items-start">
                  <div className="relative w-36 sm:w-full max-w-[180px] aspect-square rounded-xl overflow-hidden shadow-md border-2 border-white ring-1 ring-slate-200">
                    <EditableImage
                      imageKey="chairman"
                      alt="Air Commodore Mohammad Shafiqul Islam Chairman"
                      label="Chairman Portrait"
                      className="w-full h-full object-cover object-top"
                      containerClassName="relative w-full h-full"
                    />
                  </div>
                </div>

                {/* Quote Content */}
                <div className="sm:col-span-7 space-y-3">
                  <Quote className="w-7 h-7 text-blue-500 fill-blue-500/20 rotate-180" />
                  
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic font-normal">
                    "At Great Delta Air, our vision is anchored in excellence,
                    precision, and global standards of aviation. As Chairman, I
                    am committed to strengthening a legacy built on discipline,
                    innovation, and safety—ensuring that our operations not only
                    meet but exceed international expectations while
                    contributing to the advancement of the aviation industry."
                  </p>
                </div>
              </div>
            </div>

            {/* Signature & Credentials Block */}
            <div className="pt-6 mt-6 border-t border-slate-200/80">
              {/* Stylized Simulated Signature */}
              <div className="mb-2 font-serif-italic text-lg text-blue-900 select-none tracking-wider">
                M. Shafiqul Islam
              </div>

              <h4 className="text-xs sm:text-sm font-extrabold text-[#0c2340] leading-snug">
                Air Commodore Mohammad Shafiqul Islam ndc, awc, psc, GD (P), (Retd)
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Chairman, Great Delta Air Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
