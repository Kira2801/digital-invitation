import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationData } from './data/invitation';
import { useGuestName } from './hooks/useGuestName';
import OpeningSection from './components/sections/OpeningSection';
import HeroSection from './themes/elegant/sections/Hero';
import CoupleSection from './themes/elegant/sections/Couple';
import QuoteSection from './components/sections/QuoteSection';
import StorySection from './components/sections/StorySection';
import Countdown from './components/Countdown/Countdown';
import EventSection from './themes/elegant/sections/Event';
import GallerySection from './components/Gallery/Gallery';
import RSVPSection from './themes/elegant/sections/RSVP';
import GiftsSection from './components/sections/GiftsSection';
import ClosingSection from './components/sections/ClosingSection';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const guestName = useGuestName();

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Start music after a short delay for smooth transition
    setTimeout(() => {
      setIsPlaying(true);
    }, 500);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (    
    
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Opening Screen */}
      <AnimatePresence>
        {!isOpen && (
          <OpeningSection
            data={invitationData.opening}
            guestName={guestName}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {/* Hero Section */}
        <HeroSection couple={invitationData} guestName={guestName} />

        {/* Quote Section */}
        <QuoteSection data={invitationData.quote} />

        {/* Couple Section */}
        <CoupleSection couple={invitationData} />

        {/* Story Section */}
        <StorySection story={invitationData.story} />

        {/* Countdown Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                {invitationData.countdown.message}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
            </motion.div>
            <Countdown targetDate={invitationData.countdown.targetDate} />
          </div>
        </section>

        {/* Event Section */}
        <EventSection event={invitationData.events} />

        {/* Gallery Section */}
        <GallerySection images={invitationData.gallery} />

        {/* RSVP Section */}
        <RSVPSection rsvpData={invitationData.rsvp} />

        {/* Gifts Section */}
        <GiftsSection gifts={invitationData.gifts} />

        {/* Closing Section */}
        <ClosingSection data={invitationData.closing} />
      </motion.main>

      {/* Music Player */}
      {isOpen && (
        <MusicPlayer
          src={invitationData.music.src}
          title={invitationData.music.title}
          isInitiallyPlaying={isPlaying}
          onTogglePlay={toggleMusic}
        />
      )}
    </div>
  );
}

export default App;
