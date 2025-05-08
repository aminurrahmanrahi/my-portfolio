import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="canvas-container">
        <ThreeScene />
      </div>
      
      <div className="hero-content container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Aminur Rahman Rahi </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A creative developer crafting beautiful digital experiences with modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-primary-600 dark:text-primary-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;