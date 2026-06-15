import React from 'react';

const baseStyle = {
  fontFamily: "'Jost', sans-serif",
  letterSpacing: '0.2em',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
};

const variantStyles = {
  // Solid gold gradient — used for primary CTAs (RSVP submit, open invitation)
  primary: {
    background: 'linear-gradient(135deg, #d4880d 0%, #e4a924 50%, #d4880d 100%)',
    backgroundSize: '200% auto',
    border: 'none',
    color: '#1a0f0a',
    fontSize: '0.75rem',
    borderRadius: '16px',
    padding: '1rem',
  },
  // Soft outline — used for secondary actions (Google Maps link, copy button)
  outline: {
    background: 'linear-gradient(135deg, rgba(212,136,13,0.2), rgba(228,169,36,0.1))',
    border: '1px solid rgba(212,136,13,0.3)',
    color: '#f2d88e',
    fontSize: '0.75rem',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
  },
};

/**
 * Button
 * ------
 * Shared button used across themes for primary/secondary call-to-actions.
 * Renders as `<a>` when `href` is provided, otherwise `<button>`.
 *
 * @param {'primary'|'outline'} [variant='primary']
 * @param {boolean} [fullWidth]
 * @param {boolean} [loading] - shows a spinner + dims the button (primary only)
 * @param {string} [href] - if provided, renders an anchor tag instead of a button
 * @param {object} [style] - extra inline style overrides
 */
const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  loading = false,
  href,
  style = {},
  ...rest
}) => {
  const computedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...(fullWidth ? { width: '100%' } : {}),
    ...(loading
      ? {
          background: 'rgba(212,136,13,0.3)',
          cursor: 'not-allowed',
          color: 'rgba(250,246,240,0.5)',
        }
      : {}),
    ...style,
  };

  const content = loading ? (
    <span className="flex items-center justify-center gap-2">
      <span
        className="inline-block w-4 h-4 rounded-full border-2"
        style={{
          borderColor:
            'rgba(250,246,240,0.3) rgba(250,246,240,0.3) rgba(250,246,240,0.3) rgba(250,246,240,0.8)',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      {children}
    </span>
  ) : (
    children
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={computedStyle} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button style={computedStyle} disabled={loading} {...rest}>
      {content}
    </button>
  );
};

export default Button;
