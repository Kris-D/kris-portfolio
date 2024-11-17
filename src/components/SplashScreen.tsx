import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { AnimatedText } from './AnimatedText';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });

      // Start fade out after animations complete
      setTimeout(() => {
        controls.start({
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }).then(onComplete);
      }, 4500);
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [controls, onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950"
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
      >
        <div className="relative  w-[clamp(280px,90vw,800px)] h-[clamp(80px,20vh,160px)]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 100"
            preserveAspectRatio="xMidYMid meet"
            className="overflow-visible"
          >
            <AnimatedText />
          </svg>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeOut"
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};