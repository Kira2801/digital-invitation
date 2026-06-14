import React from 'react';
import { motion } from 'framer-motion';
import { ClosingData as ClosingDataType } from '../../types';

interface ClosingSectionProps {
  data: ClosingDataType;
}

const ClosingSection: React.FC<ClosingSectionProps> = ({ data }) => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl uppercase tracking-widest mb-6"
        >
          {data.message}
        </motion.p>

        {/* Signature */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8"
        >
          {data.signature}
        </motion.h2>

        {/* Decorative Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>

        {/* Footer Info */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-white/60 text-sm"
        >
          <p>Made with ❤️ for our special day</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ClosingSection;
