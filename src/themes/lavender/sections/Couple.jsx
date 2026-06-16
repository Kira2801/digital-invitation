import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Couple (Lavender)
 * -----------------
 * "Bride & Groom" intro: opening verse, blessing text, and couple cards.
 * From `invitationData.opening` and `invitationData.couple`.
 */
const Couple = ({ data }) => {
  const [ref, inView] = useInView();
  const { opening, couple } = data;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Top decorative border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #9b7fd4, #f3a9c4, #9b7fd4, transparent)' }}
      />

      <div
        className="relative z-10 text-center max-w-xs w-full"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease',
        }}
      >
        {/* Opening verse card */}
        <div
          className="mb-8 p-6 rounded-3xl"
          style={{
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(155,127,212,0.22)',
            boxShadow: '0 8px 30px rgba(155,127,212,0.1)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.2s',
          }}
        >
          {/* Pink accent top bar */}
          <div className="w-10 h-1 mx-auto mb-4 rounded-full" style={{ background: 'linear-gradient(to right, #d8b4f8, #f3a9c4)' }} />
          <p
            className="whitespace-pre-line text-sm leading-loose"
            style={{ fontFamily: "'Quicksand', sans-serif", color: '#6b5d8a', fontWeight: 400 }}
          >
            {opening.verse.text}
          </p>
        </div>

        {/* Greeting block */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.4s',
          }}
        >
          <div className="section-divider mb-5">
            <span className="text-sm" style={{ color: '#f3a9c4' }}>✦</span>
          </div>

          <h2
            className="shimmer-text mb-2"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
          >
            {opening.heading}
          </h2>

          <p
            className="text-xs uppercase mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif", letterSpacing: '0.18em', color: '#9b7fd4', opacity: 0.6, fontWeight: 600 }}
          >
            {opening.blessing}
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif", color: '#6b5d8a', fontWeight: 400, lineHeight: 1.8 }}
          >
            {opening.invitation}
          </p>

          <div className="section-divider mt-5">
            <span className="text-sm" style={{ color: '#a8e0c9' }}>✦</span>
          </div>
        </div>

        {/* Couple cards */}
        <div
          className="mt-6 flex flex-col items-center gap-2"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.6s',
          }}
        >
          <CoupleCard
            shortName={couple.bride.shortName}
            name={couple.bride.fullName}
            position={couple.bride.childPosition}
            parents={couple.bride.parents}
            instagram={couple.bride.instagram}
            accentColor="#9b7fd4"
            accentBg="rgba(155,127,212,0.1)"
            accentBorder="rgba(155,127,212,0.25)"
          />

          <div
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2.5rem',
              color: '#f3a9c4',
              fontWeight: 600,
              lineHeight: 1,
              padding: '4px 0',
            }}
          >
            &
          </div>

          <CoupleCard
            shortName={couple.groom.shortName}
            name={couple.groom.fullName}
            position={couple.groom.childPosition}
            parents={couple.groom.parents}
            instagram={couple.groom.instagram}
            accentColor="#f3a9c4"
            accentBg="rgba(243,169,196,0.1)"
            accentBorder="rgba(243,169,196,0.28)"
          />
        </div>
      </div>

      {/* Bottom decorative border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #a8e0c9, #9b7fd4, #a8e0c9, transparent)' }}
      />
    </section>
  );
};

const CoupleCard = ({ shortName, name, position, parents, instagram, accentColor, accentBg, accentBorder }) => (
  <div
    className="text-center py-5 px-6 rounded-3xl w-full"
    style={{
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(12px)',
      border: `1px solid ${accentBorder}`,
      boxShadow: `0 4px 18px ${accentBg}`,
    }}
  >
    {/* Accent top bar */}
    <div className="w-8 h-1 mx-auto mb-3 rounded-full" style={{ background: accentColor, opacity: 0.6 }} />

    <p
      className="shimmer-text"
      style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', lineHeight: 1.3, fontWeight: 700, marginBottom: '2px' }}
    >
      {shortName}
    </p>
    <p
      className="text-sm uppercase tracking-widest mb-1"
      style={{ fontFamily: "'Playfair Display', serif", color: '#4a3a66', letterSpacing: '0.12em', fontWeight: 500 }}
    >
      {name}
    </p>
    <p
      className="text-xs"
      style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, color: '#7a6a96', opacity: 0.8 }}
    >
      {position}
    </p>
    <p
      className="text-xs"
      style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, color: '#7a6a96', opacity: 0.6 }}
    >
      {parents}
    </p>
    {instagram && (
      <p
        className="text-xs mt-2"
        style={{ fontFamily: "'Quicksand', sans-serif", color: accentColor, fontWeight: 600, opacity: 0.8 }}
      >
        {instagram}
      </p>
    )}
  </div>
);

export default Couple;
