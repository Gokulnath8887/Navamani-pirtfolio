import { ArrowRight, Download, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LinkedinIcon } from './LinkedinIcon';

export const Hero: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div 
            ref={leftRef} 
            className={`reveal-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-sm font-medium mb-6">
              Computer Science Engineering Student
            </div>
            
            <div className="mb-6">
              <span className="block text-lg text-navy-700 mb-2 font-medium">Hi, I'm</span>
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-navy-900">
                  Navamathi R.K.
                </span>
              </h1>
              <h2 className="text-xl text-navy-500 mt-3 font-medium">
                Computer Science Engineering Student
              </h2>
            </div>
            
            <p className="text-navy-600 leading-relaxed max-w-lg mb-8">
              Passionate and motivated Computer Science and Engineering student with a strong academic record and a keen interest in web development, UI/UX design, and software development. Eager to enhance technical skills through continuous learning and practical projects.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-royal-600 rounded-full hover:bg-royal-700 transition-transform hover:scale-105 shadow-md shadow-royal-200"
              >
                View My Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <a
                href="/assets/resume.jpeg"
                download
                className="inline-flex items-center px-8 py-3 text-base font-medium text-navy-700 bg-transparent border-2 border-navy-300 rounded-full hover:border-royal-600 hover:text-royal-600 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/in/navamathi-rk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-navy-600 bg-white rounded-full shadow-sm hover:text-royal-600 hover:shadow-md transition-all border border-navy-100"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:navamathirk20@gmail.com" 
                className="p-3 text-navy-600 bg-white rounded-full shadow-sm hover:text-royal-600 hover:shadow-md transition-all border border-navy-100"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div 
            ref={rightRef}
            className={`relative flex justify-center lg:justify-end items-center reveal-right ${rightVisible ? 'visible' : ''}`}
          >
            {/* Background decorative circle */}
            <div className="absolute w-80 h-80 lg:w-[450px] lg:h-[450px] bg-royal-100/30 rounded-full -z-10 blur-3xl transform translate-x-4 translate-y-4"></div>
            
            <div className="relative">
              {/* Profile image with gradient border */}
              <div className="p-1 rounded-full bg-gradient-to-r from-royal-500 to-navy-700 shadow-xl">
                <img 
                  src="/assets/profile.jpeg" 
                  alt="Navamathi R.K." 
                  className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white bg-white"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 -left-6 bg-white shadow-lg rounded-full px-4 py-1.5 text-xs font-medium text-navy-700 border border-navy-50 animate-float">
                Learn
              </div>
              <div className="absolute bottom-10 -right-6 bg-white shadow-lg rounded-full px-4 py-1.5 text-xs font-medium text-navy-700 border border-navy-50 animate-float-delayed">
                Build
              </div>
              <div className="absolute top-16 -right-4 bg-white shadow-lg rounded-full px-4 py-1.5 text-xs font-medium text-navy-700 border border-navy-50 animate-float" style={{ animationDelay: '1s' }}>
                Grow
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

