import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer(Frontend)',
    company: 'Uridium technologies ltd(The Alternative Bank)',
    period: '2024 - Present',
    description: 'developing and maintaining front-end for enterprise web applications, focusing on React and TypeScript. Improving the user experience by implementing new features and improving the performance of the application.'
  },
  {
    title: 'Frontend Developer',
    company: 'Whytecleon plc(The Alternative Bank)',
    period: '2022 - 2023',
    description: 'Designed and developed user interfaces for various clients, creating responsive and accessible web applications using React and TypeScript. Improved the performance of the application by 40%.'
  },
  {
    title: 'Frontend Developer',
    company: 'Whytecleon plc(Sterling Bank)',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client websites, implementing responsive designs and optimizing for performance.'
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l-2 border-indigo-500 dark:border-indigo-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-[-17px] top-0 bg-white dark:bg-neutral-950 p-1">
              <Briefcase className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            </div>
            
            <div className="mb-1">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-indigo-500 dark:text-indigo-400">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};