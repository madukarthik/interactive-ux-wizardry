
import { useState } from 'react';
import { Code, Globe, Database, Star } from 'lucide-react';

const skills = [
  { category: 'Programming Languages', items: ['C', 'Python', 'JavaScript'], color: 'from-blue-500 to-cyan-500', icon: <Code className="text-white" /> },
  { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript'], color: 'from-green-500 to-emerald-500', icon: <Globe className="text-white" /> },
  { category: 'Database', items: ['SQL'], color: 'from-purple-500 to-violet-500', icon: <Database className="text-white" /> },
  { category: 'Soft Skills', items: ['Leadership', 'Problem-Solving', 'Critical Thinking', 'Collaboration'], color: 'from-orange-500 to-red-500', icon: <Star className="text-white" /> }
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic excellence and hands-on project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in border border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4`}>
                {skillGroup.icon}
              </div>
              
              <h3 className="font-semibold mb-3 text-lg">{skillGroup.category}</h3>
              
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="text-sm">{skill}</span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      hoveredSkill === skill ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
