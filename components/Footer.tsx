
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="container mx-auto text-center py-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Naga Durga Sahithya Sundara. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;