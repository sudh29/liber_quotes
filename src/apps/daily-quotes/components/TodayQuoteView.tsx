import React from 'react';
import { motion } from 'motion/react';
import { Quote as QuoteIcon, Sparkles, BookOpen } from 'lucide-react';
import { Quote } from '../types';

interface TodayQuoteViewProps {
  quote: Quote | null;
}

export function TodayQuoteView({ quote }: TodayQuoteViewProps) {
  if (!quote) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-brand-pistachio/30 dark:bg-brand-pine-dark/20 border border-brand-sage/20 dark:border-brand-sage/10 rounded-3xl max-w-lg mx-auto">
        <div className="p-4 bg-brand-pistachio/80 dark:bg-brand-green/30 text-brand-green dark:text-brand-sage rounded-2xl mb-4">
          <BookOpen className="w-10 h-10 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold font-sans text-brand-earth dark:text-brand-pistachio">Active Repository is Empty</h3>
        <p className="text-sm font-sans text-brand-earth/75 dark:text-brand-sage/80 mt-2 max-w-sm">
          No quotes are available in the curated daily quote set.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 max-w-4xl mx-auto text-center select-text relative">
      {/* Decorative top badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 mb-10 px-4 py-1.5 bg-brand-pistachio dark:bg-brand-green/20 text-brand-green dark:text-brand-sage border border-brand-sage/35 dark:border-brand-green/40 rounded-full text-[10px] font-bold uppercase tracking-wider select-none shadow-3xs"
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-clay animate-pulse" />
        <span>Today's Quote</span>
      </motion.div>

      {/* Main Quote Card Presentation */}
      <div className="relative w-full flex flex-col items-center justify-center space-y-8">
        {/* Floating background quotation marks for high visual style */}
        <div className="absolute -top-10 -left-6 sm:-left-12 opacity-[0.14] dark:opacity-[0.08] text-brand-sage pointer-events-none select-none">
          <QuoteIcon className="w-24 h-24 stroke-[1.5]" />
        </div>

        {/* Dynamic centered Quote Text */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-brand-earth dark:text-brand-pistachio leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-tight select-all px-2 relative z-10"
        >
          “ {quote.text} ”
        </motion.p>

        {/* Elegant author and subtext details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center space-y-2 relative z-10"
        >
          {/* Divider line using terracotta accent */}
          <div className="w-16 h-[2.5px] bg-brand-clay rounded-full mb-3 shadow-3xs" />

          {/* Author Name */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-brand-green dark:text-brand-sage tracking-wide">
            — {quote.author}
          </h2>

          {/* Optional context field info (source or category) */}
          {(quote.source || quote.category) && (
            <p className="text-xs font-mono uppercase tracking-widest text-brand-clay dark:text-brand-clay/90 font-semibold">
              {quote.source ? `From: ${quote.source}` : `${quote.category} Category`}
            </p>
          )}
        </motion.div>
      </div>

      {/* Floating right quotation mark */}
      <div className="absolute -bottom-6 -right-6 sm:-right-12 opacity-[0.14] dark:opacity-[0.08] text-brand-sage pointer-events-none select-none">
        <QuoteIcon className="w-24 h-24 stroke-[1.5] rotate-180" />
      </div>
    </div>
  );
}
