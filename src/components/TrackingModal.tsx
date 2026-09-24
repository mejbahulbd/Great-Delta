import React, { useState } from 'react';
import { GDALogo } from './GDALogo';
import { 
  X, 
  Search, 
  Plane, 
  CheckCircle2, 
  Clock, 
  Box, 
  MapPin, 
  ShieldAlert 
} from 'lucide-react';
import { TrackingResult } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAwb?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialAwb = 'GDA-747-8901',
}) => {
  const [searchAwb, setSearchAwb] = useState(initialAwb);
  const [activeTab, setActiveTab] = useState<'timeline' | 'details'>('timeline');

  if (!isOpen) return null;

  const mockResult: TrackingResult = {
    awbNumber: searchAwb.trim() || 'GDA-747-8901',
    origin: 'DAC - Dhaka (Hazrat Shahjalal Int’l)',
    destination: 'DXB - Dubai International Cargo Hub',
    status: 'In Transit',
    flight: 'GDA-7402 / Boeing 747-400F',
    pieces: 48,
    weight: '14,850 kg / 32,738 lbs',
    date: 'Current Schedule',
    timeline: [
      {
        time: 'Today, 06:30 BST',
        event: 'Cargo Received & Weighed at Dhaka Freight Terminal',
        location: 'Dhaka Cargo Complex, Bangladesh',
        completed: true,
      },
      {
        time: 'Today, 09:15 BST',
        event: 'Customs Clearance & Security Screening Passed (CAAB)',
        location: 'DAC Export Terminal',
        completed: true,
      },
      {
        time: 'Today, 11:45 BST',
        event: 'Loaded onto Main Deck Pallets (Boeing 747-400F)',
        location: 'DAC Ramp 14',
        completed: true,
      },
      {
        time: 'Today, 13:10 BST',
        event: 'Flight Departed DAC Enroute to Middle East Hub',
        location: 'Airborne (Cruising Flight Level FL340)',
        completed: true,
      },
      {
        time: 'Estimated 17:35 GST',
        event: 'Scheduled Arrival & Ramp Unloading',
        location: 'Dubai Cargo Gateway (DXB)',
        completed: false,
      },
      {
        time: 'Estimated 19:00 GST',
        event: 'Ready for Consignee Pickup & Connecting Flight',
        location: 'DXB Bonded Cargo Logistics Hub',
        completed: false,
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-[#0b1f3a] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GDALogo variant="dark" size="sm" showText={false} />
            <div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight flex items-center gap-2">
                Live Cargo Tracking
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-red-600/30 text-red-300 border border-red-500/40 rounded-full">
                  Real-Time
                </span>
              </h3>
              <p className="text-xs text-blue-200">
                Great Delta Air Official Air Waybill (AWB) Portal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar Inside Modal */}
        <div className="p-5 border-b border-slate-200 bg-slate-50/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchAwb}
                onChange={(e) => setSearchAwb(e.target.value)}
                placeholder="Enter 11-digit AWB or tracking number"
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e11d2a] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#c91823] transition cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>

        {/* Tracking Details Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Status Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                AWB: {mockResult.awbNumber}
              </span>
              <h4 className="text-base font-extrabold text-[#0c2340] mt-1">
                Status: <span className="text-[#e11d2a]">{mockResult.status}</span>
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {mockResult.flight}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-slate-500">Gross Weight / Pieces</p>
              <p className="text-sm font-bold text-slate-900">
                {mockResult.weight} ({mockResult.pieces} Pcs)
              </p>
            </div>
          </div>

          {/* Route Overview */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <p className="text-slate-400 font-semibold uppercase text-[10px]">
                Origin
              </p>
              <p className="font-bold text-slate-900 mt-0.5">
                {mockResult.origin}
              </p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold uppercase text-[10px]">
                Destination
              </p>
              <p className="font-bold text-slate-900 mt-0.5">
                {mockResult.destination}
              </p>
            </div>
          </div>

          {/* Timeline Events */}
          <div>
            <h5 className="text-xs font-bold text-[#0c2340] uppercase tracking-wider mb-4">
              Shipment Milestones
            </h5>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {mockResult.timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-3">
                  {/* Status Circle */}
                  <div
                    className={`absolute -left-6 w-4 h-4 rounded-full flex items-center justify-center ${
                      item.completed
                        ? 'bg-[#e11d2a] text-white ring-4 ring-red-100'
                        : 'bg-slate-300 text-white'
                    }`}
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <Clock className="w-2.5 h-2.5" />
                    )}
                  </div>

                  {/* Event Information */}
                  <div>
                    <p
                      className={`text-xs font-bold ${
                        item.completed ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {item.event}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {item.location} • <span className="font-medium">{item.time}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold bg-[#0c2340] text-white rounded-lg hover:bg-slate-800 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
