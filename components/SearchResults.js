import Pagination from "./Pagination";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-9 sm:pl-[8%] md:pl-[14%] lg:pl-[180px]">
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 mb-4">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div key={result.link} className="max-w-xl mb-8 dark:text-gray-300">
            <div className="group">
              <a className="text-sm" href={result.link} target="_blank" rel="noreferrer">
                <p className="truncate">{result.formattedUrl}</p>
              </a>
              <a href={result.link} target="_blank" rel="noreferrer">
                <h1 className="truncate text-lg font-medium text-blue-800 dark:text-blue-400 group-hover:underline">
                  {result.title}
                </h1>
              </a>
            </div>
            <p className="text-sm line-clamp-2">{result?.snippet}</p>
          </div>
        );
      })}

      <Pagination />
    </div>
  );
}

export default SearchResults;
