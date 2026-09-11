'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  yearInput: string;
  onYearChange: (year: string) => void;
  onTimeTravel: (year: string) => void;
  error: string;
  isLoading: boolean;
}

export default function Hero({
  yearInput,
  onYearChange,
  onTimeTravel,
  error,
  isLoading
}: HeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTimeTravel(yearInput);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full filter blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main heading */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 leading-tight"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            AI TIME MACHINE
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore the past. Experience history. Powered by AI.
          </motion.p>
        </div>

        {/* Time Portal Input Section */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Animated circular portal background */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-purple-400 border-b-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-400 border-b-purple-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-950/50 to-purple-950/50 backdrop-blur-xl" />
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-12">
            <div className="space-y-6">
              {/* Year input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 tracking-widest">
                  ENTER HISTORICAL YEAR
                </label>
                <motion.input
                  type="text"
                  value={yearInput}
                  onChange={(e) => onYearChange(e.target.value)}
                  placeholder="e.g., 1450, 1969, 3000"
                  className="w-full px-6 py-4 bg-slate-900/80 border-2 border-blue-400/50 rounded-lg text-white text-center text-2xl font-bold focus:outline-none focus:border-blue-400 focus:bg-slate-900 transition-all placeholder-gray-500"
                  whileFocus={{ scale: 1.02 }}
                  disabled={isLoading}
                />
                {error && (
                  <motion.p
                    className="text-red-400 text-sm mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠ {error}
                  </motion.p>
                )}
              </div>

              {/* Travel button */}
              <motion.button
                type="submit"
                disabled={isLoading || !yearInput}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all tracking-wider uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'TRAVELING...' : 'TRAVEL THROUGH TIME'}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { icon: '📅', title: 'Select Year', desc: 'Enter any year between 3000 BC and 2026 AD' },
            { icon: '⚡', title: 'Time Travel', desc: 'Experience cinematic time-portal transitions' },
            { icon: '🏛️', title: 'Explore', desc: 'Discover history, people, events, and technology' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}