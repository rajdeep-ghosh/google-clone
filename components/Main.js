/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { useRouter } from "next/router";
import Languages from "./Languages";
import Searchbar from "./Seachbar";

function Main({ isDarkMode }) {
  const router = useRouter();
  const searchRef = useRef(null);
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;
  const languages = ['বাংলা','हिन्दी','मराठी','français','español','日本語','Deutsche','português','русский'];

  function search(e) {
    e.preventDefault();
    const searchQuery = searchRef.current.value;
    if(!searchQuery) return;
    router.push(`/search?query=${searchQuery}`);
  }

  return (
    <main className="-mt-20">
      <form className="flex flex-col flex-grow items-center">
        <img className="h-16 sm:h-auto" src={logo} loading="eager" alt="logo" />
        <Searchbar searchRef={searchRef} />
        <div className="flex space-x-3">
          <button onClick={search} className="btn">Google Search</button>
          <a className="btn" href="https://google.com/doodles" rel="noreferrer">I'm Feeling Lucky</a>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-3 mt-7 text-xs sm:text-sm">
          <p className="dark:text-gray-400 pb-3">Google offered in:</p>
          <div className="flex flex-wrap justify-center items-center space-x-3">
            {languages.map(language => {
              return <Languages key={language} lang={language} />;
            })}
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
