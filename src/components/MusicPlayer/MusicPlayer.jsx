import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  src: string;
  title: string;
  isInitiallyPlaying?: boolean;
  onTogglePlay?: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  src, 
  title, 
  isInitiallyPlaying = false,
  onTogglePlay 
}) => {
  const [isPlaying, setIsPlaying] = useState(isInitiallyPlaying);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isInitiallyPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Auto-play prevented:', err);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Playback failed:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
    if (onTogglePlay) {
      onTogglePlay();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src={src} onEnded={handleEnded} loop />
      
      {/* Floating Music Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            togglePlay();
            setShowControls(!showControls);
          }}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white' 
              : 'bg-white text-amber-600 border-2 border-amber-400'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        {/* Music Info Popup */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl p-4 w-64 mb-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm truncate">{title}</p>
                  <p className="text-xs text-gray-500">Wedding Music</p>
                </div>
                <button
                  onClick={togglePlay}
                  className="text-amber-600 hover:text-amber-700 flex-shrink-0"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MusicPlayer;
