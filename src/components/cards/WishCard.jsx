import React from 'react';

const attendanceLabel = {
  Attending: { label: 'Attending', color: '#86efac', bg: 'rgba(34,197,94,0.1)', icon: '✅' },
  'Not Attending': { label: 'Not Attending', color: '#fca5a5', bg: 'rgba(239,68,68,0.1)', icon: '❌' },
  Maybe: { label: 'Maybe', color: '#fde68a', bg: 'rgba(234,179,8,0.1)', icon: '🤔' },
};

/**
 * WishCard
 * --------
 * A single guestbook entry: avatar initial, name, timestamp, attendance
 * badge and the wish text.
 *
 * @param {{name, attendance, wish, time}} wish
 * @param {number} [index] - used for the staggered reveal delay
 * @param {boolean} inView
 */
const WishCard = ({ wish, index = 0, inView }) => {
  const att = attendanceLabel[wish.attendance] || attendanceLabel.Attending;

  return (
    <div
      className="p-4 rounded-2xl"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(212,136,13,0.04))',
        border: '1px solid rgba(212,136,13,0.14)',
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
              background: 'linear-gradient(135deg, rgba(212,136,13,0.25), rgba(228,169,36,0.1))',
              border: '1px solid rgba(212,136,13,0.3)',
              color: '#f2d88e',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1rem',
            }}
          >
            {wish.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', color: '#f2d88e' }}>
              {wish.name}
            </p>
            <p className="text-xs opacity-30" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem' }}>
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
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.58rem',
            letterSpacing: '0.08em',
            border: `1px solid ${att.color}30`,
          }}
        >
          {att.icon} {att.label}
        </span>
      </div>

      {/* Wish text */}
      <p className="text-xs leading-relaxed opacity-65" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
        "{wish.wish}"
      </p>
    </div>
  );
};

export default WishCard;
