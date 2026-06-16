import React, { useState } from 'react';

/**
 * Envelope (Lavender)
 * -------------------
 * Fullscreen envelope-opening overlay. Soft lavender palette with blush
 * and mint pastel accents. Content from `invitationData.envelope`.
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
        background:
          'radial-gradient(ellipse at 50% 60%, #e8d9f8 0%, #f0e6ff 40%, #fce8f3 70%, #eef8f3 100%)',
        opacity: phase === 'done' ? 0 : 1,
        transition: phase === 'done' ? 'opacity 0.6s ease' : 'none',
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(155,127,212,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Floating petals decoration */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: 0.4 }}
      >
        {[
          { top: '10%', left: '8%', color: '#d8b4f8', size: 14, delay: '0s' },
          { top: '20%', right: '10%', color: '#f3a9c4', size: 10, delay: '1s' },
          { top: '70%', left: '5%', color: '#a8e0c9', size: 12, delay: '0.5s' },
          { top: '80%', right: '8%', color: '#fbc7a4', size: 10, delay: '1.5s' },
          { top: '50%', right: '3%', color: '#c4b5fd', size: 8, delay: '2s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              animation: `lavPulseSoft 3s ease-in-out infinite ${p.delay}`,
            }}
          >
            <svg width={p.size} height={p.size * 1.2} viewBox="0 0 12 14" fill="none">
              <ellipse cx="6" cy="7" rx="5" ry="6.5" fill={p.color} opacity="0.9" />
            </svg>
          </div>
        ))}
      </div>

      {/* Text above envelope */}
      <div
        className="text-center"
        style={{
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease',
          marginBottom: '24px',
        }}
      >
        <p
          className="text-xs uppercase mb-3"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            letterSpacing: '0.18em',
            color: '#9b7fd4',
            fontWeight: 600,
            opacity: 0.7,
          }}
        >
          {data.dearLabel}
        </p>
        <p
          className="shimmer-text"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.6rem', fontWeight: 700 }}
        >
          {guestName}
        </p>
      </div>

      {/* Envelope SVG */}
      <div
        className="relative"
        style={{
          transform: phase === 'open' ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <EnvelopeSVG phase={phase} sealInitial={data.sealInitial} />
        {phase === 'open' && <StarsBurst />}
      </div>

      {/* Text below envelope */}
      <div
        className="mt-6 text-center"
        style={{
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease',
        }}
      >
        <h2
          className="text-xs uppercase"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            letterSpacing: '0.18em',
            color: '#9b7fd4',
            fontWeight: 500,
            opacity: 0.55,
          }}
        >
          {data.heading}
        </h2>
      </div>

      {/* Open button */}
      <button
        onClick={handleOpen}
        disabled={phase !== 'idle'}
        className="mt-8 px-8 py-4 rounded-full transition-all duration-300"
        style={{
          background:
            phase === 'idle'
              ? 'linear-gradient(135deg, #9b7fd4 0%, #f3a9c4 50%, #9b7fd4 100%)'
              : 'transparent',
          backgroundSize: '200% auto',
          border: phase === 'idle' ? 'none' : '1px solid rgba(155,127,212,0.35)',
          color: phase === 'idle' ? '#fff' : 'rgba(155,127,212,0.5)',
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: '0.28em',
          fontSize: '0.75rem',
          fontWeight: 700,
          cursor: phase === 'idle' ? 'pointer' : 'default',
          opacity: phase === 'opening' || phase === 'open' ? 0 : 1,
          transform: phase === 'idle' ? 'scale(1)' : 'scale(0.9)',
          boxShadow:
            phase === 'idle' ? '0 0 28px rgba(155,127,212,0.35), 0 4px 15px rgba(243,169,196,0.25)' : 'none',
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
    <rect
      x="10" y="50" width="220" height="130" rx="12"
      fill="rgba(246,241,251,0.9)"
      stroke="rgba(155,127,212,0.45)"
      strokeWidth="1.5"
    />

    {/* Back fold lines */}
    <path d="M10 180 L120 110 L230 180" stroke="rgba(155,127,212,0.2)" strokeWidth="1" fill="none" />

    {/* Left triangle */}
    <path d="M10 180 L10 50 L120 110 Z" fill="rgba(216,180,248,0.25)" stroke="rgba(155,127,212,0.15)" strokeWidth="1" />
    {/* Right triangle */}
    <path d="M230 180 L230 50 L120 110 Z" fill="rgba(243,169,196,0.2)" stroke="rgba(155,127,212,0.15)" strokeWidth="1" />

    {/* Flap (animated) */}
    <path
      d="M10 50 L120 10 L230 50"
      fill="rgba(228,210,252,0.85)"
      stroke="rgba(155,127,212,0.4)"
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
      fill="rgba(155,127,212,0.85)"
      stroke="rgba(196,181,253,0.6)"
      strokeWidth="1.5"
      style={{ opacity: phase === 'opening' || phase === 'open' ? 0 : 1, transition: 'opacity 0.3s ease' }}
    />
    {/* Seal decoration ring */}
    <circle
      cx="120" cy="50" r="13"
      fill="none"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1"
      strokeDasharray="3 3"
      style={{ opacity: phase === 'opening' || phase === 'open' ? 0 : 1, transition: 'opacity 0.3s ease' }}
    />
    {/* Seal letter */}
    <text
      x="120" y="56" textAnchor="middle"
      fill="#fff" fontSize="13" fontFamily="'Dancing Script', cursive" fontStyle="italic"
      style={{ opacity: phase === 'opening' || phase === 'open' ? 0 : 1, transition: 'opacity 0.3s ease' }}
    >
      {sealInitial}
    </text>

    {/* Card peeking out when open */}
    {phase === 'open' && (
      <g>
        <rect
          x="60" y="-5" width="120" height="80" rx="8"
          fill="rgba(246,241,251,0.95)"
          stroke="rgba(155,127,212,0.4)"
          strokeWidth="1"
          style={{ animation: 'lavCardPeek 0.5s ease forwards' }}
        />
        <text x="120" y="25" textAnchor="middle" fill="#9b7fd4" fontSize="10" fontFamily="'Quicksand', sans-serif" fontWeight="600">
          We're Getting
        </text>
        <text x="120" y="42" textAnchor="middle" fill="#f3a9c4" fontSize="16" fontFamily="'Dancing Script', cursive">
          Married!
        </text>
        <text x="120" y="58" textAnchor="middle" fontSize="14">🌸</text>
      </g>
    )}
  </svg>
);

const StarsBurst = () => {
  const BURST_COLORS = ['#d8b4f8', '#f3a9c4', '#a8e0c9', '#fbc7a4', '#c4b5fd', '#9b7fd4'];
  const stars = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const dist = 55 + Math.random() * 45;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      size: 4 + Math.random() * 5,
      delay: Math.random() * 0.3,
      color: BURST_COLORS[i % BURST_COLORS.length],
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
            background: star.color,
            animation: `lavStarBurst 0.9s ease-out ${star.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes lavStarBurst {
          0% { transform: scale(0); opacity: 1; }
          50% { opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes lavCardPeek {
          from { transform: translateY(25px); opacity: 0; }
          to { transform: translateY(0px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Envelope;
