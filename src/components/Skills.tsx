import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { 
  Cloud, 
  Server, 
  Code2,
  CheckCircle2
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Fundamental Stack",
      icon: <Code2 size={24} />,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"]
    },
    {
      title: "Server & Database",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Dev & Ecosystem",
      icon: <Cloud size={24} />,
      skills: ["Git", "Vercel", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8 bg-slate-50/50 relative border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="My focused set of technologies used for developing robust end-to-end applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all group lg:min-h-[460px] flex flex-col"
            >
              <div className="flex items-center gap-5 mb-10">
                 <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors">
                    {cat.icon}
                 </div>
                 <h3 className="text-xl font-black text-slate-950 uppercase tracking-wider">{cat.title}</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 flex-grow">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-blue-50 transition-all">
                     <span className="text-xs md:text-sm font-black text-slate-700 uppercase tracking-widest">{skill}</span>
                     <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-blue-600" />
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
