import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText: React.FC = () => {
  const textVariants = {
    hidden: {
      fill: "transparent",
      strokeDasharray: "0 100%",
      strokeDashoffset: "100%",
    },
    visible: {
      fill: ["transparent", "transparent", "white"],
      strokeDasharray: ["0 100%", "100% 0", "100% 0"],
      strokeDashoffset: ["100%", "0%", "0%"],
      transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.8, 1],
      },
    },
  };

  return (
    <motion.text
      x="50%"
      y="50%"
      fill="transparent"
      stroke="white"
      strokeWidth="1.5"
      dominantBaseline="middle"
      textAnchor="middle"
      style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        fontFamily: 'Inter var, sans-serif',
      }}
      className="select-none"
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      Kris-D Portfolio
    </motion.text>
  );
};
