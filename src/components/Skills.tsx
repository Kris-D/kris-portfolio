import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'ReactJS', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'Shadcn ui', level: 90 },
];

const technologies = [ 'ReactJS', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'ReactQuery', 'Axios', 'Shadcn ui', 'TypeScript', 'Framer Motion', 'React Hook Form','Crypto-js' ];

export const Skills: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="flex flex-wrap gap-3 items-start content-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};