import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

const PortfolioPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
            <p className="text-xl text-gray-300">
              A showcase of my projects and creative works in web development and design.
            </p>
          </motion.div>
        </div>
      </div>
      
      <ProjectsSection />
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I follow a structured approach to deliver high-quality projects that meet my clients' needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business goals and requirements for the project."
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a roadmap and determining the tools and technologies needed."
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Bringing the concept to life with code and creative solutions."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Launching the project and providing ongoing maintenance."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">{process.step}</div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;