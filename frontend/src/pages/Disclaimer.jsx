import useReveal from '../utils/useReveal';

const Disclaimer = () => {
  useReveal();
  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Legal <span className="gold-gradient">Disclaimer</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Terms of Use & Regulatory Compliance</p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10 reveal-up">
            <div className="p-10 border border-brand-gold/10 bg-brand-royalBlue/10">
              <h3 className="font-cinzel text-brand-gold text-xl mb-6 tracking-widest uppercase">General Information</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                This website (ambikalawgroup.com) is for legal consultation, research, drafting assistance, and informational purposes only. The information provided here does not constitute legal advice and should not be treated as such.
              </p>
            </div>

            <div className="p-10 border border-brand-gold/10 bg-brand-royalBlue/10">
              <h3 className="font-cinzel text-brand-gold text-xl mb-6 tracking-widest uppercase">No Attorney-Client Relationship</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                Transmission and receipt of information on this website and any communication via email or WhatsApp does not create an attorney-client relationship. Ambika Law Group does not presently undertake litigation, representation, or legal practice before any court, tribunal, or authority until completion of the founder’s LLB and necessary enrolment.
              </p>
            </div>

            <div className="p-10 border border-brand-gold/10 bg-brand-royalBlue/10">
              <h3 className="font-cinzel text-brand-gold text-xl mb-6 tracking-widest uppercase">Bar Council Compliance</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                In compliance with the Bar Council of India norms, which do not permit advocates to solicit work or advertise, this website is meant solely for informational purposes and to provide research-based consultation. By clicking "Enter" or navigating this site, the user acknowledges that they are seeking information of their own accord.
              </p>
            </div>

            <div className="p-10 border border-brand-gold/10 bg-brand-royalBlue/10 text-center">
              <p className="text-xs text-brand-ivory/40 uppercase tracking-[0.2em]">
                Last Updated: April 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
