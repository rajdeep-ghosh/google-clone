/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { useRouter } from "next/router";
import { MoonIcon } from "@heroicons/react/solid";
import Seachbar from "./Seachbar";
import Avatar from "./Avatar";

function SearchHeader() {
  const router = useRouter();
  const searchRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const searchQuery = searchRef.current.value;
    if (!searchQuery) return;
    router.push(`/search?query=${searchQuery}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="relative flex justify-between items-center w-full p-6">
        <img
          className="h-9 cursor-pointer"
          onClick={() => {router.push("/");}}
          src="/logo/googlelogo-color.png"
          loading="eager"
          alt="logo"
        />
        <form className="absolute left-40 -top-3 w-full">
          <Seachbar searchRef={searchRef} />
          <button onClick={search} hidden>Search</button>
        </form>
        <div className="flex items-center space-x-6 z-10">
          <MoonIcon className="h-6 cursor-pointer" />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default SearchHeader;
