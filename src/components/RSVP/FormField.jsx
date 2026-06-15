import React from 'react';

export const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(212,136,13,0.2)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#faf6f0',
  fontFamily: "'Jost', sans-serif",
  fontSize: '0.85rem',
  fontWeight: 300,
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
};

const FormField = ({ label, required, children }) => (
  <div>
    <label
      className="block text-xs opacity-50 uppercase tracking-widest mb-2"
      style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em', fontSize: '0.62rem', color: '#e4a924' }}
    >
      {label} {required && <span style={{ color: '#f2d88e' }}>*</span>}
    </label>
    {children}
  </div>
);

export default FormField;
