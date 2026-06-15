import React from 'react';
import { useInView } from '../../../hooks/useParallax';
import { EventCard, ColorSwatch } from '../../../components/cards';

/**
 * Event (theme section)
 * ----------------------
 * Renders the "Event Details" heading, one <EventCard /> per item in
 * `invitationData.events`, and the dress-code block from
 * `invitationData.dressCode`. Visuals match the original DetailAcaraSection.
 */
const Event = ({ data }) => {
  const [ref, inView] = useInView();
  const { events, dressCode } = data;

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(32,15,8,0) 50%, rgba(26,15,10,0) 100%)', position: 'relative', zIndex: 1 }}
    >
      {/* Background ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="155" stroke="#e4a924" strokeWidth="1" />
          <circle cx="160" cy="160" r="130" stroke="#e4a924" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="160" cy="160" r="100" stroke="#e4a924" strokeWidth="1" />
          <path d="M5 160 H315 M160 5 V315" stroke="#e4a924" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm mx-auto">
        {/* Section header */}
        <div
          className="text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem' }}>
            Event Details
          </h2>
          <div className="section-divider mt-3">
            <span className="text-xs opacity-30" style={{ color: '#e4a924' }}>✦</span>
          </div>
        </div>

        {/* Event cards */}
        {events.map((event, i) => (
          <EventCard key={event.id} {...event} delay={0.2 + i * 0.2} inView={inView} />
        ))}

        {/* Dress code note */}
        <div
          className="w-full text-center py-4 px-5 rounded-2xl"
          style={{
            background: 'rgba(212,136,13,0.06)',
            border: '1px solid rgba(212,136,13,0.18)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.55s',
          }}
        >
          <p className="shimmer-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontStyle: 'italic' }}>
            {dressCode.title}
          </p>
          <p className="text-xs opacity-40 my-4 mx-12" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            {dressCode.description}
          </p>
          <div className="flex items-center justify-center gap-3">
            {dressCode.colors.map((c) => (
              <ColorSwatch key={c.label} color={c.color} label={c.label} />
            ))}
          </div>
          <p className="text-xs opacity-70 my-2" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            {dressCode.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Event;
