import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "flex items-center font-serif cursor-pointer", 
        className
      )}
      onClick={onClick}
    >
      <span className={cn(
        "text-2xl font-bold",
        {
          "text-white": variant === 'light',
          "text-gray-900": variant === 'dark'
        }
      )}>
        <span className={cn(
          "font-bold",
          variant === 'light' ? "text-turquoise-400" : "text-turquoise-600"
        )}>
          Prozess
        </span>
        Express
      </span>
    </div>
  );
}; 