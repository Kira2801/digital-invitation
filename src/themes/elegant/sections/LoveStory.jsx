import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * LoveStory (theme section)
 * --------------------------
 * Zig-zag timeline of `invitationData.loveStory` entries, plus a closing
 * quote from `invitationData.loveStoryQuote`.
 */
const LoveStory = ({ data }) => {
  const [ref, inView] = useInView();
  const { loveStory, loveStoryQuote } = data;

  return (
    <section
      ref={ref}
      className="relative py-20 px-5 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(26,15,10,0) 0%, rgba(31,17,9,0) 50%, rgba(26,15,10,0) 100%)', position: 'relative', zIndex: 1 }}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-5" style={{ transform: 'translate(20px, -20px)' }}>
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M100 20 C100 20 170 60 170 110 C170 155 138 180 100 180 C62 180 30 155 30 110 C30 60 100 20 100 20Z" stroke="#e4a924" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-sm mx-auto">
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2 className="shimmer-text" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem' }}>
            Our Love Story
          </h2>
          <div className="section-divider mt-3">
            <span className="opacity-30" style={{ color: '#e4a924' }}>❤</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,136,13,0.4), rgba(228,169,36,0.6), rgba(212,136,13,0.4), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {loveStory.map((story, i) => (
              <StoryCard key={i} story={story} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <div className="mt-12 text-center" style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease 1s' }}>
          <p className="opacity-40 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#f2d88e', lineHeight: 1.8 }}>
            {loveStoryQuote}
          </p>
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ story, index, inView }) => {
  const isLeft = index % 2 === 0;

  const cardContent = (
    <div
      className={`p-4 rounded-2xl ${isLeft ? 'text-right' : ''}`}
      style={{
        background: isLeft
          ? 'linear-gradient(135deg, rgba(212,136,13,0.08), rgba(255,255,255,0.02))'
          : 'linear-gradient(135deg, rgba(228,169,36,0.06), rgba(255,255,255,0.02))',
        border: '1px solid rgba(212,136,13,0.15)',
      }}
    >
      <p
        className="text-xs opacity-40 uppercase tracking-widest mb-1"
        style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.2em', fontSize: '0.58rem' }}
      >
        {story.startYear} - {story.endYear}
      </p>
      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: '#f2d88e', marginBottom: '4px' }}>
        {story.title}
      </h4>
      <p className="text-xs leading-relaxed opacity-55" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '0.72rem' }}>
        {story.desc}
      </p>
    </div>
  );

  return (
    <div
      className={`relative flex items-start gap-0 w-full ${!isLeft ? 'flex-row-reverse' : ''}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${isLeft ? '-40px' : '40px'})`,
        transition: `all 0.9s ease ${index * 0.15}s`,
      }}
    >
      {/* Left content */}
      <div className={`flex-1 ${isLeft ? 'pr-4' : 'pl-4 order-3'}`}>
        {isLeft ? cardContent : <div />}
      </div>

      {/* Center timeline node */}
      <div className="flex flex-col items-center z-10 order-2 flex-shrink-0" style={{ width: '40px' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #2d1505, #1a0f0a)', border: '2px solid rgba(212,136,13,0.5)', boxShadow: '0 0 12px rgba(212,136,13,0.2)' }}
        >
          {story.emoji}
        </div>
      </div>

      {/* Right content */}
      <div className={`flex-1 ${!isLeft ? 'pl-4' : 'pr-4 order-3'}`}>
        {!isLeft ? cardContent : <div />}
      </div>
    </div>
  );
};

export default LoveStory;
