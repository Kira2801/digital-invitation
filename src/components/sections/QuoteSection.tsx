import React from 'react';
import { motion } from 'framer-motion';
import { QuoteSection as QuoteSectionType } from '../../types';

interface QuoteSectionProps {
  data: QuoteSectionType;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ data }) => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Quote Text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed mb-8"
        >
          "{data.text}"
        </motion.blockquote>

        {/* Source */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-base md:text-lg font-medium uppercase tracking-widest"
        >
          — {data.source}
        </motion.p>

        {/* Decorative Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
