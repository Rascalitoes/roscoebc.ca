// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import salesTracker1 from './assets/salestracker1.png'
import screen1 from './assets/screen1.png'
import screen2 from './assets/screen2.png'

import PortfolioCard from './components/PortfolioCard';
import Cloud from './components/Cloud';
import { PerspectiveGrid } from './components/PerspectiveGrid';

import React, { useEffect, useRef } from 'react';

import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Add the class/id when the component mounts
    document.body.classList.add('gradient-bg');
    // 2. Clean up function: removes it when the component unmounts
    return () => {
      document.body.classList.remove('gradient-bg');
    };
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      if (containerRef.current) {
        // 1. Calculate the scroll value exactly ONCE
        const scrollAmount = window.scrollY;
        // 2. Set it as a CSS variable on the parent container
        containerRef.current.style.setProperty('--scroll-y', `${scrollAmount}px`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div id='clouds' ref={containerRef}>
      {/* Top-left clouds */}
      <Cloud speed={0.5} className="top-12 left-[8%] scale-110" />
      <Cloud speed={0.5} className="top-50 left-[21%] z-0" />
      <Cloud speed={0.8} className="top-100 left-[2%] scale-125 z-0" />

      {/* Top-right clouds */}
      <Cloud speed={-0.5} className="top-16 right-[15%] scale-125" />

      {/* Middle cloud */}
      <Cloud speed={-0.1} className="top-90 right-[40%] scale-125" />

      {/* Bottom clouds */}
      <Cloud speed={0.5} className="bottom-24 left-[8%] scale-95 z-0" />
      <Cloud speed={-0.5} className="bottom-50 right-[9%] scale-125" />
      </div>

      <div id="splash-header" className='flex flex-col h-screen overflow-clip'>
        <div id="portfolio-sun" className="relative mt-auto z-10 mx-auto sm:rounded-t-full sm:rounded-b-none rounded-full flex items-end justify-center border-t border-x border-black/80">
          <h1 className="text-black font-sans font-medium tracking-wide select-none">
            PORTFOLIO
          </h1>
        </div>
        <hr className='border-black border-8 z-2' />
      </div>



      <div id='bento-grid' className='px-10 pt-20'>
        <PerspectiveGrid />
        <PortfolioCard
          title="Sales Tracker"
          description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
          stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify", "Auth0"]}
          tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
          images={[
            { src: salesTracker1, alt: "Alternate text" },
            { src: screen1, alt: "Alternate text" },
            { src: screen2, alt: "Alternate text" },
          ]}
          colour="beige"
        ></PortfolioCard>
        <PortfolioCard
          title="Sales Tracker"
          description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
          stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify", "Auth0"]}
          tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
          images={[
            { src: salesTracker1, alt: "Alternate text" },
            { src: screen1, alt: "Alternate text" },
            { src: screen2, alt: "Alternate text" },
          ]}
          colour="teal"
        ></PortfolioCard>
        <PortfolioCard
          title="Sales Tracker"
          description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
          stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify", "Auth0"]}
          tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
          images={[
            { src: salesTracker1, alt: "Alternate text" },
            { src: screen1, alt: "Alternate text" },
            { src: screen2, alt: "Alternate text" },
          ]}
          colour="salmon"
        ></PortfolioCard>
        <PortfolioCard
          title="Sales Tracker"
          description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
          stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify", "Auth0"]}
          tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
          images={[
            { src: salesTracker1, alt: "Alternate text" },
            { src: screen1, alt: "Alternate text" },
            { src: screen2, alt: "Alternate text" },
          ]}
          colour="auburn"
        ></PortfolioCard>
        <PortfolioCard
          title="Sales Tracker"
          description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
          stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify", "Auth0"]}
          tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
          images={[
            { src: salesTracker1, alt: "Alternate text" },
            { src: screen1, alt: "Alternate text" },
            { src: screen2, alt: "Alternate text" },
          ]}
          colour="cerulean"
        ></PortfolioCard>
      </div> {/* End of root */}
    </>
  )
}

export default App
