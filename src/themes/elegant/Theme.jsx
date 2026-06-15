import React from 'react';
import { useInvitationFlow } from '../../hooks/useInvitationFlow';
import { NavDots, MusicPlayer } from '../../components';

import Envelope from './sections/Envelope';
import HeroBackground from './sections/HeroBackground';
import Hero from './sections/Hero';
import Couple from './sections/Couple';
import CountdownSection from './sections/Countdown';
import Event from './sections/Event';
import LoveStory from './sections/LoveStory';
import Gift from './sections/Gift';
import RSVP from './sections/RSVP';
import Wishes from './sections/Wishes';
import Footer from './sections/Footer';

import './theme.css';

// In-page navigation order — matches the section `id`s below.
const NAV_SECTIONS = [
  { id: 'cover', label: 'Cover' },
  { id: 'opening', label: 'Pembuka' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'detail', label: 'Detail Acara' },
  { id: 'lovestory', label: 'Love Story' },
  { id: 'gift', label: 'Wedding Gift' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'wishes', label: 'Ucapan' },
];

/**
 * Theme: Elegant
 * ==============
 * Composition root for the "elegant" gold/cream wedding theme.
 * Receives `data` (invitationData) and assembles every section.
 *
 * The envelope → cover → open flow and scroll-lock/scrollspy behavior are
 * provided by the shared `useInvitationFlow` hook, so this file is only
 * responsible for *which* sections appear and in *what order* — exactly as
 * the target architecture intends ("Theme.jsx hanya bertugas menyusun section").
 */
const Theme = ({ data }) => {
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const { phase, guestName, activeSection, handleEnvelopeComplete, handleCoverOpen } =
    useInvitationFlow(sectionIds);

  return (
    <div className="theme-elegant relative">
      {/* LAYER 0: fixed parallax background, behind everything */}
      {phase !== 'envelope' && <HeroBackground />}

      {/* LAYER 1: fullscreen envelope overlay */}
      {phase === 'envelope' && (
        <Envelope onComplete={handleEnvelopeComplete} guestName={guestName} data={data.envelope} />
      )}

      {/* LAYER 2: page content (scrollable once opened) */}
      {phase !== 'envelope' && (
        <>
          {phase === 'open' && (
            <>
              <NavDots sections={NAV_SECTIONS} activeSection={activeSection} />
              <MusicPlayer musicUrl={data.music.url} title={data.music.title} tip={data.music.tip} />
            </>
          )}

          <div id="cover">
            <Hero onOpen={handleCoverOpen} data={data} />
          </div>

          <div id="opening">
            <Couple data={data} />
          </div>

          <div id="countdown">
            <CountdownSection data={data} />
          </div>

          <div id="detail">
            <Event data={data} />
          </div>

          <div id="lovestory">
            <LoveStory data={data} />
          </div>

          <div id="gift">
            <Gift data={data} />
          </div>

          <div id="rsvp">
            <RSVP data={data} />
          </div>

          <div id="wishes">
            <Wishes data={data} />
          </div>

          <Footer data={data} />
        </>
      )}
    </div>
  );
};

export default Theme;
