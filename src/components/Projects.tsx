import { ClipboardList, Layout, ExternalLink } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-inter mb-4">
            Projects
            <div className="h-1 w-20 bg-royal-600 mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-navy-500 font-inter">Academic projects I've worked on</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Project 1 */}
          <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-navy-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-inter">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center">
                <ClipboardList size={24} />
              </div>
              <span className="bg-royal-100 text-royal-700 text-xs font-semibold rounded-full px-3 py-1">
                UI/UX Design
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
              Attendance Management System
            </h3>
            
            <p className="text-navy-600 text-sm leading-relaxed mb-6">
              Designed a basic Attendance Management System interface using Figma as part of an academic learning project.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-navy-50 text-navy-600 text-xs font-medium px-2 py-1 rounded">
                Figma
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-navy-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-inter flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center">
                <Layout size={24} />
              </div>
              <span className="bg-royal-100 text-royal-700 text-xs font-semibold rounded-full px-3 py-1">
                UI/UX Design
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
              Personal Portfolio
            </h3>
            
            <p className="text-navy-600 text-sm leading-relaxed mb-6">
              Designed and published a personal portfolio using Figma to showcase profile, skills, and academic projects.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-navy-50 text-navy-600 text-xs font-medium px-2 py-1 rounded">
                Figma
              </span>
            </div>
            
            <div className="mt-auto pt-4 border-t border-navy-50">
              <a 
                href="https://www.figma.com/make/s4XRvYOQdKWGhbV9gUax23?node-id=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-royal-600 text-sm font-semibold hover:text-royal-700 transition-colors"
              >
                View on Figma
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
