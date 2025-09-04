"use client";

import { useRef, useEffect } from 'react';
import { Button } from '@heroui/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'ghost' | 'bordered';
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  size = 'lg',
  variant = 'solid',
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = deltaX * strength * 0.3;
        const moveY = deltaY * strength * 0.3;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`;
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    };

    const handleClick = () => {
      button.style.transform = 'translate(0px, 0px) scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'translate(0px, 0px) scale(1)';
      }, 150);
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  const baseClasses = "magnetic transition-all duration-300 ease-out will-change-transform";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button
          ref={buttonRef}
          size={size}
          variant={variant}
          className={combinedClasses}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Button
      ref={buttonRef}
      size={size}
      variant={variant}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}