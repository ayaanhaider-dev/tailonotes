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
</header>
		</>
	);
};

export default Header;
