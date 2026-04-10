import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise eCommerce Engine',
      type: 'Full Stack MERN',
      description: 'A high-performance eCommerce platform with product management and secure checkout functionality.',
      image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveLink: 'https://amazon-web-srgf.onrender.com',
      githubLink: '#'
    },
    {
      title: 'Sonata Luxury Timepieces',
      type: 'Premium Front-End',
      description: 'A pixel-perfect digital boutique for high-end luxury watches with responsive layouts and modern UI.',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'React.js'],
      liveLink: 'https://sonata-web.onrender.com/',
      githubLink: 'https://github.com/Jaypanchal00/Sonata_Web'
    },
    {
      title: 'Next-Gen Job Finder',
      type: 'Web Application',
      description: 'A professional platform connecting top talent with industry leaders. Includes dynamic job filtering.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
      liveLink: 'https://job-finder-cmqu.onrender.com/',
      githubLink: 'https://github.com/Jaypanchal00/Job-finder'
    },
    {
      title: 'Modern Furniture Hub',
      type: 'Product Showcase',
      description: 'An interactive furniture catalog featuring modern UI and high-quality product storytelling.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Render'],
      liveLink: '#',
      githubLink: 'https://github.com/Jaypanchal00/Furniture_Web'
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A demonstration of technical capability across various digital domains."
        />

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-[55%] group cursor-pointer">
                <div className="relative rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl group-hover:shadow-blue-200 transition-all duration-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Technology Overlay */}
                  <div className="absolute bottom-10 left-10 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     {project.technologies.slice(0, 4).map((tech, i) => (
                       <span key={i} className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-100 text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none shadow-xl">
                          {tech}
                       </span>
                     ))}
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="w-full lg:w-[45%] space-y-8">
                <div className="space-y-3">
                   <p className="text-blue-600 text-[11px] font-black uppercase tracking-[0.4em] font-mono">
                      {project.type}
                   </p>
                   <h3 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter">
                      {project.title}
                   </h3>
                </div>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-semibold italic opacity-80">
                   "{project.description}"
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-8 py-4 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-600 transition-all text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-200"
                  >
                    View Project <ArrowUpRight size={18} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors text-[11px] font-black uppercase tracking-[0.2em]"
                  >
                    <Github size={20} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
