// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

interface ArrowButtonProps {
    onClick?: () => void;
    label?: string;
    direction_right: boolean;
    colour?: string;
    className?: string;
}

interface SlideProps {
    slides: { src: string, alt: string }[];
    colour: string;
}

// Buttons to move between images for each portfolio items
// TODO?: add disabled button style
const ArrowButton: React.FC<ArrowButtonProps> = (
    {
        onClick,
        label = "Next",
        direction_right = false,
        colour = "beige",
        className = "",
    }) => {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            className={`relative inline-flex items-center justify-center transition-transform duration-150 ease-out
            hover:scale-105 active:scale-95 min-w-5 w-1/5 aspect-1/4 ${direction_right ? "right-1" : "left-1 rotate-180"}
            ${className} `}
        >
            <svg
                viewBox="0 0 80 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className='cursor-pointer'
            >
                {/* Top triangle */}
                <polygon
                    points="0,0 80,160 0,160"
                    className={direction_right ? `fill-${colour}-500` : `fill-${colour}-800`}
                />
                {/* Bottom triangle */}
                <polygon
                    points="0,160 80,160 0,320"
                    className={direction_right ? `fill-${colour}-800` : `fill-${colour}-500`}
                />
            </svg>
        </button>
    );
};

// Image slideshow for portfolio items
export default ({ slides, colour="beige" }: SlideProps) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={`swipe-wrapper relative bg-${colour}-600 -mx-4 py-1.5 h-1/2 min-w-0`}>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <ArrowButton
                    label="Previous slide"
                    direction_right={false}
                    colour={colour}
                    onClick={() => swiperRef.current?.slidePrev()}
                />
            </div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={16}
                navigation={false}
                className='w-[83%] h-full'
                loop={true}
                loopAddBlankSlides={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}><img
                        src={slide.src}
                        alt={slide.alt}
                        className="max-w-full max-h-full object-contain m-auto"
                    /></SwiperSlide>
                ))}


            </Swiper>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <ArrowButton
                    label="Next slide"
                    direction_right={true}
                    colour={colour}
                    onClick={() => { swiperRef.current?.slideNext() }}
                />
            </div>
        </div>
    );
};