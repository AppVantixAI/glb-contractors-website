import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: 'Quality',
      description: 'We never compromise on quality, using only the best materials and proven construction methods.'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Integrity',
      description: 'Honest communication and transparent pricing are the foundation of our business relationships.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Community',
      description: 'We are committed to strengthening the communities we serve through our work and involvement.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Reliability',
      description: 'We deliver projects on time and on budget, respecting your timeline and investment.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="GLB Contractors team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <span className="text-3xl font-bold text-primary">15+</span>
                  </div>
                  <p className="text-gray-700 font-medium">Years of Excellence in Construction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title">About GLB Contractors</h2>
            <p className="text-gray-600 mb-6">
              Founded over 15 years ago, GLB Contractors has grown from a small residential builder to a comprehensive construction company serving both residential and commercial clients. Our mission is to provide quality construction services while supporting and developing the communities we serve.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our unique combination of professional expertise and community values. We believe that every project we complete should not only meet the highest standards of craftsmanship but also contribute positively to the neighborhood and community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
