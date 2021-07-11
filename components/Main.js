/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Languages from "./Languages";

function Main({ isDarkMode }) {
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;
  const languages = ['বাংলা','हिन्दी','मराठी','français','español','日本語','Deutsche','português','русский'];

  return (
    <main className="-mt-20">
      <form className="flex flex-col flex-grow items-center">
        <img className="h-16 sm:h-auto" src={logo} loading="eager" alt="logo" />
        <div className="searchbar w-[95%]">
          <SearchIcon className="h-5 mr-3 text-gray-500 dark:text-gray-400" />
          <input className="flex-grow focus:outline-none dark:bg-darkmode" type="text" />
          <MicrophoneIcon className="h-5 ml-3 cursor-pointer text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex space-x-3">
          <button className="btn">Google Search</button>
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
