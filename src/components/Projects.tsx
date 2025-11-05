import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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

  const projects = [
  {
    title: 'Amazon Web (Clone) ',
    description: 'E-commerce web UI with product listings, categories, and responsive layout.',
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript','Bootstrap','Media Query'],
    liveLink: 'https://amazon-web-srgf.onrender.com',
    githubLink: '#',
    details: 'Built a responsive e-commerce interface inspired by Amazon with clean layout, product cards, and adaptive design.',
  },
  {
    title: 'Sonata Watches Website',
    description: 'Modern e-commerce site for Sonata watches with product browsing, filtering, cart, and full responsive design',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript','Bootstrap','Media Query'],
    liveLink: 'https://sonata-web.onrender.com/',
    githubLink: 'https://github.com/Jaypanchal00/Sonata_Web',
    details: 'Built with React, featuring responsive design, product filtering, shopping cart, and smooth animations. Fully functional checkout system implemented.',
  },
  {
    title: 'Job-Finder Website',
    description: 'A platform to help users search for jobs, view company details, and filter results by category, location, and experience.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    technologies: ['React', 'HTML', 'CSS', 'Bootstrap','JavaScript','Media Query'],
    liveLink: 'https://job-finder-cmqu.onrender.com/',
    githubLink: 'https://github.com/Jaypanchal00/Job-finder',
    details: 'Developed using React with dynamic job listings, filter functionality, and responsive layout. Includes interactive UI and clean code structure.',
  },
  {
    title: 'Furniture Web Application',
    description: 'An online platform showcasing furniture products, allowing users to browse items, view details, and plan their purchase.',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    technologies: ['React', 'HTML', 'CSS', 'Bootstrap','JavaScript','Media Query'],
    liveLink: '#',
    githubLink: 'https://github.com/Jaypanchal00/Furniture_Web',
    details: 'React-based furniture web app with interactive UI, responsive design, product showcase, and smooth animations for a modern user experience.',
  },
];

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex items-center bg-white text-black px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-24 bg-black mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group perspective transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`relative h-[420px] transition-transform duration-700 transform-style-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full border-2 border-black overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-sm font-semibold">{project.title}</span>
                        <span className="px-2 py-0.5 text-xs bg-white text-black">View</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-black text-white text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-black text-white p-8 flex flex-col justify-between border-2 border-black">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.details}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black hover:bg-gray-200 transition-colors"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors"
                        >
                          <Github size={20} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
