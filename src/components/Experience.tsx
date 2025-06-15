
import { Building2, Calendar, MapPin, Trophy, Users, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Smart India Hackathon Winner",
      company: "Government of India",
      location: "National Institute of Engineering, Mysuru",
      period: "2023",
      type: "Achievement",
      description: "🏆 Won 1st place and ₹1,00,000 prize money in Smart India Hackathon 2023. Developed an innovative solution addressing national challenges with cutting-edge technology.",
      achievements: [
        "Led a team to victory in India's premier innovation competition",
        "Developed solution for real-world problem statement",
        "Recognized by Ministry of Education, Government of India",
        "Competed against 1000+ teams nationwide"
      ],
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "SAP ERP Intern",
      company: "KAAR Technologies",
      location: "Bangalore, India",
      period: "2024 - Present",
      type: "Internship",
      description: "Working with enterprise SAP solutions, focusing on FICO, UI5, ABAP development, and OData services integration.",
      achievements: [
        "Developed custom ABAP programs for business process automation",
        "Created responsive UI5 applications for enhanced user experience",
        "Implemented OData services for seamless data integration",
        "Collaborated with cross-functional teams on SAP implementation projects"
      ],
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Co-founder & Tech Lead",
      company: "Systifsoft",
      location: "Remote",
      period: "2023 - Present",
      type: "Startup",
      description: "Co-founded a software development company focused on building next-generation SaaS solutions and AI-powered applications.",
      achievements: [
        "Built and launched multiple SaaS products",
        "Led technical architecture and development decisions",
        "Managed a team of developers and designers",
        "Implemented AI/ML solutions for various client projects"
      ],
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="md:ml-20">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                          <div className="text-white">
                            {exp.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{exp.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-gray-400 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
