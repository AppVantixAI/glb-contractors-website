import React from 'react';
import { Home, Hammer, Wrench, PaintBucket, Ruler, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: 'Home Building',
      description: 'Custom home construction with premium materials and expert craftsmanship. We build your dream home from foundation to finishing touches.'
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: 'Handyman Services',
      description: 'Professional repairs and maintenance for your home or business. No job is too small for our skilled technicians.'
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Plumbing & Electrical',
      description: 'Licensed plumbers and electricians ready to handle installations, repairs, and upgrades to keep your systems running safely.'
    },
    {
      icon: <PaintBucket className="h-10 w-10 text-primary" />,
      title: 'Painting & Finishing',
      description: 'Interior and exterior painting services with premium paints and expert application for a flawless finish.'
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: 'Renovations',
      description: 'Transform your space with our comprehensive renovation services. From kitchens and bathrooms to full home remodels.'
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Commercial Construction',
      description: 'Building quality commercial spaces that meet your business needs, timeline, and budget requirements.'
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From home building to handyman services, we provide comprehensive construction solutions with quality and integrity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary/20"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom service?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored solutions to meet your specific construction and maintenance needs.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us For Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
