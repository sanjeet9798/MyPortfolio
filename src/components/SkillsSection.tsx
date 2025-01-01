import React from 'react';
import { Code, Database, Layout, Server, Globe, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number;
  }[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-blue-400" />,
      skills: [
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 52 },
        { name: ' JSON', level: 72 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-purple-400" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Java', level: 60 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 50 },
        { name: 'Spring Boot', level: 78 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="text-pink-400" />,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="text-green-400" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Jenkins', level: 88 },
        { name: 'AWS', level: 70 },
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <div
          key={category.title}
          className="glass p-6 rounded-xl floating"
          style={{ animationDelay: `${categoryIndex * 0.2}s` }}
        >
          <div className="flex items-center gap-4 mb-6">
            {category.icon}
            <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 glow-effect transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};