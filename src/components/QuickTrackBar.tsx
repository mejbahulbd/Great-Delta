import React, { useState } from 'react';
import { 
  Plane, 
  FileText, 
  Calendar, 
  Globe, 
  Search,
  CheckCircle2
} from 'lucide-react';

interface QuickTrackBarProps {
  onSearchTrack: (awb: string) => void;
  onOpenQuote: () => void;
  onOpenSchedule: () => void;
  onScrollToNetwork: () => void;
}

export const QuickTrackBar: React.FC<QuickTrackBarProps> = ({
  onSearchTrack,
  onOpenQuote,
  onOpenSchedule,
  onScrollToNetwork,
}) => {
  const [awbInput, setAwbInput] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (awbInput.trim()) {
      onSearchTrack(awbInput.trim());
    } else {
      onSearchTrack('GDA-747-8901');
    }
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 lg:-mt-12">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-4 sm:p-5 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Interactive AWB Search Input */}
          <div className="lg:col-span-5 lg:border-r lg:border-slate-200 lg:pr-6">
            <form onSubmit={handleTrackSubmit} className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0b2245] shrink-0 border border-blue-100">
                  <Search className="w-4 h-4 text-[#e11d2a]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    Track Your Shipment
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Enter AWB / Tracking Number
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={awbInput}
                  onChange={(e) => setAwbInput(e.target.value)}
                  placeholder="AWB / Tracking Number (e.g. GDA-747-8901)"
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e11d2a] transition"
                />
                <button
                  type="submit"
                  className="bg-[#e11d2a] hover:bg-[#c91823] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-md transition shadow-xs cursor-pointer shrink-0"
                >
                  Track
                </button>
              </div>
            </form>
          </div>

          {/* Right: 4 Quick Actions */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-2">
            {/* Action 1: Track Shipment */}
            <button
              onClick={() => onSearchTrack('GDA-747-8901')}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors">
                <Plane className="w-4 h-4 rotate-45" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 leading-snug group-hover:text-[#e11d2a] transition-colors truncate">
                  Track Shipment
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  Track your cargo
                </p>
              </div>
            </button>

            {/* Action 2: Get a Quote */}
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 leading-snug group-hover:text-[#e11d2a] transition-colors truncate">
                  Get a Quote
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  Request a quotation
                </p>
              </div>
            </button>

            {/* Action 3: Flight Schedule */}
            <button
              onClick={onOpenSchedule}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 leading-snug group-hover:text-[#e11d2a] transition-colors truncate">
                  Flight Schedule
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  Find available routes
                </p>
              </div>
            </button>

            {/* Action 4: Network */}
            <button
              onClick={onScrollToNetwork}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 leading-snug group-hover:text-[#e11d2a] transition-colors truncate">
                  Network
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  Explore destinations
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
