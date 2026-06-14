import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { OpeningSection as OpeningSectionType } from '../../types';

interface OpeningSectionProps {
  data: OpeningSectionType;
  guestName: string;
  onOpen: () => void;
}

const OpeningSection: React.FC<OpeningSectionProps> = ({ data, guestName, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.backgroundImage})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: data.overlayColor }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/90 text-sm md:text-base uppercase tracking-[0.3em] mb-6"
            >
              {data.title}
            </motion.p>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4">
                {data.coupleNames.first}
              </h1>
              <div className="flex items-center justify-center gap-4 my-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/60" />
                <span className="text-3xl md:text-4xl text-white/80 font-serif italic">
                  {data.coupleNames.ampersand}
                </span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/60" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white">
                {data.coupleNames.second}
              </h1>
            </motion.div>

            {/* Guest Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-white/80 text-sm uppercase tracking-widest mb-2">
                Dear Valued Guest
              </p>
              <p className="text-2xl md:text-3xl font-serif text-white">
                {guestName}
              </p>
            </motion.div>

            {/* Invitation Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white/90 text-base md:text-lg mb-10 italic"
            >
              {data.invitationText}
            </motion.p>

            {/* Open Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
              {data.buttonText}
            </motion.button>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex justify-center gap-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-white/60 rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Floral Decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-white/30">
              <path
                fill="currentColor"
                d="M45.7,-60.9C58.9,-53.3,69.1,-39.5,75.5,-24.4C81.9,-9.3,84.5,7.1,80.4,21.9C76.3,36.7,65.5,49.9,53.1,59.4C40.7,68.9,26.7,74.7,12.3,77.8C-2.1,80.9,-16.9,81.3,-30.4,75.9C-43.9,70.5,-56.1,59.3,-65.4,46.3C-74.7,33.3,-81.1,18.5,-81.8,3.3C-82.5,-11.9,-77.5,-27.5,-68.4,-40.3C-59.3,-53.1,-46.1,-63.1,-32.5,-68.7C-18.9,-74.3,-4.9,-75.5,7.3,-73.4C19.5,-71.3,32.5,-68.5,45.7,-60.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-white/30">
              <path
                fill="currentColor"
                d="M45.7,-60.9C58.9,-53.3,69.1,-39.5,75.5,-24.4C81.9,-9.3,84.5,7.1,80.4,21.9C76.3,36.7,65.5,49.9,53.1,59.4C40.7,68.9,26.7,74.7,12.3,77.8C-2.1,80.9,-16.9,81.3,-30.4,75.9C-43.9,70.5,-56.1,59.3,-65.4,46.3C-74.7,33.3,-81.1,18.5,-81.8,3.3C-82.5,-11.9,-77.5,-27.5,-68.4,-40.3C-59.3,-53.1,-46.1,-63.1,-32.5,-68.7C-18.9,-74.3,-4.9,-75.5,7.3,-73.4C19.5,-71.3,32.5,-68.5,45.7,-60.9Z"
                transform="translate(100 100) rotate(180)"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSection;
