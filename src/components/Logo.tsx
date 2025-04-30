
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-cyberpunk-gradient animate-pulse-glow flex items-center justify-center">
          <span className="text-white font-bold text-xl">VS</span>
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
