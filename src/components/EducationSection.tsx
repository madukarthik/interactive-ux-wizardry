
import { GraduationCap, Star, Award, Briefcase } from 'lucide-react';

const education = [
  {
    degree: "BTech in Computer Science and Engineering",
    institution: "NRI Institute of Technology, Guntur, Andhra Pradesh",
    grade: "CGPA: 7.9/10 (First Class with Distinction)",
    year: "2021 - 2025",
    type: "Higher Education",
    icon: <GraduationCap className="text-blue-500" />
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Eluru, Andhra Pradesh",
    grade: "Percentage: 84.6%",
    year: "2019 - 2021",
    type: "Intermediate",
    icon: <GraduationCap className="text-green-500" />
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sri Bharathi High School, Eluru, Andhra Pradesh",
    grade: "Percentage: 85%",
    year: "2018 - 2019",
    type: "Secondary",
    icon: <GraduationCap className="text-purple-500" />
  }
];

const whyHireMe = [
  {
    title: "Fresh Perspective",
    description: "Recent graduate bringing current academic knowledge and modern approaches",
    icon: <Star className="w-5 h-5 text-amber-400" />
  },
  {
    title: "Academic Excellence", 
    description: "Graduated with First Class and Distinction, demonstrating strong academic performance",
    icon: <GraduationCap className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Strong Foundation",
    description: "Solid understanding of computer science fundamentals and programming principles",
    icon: <Award className="w-5 h-5 text-green-500" />
  },
  {
    title: "Practical Experience",
    description: "Hands-on project experience demonstrating ability to apply theoretical knowledge",
    icon: <Briefcase className="w-5 h-5 text-purple-500" />
  },
  {
    title: "Continuous Learning",
    description: "Committed to professional development through certifications and skill enhancement",
    icon: <Star className="w-5 h-5 text-red-500" />
  },
  {
    title: "Team Player",
    description: "Proven collaboration skills and ability to work effectively in team environments",
    icon: <Star className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Reliable",
    description: "Consistent track record of completing work on time with attention to detail",
    icon: <Star className="w-5 h-5 text-green-500" />
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic excellence combined with practical skills and a drive for continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="relative pl-8 pb-8 animate-slide-in hover:transform hover:translate-x-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-2 top-8 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                )}
                
                {/* Timeline dot with icon */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse"></div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
                  <div className="flex items-center mb-2">
                    <span className="p-2 bg-primary/10 text-primary rounded-full text-xs font-medium mr-3 flex items-center gap-1">
                      {edu.icon}
                      {edu.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Hire Me - Moved to bottom section */}
        <div className="mt-16 pt-10 border-t border-border/30">
          <h3 className="text-2xl font-semibold mb-8 text-center">Why Hire Me?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyHireMe.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-accent/50 rounded-full group-hover:bg-accent group-hover:animate-pulse-glow transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
