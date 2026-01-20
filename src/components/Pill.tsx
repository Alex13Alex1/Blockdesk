import React from 'react';

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export const Pill: React.FC<PillProps> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border ${className}`}>
    {children}
  </span>
);
