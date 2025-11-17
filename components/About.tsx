
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">About Me</h2>
        <p className="mt-4 text-lg text-slate-500">A little bit about my journey and passion.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        <div className="flex-shrink-0">
          <div className="relative group w-48 h-48 md:w-64 md:h-64">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-slate-400 to-slate-800 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse group-hover:animate-none"></div>
            <img 
              src="/profileimg.jpg" 
              alt="Naga Durga Sahithya Sundara" 
              className="relative w-full h-full rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-lg space-y-4 text-slate-600 text-center md:text-left">
          <p>
            I am a passionate Full Stack Developer, Frontend Developer and Machine Learning Engineer with a strong foundation in both web development and data science.
          </p>
          <p>
            With expertise in various programming languages and frameworks, I strive to create innovative solutions that make a difference. My journey in technology has equipped me with the skills to handle complex projects, from web applications to machine learning models.
          </p>
          <p>
            I believe in continuous learning and staying updated with the latest technological advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;