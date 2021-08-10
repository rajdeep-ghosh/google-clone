function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer absolute bottom-0">
      <div className="mb-2">
        <p>India</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex space-x-5 mt-2">
          <a className="hover:underline" href="https://about.google/" target="_blank" rel="noreferrer">About</a>
          <a className="hover:underline" href="https://www.google.com/services/" target="_blank" rel="noreferrer">Business</a>
          <a className="hover:underline" href="https://google.com/search/howsearchworks/" target="_blank" rel="noreferrer">How Search Works</a>
        </div>
        <div className="flex space-x-5 mt-2">
          <a className="hover:underline" href="https://policies.google.com/privacy?hl=en-IN&fg=1" target="_blank" rel="noreferrer">Privacy</a>
          <a className="hover:underline" href="https://policies.google.com/terms?hl=en-IN&fg=1" target="_blank" rel="noreferrer">Terms</a>
          <p className="hover:underline cursor-pointer">Settings</p>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <p className="mt-2">
          &copy; Rajdeep Ghosh {year} |&nbsp;
          <a href="https://github.com/rajdeep-ghosh/google-clone/" target="_blank" rel="noreferrer">GitHub</a>
          &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/rajdeepghosh01/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
