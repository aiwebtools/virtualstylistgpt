
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-cyberpunk-gradient relative flex items-center justify-center overflow-hidden group">
          {/* Animated background effects */}
          <div className="absolute inset-0 bg-cyberpunk-gradient opacity-70 animate-rotate-slow"></div>
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
          
          {/* Stylized VS hologram effect */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <span className="text-white font-bold text-sm absolute blur-[1px] opacity-80" style={{transform: 'translateY(-1px)'}}>VS</span>
            <span className="text-white font-bold text-sm absolute blur-[0.5px] opacity-90" style={{transform: 'translateX(1px)'}}>VS</span>
            <span className="text-white font-bold text-sm absolute">VS</span>
            <span className="text-white font-bold text-sm absolute blur-[0.5px] opacity-90" style={{transform: 'translateX(-1px)'}}>VS</span>
            <span className="text-cyan-400 font-bold text-sm absolute blur-[1px] opacity-40 animate-pulse">VS</span>
          </div>
          
          {/* Circular light ring */}
          <div className="absolute inset-0 border border-white/30 rounded-full"></div>
          <div className="absolute inset-[2px] border border-white/10 rounded-full"></div>
        </div>
        <h1 className="text-xl font-heading font-bold bg-clip-text text-transparent bg-cyberpunk-gradient">
          Virtual Stylist GPT
        </h1>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">Presented by AiWebTools.Ai</p>
    </div>
  );
};

export default Logo;
