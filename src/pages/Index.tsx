
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <HeroSection />
          
          <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    As a collaborative team member with a strong desire to learn, I bring dedication 
                    to every project, aiming to make a meaningful contribution from day one. 
                    I've completed my B.Tech in Computer Science and Engineering at NRI Institute of Technology 
                    in 2024 with First Class with Distinction and a CGPA of 7.9, along with specialized 
                    projects creating AI-driven models that enhance prediction accuracy.
                  </p>
                  <p>
                    I gained hands-on experience working on machine learning models with Python libraries 
                    like Pandas and Scikit-learn, and building web interfaces with HTML, CSS, and 
                    JavaScript. These projects strengthened my programming, data analysis, and web development 
                    abilities. I enjoy working in teams to tackle real-world challenges with innovative 
                    technology. I look forward to contributing my skills and enthusiasm to a dynamic company 
                    and growing as a professional.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <footer className="bg-muted/50 py-8 border-t border-border/50">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; 2024 Karthik Madu. Crafted with passion and dedication.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
