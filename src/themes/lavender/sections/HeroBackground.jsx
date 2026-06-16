import React, { useEffect, useState } from 'react';
import { useParallax } from '../../../hooks/useParallax';

/**
 * HeroBackground (Lavender)
 * -------------------------
 * Fixed layer behind every section. Soft lavender-to-blush gradient base,
 * floating pastel petals, gentle particle dust, and decorative ring ornaments.
 */

const PETAL_COLORS = ['#d8b4f8', '#f3a9c4', '#a8e0c9', '#fbc7a4', '#c4b5fd', '#fbcfe8'];

const Petal = ({ style }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      left: style.left,
      top: '-20px',
      animation: `lavPetalFall ${style.duration}s linear ${style.delay}s infinite`,
    }}
  >
    <svg width={style.size} height={style.size * 1.2} viewBox="0 0 12 14" fill="none">
      <ellipse
        cx="6" cy="7" rx="5" ry="6.5"
        fill={style.color}
        opacity="0.7"
        transform={`rotate(${style.rotate} 6 7)`}
      />
    </svg>
  </div>
);

const HeroBackground = () => {
  const tilt = useParallax(10);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: 8 + Math.random() * 9,
        delay: Math.random() * 10,
        rotate: Math.random() * 360,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        size: 8 + Math.random() * 8,
      }))
    );
  }, []);

  const layer = (depth) => ({
    transform: `translateX(${tilt.x * depth * 0.5}px) translateY(${tilt.y * depth * 0.25}px)`,
    willChange: 'transform',
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ── Base gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, #f0e6ff 0%, #f6f1fb 40%, #fce8f3 70%, #eef8f3 100%)',
        }}
      />

      {/* ── Soft grain texture overlay ── */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      {/* ── Falling petals ── */}
      {petals.map((p) => (
        <Petal key={p.id} style={p} />
      ))}

      {/* ── Deep glow blob — top-left ── */}
      <div className="absolute inset-0 flex items-start justify-start" style={layer(-1.5)}>
        <div
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
            filter: 'blur(70px)',
            opacity: 0.35,
            marginTop: '-60px',
            marginLeft: '-60px',
          }}
        />
      </div>

      {/* ── Blush glow blob — bottom-right ── */}
      <div className="absolute inset-0 flex items-end justify-end" style={layer(-1.2)}>
        <div
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fbc7a4 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.3,
            marginBottom: '-40px',
            marginRight: '-40px',
          }}
        />
      </div>

      {/* ── Mint glow blob — center ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={layer(-0.8)}>
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #a8e0c9 0%, transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.2,
          }}
        />
      </div>

      {/* ── Decorative rings — layer -1 ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={layer(-1)}>
        <div
          style={{
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            border: '1px solid rgba(155,127,212,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px dashed rgba(243,169,196,0.2)',
            animation: 'lavBgSpin 50s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '1px solid rgba(168,224,201,0.15)',
          }}
        />
      </div>

      {/* ── Floral SVG bottom-left ── */}
      <div className="absolute left-0 bottom-16" style={layer(1.2)}>
        <FloralLeft />
      </div>

      {/* ── Floral SVG top-right ── */}
      <div className="absolute right-0 top-12" style={layer(1.5)}>
        <FloralRight />
      </div>

      {/* ── Floating particles ── */}
      <FloatingParticles tilt={tilt} />

      <style>{`
        @keyframes lavBgSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

/* ── Lavender floral SVGs ── */

const FloralLeft = () => (
  <svg width="160" height="220" viewBox="0 0 160 220" fill="none" style={{ opacity: 0.5 }}>
    <path d="M80 200 C40 180 10 140 20 100 C30 60 70 40 80 20" stroke="#9b7fd4" strokeWidth="1.5" fill="none" />
    <path d="M80 180 C50 160 20 130 30 90" stroke="#c4b5fd" strokeWidth="1" fill="none" />
    <ellipse cx="45" cy="130" rx="22" ry="12" fill="#d8b4f8" opacity="0.55" transform="rotate(-35 45 130)" />
    <ellipse cx="35" cy="100" rx="18" ry="10" fill="#f3a9c4" opacity="0.45" transform="rotate(-50 35 100)" />
    <ellipse cx="50" cy="165" rx="25" ry="13" fill="#a8e0c9" opacity="0.4" transform="rotate(-20 50 165)" />
    <circle cx="80" cy="20" r="8" fill="#9b7fd4" opacity="0.65" />
    <circle cx="80" cy="20" r="4" fill="#f6f1fb" opacity="0.6" />
    <circle cx="30" cy="90" r="6" fill="#f3a9c4" opacity="0.6" />
    <circle cx="20" cy="100" r="5" fill="#fbc7a4" opacity="0.5" />
    <ellipse cx="60" cy="55" rx="5" ry="8" fill="#c4b5fd" opacity="0.5" transform="rotate(-10 60 55)" />
    <ellipse cx="25" cy="120" rx="4" ry="7" fill="#9b7fd4" opacity="0.45" transform="rotate(20 25 120)" />
  </svg>
);

const FloralRight = () => (
  <svg width="150" height="200" viewBox="0 0 150 200" fill="none" style={{ opacity: 0.45, transform: 'scaleX(-1)' }}>
    <path d="M70 10 C110 30 140 70 130 110 C120 150 80 170 70 190" stroke="#f3a9c4" strokeWidth="1.5" fill="none" />
    <path d="M70 30 C100 50 130 80 120 120" stroke="#fbc7a4" strokeWidth="1" fill="none" />
    <ellipse cx="105" cy="70" rx="22" ry="12" fill="#d8b4f8" opacity="0.55" transform="rotate(35 105 70)" />
    <ellipse cx="115" cy="100" rx="18" ry="10" fill="#a8e0c9" opacity="0.45" transform="rotate(50 115 100)" />
    <ellipse cx="100" cy="45" rx="20" ry="11" fill="#fbc7a4" opacity="0.4" transform="rotate(20 100 45)" />
    <circle cx="70" cy="190" r="7" fill="#f3a9c4" opacity="0.65" />
    <circle cx="70" cy="190" r="3.5" fill="#f6f1fb" opacity="0.6" />
    <circle cx="120" cy="110" r="6" fill="#9b7fd4" opacity="0.55" />
    <ellipse cx="90" cy="145" rx="5" ry="8" fill="#c4b5fd" opacity="0.5" transform="rotate(10 90 145)" />
  </svg>
);

const PARTICLES = [
  { x: '18%', y: '28%', size: 4, depth: 0.8, color: '#d8b4f8' },
  { x: '74%', y: '22%', size: 3, depth: 1.2, color: '#f3a9c4' },
  { x: '58%', y: '68%', size: 3.5, depth: 0.6, color: '#a8e0c9' },
  { x: '32%', y: '62%', size: 3, depth: 1.5, color: '#fbc7a4' },
  { x: '84%', y: '52%', size: 4, depth: 0.9, color: '#c4b5fd' },
  { x: '12%', y: '48%', size: 3, depth: 1.1, color: '#f3a9c4' },
  { x: '48%', y: '12%', size: 3.5, depth: 0.7, color: '#d8b4f8' },
  { x: '42%', y: '78%', size: 3, depth: 1.3, color: '#a8e0c9' },
  { x: '90%', y: '80%', size: 2.5, depth: 0.6, color: '#fbc7a4' },
  { x: '6%', y: '72%', size: 3, depth: 1.0, color: '#c4b5fd' },
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
          transform: `translate(${tilt.x * p.depth * 0.7}px, ${tilt.y * p.depth * 0.35}px)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            opacity: 0.55,
            animation: `lavPulseSoft ${3 + i * 0.4}s ease-in-out infinite ${i * 0.25}s`,
          }}
        />
      </div>
    ))}
  </>
);

export default HeroBackground;
