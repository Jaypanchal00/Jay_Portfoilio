import { useState, useEffect } from "react";
import { Menu, X, Code2, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[120] transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm" 
          : "bg-transparent py-5 md:py-6"
      )}>
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-6 md:px-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 relative z-[130]">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-slate-950 flex items-center justify-center shadow-lg group">
              <Code2 className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] md:text-xl font-bold text-slate-950 tracking-tight leading-none" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                Jay Panchal
              </span>
              <span className="text-[8px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mt-1.5 opacity-80">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Nav Links - Switch at MD (768px) breakpoint */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3.5 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Proper Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-[130] w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-950 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Robust Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[110] md:hidden flex flex-col pt-32 px-10"
          >
            <div className="flex flex-col h-full space-y-12">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx}
                    href={link.href}
                    className="text-4xl font-black text-slate-950 tracking-tighter"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-10 border-t border-slate-100 mt-auto pb-20 space-y-10"
              >
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center py-5 bg-blue-600 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
                </a>

                <div className="flex items-center gap-10 justify-center text-slate-400">
                  <a href="https://github.com/Jaypanchal00" className="hover:text-blue-600 transition-colors"><Github size={24} /></a>
                  <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                  <a href="mailto:jkpanchal3491@gmail.com" className="hover:text-blue-600 transition-colors"><Mail size={24} /></a>
                </div>
              </motion.div>
            </div>
            {/* Background pattern for depth */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
