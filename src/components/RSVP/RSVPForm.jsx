import React, { useState } from 'react';
import FormField, { inputStyle } from './FormField';
import SuccessState from './SuccessState';

const ATTENDANCE_OPTIONS = [
  { value: 'hadir', label: 'Attending', icon: '✅' },
  { value: 'tidak_hadir', label: 'Not Attending', icon: '❌' },
  { value: 'mungkin', label: 'Maybe', icon: '🤔' },
];

const GUEST_OPTIONS = ['1', '2', '3', '4+'];

/**
 * RSVPForm
 * --------
 * Self-contained RSVP form: name, attendance, guest count and wishes.
 * On submit, calls `onSubmit(form)` (default: a simulated 1.8s delay) and
 * then renders <SuccessState />.
 *
 * @param {(form) => Promise<void>} [onSubmit] - optional submit handler.
 *        Defaults to a simulated network request.
 * @param {string} [hashtag] - passed through to SuccessState
 */
const RSVPForm = ({ onSubmit, hashtag }) => {
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
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1800));
      }
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <SuccessState name={form.name} attendance={form.attendance} hashtag={hashtag} />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Name */}
      <FormField label="Full Name" required>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter your full name..."
          className="w-full"
          style={inputStyle}
        />
      </FormField>

      {/* Attendance */}
      <FormField label="Attendance Confirmation" required>
        <div className="grid grid-cols-3 gap-2">
          {ATTENDANCE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleChange('attendance', opt.value)}
              className="py-3 rounded-xl flex flex-col items-center gap-1 transition-all duration-300"
              style={{
                background: form.attendance === opt.value
                  ? 'linear-gradient(135deg, rgba(212,136,13,0.3), rgba(228,169,36,0.15))'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${form.attendance === opt.value ? 'rgba(212,136,13,0.5)' : 'rgba(212,136,13,0.12)'}`,
                cursor: 'pointer',
                color: form.attendance === opt.value ? '#f2d88e' : 'rgba(250,246,240,0.45)',
                transform: form.attendance === opt.value ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <span className="text-lg">{opt.icon}</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>
      </FormField>

      {/* Number of guests */}
      {form.attendance === 'hadir' && (
        <FormField label="Number of Guests">
          <div className="flex items-center gap-3">
            {GUEST_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => handleChange('guests', n)}
                className="flex-1 py-2.5 rounded-xl text-sm transition-all duration-300"
                style={{
                  background: form.guests === n
                    ? 'linear-gradient(135deg, rgba(212,136,13,0.3), rgba(228,169,36,0.15))'
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${form.guests === n ? 'rgba(212,136,13,0.5)' : 'rgba(212,136,13,0.12)'}`,
                  cursor: 'pointer',
                  color: form.guests === n ? '#f2d88e' : 'rgba(250,246,240,0.45)',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </FormField>
      )}

      {/* Wishes */}
      <FormField label="Wishes & Blessings">
        <textarea
          value={form.wishes}
          onChange={(e) => handleChange('wishes', e.target.value)}
          placeholder="Share your heartfelt wishes and blessings for us..."
          rows={4}
          className="w-full resize-none"
          style={{ ...inputStyle, paddingTop: '12px', paddingBottom: '12px' }}
        />
      </FormField>

      {/* Error */}
      {error && (
        <p className="text-xs text-center" style={{ color: '#f87171', fontFamily: "'Jost', sans-serif" }}>
          ⚠️ {error}
        </p>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden"
        style={{
          background: loading
            ? 'rgba(212,136,13,0.3)'
            : 'linear-gradient(135deg, #d4880d 0%, #e4a924 50%, #d4880d 100%)',
          backgroundSize: '200% auto',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          color: loading ? 'rgba(250,246,240,0.5)' : '#1a0f0a',
          fontFamily: "'Jost', sans-serif",
          letterSpacing: '0.25em',
          fontSize: '0.75rem',
        }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded-full border-2"
              style={{
                borderColor: 'rgba(250,246,240,0.3) rgba(250,246,240,0.3) rgba(250,246,240,0.3) rgba(250,246,240,0.8)',
                animation: 'spin 0.8s linear infinite',
              }}
            />
            Sending...
          </span>
        ) : (
          'SEND CONFIRMATION ✉'
        )}
      </button>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default RSVPForm;
