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
    horizontal: boolean;
    className?: string;
}

const ChipList: React.FC<ChipListProps> = ({ list }) => {
    return list.map((chip) =>
        <span key={chip} className={`rounded-full px-2 py-1 text-xs font-medium inset-ring ${colourMap[chip]}`}>{chip}</span>
    )
}

const PortfolioCard: React.FC<CardProps> = ({ title, stack, tags, description, imageURLs, horizontal, className = '' }) => {
    let images = imageURLs ? imageURLs[0] : "";
    // let direction = horizontal ? "w" : "h";

    return (
        <div className={`portfolio-card-${horizontal ? "w" : "h"} bg-stone-50 rounded-2xl shadow-sm text-black m-10 flex flex-row" ${className}`}>
            <div className='left-card w-[60%] flex flex-col'>
                <div className="bg-orange-400 rounded-tl-2xl border-b border-black py-2">
                    <h3 className="text-4xl font-bold ml-5">{title}</h3>
                    <div className='tagWrapper mx-2 mt-0 mb-4 space-y-2'>
                        <div className='stack space-x-1'>
                            {/* <span className='code font-bold'>Tech Stack:</span> */}
                            <ChipList list={stack ? stack : []}></ChipList>
                        </div>
                        {/* <div className='tags space-x-1'>
                        <span className='code'>Other Tags:</span>
                        <ChipList list={tags}></ChipList>
                    </div> */}
                    </div>
                </div>

                <div className="flex bg-stone-200">
                        <img
                            src={images}
                            alt="Content"
                            className={`${horizontal ? "h-64" : "w-full"} self-center object-cover rounded-2xl border border-black`}
                        />
                    </div>
            </div>
            <div className='content p-5 flex-1'>
                <div className={`gap-6 flex flex-${horizontal ? "row" : "col"}`}>
                    {/* Image Placeholder */}
                    {/* <div className="shrink-0">
                        <img
                            src={images}
                            alt="Content"
                            className={`${horizontal ? "h-64" : "w-full"} object-cover rounded-2xl border border-black`}
                        />
                    </div> */}

                    {/* Description */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h4 className='text-neutral-600 mt-8 mb-4'>About</h4>
                        <p className=" text-gray-900 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;