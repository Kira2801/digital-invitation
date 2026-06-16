import React, { useEffect, useState } from 'react';

/**
 * Hero (Lavender)
 * ---------------
 * Cover with couple names, eyebrow text, date, and individual bride + groom
 * portrait photos flanking the central name block. Background/parallax handled
 * by <HeroBackground />.
 */

const formatWeddingDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const Hero = ({ onOpen, data }) => {
  const [isReady, setIsReady] = useState(false);
  const formattedDate = formatWeddingDate(data.weddingDate);
  const { bride, groom } = data.couple;

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center px-5"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Main content ── */}
      <div
        className="relative z-10 flex flex-col items-center w-full"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 1.4s ease' }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs uppercase mb-4"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            letterSpacing: '0.35em',
            color: '#9b7fd4',
            fontWeight: 600,
            opacity: 0.75,
          }}
        >
          {data.hero.eyebrow}
        </p>

        {/* Ornament */}
        <div className="flex items-center gap-2 mb-6 opacity-55">
          <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #f3a9c4)' }} />
          <span style={{ color: '#9b7fd4', fontSize: '0.9rem' }}>✦</span>
          <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #f3a9c4)' }} />
        </div>

        {/* ── Photos + names layout ── */}
        <div className="flex items-end justify-center gap-4 w-full mb-4">
          {/* Bride photo block */}
          <div className="flex flex-col items-center gap-2" style={{ flex: '0 0 auto' }}>
            <div
              style={{
                width: '110px',
                height: '140px',
                borderRadius: '55px 55px 35px 35px',
                overflow: 'hidden',
                border: '3px solid rgba(155,127,212,0.35)',
                boxShadow: '0 8px 28px rgba(155,127,212,0.22), 0 0 0 6px rgba(212,180,248,0.18)',
                position: 'relative',
              }}
            >
              <img
                src={bride.photo}
                alt={bride.fullName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* soft lavender overlay tint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(155,127,212,0.08) 0%, transparent 60%)',
                }}
              />
            </div>
            {/* Bride name pill */}
            <div
              className="px-3 py-1 rounded-full"
              style={{
                background: 'rgba(155,127,212,0.15)',
                border: '1px solid rgba(155,127,212,0.3)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.15rem',
                  color: '#7c5cc4',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {bride.shortName}
              </p>
            </div>
          </div>

          {/* Centre — big script names + "&" */}
          <div className="flex flex-col items-center" style={{ flex: '1 1 auto' }}>
            <h1
              className="shimmer-text"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '4rem',
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              {bride.shortName}
            </h1>
            <div className="flex items-center gap-2 my-1">
              <div className="h-px w-5" style={{ background: 'rgba(243,169,196,0.5)' }} />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem',
                  color: '#f3a9c4',
                  fontStyle: 'italic',
                }}
              >
                &
              </span>
              <div className="h-px w-5" style={{ background: 'rgba(243,169,196,0.5)' }} />
            </div>
            <h1
              className="shimmer-text"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '4rem',
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              {groom.shortName}
            </h1>
          </div>

          {/* Groom photo block */}
          <div className="flex flex-col items-center gap-2" style={{ flex: '0 0 auto' }}>
            <div
              style={{
                width: '110px',
                height: '140px',
                borderRadius: '55px 55px 35px 35px',
                overflow: 'hidden',
                border: '3px solid rgba(243,169,196,0.35)',
                boxShadow: '0 8px 28px rgba(243,169,196,0.22), 0 0 0 6px rgba(251,199,164,0.18)',
                position: 'relative',
              }}
            >
              <img
                src={groom.photo}
                alt={groom.fullName}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* soft peach overlay tint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(251,199,164,0.08) 0%, transparent 60%)',
                }}
              />
            </div>
            {/* Groom name pill */}
            <div
              className="px-3 py-1 rounded-full"
              style={{
                background: 'rgba(243,169,196,0.15)',
                border: '1px solid rgba(243,169,196,0.35)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.15rem',
                  color: '#b55a87',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {groom.shortName}
              </p>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mt-5 mb-1">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: 'rgba(155,127,212,0.35)' }} />
            <p
              className="text-xs"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: '0.12em',
                color: '#7a6a96',
                fontWeight: 500,
                opacity: 0.75,
              }}
            >
              {formattedDate.toUpperCase()}
            </p>
            <div className="h-px w-8" style={{ background: 'rgba(155,127,212,0.35)' }} />
          </div>
        </div>
      </div>

      {/* ── Open invitation button ── */}
      <div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-20"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 2s ease 1.2s' }}
      >
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-xs"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: '0.25em',
              color: '#9b7fd4',
              opacity: 0.55,
              fontWeight: 600,
            }}
          >
            OPEN INVITATION
          </p>

          <button
            onClick={onOpen}
            className="relative"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #9b7fd4, #f3a9c4)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(155,127,212,0.4), 0 0 50px rgba(155,127,212,0.12)',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                color: '#fff',
                fontSize: '1.2rem',
              }}
            >
              ↓
            </span>
            <span
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(155,127,212,0.45)',
                animation: 'lavPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(243,169,196,0.3)',
                animation: 'lavPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite 0.55s',
              }}
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes lavPing {
          75%, 100% { transform: scale(1.65); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
