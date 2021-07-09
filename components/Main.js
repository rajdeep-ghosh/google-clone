/* eslint-disable @next/next/no-img-element */

function Main({ isDarkMode }) {
  const logo = `/logo/googlelogo-${isDarkMode ? `light` : `color`}.png`;

  return (
    <main>
      <form>
        <img src={logo} loading="eager" alt="logo" />
      </form>
    </main>
  );
}

export default Main;
