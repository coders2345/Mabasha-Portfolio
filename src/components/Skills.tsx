
import { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "Python", level: 95 },
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "Flask", level: 80 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SAP Development",
      icon: Code,
      skills: [
        { name: "ABAP", level: 85 },
        { name: "SAP UI5", level: 80 },
        { name: "SAP FICO", level: 75 },
        { name: "OData", level: 80 },
        { name: "CDS Views", level: 75 }
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Web Development",
      icon: Wrench,
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "Angular", level: 85 },
        { name: "REST APIs", level: 90 }
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 85 },
        { name: "Git", level: 90 },
        { name: "Fusion 360", level: 70 }
      ],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm sm:text-base">Technical Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across various domains, 
            <span className="text-purple-400 font-semibold"> from AI/ML to enterprise development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                          <span className="text-gray-400 text-xs sm:text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 sm:h-3 bg-gray-800/80 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                              isVisible ? 'animate-pulse' : ''
                            }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
