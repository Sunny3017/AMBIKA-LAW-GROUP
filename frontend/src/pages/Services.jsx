import useReveal from '../utils/useReveal';

const Services = () => {
  useReveal();
  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Our <span className="gold-gradient">Services</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Professional Consultation & Research Solutions</p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legal Consultation */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Legal Consultation</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Providing clear, reliable, and accessible legal guidance to help you understand your rights and options before representation begins.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Individual Consultation</li>
                <li>• Startup Legal Advisory</li>
                <li>• Procedural Guidance</li>
              </ul>
            </div>

            {/* Drafting Notices */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Drafting Assistance</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Technical precision in drafting legal notices, applications, and basic documentation tailored to your specific legal requirements.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Legal Notices</li>
                <li>• Applications</li>
                <li>• Basic Document Drafting</li>
              </ul>
            </div>

            {/* Legal Research */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Legal Research</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                In-depth research and analytical support to provide a strong foundation for case understanding and strategy.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Case Analysis</li>
                <li>• Judgement Research</li>
                <li>• Statutory Interpretation</li>
              </ul>
            </div>

            {/* Compliance Guidance */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Compliance</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Navigating legal compliance frameworks for individuals, startups, and small businesses to ensure smooth operations.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Startup Compliance</li>
                <li>• Small Business Advisory</li>
                <li>• Regulatory Navigation</li>
              </ul>
            </div>

            {/* Document Review */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Document Review</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Thorough review of agreements, contracts, and legal documents to identify risks and protect your interests.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Agreement Review</li>
                <li>• Contract Analysis</li>
                <li>• Risk Assessment</li>
              </ul>
            </div>

            {/* Awareness Sessions */}
            <div className="service-card p-10 reveal-up">
              <div className="w-12 h-12 mb-8 text-brand-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="font-cinzel text-2xl mb-6 tracking-wider">Legal Awareness</h3>
              <p className="text-sm text-brand-ivory/60 leading-relaxed mb-6">
                Empowering people through knowledge today. Sessions on rights, duties, and current legal developments.
              </p>
              <ul className="text-[10px] uppercase tracking-widest text-brand-gold space-y-2">
                <li>• Rights Awareness</li>
                <li>• Student Workshops</li>
                <li>• Community Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
