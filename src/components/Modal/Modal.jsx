import React, { useEffect } from 'react';

/**
 * Modal
 * -----
 * Generic overlay dialog used by future sections (e.g. Gallery lightbox,
 * confirmation dialogs). Not used by the "elegant" template yet, but added
 * so new templates don't need to re-invent it.
 *
 * @param {boolean} open
 * @param {() => void} onClose
 * @param {React.ReactNode} children
 */
const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ background: 'rgba(15,8,6,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl glass-card p-4"
        style={{ border: '1px solid rgba(212,136,13,0.25)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(26,15,10,0.9)',
            border: '1px solid rgba(212,136,13,0.4)',
            color: '#f2d88e',
            cursor: 'pointer',
          }}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
