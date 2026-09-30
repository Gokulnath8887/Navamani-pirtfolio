import { FileText, Eye, Download } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ResumeSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="resume" className="py-20 lg:py-28 bg-slate-50/50">
      <div 
        ref={ref} 
        className={`max-w-4xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 inline-block relative">
            Resume
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-royal-600 rounded-full"></div>
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-navy-100 shadow-sm max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-royal-100 text-royal-600 mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold text-navy-900 text-center">My Resume</h3>
          <p className="text-navy-500 text-center mt-2 mb-8">
            Download my resume to learn more about my education, skills, projects, and achievements.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a 
              href="/assets/resume.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal-600 text-white rounded-full px-6 py-3 hover:bg-royal-700 flex items-center justify-center gap-2 transition-colors font-medium"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </a>
            <a 
              href="/assets/resume.jpeg"
              download
              className="border-2 border-navy-300 text-navy-700 rounded-full px-6 py-3 hover:bg-navy-50 flex items-center justify-center gap-2 transition-colors font-medium"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
