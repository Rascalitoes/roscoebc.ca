// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import salesTracker1 from './assets/salestracker1.png'

import PortfolioCard from './components/PortfolioCard';
// import Card from './components/Card';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div> */}

      {/* <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section> */}

        <div id='bento-grid'>
      <PortfolioCard
        title="Sales Tracker"
        description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
        stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify"]}
        tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
        imageURLs={[salesTracker1]}
        horizontal={true}
      ></PortfolioCard>

      <PortfolioCard
        title="Sales Tracker"
        description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
        stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify"]}
        tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
        imageURLs={[salesTracker1]}
        horizontal={false}
      ></PortfolioCard>
      <PortfolioCard
        title="Sales Tracker"
        description="What began as a 2-month experiment evolved into a full multi-user web application over 2.5 years.
        This project reverse-engineered APIs from different grocery stores to create a database of all their prices. When
        items would go on sale, an email could be sent to different user accounts, which were all set up with their own
        logins."
        stack={["NodeJS", "JS", "PugJS", "MongoDB", "AWS", "Apify"]}
        tags={["Web", "Fullstack", "Frontend", "Backend", "APIs", "Git"]}
        imageURLs={[salesTracker1]}
        horizontal={true}
      ></PortfolioCard>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
