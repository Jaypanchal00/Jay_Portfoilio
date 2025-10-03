import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import DeveloperPhoto from "./Proffile.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-2">
              <p className="text-gray-400 text-lg tracking-widest">
                HELLO, I'M
              </p>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                Jay Panchal
              </h1>
              <div className="h-1 w-24 bg-white"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-gray-300">
              Frontend Developer
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Crafting beautiful, responsive web experiences with modern
              technologies and clean code
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                View Work
              </a>
              <a
                href="/Jay-Panchal-FlowCV-Resume-20251001.pdf"
                download="Jay-Panchal-FlowCV-Resume-20251001.pdf"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/Jaypanchal00?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-panchal-470582281/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:jkpanchal3491@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Jay,"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-transform duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden border-4 border-white shadow-2xl rounded-2xl">
                <img
                  src={DeveloperPhoto}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
