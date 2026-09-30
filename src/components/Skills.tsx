import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, Globe, Palette, MessageSquare, Users, Lightbulb, Clock, RefreshCw, Zap } from 'lucide-react';

export const Skills: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: techRef, isVisible: techVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: softRef, isVisible: softVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 mx-auto bg-royal-600 rounded-full mb-4"></div>
          <p className="text-navy-500 text-lg">Technologies and tools I work with</p>
        </div>

        <div 
          ref={techRef} 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 stagger-children ${techVisible ? 'visible' : ''}`}
        >
          {/* Programming */}
          <div className="bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg transition-all duration-300 reveal-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-lg text-navy-900">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                C Programming
              </span>
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                Python (Basic)
              </span>
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg transition-all duration-300 reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                <Globe size={24} />
              </div>
              <h3 className="font-semibold text-lg text-navy-900">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                HTML
              </span>
            </div>
          </div>

          {/* Design & Tools */}
          <div className="bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg transition-all duration-300 reveal-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                <Palette size={24} />
              </div>
              <h3 className="font-semibold text-lg text-navy-900">Design & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                Figma
              </span>
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                Canva
              </span>
              <span className="inline-flex items-center bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors cursor-default">
                Microsoft Excel
              </span>
            </div>
          </div>
        </div>

        <div ref={softRef} className={`stagger-children ${softVisible ? 'visible' : ''}`}>
          <div className="text-center mb-10 reveal">
            <h3 className="text-2xl font-bold text-navy-900">Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Communication</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <Users size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Teamwork</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Problem Solving</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Time Management</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <RefreshCw size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Adaptability</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-navy-100 text-center hover:shadow-md hover:-translate-y-1 transition-all reveal">
              <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-600 mx-auto mb-2 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <p className="text-sm font-medium text-navy-700">Quick Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

