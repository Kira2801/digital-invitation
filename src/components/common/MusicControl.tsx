import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicControl = ({ isPlaying, onToggle }: MusicControlProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-6 h-6"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-emerald-600 rounded-full animate-pulse" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-emerald-600 rounded-full animate-pulse delay-75" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-emerald-600 rounded-full animate-pulse delay-150" />
          </motion.div>
        ) : (
          <motion.svg
            key="paused"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 text-emerald-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MusicControl;
