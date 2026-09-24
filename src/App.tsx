import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickTrackBar } from './components/QuickTrackBar';
import { CargoServices } from './components/CargoServices';
import { FleetSection } from './components/FleetSection';
import { NetworkSection } from './components/NetworkSection';
import { MissionVision } from './components/MissionVision';
import { StrategicImportance } from './components/StrategicImportance';
import { SafetyAndChairman } from './components/SafetyAndChairman';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { TrackingModal } from './components/TrackingModal';
import { QuoteModal } from './components/QuoteModal';
import { FlightScheduleModal } from './components/FlightScheduleModal';
import { LegalModal } from './components/LegalModal';
import { ImageProvider } from './context/ImageContext';
import { SiteImageManagerModal } from './components/SiteImageManagerModal';
import { ImageManagerFloatingLauncher } from './components/ImageManagerFloatingLauncher';

function MainApp() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [trackingAwb, setTrackingAwb] = useState('GDA-747-8901');
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const handleOpenTrackWithAwb = (awb: string) => {
    setTrackingAwb(awb);
    setIsTrackOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#e11d2a] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenTrack={() => setIsTrackOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onNavigate={handleScrollToSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero
          onOpenTrack={() => setIsTrackOpen(true)}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 2. Floating Quick Tracking & Action Bar */}
        <QuickTrackBar
          onSearchTrack={handleOpenTrackWithAwb}
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onScrollToNetwork={() => handleScrollToSection('network')}
        />

        {/* 3. Our Services (Cargo Solutions Built for Global Trade) */}
        <CargoServices />

        {/* 4. Our Fleet (Boeing 747-400 Freighter) */}
        <FleetSection />

        {/* 5. Our Network (Global Reach Regional Connectivity) */}
        <NetworkSection />

        {/* 6. Mission & Vision */}
        <MissionVision />

        {/* 7. Strategic Importance for Bangladesh */}
        <StrategicImportance />

        {/* 8. Safety & Compliance / Chairman's Message */}
        <SafetyAndChairman />

        {/* 9. Call to Action Banner */}
        <CtaBanner
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenContact={() => handleScrollToSection('contact')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleScrollToSection}
        onOpenLegal={(title) => setLegalModalTitle(title)}
      />

      {/* Interactive Modals */}
      <TrackingModal
        isOpen={isTrackOpen}
        onClose={() => setIsTrackOpen(false)}
        initialAwb={trackingAwb}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <FlightScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onBookFlight={() => setIsQuoteOpen(true)}
      />

      <LegalModal
        isOpen={!!legalModalTitle}
        onClose={() => setLegalModalTitle(null)}
        title={legalModalTitle || ''}
      />

      {/* All Site Image Manager Central Modal */}
      <SiteImageManagerModal />

      {/* Quick Floating Launcher Button for Image Manager */}
      <ImageManagerFloatingLauncher />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainApp />
    </ImageProvider>
  );
}
