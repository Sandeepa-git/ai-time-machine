'use client';

import React, { useState } from 'react';
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
  const [era, setEra] = useState<'BC' | 'AD'>('AD');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullYear = era === 'BC' ? `${yearInput} BC` : yearInput;
    onTimeTravel(fullYear);
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
              {/* Year input with BC/AD selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 tracking-widest">
                  ENTER HISTORICAL YEAR
                </label>
                
                <div className="flex gap-3">
                  {/* Year Input */}
                  <motion.input
                    type="text"
                    value={yearInput}
                    onChange={(e) => onYearChange(e.target.value)}
                    placeholder="Enter year"
                    className="flex-1 px-6 py-4 bg-slate-900/80 border-2 border-blue-400/50 rounded-lg text-white text-center text-2xl font-bold focus:outline-none focus:border-blue-400 focus:bg-slate-900 transition-all placeholder-gray-500"
                    whileFocus={{ scale: 1.02 }}
                    disabled={isLoading}
                  />

                  {/* BC/AD Selector */}
                  <motion.div
                    className="flex gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setEra('BC')}
                      className={`px-6 py-4 font-bold text-lg rounded-lg transition-all tracking-wider uppercase ${
                        era === 'BC'
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                          : 'bg-slate-900/80 text-gray-400 border-2 border-orange-400/30 hover:border-orange-400/50'
                      }`}
                      disabled={isLoading}
                    >
                      BC
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => setEra('AD')}
                      className={`px-6 py-4 font-bold text-lg rounded-lg transition-all tracking-wider uppercase ${
                        era === 'AD'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                          : 'bg-slate-900/80 text-gray-400 border-2 border-blue-400/30 hover:border-blue-400/50'
                      }`}
                      disabled={isLoading}
                    >
                      AD
                    </motion.button>
                  </motion.div>
                </div>

                {/* Error message */}
                {error && (
                  <motion.p
                    className="text-red-400 text-sm mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠ {error}
                  </motion.p>
                )}

                {/* Era info */}
                <motion.p
                  className="text-gray-500 text-xs mt-3"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {era === 'BC' ? '⏰ Before Christ (Past)' : '⏰ Anno Domini (After Christ) - Present & Future'}
                </motion.p>
              </div>

              {/* Quick Examples */}
              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-400 text-xs font-semibold tracking-widest mb-2">📅 QUICK EXAMPLES:</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span>
                    <span>Try <span className="text-blue-400 font-bold">3000 BC</span> for Ancient Egypt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span>
                    <span>Try <span className="text-blue-400 font-bold">1969 AD</span> for the Space Age</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span>
                    <span>Valid range: <span className="text-blue-400 font-bold">3000 BC to 2026 AD</span></span>
                  </div>
                </div>
              </motion.div>

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
            { icon: '📅', title: 'Select Year', desc: 'Enter year number and choose BC or AD' },
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
