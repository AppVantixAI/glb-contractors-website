import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 lg:pt-0 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-[85vh]">
          <div className="lg:w-1/2 pt-16 lg:pt-0 pb-12 lg:pb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Building <span className="text-primary">Strong</span> Communities
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Providing quality construction services with a commitment to community support and development. GLB Contractors combines expertise with community values to create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn-outline">
                Get a Free Quote
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Construction site with workers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Professional & Reliable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-slant"></div>
    </section>
  );
};

export default Hero;
