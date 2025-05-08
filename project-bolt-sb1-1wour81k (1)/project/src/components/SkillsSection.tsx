import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'JavaScript', level: 85, category: 'Frontend', icon: '🟨' },
  { name: 'TypeScript', level: 80, category: 'Frontend', icon: '🔷' },
  { name: 'Node.js', level: 75, category: 'Backend', icon: '🟢' },
  { name: 'Express.js', level: 75, category: 'Backend', icon: '⚡' },
  { name: 'MongoDB', level: 70, category: 'Backend', icon: '🍃' },
  { name: 'CSS/SCSS', level: 85, category: 'Frontend', icon: '🎨' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🌊' },
  { name: 'Figma', level: 70, category: 'Design', icon: '🎭' },
  { name: 'UI/UX Design', level: 75, category: 'Design', icon: '🖌️' },
  { name: 'Git', level: 80, category: 'Tools', icon: '📊' },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <h3 className="font-medium">{skill.name}</h3>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've spent years honing my skills across various technologies.
            Below is a showcase of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category} Skills
              </h3>
              {groupedSkills[category].map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;