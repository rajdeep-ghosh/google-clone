/* eslint-disable @next/next/no-img-element */

function Main({ isDarkMode }) {
  return (
    <main>
      <form>
        {isDarkMode ? (
          <img src="/googlelogo-light.png" loading="lazy" alt="logo" />
        ) : (
          <img src="/googlelogo-color.png" loading="lazy" alt="logo" />
        )}
      </form>
    </main>
  );
}

export default Main;
