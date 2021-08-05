/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Pagination() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 dark:text-blue-400 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?query=${router.query.query}&start=${startIndex - 10}`}>
          <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?query=${router.query.query}&start=${startIndex + 10}`}>
        <div className="flex flex-col flex-grow items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Pagination;
