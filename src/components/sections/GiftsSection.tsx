import React from 'react';
import { motion } from 'framer-motion';
import type { GiftItem as GiftItemType } from '../../types';

interface GiftsSectionProps {
  gifts: GiftItemType[];
}

const GiftsSection: React.FC<GiftsSectionProps> = ({ gifts }) => {
  const [copiedId, setCopiedId] = React.useState<number | null>(null);

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
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
            Wedding Gift
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for a contribution to our future together.
          </p>
        </motion.div>

        {/* Gift Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl p-6 border border-amber-100"
            >
              {/* Bank Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gray-800">{gift.bankName}</h3>
                  <p className="text-sm text-gray-500">Bank Transfer</p>
                </div>
              </div>

              {/* Account Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                  <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-amber-100">
                    <span className="font-mono text-gray-800">{gift.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(gift.accountNumber, gift.id)}
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                      aria-label="Copy account number"
                    >
                      {copiedId === gift.id ? (
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Account Name</p>
                  <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-amber-100">
                    <span className="text-gray-800">{gift.accountName}</span>
                    <button
                      onClick={() => copyToClipboard(gift.accountName, gift.id)}
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                      aria-label="Copy account name"
                    >
                      {copiedId === gift.id + 100 ? (
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Copy Notification */}
              {copiedId === gift.id || copiedId === gift.id + 100 ? (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm mt-3 text-center"
                >
                  ✓ Copied to clipboard!
                </motion.p>
              ) : null}
            </motion.div>
          ))}
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic">
            Thank you for your love and support as we begin our new life together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
