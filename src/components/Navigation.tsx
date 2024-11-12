import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Mail } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItem> = ({ icon, label, active, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
      active 
        ? 'bg-indigo-500 text-white' 
        : 'hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="hidden md:inline">{label}</span>
  </motion.button>
);

export const Navigation: React.FC<{
  activePage: string;
  onPageChange: (page: string) => void;
}> = ({ activePage, onPageChange }) => {
  return (
    <motion.nav 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.5 }}
    >
      <div className="flex items-center gap-2">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          active={activePage === 'home'}
          onClick={() => onPageChange('home')}
        />
        <NavItem
          icon={<User className="w-5 h-5" />}
          label="About"
          active={activePage === 'about'}
          onClick={() => onPageChange('about')}
        />
        <NavItem
          icon={<FolderKanban className="w-5 h-5" />}
          label="Projects"
          active={activePage === 'projects'}
          onClick={() => onPageChange('projects')}
        />
        <NavItem
          icon={<Mail className="w-5 h-5" />}
          label="Contact"
          active={activePage === 'contact'}
          onClick={() => onPageChange('contact')}
        />
      </div>
    </motion.nav>
  );
};