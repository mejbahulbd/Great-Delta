import React, { useState } from 'react';
import { useSiteImages } from '../context/ImageContext';

interface GDALogoProps {
  variant?: 'light' | 'dark' | 'monochrome';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtext?: boolean;
  layout?: 'horizontal' | 'vertical';
  lang?: 'en' | 'bn';
}

const CANDIDATE_PATHS = [
  '/assets/images/original-logo.png',
  '/assets/images/original-logo.jpeg',
  '/assets/images/original-logo.jpg',
  '/assets/original-logo.png',
  '/assets/original-logo.jpeg',
  '/assets/original-logo.jpg',
  '/assets/images/WhatsApp-Image-2026-09-22-at-12.24.03-PM.jpeg',
  '/assets/images/WhatsApp-Image-2026-09-22-at-12.24.03-PM.jpg',
];

export const GDALogo: React.FC<GDALogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showText = true,
  showSubtext = true,
  layout = 'horizontal',
  lang = 'en',
}) => {
  const isDark = variant === 'dark';
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  
  let customLogoFromContext = '';
  try {
    const { getImage, isCustom } = useSiteImages();
    if (isCustom('logo')) {
      customLogoFromContext = getImage('logo');
    }
  } catch {
    // context not present in isolated render
  }

  const heightStyles = {
    xs: { height: 28, classNames: 'h-7 w-auto' },
    sm: { height: 36, classNames: 'h-9 w-auto' },
    md: { height: 46, classNames: 'h-11 sm:h-12 w-auto' },
    lg: { height: 56, classNames: 'h-14 sm:h-16 w-auto' },
    xl: { height: 72, classNames: 'h-18 sm:h-20 w-auto' },
  };

  const titleSizes = {
    xs: 'text-xs font-black tracking-tight',
    sm: 'text-sm font-black tracking-tight',
    md: 'text-[15px] sm:text-[18px] font-black tracking-tight',
    lg: 'text-xl sm:text-2xl font-black tracking-tight',
    xl: 'text-2xl sm:text-3xl font-black tracking-tight',
  };

  const subTextSizes = {
    xs: 'text-[7.5px] font-semibold tracking-normal',
    sm: 'text-[8.5px] font-semibold tracking-normal',
    md: 'text-[10px] sm:text-[11.5px] font-semibold tracking-normal',
    lg: 'text-xs sm:text-[13px] font-semibold tracking-normal',
    xl: 'text-sm sm:text-base font-semibold tracking-normal',
  };

  const currentHeight = heightStyles[size] || heightStyles.md;

  const handleImageError = () => {
    if (candidateIndex < CANDIDATE_PATHS.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const activeSrc = customLogoFromContext || CANDIDATE_PATHS[candidateIndex];

  return (
    <div
      className={`select-none flex ${
        layout === 'vertical'
          ? 'flex-col items-center text-center gap-2'
          : 'items-center gap-3 sm:gap-3.5'
      } ${className}`}
    >
      {/* Official Original Logo Asset */}
      <div className="shrink-0 flex items-center justify-center">
        {!hasError ? (
          <img
            src={activeSrc}
            alt="Great Delta Official Logo"
            onError={handleImageError}
            className={`site-logo ${currentHeight.classNames} object-contain transition-transform duration-200 hover:scale-[1.02]`}
            style={{
              display: 'block',
              width: 'auto',
              height: `${currentHeight.height}px`,
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-blue-900 border border-amber-400 flex items-center justify-center text-amber-400 font-black text-sm">
            GDA
          </div>
        )}
      </div>

      {/* Organization Name & Slogan */}
      {showText && (
        <div
          className={`flex flex-col ${
            layout === 'vertical' ? 'items-center text-center' : 'items-start text-left'
          }`}
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`font-black uppercase leading-tight tracking-tight ${titleSizes[size]} ${
                isDark ? 'text-white' : 'text-[#07172c]'
              }`}
            >
              GREAT DELTA AIR
            </span>
            <span
              className={`font-medium tracking-normal text-[10px] sm:text-xs px-1.5 py-0.2 rounded border ${
                isDark
                  ? 'bg-blue-950/60 text-amber-400 border-amber-500/30'
                  : 'bg-blue-50 text-[#0c2340] border-blue-200'
              }`}
            >
              LIMITED
            </span>
          </div>

          {showSubtext && (
            <div className="mt-0.5 flex items-center gap-1">
              <span
                className={`font-semibold uppercase tracking-wider text-[9px] sm:text-[10.5px] ${
                  isDark ? 'text-amber-400' : 'text-[#e11d2a]'
                }`}
              >
                {lang === 'bn' ? 'আন্তর্জাতিক কার্গো এয়ারলাইন' : 'International Cargo Airline'}
              </span>
              <span className={`text-[9px] ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>•</span>
              <span
                className={`font-normal text-[8.5px] sm:text-[9.5px] ${subTextSizes[size]} ${
                  isDark ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                Bangladesh
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
