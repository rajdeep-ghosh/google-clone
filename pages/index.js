import { useState } from "react";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  function handleTheme() {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    setDarkMode(!isDarkMode);
  }

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone built using NEXT.JS and Tailwind CSS" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>

      <div className="flex flex-col justify-center items-center relative h-screen">
        <HomeHeader changeTheme={handleTheme} isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
        <Footer />
      </div>
    </div>
  );
}
