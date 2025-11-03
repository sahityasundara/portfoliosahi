
import React from 'react';
import { NAV_LINKS } from '../constants';

interface NavTrailProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NavTrail: React.FC<NavTrailProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 h-full flex items-center z-40 mr-2 md:mr-5 pointer-events-none">
      <div className="flex flex-col items-center justify-center gap-4">
        {NAV_LINKS.map(link => (
          <div key={link.name} className="relative group flex items-center pointer-events-auto">
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.href.substring(1));
              }}
              className={`
                w-3 h-3 rounded-full bg-slate-400
                transition-all duration-300 ease-in-out
                hover:bg-slate-800 hover:scale-150
                ${activeSection === link.href.substring(1) ? 'scale-[1.75] bg-slate-800 shadow-[0_0_10px_2px_#334155]' : ''}
              `}
              aria-label={`Go to ${link.name} section`}
            />
            <span className="absolute right-full mr-4 px-3 py-1 bg-white text-slate-800 text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-200">
              {link.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTrail;