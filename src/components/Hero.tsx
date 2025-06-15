
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Mabasha R.
            </span>
          </h1>

          {/* Subtitle with typewriter effect simulation */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <p className="leading-relaxed">
              <span className="text-purple-400 font-semibold">AI Developer</span> • 
              <span className="text-pink-400 font-semibold"> SAP ERP Expert</span> • 
              <span className="text-indigo-400 font-semibold"> Co-founder @ Systifsoft</span>
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-400">
              Transforming ideas into intelligent solutions with cutting-edge AI/ML and enterprise technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 pt-8">
            <a 
              href="https://github.com/coders2345" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mabasha-r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:mabasha@example.com"
              className="p-3 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="tel:9025389633"
              className="p-3 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ArrowDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
