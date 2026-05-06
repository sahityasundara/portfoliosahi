
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-transform duration-300 transform hover:scale-110">
        {children}
    </a>
);

const Contact: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-20 md:py-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Contact Me</h2>
        <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500">
          Have Questions? Feel free to reach out if you have any questions about my services or would like to discuss a potential project.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500 flex-shrink-0 mx-auto sm:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-base sm:text-lg text-slate-700 text-center sm:text-left">sundarasahitya@gmail.com</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500 flex-shrink-0 mx-auto sm:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-base sm:text-lg text-slate-700 text-center sm:text-left">+91 9640627227</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500 flex-shrink-0 mx-auto sm:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-base sm:text-lg text-slate-700 text-center sm:text-left">Akividu, Andhra Pradesh</span>
            </div>
             <div className="flex justify-center sm:justify-start space-x-6 pt-4 sm:pt-6">
                {SOCIAL_LINKS.github && SOCIAL_LINKS.github !== '#' && (
                    <SocialIcon href={SOCIAL_LINKS.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </SocialIcon>
                )}
                {SOCIAL_LINKS.linkedin && SOCIAL_LINKS.linkedin !== '#' && (
                    <SocialIcon href={SOCIAL_LINKS.linkedin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </SocialIcon>
                )}
            </div>
        </div>
         <form action="https://formspree.io/f/xpwpyoer" method="POST" className="w-full space-y-4 bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-slate-200">
            <div>
                <input type="text" name="name" placeholder="Your Name" required className="w-full bg-slate-100 border border-slate-300 rounded-md py-3 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"/>
            </div>
            <div>
                <input type="email" name="email" placeholder="Your Email" required className="w-full bg-slate-100 border border-slate-300 rounded-md py-3 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"/>
            </div>
            <div>
                <textarea name="message" placeholder="Your Message" rows={4} required className="w-full bg-slate-100 border border-slate-300 rounded-md py-3 px-4 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-slate-900 transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-slate-800/20">
                Send Message
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;