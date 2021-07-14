import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results - Google Clone Search</title>
        <meta name="description" content="Google Clone built using NEXT.JS and Tailwind CSS" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>

      <SearchHeader />
    </div>
  );
}

export default Search;
