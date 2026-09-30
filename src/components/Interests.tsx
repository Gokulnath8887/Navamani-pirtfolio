import { Palette, Cpu, Code2, Music } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';

const interests = [
  { title: 'UI/UX Designing', icon: Palette },
  { title: 'Learning New Technologies', icon: Cpu },
  { title: 'Coding', icon: Code2 },
  { title: 'Listening to Music', icon: Music },
];

export default function Interests() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div 
        ref={ref} 
        className={`max-w-4xl mx-auto px-4 md:px-6 reveal stagger-children ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 inline-block relative">
            Interests & Hobbies
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-royal-600 rounded-full"></div>
          </h2>
          <p className="mt-6 text-navy-500 max-w-2xl mx-auto text-lg">
            What I enjoy outside of academics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-navy-100 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 mx-auto mb-4 flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-medium text-navy-700">
                  {interest.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
