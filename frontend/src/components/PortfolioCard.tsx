import React from 'react';
import { colourMap } from '../constants/colourMap';
import ImageSwipe from './ImageSwipe';

interface ChipListProps {
    list: string[];
}

interface CardProps {
    title: string;
    stack?: string[];
    tags: string[];
    description: string;
    colour?: string;
    images?: {src: string, alt: string}[];
}

const ChipList: React.FC<ChipListProps> = ({ list }) => {
    return list.map((chip) =>
        <span key={chip} className={`px-2 py-1 text-xs font-sans font-medium inset-ring ${colourMap[chip]}`}>{chip}</span>
    )
}

const PortfolioCard: React.FC<CardProps> = ({ title, stack, tags, colour="beige", description, images}) => {
    return (
        <div className='portfolio-card'>
            <div className={`card-foreground  border border-black flex flex-col p-4 space-y-2  bg-${colour}-500`}>
                <h2 className='font-mono text-2xl pb-2 font-bold'>{title}</h2>
                <ImageSwipe slides={images} colour={colour}/>
                <p className={'text-sm m-auto text-justify '+`text-${colour}-950`}>{description}</p>
                <div className='stack space-x-1 self-center mt-auto'>
                    <ChipList list={stack ? stack : []}></ChipList>
                </div>
            </div>
            <div className='card-shadow bg-black'></div>
        </div>
    );
};

export default PortfolioCard;