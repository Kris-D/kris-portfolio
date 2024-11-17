import React from 'react';
import { motion } from 'framer-motion';
import { Skills } from './Skills';
import { Experience } from './Experience';

export const About: React.FC = () => {
  // const mobileAnimation = {
  //   initial: { opacity: 0, y: 10 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -10 }
  // };

  // const desktopAnimation = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -20 }
  // };

  const textAnimation = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <section className="min-h-screen py-12 xs:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 items-start"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="space-y-4 xs:space-y-6 order-2 lg:order-1"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl xs:text-4xl font-bold"
              variants={textAnimation}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="prose dark:prose-invert max-w-none text-sm xs:text-base"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 0.4
                  }
                }
              }}
            >
              <p className="leading-relaxed">
              Hi there! I'm Christopher Dunkwu, a passionate Frontend Software Developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With over 3 years of experience in the tech industry, I've had the privilege of working with various technologies and frameworks to bring innovative solutions to life.
              </p>
              <p className="leading-relaxed">
              My journey in tech began with a fascination for problem-solving and creative design. Today, I specialize in building responsive web applications using modern technologies like React, TailwindCSS, and TypeScript. I believe in writing clean, maintainable code and creating intuitive user interfaces that make a difference.
              </p>
              <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new design trends or sharing my knowledge through technical writing and mentoring.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-auto lg:h-screen lg:max-h-[800px] order-1 lg:order-2"
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className="lg:sticky lg:top-24 pt-4 xs:pt-8 lg:pt-0">
              <motion.div 
                className="relative w-full aspect-square max-w-sm mx-auto"
                variants={imageAnimation}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-indigo-500/20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-2xl bg-indigo-500/30"
                  animate={{ 
                    scale: [1.05, 1, 1.05],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
                <motion.img
                  src="https://i.postimg.cc/QC1VH63w/1731408804234.jpg"
                  alt="Kris profile"
                  className="absolute inset-8 rounded-xl object-cover shadow-xl"
                  variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.2,
                        duration: 0.4,
                        ease: "easeOut"
                      }
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <Skills />
        <Experience />
      </div>
    </section>
  );
};