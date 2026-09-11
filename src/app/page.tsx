'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { historicalData, findNearestHistoricalPeriod, validateYear, HistoricalPeriod } from '@/data/historical-data';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import HistoricalDisplay from '@/components/HistoricalDisplay';

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [yearInput, setYearInput] = useState('');
  const [error, setError] = useState('');

  const handleTimeTravel = async (year: string) => {
    setError('');

    const validation = validateYear(year);
    if (!validation.valid) {
      setError(validation.error || 'Invalid year');
      return;
    }

    setIsLoading(true);

    // Simulate time-travel animation duration
    await new Promise(resolve => setTimeout(resolve, 2500));

    const period = findNearestHistoricalPeriod(parseInt(year, 10));
    setSelectedPeriod(period);
    setIsLoading(false);
    setYearInput('');
  };

  const handleReturnToPresent = () => {
    setSelectedPeriod(null);
    setError('');
    setYearInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <div key="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
            <LoadingAnimation />
          </div>
        ) : selectedPeriod ? (
          <HistoricalDisplay
            key="historical"
            period={selectedPeriod}
            onReturn={handleReturnToPresent}
          />
        ) : (
          <div key="home" className="relative z-10">
            <Hero
              yearInput={yearInput}
              onYearChange={setYearInput}
              onTimeTravel={handleTimeTravel}
              error={error}
              isLoading={isLoading}
            />
            <Timeline periods={historicalData} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LoadingAnimation() {
  return (
    <motion.div className="flex flex-col items-center justify-center space-y-8">
      {/* Outer rotating ring */}
      <motion.div
        className="relative w-64 h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-blue-300" />

        {/* Middle rotating ring */}
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-transparent border-b-purple-400 border-l-purple-300"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-16 rounded-full border-2 border-transparent border-t-cyan-400 border-b-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center core */}
        <motion.div
          className="absolute inset-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-white"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Traveling text */}
      <div className="text-center space-y-2">
        <motion.h2
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          TRAVELING THROUGH TIME
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="text-blue-400 text-lg"
          >
            ●
          </motion.span>
          <motion.span
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="text-purple-400 text-lg"
          >
            ●
          </motion.span>
          <motion.span
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="text-cyan-400 text-lg"
          >
            ●
          </motion.span>
        </motion.div>
      </div>

      {/* Timeline animation */}
      <motion.div className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          animate={{ x: ['0%', '300%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}