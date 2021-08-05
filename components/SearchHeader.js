/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Seachbar from "./Seachbar";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function SearchHeader({ isDarkMode, changeTheme }) {
  const router = useRouter();
  const searchRef = useRef(null);
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;

  function search(e) {
    e.preventDefault();
    const searchQuery = searchRef.current.value;
    if (!searchQuery) return;
    router.push(`/search?query=${searchQuery}`);
  }

  return (
    <header className="sticky top-0 bg-white dark:bg-darkmode">
      <div className="relative flex flex-col sm:flex-row justify-between items-center w-full p-6">
        <img
          className="h-9 cursor-pointer"
          onClick={() => {router.push("/");}}
          src={logo}
          loading="eager"
          alt="logo"
        />
        <form className="sm:absolute sm:left-40 sm:-top-3 w-full">
          <Seachbar searchRef={searchRef} searchTerm={router.query.query} />
          <button onClick={search} type="submit" hidden>Search</button>
        </form>
        <div className="hidden sm:flex items-center space-x-6 z-10" onClick={changeTheme} >
          { isDarkMode ? <SunIcon className="h-6 cursor-pointer" /> : <MoonIcon className="h-6 cursor-pointer" /> }
          <Avatar />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
