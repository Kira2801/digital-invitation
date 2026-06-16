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
import Gallery from './sections/Gallery';
import Gift from './sections/Gift';
import RSVP from './sections/RSVP';
import Wishes from './sections/Wishes';
import Footer from './sections/Footer';

import './theme.css';

/**
 * In-page navigation sections — matches the section `id`s used below.
 * The "gallery" section is new in this theme (not present in "elegant").
 */
const NAV_SECTIONS = [
  { id: 'cover',     label: 'Cover' },
  { id: 'opening',   label: 'Pembuka' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'detail',    label: 'Detail Acara' },
  { id: 'lovestory', label: 'Love Story' },
  { id: 'gallery',   label: 'Gallery' },
  { id: 'gift',      label: 'Wedding Gift' },
  { id: 'rsvp',      label: 'RSVP' },
  { id: 'wishes',    label: 'Ucapan' },
];

/**
 * Theme: Lavender
 * ===============
 * Composition root for the "lavender" soft-pastel wedding theme.
 * Sections: Hero · Couple · Countdown · Event · LoveStory ·
 *           Gallery · Gift · RSVP · Wishes · Footer
 *
 * Receives `data` (invitationData) and assembles every section.
 * Shared flow behavior (envelope → cover → open) provided by
 * `useInvitationFlow` hook, identical to the "elegant" theme.
 */
const Theme = ({ data }) => {
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const { phase, guestName, activeSection, handleEnvelopeComplete, handleCoverOpen } =
    useInvitationFlow(sectionIds);

  return (
    <div className="theme-lavender relative">
      {/* LAYER 0: fixed parallax background, behind everything */}
      {phase !== 'envelope' && <HeroBackground />}

      {/* LAYER 1: fullscreen envelope overlay */}
      {phase === 'envelope' && (
        <Envelope
          onComplete={handleEnvelopeComplete}
          guestName={guestName}
          data={data.envelope}
        />
      )}

      {/* LAYER 2: page content (scrollable once opened) */}
      {phase !== 'envelope' && (
        <>
          {phase === 'open' && (
            <>
              <NavDots sections={NAV_SECTIONS} activeSection={activeSection} />
              <MusicPlayer
                musicUrl={data.music.url}
                title={data.music.title}
                tip={data.music.tip}
              />
            </>
          )}

          {/* ── Hero / Cover ── */}
          <div id="cover">
            <Hero onOpen={handleCoverOpen} data={data} />
          </div>

          {/* ── Couple ── */}
          <div id="opening">
            <Couple data={data} />
          </div>

          {/* ── Countdown ── */}
          <div id="countdown">
            <CountdownSection data={data} />
          </div>

          {/* ── Event Details ── */}
          <div id="detail">
            <Event data={data} />
          </div>

          {/* ── Love Story ── */}
          <div id="lovestory">
            <LoveStory data={data} />
          </div>

          {/* ── Gallery (new section in Lavender theme) ── */}
          <div id="gallery">
            <Gallery data={data} />
          </div>

          {/* ── Wedding Gift ── */}
          <div id="gift">
            <Gift data={data} />
          </div>

          {/* ── RSVP ── */}
          <div id="rsvp">
            <RSVP data={data} />
          </div>

          {/* ── Wishes ── */}
          <div id="wishes">
            <Wishes data={data} />
          </div>

          {/* ── Footer ── */}
          <Footer data={data} />
        </>
      )}
    </div>
  );
};

export default Theme;
