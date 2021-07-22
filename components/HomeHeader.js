import { ViewGridIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

function HomeHeader({ changeTheme, isDarkMode }) {
  return (
    <header className="flex justify-between items-center absolute top-0 p-5 w-full">
      <div className="flex space-x-6 items-center">
        <a
          href="https://chrome.google.com/webstore/"
          className="link hidden sm:block"
          rel="noreferrer"
        >
          Store
        </a>
      </div>
      <div className="flex space-x-6 items-center">
        <div onClick={changeTheme}>
          {isDarkMode ? <SunIcon className="h-6 cursor-pointer transition-all" /> : <MoonIcon className="h-6 cursor-pointer transition-all" />}
        </div>
        <p className="link hidden sm:block">Gmail</p>
        <p className="link hidden sm:block">Images</p>
        <ViewGridIcon className="h-6 cursor-pointer" />
        <Avatar />
      </div>
    </header>
  );
}

export default HomeHeader;
