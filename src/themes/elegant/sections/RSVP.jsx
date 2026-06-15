import React from 'react';
import { useInView } from '../../../hooks/useParallax';
import RSVPForm from '../../../components/RSVP';

/**
 * RSVP (theme section)
 * ---------------------
 * "Sweet Words" heading + intro text (from `invitationData.rsvp.intro`) +
 * the shared <RSVPForm />. On success, RSVPForm shows the hashtag from
 * `invitationData.hashtag`.
 */
const RSVP = ({ data }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(34,19,8,0) 50%, rgba(26,15,10,0) 100%)', position: 'relative', zIndex: 1 }}
    >
      {/* BG glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,136,13,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />

      <div
        className="relative z-10 max-w-sm mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.9s ease',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem' }}>
            Sweet Words
          </h2>
          <div className="section-divider mt-3">
            <span className="opacity-30" style={{ color: '#e4a924' }}>✉</span>
          </div>
          <p className="text-sm opacity-40 mt-3 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            {data.rsvp.intro}
          </p>
        </div>

        <RSVPForm hashtag={data.hashtag} />
      </div>
    </section>
  );
};

export default RSVP;
