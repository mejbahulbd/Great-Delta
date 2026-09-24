import React, { useState, useRef } from 'react';
import { 
  X, 
  Camera, 
  RotateCcw, 
  UploadCloud, 
  Check, 
  Image as ImageIcon, 
  Trash2, 
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
import { useSiteImages, SITE_IMAGE_REGISTRY, ImageSlotMeta } from '../context/ImageContext';

export const SiteImageManagerModal: React.FC = () => {
  const { 
    isManagerOpen, 
    setIsManagerOpen, 
    getImage, 
    updateImage, 
    resetImage, 
    resetAllImages, 
    isCustom,
    activeSlotFocus,
    setActiveSlotFocus
  } = useSiteImages();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [draggingKey, setDraggingKey] = useState<string | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  if (!isManagerOpen) return null;

  const categories = [
    { id: 'all', label: 'সব ছবি (All)' },
    { id: 'hero', label: 'হিরো ব্যানার' },
    { id: 'brand', label: 'ব্র্যান্ড লোগো' },
    { id: 'fleet', label: 'ফ্লিট ও বিমান' },
    { id: 'services', label: 'কার্গো সার্ভিসেস' },
    { id: 'strategic', label: 'কৌশলগত ট্রেড' },
    { id: 'leadership', label: 'নেতৃত্ব ও সেফটি' },
    { id: 'background', label: 'ব্যাকগ্রাউন্ডস' },
  ];

  const filteredSlots = SITE_IMAGE_REGISTRY.filter((slot) => {
    const matchesCategory = selectedCategory === 'all' || slot.category === selectedCategory;
    const matchesSearch = 
      slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.key.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProcessFile = (key: string, file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          updateImage(key, dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const totalCustomCount = SITE_IMAGE_REGISTRY.filter((s) => isCustom(s.key)).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="bg-[#07172c] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>ওয়েবসাইটের কেন্দ্রীয় ইমেজ প্যানেল</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold">
                  Central Image Manager
                </span>
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                সাইটের সকল ছবি পরিবর্তনের একমাত্র প্যানেল — এখান থেকেই যেকোনো ইমেজ সরাসরি পরিবর্তন, আপলোড বা রিসেট করুন
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsManagerOpen(false);
              setActiveSlotFocus(null);
            }}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Filters */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b2245] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Global Reset */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ছবি খুঁজুন..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
              />
            </div>

            {totalCustomCount > 0 && (
              <button
                onClick={() => {
                  if (confirm('আপনি কি সব কাস্টম ছবি মুছে ডিফল্টে ফিরে যেতে চান?')) {
                    resetAllImages();
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>সব রিসেট ({totalCustomCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSlots.map((slot) => {
              const currentUrl = getImage(slot.key);
              const custom = isCustom(slot.key);
              const isFocused = activeSlotFocus === slot.key;

              return (
                <div
                  key={slot.key}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md ${
                    isFocused ? 'ring-2 ring-amber-400 border-amber-400' : 'border-slate-200'
                  }`}
                >
                  {/* Hidden File Input */}
                  <input
                    ref={(el) => {
                      fileInputRefs.current[slot.key] = el;
                    }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleProcessFile(slot.key, file);
                      if (e.target) e.target.value = '';
                    }}
                  />

                  {/* Thumbnail / Dropzone Area */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDraggingKey(slot.key);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      setDraggingKey(null);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDraggingKey(null);
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleProcessFile(slot.key, file);
                    }}
                    className={`relative h-44 bg-slate-100 overflow-hidden group cursor-pointer ${
                      draggingKey === slot.key ? 'ring-4 ring-amber-400' : ''
                    }`}
                    onClick={() => fileInputRefs.current[slot.key]?.click()}
                  >
                    <img
                      src={currentUrl}
                      alt={slot.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                      <Camera className="w-8 h-8 text-amber-400 mb-1" />
                      <span className="text-xs font-bold">ছবি সিলেক্ট করুন</span>
                      <span className="text-[10px] text-slate-200">বা সরাসরি ফাইল ড্রপ করুন</span>
                    </div>

                    {/* Badge: Custom or Default */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                      {custom ? (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-[10px] shadow-sm flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          কাস্টম ছবি সক্রিয়
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-black/60 text-white font-medium text-[10px] backdrop-blur-xs">
                          ডিফল্ট ছবি
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details & Actions */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {slot.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                        {slot.description}
                      </p>
                      <div className="mt-2 text-[10px] text-slate-400 font-mono">
                        সাইজ: {slot.recommendedSize}
                      </div>
                    </div>

                    {/* Buttons Row */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => fileInputRefs.current[slot.key]?.click()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#0b2245] hover:bg-[#11315f] text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5 text-amber-300" />
                        <span>ছবি আপলোড</span>
                      </button>

                      {custom && (
                        <button
                          onClick={() => resetImage(slot.key)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 transition-colors cursor-pointer"
                          title="ডিফল্টে রিসেট করুন"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              আপনার আপলোড করা ছবি স্বয়ংক্রিয়ভাবে ব্রাউজারে সংরক্ষিত থাকবে (Permanent Local Persistence)।
            </span>
          </div>
          <button
            onClick={() => setIsManagerOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-[#0b2245] hover:bg-slate-800 text-white font-semibold transition-colors cursor-pointer text-xs"
          >
            সম্পন্ন (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
