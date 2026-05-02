import { useState } from 'react';
import axios from 'axios';
import useReveal from '../utils/useReveal';

const Contact = () => {
  useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/contact`, formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Something went wrong. Please try again later.' 
      });
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Contact <span className="gold-gradient">Us</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Start Your Legal Consultation Today</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="reveal-up">
              <h2 className="font-playfair text-4xl mb-8 leading-tight">Get in <span className="gold-gradient">Touch</span></h2>
              <p className="text-brand-ivory/60 mb-12 font-lora">Have a legal query? Contact Ambika Law Group for professional consultation, legal research, drafting assistance and guidance.</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">Email Us</p>
                    <p className="font-cinzel text-sm">contact@ambikalawgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">Call/WhatsApp</p>
                    <p className="font-cinzel text-sm">+91 98719 56232</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/20 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">Location</p>
                    <p className="font-cinzel text-sm">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6">
                <a href="#" className="text-brand-ivory/40 hover:text-brand-gold transition-colors font-cinzel text-[10px] tracking-widest uppercase">LinkedIn</a>
                <a href="#" className="text-brand-ivory/40 hover:text-brand-gold transition-colors font-cinzel text-[10px] tracking-widest uppercase">Instagram</a>
                <a href="#" className="text-brand-ivory/40 hover:text-brand-gold transition-colors font-cinzel text-[10px] tracking-widest uppercase">Facebook</a>
              </div>
            </div>

            <div className="reveal-up">
              <form onSubmit={handleSubmit} className="space-y-6 bg-brand-royalBlue/10 p-10 border border-brand-gold/5">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm font-lora placeholder:text-brand-ivory/20" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email" 
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm font-lora placeholder:text-brand-ivory/20" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number" 
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm font-lora placeholder:text-brand-ivory/20" 
                  />
                </div>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm font-lora text-brand-ivory/40"
                  >
                    <option value="" className="bg-brand-navy">Select Service</option>
                    <option value="Legal Consultation" className="bg-brand-navy">Legal Consultation</option>
                    <option value="Legal Research" className="bg-brand-navy">Legal Research</option>
                    <option value="Drafting Assistance" className="bg-brand-navy">Drafting Assistance</option>
                    <option value="Other Query" className="bg-brand-navy">Other Query</option>
                  </select>
                </div>
                <div className="relative">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm font-lora placeholder:text-brand-ivory/20 resize-none"
                  ></textarea>
                </div>
                
                {status.error && <p className="text-red-500 text-xs font-cinzel">{status.error}</p>}
                {status.success && <p className="text-green-500 text-xs font-cinzel">Request submitted successfully!</p>}

                <button 
                  type="submit" 
                  disabled={status.loading}
                  className={`w-full py-5 bg-brand-gold text-brand-black font-cinzel font-bold tracking-[0.2em] hover:bg-brand-goldLight transition-all duration-300 uppercase ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status.loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
