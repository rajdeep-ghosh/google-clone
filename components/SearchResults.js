function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-9 sm:pl-[8%] md:pl-[14%] lg:pl-[180px]">
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default SearchResults;
