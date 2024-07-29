import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'bottom';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, direction = 'bottom' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationClass =
    direction === 'bottom' ?
      'animate-fadeInUp' :
    direction === 'left' ?
      'animate-fadeInLeft' : 'animate-fadeInRight'

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        inView ? `${animationClass} delay-${delay}` : 'translate-y-60 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
