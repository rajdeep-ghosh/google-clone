import { useState } from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import dummyResponse from "../dummyResponse";

function Search({ results }) {
  console.log(results);
  const [isDarkMode, setDarkMode] = useState(document.querySelector("html").classList.contains("dark"));

  function handleTheme() {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    setDarkMode(!isDarkMode);
  }

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

      <SearchHeader isDarkMode={isDarkMode} changeTheme={handleTheme} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const API_KEY = process.env.SEARCH_API_KEY;
  const CX_KEY = process.env.CONTEXT_KEY;
  const useDummyData = true;

  const data = useDummyData 
  ? dummyResponse 
  : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_KEY}&q=${context.query.query}`
  ).then(response => response.json());

  return {
    props: {
      results: data,
    },
  };
}
