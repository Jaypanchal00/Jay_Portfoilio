import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <Code2 size={40} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Palette size={40} />,
      title: 'Modern Design',
      description: 'Creating beautiful interfaces with attention to detail',
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast Performance',
      description: 'Optimizing for speed and seamless user experience',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center bg-white text-black px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              I'm a passionate frontend developer with a keen eye for design and a love for creating
              intuitive user experiences. My journey in web development started with a curiosity about
              how websites work, and it has evolved into a commitment to crafting pixel-perfect interfaces.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              I specialize in modern JavaScript frameworks and have a strong foundation in responsive
              design principles. I'm always eager to learn new technologies and push the boundaries
              of what's possible on the web.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-black blur-3xl opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Workspace"
                className="relative w-full h-80 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
