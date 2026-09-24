import React from 'react';
import { STRATEGIC_ITEMS } from '../data/airlineData';
import { EditableImage } from './EditableImage';

const STRATEGIC_IMAGE_KEYS: Record<string, string> = {
  'export-growth': 'exportGrowth',
  'ecommerce-growth': 'ecommerceGrowth',
  'employment': 'employment',
  'global-connectivity': 'globalConnectivity',
};

export const StrategicImportance: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-0.5 bg-[#e11d2a]" />
            <span className="text-[#e11d2a] text-xs font-extrabold tracking-wider uppercase">
              STRATEGIC IMPORTANCE FOR BANGLADESH
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2340] tracking-tight">
            Supporting Bangladesh's Global Trade
          </h2>
        </div>

        {/* 4 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRATEGIC_ITEMS.map((item) => {
            const imageKey = STRATEGIC_IMAGE_KEYS[item.id] || 'exportGrowth';

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
              >
                {/* Thumbnail Image with Drag-Drop & In-Place Edit */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-lg overflow-hidden shrink-0 bg-slate-100 relative">
                  <EditableImage
                    imageKey={imageKey}
                    alt={item.title}
                    label={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    containerClassName="relative w-full h-full"
                  />
                </div>

                {/* Card Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#0c2340] mb-1 group-hover:text-[#e11d2a] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
