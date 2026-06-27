import React, { useEffect, useRef } from 'react';

interface CloudProps {
    speed: number;
    className?: string;
}

const Cloud: React.FC<CloudProps> = ({ speed = 0.5, className = '' }) => {
//       const boxRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = (): void => {
//       // The optional chaining (?.) handles the TypeScript null check automatically
//       if (boxRef.current) {
//         const scrollAmount = window.scrollY * (moveLeft ? -1 : 1);
//         const translateX = scrollAmount * speed; // Adjust speed multiplier here

//         boxRef.current.style.transform = `translateX(${translateX}px)`;
//       }
//     };

//     // Add the listener when the component mounts
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     // React clean-up function: Prevents memory leaks when navigating away
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

    return (
        <svg style={{ transform: `translateX(calc(var(--scroll-y, 0px) * ${speed}))` }} className={`cloud absolute ${className}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="250px" height="60px" viewBox="-0.5 -0.5 250 60">
            <g>
                <path d="M 0 60 L 125 50 L 250 60 Z" fill="rgb(255, 255, 255)" stroke="none" pointer-events="none" />
                <ellipse cx="90" cy="40" rx="20" ry="20" fill="rgb(255, 255, 255)" stroke="none" pointer-events="none" />
                <path d="M 40 40 C 40 51.05 48.95 60 60 60 C 71.05 60 80 51.05 80 40 Z" fill="rgb(255, 255, 255)" stroke="none" transform="translate(0,50)scale(1,-1)translate(0,-50)" pointer-events="none" />
                <ellipse cx="120" cy="30" rx="30" ry="30" fill="rgb(255, 255, 255)" stroke="none" pointer-events="none" />
                <path d="M 130 30 C 130 46.57 143.43 60 160 60 C 176.57 60 190 46.57 190 30 Z" fill="rgb(255, 255, 255)" stroke="none" transform="translate(0,45)scale(1,-1)translate(0,-45)" pointer-events="none" />
            </g>
        </svg>
    );
};

export default Cloud;