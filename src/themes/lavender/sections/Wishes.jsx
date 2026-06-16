import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Wishes (Lavender)
 * -----------------
 * Guestbook: stats + wish cards from `invitationData.wishes`.
 * Self-contained with lavender-styled WishCard.
 */

const ATTENDANCE_LABEL = {
  Attending: { label: 'Attending', color: '#2d9e6b', bg: 'rgba(168,224,201,0.2)', icon: '✅' },
  'Not Attending': { label: 'Not Attending', color: '#e05f8a', bg: 'rgba(243,169,196,0.2)', icon: '❌' },
  Maybe: { label: 'Maybe', color: '#b07d2c', bg: 'rgba(251,199,164,0.2)', icon: '🤔' },
};

/* ── Internal WishCard ── */
const LavWishCard = ({ wish, index, inView }) => {
  const att = ATTENDANCE_LABEL[wish.attendance] || ATTENDANCE_LABEL.Attending;

  return (
    <div
      className="p-4 rounded-3xl"
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(155,127,212,0.16)',
        boxShadow: '0 3px 12px rgba(155,127,212,0.07)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          {/* Avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, rgba(155,127,212,0.25), rgba(243,169,196,0.15))',
              border: '1.5px solid rgba(155,127,212,0.3)',
              color: '#9b7fd4',
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            {wish.name.charAt(0)}
          </div>
          <div>
            <p
              className="font-medium"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', color: '#4a3a66', fontWeight: 600 }}
            >
              {wish.name}
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '0.58rem', color: '#9b7fd4', opacity: 0.45 }}
            >
              {wish.time}
            </p>
          </div>
        </div>

        {/* Attendance badge */}
        <span
          className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 flex items-center gap-1"
          style={{
            background: att.bg,
            color: att.color,
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '0.55rem',
            letterSpacing: '0.06em',
            border: `1px solid ${att.color}30`,
            fontWeight: 700,
          }}
        >
          {att.icon} {att.label}
        </span>
      </div>

      {/* Wish text */}
      <p
        className="text-xs leading-relaxed"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 400,
          lineHeight: 1.8,
          color: '#6b5d8a',
          opacity: 0.8,
        }}
      >
        "{wish.wish}"
      </p>
    </div>
  );
};

const STAT_ACCENTS = [
  { color: '#9b7fd4', bg: 'rgba(155,127,212,0.1)', border: 'rgba(155,127,212,0.2)' },
  { color: '#2d9e6b', bg: 'rgba(168,224,201,0.15)', border: 'rgba(168,224,201,0.28)' },
  { color: '#e05f8a', bg: 'rgba(243,169,196,0.15)', border: 'rgba(243,169,196,0.28)' },
];

const Wishes = ({ data }) => {
  const [ref, inView] = useInView();
  const [showAll, setShowAll] = useState(false);
  const wishes = data.wishes;
  const displayed = showAll ? wishes : wishes.slice(0, 3);

  const stats = [
    { label: 'Wishes', value: wishes.length },
    { label: 'Attending', value: wishes.filter((w) => w.attendance === 'Attending').length },
    { label: 'Not Attending', value: wishes.filter((w) => w.attendance === 'Not Attending').length },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div
        className="relative z-10 max-w-sm mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="shimmer-text"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
          >
            Wishes
          </h2>
          <div className="section-divider mt-3">
            <span style={{ color: '#9b7fd4', fontSize: '0.9rem' }}>💬</span>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 mb-6"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
        >
          {stats.map((stat, i) => {
            const acc = STAT_ACCENTS[i];
            return (
              <div
                key={stat.label}
                className="text-center py-3 rounded-2xl"
                style={{
                  background: acc.bg,
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${acc.border}`,
                }}
              >
                <p
                  className="shimmer-text font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700 }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '0.55rem',
                    letterSpacing: '0.1em',
                    color: acc.color,
                    opacity: 0.75,
                    fontWeight: 700,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wish cards */}
        <div className="flex flex-col gap-3">
          {displayed.map((wish, i) => (
            <LavWishCard key={wish.id} wish={wish} index={i} inView={inView} />
          ))}
        </div>

        {/* Show more / less */}
        {wishes.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 w-full py-3 rounded-2xl text-xs transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(155,127,212,0.22)',
              color: '#9b7fd4',
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: '0.18em',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            {showAll ? '↑ Show Less' : `↓ Show More (${wishes.length})`}
          </button>
        )}
      </div>
    </section>
  );
};

export default Wishes;
