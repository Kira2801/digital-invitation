import React, { useState } from 'react';

/**
 * Envelope
 * --------
 * Fullscreen envelope-opening overlay shown before the cover.
 * Visuals identical to the original `EnvelopeOpener` — content (dear label,
 * heading, seal initial, button label) now comes from `invitationData.envelope`.
 *
 * @param {() => void} onComplete - called once the closing transition finishes
 * @param {string} guestName - parsed from the `?to=` query param
 * @param {{dearLabel, heading, sealInitial, buttonLabel}} data - `invitationData.envelope`
 */
const Envelope = ({ onComplete, guestName, data }) => {
  const [phase, setPhase] = useState('idle'); // idle → opening → open → done

  const handleOpen = () => {
    setPhase('opening');
    setTimeout(() => setPhase('open'), 600);
    setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 600);
    }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at 50% 60%, #2d1a0e 0%, #1a0f0a 70%, #0f0806 100%)',
        opacity: phase === 'done' ? 0 : 1,
        transition: phase === 'done' ? 'opacity 0.6s ease' : 'none',
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,136,13,0.08) 0%, transparent 60%)' }}
      />

      {/* Text above envelope */}
      <div
        className="mt-12 text-center"
        style={{
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease',
        }}
      >
        <p
          className="text-xs opacity-40 uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.1em', color: '#e4a924' }}
        >
          {data.dearLabel}
        </p>
        <p className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem' }}>
          {guestName}
        </p>
      </div>

      {/* Envelope SVG */}
      <div
        className="relative"
        style={{
          transform: phase === 'open' ? 'scale(1.15)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <EnvelopeSVG phase={phase} sealInitial={data.sealInitial} />
        {phase === 'open' && <StarsBurst />}
      </div>

      {/* Text below envelope */}
      <div
        className="mt-12 text-center"
        style={{
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease',
        }}
      >
        <h2
          className="text-xs opacity-40 uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em', color: '#e4a924' }}
        >
          {data.heading}
        </h2>
      </div>

      {/* Open button */}
      <button
        onClick={handleOpen}
        disabled={phase !== 'idle'}
        className="mt-8 px-8 py-4 rounded-full transition-all duration-300 relative overflow-hidden"
        style={{
          background: phase === 'idle'
            ? 'linear-gradient(135deg, #d4880d 0%, #e4a924 50%, #d4880d 100%)'
            : 'transparent',
          backgroundSize: '200% auto',
          border: phase === 'idle' ? 'none' : '1px solid rgba(212,136,13,0.3)',
          color: phase === 'idle' ? '#1a0f0a' : 'rgba(212,136,13,0.5)',
          fontFamily: "'Jost', sans-serif",
          letterSpacing: '0.3em',
          fontSize: '0.75rem',
          cursor: phase === 'idle' ? 'pointer' : 'default',
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'scale(1)' : 'scale(0.9)',
          boxShadow: phase === 'idle' ? '0 0 25px rgba(212,136,13,0.3)' : 'none',
        }}
      >
        {data.buttonLabel}
      </button>
    </div>
  );
};

const EnvelopeSVG = ({ phase, sealInitial }) => (
  <svg width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Envelope body */}
    <rect x="10" y="50" width="220" height="130" rx="8" fill="rgba(45,21,5,0.8)" stroke="rgba(212,136,13,0.4)" strokeWidth="1.5" />

    {/* Envelope back fold lines */}
    <path d="M10 180 L120 110 L230 180" stroke="rgba(212,136,13,0.2)" strokeWidth="1" fill="none" />

    {/* Envelope bottom triangle left */}
    <path d="M10 180 L10 50 L120 110 Z" fill="rgba(35,16,3,0.6)" stroke="rgba(212,136,13,0.15)" strokeWidth="1" />
    {/* Envelope bottom triangle right */}
    <path d="M230 180 L230 50 L120 110 Z" fill="rgba(40,18,4,0.6)" stroke="rgba(212,136,13,0.15)" strokeWidth="1" />

    {/* Envelope flap (animated) */}
    <path
      d="M10 50 L120 10 L230 50"
      fill="rgba(50,25,5,0.9)"
      stroke="rgba(212,136,13,0.4)"
      strokeWidth="1.5"
      style={{
        transformOrigin: '120px 50px',
        transform: phase === 'opening' || phase === 'open' ? 'rotateX(180deg)' : 'rotateX(0deg)',
        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    />

    {/* Wax seal */}
    <circle
      cx="120" cy="50" r="18"
      fill="rgba(180,60,10,0.9)"
      stroke="rgba(212,136,13,0.5)"
      strokeWidth="1.5"
      style={{ opacity: phase === 'opening' || phase === 'open' ? 0 : 1, transition: 'opacity 0.3s ease' }}
    />
    {/* Seal letter */}
    <text
      x="120" y="56" textAnchor="middle" fill="#f2d88e" fontSize="14" fontFamily="serif" fontStyle="italic"
      style={{ opacity: phase === 'opening' || phase === 'open' ? 0 : 1, transition: 'opacity 0.3s ease' }}
    >
      {sealInitial}
    </text>

    {/* Card peeking out when open */}
    {phase === 'open' && (
      <g>
        <rect
          x="60" y="0" width="120" height="80" rx="4"
          fill="rgba(180,60,10,0.9)" stroke="rgba(212,136,13,0.5)" strokeWidth="1"
          style={{ transform: 'translateY(-10px)', animation: 'cardPeek 0.5s ease forwards' }}
        />
        <text x="120" y="30" textAnchor="middle" fill="#f2d88e" fontSize="11" fontFamily="'Great Vibes', cursive">
          We're Getting
        </text>
        <text x="120" y="50" textAnchor="middle" fill="#f2d88e" fontSize="11" fontFamily="'Great Vibes', cursive">
          Married!
        </text>
      </g>
    )}
  </svg>
);

const StarsBurst = () => {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const dist = 60 + Math.random() * 40;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      size: 4 + Math.random() * 4,
      delay: Math.random() * 0.3,
    };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `calc(50% + ${star.x}px)`,
            top: `calc(50% + ${star.y}px)`,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: '#e4a924',
            animation: `starBurst 0.8s ease-out ${star.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes starBurst {
          0% { transform: scale(0) translate(0,0); opacity: 1; }
          50% { opacity: 1; }
          100% { transform: scale(1) translate(0,0); opacity: 0; }
        }
        @keyframes cardPeek {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Envelope;
