
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
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Profile Image Side */}
          <div className="lg:flex justify-center items-center flex order-first lg:order-last">
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full opacity-20 blur-lg animate-pulse group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur animate-pulse animation-delay-150"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in animation-delay-300">
                <img 
                  src="/lovable-uploads/43862f46-59d4-4bf9-af99-24b5db2d4df7.png" 
                  alt="Karthik Madu - Profile Photo"
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce animation-delay-500 opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce animation-delay-700 opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
