import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-20 border-t border-slate-100 bg-slate-50/50 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-600" />
                 <span className="text-sm font-black text-slate-950 uppercase tracking-[0.3em]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Jay.Panchal
                 </span>
              </div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                © 2026 Professional Portfolio. Fully Optimized.
              </p>
            </div>
            
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <a href="#about" className="hover:text-blue-600 transition-colors">Story</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Expertise</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-xl bg-white border border-slate-200 text-slate-950 shadow-xl z-40 hover:bg-slate-50 transition-all active:scale-90"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}

export default App;
