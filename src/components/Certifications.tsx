import { useState } from 'react';
import { BookOpen } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const certificateImages = ['/assets/cert-html-ai.jpeg'];

  const handleImageClick = (imagePath: string, index: number) => {
    setSelectedCert(imagePath);
    setSelectedIndex(index);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-inter mb-4">
            Certifications
            <div className="h-1 w-20 bg-royal-600 mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-navy-500 font-inter">Courses and certifications I've completed</p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Certification 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-navy-100 hover:shadow-xl transition-all duration-300 font-inter flex flex-col cursor-default">
            <div className="h-48 w-full bg-navy-50 flex items-center justify-center border-b border-navy-100">
              <BookOpen size={48} className="text-navy-300" />
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="bg-royal-100 text-royal-700 text-[10px] uppercase tracking-wider font-semibold rounded px-2 py-1 inline-block mb-2">
                  Course Certification
                </span>
              </div>
              <h3 className="font-semibold text-lg text-navy-900 mb-1">Full Stack Development</h3>
              <p className="text-sm text-navy-500 mb-2">Certification Course</p>
            </div>
          </div>

          {/* Certification 2 */}
          <div 
            className="group bg-white rounded-2xl overflow-hidden border border-navy-100 hover:shadow-xl transition-all duration-300 font-inter flex flex-col cursor-pointer"
            onClick={() => handleImageClick('/assets/cert-html-ai.jpeg', 0)}
          >
            <div className="relative h-48 w-full overflow-hidden border-b border-navy-100">
              <img 
                src="/assets/cert-html-ai.jpeg" 
                alt="HTML with AI Certificate" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium px-4 py-2 bg-navy-900/60 rounded-full text-sm">
                  Click to view
                </span>
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="bg-royal-100 text-royal-700 text-[10px] uppercase tracking-wider font-semibold rounded px-2 py-1 inline-block mb-2">
                  Course Completion
                </span>
              </div>
              <h3 className="font-semibold text-lg text-navy-900 mb-1">HTML with AI</h3>
              <p className="text-sm text-navy-500 mb-1">Unstop</p>
              <p className="text-xs text-navy-400 mt-auto">September 2026</p>
            </div>
          </div>
        </div>
      </div>

      {selectedCert && (
        <CertificateModal
          images={certificateImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedCert(null)}
          onNext={() => setSelectedIndex(i => (i + 1) % certificateImages.length)}
          onPrev={() => setSelectedIndex(i => (i - 1 + certificateImages.length) % certificateImages.length)}
        />
      )}
    </section>
  );
}
