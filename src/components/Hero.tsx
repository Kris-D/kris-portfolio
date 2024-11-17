import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

interface HeroProps {
  onHireMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMe }) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/kris-cv.pdf';
    link.download = 'CHRISTOPHER DUNKWU Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/christopher-dunkwu',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/Kris_SoftwarDev',
      label: 'Twitter'
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Kris-D',
      label: 'GitHub'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/2349056288890',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm <span className="text-indigo-500">Christopher Dunkwu</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frontend Software Developer
          </motion.p>
          
          <motion.div
            className="flex gap-4 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={onHireMe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-500 text-white rounded-full flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors text-sm sm:text-base"
            >
              <Send className="w-4 h-4" /> Hire Me
            </motion.button>
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-500/10 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-indigo-500/20"
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-4 rounded-full bg-indigo-500/30"
              animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img
              // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
              src="https://i.postimg.cc/QC1VH63w/1731408804234.jpg"
              alt="Kris profile"
              className="absolute inset-8 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};