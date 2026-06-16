import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Event (Lavender)
 * ----------------
 * Event details + dress-code block, styled with lavender palette.
 * Contains its own EventCard to avoid hardcoded gold colors.
 */

/* ── Internal EventCard ── */
const LavEventCard = ({ event, delay, inView, accentGradient, dotColor }) => (
  <div
    className="relative rounded-3xl overflow-hidden w-full"
    style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.9s ease ${delay}s`,
      background: 'rgba(255,255,255,0.58)',
      backdropFilter: 'blur(14px)',
      border: '1px solid rgba(155,127,212,0.2)',
      boxShadow: '0 6px 24px rgba(155,127,212,0.1)',
    }}
  >
    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: accentGradient }} />

    <div className="p-5">
      {/* Icon + type */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: `${dotColor}1a`,
            border: `1.5px solid ${dotColor}44`,
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>{event.icon}</span>
        </div>
        <h3
          className="shimmer-text"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontStyle: 'italic', fontWeight: 600 }}
        >
          {event.type}
        </h3>
      </div>

      {/* Details */}
      <div className="space-y-3">
        {[
          { icon: '📅', label: 'Date', value: event.date },
          { icon: '🕐', label: 'Time', value: event.time },
          { icon: '🏛️', label: 'Venue', value: event.venue },
          { icon: '📍', label: 'Address', value: event.address },
        ].map(({ icon, label, value }) => (
          <div key={label} className="flex gap-3">
            <span className="text-sm flex-shrink-0 mt-0.5" style={{ opacity: 0.6 }}>{icon}</span>
            <div>
              <p
                className="text-xs uppercase mb-0.5"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  letterSpacing: '0.18em',
                  fontSize: '0.55rem',
                  color: '#9b7fd4',
                  opacity: 0.6,
                  fontWeight: 600,
                }}
              >
                {label}
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "'Quicksand', sans-serif", color: '#4a3a66', fontSize: '0.9rem', fontWeight: 500 }}
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Maps button */}
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 py-2.5 rounded-2xl text-center text-xs transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${dotColor}22, ${dotColor}10)`,
          border: `1px solid ${dotColor}35`,
          color: dotColor,
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: '0.18em',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        📍 GOOGLE MAPS
      </a>
    </div>
  </div>
);

const Event = ({ data }) => {
  const [ref, inView] = useInView();
  const { events, dressCode } = data;

  const cardStyles = [
    {
      accentGradient: 'linear-gradient(to right, #9b7fd4, #c4b5fd, #9b7fd4)',
      dotColor: '#9b7fd4',
    },
    {
      accentGradient: 'linear-gradient(to right, #f3a9c4, #fbc7a4, #f3a9c4)',
      dotColor: '#f3a9c4',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Background ornament */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity: 0.03 }}
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="155" stroke="#9b7fd4" strokeWidth="1" />
          <circle cx="160" cy="160" r="120" stroke="#f3a9c4" strokeWidth="0.5" strokeDasharray="4 6" />
          <circle cx="160" cy="160" r="85" stroke="#a8e0c9" strokeWidth="1" />
          <path d="M5 160 H315 M160 5 V315" stroke="#9b7fd4" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-sm mx-auto">
        {/* Section header */}
        <div
          className="text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2
            className="shimmer-text"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
          >
            Event Details
          </h2>
          <div className="section-divider mt-3">
            <span style={{ color: '#9b7fd4', fontSize: '0.85rem' }}>✦</span>
          </div>
        </div>

        {/* Event cards */}
        {events.map((event, i) => (
          <LavEventCard
            key={event.id}
            event={event}
            delay={0.2 + i * 0.2}
            inView={inView}
            accentGradient={cardStyles[i % cardStyles.length].accentGradient}
            dotColor={cardStyles[i % cardStyles.length].dotColor}
          />
        ))}

        {/* Dress code */}
        <div
          className="w-full text-center py-5 px-5 rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168,224,201,0.3)',
            boxShadow: '0 4px 18px rgba(168,224,201,0.12)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.55s',
          }}
        >
          <p
            className="shimmer-text"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 600 }}
          >
            {dressCode.title}
          </p>
          <p
            className="text-xs my-3 mx-8"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              color: '#7a6a96',
              opacity: 0.65,
              lineHeight: 1.7,
            }}
          >
            {dressCode.description}
          </p>
          <div className="flex items-center justify-center gap-4 my-3">
            {dressCode.colors.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: c.color,
                    border: '2px solid rgba(155,127,212,0.18)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                />
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '0.55rem',
                    color: '#7a6a96',
                    opacity: 0.7,
                    fontWeight: 600,
                  }}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-xs"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 500,
              color: '#7a6a96',
              opacity: 0.75,
            }}
          >
            {dressCode.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Event;
