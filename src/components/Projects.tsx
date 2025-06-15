
import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Award, Laptop, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [githubData, setGithubData] = useState<any[]>([]);

  const projects = [
    {
      title: "MobiSafe",
      description: "AI-powered vehicle monitoring system using LSTM networks for real-time safety analysis and predictive maintenance. Winner of Smart India Hackathon 2023.",
      tech: ["Python", "TensorFlow", "LSTM", "OpenCV", "Flask"],
      github: "https://github.com/mabasham52/MobiSafe",
      live: null,
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "StockVision",
      description: "Tesla stock price prediction model using advanced machine learning algorithms and real-time market data analysis with 95% accuracy rate.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Yahoo Finance API"],
      github: "https://github.com/mabasham52/StockVision",
      live: null,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "CVE Hub",
      description: "Comprehensive vulnerability tracking system built with Flask and MongoDB for cybersecurity management and threat analysis.",
      tech: ["Flask", "MongoDB", "Python", "Bootstrap", "REST API"],
      github: "https://github.com/mabasham52/CVE-Hub",
      live: null,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      featured: false
    },
    {
      title: "Chittu AI Assistant",
      description: "Intelligent desktop assistant with speech recognition, powered by Gemini API and built with modern GUI frameworks.",
      tech: ["Python", "Tkinter", "Gemini API", "Speech Recognition", "NLP"],
      github: "https://github.com/mabasham52/Chittu-AI-Assistant",
      live: null,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div
      className={`group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-700 hover:transform hover:scale-[1.02] ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Award badge */}
      {project.award && (
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
          <Award className="w-3 h-3" />
          <span className="hidden sm:inline">{project.award}</span>
          <span className="sm:hidden">Winner</span>
        </div>
      )}
      
      <div className="relative h-full flex flex-col">
        {/* Image section */}
        <div className={`overflow-hidden ${project.featured ? 'h-48 sm:h-56 lg:h-64' : 'h-40 sm:h-48'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        {/* Content section */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-gray-300 mb-4 flex-1 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {project.tech.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-md border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Code</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Live</span>
                </a>
              )}
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-500">
              <div className="flex items-center space-x-1">
                <Star size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span className="text-xs">--</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span className="text-xs">--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 border border-purple-500/30 mb-6">
            <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm sm:text-base">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Innovative solutions crafted with cutting-edge AI/ML technologies, 
            <span className="text-purple-400 font-semibold"> award-winning projects</span>, and 
            <span className="text-pink-400 font-semibold"> real-world impact</span>
          </p>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/coders2345"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
              <span>View All Projects</span>
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Live Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
