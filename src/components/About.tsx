import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { User, GraduationCap, Calendar, Award, MapPin, Languages, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Me</h2>
          <div className="w-16 h-1 mx-auto bg-royal-600 rounded-full"></div>
        </div>

        <div 
          ref={contentRef} 
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Get to Know Me</h3>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              I am a passionate and motivated Computer Science and Engineering student at AVS Engineering College, Salem, with a strong academic record and a keen interest in web development, UI/UX design, and software development. I am eager to enhance my technical skills through continuous learning and practical projects while contributing effectively to innovative and collaborative environments.
            </p>
            <p className="text-navy-700 text-lg leading-relaxed">
              Currently in my second year of B.E. Computer Science and Engineering with a CGPA of 8.37, I actively participate in hackathons, technical symposiums, and coding events to broaden my exposure and strengthen my problem-solving abilities.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-navy-50/50 border border-navy-100 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-navy-900 mb-6">Quick Facts</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Name</p>
                    <p className="text-navy-900 font-medium">Navamathi R.K.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Education</p>
                    <p className="text-navy-900 font-medium">B.E. CSE, AVS Engineering College</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Current Status</p>
                    <p className="text-navy-900 font-medium">Second Year (2025-2026)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Academic</p>
                    <p className="text-navy-900 font-medium">CGPA: 8.37</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Location</p>
                    <p className="text-navy-900 font-medium">Salem, Tamil Nadu, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <Languages size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Languages</p>
                    <p className="text-navy-900 font-medium">Tamil (Native), English</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                    <Heart size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 font-medium">Interests</p>
                    <p className="text-navy-900 font-medium">Web Dev, UI/UX, Software Dev</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={timelineRef} className={`stagger-children ${timelineVisible ? 'visible' : ''}`}>
          <h3 className="text-xl font-semibold text-navy-900 mb-8 text-center lg:text-left reveal">Education</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-navy-100 rounded-xl p-5 hover:shadow-md transition reveal-left">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-royal-500 mt-1.5 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-navy-900">B.E. Computer Science & Engineering</h4>
                  <p className="text-navy-600 text-sm mt-1">AVS Engineering College, Salem</p>
                  <p className="text-navy-500 text-sm mt-2 font-medium">2025-2026 | Current: Second Year</p>
                  <p className="text-royal-600 text-sm font-semibold mt-1">CGPA: 8.37</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-navy-100 rounded-xl p-5 hover:shadow-md transition reveal">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-royal-500 mt-1.5 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-navy-900">Higher Secondary Education (HSC)</h4>
                  <p className="text-navy-500 text-sm mt-2 font-medium">2024-2025</p>
                  <p className="text-royal-600 text-sm font-semibold mt-1">80.5%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-navy-100 rounded-xl p-5 hover:shadow-md transition reveal-right">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-royal-500 mt-1.5 shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-navy-900">Secondary School (SSLC)</h4>
                  <p className="text-navy-500 text-sm mt-2 font-medium">2022-2023</p>
                  <p className="text-royal-600 text-sm font-semibold mt-1">79.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

