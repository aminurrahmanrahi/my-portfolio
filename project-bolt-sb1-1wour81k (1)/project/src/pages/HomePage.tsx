import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Aminur Rahman Rahi"
              className="rounded-lg shadow-lg w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm Aminur Rahman Rahi, a passionate web developer with expertise in creating modern, 
              interactive web applications. With over 5 years of experience, I specialize in building beautiful,
              functional websites that provide great user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development began when I discovered my passion for creating digital 
              experiences that solve real-world problems. Since then, I've worked on a variety of projects,
              from small business websites to complex web applications.
            </p>
            
            <div className="flex gap-4">
              <Link to="/about" className="btn btn-primary">
                More About Me
              </Link>
              <a href="/files/resume.pdf" download className="btn btn-outline">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactPreview = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
          
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Get In Touch
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsSection />
      <SkillsSection />
      <ContactPreview />
    </>
  );
};

export default HomePage;