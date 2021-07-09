/* eslint-disable @next/next/no-img-element */
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

function Main({ isDarkMode }) {
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;

  return (
    <main>
      <form>
        <img src={logo} loading="eager" alt="logo" />
        <div className="searchbar">
          <SearchIcon className="h-5 mr-3 text-gray-500 dark:text-gray-400" />
          <input className="flex-grow focus:outline-none dark:bg-darkmode" type="text" />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500 dark:text-gray-400" />
        </div>
      </form>
    </main>
  );
}

export default Main;
