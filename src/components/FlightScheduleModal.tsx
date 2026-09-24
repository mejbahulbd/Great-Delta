import React, { useState } from 'react';
import { GDALogo } from './GDALogo';
import { X, Calendar, Plane, Clock, ArrowRight } from 'lucide-react';

interface FlightScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookFlight?: (flightNo: string) => void;
}

export const FlightScheduleModal: React.FC<FlightScheduleModalProps> = ({
  isOpen,
  onClose,
  onBookFlight,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  if (!isOpen) return null;

  const schedules = [
    {
      flightNo: 'GDA-7402',
      origin: 'DAC (Dhaka)',
      destination: 'DXB (Dubai)',
      days: 'Mon, Wed, Fri, Sun',
      depTime: '04:30 BST',
      arrTime: '08:45 GST',
      aircraft: 'Boeing 747-400F',
      region: 'Middle East',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7404',
      origin: 'DAC (Dhaka)',
      destination: 'RUH (Riyadh)',
      days: 'Tue, Thu, Sat',
      depTime: '06:00 BST',
      arrTime: '10:15 AST',
      aircraft: 'Boeing 747-400F',
      region: 'Middle East',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7410',
      origin: 'DAC (Dhaka)',
      destination: 'FRA (Frankfurt)',
      days: 'Wed, Sat',
      depTime: '02:15 BST',
      arrTime: '08:50 CET',
      aircraft: 'Boeing 747-400F',
      region: 'Europe',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7412',
      origin: 'DAC (Dhaka)',
      destination: 'LHR (London Heathrow)',
      days: 'Mon, Thu',
      depTime: '01:45 BST',
      arrTime: '08:30 GMT',
      aircraft: 'Boeing 747-400F',
      region: 'Europe',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7420',
      origin: 'DAC (Dhaka)',
      destination: 'SIN (Singapore)',
      days: 'Daily',
      depTime: '08:00 BST',
      arrTime: '13:45 SGT',
      aircraft: 'Boeing 747-400F',
      region: 'Asia',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7426',
      origin: 'DAC (Dhaka)',
      destination: 'CAN (Guangzhou)',
      days: 'Tue, Fri, Sun',
      depTime: '10:30 BST',
      arrTime: '16:15 CST',
      aircraft: 'Boeing 747-400F',
      region: 'Asia',
      status: 'Scheduled',
    },
    {
      flightNo: 'GDA-7430',
      origin: 'DAC (Dhaka)',
      destination: 'NBO (Nairobi)',
      days: 'Wed, Sun',
      depTime: '05:00 BST',
      arrTime: '11:20 EAT',
      aircraft: 'Boeing 747-400F',
      region: 'Africa',
      status: 'Scheduled',
    },
  ];

  const filtered = selectedFilter === 'All' 
    ? schedules 
    : schedules.filter((s) => s.region === selectedFilter);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-[#0b1f3a] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GDALogo variant="dark" size="sm" showText={false} />
            <div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                Scheduled Freighter Flights
              </h3>
              <p className="text-xs text-blue-200">
                Regular Intercontinental Cargo Routes from Dhaka Hub (DAC)
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

        {/* Region Filter Buttons */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold text-slate-600 mr-2">Filter Region:</span>
          {['All', 'Middle East', 'Europe', 'Asia', 'Africa'].map((r) => (
            <button
              key={r}
              onClick={() => setSelectedFilter(r)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition cursor-pointer ${
                selectedFilter === r
                  ? 'bg-[#e11d2a] text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold text-[10px]">
                <th className="pb-3">Flight #</th>
                <th className="pb-3">Route</th>
                <th className="pb-3">Frequency</th>
                <th className="pb-3">Departure / Arrival</th>
                <th className="pb-3">Aircraft</th>
                <th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((item) => (
                <tr key={item.flightNo} className="hover:bg-slate-50 transition">
                  <td className="py-3.5 font-bold text-slate-900">
                    <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono">
                      {item.flightNo}
                    </span>
                  </td>
                  <td className="py-3.5 font-semibold text-[#0c2340]">
                    {item.origin} → {item.destination}
                  </td>
                  <td className="py-3.5 text-slate-600">
                    {item.days}
                  </td>
                  <td className="py-3.5 text-slate-600">
                    <span className="font-medium text-slate-800">{item.depTime}</span> / {item.arrTime}
                  </td>
                  <td className="py-3.5 text-slate-500">
                    {item.aircraft}
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => {
                        onClose();
                        if (onBookFlight) onBookFlight(item.flightNo);
                      }}
                      className="bg-blue-950 hover:bg-[#e11d2a] text-white px-3 py-1 rounded text-[11px] font-bold transition cursor-pointer"
                    >
                      Book Cargo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>* All times local. Subject to regulatory and air traffic clearances.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-bold bg-slate-200 text-slate-800 rounded hover:bg-slate-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
