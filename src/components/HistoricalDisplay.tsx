'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HistoricalPeriod } from '@/data/historical-data';

interface HistoricalDisplayProps {
  period: HistoricalPeriod;
  onReturn: () => void;
}

export default function HistoricalDisplay({ period, onReturn }: HistoricalDisplayProps) {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background gradient based on era */}
      <div className={`absolute inset-0 bg-gradient-to-br ${period.color} -z-10`} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent -z-10" />

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header with Return button */}
          <div className="flex justify-between items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-2">{period.era}</h1>
              <p className="text-2xl text-white/80 font-light">Year {period.year}</p>
            </motion.div>

            <motion.button
              onClick={onReturn}
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg backdrop-blur-md border border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ← RETURN TO PRESENT
            </motion.button>
          </div>

          {/* Main info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Primary card - Description and Location */}
            <motion.div
              className="lg:col-span-2 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">About This Era</h2>
                <p className="text-white/70 text-lg leading-relaxed">{period.description}</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white/80 mb-2">Location</h3>
                <p className="text-xl text-white font-semibold">{period.location}</p>
              </div>
            </motion.div>

            {/* Side icon card */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-9xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {period.image}
              </motion.div>
              <p className="text-white/70 text-center">A symbol of this era</p>
            </motion.div>
          </div>

          {/* Three column info section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Important People */}
            <motion.div
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>👑</span> Important People
              </h3>
              <ul className="space-y-2">
                {period.people.map((person, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>{person}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Major Events */}
            <motion.div
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Major Events
              </h3>
              <ul className="space-y-2">
                {period.events.map((event, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className="text-purple-400 font-bold mt-1">•</span>
                    <span>{event}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technology */}
            <motion.div
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>⚙️</span> Technology
              </h3>
              <ul className="space-y-2">
                {period.technology.map((tech, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>{tech}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Interesting Facts */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>💡</span> Fascinating Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {period.facts.map((fact, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-white/90 leading-relaxed text-sm">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Time Travel Complete Effect */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(168, 85, 247, 0.8)', '0 0 20px rgba(59, 130, 246, 0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⏰ TIME TRAVEL COMPLETE ⏰
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}