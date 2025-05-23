
const projects = [
  {
    title: "AI Models for Predicting Student Dropout Rate in Online Courses",
    description: "Developed a project to predict student dropout rate in online courses using Python libraries like Pandas and Scikit-learn for data analysis and machine learning models. The frontend was built with Flask, HTML, and CSS, providing predictions and insights.",
    tech: ["Python", "Flask", "HTML", "CSS", "Pandas", "Scikit-learn"],
    category: "Machine Learning"
  },
  {
    title: "Web-based Calculator",
    description: "Created a calculator using HTML, CSS, and JavaScript. It has a simple design and can perform basic calculations. This project helped me understand how to structure the basic calculator logic and make it user-friendly.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development"
  }
];

const certificates = [
  {
    title: "Cyber Security – Cisco",
    date: "December 2022",
    description: "Gained foundational knowledge in cybersecurity principles, including network security, threats, vulnerabilities, and best practices to protect digital infrastructure."
  },
  {
    title: "Deep Learning for Developers – Infosys Springboard",
    date: "November 2023",
    description: "Explored core concepts of deep learning such as neural networks, backpropagation, and model training using frameworks like TensorFlow."
  },
  {
    title: "Hands-on Workshop on JavaScript",
    date: "December 2023",
    description: "Participated in a practical workshop focusing on JavaScript fundamentals, DOM manipulation, event handling, and basic client-side web development."
  },
  {
    title: "Python Programming – Infosys Springboard",
    date: "March 2024",
    description: "Acquired strong programming skills in Python, including data structures, object-oriented programming, file handling, and basic libraries."
  },
  {
    title: "Employability Skills – Edunet Foundation",
    date: "June 2024",
    description: "Focused on enhancing soft skills essential for the workplace, including communication, teamwork, leadership, time management, and interview preparation."
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and professional certifications
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-accent rounded-full text-xs font-medium hover:bg-accent/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={cert.title}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-muted-foreground font-medium">{cert.date}</span>
                </div>
                
                <h4 className="font-semibold mb-2 text-lg">{cert.title}</h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
