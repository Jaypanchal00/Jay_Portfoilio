import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { MapPin, ExternalLink, Layout, Database, Server } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: "Rootscoder LLP",
      role: "MERN Stack Intern",
      period: "6 Months",
      location: "Ahmedabad, India",
      description: "Collaborated with the engineering team to build scalable web applications. Developed modular frontend components and optimized database schemas for production-grade systems.",
      link: "https://rootscoder.com"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-white relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Engineering robust digital solutions with a focus on code quality and performance."
          align="left"
        />

        <div className="grid lg:grid-cols-1 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16 md:space-y-24"
          >
            {/* Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {[
                 { icon: Layout, title: "Frontend", desc: "High-performance interfaces using HTML, CSS, Bootstrap, and React.js." },
                 { icon: Server, title: "Backend", desc: "Secure server-side logic and RESTful APIs with Node.js and Express.js." },
                 { icon: Database, title: "Database", desc: "Scalable data models and high-volume data management with MongoDB." }
               ].map((item, idx) => (
                 <div key={idx} className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                       <item.icon size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold opacity-80">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* Ethos & Experience */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
               <div className="space-y-8 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Personal Ethos</h3>
                  <p className="text-slate-600 text-lg md:text-xl font-semibold leading-relaxed opacity-90">
                    I am driven by a passion for solving complex problems through clean and efficient code. My experience at <span className="text-slate-950 font-bold">Rootscoder LLP</span> has equipped me with the skills to handle high-performance applications.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                     {["Clean Code", "Agile", "MERN Stack", "Problem Solver"].map((tag, i) => (
                       <span key={i} className="px-5 py-2.5 rounded-xl bg-white border border-slate-100 text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest shadow-sm">
                         {tag}
                       </span>
                     ))}
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight text-center lg:text-left">Recent Experience</h3>
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="p-8 md:p-10 rounded-3xl bg-blue-50/40 border border-blue-100 relative group hover:bg-white hover:shadow-2xl transition-all">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <h4 className="text-2xl font-black text-slate-950 leading-none">{exp.company}</h4>
                          <span className="inline-block w-fit text-blue-600 bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                            {exp.period}
                          </span>
                       </div>
                       <p className="text-blue-600 text-xs font-black mb-6 tracking-widest uppercase">{exp.role}</p>
                       <p className="text-slate-600 text-base leading-relaxed mb-8 italic font-semibold opacity-80">{exp.description}</p>
                       <div className="flex flex-wrap gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><MapPin size={16} /> Ahmedabad, India</span>
                          <a href={exp.link} target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-all underline underline-offset-8 decoration-blue-200 hover:decoration-blue-600"><ExternalLink size={16} /> Website</a>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
