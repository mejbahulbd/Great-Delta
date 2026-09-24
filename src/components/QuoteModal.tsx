import React, { useState } from 'react';
import { GDALogo } from './GDALogo';
import { X, Send, CheckCircle2, Calculator } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [cargoType, setCargoType] = useState('General Air Freight');
  const [origin, setOrigin] = useState('DAC - Dhaka, Bangladesh');
  const [destination, setDestination] = useState('DXB - Dubai, UAE');
  const [weightKg, setWeightKg] = useState('2500');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible for user
    }, 500);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-[#0b1f3a] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GDALogo variant="dark" size="sm" showText={false} />
            <div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                Request a Cargo Quotation
              </h3>
              <p className="text-xs text-blue-200">
                Direct Freight Capacity from Great Delta Air Limited
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

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Quotation Request Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{name || 'Customer'}</span>. Our commercial cargo operations team will calculate the optimal routing and send a customized quote to <span className="font-semibold text-slate-800">{email || 'your email'}</span> within 2 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="bg-[#0c2340] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Cargo Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service / Cargo Category
                </label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:border-red-500"
                >
                  <option>General Air Freight</option>
                  <option>E-Commerce Logistics</option>
                  <option>Specialized Cargo (Pharma / Electronics)</option>
                  <option>Temperature-Controlled & Dangerous Goods</option>
                  <option>Full Aircraft Charter (Boeing 747-400F)</option>
                </select>
              </div>

              {/* Row 2: Route */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Origin Airport
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:border-red-500"
                  >
                    <option>DAC - Dhaka (Hazrat Shahjalal Int'l)</option>
                    <option>CGP - Chattogram (Shah Amanat Int'l)</option>
                    <option>ZYL - Sylhet (Osmani Int'l)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination Hub
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:border-red-500"
                  >
                    <option>DXB - Dubai, UAE</option>
                    <option>DOH - Doha, Qatar</option>
                    <option>RUH - Riyadh, Saudi Arabia</option>
                    <option>SIN - Singapore Changi</option>
                    <option>KUL - Kuala Lumpur, Malaysia</option>
                    <option>BKK - Bangkok, Thailand</option>
                    <option>CAN - Guangzhou, China</option>
                    <option>HKG - Hong Kong</option>
                    <option>LHR - London Heathrow, UK</option>
                    <option>FRA - Frankfurt, Germany</option>
                    <option>IST - Istanbul, Turkey</option>
                    <option>NBO - Nairobi, Kenya</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Weight */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Gross Weight (kg)
                </label>
                <input
                  type="number"
                  min="50"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              {/* Row 4: Contact Details */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-bold text-[#0c2340] mb-2 uppercase tracking-wider">
                  Contact Information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-0.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1700-000000"
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#e11d2a] hover:bg-[#c91823] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition shadow-sm cursor-pointer"
                >
                  <span>Submit Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
