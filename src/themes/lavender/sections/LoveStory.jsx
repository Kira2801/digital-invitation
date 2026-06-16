import React from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * LoveStory (Lavender)
 * --------------------
 * Zig-zag timeline from `invitationData.loveStory`.
 * Alternating lavender / blush / mint accent nodes.
 */

const NODE_COLORS = ['#9b7fd4', '#f3a9c4', '#a8e0c9'];
const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(155,127,212,0.1), rgba(255,255,255,0.35))',
  'linear-gradient(135deg, rgba(243,169,196,0.1), rgba(255,255,255,0.35))',
  'linear-gradient(135deg, rgba(168,224,201,0.1), rgba(255,255,255,0.35))',
];
const CARD_BORDERS = [
  'rgba(155,127,212,0.2)',
  'rgba(243,169,196,0.22)',
  'rgba(168,224,201,0.22)',
];

const LoveStory = ({ data }) => {
  const [ref, inView] = useInView();
  const { loveStory, loveStoryQuote } = data;

  return (
    <section
      ref={ref}
      className="relative py-20 px-5 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Decorative background blossom */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-5" style={{ transform: 'translate(20px,-20px)' }}>
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100 20 C100 20 170 60 170 110 C170 155 138 180 100 180 C62 180 30 155 30 110 C30 60 100 20 100 20Z"
            stroke="#9b7fd4"
            strokeWidth="1"
          />
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
          <h2
            className="shimmer-text"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
          >
            Our Love Story
          </h2>
          <div className="section-divider mt-3">
            <span style={{ color: '#f3a9c4', fontSize: '1rem' }}>💜</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(155,127,212,0.4), rgba(243,169,196,0.5), rgba(168,224,201,0.4), transparent)',
            }}
          />

          <div className="flex flex-col gap-8">
            {loveStory.map((story, i) => {
              const isLeft = i % 2 === 0;
              const nodeColor = NODE_COLORS[i % NODE_COLORS.length];
              const cardGradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
              const cardBorder = CARD_BORDERS[i % CARD_BORDERS.length];

              const cardContent = (
                <div
                  className={`p-4 rounded-2xl backdrop-blur-sm ${isLeft ? 'text-right' : ''}`}
                  style={{
                    background: cardGradient,
                    border: `1px solid ${cardBorder}`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      letterSpacing: '0.18em',
                      fontSize: '0.55rem',
                      color: nodeColor,
                      opacity: 0.7,
                      fontWeight: 700,
                    }}
                  >
                    {story.startYear} – {story.endYear}
                  </p>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1rem',
                      color: '#4a3a66',
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {story.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 400,
                      fontSize: '0.7rem',
                      color: '#7a6a96',
                      opacity: 0.85,
                    }}
                  >
                    {story.desc}
                  </p>
                </div>
              );

              return (
                <div
                  key={i}
                  className={`relative flex items-start w-full ${!isLeft ? 'flex-row-reverse' : ''}`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView
                      ? 'translateX(0)'
                      : `translateX(${isLeft ? '-40px' : '40px'})`,
                    transition: `all 0.9s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Card side */}
                  <div className={`flex-1 ${isLeft ? 'pr-4' : 'pl-4 order-3'}`}>
                    {isLeft ? cardContent : <div />}
                  </div>

                  {/* Centre node */}
                  <div className="flex flex-col items-center z-10 order-2 flex-shrink-0" style={{ width: '40px' }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: 'rgba(255,255,255,0.75)',
                        backdropFilter: 'blur(8px)',
                        border: `2px solid ${nodeColor}55`,
                        boxShadow: `0 0 14px ${nodeColor}30`,
                      }}
                    >
                      {story.emoji}
                    </div>
                  </div>

                  {/* Opposite side */}
                  <div className={`flex-1 ${!isLeft ? 'pl-4' : 'pr-4 order-3'}`}>
                    {!isLeft ? cardContent : <div />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing quote */}
        <div
          className="mt-12 text-center px-4 py-5 rounded-3xl"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 1s ease 1s',
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(155,127,212,0.18)',
          }}
        >
          <p
            className="italic"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '0.95rem',
              color: '#7a6a96',
              lineHeight: 1.8,
              fontStyle: 'italic',
              opacity: 0.75,
            }}
          >
            {data.loveStoryQuote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
