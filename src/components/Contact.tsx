import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LinkedinIcon } from './LinkedinIcon';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const name = id.replace('contact-', '');
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Connect a backend service to enable real email delivery)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/50" ref={ref}>
      <div className={`max-w-6xl mx-auto px-6 reveal ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 inline-block relative">
            Let's Connect
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-royal-600 rounded-full"></span>
          </h2>
          <p className="mt-6 text-navy-500 max-w-2xl mx-auto">
            Interested in collaborating, discussing a project, or connecting professionally? Feel free to reach out.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-navy-900 mb-6">Contact Information</h3>
            
            <a href="mailto:navamathirk20@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition group">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 mb-1">Email</p>
                <p className="text-navy-700 font-medium group-hover:text-royal-600 group-hover:underline">navamathirk20@gmail.com</p>
              </div>
            </a>

            <a href="tel:8667286539" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition group">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 mb-1">Phone</p>
                <p className="text-navy-700 font-medium group-hover:text-royal-600 group-hover:underline">8667286539</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 mb-1">Location</p>
                <p className="text-navy-700 font-medium">Salem, Tamil Nadu, India</p>
              </div>
            </div>

            <a href="https://linkedin.com/in/navamathi-rk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition group">
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 mb-1">LinkedIn</p>
                <p className="text-navy-700 font-medium group-hover:text-royal-600 group-hover:underline">linkedin.com/in/navamathi-rk</p>
              </div>
            </a>
          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-navy-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-navy-700 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 outline-none transition text-navy-800 placeholder:text-navy-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-navy-700 mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  required 
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 outline-none transition text-navy-800 placeholder:text-navy-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-navy-700 mb-1.5">Subject</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 outline-none transition text-navy-800 placeholder:text-navy-300"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 mb-1.5">Message</label>
                <textarea 
                  id="contact-message" 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 outline-none transition text-navy-800 placeholder:text-navy-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-royal-600 text-white py-3 rounded-full font-medium hover:bg-royal-700 transition flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
