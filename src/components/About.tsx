import { Code, Database, Brain, Zap, Trophy, Award } from 'lucide-react';

const About = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Expert",
      description: "Specialized in deep learning, computer vision, and predictive analytics"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Proficient in Python, TypeScript, Angular, and modern web technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SAP ERP Professional",
      description: "Working with SAP FICO, UI5, ABAP, and enterprise solutions"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Smart India Hackathon Winner",
      description: "Won ₹1,00,000 prize at National Institute of Engineering, Mysuru"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Images */}
          <div className="flex flex-col space-y-6">
            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={`${baseUrl}lovable-uploads/7733247b-206c-481c-ae5e-33b600d55e7c.png`}
                  alt="Mabasha R. - AI Developer"
                  className="relative w-64 h-80 object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Hackathon Achievement Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={`${baseUrl}lovable-uploads/ca839fd2-b433-4184-9448-8ed6118047cb.png`}
                  alt="Smart India Hackathon 2023 Winner - Mabasha R."
                  className="relative w-64 h-80 object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <div className="flex items-center space-x-2 text-white">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-semibold">SIH 2023 Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm <span className="text-purple-400">Mabasha R.</span> (aka Chittu)
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A passionate final-year B.Tech student specializing in AI & Data Science, currently working as an SAP ERP Intern at KAAR Technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                🏆 <span className="text-yellow-400 font-semibold">Smart India Hackathon 2023 Winner</span> - Secured 1st place and ₹1,00,000 prize money at The National Institute of Engineering, Mysuru for developing an innovative solution.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey spans across artificial intelligence, machine learning, full-stack development, and enterprise solutions. I love transforming complex problems into elegant, scalable solutions using cutting-edge technologies.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-purple-400 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
