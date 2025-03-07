import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Construction Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Whether you're building a new home, renovating your space, or need handyman services, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn bg-white text-primary hover:bg-blue-50">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:+15551234567" className="btn border-2 border-white text-white hover:bg-white/10">
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
