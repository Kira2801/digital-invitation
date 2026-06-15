import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';
import { GiftCard } from '../../../components/cards';

/**
 * Gift (theme section)
 * ---------------------
 * "Wedding Gift" heading + bank/e-wallet tab switcher + gift cards
 * (from `invitationData.gift.accounts`) + physical gift address note.
 */
const Gift = ({ data }) => {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState('bank');
  const { gift } = data;

  const bankGifts = gift.accounts.filter((g) => g.type === 'Transfer Bank');
  const ewalletGifts = gift.accounts.filter((g) => g.type === 'E-Wallet');
  const displayedGifts = activeTab === 'bank' ? bankGifts : ewalletGifts;
  const addressLines = gift.physicalGiftAddress.split('\n');

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(30,16,7,0) 50%, rgba(26,15,10,0) 100%)', position: 'relative', zIndex: 1 }}
    >
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-5" style={{ transform: 'translate(10px, 10px)' }}>
        <svg viewBox="0 0 160 160" fill="none">
          <path d="M80 10 L150 50 L150 110 L80 150 L10 110 L10 50 Z" stroke="#e4a924" strokeWidth="1" />
          <path d="M80 30 L130 55 L130 105 L80 130 L30 105 L30 55 Z" stroke="#e4a924" strokeWidth="0.5" />
        </svg>
      </div>

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
            Wedding Gift
          </h2>
          <div className="section-divider mt-3">
            <span className="opacity-30" style={{ color: '#e4a924' }}>🎁</span>
          </div>
          <p
            className="whitespace-pre-line text-xs opacity-45 mt-3 leading-relaxed"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, maxWidth: '240px', margin: '12px auto 0' }}
          >
            {gift.intro}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl p-1 mb-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,136,13,0.15)' }}>
          {[
            { key: 'bank', label: '🏦 Transfer Bank' },
            { key: 'ewallet', label: '📱 E-Wallet' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 py-2.5 rounded-lg text-xs transition-all duration-300"
              style={{
                background: activeTab === tab.key
                  ? 'linear-gradient(135deg, rgba(212,136,13,0.3), rgba(228,169,36,0.15))'
                  : 'transparent',
                border: activeTab === tab.key ? '1px solid rgba(212,136,13,0.35)' : '1px solid transparent',
                color: activeTab === tab.key ? '#f2d88e' : 'rgba(250,246,240,0.4)',
                fontFamily: "'Jost', sans-serif",
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gift cards */}
        <div className="flex flex-col gap-3">
          {displayedGifts.map((g, i) => (
            <GiftCard key={g.id} gift={g} index={i} inView={inView} />
          ))}
        </div>

        {/* Physical gift note */}
        <div className="mt-6 p-4 rounded-2xl text-center" style={{ background: 'rgba(212,136,13,0.05)', border: '1px solid rgba(212,136,13,0.12)' }}>
          <p className="text-xs opacity-40" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
            Or you can send a physical gift to:<br />
            <span style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem' }}>
              {addressLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
