import React, { useState, useRef, useEffect } from 'react';

/**
 * MusicPlayer
 * -----------
 * Floating background-music toggle button (bottom-right), with an optional
 * one-time tip bubble. Visuals are identical to the original implementation —
 * only the music URL / title / tip text are now passed in via props so every
 * theme/template can use its own track.
 *
 * @param {string} musicUrl - audio source URL
 * @param {string} title - track title shown while playing
 * @param {string} [tip] - one-time hint bubble text (omit to skip the bubble)
 */
const MusicPlayer = ({ musicUrl, title, tip }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNote, setShowNote] = useState(Boolean(tip));
  const [noteVisible, setNoteVisible] = useState(Boolean(tip));

  useEffect(() => {
    if (!tip) return;
    // Hide the tip after 5s
    const t = setTimeout(() => {
      setNoteVisible(false);
      setTimeout(() => setShowNote(false), 500);
    }, 5000);
    return () => clearTimeout(t);
  }, [tip]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="none" />

      {/* Tip bubble */}
      {showNote && (
        <div
          className="fixed bottom-24 right-5 z-50"
          style={{
            background: 'rgba(26,15,10,0.9)',
            border: '1px solid rgba(212,136,13,0.3)',
            borderRadius: '12px',
            padding: '8px 12px',
            maxWidth: '160px',
            opacity: noteVisible ? 1 : 0,
            transform: noteVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.5s ease',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p
            className="text-xs leading-relaxed opacity-70"
            style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', color: '#f2d88e' }}
          >
            {tip}
          </p>
          <div
            className="absolute bottom-0 right-4 w-2 h-2"
            style={{
              transform: 'translateY(50%) rotate(45deg)',
              background: 'rgba(26,15,10,0.9)',
              border: '1px solid rgba(212,136,13,0.3)',
              borderTop: 'none',
              borderLeft: 'none',
            }}
          />
        </div>
      )}

      {/* Player button */}
      <div className="fixed bottom-8 right-5 z-50">
        <button
          onClick={togglePlay}
          className="relative w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: isPlaying
              ? 'linear-gradient(135deg, #d4880d, #e4a924)'
              : 'rgba(26,15,10,0.85)',
            border: `2px solid ${isPlaying ? '#e4a924' : 'rgba(212,136,13,0.4)'}`,
            cursor: 'pointer',
            backdropFilter: 'blur(15px)',
            boxShadow: isPlaying
              ? '0 0 20px rgba(212,136,13,0.5), 0 4px 15px rgba(0,0,0,0.3)'
              : '0 4px 15px rgba(0,0,0,0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Spinning vinyl record when playing */}
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '2px solid rgba(212,136,13,0.2)',
              animation: isPlaying ? 'spinSlow 4s linear infinite' : 'none',
            }}
          />

          <span style={{ fontSize: '1.1rem', color: isPlaying ? '#1a0f0a' : '#e4a924', lineHeight: 1 }}>
            {isPlaying ? '⏸' : '▶'}
          </span>

          {/* Sound wave rings when playing */}
          {isPlaying && (
            <>
              <span
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid rgba(228,169,36,0.4)', animation: 'soundWave 1.5s ease-out infinite' }}
              />
              <span
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid rgba(228,169,36,0.2)', animation: 'soundWave 1.5s ease-out infinite 0.5s' }}
              />
            </>
          )}
        </button>

        {/* Music title */}
        {isPlaying && title && (
          <div
            className="absolute bottom-full right-0 mb-2 whitespace-nowrap"
            style={{
              background: 'rgba(26,15,10,0.85)',
              border: '1px solid rgba(212,136,13,0.25)',
              borderRadius: '20px',
              padding: '4px 10px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              className="text-xs opacity-60"
              style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.6rem', color: '#f2d88e', letterSpacing: '0.1em' }}
            >
              🎵 {title}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes soundWave {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;
