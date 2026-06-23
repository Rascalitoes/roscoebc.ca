import React from 'react';
import { colourMap } from '../constants/colourMap';

interface ChipListProps {
    list: string[];
}

interface CardProps {
    title: string;
    stack?: string[];
    tags: string[];
    description: string;
    imageURLs?: string[];
    className?: string;
}

const ChipList: React.FC<ChipListProps> = ({ list }) => {
    return list.map((chip) =>
        <span key={chip} className={`px-2 py-1 text-xs font-sans font-medium inset-ring ${colourMap[chip]}`}>{chip}</span>
    )
}

const PortfolioCard: React.FC<CardProps> = ({ title, stack, tags, description, imageURLs, className = '' }) => {
    let images = imageURLs ? imageURLs[0] : "";

    return (
        <div className='portfolio-card'>
            <div className='card-foreground bg-white border border-black flex flex-col p-4 space-y-2'>
                <h2 className='font-mono text-2xl pb-2'>Project Title</h2>
                <img src={images} className='border'></img>
                <p className='text-sm m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore.</p>
                <div className='stack space-x-1 self-center mt-auto'>
                    <ChipList list={stack ? stack : []}></ChipList>
                </div>
            </div>
            <div className='card-shadow bg-black'></div>
        </div>
    );
};

export default PortfolioCard;