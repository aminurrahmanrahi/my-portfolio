import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

// Sample project data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce site with cart, checkout, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio site for a professional photographer with gallery features.',
    image: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Design'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity application with drag-and-drop interface and team collaboration features.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Application'
  },
  {
    id: '4',
    title: 'Real Estate Platform',
    description: 'A property listing website with map integration and virtual viewing capabilities.',
    image: 'https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'MongoDB', 'Google Maps API', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Development'
  },
  {
    id: '5',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking social media performance across platforms.',
    image: 'https://images.pexels.com/photos/4566937/pexels-photo-4566937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'D3.js', 'Node.js', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Data Visualization'
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A content management system with rich text editing and SEO optimization.',
    image: 'https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Development'
  }
];

const categories = ['All', 'Web Development', 'Web Design', 'Web Application', 'Data Visualization'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and projects. Here's a selection of my latest creations,
            showcasing my skills and expertise.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;