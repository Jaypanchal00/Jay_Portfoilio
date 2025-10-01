import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'CSS3', level: 90, icon: '🎨' },
    { name: 'Tailwind', level: 85, icon: '🌊' },
    { name: 'Bootstrap', level: 88, icon: '🅱️' },
    { name: 'HTML5', level: 95, icon: '📝' },
    { name: 'Git', level: 82, icon: '🔀' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen flex items-center bg-black text-white px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-24 bg-white mx-auto"></div>
          <p className="text-xl text-gray-400 mt-6">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-8 border-2 border-white hover:bg-white hover:text-black transition-all duration-500 h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-105">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>

                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden group-hover:bg-gray-300 transition-colors">
                  <div
                    className="bg-white h-full transition-all duration-1000 group-hover:bg-black"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`,
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2 text-gray-400 group-hover:text-gray-700">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuously learning and staying updated with the latest web development trends and technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
