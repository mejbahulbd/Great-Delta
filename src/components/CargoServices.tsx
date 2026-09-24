import React, { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Snowflake, 
  Thermometer, 
  Plane, 
  ArrowRight,
  X,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/airlineData';
import { ServiceItem } from '../types';
import { EditableImage } from './EditableImage';
import { useSiteImages } from '../context/ImageContext';

interface CargoServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

const SERVICE_IMAGE_KEYS: Record<string, string> = {
  'general-air-freight': 'generalFreight',
  'ecommerce-logistics': 'ecommerce',
  'specialized-cargo': 'specialized',
  'temperature-controlled': 'temperatureControlled',
  'charter-cargo': 'charterCargo',
};

export const CargoServices: React.FC<CargoServicesProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { getImage } = useSiteImages();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Package':
        return <Package className="w-5 h-5 text-[#0b2245]" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-[#0b2245]" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5 text-[#0b2245]" />;
      case 'Thermometer':
        return <Thermometer className="w-5 h-5 text-[#0b2245]" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#0b2245]" />;
      default:
        return <Package className="w-5 h-5 text-[#0b2245]" />;
    }
  };

  return (
    <section id="services" className="w-full py-16 lg:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-0.5 bg-[#e11d2a]" />
              <span className="text-[#e11d2a] text-xs font-extrabold tracking-wider uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2340] tracking-tight">
              Cargo Solutions Built for Global Trade
            </h2>
          </div>

          <button
            onClick={() => setSelectedService(SERVICES_DATA[0])}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c2340] hover:text-[#e11d2a] transition-colors cursor-pointer group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#e11d2a]" />
          </button>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service) => {
            const imageKey = SERVICE_IMAGE_KEYS[service.id] || 'generalFreight';

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Card Image with In-Place Editable & Drag-Drop */}
                <div className="relative h-36 overflow-hidden bg-slate-200">
                  <EditableImage
                    imageKey={imageKey}
                    alt={service.title}
                    label={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="relative w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <h3 className="text-sm font-extrabold text-[#0c2340] mb-2 leading-snug group-hover:text-[#e11d2a] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-auto">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c2340] group-hover:text-[#e11d2a] transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-fadeIn">
            <div className="relative h-48">
              <EditableImage
                imageKey={SERVICE_IMAGE_KEYS[selectedService.id] || 'generalFreight'}
                alt={selectedService.title}
                label={selectedService.title}
                className="w-full h-full object-cover"
                containerClassName="relative w-full h-full"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 z-30 p-1.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#0c2340]">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Capabilities
                </h4>
                {selectedService.details?.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 rounded-lg bg-[#0c2340] hover:bg-[#14355d] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
