import React, { useState } from 'react';
import { useInView } from '../../../hooks/useParallax';

/**
 * Gallery (Lavender)
 * ------------------
 * Photo grid with a lightbox overlay. Uses `invitationData.gallery`.
 * This is an extra section not present in the "elegant" theme.
 */

/* ── Lightbox modal ── */
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  if (activeIndex === null) return null;

  const img = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'rgba(74,58,102,0.88)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{
          border: '1px solid rgba(155,127,212,0.35)',
          boxShadow: '0 20px 60px rgba(155,127,212,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img.src} alt={img.alt || ''} className="w-full" style={{ display: 'block' }} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(155,127,212,0.3)',
            color: '#9b7fd4',
            fontSize: '0.9rem',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* Prev / Next */}
        {activeIndex > 0 && (
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(155,127,212,0.3)',
              color: '#9b7fd4',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>
        )}
        {activeIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(155,127,212,0.3)',
              color: '#9b7fd4',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
        )}

        {/* Counter */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full"
          style={{
            background: 'rgba(155,127,212,0.8)',
            color: '#fff',
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
          }}
        >
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

/* ── Accent border colors cycling per card ── */
const GRID_ACCENTS = [
  'rgba(155,127,212,0.3)',
  'rgba(243,169,196,0.3)',
  'rgba(168,224,201,0.3)',
  'rgba(251,199,164,0.3)',
  'rgba(196,181,253,0.3)',
  'rgba(243,169,196,0.25)',
];

const Gallery = ({ data }) => {
  const [ref, inView] = useInView();
  const [activeIndex, setActiveIndex] = useState(null);

  const gallery = data.gallery;
  if (!gallery || !gallery.photos?.length) return null;

  const photos = gallery.photos;

  return (
    <>
      <section
        ref={ref}
        className="relative py-20 px-6 overflow-hidden"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Background glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(243,169,196,0.14) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        <div
          className="relative z-10 max-w-sm mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="shimmer-text"
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: '3rem', fontWeight: 700 }}
            >
              {gallery.heading}
            </h2>
            <div className="section-divider mt-3">
              <span style={{ color: '#9b7fd4', fontSize: '0.9rem' }}>📷</span>
            </div>
            {gallery.subheading && (
              <p
                className="text-xs mt-3"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: '#7a6a96',
                  opacity: 0.6,
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                {gallery.subheading}
              </p>
            )}
          </div>

          {/* Photo grid — 2-column masonry-like */}
          <div className="grid grid-cols-2 gap-3">
            {photos.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative rounded-2xl overflow-hidden focus:outline-none"
                style={{
                  aspectRatio: i % 5 === 0 || i % 5 === 4 ? '1 / 1.3' : '1 / 1',
                  border: `1.5px solid ${GRID_ACCENTS[i % GRID_ACCENTS.length]}`,
                  boxShadow: '0 4px 14px rgba(155,127,212,0.1)',
                  cursor: 'pointer',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'scale(1)' : 'scale(0.95)',
                  transition: `all 0.6s ease ${0.05 * i}s`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt || ''}
                  className="w-full h-full"
                  style={{ objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: 'rgba(155,127,212,0)',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(155,127,212,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(155,127,212,0)';
                  }}
                >
                  <span
                    style={{ fontSize: '1.5rem', opacity: 0, transition: 'opacity 0.3s ease' }}
                    className="zoom-icon"
                  >
                    🔍
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex((p) => Math.max(0, p - 1))}
        onNext={() => setActiveIndex((p) => Math.min(photos.length - 1, p + 1))}
      />
    </>
  );
};

export default Gallery;
