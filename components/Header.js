import { ViewGridIcon, SunIcon, MoonIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

function Header({ changeTheme, isDarkMode }) {
  return (
    <header className="flex justify-between items-center p-5 w-full">
      <div className="flex space-x-6 items-center">
        <p className="cursor-pointer hover:underline hover:text-gray-900 dark:hover:text-white">About</p>
        <p className="cursor-pointer hover:underline hover:text-gray-900 dark:hover:text-white">Store</p>
      </div>
      <div className="flex space-x-6 items-center">
        <div onClick={changeTheme}>
          {isDarkMode ? <SunIcon className="h-6 cursor-pointer" /> : <MoonIcon className="h-6 cursor-pointer" />}
        </div>
        <p className="cursor-pointer hover:underline hover:text-gray-900 dark:hover:text-white">Gmail</p>
        <p className="cursor-pointer hover:underline hover:text-gray-900 dark:hover:text-white">Images</p>
        <ViewGridIcon className="h-6 cursor-pointer" />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
