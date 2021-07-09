function Footer() {
  return (
    <footer className="flex flex-col px-8 py-3 w-full text-sm text-gray-500 dark:text-gray-400 divide-y-[1px] divide-gray-300 dark:divide-gray-800 bg-gray-100 dark:bg-[#171717]">
      <div className="mb-3">
          <p>India</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-5 mt-3">
              <a href="https://about.google/" target="_blank" rel="noreferrer">About</a>
              <a href="https://www.google.com/services/" target="_blank" rel="noreferrer">Business</a>
              <a href="https://google.com/search/howsearchworks/" target="_blank" rel="noreferrer">How Search Works</a>
          </div>
          <div className="flex space-x-5 mt-3">
              <a href="https://policies.google.com/privacy?hl=en-IN&fg=1" target="_blank" rel="noreferrer">Privacy</a>
              <a href="https://policies.google.com/terms?hl=en-IN&fg=1" target="_blank" rel="noreferrer">Terms</a>
              <p>Settings</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
