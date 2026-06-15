import React, { useEffect, useState } from 'react';

/**
 * CountdownBox
 * ------------
 * A single animated number+label box (e.g. "02 / DAYS").
 * Used by the shared <Countdown /> grid below.
 */
const CountdownBox = ({ label, value, delay = 0, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setDisplayValue(value), delay * 1000 + 300);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  useEffect(() => { setDisplayValue(value); }, [value]);

  return (
    <div
      className="countdown-box flex flex-col items-center justify-center py-4 px-2 rounded-xl"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      <span
        className="shimmer-text font-bold"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2.2rem',
          lineHeight: 1,
          minWidth: '2ch',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        {String(displayValue).padStart(2, '0')}
      </span>
      <span
        className="text-xs mt-1 opacity-40 uppercase tracking-wider"
        style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em', fontSize: '0.6rem' }}
      >
        {label}
      </span>
    </div>
  );
};

export default CountdownBox;
