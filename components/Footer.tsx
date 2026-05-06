
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 mt-16 sm:mt-20">
      <div className="w-full max-w-7xl mx-auto text-center py-6 sm:py-8 px-4">
        <p className="text-slate-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Naga Durga Sahithya Sundara. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;