import React from 'react';
import { useInView } from '../../../hooks/useParallax';

const formatWeddingDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/**
 * Footer (theme section)
 * -----------------------
 * Closing names, closing verse, date reminder, hashtag and credit line —
 * all from `invitationData.footer`, `invitationData.couple`,
 * `invitationData.weddingDate` and `invitationData.hashtag`.
 */
const Footer = ({ data }) => {
  const [ref, inView] = useInView();
  const { footer, hashtag, weddingDate } = data;
  const formattedDate = formatWeddingDate(weddingDate);

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(15,8,6,0) 100%)', position: 'relative', zIndex: 1 }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #d4880d 30%, #e4a924 50%, #d4880d 70%, transparent)' }} />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,136,13,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center gap-6"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease',
        }}
      >
        {/* Floral ornament */}
        <div className="text-4xl opacity-30" style={{ color: '#d4880d' }}>❋</div>

        {/* Closing names */}
        <div>
          <p className="text-xs opacity-30 uppercase tracking-widest mb-1" style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.35em' }}>
            {footer.label}
          </p>
          <h2 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3.5rem', lineHeight: 1.2 }}>
            {footer.closingNames}
          </h2>
        </div>

        {/* Closing verse */}
        <div className="max-w-xs px-6 py-5 rounded-2xl" style={{ background: 'rgba(212,136,13,0.06)', border: '1px solid rgba(212,136,13,0.15)' }}>
          <p className="opacity-50 italic leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', lineHeight: 1.9 }}>
            {footer.quote}
          </p>
        </div>

        {/* Date reminder */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <div className="h-px w-8" style={{ background: 'rgba(228,169,36,0.3)' }} />
            <p className="text-xs opacity-40" style={{ color: '#e4a924', fontFamily: "'Jost', sans-serif", letterSpacing: '0.3em' }}>
              {formattedDate.toUpperCase()}
            </p>
            <div className="h-px w-8" style={{ background: 'rgba(228,169,36,0.3)' }} />
          </div>
          <p className="text-xs opacity-25" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            {footer.location}
          </p>
        </div>

        {/* Hashtag */}
        <div className="px-5 py-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(212,136,13,0.15), rgba(228,169,36,0.05))', border: '1px solid rgba(212,136,13,0.25)' }}>
          <p className="shimmer-text font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            {hashtag}
          </p>
        </div>

        {/* Credit */}
        <p className="text-xs opacity-20 mt-4" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em' }}>
          {footer.credit}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
