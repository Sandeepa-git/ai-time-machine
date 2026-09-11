'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HistoricalPeriod } from '@/data/historical-data';

interface TimelineProps {
  periods: HistoricalPeriod[];
}

export default function Timeline({ periods }: TimelineProps) {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          FEATURED HISTORICAL ERAS
        </motion.h2>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform -translate-x-1/2 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {periods.map((period, idx) => (
              <motion.div
                key={period.year}
                className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:gap-8 gap-4`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content card */}
                <div className="flex-1">
                  <motion.div
                    className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/50 transition-all group cursor-pointer"
                    whileHover={{ y: -5, borderColor: 'rgba(96, 165, 250, 0.5)' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{period.image}</span>
                      <div>
                        <p className="text-blue-400 text-sm font-bold">YEAR {period.year}</p>
                        <h3 className="text-xl font-bold text-white">{period.era}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{period.location}</p>
                    <p className="text-gray-300 text-sm mt-3 line-clamp-2">{period.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50 ring-4 ring-slate-900 hidden md:block"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}