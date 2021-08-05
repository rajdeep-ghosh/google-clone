import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

function Seachbar({ searchRef, searchTerm }) {
  return (
    <div className="searchbar w-[95%]">
      <SearchIcon className="h-5 mr-3 text-gray-500 dark:text-gray-400" />
      <input
        ref={searchRef}
        className="flex-grow focus:outline-none dark:bg-darkmode transition-all"
        type="text"
        defaultValue={searchTerm}
      />
      <MicrophoneIcon className="h-5 ml-3 cursor-pointer text-gray-500 dark:text-gray-400" />
    </div>
  );
}

export default Seachbar;
