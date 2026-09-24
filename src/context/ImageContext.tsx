import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ASSET_IMAGES } from '../data/airlineData';

export interface ImageSlotMeta {
  key: string;
  name: string;
  category: 'hero' | 'fleet' | 'services' | 'strategic' | 'leadership' | 'background' | 'brand';
  defaultUrl: string;
  recommendedSize: string;
  description: string;
}

export const SITE_IMAGE_REGISTRY: ImageSlotMeta[] = [
  {
    key: 'logo',
    name: 'অফিসিয়াল গ্রেট ডেল্টা লোগো (Brand Logo)',
    category: 'brand',
    defaultUrl: '/assets/images/original-logo.png',
    recommendedSize: '500x160 (PNG Transparent)',
    description: 'ওয়েবসাইটের হেডার ও ফুটারে প্রদর্শিত গোল্ডেন ক্রেস্ট ও ব্র্যান্ড লোগো',
  },
  {
    key: 'hero',
    name: 'হিরো ব্যানার বিমান ছবি (Hero Banner)',
    category: 'hero',
    defaultUrl: ASSET_IMAGES.hero,
    recommendedSize: '1920x1080 (16:9)',
    description: 'হোমপেজের মূল ব্যাকগ্রাউন্ডে প্রদর্শিত বোয়িং ৭৪৭ ফ্রেইটার বিমান',
  },
  {
    key: 'fleet',
    name: 'ফ্লিট সেকশন উড়ন্ত বিমান (Fleet Airborne)',
    category: 'fleet',
    defaultUrl: ASSET_IMAGES.fleet,
    recommendedSize: '1200x800 (3:2)',
    description: 'ফ্লিট সেকশনে উড়ন্ত বোয়িং ৭৪৭-৪০০ ফ্রেইটার বিমানের ছবি',
  },
  {
    key: 'generalFreight',
    name: 'জেনারেল এয়ার ফ্রেইট (General Air Freight)',
    category: 'services',
    defaultUrl: ASSET_IMAGES.generalFreight,
    recommendedSize: '900x600 (3:2)',
    description: 'কার্গো সার্ভিসেস সেকশনের প্রথম কার্ড ইমেজ',
  },
  {
    key: 'ecommerce',
    name: 'ই-কমার্স লজিস্টিকস (E-Commerce Logistics)',
    category: 'services',
    defaultUrl: ASSET_IMAGES.ecommerce,
    recommendedSize: '900x600 (3:2)',
    description: 'ই-কমার্স কার্গো পার্সেল ও ফুলফিলমেন্ট কার্ড ইমেজ',
  },
  {
    key: 'specialized',
    name: 'স্পেশালাইজড কার্গো (Specialized Cargo)',
    category: 'services',
    defaultUrl: ASSET_IMAGES.specialized,
    recommendedSize: '900x600 (3:2)',
    description: 'ভারী যন্ত্রপাতি ও মূল্যবান কার্গো হ্যান্ডলিং কার্ড ইমেজ',
  },
  {
    key: 'temperatureControlled',
    name: 'টেম্পারেচার কন্ট্রোল্ড ফার্মা (Pharma Logistics)',
    category: 'services',
    defaultUrl: ASSET_IMAGES.temperatureControlled,
    recommendedSize: '900x600 (3:2)',
    description: 'কোল্ড-চেইন ভ্যাকসিন ও ফার্মাসিউটিক্যালস কার্ড ইমেজ',
  },
  {
    key: 'charterCargo',
    name: 'চার্টার কার্গো সলিউশনস (Charter Operations)',
    category: 'services',
    defaultUrl: ASSET_IMAGES.charterCargo,
    recommendedSize: '900x600 (3:2)',
    description: 'ফুল ও পার্ট চার্টার এয়ারফ্রেইট কার্ড ইমেজ',
  },
  {
    key: 'exportGrowth',
    name: 'রপ্তানি প্রবৃদ্ধি ও তৈরি পোশাক (RMG Export)',
    category: 'strategic',
    defaultUrl: ASSET_IMAGES.exportGrowth,
    recommendedSize: '800x600 (4:3)',
    description: 'বাংলাদেশের তৈরি পোশাক ও প্রধান রপ্তানি ট্রেড কার্ড',
  },
  {
    key: 'ecommerceGrowth',
    name: 'ডিজিটাল লজিস্টিকস ও ক্রস-বর্ডার ট্রেড (E-Commerce Growth)',
    category: 'strategic',
    defaultUrl: ASSET_IMAGES.ecommerceGrowth,
    recommendedSize: '800x600 (4:3)',
    description: 'স্মার্ট কার্গো ডিজিটাল ট্র্যাকিং ও ওয়্যারহাউস কার্ড',
  },
  {
    key: 'employment',
    name: 'এভিয়েশন কর্মসংস্থান (Aviation Workforce)',
    category: 'strategic',
    defaultUrl: ASSET_IMAGES.employment,
    recommendedSize: '800x600 (4:3)',
    description: 'পাইলট, প্রকৌশলী ও গ্রাউন্ড ক্রু কর্মসংস্থান কার্ড',
  },
  {
    key: 'globalConnectivity',
    name: 'বৈশ্বিক কানেক্টিভিটি (Global Corridors)',
    category: 'strategic',
    defaultUrl: ASSET_IMAGES.globalConnectivity,
    recommendedSize: '800x600 (4:3)',
    description: 'বিশ্বব্যাপী আন্তর্জাতিক বাণিজ্য রুট কার্ড',
  },
  {
    key: 'chairman',
    name: 'চেয়ারম্যানের অফিসিয়াল ছবি (Chairman Portrait)',
    category: 'leadership',
    defaultUrl: ASSET_IMAGES.chairman,
    recommendedSize: '800x800 (1:1 Square)',
    description: 'এয়ার কমোডর মোহাম্মদ শফিকুল ইসলামের পোর্ট্রেট ছবি',
  },
  {
    key: 'safetyBackground',
    name: 'নিরাপত্তা ও কমপ্লায়েন্স ব্যাকগ্রাউন্ড (Safety Background)',
    category: 'background',
    defaultUrl: ASSET_IMAGES.safetyBackground,
    recommendedSize: '1200x800',
    description: 'সেফটি অ্যান্ড রেগুলেটরি ব্যানার ব্যাকগ্রাউন্ড',
  },
  {
    key: 'ctaCloudBackground',
    name: 'সিটিএ স্কাই ব্যানার ব্যাকগ্রাউন্ড (CTA Clouds)',
    category: 'background',
    defaultUrl: ASSET_IMAGES.ctaCloudBackground,
    recommendedSize: '1800x800',
    description: 'কল টু অ্যাকশন সেকশনের মেঘ ও আকাশের ব্যাকগ্রাউন্ড',
  },
  {
    key: 'cargoLoading',
    name: 'কার্গো লোডিং অপারেশনস (Cargo Loading)',
    category: 'fleet',
    defaultUrl: ASSET_IMAGES.cargoLoading,
    recommendedSize: '1200x800',
    description: 'বোয়িং ৭৪৭ ফ্রেইটার কার্গো ডেক লোডিং ছবি',
  },
  {
    key: 'parliament',
    name: 'জাতীয় সংসদ ও ট্রেড ল্যান্ডস্কেপ (National Heritage)',
    category: 'strategic',
    defaultUrl: ASSET_IMAGES.parliament,
    recommendedSize: '1200x800',
    description: 'বাংলাদেশ জাতীয় সংসদ ও কৌশলগত অবকাঠামো ছবি',
  }
];

interface ImageContextType {
  images: Record<string, string>;
  isCustom: (key: string) => boolean;
  getImage: (key: string) => string;
  updateImage: (key: string, dataUrl: string) => void;
  resetImage: (key: string) => void;
  resetAllImages: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  openManagerForSlot: (key?: string) => void;
  activeSlotFocus: string | null;
  setActiveSlotFocus: (key: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const STORAGE_KEY = 'gda_all_site_custom_images';

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeSlotFocus, setActiveSlotFocus] = useState<string | null>(null);

  // Initialize from localStorage and sync legacy hero image if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const initialMap: Record<string, string> = stored ? JSON.parse(stored) : {};

      // Migrate legacy single hero image if exists
      const legacyHero = localStorage.getItem('gda_custom_hero_image');
      if (legacyHero && !initialMap['hero']) {
        initialMap['hero'] = legacyHero;
      }

      setCustomImages(initialMap);
    } catch {
      // ignore
    }
  }, []);

  const updateImage = (key: string, dataUrl: string) => {
    setCustomImages((prev) => {
      const next = { ...prev, [key]: dataUrl };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        if (key === 'hero') {
          localStorage.setItem('gda_custom_hero_image', dataUrl);
        }
      } catch (err) {
        console.warn('Failed to store image in localStorage:', err);
      }
      return next;
    });
  };

  const resetImage = (key: string) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[key];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        if (key === 'hero') {
          localStorage.removeItem('gda_custom_hero_image');
        }
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetAllImages = () => {
    setCustomImages({});
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('gda_custom_hero_image');
    } catch {
      // ignore
    }
  };

  const getImage = (key: string): string => {
    if (customImages[key]) {
      return customImages[key];
    }
    const slot = SITE_IMAGE_REGISTRY.find((s) => s.key === key);
    return slot?.defaultUrl || (ASSET_IMAGES as Record<string, string>)[key] || '';
  };

  const isCustom = (key: string): boolean => {
    return Boolean(customImages[key]);
  };

  const openManagerForSlot = (key?: string) => {
    if (key) {
      setActiveSlotFocus(key);
    }
    setIsManagerOpen(true);
  };

  return (
    <ImageContext.Provider
      value={{
        images: customImages,
        isCustom,
        getImage,
        updateImage,
        resetImage,
        resetAllImages,
        isManagerOpen,
        setIsManagerOpen,
        openManagerForSlot,
        activeSlotFocus,
        setActiveSlotFocus,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useSiteImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useSiteImages must be used within an ImageProvider');
  }
  return context;
};
