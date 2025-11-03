import React, { useState } from 'react';

interface PaperDoorsProps {
  onEnter: () => void;
}

const Particles: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-1 h-1">
            {Array.from({ length: 30 }).map((_, i) => {
                const angle = Math.random() * 360;
                const radius = Math.random() * 120 + 40;
                const x = Math.cos(angle * (Math.PI / 180)) * radius;
                const y = Math.sin(angle * (Math.PI / 180)) * radius;
                const duration = Math.random() * 0.6 + 0.4;
                const delay = Math.random() * 0.1;

                return (
                    <div
                        key={i}
                        className="absolute bg-gradient-to-br from-slate-600 to-slate-900 rounded-full animate-particle-explode"
                        style={{
                            width: `${Math.random() * 8 + 3}px`,
                            height: `${Math.random() * 8 + 3}px`,
                            // @ts-ignore
                            '--x': `${x}px`,
                            '--y': `${y}px`,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    </div>
);

const TechOrnament = ({ reversed }: { reversed?: boolean }) => (
    <div className={`flex items-center space-x-4 opacity-0 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:forwards] ${reversed ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className="w-32 h-px bg-gradient-to-r from-transparent to-slate-400/50"></div>
        <div className="w-3 h-3 rounded-full bg-slate-400 animate-pulse"></div>
    </div>
);


const PaperDoors: React.FC<PaperDoorsProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleEnterClick = () => {
    if (isExploding) return; // Prevent re-triggering

    setIsExploding(true);
    
    setTimeout(() => {
        setShowWelcome(true);
    }, 200);

    setTimeout(() => {
        setIsOpening(true);
    }, 1000);

    setTimeout(onEnter, 2500); // 1000ms delay + 1500ms door animation
  };

  const doorBaseStyles = 'absolute top-0 w-1/2 h-full bg-white transition-transform duration-[1500ms] ease-in-out';
  
  return (
    <div 
        style={{ perspective: '1200px' }} 
        className="fixed inset-0 z-[10000] bg-slate-100 overflow-hidden cursor-pointer"
        onClick={handleEnterClick}
    >
      {/* Left Door */}
      <div
        className={`${doorBaseStyles} left-0 origin-left border-r-2 border-slate-200/50 ${isOpening ? 'animate-door-open-left' : ''}`}
      >
      </div>
      
      {/* Right Door */}
      <div
        className={`${doorBaseStyles} right-0 origin-right border-l-2 border-slate-200/50 ${isOpening ? 'animate-door-open-right' : ''}`}
      >
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {isExploding ? (
          <>
            <Particles />
            {showWelcome && (
              <div className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards]">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-widest uppercase animate-glow text-slate-800">
                  Welcome
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center">
            <TechOrnament reversed />
            <div className="text-center mx-8">
                <div className="opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
                  <p className="mb-4 text-4xl md:text-5xl font-bold font-mono tracking-widest uppercase animate-glow text-slate-800">
                    No push or pull, just knock
                  </p>
                </div>
            </div>
            <TechOrnament />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaperDoors;
