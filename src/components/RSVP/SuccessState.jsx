import React from 'react';

/**
 * SuccessState
 * ------------
 * Thank-you confirmation shown after the RSVP form is submitted.
 *
 * @param {string} name - guest name entered in the form
 * @param {string} attendance - 'hadir' | 'tidak_hadir' | 'mungkin'
 * @param {string} [hashtag] - wedding hashtag shown in the highlighted pill
 */
const SuccessState = ({ name, attendance, hashtag }) => {
  const isHadir = attendance === 'hadir';

  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-xs">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
        style={{
          background: 'linear-gradient(135deg, rgba(212,136,13,0.2), rgba(228,169,36,0.1))',
          border: '2px solid rgba(212,136,13,0.4)',
          boxShadow: '0 0 30px rgba(212,136,13,0.2)',
        }}
      >
        {isHadir ? '🎊' : '💌'}
      </div>

      <div>
        <h3 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem' }}>
          Thank You!
        </h3>
        <p className="text-sm opacity-60 mt-2 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
          {isHadir
            ? `We are so happy that ${name} can join us and celebrate our special day together. See you there! 🥂`
            : `Thank you for your confirmation, ${name}. Your wishes and prayers mean the world to us. 🙏`}
        </p>
      </div>

      {hashtag && (
        <div
          className="px-5 py-2.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(212,136,13,0.15), rgba(228,169,36,0.05))',
            border: '1px solid rgba(212,136,13,0.25)',
          }}
        >
          <p className="shimmer-text font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            {hashtag}
          </p>
        </div>
      )}
    </div>
  );
};

export default SuccessState;
