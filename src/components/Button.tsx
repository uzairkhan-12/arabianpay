import React, { ReactNode } from 'react';
import { ButtonProps } from '../../shared.interface';

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-full shadow-lg transition-all';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary',
    secondary: 'w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-md',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;