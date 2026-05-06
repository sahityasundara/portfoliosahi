import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">My Skills</h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg text-slate-500">Technologies I love to work with.</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-lg flex flex-col items-center
                         transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl border border-slate-200 text-center"
            >
              <i className={`${category.icon} text-3xl sm:text-4xl text-slate-600 mb-4 sm:mb-6`}></i>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{category.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{category.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;