
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Karthik Madu
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Computer Science & Engineering Graduate
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A proactive Computer Science and Engineering graduate skilled in Python, JavaScript, and 
              SQL, ready to add value at a forward-looking organization. I turn complex problems into 
              effective solutions—whether it's building AI models that make accurate predictions or 
              developing user-friendly web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-border rounded-full font-medium hover:bg-accent transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Profile Image Side */}
          <div className="lg:flex justify-center items-center flex order-first lg:order-last">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
                <img 
                  src="/lovable-uploads/43862f46-59d4-4bf9-af99-24b5db2d4df7.png" 
                  alt="Karthik Madu - Profile Photo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
