/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

function Main({ isDarkMode }) {
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;

  return (
    <main>
      <form className="flex flex-col flex-grow items-center mt-40">
        <img src={logo} loading="eager" alt="logo" />
        <div className="searchbar">
          <SearchIcon className="h-5 mr-3 text-gray-500 dark:text-gray-400" />
          <input className="flex-grow focus:outline-none dark:bg-darkmode" type="text" />
          <MicrophoneIcon className="h-5 ml-3 cursor-pointer text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex space-x-3">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
        <div className="flex space-x-3 mt-7 text-sm">
          <p className="dark:text-gray-400">Google offered in:</p>
          <p className="text-blue-500 hover:underline cursor-pointer">বাংলা</p>
          <p className="text-blue-500 hover:underline cursor-pointer">हिन्दी</p>
          <p className="text-blue-500 hover:underline cursor-pointer">मराठी</p>
          <p className="text-blue-500 hover:underline cursor-pointer">français</p>
          <p className="text-blue-500 hover:underline cursor-pointer">español</p>
          <p className="text-blue-500 hover:underline cursor-pointer">日本語</p>
          <p className="text-blue-500 hover:underline cursor-pointer">Deutsche</p>
          <p className="text-blue-500 hover:underline cursor-pointer">português</p>
          <p className="text-blue-500 hover:underline cursor-pointer">русский</p>
        </div>
      </form>
    </main>
  );
}

export default Main;
