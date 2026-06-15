import React, { useState } from 'react';
import Modal from '../Modal';

/**
 * Gallery
 * -------
 * Generic photo grid with a lightbox preview. Not used by the "elegant"
 * template yet (it has no gallery section), but provided so future
 * templates (per the target architecture's `Gallery.jsx` section) can use
 * a ready-made, consistently styled component instead of building one
 * from scratch.
 *
 * @param {{src: string, alt?: string}[]} images
 * @param {number} [columns=2]
 */
const Gallery = ({ images = [], columns = 2 }) => {
  const [active, setActive] = useState(null);

  if (!images.length) return null;

  return (
    <>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(212,136,13,0.18)', aspectRatio: '1 / 1', cursor: 'pointer' }}
          >
            <img
              src={img.src}
              alt={img.alt || ''}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)}>
        {active !== null && (
          <img
            src={images[active].src}
            alt={images[active].alt || ''}
            className="w-full rounded-xl"
          />
        )}
      </Modal>
    </>
  );
};

export default Gallery;
