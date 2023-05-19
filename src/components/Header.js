import React from 'react';
import {
  Link
  } from "react-router-dom";


const Header = ({ handleToggleDarkMode }) => {
	return (
		<>
		<header className="bg-grey">
    
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link to="/" className="-m-1.5 p-1.5">
        <span className="sr-only">TailoNotes</span>
        <b>TailoNotes</b>
      </Link>
    </div>
    <div className="hidden lg:flex lg:gap-x-12" >
      <Link className="text-sm font-semibold leading-6 text-red-700" to="/">Home</Link>
      <Link className="text-sm font-semibold leading-6 text-red-700" to="/about">About</Link>
    </div>
    <button type="button" className="save"
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
			>
				Change Theme
			</button>
  </nav>

  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">TailoNotes</span>
          <h1>TailoNotes</h1>
        </a>

      </div>
    </div>
  </div>
</header>
		</>
	);
};

export default Header;
