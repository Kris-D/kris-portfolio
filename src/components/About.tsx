import React from 'react';
import { motion } from 'framer-motion';
import { Skills } from './Skills';
import { Experience } from './Experience';

export const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="prose dark:prose-invert max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                Hi there! I'm Christopher Dunkwu, a passionate Frontend Software Developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With over 3 years of experience in the tech industry, I've had the privilege of working with various technologies and frameworks to bring innovative solutions to life.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech began with a fascination for problem-solving and creative design. Today, I specialize in building responsive web applications using modern technologies like React, TailwindCSS, and TypeScript. I believe in writing clean, maintainable code and creating intuitive user interfaces that make a difference.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new design trends or sharing my knowledge through technical writing and mentoring.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-indigo-500/20"
                  animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-4 rounded-2xl bg-indigo-500/30"
                  animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img
                  // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=800&fit=crop"
                  src="https://i.postimg.cc/QC1VH63w/1731408804234.jpg"
                  alt="Kris profile"
                  className="absolute inset-8 rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Skills />
        <Experience />
      </div>
    </section>
  );
};