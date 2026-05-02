import useReveal from '../utils/useReveal';

const FAQ = () => {
  useReveal();
  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-8xl mb-6 reveal-up">Common <span className="gold-gradient">Questions</span></h1>
          <p className="font-cinzel text-brand-gold tracking-[0.4em] uppercase text-sm mb-12 reveal-up">Understanding Our Services & Approach</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {/* Q1 */}
            <div className="faq-item pb-8 reveal-up border-b border-brand-gold/10">
              <h3 className="font-cinzel text-brand-gold text-lg mb-4 tracking-widest uppercase">Can students provide legal services?</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                While law students cannot represent clients in court or provide professional legal services as an 'Advocate' until enrollment, they can provide legal consultation, research, and drafting assistance for informational and academic purposes. Ambika Law Group operates as a research and consultation initiative focused on legal awareness.
              </p>
            </div>

            {/* Q2 */}
            <div className="faq-item pb-8 reveal-up border-b border-brand-gold/10">
              <h3 className="font-cinzel text-brand-gold text-lg mb-4 tracking-widest uppercase">What kind of support do you offer?</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                We offer comprehensive legal research, drafting of notices and basic applications, agreement reviews, and advisory sessions for individuals and startups to help them understand their legal position.
              </p>
            </div>

            {/* Q3 */}
            <div className="faq-item pb-8 reveal-up border-b border-brand-gold/10">
              <h3 className="font-cinzel text-brand-gold text-lg mb-4 tracking-widest uppercase">How do consultations work?</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                Consultations can be booked via our contact form or WhatsApp. We conduct an initial review of your query, perform the necessary legal research, and provide a detailed advisory session to clarify your options.
              </p>
            </div>

            {/* Q4 */}
            <div className="faq-item pb-8 reveal-up border-b border-brand-gold/10">
              <h3 className="font-cinzel text-brand-gold text-lg mb-4 tracking-widest uppercase">Is there an attorney-client relationship?</h3>
              <p className="text-brand-ivory/60 leading-relaxed">
                No, the consultation and research provided do not create an attorney-client relationship. Our services are for informational and research purposes only, as per our full disclaimer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
