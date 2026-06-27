import React from 'react';

interface PerspectiveGridProps {
    gridColor?: string;
    gridSize?: string;
}

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({
    gridColor = 'rgba(147, 51, 234, 0.3)', // Default: Faint Purple
    gridSize = '40px'
}) => {
    return (
        <div
            className="absolute w-full h-full perspective-origin-top top-0 overflow-clip"
            style={{
                perspective: '500px',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
        >
            {/* The Grid */}
            <div
                className="absolute w-full h-full origin-top"
                style={{
                    transform: 'rotateX(60deg)',
                    backgroundImage: `
              linear-gradient(to right, ${gridColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
            `,
                    backgroundSize: `30px 20px`,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'

                }}
            />
        </div>
    );
};