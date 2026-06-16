import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Footer (Lavender)
 * -----------------
 * Closing names, verse, date, hashtag, credit.
 */

const formatWeddingDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const Footer = ({ data }) => {
  const [ref, inView] = useInView();
  const { footer, hashtag, weddingDate } = data;
  const formattedDate = formatWeddingDate(weddingDate);

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, #9b7fd4 25%, #f3a9c4 50%, #a8e0c9 75%, transparent)',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(155,127,212,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center gap-6"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease',
        }}
      >
        {/* Floral ornament */}
        <div style={{ fontSize: '2rem', opacity: 0.4, color: '#9b7fd4' }}>❋</div>

        {/* Closing names */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: '0.32em',
              color: '#9b7fd4',
              opacity: 0.45,
              fontWeight: 600,
            }}
          >
            {footer.label}
          </p>
          <h2
            className="shimmer-text"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3.8rem', lineHeight: 1.15, fontWeight: 700 }}
          >
            {footer.closingNames}
          </h2>
        </div>

        {/* Closing verse */}
        <div
          className="max-w-xs px-6 py-5 rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(155,127,212,0.2)',
            boxShadow: '0 4px 20px rgba(155,127,212,0.08)',
          }}
        >
          <p
            className="italic leading-relaxed"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: '#7a6a96',
              fontStyle: 'italic',
              opacity: 0.7,
            }}
          >
            {footer.quote}
          </p>
        </div>

        {/* Date reminder */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: 'rgba(155,127,212,0.3)' }} />
            <p
              className="text-xs"
              style={{
                color: '#9b7fd4',
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: '0.28em',
                opacity: 0.5,
                fontWeight: 600,
              }}
            >
              {formattedDate.toUpperCase()}
            </p>
            <div className="h-px w-8" style={{ background: 'rgba(155,127,212,0.3)' }} />
          </div>
          <p
            className="text-xs"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              color: '#9b7fd4',
              opacity: 0.3,
            }}
          >
            {footer.location}
          </p>
        </div>

        {/* Hashtag */}
        <div
          className="px-5 py-2.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(155,127,212,0.18), rgba(243,169,196,0.1))',
            border: '1px solid rgba(155,127,212,0.28)',
          }}
        >
          <p
            className="shimmer-text font-medium"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.05rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
            }}
          >
            {hashtag}
          </p>
        </div>

        {/* Petals decorative row */}
        <div className="flex items-center gap-2 opacity-30">
          {['#d8b4f8', '#f3a9c4', '#a8e0c9', '#fbc7a4', '#c4b5fd'].map((c, i) => (
            <svg key={i} width="10" height="12" viewBox="0 0 12 14" fill="none">
              <ellipse cx="6" cy="7" rx="5" ry="6.5" fill={c} opacity="0.9" />
            </svg>
          ))}
        </div>

        {/* Credit */}
        <p
          className="text-xs mt-2"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: '#9b7fd4',
            opacity: 0.3,
          }}
        >
          {footer.credit}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
