import React from 'react';
import Button from '../Button';

const DetailRow = ({ icon, label, value, multiline }) => (
  <div className="flex gap-3">
    <span className="text-sm flex-shrink-0 mt-0.5" style={{ opacity: 0.6 }}>{icon}</span>
    <div>
      <p
        className="text-xs opacity-30 uppercase mb-0.5"
        style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em', fontSize: '0.58rem' }}
      >
        {label}
      </p>
      <p
        className={`text-sm opacity-80 ${multiline ? 'leading-relaxed' : ''}`}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}
      >
        {value}
      </p>
    </div>
  </div>
);

/**
 * EventCard
 * ---------
 * Displays one event (ceremony / reception) with date, time, venue, address
 * and a "Google Maps" button. `type` controls the accent-bar gradient and
 * icon (🕌 for "Marriage Ceremony", 🥂 otherwise) — or pass `icon` directly
 * from data to control it explicitly.
 *
 * @param {string} type - event title, e.g. "Marriage Ceremony"
 * @param {string} [icon] - emoji shown in the icon badge (defaults based on `type`)
 * @param {string} date
 * @param {string} time
 * @param {string} venue
 * @param {string} address
 * @param {string} mapsUrl
 * @param {number} [delay] - reveal animation delay (seconds)
 * @param {boolean} inView
 */
const EventCard = ({ type, icon, date, time, venue, address, mapsUrl, delay = 0, inView }) => {
  const isAkad = type === 'Marriage Ceremony';
  const resolvedIcon = icon ?? (isAkad ? '🕌' : '🥂');

  return (
    <div
      className="relative rounded-2xl overflow-hidden w-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.9s ease ${delay}s`,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(212,136,13,0.06) 100%)',
        border: '1px solid rgba(212,136,13,0.2)',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: isAkad
            ? 'linear-gradient(to right, #d4880d, #f2d88e, #d4880d)'
            : 'linear-gradient(to right, #c97b0a, #e4a924, #c97b0a)',
        }}
      />

      <div className="p-6">
        {/* Icon + Type */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(212,136,13,0.25), rgba(228,169,36,0.1))',
              border: '1px solid rgba(212,136,13,0.35)',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>{resolvedIcon}</span>
          </div>
          <div>
            <h3
              className="shimmer-text"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontStyle: 'italic' }}
            >
              {type}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <DetailRow icon="📅" label="Date" value={date} />
          <DetailRow icon="🕐" label="Time" value={time} />
          <DetailRow icon="🏛️" label="Venue" value={venue} />
          <DetailRow icon="📍" label="Address" value={address} multiline />
        </div>

        {/* Maps button */}
        <Button
          href={mapsUrl}
          variant="outline"
          fullWidth={false}
          style={{ marginTop: '1.25rem', width: '50%', margin: '1.25rem auto 0' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212,136,13,0.35), rgba(228,169,36,0.2))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212,136,13,0.2), rgba(228,169,36,0.1))';
          }}
        >
          <span>📍</span>
          <span className="uppercase tracking-widest">Google Maps</span>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
export { DetailRow };
