import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Couple
 * ------
 * "Bride & Groom" intro section: opening verse, blessing text, invitation
 * paragraph and the two couple cards. Content comes from
 * `invitationData.opening` and `invitationData.couple`.
 */
const Couple = ({ data }) => {
  const [ref, inView] = useInView();
  const { opening, couple } = data;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(34,19,8,0) 50%, rgba(26,15,10,0) 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #d4880d, transparent)' }} />

      {/* Content */}
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease',
        }}
        className="relative z-10 text-center max-w-xs"
      >
        {/* Opening verse */}
        <div
          className="mb-8 p-6 rounded-2xl glass-card"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.2s',
          }}
        >
          <p
            className="whitespace-pre-line text-sm leading-relaxed opacity-70"
            style={{ fontFamily: "'Jost', sans-serif", color: '#faf6f0', fontWeight: 300 }}
          >
            {opening.verse.text}
          </p>
        </div>

        {/* Greeting */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.4s',
          }}
        >
          <div className="section-divider mb-6">
            <span className="text-xs opacity-40" style={{ color: '#e4a924', letterSpacing: '0.3em' }}>✦</span>
          </div>

          <h2 className="shimmer-text mb-2" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', letterSpacing: '0.05em' }}>
            {opening.heading}
          </h2>

          <p
            className="text-xs tracking-widest uppercase mb-4 opacity-40"
            style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em' }}
          >
            {opening.blessing}
          </p>

          <p
            className="text-sm leading-relaxed mb-4 opacity-70"
            style={{ fontFamily: "'Jost', sans-serif", color: '#faf6f0', fontWeight: 300 }}
          >
            {opening.invitation}
          </p>

          <div className="section-divider mt-6">
            <span className="text-xs opacity-40" style={{ color: '#e4a924', letterSpacing: '0.3em' }}>✦</span>
          </div>
        </div>

        {/* Couple names */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease 0.6s',
          }}
          className="mt-6 flex flex-col items-center gap-1"
        >
          <CoupleCard
            shortName={couple.bride.shortName}
            name={couple.bride.fullName}
            position={couple.bride.childPosition}
            parents={couple.bride.parents}
          />
          <div style={{ color: '#e4a924', fontSize: '2rem', fontFamily: "'Great Vibes', cursive" }}>&</div>
          <CoupleCard
            shortName={couple.groom.shortName}
            name={couple.groom.fullName}
            position={couple.groom.childPosition}
            parents={couple.groom.parents}
          />
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #d4880d, transparent)' }} />
    </section>
  );
};

const CoupleCard = ({ shortName, name, position, parents }) => (
  <div
    className="text-center py-4 px-6 rounded-2xl w-full"
    style={{ background: 'rgba(255,255,255,0)', border: '1px solid rgba(212,136,13,0.50)' }}
  >
    <p className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', lineHeight: 1.5, marginBottom: '2px' }}>
      {shortName}
    </p>
    <p className="text-lg uppercase tracking-widest mb-2" style={{ fontFamily: "'Jost', sans-serif" }}>
      {name}
    </p>
    <p className="text-xs leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: '#faf6f0' }}>
      {position}
    </p>
    <p className="text-xs opacity-45 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: '#faf6f0' }}>
      {parents}
    </p>
  </div>
);

export default Couple;
