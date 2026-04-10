import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:py-20 overflow-hidden bg-white"
    >
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="absolute -top-[5%] -left-[5%] w-[50%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[5%] -right-[5%] w-[50%] h-[40%] bg-slate-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8 md:space-y-12 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Available for Hire</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] lg:leading-[1.05] tracking-tight">
                Building <span className="text-blue-600">Full-Stack</span> Digital Products.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium opacity-90">
                I'm <span className="text-slate-950 font-bold">Jay Panchal</span>, a MERN stack developer focusing on clean architecture and high-performance web solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-10 py-4.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 text-sm active:scale-95"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-4.5 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex items-center gap-3">
                 <CheckCircle2 size={16} className="text-blue-600" />
                 <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">6+ Months Internship</span>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 size={16} className="text-blue-600" />
                 <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Ahmedabad, India</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-slate-100 w-full lg:w-fit lg:pr-10">
               <a href="https://github.com/Jaypanchal00" target="_blank" className="text-slate-400 hover:text-blue-600 transition-all"><Github size={24} /></a>
               <a href="https://www.linkedin.com/in/jay-panchal-470582281/" target="_blank" className="text-slate-400 hover:text-blue-600 transition-all"><Linkedin size={24} /></a>
               <a href="mailto:jkpanchal3491@gmail.com" className="text-slate-400 hover:text-blue-600 transition-all"><Mail size={24} /></a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
              <img
                src="/hero-light.png"
                alt="Productivity Visual"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
            <div className="absolute -inset-10 bg-blue-600/5 blur-[80px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
