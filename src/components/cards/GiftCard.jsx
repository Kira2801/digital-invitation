import React, { useState } from 'react';

/**
 * GiftCard
 * --------
 * Bank/E-wallet account card with a "copy account number" button.
 *
 * @param {{id, type, icon, bank, accountNumber, accountName, color}} gift
 * @param {number} [index] - used for the staggered reveal delay
 * @param {boolean} inView
 */
const GiftCard = ({ gift, index = 0, inView }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const value = gift.accountNumber.replace(/-/g, '');
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // fallback for browsers without Clipboard API access
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
      className="relative rounded-2xl overflow-hidden w-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s ease ${index * 0.15}s`,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(212,136,13,0.05))',
        border: '1px solid rgba(212,136,13,0.18)',
      }}
    >
      {/* Colored accent top */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${gift.color}80, ${gift.color}40, ${gift.color}80)` }} />

      <div className="p-5 flex items-center gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
          style={{ background: `${gift.color}20`, border: `1px solid ${gift.color}40` }}
        >
          {gift.icon}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-xs opacity-35 uppercase" style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.15em', fontSize: '0.58rem' }}>
              {gift.type}
            </p>
          </div>
          <p className="font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: '#f2d88e' }}>
            {gift.bank}
          </p>
          <p className="text-xs opacity-70 mt-0.5 font-mono" style={{ fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
            {gift.accountNumber}
          </p>
          <p className="text-xs opacity-40 mt-0.5" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem' }}>
            a.n. {gift.accountName}
          </p>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex-shrink-0 px-3 py-2 rounded-lg text-xs transition-all duration-300"
          style={{
            background: copied
              ? 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.1))'
              : 'linear-gradient(135deg, rgba(212,136,13,0.2), rgba(228,169,36,0.1))',
            border: `1px solid ${copied ? 'rgba(34,197,94,0.4)' : 'rgba(212,136,13,0.3)'}`,
            color: copied ? '#86efac' : '#f2d88e',
            fontFamily: "'Jost', sans-serif",
            letterSpacing: '0.1em',
            cursor: 'pointer',
            minWidth: '56px',
            fontSize: '0.65rem',
          }}
        >
          {copied ? '✓ Copied' : 'Salin'}
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
