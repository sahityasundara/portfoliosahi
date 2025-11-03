import React from 'react';

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="relative flex items-center justify-center text-center px-4 py-32 lg:py-40">
      <div className="space-y-6 animate-fade-in-up" style={{ animationFillMode: 'forwards', opacity: 0 }}>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Naga Durga Sahithya Sundara
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 font-medium">
            Full Stack Developer
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-block bg-slate-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-slate-900 transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-slate-800/20"
          >
            View My Work
          </a>
          <a
            href="varahiammanproall.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-slate-500 text-slate-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;