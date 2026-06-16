import React from 'react';
import { useInView } from '../../../hooks/useParallax';
import { useCountdown } from '../../../hooks/useParallax';

/**
 * CountdownSection (Lavender)
 * ---------------------------
 * "Save The Date" + countdown grid, styled with lavender palette.
 * Uses its own CountdownBox to avoid inheriting gold-hardcoded shared one.
 */

const formatLong = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/* ── Internal CountdownBox ───────────────────────────────────────────── */
const LavCountdownBox = ({ label, value, delay = 0, inView, accentColor }) => {
  const display = String(value).padStart(2, '0');

  return (
    <div
      className="countdown-box flex flex-col items-center justify-center py-4 px-2 rounded-2xl"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      <span
        className="shimmer-text font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.2rem',
          lineHeight: 1,
          minWidth: '2ch',
          display: 'inline-block',
          textAlign: 'center',
          fontWeight: 600,
        }}
      >
        {display}
      </span>
      <span
        className="text-xs mt-1 uppercase tracking-wider"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: '0.2em',
          fontSize: '0.58rem',
          color: accentColor,
          opacity: 0.65,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
};

const BOX_ACCENTS = ['#9b7fd4', '#f3a9c4', '#a8e0c9', '#fbc7a4'];

const CountdownSection = ({ data }) => {
  const [ref, inView] = useInView();
  const longDate = formatLong(data.weddingDate);
  const timeLeft = useCountdown(data.weddingDate);
  const isPast = new Date(data.weddingDate) < new Date();

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(155,127,212,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-8 right-8 w-24 h-24 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(243,169,196,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />
      <div
        className="absolute bottom-8 left-8 w-20 h-20 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,224,201,0.2) 0%, transparent 70%)', filter: 'blur(16px)' }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease',
        }}
      >
        {/* Heading */}
        <h2
          className="shimmer-text mb-1"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
        >
          Save The Date
        </h2>

        {/* Section divider */}
        <div className="section-divider w-32 mx-auto mt-1 mb-4">
          <span style={{ color: '#f3a9c4', fontSize: '0.8rem' }}>🌸</span>
        </div>

        {/* Date */}
        <p
          className="text-sm mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            letterSpacing: '0.08em',
            color: '#7a6a96',
            fontStyle: 'italic',
            opacity: 0.75,
          }}
        >
          {longDate}
        </p>

        {/* Countdown grid or past state */}
        {isPast ? (
          <div
            className="px-8 py-6 rounded-3xl text-center"
            style={{
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(155,127,212,0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.2rem', color: '#9b7fd4', fontWeight: 700 }}>
              Finally,
            </p>
            <p className="text-sm mt-1" style={{ fontFamily: "'Quicksand', sans-serif", color: '#7a6a96', opacity: 0.7 }}>
              We're married! 💍
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, i) => (
              <LavCountdownBox
                key={item.label}
                label={item.label}
                value={item.value}
                delay={i * 0.1}
                inView={inView}
                accentColor={BOX_ACCENTS[i]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CountdownSection;
