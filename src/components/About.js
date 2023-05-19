import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';

const About = () => {

	const [darkMode, setDarkMode] = useState(false);

	return (
		<>
			<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
            <Header handleToggleDarkMode={setDarkMode} />
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<p className="text-center"><strong>Welcome To TailoNotes</strong></p>
			<p className="text-center">TailoNotes is a Professional Notes Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Notes, with a focus on dependability and Your notes on cloud. We hope you enjoy our Notes as much as we enjoy offering them to you.</p>
			<br></br>
			<h1 className="text-center">Thanks For Visiting <strong>TailoNotes</strong></h1>
			<Footer />
			</div>
			</div>
		</>
	);
};

export default About;