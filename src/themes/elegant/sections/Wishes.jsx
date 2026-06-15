import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';
import { WishCard } from '../../../components/cards';

/**
 * Wishes (theme section)
 * -----------------------
 * Guestbook: stats grid + wish cards (from `invitationData.wishes`) +
 * "Show More" toggle.
 */
const Wishes = ({ data }) => {
  const [ref, inView] = useInView();
  const [showAll, setShowAll] = useState(false);
  const wishes = data.wishes;

  const displayed = showAll ? wishes : wishes.slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(28,16,8,0) 50%, rgba(26,15,10,0) 100%)', position: 'relative', zIndex: 1 }}
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
          <h2 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem' }}>
            Wishes
          </h2>
          <div className="section-divider mt-3">
            <span className="opacity-30" style={{ color: '#e4a924' }}>💬</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}>
          {[
            { label: 'Wishes', value: wishes.length },
            { label: 'Attending', value: wishes.filter((w) => w.attendance === 'Attending').length },
            { label: 'Not Attending', value: wishes.filter((w) => w.attendance === 'Not Attending').length },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-3 rounded-xl" style={{ background: 'rgba(212,136,13,0.07)', border: '1px solid rgba(212,136,13,0.15)' }}>
              <p className="shimmer-text font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem' }}>
                {stat.value}
              </p>
              <p className="text-xs opacity-35 mt-0.5" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.58rem', letterSpacing: '0.1em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Wish cards */}
        <div className="flex flex-col gap-3">
          {displayed.map((wish, i) => (
            <WishCard key={wish.id} wish={wish} index={i} inView={inView} />
          ))}
        </div>

        {/* Show more */}
        {wishes.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 w-full py-3 rounded-xl text-xs transition-all duration-300"
            style={{
              background: 'rgba(212,136,13,0.08)',
              border: '1px solid rgba(212,136,13,0.2)',
              color: '#f2d88e',
              fontFamily: "'Jost', sans-serif",
              letterSpacing: '0.2em',
              cursor: 'pointer',
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
