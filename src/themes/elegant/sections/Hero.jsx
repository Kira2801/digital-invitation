import React, { useEffect, useState } from 'react';

/**
 * Generates a human readable date string from an ISO date.
 * e.g. "Monday, August 17, 2026"
 */
const formatWeddingDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/**
 * Hero
 * ----
 * Cover content (couple names, eyebrow text, date, "open invitation" button).
 * Background/parallax/floral/particles live in <HeroBackground />.
 *
 * @param {() => void} onOpen - called when the open button is pressed
 * @param {object} data - `invitationData` (uses `hero`, `couple`, `weddingDate`)
 */
const Hero = ({ onOpen, data }) => {
  const [isReady, setIsReady] = useState(false);
  const formattedDate = formatWeddingDate(data.weddingDate);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center px-8"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Konten utama ── */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 1.5s ease' }}
      >
        {/* We're getting married */}
        <p
          className="text-sm uppercase mb-4 opacity-60"
          style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.35em', color: '#e4a924' }}
        >
          {data.hero.eyebrow}
        </p>

        {/* Ornament */}
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #e4a924)' }} />
          <span style={{ color: '#e4a924' }}>✦</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #e4a924)' }} />
        </div>

        {/* Nama mempelai wanita */}
        <h1
          className="shimmer-text"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: '4.5rem', lineHeight: 1.3, marginBottom: '0.1rem' }}
        >
          {data.couple.bride.shortName}
        </h1>

        {/* & separator */}
        <div className="flex items-center gap-3 my-1">
          <div className="h-px w-8" style={{ background: 'rgba(228,169,36,0.4)' }} />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#e4a924', opacity: 0.8 }}>
            &
          </span>
          <div className="h-px w-8" style={{ background: 'rgba(228,169,36,0.4)' }} />
        </div>

        {/* Nama mempelai pria */}
        <h1
          className="shimmer-text"
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: '4.5rem', lineHeight: 1.3, marginTop: '0.1rem' }}
        >
          {data.couple.groom.shortName}
        </h1>

        {/* Tanggal — otomatis dari weddingDate */}
        <div className="mt-6 mb-2">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 opacity-40" style={{ background: '#e4a924' }} />
            <p
              className="text-xs opacity-60"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.15em', color: '#faf6f0' }}
            >
              {formattedDate.toUpperCase()}
            </p>
            <div className="h-px w-8 opacity-40" style={{ background: '#e4a924' }} />
          </div>
        </div>
      </div>

      {/* ── Tombol buka undangan ── */}
      <div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-20"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 2s ease 1s' }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs opacity-40" style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.25em' }}>
            OPEN INVITATION
          </p>

          <button
            onClick={onOpen}
            className="relative"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d4880d, #e4a924)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(212,136,13,0.4), 0 0 60px rgba(212,136,13,0.15)',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                color: '#1a0f0a',
                fontSize: '1.2rem',
              }}
            >
              ↓
            </span>
            <span
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(212,136,13,0.4)', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(212,136,13,0.2)', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s' }}
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
