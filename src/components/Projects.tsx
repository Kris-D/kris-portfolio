import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AltPower',
    description: 'This is an innovative platform in the renewable energy sector, focusing on providing sustainable power solutions. They offer energy solutions designed to improve efficiency, reduce environmental impact, and meet the growing need for reliable electricity.',
    image: 'https://i.postimg.cc/nr3MDftC/Screenshot-842.png',
    technologies: ['React', 'Chakra UI', 'React Query', 'Axios','Formik'],
    liveDemo: 'https://altpower.ng',
    sourceCode: 'https://altpower.ng'
  },
  {
    title: 'SterlingFlock',
    description: 'A social media platform that brings together design elements and features inspired by modern digital communication and engagement. The project is likely focused on creating an interactive and user-friendly space where users can engage with posts, messages, notifications, and friend requests',
    image: 'https://i.postimg.cc/SKLDWn2j/Screenshot-840.png',
    technologies: ['HTML', 'Vainilla CSS', 'JavaScript', ],
    liveDemo: 'https://sterling-flock.vercel.app',
    sourceCode: 'https://github.com/Kris-D/SterlingFlock'
  },
  {
    title: 'Gamelist',
    description: 'This is a React-based project for browsing, listing, and categorizing video games, built using a modern JavaScript framework with various libraries and APIs for data fetching and state management. The app integrates with the RAWG.io API, which provides data on games, genres, and other relevant game-related information.',
    image: 'https://i.postimg.cc/c1Qm8g33/Screenshot-841.png',
    technologies: ['React', 'Tailwind CSS', 'React Query', 'Axios'],
    liveDemo: 'https://gamelist-chi.vercel.app',
    sourceCode: 'https://github.com/Kris-D/Gamelist'
  }
];

const ProjectCard: React.FC<typeof projects[0]> = ({
  title,
  description,
  image,
  technologies,
  liveDemo,
  sourceCode
}) => (
  <motion.div
    className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <motion.a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full text-neutral-900 hover:bg-indigo-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Globe className="w-5 h-5" />
        </motion.a>
        <motion.a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full text-neutral-900 hover:bg-indigo-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ExternalLink className="w-5 h-5 text-indigo-500" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience in web development,
            design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};