import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { useSiteImages, SITE_IMAGE_REGISTRY } from '../context/ImageContext';

export const ImageManagerFloatingLauncher: React.FC = () => {
  const { setIsManagerOpen, isCustom } = useSiteImages();

  const customCount = SITE_IMAGE_REGISTRY.filter((s) => isCustom(s.key)).length;

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <button
        onClick={() => setIsManagerOpen(true)}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#07172c]/95 hover:bg-[#0b2245] text-white text-xs font-semibold shadow-2xl border border-amber-400/80 hover:border-amber-400 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
        title="ওয়েবসাইটের সব ছবি পরিবর্তন ও আপলোড করার কন্ট্রোল সেন্টার"
      >
        <div className="relative">
          <Camera className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          {customCount > 0 && (
            <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-red-600 text-[9px] font-bold flex items-center justify-center text-white">
              {customCount}
            </span>
          )}
        </div>
        <span className="tracking-wide">সব ছবি পরিবর্তন প্যানেল</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-300 opacity-80 group-hover:opacity-100" />
      </button>
    </div>
  );
};
