import React from 'react';
import { useCountdown } from '../../hooks/useParallax';
import CountdownBox from './CountdownBox';

/**
 * Countdown
 * ---------
 * Renders a 4-column Days/Hours/Minutes/Seconds countdown grid towards
 * `targetDate`. Falls back to `pastContent` once the date has passed.
 *
 * @param {string} targetDate - ISO date string to count down to
 * @param {boolean} inView - whether the parent section is in view (drives animation)
 * @param {React.ReactNode} [pastContent] - content shown once the date has passed
 */
const Countdown = ({ targetDate, inView, pastContent }) => {
  const timeLeft = useCountdown(targetDate);
  const isPast = new Date(targetDate) < new Date();

  if (isPast && pastContent) return pastContent;

  return (
    <div className="grid grid-cols-4 gap-3 w-full max-w-xs">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, i) => (
        <CountdownBox
          key={item.label}
          label={item.label}
          value={item.value}
          delay={i * 0.1}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default Countdown;
