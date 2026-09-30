import { useState } from 'react';
import { Calendar, Eye } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';
import CertificateModal from './CertificateModal';

const achievementsData = [
  {
    title: "HACKNOVA'26 — 24-Hour Inter-Collegiate Hackathon",
    organization: "Knowledge Institute of Technology / IEEE Computer Society",
    date: "10-11 September 2026",
    description: "Actively participated in HACKNOVA'26, a 24-hour Inter-Collegiate Hackathon aligned with the Sustainable Development Goals (SDGs).",
    type: "Hackathon",
    image: "/assets/cert-hacknova.jpeg"
  },
  {
    title: "XYRONIX — National Level Technical Symposium",
    organization: "Salem College of Engineering and Technology",
    date: "23 September 2026",
    description: "Participated in Paper Presentation at XYRONIX, a National Level Technical Symposium organized by the Department of Information Technology.",
    type: "Symposium",
    image: "/assets/cert-xyronix.jpeg"
  },
  {
    title: "AGENTICTHON 2026",
    organization: "Mahendra Engineering College — Dept. of AI & Data Science, Coding Club",
    date: "25 September 2026",
    description: "Actively participated in AGENTICTHON 2026, an event organized by the Department of Artificial Intelligence and Data Science Coding Club.",
    type: "Coding Event",
    image: "/assets/cert-agenticthon.jpeg"
  },
  {
    title: "IDEON'26 — National Level Project Expo",
    organization: "Excel Engineering College (Autonomous)",
    date: "9 September 2026",
    description: "Participated in IDEON'26 National Level Project Expo, presented by the Association of CSBS and AIML departments.",
    type: "Project Expo",
    image: "/assets/cert-ideon26.jpeg"
  }
];

const achievementImages = achievementsData.map(a => a.image);

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-white">
      <div 
        ref={ref} 
        className={`max-w-6xl mx-auto px-4 md:px-6 reveal stagger-children ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 inline-block relative">
            Achievements & Activities
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-royal-600 rounded-full"></div>
          </h2>
          <p className="mt-6 text-navy-500 max-w-2xl mx-auto text-lg">
            Events and activities I've participated in
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-royal-100 text-royal-700 text-xs font-medium rounded-full px-3 py-1">
                  {item.type}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-navy-900 leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-navy-500 mb-3">{item.organization}</p>
              <div className="flex items-center gap-1 text-xs text-navy-400 mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
              <p className="text-sm text-navy-600 mb-6">{item.description}</p>
              
              <button 
                onClick={() => setSelectedIndex(index)}
                className="text-sm text-royal-600 hover:text-royal-700 flex items-center gap-1 font-medium transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <CertificateModal
          images={achievementImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() => setSelectedIndex(i => ((i ?? 0) + 1) % achievementImages.length)}
          onPrev={() => setSelectedIndex(i => ((i ?? 0) - 1 + achievementImages.length) % achievementImages.length)}
        />
      )}
    </section>
  );
}
