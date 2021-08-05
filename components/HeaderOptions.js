import HeaderOption from "./HeaderOption";
import {
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex justify-evenly lg:justify-start lg:space-x-36 lg:pl-[180px] -mt-1 sm:mt-4 w-full text-sm dark:text-gray-400 border-b dark:border-gray-500">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
