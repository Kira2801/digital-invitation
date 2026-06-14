import React from 'react';
import { motion } from 'framer-motion';
import type { StoryItem as StoryItemType } from '../../types';

interface StorySectionProps {
  story: StoryItemType[];
}

const StorySection: React.FC<StorySectionProps> = ({ story }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'coffee':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v9c0 3.31 2.69 6 6 6h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14c-2.21 0-4-1.79-4-4V5h10v8c0 2.21-1.79 4-4 4s-4-1.79-4-4z" />
          </svg>
        );
      case 'ring':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 hidden md:block" />

          {/* Story Items */}
          <div className="space-y-12 md:space-y-24">
            {story.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-amber-100"
                  >
                    <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-2xl font-serif text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg text-white"
                  >
                    {getIcon(item.icon)}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
