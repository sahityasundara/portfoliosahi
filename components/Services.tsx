import React from 'react';

const services = [
    {
        title: 'Full Stack Development',
        description: 'Full-stack web development including frontend (HTML, CSS, JavaScript) and backend services',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Machine Learning',
        description: 'ML models and data analysis',
        icon: 'fas fa-brain'
    }
];

const Services: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">My Services</h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg text-slate-500">What I can offer.</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 sm:p-8 rounded-lg flex flex-col items-center text-center space-y-4 transition-transform duration-300 transform hover:-translate-y-2 hover:bg-white shadow-lg border border-slate-200">
            <i className={`${service.icon} text-3xl sm:text-4xl text-slate-600`}></i>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{service.title}</h3>
            <p className="text-sm sm:text-base text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;