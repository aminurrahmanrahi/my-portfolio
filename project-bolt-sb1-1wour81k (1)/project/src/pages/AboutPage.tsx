import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  location, 
  description, 
  isLeft = true 
}: { 
  year: string; 
  title: string; 
  location: string; 
  description: string;
  isLeft?: boolean;
}) => {
  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Line */}
      <div className="absolute top-0 bottom-0 left-[7px] md:left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 -ml-px"></div>
      
      {/* Circle */}
      <div className="absolute left-0 md:left-1/2 -ml-2.5 md:-ml-3 w-5 md:w-6 h-5 md:h-6 rounded-full bg-primary-600 z-10 flex items-center justify-center">
        {isLeft ? <Briefcase size={14} className="text-white" /> : <GraduationCap size={14} className="text-white" />}
      </div>
      
      {/* Content */}
      <div 
        className={`relative bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md md:w-5/12 ml-8 md:ml-0 ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1 block">
          {year}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{location}</p>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary-950 dark:bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-300">
              Learn more about my journey, skills, and professional experience.
            </p>
          </motion.div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Aminur Rahman Rahi"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm Aminur Rahman Rahi, a passionate web developer with expertise in creating modern, 
                interactive web applications. With over 5 years of experience, I specialize in building beautiful,
                functional websites that provide great user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My journey in web development began when I discovered my passion for creating digital 
                experiences that solve real-world problems. Since then, I've worked on a variety of projects,
                from small business websites to complex web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
                My goal is to create engaging digital experiences that not only look great but also perform exceptionally.
              </p>
              
              <a 
                href="/files/resume.pdf" 
                download 
                className="btn btn-primary inline-flex items-center"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      <section className="section-padding bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional experience and education.
            </p>
          </div>
          
          <div className="relative space-y-12 py-8 before:absolute before:inset-0">
            <TimelineItem
              year="2020 - Present"
              title="Senior Frontend Developer"
              location="TechFusion Inc., New York"
              description="Leading the frontend development team, creating responsive web applications using React, and implementing best practices for code quality and performance."
              isLeft={true}
            />
            
            <TimelineItem
              year="2018 - 2020"
              title="Web Developer"
              location="Digital Solutions LLC, San Francisco"
              description="Developed and maintained client websites, implemented new features, and collaborated with designers to create visually appealing interfaces."
              isLeft={false}
            />
            
            <TimelineItem
              year="2016 - 2018"
              title="Junior Developer"
              location="WebCraft Studios, Seattle"
              description="Started my professional journey working on various web projects, learning modern development practices, and gaining hands-on experience with JavaScript frameworks."
              isLeft={true}
            />
            
            <TimelineItem
              year="2013 - 2016"
              title="Bachelor's in Computer Science"
              location="University of Technology"
              description="Studied computer science with a focus on web technologies, software development methodologies, and user experience design."
              isLeft={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;