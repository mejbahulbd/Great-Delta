import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        <div className="bg-[#0b1f3a] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <h3 className="text-base font-bold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          <p>
            <strong>Great Delta Air Limited</strong> ("GDA") operates under international aviation conventions and the Civil Aviation Authority of Bangladesh (CAAB) regulatory framework.
          </p>
          <p>
            All international air cargo carriage is subject to the conditions of contract, Warsaw Convention, and Montreal Convention where applicable. Electronic air waybills (e-AWB) and cargo manifest documentation comply with IATA Cargo Services Conference resolutions.
          </p>
          <p>
            We prioritize the highest security standards for air cargo operations, strictly adhering to dangerous goods regulations (ICAO-TI / IATA-DGR) and international civil aviation security directives.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold bg-[#0c2340] text-white rounded hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
