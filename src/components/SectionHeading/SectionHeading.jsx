import React from 'react';

/**
 * SectionHeading
 * --------------
 * The "shimmer title + ornament divider" pattern repeated at the top of
 * Countdown, Event Detail, Love Story, Gift, RSVP and Wishes sections.
 *
 * Kept visually identical to the original markup — just parameterized so
 * every theme/section can reuse it instead of duplicating the JSX.
 *
 * @param {string} title - heading text (rendered with the `.shimmer-text` class)
 * @param {string} [icon] - ornament symbol shown inside the divider (e.g. '✦', '❤', '🎁')
 * @param {string} [fontSize] - override heading font-size (default '3rem')
 * @param {string} [className] - extra classes for the wrapping container
 * @param {string} [dividerClassName] - extra classes for the divider element
 */
const SectionHeading = ({
  title,
  icon = '✦',
  fontSize = '3rem',
  className = '',
  dividerClassName = 'mt-3',
}) => (
  <div className={className}>
    <h2
      className="shimmer-text"
      style={{ fontFamily: "'Great Vibes', cursive", fontSize }}
    >
      {title}
    </h2>
    <div className={`section-divider ${dividerClassName}`}>
      <span className="text-xs opacity-30" style={{ color: '#e4a924' }}>{icon}</span>
    </div>
  </div>
);

export default SectionHeading;
