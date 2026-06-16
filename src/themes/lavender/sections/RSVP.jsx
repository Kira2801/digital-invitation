import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * RSVP (Lavender)
 * ----------------
 * RSVP section with a self-contained form and success state,
 * all styled in the lavender palette.
 */

const ATTENDANCE_OPTIONS = [
  { value: 'hadir', label: 'Attending', icon: '✅' },
  { value: 'tidak_hadir', label: 'Not Attending', icon: '❌' },
  { value: 'mungkin', label: 'Maybe', icon: '🤔' },
];

const GUEST_OPTIONS = ['1', '2', '3', '4+'];

const inputStyle = {
  background: 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(8px)',
  border: '1.5px solid rgba(155,127,212,0.25)',
  borderRadius: '14px',
  padding: '12px 16px',
  color: '#4a3a66',
  fontFamily: "'Quicksand', sans-serif",
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
};

const FieldLabel = ({ children, required }) => (
  <label
    className="block text-xs uppercase tracking-widest mb-2"
    style={{
      fontFamily: "'Quicksand', sans-serif",
      letterSpacing: '0.18em',
      fontSize: '0.6rem',
      color: '#9b7fd4',
      fontWeight: 700,
    }}
  >
    {children} {required && <span style={{ color: '#f3a9c4' }}>*</span>}
  </label>
);

/* ── Success state ── */
const SuccessState = ({ name, attendance, hashtag }) => {
  const isHadir = attendance === 'hadir';

  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-xs mx-auto">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
        style={{
          background: 'linear-gradient(135deg, rgba(155,127,212,0.2), rgba(243,169,196,0.15))',
          border: '2px solid rgba(155,127,212,0.35)',
          boxShadow: '0 0 30px rgba(155,127,212,0.18)',
        }}
      >
        {isHadir ? '🎊' : '💌'}
      </div>

      <div>
        <h3
          className="shimmer-text"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.8rem', fontWeight: 700 }}
        >
          Thank You!
        </h3>
        <p
          className="text-sm mt-2 leading-relaxed"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, color: '#7a6a96', opacity: 0.7 }}
        >
          {isHadir
            ? `We are so happy that ${name} can join us and celebrate our special day together. See you there! 🥂`
            : `Thank you for your confirmation, ${name}. Your wishes and prayers mean the world to us. 🙏`}
        </p>
      </div>

      {hashtag && (
        <div
          className="px-5 py-2.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(155,127,212,0.18), rgba(243,169,196,0.1))',
            border: '1px solid rgba(155,127,212,0.28)',
          }}
        >
          <p
            className="shimmer-text font-medium"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', letterSpacing: '0.04em', fontWeight: 600 }}
          >
            {hashtag}
          </p>
        </div>
      )}
    </div>
  );
};

/* ── RSVP Form ── */
const LavRSVPForm = ({ hashtag }) => {
  const [form, setForm] = useState({ name: '', attendance: '', guests: '1', wishes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError('Name is required.'); return; }
    if (!form.attendance) { setError('Please select your attendance confirmation.'); return; }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) return <SuccessState name={form.name} attendance={form.attendance} hashtag={hashtag} />;

  return (
    <div className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <FieldLabel required>Full Name</FieldLabel>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter your full name..."
          style={inputStyle}
        />
      </div>

      {/* Attendance */}
      <div>
        <FieldLabel required>Attendance Confirmation</FieldLabel>
        <div className="grid grid-cols-3 gap-2">
          {ATTENDANCE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleChange('attendance', opt.value)}
              className="py-3 rounded-2xl flex flex-col items-center gap-1 transition-all duration-300"
              style={{
                background:
                  form.attendance === opt.value
                    ? 'linear-gradient(135deg, rgba(155,127,212,0.25), rgba(196,181,253,0.15))'
                    : 'rgba(255,255,255,0.45)',
                border: `1.5px solid ${form.attendance === opt.value ? 'rgba(155,127,212,0.5)' : 'rgba(155,127,212,0.15)'}`,
                cursor: 'pointer',
                color: form.attendance === opt.value ? '#7c5cc4' : '#9b7fd4',
                transform: form.attendance === opt.value ? 'scale(1.04)' : 'scale(1)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <span className="text-lg">{opt.icon}</span>
              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                }}
              >
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Guest count */}
      {form.attendance === 'hadir' && (
        <div>
          <FieldLabel>Number of Guests</FieldLabel>
          <div className="flex items-center gap-3">
            {GUEST_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => handleChange('guests', n)}
                className="flex-1 py-2.5 rounded-xl text-sm transition-all duration-300"
                style={{
                  background:
                    form.guests === n
                      ? 'linear-gradient(135deg, rgba(243,169,196,0.25), rgba(251,199,164,0.15))'
                      : 'rgba(255,255,255,0.45)',
                  border: `1.5px solid ${form.guests === n ? 'rgba(243,169,196,0.5)' : 'rgba(155,127,212,0.15)'}`,
                  cursor: 'pointer',
                  color: form.guests === n ? '#b55a87' : '#9b7fd4',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(6px)',
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Wishes */}
      <div>
        <FieldLabel>Wishes &amp; Blessings</FieldLabel>
        <textarea
          value={form.wishes}
          onChange={(e) => handleChange('wishes', e.target.value)}
          placeholder="Share your heartfelt wishes and blessings for us..."
          rows={4}
          style={{ ...inputStyle, paddingTop: '12px', paddingBottom: '12px', resize: 'none' }}
        />
      </div>

      {/* Error */}
      {error && (
        <p
          className="text-xs text-center"
          style={{ color: '#e05f8a', fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
        >
          ⚠️ {error}
        </p>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden"
        style={{
          background: loading
            ? 'rgba(155,127,212,0.3)'
            : 'linear-gradient(135deg, #9b7fd4 0%, #f3a9c4 50%, #9b7fd4 100%)',
          backgroundSize: '200% auto',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          color: loading ? 'rgba(255,255,255,0.5)' : '#fff',
          fontFamily: "'Quicksand', sans-serif",
          letterSpacing: '0.22em',
          fontSize: '0.75rem',
          fontWeight: 700,
          boxShadow: loading ? 'none' : '0 4px 20px rgba(155,127,212,0.3)',
        }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded-full border-2"
              style={{
                borderColor: 'rgba(255,255,255,0.3) rgba(255,255,255,0.3) rgba(255,255,255,0.3) rgba(255,255,255,0.8)',
                animation: 'lavSpin 0.8s linear infinite',
              }}
            />
            Sending...
          </span>
        ) : (
          'SEND CONFIRMATION ✉'
        )}
      </button>

      <style>{`@keyframes lavSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

/* ── Section wrapper ── */
const RSVP = ({ data }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* BG glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(155,127,212,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div
        className="relative z-10 max-w-sm mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.9s ease',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="shimmer-text"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
          >
            Sweet Words
          </h2>
          <div className="section-divider mt-3">
            <span style={{ color: '#9b7fd4', fontSize: '0.9rem' }}>✉</span>
          </div>
          <p
            className="text-sm mt-3 leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400, color: '#7a6a96', opacity: 0.6 }}
          >
            {data.rsvp.intro}
          </p>
        </div>

        <LavRSVPForm hashtag={data.hashtag} />
      </div>
    </section>
  );
};

export default RSVP;
