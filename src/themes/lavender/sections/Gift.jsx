import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Gift (Lavender)
 * ---------------
 * Wedding gift section with bank / e-wallet tab switcher.
 * Self-contained to avoid gold-hardcoded shared components.
 */

/* ── Internal GiftCard ── */
const LavGiftCard = ({ gift, index, inView }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const value = gift.accountNumber.replace(/-/g, '');
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement('textarea');
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden w-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s ease ${index * 0.15}s`,
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(155,127,212,0.2)',
        boxShadow: '0 4px 18px rgba(155,127,212,0.08)',
      }}
    >
      {/* Colored top bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(to right, ${gift.color}80, ${gift.color}40, ${gift.color}80)`,
        }}
      />

      <div className="p-5 flex items-center gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl"
          style={{
            background: `${gift.color}18`,
            border: `1.5px solid ${gift.color}35`,
          }}
        >
          {gift.icon}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p
            className="text-xs uppercase mb-0.5"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: '0.15em',
              fontSize: '0.55rem',
              color: '#9b7fd4',
              opacity: 0.55,
              fontWeight: 700,
            }}
          >
            {gift.type}
          </p>
          <p
            className="font-medium"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#4a3a66', fontWeight: 600 }}
          >
            {gift.bank}
          </p>
          <p
            className="text-xs mt-0.5 font-mono"
            style={{ fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.08em', color: '#7a6a96', opacity: 0.8 }}
          >
            {gift.accountNumber}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '0.62rem', color: '#7a6a96', opacity: 0.55 }}
          >
            a.n. {gift.accountName}
          </p>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex-shrink-0 px-3 py-2 rounded-xl text-xs transition-all duration-300"
          style={{
            background: copied
              ? 'linear-gradient(135deg, rgba(168,224,201,0.3), rgba(168,224,201,0.15))'
              : 'linear-gradient(135deg, rgba(155,127,212,0.18), rgba(196,181,253,0.1))',
            border: `1px solid ${copied ? 'rgba(168,224,201,0.5)' : 'rgba(155,127,212,0.3)'}`,
            color: copied ? '#2d9e6b' : '#9b7fd4',
            fontFamily: "'Quicksand', sans-serif",
            letterSpacing: '0.1em',
            cursor: 'pointer',
            minWidth: '52px',
            fontSize: '0.62rem',
            fontWeight: 700,
          }}
        >
          {copied ? '✓ Copied' : 'Salin'}
        </button>
      </div>
    </div>
  );
};

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
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 right-0 w-44 h-44 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251,199,164,0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'translate(15px, 15px)',
        }}
      />

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
            Wedding Gift
          </h2>
          <div className="section-divider mt-3">
            <span style={{ color: '#fbc7a4', fontSize: '1rem' }}>🎁</span>
          </div>
          <p
            className="whitespace-pre-line text-xs mt-3 leading-relaxed"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 400,
              color: '#7a6a96',
              opacity: 0.65,
              maxWidth: '240px',
              margin: '12px auto 0',
            }}
          >
            {gift.intro}
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className="flex rounded-2xl p-1 mb-5"
          style={{
            background: 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(155,127,212,0.18)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {[
            { key: 'bank', label: '🏦 Transfer Bank' },
            { key: 'ewallet', label: '📱 E-Wallet' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 py-2.5 rounded-xl text-xs transition-all duration-300"
              style={{
                background:
                  activeTab === tab.key
                    ? 'linear-gradient(135deg, rgba(155,127,212,0.25), rgba(196,181,253,0.12))'
                    : 'transparent',
                border: activeTab === tab.key ? '1px solid rgba(155,127,212,0.35)' : '1px solid transparent',
                color: activeTab === tab.key ? '#7c5cc4' : 'rgba(122,106,150,0.5)',
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: '0.08em',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gift cards */}
        <div className="flex flex-col gap-3">
          {displayedGifts.map((g, i) => (
            <LavGiftCard key={g.id} gift={g} index={i} inView={inView} />
          ))}
        </div>

        {/* Physical gift note */}
        <div
          className="mt-6 p-4 rounded-3xl text-center"
          style={{
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(251,199,164,0.3)',
          }}
        >
          <p className="text-xs" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, color: '#7a6a96', opacity: 0.7, lineHeight: 1.8 }}>
            Or you can send a physical gift to:<br />
            <span style={{ fontStyle: 'italic', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#4a3a66' }}>
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
