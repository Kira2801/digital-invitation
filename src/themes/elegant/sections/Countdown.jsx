import React from 'react';
import { useInView } from '../../../hooks/useParallax';
import SectionHeading from '../../../components/SectionHeading';
import Countdown from '../../../components/Countdown';

/**
 * Format a long date label (kept identical to the original: 'en-GB' long format).
 */
const formatLong = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/**
 * CountdownSection (theme section)
 * ---------------------------------
 * "Save The Date" heading + countdown grid, driven by `invitationData.weddingDate`.
 */
const CountdownSection = ({ data }) => {
  const [ref, inView] = useInView();
  const longDate = formatLong(data.weddingDate);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(45,21,5,0) 50%, rgba(26,15,10,0) 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,136,13,0.08) 0%, transparent 70%)' }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease',
        }}
      >
        <SectionHeading title="Save The Date" fontSize="3rem" className="px-2" dividerClassName="hidden" />

        {/* Tanggal otomatis dari weddingDate */}
        <p
          className="text-sm opacity-50 mb-8 pt-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.1em' }}
        >
          {longDate}
        </p>

        <Countdown
          targetDate={data.weddingDate}
          inView={inView}
          pastContent={
            <div className="px-6 py-4 rounded-2xl glass-card text-center" style={{ border: '1px solid rgba(212,136,13,0.3)' }}>
              <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem', color: '#e4a924' }}>
                Finally,
              </p>
              <p className="text-sm opacity-60 mt-1" style={{ fontFamily: "'Jost', sans-serif" }}>
                We're married! 💍
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default CountdownSection;
