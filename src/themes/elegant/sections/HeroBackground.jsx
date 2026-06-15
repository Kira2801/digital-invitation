import React, { useEffect, useState } from 'react';
import { useParallax } from '../../../hooks/useParallax';

/**
 * HeroBackground
 * ---------------
 * Fixed layer (z-0) that sits permanently behind every section.
 * Contains only the visual elements of CoverSection — no text, no button.
 * Because it's `position: fixed`, it never scrolls with the page.
 */

const Petal = ({ style }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: style.left,
      top: '-20px',
      animation: `petalFall ${style.duration}s linear ${style.delay}s infinite`,
    }}
  >
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <ellipse
        cx="6" cy="7" rx="5" ry="6.5"
        fill={style.color}
        opacity="0.5"
        transform={`rotate(${style.rotate} 6 7)`}
      />
    </svg>
  </div>
);

const HeroBackground = () => {
  const tilt = useParallax(12);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: 7 + Math.random() * 8,
        delay: Math.random() * 8,
        rotate: Math.random() * 360,
        color: ['#e4a924', '#d4880d', '#f2d88e', '#c97b0a', '#fde68a'][Math.floor(Math.random() * 5)],
      }))
    );
  }, []);

  const layer = (depth) => ({
    transform: `translateX(${tilt.x * depth * 0.6}px) translateY(${tilt.y * depth * 0.3}px)`,
    willChange: 'transform',
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,               // behind everything
        overflow: 'hidden',
        pointerEvents: 'none',   // never blocks clicks on sections above
      }}
    >
      {/* ── Base gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, #2d1a0e 0%, #1a0f0a 60%, #0f0806 100%)',
        }}
      />

      {/* ── Grain texture ── */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      {/* ── Falling petals ── */}
      {petals.map(p => <Petal key={p.id} style={p} />)}

      {/* ── Layer -1.5: deep glow ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={layer(-1.5)}>
        <div
          style={{
            width: '288px', height: '288px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #d4880d 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.2,
          }}
        />
      </div>

      {/* ── Layer -1: decorative rings ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={layer(-1)}>
        <div
          style={{
            width: '320px', height: '320px',
            borderRadius: '50%',
            border: '1px solid rgba(212,136,13,0.2)',
            boxShadow: '0 0 40px rgba(212,136,13,0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '288px', height: '288px',
            borderRadius: '50%',
            border: '1px dashed rgba(228,169,36,0.15)',
            animation: 'bgSpin 40s linear infinite',
          }}
        />
      </div>

      {/* ── Layer +1.2: floral bottom-left ── */}
      <div
        className="absolute left-0 bottom-20"
        style={layer(1.2)}
      >
        <FloralLeft />
      </div>

      {/* ── Layer +1.5: floral top-right ── */}
      <div
        className="absolute right-0 top-16"
        style={layer(1.5)}
      >
        <FloralRight />
      </div>

      {/* ── Floating particles ── */}
      <FloatingParticles tilt={tilt} />

      <style>{`
        @keyframes bgSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

/* ── Reused SVG florals (identical to CoverSection) ── */

const FloralLeft = () => (
  <svg width="160" height="220" viewBox="0 0 160 220" fill="none" style={{ opacity: 0.65 }}>
    <path d="M80 200 C40 180 10 140 20 100 C30 60 70 40 80 20" stroke="#c97b0a" strokeWidth="1.5" fill="none"/>
    <path d="M80 180 C50 160 20 130 30 90" stroke="#d4880d" strokeWidth="1" fill="none"/>
    <ellipse cx="45" cy="130" rx="22" ry="12" fill="#b86808" opacity="0.5" transform="rotate(-35 45 130)"/>
    <ellipse cx="35" cy="100" rx="18" ry="10" fill="#c97b0a" opacity="0.4" transform="rotate(-50 35 100)"/>
    <ellipse cx="50" cy="165" rx="25" ry="13" fill="#d4880d" opacity="0.45" transform="rotate(-20 50 165)"/>
    <circle cx="80" cy="20" r="8" fill="#e4a924" opacity="0.7"/>
    <circle cx="80" cy="20" r="4" fill="#1a0f0a" opacity="0.5"/>
    <circle cx="30" cy="90" r="6" fill="#e4a924" opacity="0.6"/>
    <circle cx="20" cy="100" r="5" fill="#d4880d" opacity="0.5"/>
    <ellipse cx="60" cy="55" rx="5" ry="8" fill="#e4a924" opacity="0.5" transform="rotate(-10 60 55)"/>
    <ellipse cx="25" cy="120" rx="4" ry="7" fill="#c97b0a" opacity="0.45" transform="rotate(20 25 120)"/>
  </svg>
);

const FloralRight = () => (
  <svg width="150" height="200" viewBox="0 0 150 200" fill="none" style={{ opacity: 0.6, transform: 'scaleX(-1)' }}>
    <path d="M70 10 C110 30 140 70 130 110 C120 150 80 170 70 190" stroke="#c97b0a" strokeWidth="1.5" fill="none"/>
    <path d="M70 30 C100 50 130 80 120 120" stroke="#d4880d" strokeWidth="1" fill="none"/>
    <ellipse cx="105" cy="70" rx="22" ry="12" fill="#b86808" opacity="0.5" transform="rotate(35 105 70)"/>
    <ellipse cx="115" cy="100" rx="18" ry="10" fill="#c97b0a" opacity="0.4" transform="rotate(50 115 100)"/>
    <ellipse cx="100" cy="45" rx="20" ry="11" fill="#d4880d" opacity="0.45" transform="rotate(20 100 45)"/>
    <circle cx="70" cy="190" r="7" fill="#e4a924" opacity="0.7"/>
    <circle cx="70" cy="190" r="3.5" fill="#1a0f0a" opacity="0.5"/>
    <circle cx="120" cy="110" r="6" fill="#e4a924" opacity="0.6"/>
    <ellipse cx="90" cy="145" rx="5" ry="8" fill="#e4a924" opacity="0.5" transform="rotate(10 90 145)"/>
  </svg>
);

const PARTICLES = [
  { x: '20%', y: '30%', size: 3,   depth: 0.8 },
  { x: '75%', y: '25%', size: 2,   depth: 1.2 },
  { x: '60%', y: '70%', size: 2.5, depth: 0.6 },
  { x: '30%', y: '65%', size: 2,   depth: 1.5 },
  { x: '85%', y: '55%', size: 3,   depth: 0.9 },
  { x: '15%', y: '50%', size: 2,   depth: 1.1 },
  { x: '50%', y: '15%', size: 2.5, depth: 0.7 },
  { x: '40%', y: '80%', size: 2,   depth: 1.3 },
];

const FloatingParticles = ({ tilt }) => (
  <>
    {PARTICLES.map((p, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: p.x,
          top: p.y,
          transform: `translate(${tilt.x * p.depth * 0.8}px, ${tilt.y * p.depth * 0.4}px)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#e4a924',
            opacity: 0.35,
            animation: `pulseSoft ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
          }}
        />
      </div>
    ))}
  </>
);

export default HeroBackground;